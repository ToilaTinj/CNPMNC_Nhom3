import './index.css';

export const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-center">
                <span className="spinner-border text-dark" role="status">
                </span>
            </div>
        </div>
    )
}
//Thành phần Loader này được sử dụng để hiển thị một biểu tượng tải (loading spinner) 
//trên giao diện người dùng. Khi thành phần này được render, nó sẽ hiển thị 
//một biểu tượng xoay để thông báo cho người dùng rằng một quá trình nào đó đang diễn ra.