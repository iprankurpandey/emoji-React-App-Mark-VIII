import "./styles.css";
let userName = "tanay";
let userLoggedIn = false;

export default function App() {
  function getUserMessage() {
    if (userLoggedIn) {
      return userName;
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
