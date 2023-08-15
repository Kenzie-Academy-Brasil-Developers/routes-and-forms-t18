import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const navigate = useNavigate();

   const userLogin = async (formData, setLoading, reset) => {
      try {
         setLoading(true);
         const { data } = await api.post("/login", formData);
         setUser(data.user);
         localStorage.setItem("@TOKEN", data.accessToken);
         reset();
         navigate("/user");
      } catch (error) {
         console.log(error);
         if (error.response?.data === "Incorrect password") {
            toast.error("O e-mail e a senha não correspondem.");
         }
      } finally {
         setLoading(false);
      }
   };

   const userRegister = async (formData, setLoading) => {
      try {
         setLoading(true);
         await api.post("/users", formData);
         navigate("/");
         toast.success("Cadastro realizado com sucesso!");
      } catch (error) {
         console.log(error);
         if (error.response?.data === "Email already exists") {
            toast.error("Usuário já cadastrado");
         }
      } finally {
         setLoading(false);
      }
   };

   const userLogout = () => {
      setUser(null);
      navigate("/");
      localStorage.removeItem("@TOKEN");
      toast.warning("Deslogando...")
   };

   return (
      <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>
         {children}
      </UserContext.Provider>
   );
};
