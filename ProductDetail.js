import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

const ProductDetail = () => {
  let {id} = useParams()
  const [product, setProduct] = useState(null)

  const getProductDetail = async() => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log("data는 ", data)
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  }, [])
  return (
    <Container>
      <Row>
        <Col className='product-detail-img'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div>제품명 {product?.title}</div>
          <div>price {product?.price}</div>
          <div>size {product?.size}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail