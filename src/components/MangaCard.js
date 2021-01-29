import { Form } from './Form'
import { useState } from "react";
export function MangaCard({manga,input}){

    let { title, image } = manga
    let [flipped,setFlip] = useState("flip-card")
    let flipCard = () => {
        flipped === "flip-card"? setFlip("flip-card reverse") : setFlip("flip-card")
    }

    let submitAction = (event) =>{
        event.preventDefault()
        let formData = new FormData(event.target)
        let id = formData.get('id')
        let rating = formData.get('Overall Rating')
        let heroJourney= formData.get("Hero's Journey")
        let powerFantasy = formData.get('Power Fantasy')
        let worldBuilding = formData.get('World Building')
        flipped.includes("reverse")? setFlip("flip-card") : setFlip("flip-card reverse") 
        fetch('http://localhost:3000/user_ratings',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                user_rating:{
                    rating,
                    hero_journey: heroJourney,
                    power_fantasy: powerFantasy,
                    world_building: worldBuilding,
                    manga_id: id
                }
            })
        })
            .then(response => response.json())
            .then(console.log)
    }


    return(
        <div className={flipped}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={image} alt={title} className="manga-card"/>
                    <p>{title}</p>
                    <button onClick={flipCard}>Rate This Manga</button>
                </div>
                <div className="flip-card-back">
                    <Form submitAction={submitAction} input={input} manga={manga}/>
                </div>
            </div>
        </div>
        )
    }