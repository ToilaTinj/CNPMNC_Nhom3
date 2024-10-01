import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../actions/actionProducts";
export const Model = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.active.activeCart);
    return (
        <div className={`model-wrap ${isOpen ? "active" : ""}`} onClick={() => dispatch(toggleCart(false))} ></div>
    )
}

//Component này sử dụng react-redux để kết nối với Redux store.
//Nó lấy giá trị activeCart từ state và sử dụng giá trị này để xác định class name của thẻ div.
//Khi thẻ div được click, nó sẽ gửi một action để thay đổi state trong Redux store.