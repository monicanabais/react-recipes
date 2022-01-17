import { Link } from 'react-router-dom';
import { projectFirestore } from '../firebase/config';
import { useTheme } from '../hooks/useTheme';
import Trashcan from '../assets/delete-icon.svg';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes found...</div>
  }

  const handleClick = id => {
    projectFirestore.collection('recipes').doc(id).delete();
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img src={Trashcan} className="delete" alt="delete recipe" onClick={() => handleClick(recipe.id)} />
        </div>
      ))}
    </div>
  )
}

export default RecipeList;
