import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="w-full h-20 shadow-lg text-stone-950">

            <div className="flex h-full w-full px-8 justify-between items-center">

                <div className="flex flex-row items-center space-x-2 w-96">
                    <img src="https://cdn.icon-icons.com/icons2/3261/PNG/512/reactjs_logo_icon_206693.png" alt="" className="h-10" />
                    <span className="font-black uppercase text-lg">SDV Cocktails</span>
                </div>

                <div className="flex h-full w-fit font-medium text-sm items-center">
                    <form className="flex flex-col w-96">

                    <input className="border-[1px] border-stone-950 rounded-full py-2 px-6 placeholder:font-normal" type="text" name="name" placeholder="Recherchez un cocktail..."/>
                    <input className="hidden" type="submit" value="Envoyer" />

                    </form>
                </div>

                <nav className="flex h-full w-96 font-bold uppercase text-sm items-center justify-end">
                    <Link to="/" className="flex items-center px-4 h-fit">Accueil</Link>
                </nav>

            </div>
        
        </header>
    );

};
  
export default Header;