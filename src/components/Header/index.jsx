import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa"

// a - redirecionamentos externos a aplicação
// Link - redirecionamento interno (rotas criadas com o React Router Dom)

export const Header = () => {
   return (
      <header>
         Header
         <nav>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/register">Registro</Link>
               </li>
               <li>
                  <Link to="/contact">Contato</Link>
               </li>
            </ul>
         </nav>
         <ul>
            <li>
                <a href="#" title="Facebook" aria-label="facebook">
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href="#" title="Instagram" aria-label="instagram">
                    <FaInstagram />
                </a>
            </li>
         </ul>
      </header>
   );
};
