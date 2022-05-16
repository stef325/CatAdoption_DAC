import React from 'react'
import {Route,BrowserRouter} from "react-router-dom";

import Home from '../Screens/Home'
import CatUpdate from '../Screens/Cat/Update/CatUpdate';
import PersonUpdate from '../Screens/Person/Update/PersonUpdate';
import CatFeed from '../Screens/Cat/Feed/CatFeed';
import PersonFeed from '../Screens/Person/Feed/PersonFeed';


function AppRoutes() {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CatUpdate} path="/catupdate" />
            <Route component={PersonUpdate} path="/personupdate" />
            <Route component={CatFeed} path="/catfeed" />
            <Route component={PersonFeed} path="/personfeed" />

        </BrowserRouter>
    );
}

export default AppRoutes;