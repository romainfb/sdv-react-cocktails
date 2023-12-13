import { Link } from "react-router-dom";

/**
 * This component is the header of the application
 * 
 * @returns {JSX.Element} the header of the application
 */

const Header = () => {

    const handleSearchSubmit = (event) => {

        event.preventDefault();
        const formData = new FormData(event.target);
        const search = formData.get('cocktail');
        window.location.href = `/cocktails/search/${search.replaceAll("/", "§")}`;

    }

    return (

        <header className="w-full h-fit shadow-lg text-stone-950">

            <div className="flex h-fit w-full px-8 justify-between items-center py-6 flex-col lg:flex-row">

                <div className="flex flex-col items-center space-x-2 w-26 lg:flex-row">

                    <Link to={"/"} className="flex flex-row items-center justify-center space-x-2 lg:pb-0 pb-2">
                        <img src="https://cdn.icon-icons.com/icons2/3261/PNG/512/reactjs_logo_icon_206693.png" alt="" className="h-10" />
                        <span className="font-black uppercase text-lg">SDV Cocktails</span>
                    </Link>
                    
                    <div className="flex h-full w-1/2 font-medium text-sm items-center lg:pl-6">
                        <form onSubmit={handleSearchSubmit} className="flex flex-col w-full">

                            <input className="border-[1px] border-stone-950 rounded-full py-2 px-6 placeholder:font-normal" type="text" name="cocktail" placeholder="Recherchez un cocktail..."/>
                            <input className="hidden" type="submit" value="Envoyer" />

                        </form>
                    </div>

                </div>

                <nav className="flex h-full w-fit font-bold uppercase text-sm items-center justify-end flex-col lg:flex-row">
                    <Link to="/" className="flex items-center px-4 h-fit lg:py-0 py-3 pt-10">Accueil</Link>
                    <Link to="/cocktails" className="flex items-center px-4 h-fit lg:py-0 py-3">Nos cocktails</Link>
                    <Link to="/categories" className="flex items-center px-4 h-fit lg:py-0 py-3">Nos catégories</Link>
                    <Link to="/ingredients" className="flex items-center px-4 h-fit lg:py-0 py-3">Nos ingrédients</Link>
                    <Link to="/glasses" className="flex items-center px-4 h-fit lg:py-0 py-3">Nos verres</Link>
                </nav>

            </div>
        
        </header>
        
    );

};
  
export default Header;