import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CocktailCard from '../components/CocktailCard';

const SearchCocktailsPage = () => {

    const {name} = useParams();

    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
            const cocktailsResponseData = await cocktailsResponse.json();

            setCocktails(cocktailsResponseData["drinks"]);
        })();
    }, [name]);

    return (
        <>
            <Header />

            <section className="flex p-6 my-16 items-center justify-center flex-col">

                {cocktails ? (
                    <>
                        <h2 className="text-4xl font-black pb-12 text-center">Résultats de recherche pour "{name}"</h2>

                        {cocktails.map((cocktail) => (

                            < CocktailCard cocktailIdProp={cocktail.idDrink} cocktailNameProp={cocktail.strDrink} cocktailInstructionsProp={cocktail.strInstructions} cocktailThumbProp={cocktail.strDrinkThumb} />

                        ))}
                    </>
                ) : (
                    <h2 className="text-4xl font-black pb-12 text-center">Chargement des résultats...</h2>
                )}


            </section>

            <Footer />
        </>
      );
    }

export default SearchCocktailsPage;