import "./styles.css";
let shoppingList = ["milk", "bread", "butter", "flower"];
shoppingList.push("apple", "banana", "orange", "strawberry", "cream");

console.log(shoppingList);
export default function App() {
  return (
    <div className="App">
      <h2>print my shopping list</h2>
      <ul>
        {shoppingList.map((item) => {
          console.log(item);
          return <li>mapping</li>;
        })}
      </ul>
    </div>
  );
}
