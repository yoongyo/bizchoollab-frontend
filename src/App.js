import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Footer from '../src/Layouts/Footer';
import Header from '../src/Layouts/Header';
import Home from './Routes/Home';
import FeedList from './Routes/FeedList';
import FeedDetail from './Routes/FeedDetail';
import FeedNew from './Routes/FeedNew';
import FeedSearch from './Routes/FeedSearch';
import { BackgroundColor } from './Static/Color/Color';


const App = () => {
    return (
        <Box style={{backgroundColor: BackgroundColor}}>
            <Router>
            <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/:category/:pk" component={FeedDetail}/>
                    <Route path="/new" component={FeedNew}/>
                    <Route path="/search" component={FeedSearch}/>
                    <Route path="/:category" component={FeedList}/>
                </Switch>
            <Footer/>
            </Router>
        </Box>
    )
}

export default App;