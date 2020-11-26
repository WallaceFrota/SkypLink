import React from 'react';

import {BrowserRouter, Switch, Route, } from 'react-router-dom';

import ShortenUrl from './pages/ShortenUrl';
import UrlStats from './pages/UrlStats';
import NotFound from './pages/NotFound';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ShortenUrl}/>
                <Route path="/:code/stats" component={UrlStats}/>
                <Route path="/*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}