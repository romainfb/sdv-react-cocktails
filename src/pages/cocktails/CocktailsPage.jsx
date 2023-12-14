import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CocktailCard from '../../components/CocktailCard';
import Spinner from '../../components/Spinner';

/**
 * This component is used to display all cocktails
 * and manage the API call
 * 
 * @param {object} cocktailsProp cocktails object
 * 
 * @returns {JSX.Element} component for all cocktails page
 */

const CocktailsListPage = ({cocktailsProp}) => {

    return (
        <>
        <Header />

        <section className="flex p-6 my-16 items-center justify-center flex-col">

            {cocktailsProp ? (
                <>
                    <h2 className="text-4xl font-black pb-12 text-center">Tous nos cocktails</h2>

                    {cocktailsProp.map((cocktail) => (

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

        <Footer />
        </>
    );

}

export default CocktailsListPage;
