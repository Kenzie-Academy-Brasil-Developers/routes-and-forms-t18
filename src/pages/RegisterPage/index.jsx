import { RegisterForm } from "../../components/forms/RegisterForm";
import pageStyles from "../../styles/modules/pageBox.module.scss" 

export const RegisterPage = () => {
   return (
      <main className={pageStyles.pageBox}>
         <div className="container sm">
            <h1>Register Page</h1>
            <RegisterForm />
         </div>
      </main>
   );
};
