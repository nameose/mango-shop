import { useNavigate } from "react-router-dom";

const New = () => {
  let navi = useNavigate();

  return (
    <div>
      New페이지
      <br/>
      {/* (-1) : 이전 */}
      <button onClick={() => navi(-1)}>BACK</button>
    </div>
  );
};
export default New;
