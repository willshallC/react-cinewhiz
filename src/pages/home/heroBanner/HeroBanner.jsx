import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import "./style.scss";
import Img from "../../../components/laztLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    
    const navigate = useNavigate();
    const { url } = useSelector((state)=> state.home)
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(()=>{
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
        setBackground(bg)
        console.log(bg)
    },[data])
    console.log(data);
    const searchQueryHandler = (event) =>{
        if(event.key === "Enter" && query.length > 0 ){
            navigate(`/search/${query}`)
        }
    }
    return(
        <div className="heroBanner">
            { !loading &&  <div className="backdrop-img">
                <Img  src={background}/>
            </div> }
            <div className="opacity-layer"></div>
            <ContentWrapper>   
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
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner;