import '../Styles/Loading.css';
import React from 'react';
import { PacmanLoader } from 'react-spinners';


const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <PacmanLoader color={'#36D7B7'} size={50} />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
