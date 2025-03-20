
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-sphinx-black dark:bg-sphinx-black text-sphinx-lightGray">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-24">
        <div className="text-center px-4 max-w-lg mx-auto">
          <span className="inline-block bg-sphinx-orange/10 text-sphinx-orange px-4 py-1 rounded-full text-sm font-medium mb-4">
            404 Error
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sphinx-white">Pagina niet gevonden</h1>
          <p className="text-xl text-sphinx-lightGray mb-8">
            De pagina die u probeert te bezoeken bestaat niet of is verplaatst.
          </p>
          
          <a 
            href="/" 
            className="btn-primary inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
