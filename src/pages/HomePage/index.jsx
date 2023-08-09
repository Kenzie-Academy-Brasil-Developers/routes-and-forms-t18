import { useState } from "react"
import { LoginForm } from "../../components/forms/LoginForm"
import pageStyles from "../../styles/modules/pageBox.module.scss" 

export const HomePage = () => {
    /*
    const [example, setExample] = useState([]);
    const [example, setExample] = useState(null | {});
    setExample(novo valor do estado)
    
    let example = ""
    example = novo valor da variável
    */
    return(
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <LoginForm />
            </div>            
        </main>
    )
}