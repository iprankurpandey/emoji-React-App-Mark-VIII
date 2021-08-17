import "./styles.css";
// let headingText =
let username = prompt("your name");
let color = "purple";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}> welcome {username}</h1>
    </div>
  );
}
