import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../componentes/topbar/Topbar';

const Produtos = () => {
  return (
    <>
      <Topbar />

      <div className='produtos'>
        <h1>Produtos</h1>
        <Link to='/Cdprodutos'>teste</Link>
      </div>
    </>
  );
};

export default Produtos;
