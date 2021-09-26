import "./App.css";
import { PlaneButton } from "../src/components/PlaneButton/PlaneButton";
import edit from "./image/edit.svg";

function App() {
  return (
    <PlaneButton
      title="send"
      sentTitle="sent"
      bgColor="white"
      color="#eeecff"
      width="17rem"
      height="3.3rem"
      icon={edit}
      iconStroke="bold"
      iconHeight={20}
      padding="0.5rem"
      checkColor="#eeecff"
    />
  );
}

export default App;
