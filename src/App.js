import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import CocktailDetailsPage from './pages/cocktails/CocktailDetailsPage';
import CocktailsPage from './pages/cocktails/CocktailsPage';
import SearchCocktailsPage from './pages/cocktails/SearchCocktailsPage';
import CategoriesPage from './pages/cocktails/relations/CategoriesPage';
import IngredientsPages from './pages/cocktails/relations/IngredientsPage';
import GlassesPages from './pages/cocktails/relations/GlassesPage';
import CocktailsByCategoryPage from './pages/cocktails/filters/CocktailsByCategoryPage';
import CocktailsByIngredientPage from './pages/cocktails/filters/CocktailsByIngredientPage';
import CocktailsByGlassePage from './pages/cocktails/filters/CocktailsByGlassePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  const [categories, setCategories] = useState(null);

  useEffect(() => {
      (async () => {
          const categoriesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
          setCategories(await categoriesResponse.json());
      })();
  }, []);


  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
      (async () => {

          const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
          const cocktailsResponseData = await cocktailsResponse.json();

          setCocktails(cocktailsResponseData["drinks"]);

      })();
  }, []);


  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
      (async () => {
          const ingredientsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
          setIngredients(await ingredientsResponse.json());
      })();
  }, []);


  const [glasses, setGlasses] = useState(null);

  useEffect(() => {
      (async () => {
          const glassesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
          setGlasses(await glassesResponse.json());
      })();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage cocktailsProp={cocktails} categoriesProp={categories}/>} />

        <Route path="/cocktails" element={<CocktailsPage cocktailsProp={cocktails}/>} />
        <Route path="/categories" element={<CategoriesPage categoriesProp={categories}/>} />
        <Route path="/ingredients" element={<IngredientsPages ingredientsProp={ingredients}/>} />
        <Route path="/glasses" element={<GlassesPages glassesProp={glasses}/>} />

        <Route path="/cocktails/category/:category" element={<CocktailsByCategoryPage />} />
        <Route path="/cocktails/ingredient/:ingredient" element={<CocktailsByIngredientPage />} />
        <Route path="/cocktails/glasse/:glasse" element={<CocktailsByGlassePage />} />

        <Route path="/cocktails/details/:id" element={<CocktailDetailsPage />} />
        <Route path="/cocktails/search/:name" element={<SearchCocktailsPage />} />

        <Route path="*" element={<NotFoundPage />}/> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
