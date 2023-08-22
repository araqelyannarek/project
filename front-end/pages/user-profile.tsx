import {NextPage} from "next";
import { useGetUser } from '../hooks/useSyncUser';
import WelcomeUser from "../components/user-info/WelcomeUser";
import React, {useEffect} from "react";

const User: NextPage = () => {

    let username;
    
    useEffect(() => {
        // getUser();
        username = localStorage.getItem("user_name")
    }, []);

    return ( <WelcomeUser userInfo={username?username:""}/> )
}

export default User;