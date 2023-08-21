import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export const ScrapContext = createContext({});

export const ScrapProvider = ({ children }) => {
   const { user } = useContext(UserContext);

   const [scrapList, setScrapList] = useState([]);

   const navigate = useNavigate();

   useEffect(() => {
      const getScraps = async () => {
         try {
            const { data } = await api.get("/scraps");
            setScrapList(data);
         } catch (error) {
            console.log(error);
         }
      };
      getScraps();
   }, []);
   //executa uma vez quando o componente for montado.

   /*
   {
    "author": "José da Silva",
    "email": "josedasilva@email.com",
    "content": "Belezinha meu amigão?",
    "userId": 1
    }
    */
   const createScrap = async (formData) => {
      try {
         const token = localStorage.getItem("@TOKEN");

         const newScrap = {
            author: user.name,
            email: user.email,
            userId: user.id,
            ...formData,
         };

         //Atualizando o servidor (back-end)
         const { data } = await api.post("/scraps", newScrap, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         //Atualizar o front-end com manipulação de estado
         setScrapList([...scrapList, data ]);

         navigate("/user"); 
      } catch (error) {
         console.log(error);
      }
   };

   return <ScrapContext.Provider value={{ scrapList, createScrap }}>{children}</ScrapContext.Provider>;
};
