import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./style.module.scss";

export const UserPage = ({user, userLogout}) => {
   return (
      <DefaultTemplate user={user} userLogout={userLogout}>
         <main className={styles.userPage}>
            <div className="container">
               <h1 className="title">Desculpe! Aplicação em desenvolvimento...</h1>
            </div>
         </main>
      </DefaultTemplate>
   );
};
