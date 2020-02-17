import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Home from './Routes/Home';
import FeedList from './Routes/FeedList';
import FeedDetail from './Routes/FeedDetail';
import FeedNew from './Routes/FeedNew';
import FeedSearch from './Routes/FeedSearch';
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import Profile from './Routes/Profile';
import { BackgroundColor } from './Static/Color/Color';



const App = () => {
    return (
        <Box style={{backgroundColor: BackgroundColor}}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/accounts/login" component={Login}/>
                    <Route path="/accounts/signup" component={Signup}/>
                    <Route path="/accounts" component={Profile}/>
                    <Route path="/:category/:pk" component={FeedDetail}/>
                    <Route path="/new" component={FeedNew}/>
                    <Route path="/search" component={FeedSearch}/>
                    <Route path="/:category" component={FeedList}/>
                </Switch>
            </Router>
        </Box>
    )
}

export default App;