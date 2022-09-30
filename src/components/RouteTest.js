import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <div>
      {/* Link=a태그 */}
      {/* App.js의 링크와 통일시켜야 함 */}
      <Link to={"/"}>💛HOME</Link>
      <br />
      <Link to={"/new"}>💛NEW</Link>
      <br />
      <Link to={"/diary"}>💛DIARY</Link>
      <br />
      <Link to={"/edit"}>💛EDIT</Link>
    </div>
  );
};
export default RouteTest;
