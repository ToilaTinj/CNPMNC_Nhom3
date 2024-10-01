
import { Home } from '../page/Home';
import { BookStore } from '../page/BookStore';
import { DetailProduct } from '../page/DetailProduct';
import { Auth } from '../page/Auth';
export const routers = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/Bookstore",
        exact: true,
        component: BookStore,
        layout: true
    },
    {
        path: "/Detail-product/:id",
        exact: true,
        component: DetailProduct,
        layout: true
    },

    {
        path: "/Auth",
        exact: true,
        component: Auth
    },

]