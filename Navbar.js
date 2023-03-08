import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShirt } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom'

// 크게 세 개의 navbar로 나눔
const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'YY Home', 'Sale', '지속 가능성']

    const navigate = useNavigate()

    const goToLogin = ()=> {
        navigate("/login")
    }

    const search = (event) => {
        if (event.key === "Enter") {
            console.log("We click this key", event.key)
            //1. 입력한 검색어 읽어옴
            //2. url 바꿔줌
            let keyword = event.target.value
            console.log("keyword", keyword)
            navigate(`/?q=${keyword}`)
        }
    }

    return (
    <div>
        <div>
            {/* 로그인 화면으로 */}
            <div className='loginBtn' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>


        </div>
        <div className='nav-sec'>
            {/* <img src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'/> */}
            {/* <FontAwesomeIcon icon={faShirt} size='2x'/> */}
            <img src='https://platum.kr/wp-content/uploads/2020/11/z.jpg'/>
            {/* <div>YY market</div> */}
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
                <input placeholder="제품 검색" type={"text"} onKeyPress={(event)=>search(event)} />
                {/* <input type="text" onKeyPress={(event)=>search(event)}/> */}
            </div>
        </div>
    </div>
    )
}

export default Navbar