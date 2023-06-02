import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setsearchParams] = useSearchParams();

  console.log(searchParams);

  const id = searchParams.get("id");
  const ma = searchParams.get("m");
  console.log(ma);
  console.log(id);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이</p>
      <button onClick={() => setsearchParams({ who: "winterlood" })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home버튼
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Edit;
