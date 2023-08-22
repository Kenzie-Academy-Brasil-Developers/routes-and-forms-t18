import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ScrapContext = createContext({});

export const ScrapProvider = ({ children }) => {
   const { user } = useContext(UserContext);

   const [scrapList, setScrapList] = useState([]);
   const [editingScrap, setEditingScrap] = useState(null);
   // se for um modal ele pode ser um excelente condição de renderização para o modal.

   console.log(editingScrap);

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

         toast.success("Scrap adicionado com sucesso!");

         navigate("/user"); 
      } catch (error) {
         console.log(error);
      }
   };

   const deleteScrap = async (deletingId) => {
      try {
         const token = localStorage.getItem("@TOKEN");

         await api.delete(`/scraps/${deletingId}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })

         const newScrapList = scrapList.filter(scrap => scrap.id !== deletingId);
         setScrapList(newScrapList);
         toast.success("Scrap excluido com sucesso!");
      } catch (error) {
         console.log(error);
      }
   }

   const editScrap = async (formData) => {
      try {
         const token = localStorage.getItem("@TOKEN");
         
         const { data } = await api.patch(`/scraps/${editingScrap.id}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         const newScrapList = scrapList.map(scrap => {
            //Da nota que eu quero mudar
            if(scrap.id === editingScrap.id){
               return data;
            } else {
               return scrap;
            }
         })

         setScrapList(newScrapList);         
         setEditingScrap(null);

         toast.success("Scrap editado com sucesso!");

         navigate("/user");


      } catch (error) {
         console.log(error)
      }
   }

   return <ScrapContext.Provider value={{ scrapList, createScrap, deleteScrap, editScrap, editingScrap, setEditingScrap }}>{children}</ScrapContext.Provider>;
};
