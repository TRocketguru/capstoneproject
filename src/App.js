
import {recipes} from './Data.js'
import logo from './logo.svg'
import './App.css';


function App() {
  return (
    <div>
      <div style={{width:"100px", height: "100px"}}>
      <img src={logo} alt="logo" />
      </div>
      <h1>Recipes</h1>
      {recipes.map(recipe=>
        <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map(ingredient=>
            <li key={ingredient}>{ingredient}</li>)}
        </ul>
        </div>
        )}
    </div>
  );
}

export default App;
