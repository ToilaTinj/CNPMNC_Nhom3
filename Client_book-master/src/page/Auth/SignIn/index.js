import { useState } from "react";
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { Spinner } from '../../../components/Spinner';
export const SignIn = (props) => {
    const { isLoading } = props; // Lấy giá trị isLoading từ props
    const { register, handleSubmit } = useForm();
    const [typeInput, setTypeInput] = useState(false);
    // Hàm thay đổi kiểu input của mật khẩu
    const changeTypeInput = () => {
        setTypeInput(!typeInput);
    }
    const { changeStatus, onSubmitLogin } = props;
    return (
        <div className="form-container">
            <h2 className="auth-title">Đăng nhập</h2>
            <div className="auth-des">
                <p className="auth-meta">Bạn chưa có tài khoản?</p>
                <span onClick={() => changeStatus(false)}>Đăng ký</span>{/*Khi click vào nút Đăng ký, hàm changeStatus sẽ được gọi với tham số false*/}
            </div>
            <form className="auth-form" onSubmit={handleSubmit(onSubmitLogin)}>
                <div className="auth-form_group">
                    <label>Email</label>
                    <div>
                        <input
                            {...register("email", { required: true })}//Đăng ký input với tên email và yêu cầu bắt buộc
                            type="email" />
                    </div>
                </div>
                <div className="auth-form_group">
                    <label>Mật khẩu</label>
                    <div className="auth-form_password">
                        <input
                            {...register("password", { required: true })}
                            type={typeInput ? "text" : "password"} />
                        <AiFillEyeInvisible
                            cursor="pointer"
                            onClick={changeTypeInput}
                        />
                    </div>
                </div>
                <button type="submit" className="auth-form_btn">{isLoading ? <Spinner bgC="#5386e4" /> : "Đăng nhập"}</button>
            </form>
        </div>
    )
}