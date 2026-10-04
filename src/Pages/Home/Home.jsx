import React from "react";
import './Home.css'
import Sidebar from "../../component/Sidebar/Sidevar";
import Feed from "../../component/Feed/Feed";

 
const Home = ({sidebar})=>{

    return(
        <>
        <Sidebar sidebar={sidebar}/>
        <div className={`container ${sidebar?"":`large-container`}`}>
            <Feed/>
        </div>
        </>
    )
}

export default Home;