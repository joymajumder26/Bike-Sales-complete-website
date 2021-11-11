import React from 'react';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './component/Login/Login';
import Home from './component/Home/Home/Home';
import NoMatch from './component/NotFound/NoMatch';
import Dashboard from './component/Dashboard/Dshboard/Dashboard';
import CustomerPaymentDetails from './component/Home/CustomerPaymentDetails/CustomerPaymentDetails';
import AddService from './component/Dashboard/AddService/AddService';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import BookingList from './component/Dashboard/BookingList/BookingList';
import Review from './component/Dashboard/Dshboard/Review/Review';
import OrderList from './component/Dashboard/OrderList/OrderList';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import ManageService from './component/Dashboard/ManageService/ManageService';

import ExploreBike from './component/Home/ExploreBike/ExploreBike';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log('data is ', loggedInUser);
  const [isAdmin, setIsAdmin] = React.useState(false)

  useEffect(() => {
    fetch('https://obscure-ocean-60599.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(res => setIsAdmin(res))
  }, [])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/exploreAllBike">
            <ExploreBike></ExploreBike>
            </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path="/service/book">
            <CustomerPaymentDetails />
          </PrivateRoute>
          <PrivateRoute path="/book/booklist">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/book/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/details/:id">
            <CustomerPaymentDetails />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
