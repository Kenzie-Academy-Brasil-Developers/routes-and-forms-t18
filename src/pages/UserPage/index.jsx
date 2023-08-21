import { DefaultTemplate } from "../../components/DefaultTemplate";
import { ScrapList } from "../../components/ScrapList";
import styles from "./style.module.scss";

export const UserPage = () => {
   return (
      <DefaultTemplate>
         <main className={styles.userPage}>
            <div className="container">
               <ScrapList />
            </div>
         </main>
      </DefaultTemplate>
   );
};
