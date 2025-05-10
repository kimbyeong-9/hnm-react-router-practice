import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const productList = useSelector((state) => state.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
  let searchQuery = query.get("q") || "";
  console.log("쿼리값은?", searchQuery);
  dispatch(productAction.getProducts(searchQuery));
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