import React from 'react';
import Topbar from '../componentes/topbar/Topbar';
import FeuaturedInf from '../componentes/Featuredinf/Featuredinf';


const Home = () => {
  return (
    <>
      <Topbar />
      <div className='home'>
      <FeuaturedInf />
      </div>
    </>
  );
};

export default Home;
