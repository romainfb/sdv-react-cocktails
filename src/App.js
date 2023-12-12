import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CocktailDetailsPage from './pages/CocktailDetailsPage';
import CocktailsPage from './pages/CocktailsPage';
import SearchCocktailsPage from './pages/SearchCocktailsPage';
import CategoriesPage from './pages/CategoriesPage';
import IngredientsPages from './pages/IngredientsPage';
import GlassesPages from './pages/GlassesPage';
import CocktailsByCategoryPage from './pages/CocktailsByCategoryPage';
import CocktailsByIngredientPage from './pages/CocktailsByIngredientPage';
import CocktailsByGlassePage from './pages/CocktailsByGlassePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />

        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/ingredients" element={<IngredientsPages />} />
        <Route path="/glasses" element={<GlassesPages />} />

        <Route path="/categories/:category" element={<CocktailsByCategoryPage />} />
        <Route path="/ingredients/:ingredient" element={<CocktailsByIngredientPage />} />
        <Route path="/glasses/:glasse" element={<CocktailsByGlassePage />} />

        <Route path="/cocktails/details/:id" element={<CocktailDetailsPage />} />
        <Route path="/cocktails/search/:name" element={<SearchCocktailsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
