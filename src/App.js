import "./styles.css";
// let headingText =
let username = prompt("give me your name");
let color = "blue";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}> welcome {username}</h1>
    </div>
  );
}
