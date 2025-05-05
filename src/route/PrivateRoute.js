import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate, useParams } from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
  const params = useParams();
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
}

export default PrivateRoute
