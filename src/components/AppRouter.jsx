import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Cities from '../Files/Cities';
import Ideas from '../Files/Ideas';
import Teams from '../Files/Teams';
import Users from '../Files/Users';
import Error404 from '../Files/Error404';

import '../App.css';




const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/cities" component={Cities} exact/>
                    <Route path="/ideas" component={Ideas} exact/>
                    <Route path="/teams" component={Teams} exact/>
                    <Route path="/users" component={Users} exact/>
                    {/*<Route path={'/:lang(es|en|pt)/product/:product_id'} component={Product} exact />*/}
                    {/*<Route path="*" component={Error404} exact/>*/}
                    <Route path="/404" component={Error404} exact/>

                    <Redirect to={'/404'}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;