import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";

export const LoginForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(loginFormSchema),
   });

   const submit = (formData) => {
      console.log(formData);
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            label="Seu e-mail"
            type="email"
            {...register("email")}
            error={errors.email}
         />
         <InputPassword
            label="Sua senha"
            {...register("password")}
            error={errors.password}
         />
         <div>
            <Link className="link" to="/register">cadastre-se</Link>
            <button className="btn outline" type="submit">acessar scraplex</button>
         </div>
      </form>
   );
};
