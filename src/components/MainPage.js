import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
// import from:전체 코드의 한 부분만을 가지고 올 때 from 사용

const MainPage = () => {
  // 컴포넌트를 열자마자는 통신이 안 된 상태라서 배열만 되어있고 데이터가 들어오지 않았다. 통신이 되어야 정보가 들어옴

  //let product1=React.useState();  //초기값, 콜백함수(변경된 초기값)
  //let products=product1[0];       //초기값
  //let setProducts=product1[1];    //변경된 초기값

  // useState:초기값, 콜백함수(변경된 초기값) - 2개의 값을 반환함(초기값과 변경된 초기값)
  // ():시작하겠다. (0):0에서부터 시작하겠다. ([]):빈 배열값부터 시작하겠다.
  let [products, setProducts] = React.useState([]);
  // 컴포넌트가 랜더될 때 딱 한 번 실행=[] ( [] 안에 무엇이든 값이 들어가면 계속 실행을 시킴(콜백) )
  // useEffect(()=>{실행문},[])

  //useEffect로 실행이 반복되지 않고(무한 콜백) 한 번만 실행되게 해준다.
  useEffect(() => {
    axios
      .get("https://044fbdc6-5eb3-40c1-976f-426f5cde36f7.mock.pstmn.io/products") /* []로 배열형으로 나열되어 있다 = 받을 때도 배열형으로 받음( useState([]) ) */

      // 통신(get) 성공했을 경우
      .then((res) => {
        products = res.data.products;
        console.log(products);
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
          {products.map((product, idx) => {
            console.log("map에서 반환된 product:", product, idx);
            return (
              <div className="product-card" key={idx}>
                <Link className="product-link" to={`/product/${idx}`}>
                  <div>
                    <img className="product-img" src={product.imageUrl} alt="{product.name}" />
                  </div>
                  <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img className="product-avatar" src="images/icons/avatar.png" alt="" />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
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
