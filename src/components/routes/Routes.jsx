import { Routes as ReactDomRoutes } from "react-router-dom";
import { Route } from "react-router-dom";
import Pedido from "../pedido/Pedido";
import LogIn from "../login/LogIn";
export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/pedido' element={<Pedido />} />
      <Route path='/login' element={<LogIn />} />
    </ReactDomRoutes>
  );
};
