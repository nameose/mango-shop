import { API_URL } from "../config/constants";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
import { Carousel } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// import from:전체 코드의 한 부분만을 가지고 올 때 from 사용

const MainPage = () => {
  // 컴포넌트를 열자마자는 통신이 안 된 상태라서 배열만 되어있고 데이터가 들어오지 않았다. 통신이 되어야 정보가 들어옴

  //let product1=React.useState();  //초기값, 콜백함수(변경된 초기값)
  //let products=product1[0];       //초기값
  //let setProducts=product1[1];    //변경된 초기값

  // useState:초기값, 콜백함수(변경된 초기값) - 2개의 값을 반환함(초기값과 변경된 초기값)
  // ():시작하겠다. (0):0에서부터 시작하겠다. ([]):빈 배열값부터 시작하겠다.
  let [products, setProducts] = React.useState([]);
  let [banners, setBanners] = React.useState([]);
  // 컴포넌트가 랜더될 때 딱 한 번 실행=[] ( [] 안에 무엇이든 값이 들어가면 계속 실행을 시킴(콜백) )
  // useEffect(()=>{실행문},[])

  //useEffect로 실행이 반복되지 않고(무한 콜백) 한 번만 실행되게 해준다.
  useEffect(() => {
    /* banners 통신*/
    axios
      .get(`${API_URL}/products`) /* []로 배열형으로 나열되어 있다 = 받을 때도 배열형으로 받음( useState([]) ) */

      // 통신(get) 성공했을 경우
      .then((res) => {
        products = res.data.product;
        setProducts(products);
      })
      //실패했을 경우
      .catch((err) => {});

    /* banners 통신*/
    axios
      .get(`${API_URL}/banners`)

      // 통신(get) 성공했을 경우
      .then((res) => {
        banners = res.data.banners;
        setBanners(banners);
      })
      //실패했을 경우
      .catch((err) => {});
  }, []);

  if (products === undefined) {
    return <h1>상품 정보를 받고 있습니다.</h1>;
  }
  return (
    <>
      <div id="body">
        <Carousel autoplay autoplaySpeed={2000}>
          {banners.map((banner, index) => {
            return (
              <Link to={banner.href} key={index}>
                <div id="banner">
                  <img src={`${API_URL}/${banner.ImageUrl}`} />
                </div>
              </Link>
            );
          })}
        </Carousel>
        <h2>Products</h2>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div className="product-card" key={idx}>
                {/* id는 개인식별자다.
                배열순서(인덱스번호)는 수정할 수 없다.  */}
                <Link className="product-link" to={`/product/${product.id}`}>
                  <div>
                    <img className="product-img" src={`${API_URL}/${product.imageUrl}`} alt={`${product.name}`} />
                  </div>
                  <div className="product-content">
                    <span className="product-name">{`${product.name}`}</span>
                    <span className="product-price">{`${product.price}`}원</span>
                    <div className="product-footer">
                      <div className="product-seller">
                        <img className="product-avatar" src={`${API_URL}/${product.imageUrl}`} alt={`${product.name}`} />
                        <span>{`${product.seller}`}</span>
                      </div>
                      <span className="product-data">{`${dayjs(product.createdAt).fromNow()}`}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MainPage;
