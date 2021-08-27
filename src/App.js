import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Blog from './components/Blog'
import AdminLogin from './components/AdminLogin'
import LandingPage from './components/LandingPage'
import Pricing from './components/Pricing'
import Quote from './components/Quote'
import Library from './components/Library'
import ScheduleDemo from './components/ScheduleDemo'


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/signup'>
                    <SignUp />
                </Route>
                <Route path='/signin'>
                    <SignIn />
                </Route>
                <Route path='/blog'>
                    <Blog />
                </Route>
                <Route path='/admin-login'>
                    <AdminLogin />
                </Route>
                <Route path='/pricing'>
                    <Pricing />
                </Route>
                <Route path='/quote'>
                    <Quote />
                </Route>
                <Route path='/library'>
                    <Library />
                </Route>
                <Route path='/schedule-demo'>
                    <ScheduleDemo />
                </Route>
                <Route path='/'>
                    <LandingPage />
                </Route>
            </Switch>
        </Router>
    )
} 

export default App
