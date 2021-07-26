import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../components/Slider";

const Home = (props) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await axios.get("/api/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setUser(res.data);
  };
  
  useEffect(() => {
    getUser();
  }, []);

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   props.history.push("/login");
  // };

  if (!localStorage.getItem("token")) {
    // props.history.push("/home");
    window.location.href="/login";
   
  }
  
  return (
    <div className="#a5d6a7 green lighten-3">
      <div className="jumbotron">
        <p className="center-align white-text">Welcome {user && user.fname}</p>
      </div>
      <Slider />
    </div>
    
  );
};

export default Home;
