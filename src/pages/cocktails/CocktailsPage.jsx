import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CocktailCard from '../../components/CocktailCard';
import { useEffect, useState } from 'react';

const CocktailsListPage = () => {

    const [cocktailsList, setCocktailsList] = useState(null);
    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const cocktailsResponseData = await cocktailsResponse.json();
            setCocktailsList(cocktailsResponseData["drinks"]);
        })();
    }, []);

    return (
        <>

        <Header />

        <section className="flex p-6 my-16 items-center justify-center flex-col">

            {cocktailsList ? (
                <>
                    <h2 className="text-4xl font-black pb-12 text-center">Tous nos cocktails</h2>

                    {cocktailsList.map((cocktail) => (

                        < CocktailCard cocktailIdProp={cocktail.idDrink} cocktailNameProp={cocktail.strDrink} cocktailInstructionsProp={cocktail.strInstructions} cocktailThumbProp={cocktail.strDrinkThumb} key={cocktail.idDrink}/>

                    ))}
                </>
            ) : (
                <h2 className="text-4xl font-black pb-12 text-center">Chargement des cocktails...</h2>
            )}


        </section>

        <Footer />

        </>
      );
    }

export default CocktailsListPage;
