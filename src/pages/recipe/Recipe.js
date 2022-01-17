import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';
import './Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsubscribe = projectFirestore.collection('recipes').doc(id).onSnapshot(doc => {
      if (doc.exists) {
        setRecipe(doc.data());
        setIsPending(false);
      } else {
        setError('Couldn\'t find the recipe you\'re looking for...')
        setIsPending(false);
      }
    });

    return () => unsubscribe();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'The title was updated'
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  )
}

export default Recipe;
