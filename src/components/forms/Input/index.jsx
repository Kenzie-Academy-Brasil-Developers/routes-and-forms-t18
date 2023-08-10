// Props estritas

/*
export const Input = ({ label, type, register }) => {
   // Você precisa executar o register do lado de fora, e espalhar do lado de dentro (aqui no componente) 
   return (
      <div>
         <label>{label}</label>
         <input type={type} {...register} />
      </div>
   );
};
*/


// versatilidade
// ...rest (Prop rest) - absorver qualquer prop que não esteja definada dentro do componente e condensar um objeto
// forwardRef - passar a referência adiante
import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, label, ...rest}, ref) => {
    return (
        <div className={styles.inputBox}>
           <label className="label">{label}</label>
           <input ref={ref} {...rest} />
           {error ? <p className="paragraph">{error.message}</p> : null}
        </div>
     );
});