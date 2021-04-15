import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './routes';

const Routes = () => {
    return (
        <BrowserRouter>
            <CustomRoutes />
        </BrowserRouter>
    )
}

export default Routes
