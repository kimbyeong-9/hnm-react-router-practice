import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
  let searchQuery = query.get("q") || "";
  console.log("쿼리값은?", searchQuery);
  let url = ` https://my-json-server.typicode.com/kimbyeong-9/hnm-react-router-practice/products?q=${searchQuery}`
  let response = await fetch(url);
  let data = await response.json();
  setProductList(data);
};

useEffect(() => {
  getProducts();
}, [query]);
  
  return (
    <div>
      <Container>
        <Row>
          {productList && productList.length > 0 ? (
            <>
              {productList.map((menu) => (
                <Col lg={3} key={menu.id}>
                  <ProductCard item={menu} />
                </Col>
              ))}
            </>
          ) : (
            <Col>
              <h3>검색 결과가 없습니다.</h3>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;