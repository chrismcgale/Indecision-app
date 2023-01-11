import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndecisionApp from '../components/IndecisionApp';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<IndecisionApp/>} exact={true} />
            <Route element={<NotFoundPage/>} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;