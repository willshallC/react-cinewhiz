import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const HeroBanner = () => {
    const [backgroundm, setBackground] = useState("");
    const [query, setQuery] = useState("");
    
    const navigate = useNavigate();
    const searchQueryHandler = (event) =>{
        setQuery('gg');
        if(event.key === "Enter" && query.length > 0 ){
            navigate(`/search/${query}`)
        }
    }
    return(
        <div className="heroBanner">
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Millions of movies , TV shows and people to discover.
                        Explore Now.
                    </span>
                    <div className="searchInput">
                        <input onChange={e=>setQuery(e.target.value)} onKeyUp={searchQueryHandler} type="text" placeholder="Search for a movie or TV show....."/>
                        <button>Search</button>
                    </div>
                </div>
            </div>
            Hero Banner
        </div>
    )
}

export default HeroBanner;