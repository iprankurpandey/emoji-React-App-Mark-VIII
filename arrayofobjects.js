import "./styles.css";
let shoppingList = ["milk", "bread", "butter", "flower"];
shoppingList.push("apple", "banana", "orange", "strawberry", "cream");

console.log(shoppingList);
export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "gray";
  }

  return (
    <div className="App">
      <h2>print my shopping list</h2>
      {shoppingList.map(function (item, index) {
        console.log(item);
        return <li style={{ backgroundColor: getBg(index) }}>{item}</li>;
      })}
    </div>
  );
}
