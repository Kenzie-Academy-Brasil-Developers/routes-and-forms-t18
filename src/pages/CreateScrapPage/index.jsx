import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { CreateScrapForm } from "../../components/forms/CreateScrapForm";

export const CreateScrapPage = () => {
   return (
      <DefaultTemplate>
         <main>
            <div className="container">
               <Link className="link" to="/user">
                  <MdArrowBack /> voltar
               </Link>
               <h1 className="title center">Deixe um scrap</h1>
               <CreateScrapForm />
            </div>
         </main>
      </DefaultTemplate>
   );
};
