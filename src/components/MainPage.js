import React from "react";
import "./MainPage.css";
import axios from "axios";
import { useEffect } from "react";
// import from:전체 코드의 한 부분만을 가지고 올 때 from 사용

const MainPage = () => {
  let [products, setProducts] = React.useState([]);

  //useEffect로 실행이 반복되지 않고(무한 콜백) 한 번만 실행되게 해준다.
  useEffect(() => {
    axios
      .get("https://044fbdc6-5eb3-40c1-976f-426f5cde36f7.mock.pstmn.io/products")
      //성공했을 경우
      .then((res) => {
        products = res.data.products;
        setProducts(products);
      })
      //실패했을 경우
      .catch((err) => {});
  }, []);

  return (
    <>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="banner1" />
        </div>
        <h2>Products</h2>
        <div id="product-list">
          {products.map((product, idx) => {console.log(product, idx);
            return (
              <div className="product-card" key={idx}>
                <div>
                  <img className="product-img" src={product.imageUrl} alt="{product.name}" />
                </div>
                <div className="product-content">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                  <div className="product-seller">
                    <img className="product-avatar" src="images/icons/avatar.png" alt="" />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-4567</a>
        <a href="#">개인정보</a>
      </div>
    </>
  );
};
export default MainPage;
