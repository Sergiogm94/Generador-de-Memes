import { useState } from "react";
import { MemeContext } from "../Context/MemeContext";
import Gallery from "../Components/Gallery/Gallery";
import Form from "../Components/Form/Form";
import "./Home.scss";

const Home = () => {
    const [text, setText] = useState();

    
    
    return(
        <div className="container">
            <MemeContext.Provider value={{text, setText}}>
                <Form></Form>
                <Gallery></Gallery>
            </MemeContext.Provider>
        </div>
    )
}

export default Home;