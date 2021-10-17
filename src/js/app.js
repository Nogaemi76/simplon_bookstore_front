import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from './utils/api';

// Routing
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthRoute } from './components/authRoute';

// Protected routes
import Home from './pages/home';
import Books from './pages/books';

// Public routes
import Login from './pages/login';
import Register from './pages/register';

// Components
import Layout from './components/layout';


const App = () => {   
    const appState = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(async () => {

        dispatch({ type: 'APP_INIT' });
        dispatch({ type: 'USER_FETCH' });

        try {
            let result = await api.get("/users/me");
            dispatch({ type: 'USER_SET', payload: result.data });

        } catch (err) {
            // console.error("Some error happened : ", err);
            dispatch({ type: 'USER_RESET' });
        }

        dispatch({ type: 'APP_READY' });
       
    }, [])

    console.log('APP global state : ', appState);
    // if (appState.loading) return <div>Loading...</div>
    if (!appState.init) return <div>Loading...</div>;

    return (    
        <Router>
            <Switch>

                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <Layout>
                    <AuthRoute exact path="/" component={Home} />
                    <AuthRoute exact path='/books' component={Books} />
                </Layout>
                
            </Switch>
        </Router>
    )
}

export default App;