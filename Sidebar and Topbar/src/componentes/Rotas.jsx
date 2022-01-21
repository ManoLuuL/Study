import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Paginas/Home';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from '../Paginas/Reports';
import Produtos from '../Paginas/Produtos';
import User from '../Paginas/User/User';
import Login from '../Paginas/Login/Login';
import Cdprodutos from '../Paginas/CadastroProdutos/CdProduto';

export default function Rotas() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/user' exact element={<User />} />
          <Route path='/reports' exact element={<Reports />} />
          <Route path='/reports/reports1' exact element={<ReportsOne />} />
          <Route path='/reports/reports2' exact element={<ReportsTwo />} />
          <Route path='/reports/reports3' exact element={<ReportsThree />} />
          <Route path='/produtos' exact element={<Produtos />} />
          <Route path='/Cdprodutos' exact element={<Cdprodutos />} />
        </Routes>

    </BrowserRouter>
    )
}
