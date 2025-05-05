import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'


const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  
  const getProductDetail = async () => {
      // ProductDetail.js
      let url = `https://my-json-server.typicode.com/kimbyeong-9/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }; // 여기에 있던 추가 중괄호 제거
  
  useEffect(() => {
    getProductDetail();
  },[]);


  return <Container>
    <Row>
      <Col>
        <img src={product?.img}/>
      </Col>
      <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div>{product?.choice ? "conscious choice" : ""}</div>
        <div>{product?.new ? "신제품" : ""}</div>
        <div>{product?.size}</div>
        <div>{product?.content}</div>
       </Col>
    </Row>
  </Container>
}

export default ProductDetail