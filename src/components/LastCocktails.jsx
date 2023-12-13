import { Link } from 'react-router-dom';
import CocktailCard from './CocktailCard';
import Spinner from './Spinner';

/**
 * This component is a section with the last cocktails
 * 
 * @param {array} cocktailsProp is the array of cocktails
 * @param {number} cocktailsAmountProp is the number of cocktails to display
 * 
 * @returns {JSX.Element} a section with the last cocktails
 */

const LastCocktails = ({cocktailsProp, cocktailsAmountProp}) => {

    const lastCocktails = cocktailsProp.slice(-cocktailsAmountProp);

    return (

        <section className="flex p-6 my-16 items-center justify-center flex-col">

            {lastCocktails ? (
                <>
                    <Link to="/cocktails" className='mb-12'>
                        <h2 className="text-4xl font-black text-center">Les {cocktailsAmountProp} derniers cocktails</h2>
                    </Link>

                    {lastCocktails.map((cocktail) => (

                        < CocktailCard cocktailIdProp={cocktail.idDrink} cocktailNameProp={cocktail.strDrink} cocktailInstructionsProp={cocktail.strInstructions} cocktailThumbProp={cocktail.strDrinkThumb} key={cocktail.idDrink}/>

                    ))}
                </>
            ) : (
                <>
                    <h2 className="text-4xl font-black pb-12 text-center">Chargement des cocktails...</h2>
                    <Spinner />
                </>
            )}


        </section>

    );

}

export default LastCocktails;
