import { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
   const { user, userLogout } = useContext(UserContext);

   return (
      <header>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Scraplex" />
               <div>
                  <div>
                     <p className="paragraph">{user?.name}</p>
                     <p className="paragraph">{user?.email}</p>
                  </div>

                  <button className="btn outline" onClick={() => userLogout()}>
                     Sair
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};
