
import ReactPaginate from 'react-paginate';
import './index.css';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
export const Paginate = (props) => {
    const { totalPage, onChangePaginate } = props;
    const onChangePage = (value) => {
        onChangePaginate(value.selected + 1);
        window.scrollTo(400, 400)
    }
    return (
        <ReactPaginate
            containerClassName='container-pagination'
            pageClassName='page-pagination'
            activeClassName='active-pagination'
            nextLabel={<AiFillRightCircle />}
            previousLabel={< AiFillLeftCircle />}
            previousClassName='control-pagination'
            nextClassName='control-pagination'
            pageCount={totalPage}
            onPageChange={onChangePage}
        />
    )
}
//Component Paginate này giúp hiển thị và quản lý việc phân trang 
//trong ứng dụng React. Nó sử dụng ReactPaginate để tạo giao diện phân trang 
//và gọi hàm callback onChangePaginate khi người dùng chọn trang mới.