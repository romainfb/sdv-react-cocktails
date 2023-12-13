import { Link } from 'react-router-dom';

/**
 * This component is a card with the cocktail details
 * 
 * @param {string} cocktailIdProp is the id of the cocktail
 * @param {string} cocktailNameProp is the name of the cocktail
 * @param {string} cocktailInstructionsProp is the instructions of the cocktail
 * @param {string} cocktailThumbProp is the thumbnail of the cocktail
 * 
 * @returns {JSX.Element} a card with the cocktail details
 */

const CocktailCard = ({cocktailIdProp, cocktailNameProp, cocktailInstructionsProp, cocktailThumbProp}) => {

    return (

        <>
            <Link to={`/cocktails/details/${cocktailIdProp}`} className="w-5/6 shadow-lg rounded-xl p-8 mb-6 lg:w-1/2 reveal">
                
                <h3 className="text-2xl font-black pb-4">{cocktailNameProp}</h3>
                
                <div className="w-full h-60 rounded-3xl overflow-hidden">
                    <img src={cocktailThumbProp} alt="" className="w-full h-60 object-cover	rounded-3xl pb-2 hover:scale-105 duration-500" />
                </div>

                <p className="pt-4">{cocktailInstructionsProp}</p>

            </Link>
        </>
        
      );
    }

export default CocktailCard;
