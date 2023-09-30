import { Routes as ReactDomRoutes } from "react-router-dom";
import { Route } from "react-router-dom";
import Pedido from "../pedido/Pedido";
import LogIn from "../login/LogIn";
import { NewOrder } from "../newOrder/NewOrder";
import Proveedor from "../proveedor/Proveedor";
export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/pedido' element={<Pedido />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/pedido/nueva-orden' element={<NewOrder />} />
      <Route path='/proveedor' element={<Proveedor />} />
    </ReactDomRoutes>
  );
};
