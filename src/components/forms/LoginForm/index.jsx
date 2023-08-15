import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset
   } = useForm({
      resolver: zodResolver(loginFormSchema),
   });

   const [loading, setLoading] = useState(false);  

   const { userLogin } = useContext(UserContext);

   const submit = (formData) => {
      userLogin(formData, setLoading, reset);      
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            label="Seu e-mail"
            type="email"
            {...register("email")}
            error={errors.email}
            disabled={loading}
         />
         <InputPassword
            label="Sua senha"
            {...register("password")}
            error={errors.password}
            disabled={loading}
         />
         <div>
            <Link className="link" to="/register" disabled={loading}>cadastre-se</Link>
            <button className="btn outline" type="submit">
               {loading ? "acessando..." : "acessar scraplex"}
            </button>
         </div>
      </form>
   );
};
