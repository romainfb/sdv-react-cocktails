import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * This component is used to display the 404 page
 * 
 * @returns {JSX.Element} component for 404 page
 */

const NotFoundPage = () => {

    return (
        <div className="h-screen w-screen flex flex-col justify-between">
            <Header />
            <h2 className="text-[20rem] drop-shadow-2xl	text-white font-black text-center animate-bounce">404</h2>
            <Footer />
        </div>
    );

};
  
export default NotFoundPage;