import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";

export const ScrapCard = ({ scrap }) => {
   return (
      <li>
         <div>
            <span className="paragraph">
               <strong>{scrap.author}</strong> {scrap.email}
            </span>
            <p className="paragraph">{scrap.content}</p>
         </div>
         <div>
            <button title="Editar" aria-label="edit">
               <MdEdit />
            </button>
            <button title="Remover" aria-label="remove">
               <MdDelete />
            </button>
            <Link to="" title="Visualizar nota" aria-label="view">
               <MdVisibility />
            </Link>
         </div>
      </li>
   );
};
