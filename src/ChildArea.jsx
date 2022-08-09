import React from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  //親からopenの値を受け取って三項演算子で表示を制御
  const { open } = props;
  console.log("ChildAreaがレンダリングされた");

  //コンポーネントのレンダリング負荷が上がる処理を入れる
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
