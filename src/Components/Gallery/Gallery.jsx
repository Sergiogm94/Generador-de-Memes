import {useEffect, useState } from "react";
import "./Gallery.scss";
import axios from "axios";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";


const Gallery = () => {
    const [memes, setMemes] = useState([]);
    const [memesFiltered, setMemesFiltered] = useState([]);

    useEffect((() => {
        const getMeme = async () => {
            const {data} = await axios.get("https://api.imgflip.com/get_memes");
            console.log(data.data.memes);
            setMemes(data.data.memes);
            setMemesFiltered(data.data.memes)
        }
        getMeme();
    }),[]);

    const searchMeme = (name) => {
        const filtered = memes.filter((meme) => meme.name.toLowerCase().includes(name.toLowerCase()))
        setMemesFiltered(filtered);
        
    }
   

    return(
        <div className="gallery">
        <Filter search={searchMeme}></Filter>
            {memesFiltered.map((item) => {
                return(
                    <div className="meme" key={item.id}>
                      <Card item={item}></Card>
                    </div>
                )
                
            })}
        </div>
        
    )
}
export default Gallery;