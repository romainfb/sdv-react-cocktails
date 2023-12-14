import { Link } from 'react-router-dom';
import Spinner from './Spinner';

/**
 * This component is a section with a random category
 * 
 * @param {object} categoriesProp is the categories object
 * 
 * @returns {JSX.Element} a section with a random category
 */

const RandomCategory = ({categoriesProp}) => {

    const category = categoriesProp ? categoriesProp["drinks"][Math.floor(Math.random() * categoriesProp["drinks"].length)] : null;

    return (

        <section className="flex p-6 my-16 items-center justify-center flex-col">

            {category ? (
                <>

                    <Link to="/categories" className='mb-12'>
                        <h2 className="text-4xl font-black text-center mb-20">Catégorie aléatoire</h2>
                    </Link>

                    <Link to={`/cocktails/category/${category.strCategory.replaceAll('/', '§')}`} className="flex flex-col w-1/2 shadow-lg rounded-xl p-8 mb-6 items-center">
                            <h3 className="text-2xl font-black pb-4">{category.strCategory}</h3>
                    </Link>
                    
                </>
            ) : (
                <>
                    <h2 className="text-4xl font-black pb-12 text-center">Chargement de la catégorie...</h2>
                    <Spinner />
                </>
            )}

        </section>

    );

}

export default RandomCategory;