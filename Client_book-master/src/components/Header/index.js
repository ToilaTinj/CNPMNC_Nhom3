import './index.css'
import { FaShoppingBasket } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsChevronDown } from 'react-icons/bs'
import { signOut } from '../../actions/actionAuth'
import { toggleCart } from '../../actions/actionProducts'
const Menus = [
  {
    to: '/',
    exact: true,//exact: true để chỉ định rằng chỉ khi path trùng khớp hoàn toàn với location.pathname thì Route mới render
    name: 'HOME'
  },
  {
    to: '/Bookstore',
    exact: true,
    name: 'BOOK STORE'
  },
  // {
  //   to: '/Blog',
  //   exact: true,
  //   name: 'BLOG'
  // },
  {
    to: '/My-account',
    exact: true,
    name: 'MY ACCOUNT'
  },
  // {
  //   to: '/Contact',
  //   exact: true,
  //   name: 'CONTACT'
  // }
]
export const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user) //lấy user từ store
  const [isClick, setIsClick] = useState(false) //state để xử lý click menu
  const [st, setSt] = useState(false) //state để xử lý click menu
  const [isClickMenu, setIsClickMenu] = useState(false) //state để xử lý click menu
  const carts = useSelector((state) => state.cart)
  const history = useHistory() //lấy history từ react-router-dom
  const CustomLinkActive = ({ label, to, activeOnlyWhenExact }) => { //tạo component để xử lý active class cho menu
    return (
      <Route // định nghĩa 1 tuyến đường trong ứng dụng
        path={to} // xác định đường dẫn URL
        exact={activeOnlyWhenExact} //Thuộc tính exact xác định rằng tuyến đường này chỉ khớp chính xác với đường dẫn URL
        children={({ match }) => { // Hàm này nhận một đối tượng chứa thuộc tính match. Nếu đường dẫn URL hiện tại khớp với path, match sẽ có giá trị, ngược lại sẽ là null
          var active = match ? 'active' : ''// Nếu match có giá trị (tức là đường dẫn URL hiện tại khớp với path), biến active sẽ được gán giá trị 'active', ngược lại sẽ là chuỗi rỗng ''
          return (
            <li
              onClick={isClickFunc} // Gọi hàm isClickFunc
              key={label + '1'} // Đặt key cho menu để React có thể theo dõi các phần tử trong danh sách
              className={`navbar-item ${active}`} // Đặt className cho phần tử <li>, bao gồm cả 'navbar-item' và giá trị của biến active
            >
              <Link to={to}>{label}</Link> {/* Tạo một liên kết đến đường dẫn URL được xác định bởi thuộc tính to */}
            </li>
          )
        }}
      />
    )
  }
  const isClickFunc = () => {
    setIsClick(!isClick) 
  }
  return (
    <header
      style={{
        backgroundColor: `${history.location.pathname !== '/' ? '#2F2B35' : ''}`
      }}
      className='header-wrap'
    >
      <Container>
        <div className='navbar-wrap'>
          <h1 className='header-logo'>
            <Link to='/' className='header-logo__link'>
              <div className='header-logo__text'>Bookie</div>
              <p className='header-logo-description'>Đam mê sách</p>
            </Link>
          </h1>
          <nav className={`header-navbar ${isClickMenu ? 'active' : ''}`}> 
            <ul className='navbar-list'>
              {Menus.map((menu) => {//Duyệt qua mảng Menus để tạo các menu
                return (
                  <CustomLinkActive 
                    key={menu.path} //Đặt key cho CustomLinkActive
                    to={menu.to} //Truyền giá trị của thuộc tính to cho CustomLinkActive
                    label={menu.name} //Truyền giá trị của thuộc tính name cho CustomLinkActive
                    activeOnlyWhenExact={menu.exact} //Truyền giá trị của thuộc tính exact cho CustomLinkActive
                    isClick={isClickFunc} //Truyền hàm isClickFunc cho CustomLinkActive
                  />
                )
              })}
            </ul>
          </nav>
          <div className='header-account-cart'>
            {/* <div
              className='header-menu-mobile'
              onClick={() => setIsClickMenu(!isClickMenu)}
            >
              <span className={`${isClickMenu ? 'active' : ''}`}></span>
              <span className={`${isClickMenu ? 'active' : ''}`}></span>
              <span className={`${isClickMenu ? 'active' : ''}`}></span>
            </div> */}
            <div className='d-flex justify-content align-items'>
              {/* <div
                className='header-cart'
                onClick={() => dispatch(toggleCart(true))}
              >
                <FaShoppingBasket />
                <div className='header-cart__amount'>{carts?.length || 0}</div>
              </div> */}
              {Object.getOwnPropertyNames(user).length !== 0 ? ( //Kiểm tra xem user có thuộc tính nào không,Nếu điều kiện này đúng, phần tử <div> sẽ được hiển thị.
                <div onClick={() => setSt(!st)} className='header-account'>
                  <img
                    src={
                      user.image || //Nếu user có thuộc tính image, sẽ hiển thị ảnh đại diện của user, ngược lại sẽ hiển thị ảnh mặc định
                      `https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg`
                    }
                    alt={user._id} //Đặt thuộc tính alt của hình ảnh bằng _id của người dùng, giúp cải thiện khả năng truy cập
                  />
                  {/* <BsChevronDown //Icon mũi tên xuống
                    fontWeight='bold'
                    fontSize='1.2rem'
                    color='white'
                  /> */}
                  {st ? (
                    <ul className='header-account_settings'>
                      {user.role === 'admin' ? ( //Kiểm tra xem user có quyền admin không, nếu có sẽ hiển thị menu Dashboard
                        <li>
                          {/* <a href='http://localhost:3000/login'>
                            Dashboard
                          </a> */}
                        </li>
                      ) : (
                        ''
                      )}
                      {/* <li>
                        <Link to='/My-account'>Đơn hàng</Link>
                      </li>
                      <li>
                        <Link to='/My-account'>Thông tin cá nhân</Link>
                      </li>
                      <li>
                        <Link to='/My-account'>Đổi mật khẩu</Link>
                      </li>
                      <li onClick={() => signOut(dispatch)}>Đăng xuất</li> */}
                    </ul>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
