import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { api } from "../../../services/api";
import { useState } from "react";

/*
{
    "name": "José da Silva",
    "email": "josedasilva@email.com",
    "password": "123456",
} 
*/

export const RegisterForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid, isDirty },
      watch,
   } = useForm({      
      resolver: zodResolver(registerFormSchema),
   });

   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const userRegister = async (formData) => {
      try {
         setLoading(true);
         await api.post("/users", formData);
         navigate("/");
         alert("Cadastro realizado com sucesso!");
      } catch (error) {
         console.log(error);
         if (error.response?.data === "Email already exists") {
            alert("Usuário já cadastrado");
         }
      } finally {
         setLoading(false);
      }
   };

   const submit = (formData) => {
      userRegister(formData);
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            label="Seu nome"
            type="text"
            {...register("name")}
            error={errors.name}
            disabled={loading}
         />

         <Input
            label="Seu e-mail"
            type="email"
            {...register("email")}
            error={errors.email}
            disabled={loading}
         />

         <InputPassword
            label="Crie uma senha"
            {...register("password")}
            error={errors.password}
            disabled={loading}
         />

         <InputPassword
            label="Crie uma senha"
            {...register("confirmPassword")}
            error={errors.confirmPassword}
            disabled={loading}
         />

         <div>
            <Link className="link" to="/">
               voltar
            </Link>
            <button className="btn outline" disabled={!isValid || !isDirty}>
               {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
         </div>
      </form>
   );
};
