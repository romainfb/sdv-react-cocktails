import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CocktailDetailsPage from './pages/cocktails/CocktailDetailsPage';
import CocktailsPage from './pages/cocktails/CocktailsPage';
import SearchCocktailsPage from './pages/cocktails/SearchCocktailsPage';
import CategoriesPage from './pages/cocktails/relations/CategoriesPage';
import IngredientsPages from './pages/IngredientsPage';
import GlassesPages from './pages/cocktails/relations/GlassesPage';
import CocktailsByCategoryPage from './pages/cocktails/filters/CocktailsByCategoryPage';
import CocktailsByIngredientPage from './pages/cocktails/filters/CocktailsByIngredientPage';
import CocktailsByGlassePage from './pages/cocktails/filters/CocktailsByGlassePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />

        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/ingredients" element={<IngredientsPages />} />
        <Route path="/glasses" element={<GlassesPages />} />

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
