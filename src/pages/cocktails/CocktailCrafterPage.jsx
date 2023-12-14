import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';
import CocktailCard from '../../components/CocktailCard';

/**
 * This component is used to display cocktails by ingredients with craft
 * and manage the API call
 * 
 * @returns {JSX.Element} component for cocktails by ingredients with craft table page
 */

const CocktailCrafterPage = () => {

    const [ingredients, setIngredients] = useState(null);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [cocktails, setCocktails] = useState({});

    useEffect(() => {
        (async () => {
            const ingredientsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
            setIngredients(await ingredientsResponse.json());
        })();
    }, []);

    useEffect(() => {
        const fetchCocktails = async () => {
            if (selectedIngredients.length > 0) {
                const newCocktails = {};
                for (const ingredient of selectedIngredients) {
                    const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                    const cocktailsData = await cocktailsResponse.json();
                    newCocktails[ingredient] = cocktailsData.drinks;
                }
                setCocktails(newCocktails);
            } else {
                setCocktails({});
            }
        };

        fetchCocktails();
    }, [selectedIngredients]);

    const handleIngredientChange = (event) => {
        const ingredient = event.target.value;
        if (event.target.checked) {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        } else {
            setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
        }
    };

    const filterCocktails = () => {
        const filteredCocktails = {};
        if (Object.keys(cocktails).length > 0) {
            const cocktailLists = Object.values(cocktails);
            const firstCocktailList = cocktailLists[0];
            for (const cocktail of firstCocktailList) {
                const cocktailName = cocktail.strDrink;
                let isCocktailInAllLists = true;
                for (const cocktailList of cocktailLists) {
                    const cocktailNames = cocktailList.map(cocktail => cocktail.strDrink);
                    if (!cocktailNames.includes(cocktailName)) {
                        isCocktailInAllLists = false;
                        break;
                    }
                }
                if (isCocktailInAllLists) {
                    filteredCocktails[cocktailName] = cocktail;
                }
            }
        }
        return filteredCocktails;
    };

    const filteredCocktails = filterCocktails();

    return (
        <>
            <Header />

            <div className="flex p-6 my-16 items-center justify-center flex-col px-20">
                {ingredients ? (
                    <>
                        <h2 className="text-4xl font-black text-center mb-10">Fabrication de cocktail</h2>

                        <div className="flex w-full h-fit shadow-lg rounded-xl flex-wrap p-8 mb-20">
                            {ingredients.drinks.map((ingredient, index) => (
                                <div key={index} className='h-fit flex items-center ml-4 my-1 shadow-sm rounded-lg px-2 py-1 hover:scale-105 duration-500'>
                                    <input
                                        type="checkbox"
                                        id={ingredient.strIngredient1}
                                        value={ingredient.strIngredient1}
                                        onChange={handleIngredientChange}
                                        className='focus:outline-none focus:ring-0 rounded border-2'
                                    />
                                    <label htmlFor={ingredient.strIngredient1} className='pl-2 font-medium'>{ingredient.strIngredient1}</label>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-4xl font-black pb-12 text-center">Chargement de la table de fabrication...</h2>
                        <Spinner />
                    </>
                )}

                {Object.keys(filteredCocktails).length > 0 && (
                    <div className="flex flex-col items-center w-full justify-center">
                        <h2 className="text-4xl font-black text-center mb-10">Cocktails contenant les ingrédients sélectionnés</h2>
                        {Object.entries(filteredCocktails).map(([cocktailName, cocktail]) => (
                            <div key={cocktailName} className='flex w-full items-center justify-center'>
                                    <CocktailCard cocktailIdProp={cocktail.idDrink} cocktailNameProp={cocktail.strDrink} cocktailInstructionsProp={cocktail.strInstructions} cocktailThumbProp={cocktail.strDrinkThumb} />
                            </div>
                        ))}
                    </div>
                )}

            </div>

            <div className='mt-40'></div>
            <Footer/>
        </>
    );
}

export default CocktailCrafterPage;