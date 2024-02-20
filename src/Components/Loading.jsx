import '../Styles/Loading.css';
import React from 'react';
import TypeIt from "typeit-react";
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="notfoundcard">
      <TypeIt options={{loop:true}}>Loading...</TypeIt>
      </div>
    </div>
  );
};

export default LoadingScreen;
