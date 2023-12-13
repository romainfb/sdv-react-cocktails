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

            // Verification of id type, if not a number, set details to null
            // API don't manage this case, return a 200 response with no body returned for response

            try {
                const cocktailsResponseData = await cocktailsResponse.json();
                setCocktails(cocktailsResponseData);
            } catch (error) {
                setCocktails({ "drinks": null });
                console.log(error);
            }

        })();
    }, [glasse]);

    return (
        <>

        <Header />

        <section className="flex p-6 my-16 items-center justify-center flex-col">

            {cocktails ? (
                <>
                    {cocktails["drinks"] ? (

                        <>
                        <h2 className="text-4xl font-black pb-12 text-center">Cocktails avec un verre {glasse}</h2>

                        {cocktails["drinks"].map((cocktail) => (

                            < CocktailCard cocktailIdProp={cocktail.idDrink} cocktailNameProp={cocktail.strDrink} cocktailInstructionsProp={cocktail.strInstructions} cocktailThumbProp={cocktail.strDrinkThumb} key={cocktail.idDrink}/>

                        ))}
                        </>

                    ) : (
                        <h2 className="text-4xl font-black pb-12 text-center">Aucun cocktail n'a été trouvé avec ce verre</h2>
                    )}
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
