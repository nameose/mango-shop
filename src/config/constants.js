export const API_URL = process.env.NODE_ENV === "production" ? "https://react-project-server1.herokuapp.com" : "http://localhost:8080";
//process.env.NODE_ENV : node.js 의 환경변수 prodution 환경(클라우드환경) 일때는 클라우드 주소, 개발환경일때는 로컬호스트 반환
