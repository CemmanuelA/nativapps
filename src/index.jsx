//dependecias
import React from 'react';
import {render}from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom'
//rutas
import AppRoutes from './routes.jsx';


render(<HashRouter>
                    <AppRoutes />
                </HashRouter>, document.getElementById('app'));
