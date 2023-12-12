import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {

    return (
        <>
            < Header />

            <div className="flex p-6 my-16 items-center justify-center flex-col px-48">

                <h2 className="text-4xl font-black pb-12 text-center">Bienvenue sur la page d'accueil !</h2>

                <div className="w-full h-96 rounded-3xl overflow-hidden">
                    <img src="https://urlz.fr/oS6R" alt="" className="w-full h-full object-cover rounded-3xl pb-2 hover:scale-105 duration-500" />
                </div>

            </div>

            < Footer />

        </>
      );
    }

export default HomePage;