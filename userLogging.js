import "./styles.css";
let userName = "tanay";
let userLoggedIn = true;

export default function App() {
  function getUserMessage() {
    if (userLoggedIn) {
      return <em>{userName}</em>;
    } else {
      return "user";
    }
  }
  return (
    <div className="App">
      <h1>welcome {getUserMessage()}</h1>
    </div>
  );
}
