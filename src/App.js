// 여러개를 불러올 시 {}로 묶는다.
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/Product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
