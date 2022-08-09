import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//コンポーネントでmemoで囲ってpropsの値に変更があった場合のみ再レンダリングするように変更
export const ChildArea = memo((props) => {
  //親からopenの値を受け取って三項演算子で表示を制御
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた");

  //コンポーネントのレンダリング負荷が上がる処理を入れる
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {/* 三項演算子を使用してコンポーネントの表示を処理 */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
