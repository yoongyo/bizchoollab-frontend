import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Footer from '../src/Layouts/Footer';
import Header from '../src/Layouts/Header';
import Home from './Routes/Home';
import PeedList from './Routes/PeedList';
import PeedDetail from './Routes/PeedDetail';
import PeedNew from './Routes/PeedNew';
import { BackgroundColor } from './Static/Color/Color';


const App = () => {
    return (
        <Box style={{backgroundColor: BackgroundColor}}>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/:category/:pk" component={PeedDetail}/>
                    <Route path="/new" component={PeedNew}/>
                    <Route path="/:category" component={PeedList}/>
                </Switch>
            </Router>
            <Footer/>
        </Box>
    )
}

export default App;