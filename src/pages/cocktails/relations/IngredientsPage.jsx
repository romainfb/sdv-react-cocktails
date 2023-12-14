import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Spinner from '../../../components/Spinner';

/**
 * This component is used to display ingredients
 * and manage the API call
 * 
 * @param {object} ingredientsProp ingredients object
 * 
 * @returns {JSX.Element} component for ingredients page
 */

const IngredientsPages = ({ingredientsProp}) => {

    return (
        <>
        < Header />

        <div className="flex p-6 my-16 items-center justify-center flex-col">

            {ingredientsProp ? (
                <>
                <h2 className="text-4xl font-black text-center mb-20">Nos ingrédients</h2>

                {ingredientsProp["drinks"].map((drink, index) => (

                    <Link to={`/cocktails/ingredient/${drink.strIngredient1}`} key={index} className="flex flex-col w-1/2 shadow-lg rounded-xl p-8 mb-6 items-center">
                            <h3 className="text-2xl font-black pb-4">{drink.strIngredient1}</h3>
                            <img src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png`} alt="" />
                    </Link>
                    
                ))}
                </>
            ) : (
                <>
                    <h2 className="text-4xl font-black pb-12 text-center">Chargement des catégories...</h2>
                    <Spinner />
                </>
            )}

        </div>

        < Footer />
        </>
    );

}

export default IngredientsPages;
