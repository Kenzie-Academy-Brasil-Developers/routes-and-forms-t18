import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
   const { register, handleSubmit } = useForm(); 

   const submit = (formData) => {
    console.log(formData);
   }

   return (
      <form onSubmit={handleSubmit(submit)}>
         <label>Seu e-mail</label>
         <input type="email" {...register("email")} />
         <label>Seu senha</label>
         <input type="password" {...register("password")} />
         <div>
            <Link to="/register">cadastre-se</Link>
            <button type="submit">acessar scraplex</button>
         </div>
      </form>
   );
};
