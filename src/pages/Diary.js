import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(useParams());
  console.log(id);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;