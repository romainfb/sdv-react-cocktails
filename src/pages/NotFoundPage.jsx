import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFoundPage = () => {

    return (
        <div className="h-screen w-screen flex flex-col justify-between">
            <Header />
            <h2 className="text-[20rem] drop-shadow-2xl	text-white font-black text-center">404</h2>
            <Footer />
        </div>
    );
  };
  
  export default NotFoundPage;