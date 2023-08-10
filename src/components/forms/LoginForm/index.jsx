import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useState } from "react";
import { api } from "../../../services/api";

export const LoginForm = ({setUser}) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset
   } = useForm({
      resolver: zodResolver(loginFormSchema),
   });

   const navigate = useNavigate();

   const [loading, setLoading] = useState(false);

   // data, loading, error
   const userLogin = async (formData) => {
      try {
         setLoading(true);
         const { data } = await api.post("/login", formData);
         setUser(data.user);
         localStorage.setItem("@TOKEN", data.accessToken);
         reset();
         navigate("/user");
         
      } catch (error) {
         console.log(error);
         if(error.response?.data === "Incorrect password"){
            alert("O e-mail e a senha não correspondem.");
         }
      } finally {
         setLoading(false);
      }
   }  

   const submit = (formData) => {
      userLogin(formData);      
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
