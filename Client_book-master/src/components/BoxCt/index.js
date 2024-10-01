import { Link } from "react-router-dom";
import { searchProductByField } from "../../actions/actionProducts";
import { useDispatch } from 'react-redux';
import "./index.css";


export const BoxCt = (props) => {
    const { data, label, length, type } = props;
    const dispatch = useDispatch();
    const onSubmitSearchTypeProduct = (types) => {
        searchProductByField(dispatch, { types, title: "" }) // tìm kiếm sản phẩm theo loại
    }
    return (
        <div className="category-product">
            <p className="category-product__title">{label}</p>
            <ul className="category-product__list">
                {type === "post" ? data.map((d, i) => { // Nếu type là "post", mỗi phần tử trong data sẽ được render thành một li với liên kết đến chi tiết bài viết
                    if (i < length) {
                        return (
                            <li className="category-product__item ft" key={d._id}>
                                <Link to={`/Detail-post/${d._id}`}>{d.title}</Link>
                            </li>
                        )
                    }
                    return;
                }) :
                    data.map((d, i) => { //Nếu type không phải là "post", mỗi phần tử trong data sẽ được render thành một li với liên kết đến trang Bookstore và gọi hàm onSubmitSearchTypeProduct khi nhấn vào
                        if (i < length) {
                            return (
                                <li className="category-product__item ft" key={d._id}>
                                    <Link onClick={() => onSubmitSearchTypeProduct(d._id)} to="/Bookstore">{d.name}</Link>
                                </li>
                            )
                        }
                        return;
                    })
                }
            </ul>
        </div>
    )
}
// Đoạn mã này giúp hiển thị một danh sách các sản phẩm hoặc bài viết dựa trên loại (type) và dữ liệu (data) được truyền vào