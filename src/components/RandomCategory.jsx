import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

/**
 * This component is a section with a random category
 * 
 * @returns {JSX.Element} a section with a random category
 */

const RandomCategory = () => {

    const [category, setCategories] = useState(null);

    useEffect(() => {
        (async () => {

            const categoriesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const categoriesResponseData = await categoriesResponse.json();

            setCategories(categoriesResponseData["drinks"][Math.floor(Math.random() * categoriesResponseData["drinks"].length)]);

        })();
    }, []);


    return (

        <section className="flex p-6 my-16 items-center justify-center flex-col">

            {category ? (
                <>

                    <Link to="/categories" className='mb-12'>
                        <h2 className="text-4xl font-black text-center mb-20">Catégorie aléatoire</h2>
                    </Link>

                    <Link to={`/cocktails/category/${category.strCategory}`} className="flex flex-col w-1/2 shadow-lg rounded-xl p-8 mb-6 items-center">
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