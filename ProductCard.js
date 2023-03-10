import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
    return (
        <div className='card product-card' onClick={showDetail}>
            <img src={item?.img}/>
            <div className='product-card-item'>{item?.choice == true?"Conscious choice":""}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new == true?"신제품":""}</div>
        </div>
    )
}
//className='product-card'
export default ProductCard