import './App.css';

fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response)=>response.json())
  .then((data)=>{
    console.log(data)
    });

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
