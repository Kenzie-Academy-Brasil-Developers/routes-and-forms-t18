import { LoginForm } from "../../components/forms/LoginForm";
import pageStyles from "../../styles/modules/pageBox.module.scss";
import styles from "./style.module.scss";
import Logo from "../../assets/Logo.svg";

export const HomePage = ({ setUser }) => {
   /*
    const [example, setExample] = useState([]);
    const [example, setExample] = useState(null | {});
    setExample(novo valor do estado)
    
    let example = ""
    example = novo valor da variável
    */
   return (
      <main className={pageStyles.pageBox}>
         <div className="container sm">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Scraplex" />
               <LoginForm setUser={setUser} />
            </div>
         </div>
      </main>
   );
};
