import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Spinner from '../../../components/Spinner';

/**
 * This component is used to display glasses
 * and manage the API call
 * 
 * @returns {JSX.Element} component for glasses page
 */

const GlassesPages = () => {

    const [glasses, setGlasses] = useState(null);

    useEffect(() => {
        (async () => {
            const glassesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
            setGlasses(await glassesResponse.json());
        })();
    }, []);

    return (
        <>
        < Header />

        <div className="flex p-6 my-16 items-center justify-center flex-col">

            {glasses ? (
                <>
                <h2 className="text-4xl font-black text-center mb-20">Nos verres</h2>

                {glasses["drinks"].map((drink, index) => (

                    <Link to={`/cocktails/glasse/${drink.strGlass}`} key={index} className="flex flex-col w-1/2 shadow-lg rounded-xl p-8 mb-6 items-center hover:scale-105 duration-500">
                            <h3 className="text-2xl font-black pb-4">{drink.strGlass}</h3>
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

export default GlassesPages;
