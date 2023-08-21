import { useForm } from "react-hook-form"
import { Textarea } from "../Textarea"
import { useContext } from "react";
import { ScrapContext } from "../../../providers/ScrapContext";

export const CreateScrapForm = () => {
    const { register, handleSubmit } = useForm();

    const { createScrap } = useContext(ScrapContext);
    
    const submit = (formData) => {
        createScrap(formData);
    }

    return(
        <form on onSubmit={handleSubmit(submit)}>
            <Textarea label="Sua mensagem" {...register("content")} />
            <button type="submit" className="btn solid">Deixar um scrap</button>
        </form>
    )
}