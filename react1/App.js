import Person from "./Person.js";
import Button from "./Button.js"
import Header from "./Header.js"
import List from "./List.js";
function App() {
  return (
    <div className="App">
      <Person name ="sohil" age="18"/>
      <Button text="submit" onClick={()=>{console.log("button clicked")}}/>
      <Header text="Welcom"/>
      <List items={['apple', 'banana', 'orange']} />
      <List items={['mango', 'banana', 'orange']} />
    </div>
  );
}

export default App;
