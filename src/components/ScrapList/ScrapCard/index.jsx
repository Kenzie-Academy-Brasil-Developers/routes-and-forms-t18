import { useContext } from "react";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../providers/UserContext";
import { ScrapContext } from "../../../providers/ScrapContext";
import styles from "./style.module.scss";

export const ScrapCard = ({ scrap }) => {
   const { user } = useContext(UserContext);

   const navigate = useNavigate();

   const { deleteScrap, setEditingScrap } = useContext(ScrapContext);

   return (
      <li className={styles.scrapCard}>
         <div>
            <span className="paragraph">
               <strong>{scrap.author}</strong> {scrap.email}
            </span>
            <p className="paragraph">{scrap.content}</p>
         </div>
         <div>
            {user.id === scrap.userId ? (
               <>
                  <button
                     onClick={() => {
                        setEditingScrap(scrap);
                        navigate("/user/edit");
                     }}
                     title="Editar"
                     aria-label="edit"
                  >
                     <MdOutlineEdit size={30} />
                  </button>
                  <button
                     onClick={() => deleteScrap(scrap.id)}
                     title="Remover"
                     aria-label="remove"
                  >
                     <MdOutlineDelete size={30} />
                  </button>
               </>
            ) : null}
         </div>
      </li>
   );
};
