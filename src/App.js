import { useState, useCallback } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  //入力されるテキストのuseStateを作成
  const [text, setText] = useState("");
  //表示非表示の真偽値のuseStateを作成
  const [open, setOpen] = useState(false);

  //テキスト入力時に表示
  const onChangeText = (e) => setText(e.target.value);

  //openの値を変更
  const onClickOpen = () => setOpen(!open);

  //閉じる処理はuseCallbackを使用して再レンダリングされないように指定
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      {/* propsで子コンポーネント表示の真偽値と閉じる処理を渡す */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
