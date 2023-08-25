import {NextPage} from "next";
import WelcomeUser from "../components/user-info/WelcomeUser";
import React, {useEffect, useState} from "react";

const User: NextPage = () => {
    const [userName, setUsername] = useState("");

    useEffect(() => {
      const user = localStorage.getItem("user_name")
      setUsername(user || ''); 
    }, [])
  

    return ( <WelcomeUser userInfo={userName && userName}/> )
}

export default User;