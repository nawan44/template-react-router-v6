import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "../components";
// import { Login, MainApp } from "../pages";
import Login from "../page/Login"
import Dashboard from "../page/Dashboard"
import PrivateRoute from "../component/atoms/PrivateRoute"
import MainApp from "../main"
import Public from "../page/Public";
import TopBar from "../component/view/appBar";
import ShippingComps from "../page/Shipping Comps";
import Layout from "../component/view/layout";
import AddShippingComps from "../page/Add Shipping Comps"

export default function Routers() {
  return (

<Router>

  <Routes>
    {/* <Route exact path='/private' element={<PrivateRoute/>}>
      <Route exact path='/private' element={<Dashboard/>}/>
    </Route> */}
        <Route element={<Layout />}>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shipping-comps" element={<ShippingComps />} />
        <Route path="/add-shipping-comps" element={<AddShippingComps />} />


        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    <Route exact path='/login' element={<Public/>}/>
    <Route exact path='/profile' element={<Public/>}/>

  </Routes>
</Router>
  );
}
