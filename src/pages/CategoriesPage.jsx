import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesPages = () => {

    const [categories, setCategories] = useState(null);
    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            setCategories(await categoriesResponse.json());
        })();
    }, []);

    return (
        <>
        < Header />

        <div className="flex p-6 my-16 items-center justify-center flex-col">

            {categories ? (
                <>
                <h2 className="text-4xl font-black text-center mb-20">Nos catégories</h2>
                {categories["drinks"].map((drink, index) => (

                    <Link to={`/categories/${drink.strCategory.replaceAll('/', '-')}`} key={index} className="flex flex-col w-1/2 shadow-lg rounded-xl p-8 mb-6 items-center">
                            <h3 className="text-2xl font-black pb-4">{drink.strCategory}</h3>
                    </Link>
                    
                ))}
                </>
            ) : (
                <h2 className="text-4xl font-black pb-12 text-center">Chargement des catégories...</h2>
            )}


        </div>


        < Footer />
        </>
      );
    }

export default CategoriesPages;
