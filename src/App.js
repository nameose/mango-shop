// 계층구조가 매우 중요하다. 순서대로 부모-자식이 됨
// 여러개를 불러올 시 {}로 묶는다.
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { UploadOutlined } from "@ant-design/icons";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";
import { Button } from "antd";

const App = () => {
  let navigate = useNavigate();

  return (
    <>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="logo" />
          </Link>
          <Button
            size="large"
            icon={<UploadOutlined />}
            onClick={() => {
              navigate("/upload");
            }}
          >
            상품업로드
          </Button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/Product/:id" element={<ProductPage />} />
      </Routes>
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

export default App;
