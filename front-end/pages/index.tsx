import React, { useState, useEffect } from 'react';
import WelcomeUser from "../components/user-info/WelcomeUser";
import Hero from "../components/home/Hero";
import Possibility from "../components/home/Possibility";
import ListHeadingSlider from "../components/home/ListHeadingSlider";

export default function Index() {
    const [username, setUsername] = useState<string|null>("");
    useEffect(() => {
        let user = localStorage.getItem("user_token");
        setUsername(user)
    }, []);
    
    return (
        <> 
            {username && <WelcomeUser userInfo={username}/>}
            <Hero/>
            <ListHeadingSlider />
            <Possibility/>
            
        </>
    );
}