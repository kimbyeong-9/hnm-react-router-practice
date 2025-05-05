import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home','sale','지속가능성'];
    const navigate = useNavigate();

    const goToLogin = () => {
      navigate('/login');
    }
    const search = (event) => {
      if(event.key === "Enter"){
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`);
      }
    }
      return (
        <div>
          <div>
            <div className='login-button' onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser}/>
              <div>로그인</div>
            </div>
          </div>
          <div className="nav-section">
            <img 
             width={200}
             src="https://brandyhq.com/wp-content/uploads/2024/12/H-and-M-Logo-1024x538.jpg"/>
          </div>
          <div className='menu-area'>
            <ul className='menu-list'>
              {menuList.map((menu) => (
                <li key={menu}>{menu}</li>
              ))}
            </ul>
            <div className='search-input-area'>
              <FontAwesomeIcon icon={faSearch}/>
            </div>
            <div>
              <input type='text' placeholder='제품검색' className='search-input' onKeyDown={(event)=> search(event)}/>
            </div>
          </div>
        </div>
        );
}

export default Navbar;