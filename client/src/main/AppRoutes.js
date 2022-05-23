import React from 'react'
import {Route,BrowserRouter} from "react-router-dom";

import Home from '../Screens/Home/Home'
import Login from '../Screens/Login/Login'

import CatUpdate from '../Screens/Cat/Update/CatUpdate';
import CatFeed from '../Screens/Cat/Feed/CatFeed';
import CatRegister from '../Screens/Cat/Register/CatRegister';
import DeleteCat from '../Screens/Cat/delete/DeleteCat';

import PersonUpdate from '../Screens/Person/Update/PersonUpdate';
import PersonFeed from '../Screens/Person/Feed/PersonFeed';
import DeletePerson from '../Screens/Person/delete/DeletePerson';
import PersonRegister from '../Screens/Person/Register/PersonRegister';




function AppRoutes() {
    return(
        <BrowserRouter>
            <Route component={Home} path="/home"/>
            <Route component={Login} path="/" exact/>

            <Route component={CatUpdate} path="/catupdate" />
            <Route component={CatFeed} path="/catfeed" />
            <Route component={CatRegister} path="/catregister" />
            <Route component={DeleteCat} path="/catdelete" />

            <Route component={PersonRegister } path="/personRegister" />
            <Route component={PersonUpdate} path="/personupdate" />
            <Route component={PersonFeed} path="/personfeed" />
            <Route component={DeletePerson} path="/persondelete" />


            

        </BrowserRouter>
    );
}

export default AppRoutes;