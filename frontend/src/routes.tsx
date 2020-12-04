import React from 'react';

import {BrowserRouter, Switch, Route, } from 'react-router-dom';

import ShortenUrl from './pages/ShortenUrl';
import NotFound from './pages/NotFound';
import RedirectPage from './pages/RedirectPage';
import UrlStats from './pages/UrlStats';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ShortenUrl}/>
                <Route exact path="/:link" component={RedirectPage}/>
                <Route exact path="/:link/stats" component={UrlStats}/>
                <Route  path="/*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}