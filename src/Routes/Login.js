import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BackgroundColor, HeaderColor, FooterColor } from '../Static/Color/Color';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: HeaderColor
        },
    },
});  

const Login = () => {
    return (
        <Box style={{backgroundColor: BackgroundColor}}>
            <Container maxWidth="md" style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', height: window.innerHeight}}>
                <Link to="/" style={{textDecoration: 'none', color: HeaderColor}}>
                    <h1 style={{marginBottom: 30, fontSize: 44, fontWeight: 'bold'}}>BIZCHOOL</h1>
                </Link>
                <ThemeProvider theme={theme}>
                    <Box py={4} px={3} border={1} width={360} height={300} borderColor='rgb(196,196,196)' style={{backgroundColor: 'white', borderRadius: 8}}>
                        <form>
                            <Box marginBottom={2}>
                                <TextField id="outlined-basic" label="아이디" variant="outlined" fullWidth/>
                            </Box>
                            <Box marginBottom={2}>
                                <TextField id="outlined-basic" label="비밀번호" variant="outlined" fullWidth/>
                            </Box>
                            <Box paddingBottom={1}>
                                <Button fullWidth style={{backgroundColor: FooterColor, color: 'white', height: 50}}>
                                    <h2 style={{margin:0}}>로그인</h2>
                                </Button>
                            </Box>
                            <Box style={{display: 'flex', flexDirection: 'row'}}>
                                <Checkbox
                                    checked={true}
                                    onChange={() => console.log("check")}
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <p>로그인 상태 유지</p>
                            </Box>
                            <hr style={{backgroundColor: 'rgb(196,196,196)', height: 1, border: 'none'}}/>
                            <Box style={{display: 'flex', justifyContent: 'center'}}>
                                <Link style={{textDecoration: 'none', color: 'black'}}><p>아이디/비밀번호 찾기</p></Link>
                                <p style={{marginLeft: 5, marginRight: 5}}>|</p>
                                <Link to="/accounts/signup" style={{textDecoration: 'none', color: 'black'}}><p>회원가입</p></Link>
                            </Box>
                        </form>
                    </Box>
                </ThemeProvider>
            </Container>
        </Box>
    )
}

export default Login;