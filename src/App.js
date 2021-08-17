import "./styles.css";
import Ink from "react-ink";
let headingText = "your name";
let color = "purple";
export default function App() {
  return (
    <div className="App">
      <h1>
        welcome <span style={{ backgroundColor: color }}> {headingText}</span>
      </h1>
    </div>
  );
}
