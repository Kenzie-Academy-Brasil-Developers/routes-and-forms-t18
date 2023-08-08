import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";

export const RegisterForm = () => {
   // register - ele é o método para registrar os campos (vai resultar na captura dos valores)
   // handleSubmit - serve de apoio para função envio, e consegue trazer os campos registrados em um objeto
   const { register, handleSubmit } = useForm();

   const submit = (formData) => {
    console.log(formData);
   }
  
   return (
      <form onSubmit={handleSubmit(submit)}>
         {/* <Input label={label} type="text" register={register("name")} */}
         <Input label="Seu nome" type="text" {...register("name")} />
         <Input label="Seu e-mail" type="email" {...register("email")} />
         <InputPassword label="Crie uma senha" {...register("password")} />
         <div>
            <Link to="/">voltar</Link>
            <button>Cadastre-se</button>
         </div>
      </form>
   );
};
