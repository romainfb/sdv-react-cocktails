import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CocktailDetailsPage = () => {

    const {id } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        (async () => {

            const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

            // Verification of id type, if not a number, set details to null
            // API don't manage this case, return a 200 response with no body returned for response

            try {
                const cocktailsResponseData = await cocktailsResponse.json();
                setDetails(cocktailsResponseData);
            } catch (error) {
                setDetails({ "drinks": null });
                console.log(error);
            }

        })();
    }, [id]);

    return (
        <>
            < Header />

            <div className="flex p-6 my-16 items-center justify-center flex-col">

                {details ? (

                    <>
                        {details["drinks"] ? (

                            <div className="flex flex-col w-5/6 lg:w-1/2 shadow-lg rounded-xl p-8 mb-6 items-left">

                                <h3 className="text-2xl font-black pb-4">{details["drinks"][0].strDrink}</h3>

                                <div className="w-full h-60 rounded-3xl overflow-hidden">
                                    <img src={details["drinks"][0].strDrinkThumb} alt="" className="w-full h-60 object-cover rounded-3xl pb-2 hover:scale-105 duration-500" />
                                </div>

                                <p className="pt-4"><strong>Catégorie:</strong> <Link to={`/categories/${details["drinks"][0].strCategory}`}>{details["drinks"][0].strCategory}</Link></p>
                                <p className="pt-4 pb-3"><strong>Ingrédients:</strong></p>

                                {Object.keys(details["drinks"][0]).map((key) => {
                                    if (key.includes("strIngredient") && details["drinks"][0][key] !== null) {
                                        return (
                                            <Link to={`/cocktails/ingredient/${details["drinks"][0][key]}`} key={details["drinks"][0][key]}> <li>{details["drinks"][0][key]}</li> </Link>
                                        )
                                    } return null;
                                })}

                                <p className="pt-4 pb-3"><strong>Modifié le:</strong> {details["drinks"][0].dateModified}</p>
                                <p className="pt-4">{details["drinks"][0].strInstructions}</p>

                                <Link to="/cocktails" className="pt-4 font-black italix">Retour aux cocktails &#187;</Link>

                            </div>

                        ) : (
                            <h2 className="text-4xl font-black pb-12 text-center">Aucun cocktail n'a été trouvée avec cet identifiant</h2>
                        )}

                    </>
                ) : (
                    <h2 className="text-4xl font-black pb-12 text-center">Chargement des détails...</h2>
                )}

            </div>

            < Footer />
        </>
      );
    }

export default CocktailDetailsPage;
