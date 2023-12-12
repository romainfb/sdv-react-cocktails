import Footer from '../components/Footer';
import Header from '../components/Header';
import CocktailCard from '../components/CocktailCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CocktailsByGlassePage = () => {

    const {glasse} = useParams();
    
    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async () => {

            const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glasse}`);
            const cocktailsResponseData = await cocktailsResponse.json();

            setCocktails(cocktailsResponseData["drinks"]);

        })();
    }, [glasse]);

    return (
        <>

        <Header />

        <section className="flex p-6 my-16 items-center justify-center flex-col">

            {cocktails ? (
                <>
                    <h2 className="text-4xl font-black pb-12 text-center">Cocktails avec un verre {glasse}</h2>

                    {cocktails.map((cocktail) => (

                        < CocktailCard cocktailIdProp={cocktail.idDrink} cocktailNameProp={cocktail.strDrink} cocktailInstructionsProp={cocktail.strInstructions} cocktailThumbProp={cocktail.strDrinkThumb} />

                    ))}
                </>
            ) : (
                <h2 className="text-4xl font-black pb-12 text-center">Chargement des catégories...</h2>
            )}


        </section>

        <Footer />

        </>
      );
    }

export default CocktailsByGlassePage;
