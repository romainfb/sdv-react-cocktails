import { Link } from "react-router-dom";

const Header = () => {

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const search = formData.get('cocktail');
        window.location.href = `/cocktails/search/${search}`;
    }

    return (
        <header className="w-full h-fit shadow-lg text-stone-950">

            <div className="flex h-20 w-full px-8 justify-between items-center">

                <div className="flex flex-row items-center space-x-2 w-26">
                    <img src="https://cdn.icon-icons.com/icons2/3261/PNG/512/reactjs_logo_icon_206693.png" alt="" className="h-10" />
                    <span className="font-black uppercase text-lg">SDV Cocktails</span>

                    <div className="flex h-full w-1/2 font-medium text-sm items-center pl-6">
                        <form onSubmit={handleSearchSubmit} className="flex flex-col w-96">

                            <input className="border-[1px] border-stone-950 rounded-full py-2 px-6 placeholder:font-normal" type="text" name="cocktail" placeholder="Recherchez un cocktail..."/>
                            <input className="hidden" type="submit" value="Envoyer" />

                        </form>
                    </div>

                </div>

                <nav className="flex h-full w-fit font-bold uppercase text-sm items-center justify-end">
                    <Link to="/" className="flex items-center px-4 h-fit">Accueil</Link>
                    <Link to="/cocktails" className="flex items-center px-4 h-fit">Nos cocktails</Link>
                    <Link to="/categories" className="flex items-center px-4 h-fit">Nos catégories</Link>
                    <Link to="/ingredients" className="flex items-center px-4 h-fit">Nos ingrédients</Link>
                    <Link to="/glasses" className="flex items-center px-4 h-fit">Nos verres</Link>
                </nav>

            </div>
        
        </header>
    );

};
  
export default Header;