import CocktailCard from '../../../components/CocktailCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Spinner from '../../../components/Spinner';

/**
 * This component is used to display cocktails by ingredient
 * and manage the API call
 * 
 * @returns {JSX.Element} component for cocktails by ingredient page
 */

const CocktailsByIngredientPage = () => {

    const {ingredient} = useParams();
    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        (async () => {

            const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);

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
    }, [ingredient]);

    return (
        <>
        <Header />

        <section className="flex p-6 my-16 items-center justify-center flex-col">

            {cocktails ? (
                <>
                    {cocktails["drinks"] ? (
                        <>
                            <h2 className="text-4xl font-black pb-12 text-center">Cocktails avec l'ingrédient {ingredient}</h2>

                            {cocktails["drinks"].map((cocktail) => (

                                < CocktailCard cocktailIdProp={cocktail.idDrink} cocktailNameProp={cocktail.strDrink} cocktailInstructionsProp={cocktail.strInstructions} cocktailThumbProp={cocktail.strDrinkThumb} key={cocktail.idDrink}/>

                            ))}
                        </>
                    ) : (
                        <h2 className="text-4xl font-black pb-12 text-center">Aucun cocktail n'a été trouvé avec cet ingrédient</h2>
                    )}

                </>
            ) : (
                <>
                    <h2 className="text-4xl font-black pb-12 text-center">Chargement des ingrédients...</h2>
                    <Spinner />
                </>
            )}


        </section>

        <Footer />
        </>
    );

}

export default CocktailsByIngredientPage;
