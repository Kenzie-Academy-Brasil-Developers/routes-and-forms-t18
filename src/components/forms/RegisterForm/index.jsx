import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";

export const RegisterForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(registerFormSchema),
   });

   const submit = (formData) => {
      console.log(formData);
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input label="Seu nome" type="text" {...register("name")} error={errors.name} />

         <Input
            label="Seu e-mail"
            type="email"
            {...register("email")}
            error={errors.email}
         />

         <InputPassword
            label="Crie uma senha"
            {...register("password")}
            error={errors.password}
         />

         <InputPassword
            label="Crie uma senha"
            {...register("confirmPassword")}
            error={errors.confirmPassword}
         />

         <div>
            <Link className="link" to="/">voltar</Link>
            <button className="btn outline">Cadastre-se</button>
         </div>
      </form>
   );
};
