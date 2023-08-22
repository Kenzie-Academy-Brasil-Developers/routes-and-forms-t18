import { useContext } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { ScrapContext } from "../../providers/ScrapContext";
import { Navigate, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { EditScrapForm } from "../../components/forms/EditScrapForm";
import styles from "./style.module.scss";

export const EditScrapPage = () => {
   const { editingScrap, setEditingScrap } = useContext(ScrapContext);

   const navigate = useNavigate();

   return editingScrap ? (
      <DefaultTemplate>
         <main className={styles.editScrapPage}>
            <div className="container sm">
               <button
                  onClick={() => {
                     setEditingScrap(null);
                     navigate("/user");
                  }}
                  className="link"
                  to="/user"
               >
                  <MdArrowBack /> voltar
               </button>
               <h1 className="title center">Altere um scrap</h1>
               <EditScrapForm />
            </div>
         </main>
      </DefaultTemplate>
   ) : (
      <Navigate to="/user" />
   );
};
