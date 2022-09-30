import { useSearchParams, useNavigate } from "react-router-dom";
const Edit = () => {
  // let searchParamsUrl = useSearchParams();
  // let searchParams = searchParamsUrl[0];
  // let setSearchParams = searchParamsUrl[1];
  // 위 구문을 한 줄로 작성한 것 :
  let [searchParams, setSearchParams] = useSearchParams();
  
  let navi = useNavigate();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  const color = searchParams.get("color");

  return (
    <div>
      Edit페이지{id}
      <br/>
      {/* 화살표 함수 생략 ( ()=>{} ) */}
      <button onClick={() => navi("/")}>HOME</button>
      <br/>
      <button onClick={() => navi("/new")}>NEW</button>
      <ul>
        <li>{mode}</li>
        <li>{color}</li>
      </ul>
    </div>
  );
};
export default Edit;

// 구문: 주소창의 edit뒤에 ?id=@@&mode=@@ ~ 입력
// {id}, {mode}는 변수
