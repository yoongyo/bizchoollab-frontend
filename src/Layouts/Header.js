import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SearchBar from '../Components/SearchBar';
import { HeaderColor } from '../Static/Color/Color';

const Header = () => {
    return (
        <Box>
            <Box 
                borderBottom={1}
                style={{
                    backgroundColor: HeaderColor, 
                    position: 'fixed', 
                    top:0, left:0, right:0, 
                    zIndex:5,
                    borderBottomColor: HeaderColor
                }}
            >
                <Container maxWidth="lg">
                    <Box display="flex" py={2.6}>
                        <Box flex={1}>
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <h2 style={{margin:0, color:'white'}}>Bizchool Lab</h2>
                            </Link>
                        </Box>
                        <Box flex={1} display="flex" justifyContent="center">
                            <Box flex={1} display="flex" alignItems="center" justifyContent="center">
                                <Link to="/startup" style={{textDecorationLine: 'none', color: 'white'}}>
                                    <h4 style={{margin: 0}}>STARTUP</h4>
                                </Link>
                            </Box>
                            <Box flex={1} display="flex" alignItems="center" justifyContent="center">
                                <Link to="/tech" style={{textDecorationLine: 'none', color: 'white'}}>
                                    <h4 style={{margin: 0}}>TECH</h4>
                                </Link>
                            </Box>
                            <Box flex={1} display="flex" alignItems="center" justifyContent="center">
                                <Link to="/news" style={{textDecorationLine: 'none', color: 'white'}}>
                                    <h4 style={{margin: 0}}>NEWS</h4>
                                </Link>
                            </Box>
                            <Box flex={1} display="flex" alignItems="center" justifyContent="center">
                                <Link to="/portfolio" style={{textDecorationLine: 'none', color: 'white'}}>
                                    <h4 style={{margin: 0}}>PORTFOLIO</h4>
                                </Link>
                            </Box>
                        </Box>
                        <Box flex={1} display="flex" justifyContent="flex-end">
                            <Box display="flex" alignItems="center">
                                <SearchBar/>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box style={{height: 78}}/>
        </Box>
    );
}

export default Header;