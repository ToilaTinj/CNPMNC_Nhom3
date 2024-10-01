import { Container, Row, Col } from "react-bootstrap";
import { Card } from '../../components/Card';
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductByPageRequest, filterProductByPrice } from "../../actions/actionProducts";
import { Loader } from '../../components/Loader';
import { useHistory } from "react-router-dom";
export const BookStore = () => {
    const history = useHistory();
    const isLoading = useSelector(state => state.loading.loadingbs);
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productByPage);
    const [paginate, setPaginate] = useState({
        page: 1,
        limit: 9
    });
    const isEmptyObject = (obj) => {
        if (!obj) obj = {};
        return Object.keys(obj).length === 0;
    }
    useEffect(() => {
        window.scrollTo({
            top: 300,
            behavior: "smooth",
        });
        if (isEmptyObject(history.location.state)) {
            fetchProductByPageRequest(dispatch, paginate);
        }
    }, [paginate])
    useEffect(() => {
        if (history.location.state && history.location.state.status) {
            let state = { ...history.location.state };
            delete state.status;
            history.replace({ ...history.location, state });
        }
    }, [history.location]);
    return (
        <div className="book-store_wrap">
            {isLoading ? "" : <Loader />}
            <Container>
                <Row>
                    <Col lg={8} md={12} xs={12} xl={9}>
                        <Row>
                            {products.map(product => {
                                return (
                                    <Col
                                        xl={4}
                                        lg={6}
                                        md={6}
                                        key={product._id} >
                                        <Card product={product} />
                                    </Col>
                                )
                            })}                          
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}