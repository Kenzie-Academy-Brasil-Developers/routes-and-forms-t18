import { useForm } from "react-hook-form"
import { Textarea } from "../Textarea"
import { useContext } from "react";
import { ScrapContext } from "../../../providers/ScrapContext";
import styles from "./style.module.scss";

export const EditScrapForm = () => {
    const { editingScrap, editScrap } = useContext(ScrapContext);

    const { register, handleSubmit } = useForm({
        values: {
            content: editingScrap.content
        }
    });   
    
    const submit = (formData) => {
        editScrap.mutate(formData);
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <Textarea label="Sua mensagem" {...register("content")} />
            <button type="submit" className="btn solid">Editar scrap</button>
        </form>
    )
}