import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import RouteTest from "./components/RouteTest";

const App = () => {
  return (
    // return문 다음의 태그가 화면에 나온다. (출력될 태그를 리턴문으로 감싸야 한다.)
    // 컴포넌트는 하나로 묶여야 한다. 최상위 요소는 하나!

    // BrowserRouter(최상위):gnb같은 바뀌지 않는 요소를 넣기 좋음 > Routes > Route
    <BrowserRouter>
      <div className="App">
        <h1>App 컴포넌트</h1>
        <hr />
        <Routes>
          {/* Route는 경로를 입력. /는 기본 경로 */}
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
      <hr />
      <RouteTest></RouteTest>
    </BrowserRouter>
  );
};
export default App;
