import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import CocktailCard from '../../../components/CocktailCard';
import Spinner from '../../../components/Spinner';

/**
 * This component is used to display cocktails by glasse
 * and manage the API call
 * 
 * @returns {JSX.Element} component for cocktails by glasse page
 */

const CocktailsByGlassePage = () => {

    const {glasse} = useParams();
    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async () => {

            const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glasse}`);

            // Error handler for API response

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
                <>
                    <h2 className="text-4xl font-black pb-12 text-center">Chargement des catégories...</h2>
                    <Spinner />
                </>
            )}


        </section>

        <Footer />
        </>
    );

}

export default CocktailsByGlassePage;
