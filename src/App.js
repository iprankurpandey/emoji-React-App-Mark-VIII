import "./styles.css";

// let headingText = "your name";
// let color = "purple";
let likeCounter = 0;
function likeClickHandler() {
  likeCounter++;
  console.log("clicked :", likeCounter);
}
export default function App() {
  return (
    <div className="App">
      <h1>inside out</h1>
      <button onClick={likeClickHandler}>Like </button>
    </div>
  );
}
