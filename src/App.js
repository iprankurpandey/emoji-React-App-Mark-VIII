import "./styles.css";

// let headingText = "your name";
// let color = "purple";
let count = 0;
function likeClickHandler() {
  count++;
  console.log(count);
}
export default function App() {
  return (
    <div className="App">
      <h1>inside out</h1>
      <button onClick={likeClickHandler}>Like </button>
    </div>
  );
}
