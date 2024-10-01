import './index.css';
import { BsStarHalf } from 'react-icons/bs';
import { formatNumber } from '../../helpers/formatNumber';
import { showStars } from '../../helpers/showStars';
import { Link } from 'react-router-dom';
export const BoxProduct = (props) => {
    const { products, label } = props;
    return (
        <div className="box-product__wrap">
            <p className="box-product__title">{label}</p>
            <ul className="box-product_list">
                {products?.map((product, index) => { //products?.map duyệt qua từng sản phẩm trong mảng products. Dấu ?. là optional chaining để tránh lỗi nếu products là null hoặc undefined
                    if (index < 5) { //Chỉ hiển thị tối đa 5 sản phẩm
                        return (
                            <li className="box-product_item" key={product._id}>
                                <img src={product.urls[0].url} alt={product.title} /> 
                                <div className="box-product__content ft">
                                    <Link to={`/Detail-product/${product._id}`}>{product.title}</Link> {/*dẫn đến trang chi tiết sản phẩm*/}
                                    <p>
                                        {showStars(product.averagedStars, "#2F2B35", "white", "0.8rem")}{(product.averagedStars - Math.trunc(product.averagedStars) >= 0.5 ? <BsStarHalf color="#2F2B35" fontSize="0.8rem" /> : "")} {/*showStars hiển thị số sao đánh giá của sản phẩm*/}
                                    </p>
                                    <div className="box-product_sale">
                                        {product.sale > 0 ? <span>{formatNumber(product.price)}đ</span> : ""}{/*Nếu sản phẩm đang giảm giá, hiển thị giá gốc và giá sau khi giảm*/}
                                        <p>{product.sale > 0 ? formatNumber(Math.ceil(product.price - (product.price * product.sale / 100))) : formatNumber(product.price)}đ</p>{/*Nếu sản phẩm đang giảm giá, hiển thị giá sau khi giảm, ngược lại hiển thị giá gốc*/}
                                    </div>
                                </div>
                            </li>
                        )
                    } else return;
                })}
            </ul>
        </div>

    )
}