import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Container, Row, Col, Dropdown, Button} from 'react-bootstrap'

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

  //드랍다운
  


  return (
    <Container>
      <Row>
        <Col className='product-detail-img product-detail'>
          <img src={product?.img}/>
        </Col>
        <Col className='product-detail'>
          <div>제품명 {product?.title}</div>
          <div>price {product?.price}</div>
          <div className='product-detail-choice'>{product?.choice == true?"Conscious choice":""}</div>

          <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Size
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">S</Dropdown.Item>
        <Dropdown.Item href="#/action-2">M</Dropdown.Item>
        <Dropdown.Item href="#/action-3">L</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Button variant="outline-dark" className='PutBtn'>장바구니 담기</Button>
    <Button variant="outline-dark" className='PutBtn'>구매하기</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail