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
