import React, { useEffect } from 'react';
import { Route, Routes, useNavigate} from "react-router-dom";
import Layout from "./layout";
import { privateRoutes, publicRoutes } from '../routes';

export const AppRouter = () => {
  const auth = localStorage.getItem('auth')
  const nav = useNavigate()

  useEffect(() => {
    auth === 'true' ? nav('/') : nav('/sign-in')
  }, [auth])
  
  return (
    <Routes>
      { auth === 'true' ? 
        <Route path={'/'} element={<Layout/>}>
          {privateRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.page} />          
          ))}
        </Route>
        : 
          publicRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.page} />            
          ))
      }
    </Routes>
  );
}

export default AppRouter;
