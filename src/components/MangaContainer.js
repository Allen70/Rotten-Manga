import { MangaCard } from './MangaCard'
// import { Form } from "./Form";
export function MangaContainer({mangas}){

    let showManga = () => mangas.map((manga)=> <MangaCard input={"Rate Manga"} manga={manga}/>)

    return(
        <div className="manga-container">
            {showManga()}
        </div>
    )
}