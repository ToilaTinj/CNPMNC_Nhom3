import './index.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
export const Title = () => {
    const history = useHistory();
    const findIndexByString = () => {
        let status = false;
        let strLength = history.location.pathname.length;
        let str = history.location.pathname;
        for (let i = 0; i < strLength; i++) {
            if (status === true && str[i] === "/") {
                return i;
            }
            if (str[i] === "/") {
                status = true;
                continue;
            };
        }
    }
    return (
        <div className="page-title">
            <h2>{history.location.pathname.slice(1, findIndexByString())}</h2>
            <div>
                <Link to="/">Home </Link>
                /
                <span> {history.location.pathname.slice(1, findIndexByString())}</span>
            </div>
        </div>
    )
}
//Component Title sử dụng useHistory để lấy thông tin về URL hiện tại.
//Hàm findIndexByString tìm vị trí của ký tự / thứ hai trong pathname.
//JSX được render để hiển thị tiêu đề trang và một liên kết đến trang chủ.