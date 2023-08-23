import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const ScrapContext = createContext({});

export const ScrapProvider = ({ children }) => {
   const { user } = useContext(UserContext);
   
   const client = useQueryClient();

   const { data: scrapList } = useQuery({
      queryKey: ["scraps"],
      queryFn: async () => {
         const { data } = await api.get("/scraps");
         return data;
      },
   });

   const revalidate = () => {
      client.invalidateQueries({ queryKey: "scraps"});
   }

   const [editingScrap, setEditingScrap] = useState(null);

   const navigate = useNavigate();

   const createScrap = useMutation({
      mutationFn: async (formData) => {
         const token = localStorage.getItem("@TOKEN");

         const newScrap = {
            author: user.name,
            email: user.email,
            userId: user.id,
            ...formData,
         };

         return await api.post("/scraps", newScrap, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
      },
      onSuccess: () => {
         revalidate();
         toast.success("Scrap adicionado com sucesso!");
         navigate("/user");
      }
   })
   
   const deleteScrap = useMutation({
      mutationFn: async (deletingId) => {
         const token = localStorage.getItem("@TOKEN");

         return await api.delete(`/scraps/${deletingId}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });  
      },
      onSuccess: () => {
         revalidate();
         toast.success("Scrap excluido com sucesso!");
      }
   })

   const editScrap = useMutation({
      mutationFn: async (formData) => {
         const token = localStorage.getItem("@TOKEN");

         return await api.patch(`/scraps/${editingScrap.id}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
      },
      onSuccess: () => {
         revalidate();
         setEditingScrap(null);

         toast.success("Scrap editado com sucesso!");

         navigate("/user");
      }
   })

   return (
      <ScrapContext.Provider
         value={{
            scrapList,
            createScrap,
            deleteScrap,
            editScrap,
            editingScrap,
            setEditingScrap,
         }}
      >
         {children}
      </ScrapContext.Provider>
   );
};
