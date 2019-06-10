import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateChore from './components/chores/CreateChore';
import History from './components/history/History';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/signin' component={SignIn} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/create' component={CreateChore} />
                        <Route path='/history' component={History} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
