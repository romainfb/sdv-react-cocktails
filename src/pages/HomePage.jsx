import Header from '../components/Header';
import Footer from '../components/Footer';
import LastCocktails from '../components/LastCocktails';
import RandomCategory from '../components/RandomCategory';
import Spinner from '../components/Spinner';

/**
 * This component is used to display the home page
 * and manage the API call
 * 
 * @param {object} cocktailsProp cocktails object
 * @param {object} categoriesProp categories object
 * 
 * @returns {JSX.Element} component for home page
 */

const HomePage = ({cocktailsProp, categoriesProp}) => {

    return (
        <>
        < Header />

        <div className="flex p-6 my-16 items-center justify-center flex-col px-20 sm:px-48">

            <h2 className="text-4xl font-black pb-12 text-center">Bienvenue sur la page d'accueil !</h2>

            <div className="w-full h-60 rounded-3xl overflow-hidden">
                <img src="https://images.radio-canada.ca/q_auto,w_861/v1/alimentation/recette/16x9/sangria-blanche.jpg" alt="" className="w-full h-60 object-cover	rounded-3xl pb-2 hover:scale-105 duration-500" />
            </div>

        </div>

        {cocktailsProp ? (
            <>
                {/* Last cocktails category section */}
                < LastCocktails cocktailsProp={cocktailsProp} cocktailsAmountProp={4} />
            </>
        ) : (
            <>
                <h2 className="text-4xl font-black pb-12 text-center">Chargement des données...</h2>
                <Spinner />
            </>
        )}

        {/* Random category section */}

        <RandomCategory categoriesProp={categoriesProp}/>

        < Footer />
        </>
    );
    
}

export default HomePage;