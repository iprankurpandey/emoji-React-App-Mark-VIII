import "./styles.css";

// let headingText = "your name";
// let color = "purple";
function likeClickHandler() {
  console.log("clicked");
}
export default function App() {
  return (
    <div className="App">
      <h1>inside out</h1>
      <button onClick={likeClickHandler}>Like </button>
    </div>
  );
}
