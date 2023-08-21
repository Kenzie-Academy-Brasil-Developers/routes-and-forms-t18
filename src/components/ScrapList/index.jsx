import { useContext } from "react"
import { Link } from "react-router-dom"
import { ScrapContext } from "../../providers/ScrapContext"
import { ScrapCard } from "./ScrapCard";

export const ScrapList = () => {
    const { scrapList } = useContext(ScrapContext);
    return(
        <div>
            <div>
                <h1 className="title">Lista de scraps</h1>
                <Link className="btn solid" to="/user/create">Deixar scrap</Link>
            </div>
            <ul>
                {scrapList.map(scrap => (
                    <ScrapCard key={scrap.id} scrap={scrap} />
                ))}
            </ul>
        </div>
    )
}