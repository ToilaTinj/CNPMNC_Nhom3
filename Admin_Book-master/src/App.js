
import './css/sb-admin-2.css';
import React, { useEffect } from "react";
import ListProductPage from './pages/product/ListProductPage';
import { PrivateRoute } from './helpers/PrivateRouter';
import { ToastContainer } from 'react-toastify';
import { URL_API } from './constants/config';
import NotFound from './components/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setUser } from './action/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';
import Common from './pages/common/Common';
import axios from 'axios';
import EditProductPage from './pages/product/EditProductPage';
import CategoryProductPage from './pages/product/CategoryProductPage';
import TypePage from './pages/product/TypePage';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        async function getCurrentUser() {
            const token = sessionStorage.getItem('token') || null;
            if (token !== null) {
                axios({
                    method: "get",
                    url: `${URL_API}/auth/`,
                    headers: { "Authorization": `Bearer ${token}` }
                })
                    .then(res => res.data)
                    .then(data => {
                        dispatch(setUser(data.user));
                    })
            }
        }
        getCurrentUser();
    }, [])
    return (
        <Router>
            <Switch>
                <Route path="/login" exact>
                    <AuthPage />
                </Route>
                <PrivateRoute path="/" exact />
                {/* Product */}
                <PrivateRoute path="/product/list" exact component={ListProductPage} layout={Common} />
                <PrivateRoute path="/product/edit/:productID" component={EditProductPage} layout={Common} />
                <PrivateRoute path="/product/category" component={CategoryProductPage} layout={Common} exact />
                <PrivateRoute path="/product/type" component={TypePage} layout={Common} />
                {/* Users */}
                {/* Blog */}
              
                <Route path="*" exact component={NotFound}></Route>
            </Switch>
            <ToastContainer />
        </Router>
    );
}

export default App;
