import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";

export const NewsPage = () => {
   const { user } = useContext(UserContext);

   return (
      <main>
         <div className="container">
            {user ? (
               <>
                  <h2 className="title">Seja bem vindo(a) {user.name}!</h2>
                  <Link to="/user">Usuário</Link>
               </>
            ) : (
               <div>
                  <h2>Faça login agora!</h2>
                  <Link to="/" state={{ lastRoute: "/news" }}>
                     Login
                  </Link>
               </div>
            )}
         </div>
      </main>
   );
};
