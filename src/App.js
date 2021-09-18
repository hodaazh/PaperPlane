import "./App.css";
import { PlaneButton } from "../src/components/PlaneButton/PlaneButton";
import edit from "./image/edit.svg";

function App() {
  return (
    <PlaneButton
      title="send"
      bgColor="white"
      color="green"
      width="10rem"
      height="4.3rem"
      icon={edit}
      iconStroke="bold"
      iconHeight={20}
    />
  );
}

export default App;
