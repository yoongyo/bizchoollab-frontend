import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SearchBar from '../Components/SearchBar';
import { HeaderColor } from '../Static/Color/Color';
import { MdAccountCircle } from "react-icons/md";

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
                        <Box flex={1} display="flex">
                            <Box flex={1} display="flex" alignItems="center">
                                <Link to="/" style={{textDecoration: 'none'}}>
                                    <h2 style={{margin:0, color:'white'}}>Bizchool Lab</h2>
                                </Link>
                            </Box>
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
                            <IconButton style={{marginLeft: 10, padding: 1}}>
                                <Link to="/accounts/login" style={{textDecoration: 'none', color: 'rgb(0, 75, 79)', height: 34}}>
                                    <MdAccountCircle size={34}/>
                                </Link>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box style={{height: 78}}/>
        </Box>
    );
}

export default Header;