import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  let navi = useNavigate();

  // 형태가 2가지. import에 작성한대로 적으면 됨. React를 적거나 / 적지 않거나 (적은 형태는 MainPage.js)
  let [product, setProduct] = useState(null);

  // useEffect:콜백함수. 의존성 배열임. []라고 적으면 한 번만 실행, []안에 내용을 적으면 콜백
  useEffect(() => {
    axios
      .get(`https://c453a1d4-366a-484b-a313-45b15b866147.mock.pstmn.io/product/${id}`)

      // 통신(get) 성공했을 경우
      .then((res) => {
        product = res.data;
        setProduct(product);
        console.log(res);
      })
      //실패했을 경우
      .catch((err) => {});
  }, []);

  if (product === null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }

  return (
    <>
      {/* <h1>선택하신 상품은 {id}번 상품입니다.</h1> */}
      <div id="image-box">
        <img src={`/${product.imageUrl}`} alt={product.name} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt={product.seller} />
        <span className="product-seller">{product.seller}</span>
        <button onClick={() => navi(-1)}>BACK</button>
      </div>
      <div id="content-box">
        <div id="name"></div>
        <div id="price"></div>
        <div id="createAt"></div>
        <div id="desc"></div>
      </div>
    </>
  );
};
export default ProductPage;
