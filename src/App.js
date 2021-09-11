import "./App.css";
import { PlaneButton } from "../src/components/PlaneButton/PlaneButton";
import edit from "./image/edit.svg";

function App() {
  return (
    <PlaneButton
      title="send"
      bgColor="white"
      color="green"
      size="large"
      icon={edit}
      iconStroke="bold"
      iconHeight={20}
    />
  );
}

export default App;
