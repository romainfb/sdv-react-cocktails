const Footer = () => {

    return (
        <footer className="w-full h-20 shadow-lg text-stone-950">

            <div className="flex h-full w-full px-8 justify-between items-center flex-col sm:flex-row">

                <div className="flex flex-row items-center space-x-2">
                    <img src="https://cdn.icon-icons.com/icons2/3261/PNG/512/reactjs_logo_icon_206693.png" alt="" className="h-10" />
                    <span className="font-black uppercase text-lg">SDV Cocktails</span>
                </div>

                <div className="flex h-full w-fit font-medium text-sm items-center">
                    <span className="flex items-center px-4 h-fit italic">Copyright SDV 2023 &#169;</span>
                </div>

            </div>
        
        </footer>
    );
  };
  
  export default Footer;