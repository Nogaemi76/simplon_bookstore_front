import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Books from './pages/books';

import Login from './pages/login';
import Register from './pages/register';

import Layout from './components/layout';


const App = () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.app);

    useEffect(() => {

        dispatch({ type: "APP_INIT" })

        setTimeout(() => {
            dispatch({ type: "APP_READY" })
        }, 2000)
    }, [])

    console.log('APP global state : ', appState);
    if (appState.loading) return <div>Loading...</div>

    return (    
        <Router>
            <Switch>

                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/books' component={Books} />
                </Layout>
                
            </Switch>
        </Router>
    )
}

export default App;