import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import Myheader from "../components/Myheader";
import Mybutton from "../components/Mybutton";
import { emotionList } from "../util/emotion";

const Diary = () => {
  const { id } = useParams();
  //일기 리스트를 받아옴
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElment = document.getElementsByTagName("title")[0];
    titleElment.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(id) === parseInt(it.id)
      );

      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [diaryList, id, navigate]);

  //headText={`${getStringDate(new Date(data.date))} 기록`}

  if (!data) {
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    return (
      <div className="DiaryPage">
        <Myheader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <Mybutton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <Mybutton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={curEmotionData.emotion_img} />
              <div className="emotion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
