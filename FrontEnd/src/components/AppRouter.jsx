import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Cities from '../Files/Cities';
import Ideas from '../Files/Ideas';
import TeamsForm from '../Files/TeamsForm'
import IdeasForm from '../Files/IdeasForm'
import Teams from '../Files/Teams';
import Users from '../Files/Users';
import Error404 from '../Files/Error404';

import 'normalize.css/normalize.css'

import '../App.scss';



const AppRouter = () => {
    return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/cities" component={Cities} exact/>
                        <Route path="/teams" component={Teams} exact/>
                        <Route path="/ideas" component={Ideas} exact/>
                        <Route path="/Teams/TeamsForm" component={TeamsForm} exact/>
                        <Route path="/Ideas/IdeasForm" component={IdeasForm} exact/>
                        <Route path="/users" component={Users} exact/>
                        {/*<Route path={'/:lang(es|en|pt)/product/:product_id'} component={Product} exact />*/}
                        {/*<Route path="*" component={Error404} exact/>*/}
                        <Route path="/404" component={Error404} exact/>
                        <Redirect to={"/teams"}/>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
    );
};

export default AppRouter;