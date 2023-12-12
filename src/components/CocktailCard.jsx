import { Link } from 'react-router-dom';

const CocktailCard = ({cocktailIdProp, cocktailNameProp, cocktailInstructionsProp, cocktailThumbProp}) => {

    return (
        <>

            <Link to={`/cocktails/details/${cocktailIdProp}`} className="w-5/6 shadow-lg rounded-xl p-8 mb-6 lg:w-1/2">
                
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
