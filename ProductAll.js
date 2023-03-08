import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const getProducts= async() => {
    let url = `http://localhost:5000/products`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProductList(data)
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <Container className='product-all'> 
        <Row>
          {productList.map((menu) => (
            <Col lg={3}><ProductCard item={menu}/></Col> 
          ))}
        </Row>
      </Container>
      <ProductCard/>
    </div>
  )
}

export default ProductAll