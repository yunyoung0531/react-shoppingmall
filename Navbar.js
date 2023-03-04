import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// 크게 세 개의 navbar로 나눔
const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속 가능성']
    return (
    <div>
        <div>  
            <div className='loginBtn'>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        <div className='nav-sec'>
            <img src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'/>
        </div>
        <div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map(menu=>(
                        <li>{menu}</li>
                    ))}
                </ul>
            </div>
            <div className='menu-list2'>
                <FontAwesomeIcon icon={faSearch}/>
                <input placeholder="제품 검색" type={"text"}/>
            </div>
        </div>
    </div>
    )
}

export default Navbar