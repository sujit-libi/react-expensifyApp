import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit/:id" component={EditExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route component={PageNotFound} />
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;