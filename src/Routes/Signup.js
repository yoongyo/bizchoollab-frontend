import React from 'react';
import Box from '@material-ui/core/Box';
import {BackgroundColor, FooterColor, HeaderColor} from '../Static/Color/Color';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <Box style={{backgroundColor: BackgroundColor}}>
            <Container maxWidth="md" style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', height: window.innerHeight}}>
                <Link to="/" style={{textDecoration: 'none', color: HeaderColor}}>
                    <h1 style={{marginBottom: 30, fontSize: 44, fontWeight: 'bold'}}>BIZCHOOL</h1>
                </Link>
                <Box py={4} px={3} border={1} width={360} height={420} borderColor='rgb(196,196,196)' style={{backgroundColor: 'white', borderRadius: 8}}>
                    <form>
                        <Box marginBottom={2}>
                            <TextField id="outlined-basic" label="아이디" variant="outlined" fullWidth/>
                        </Box>
                        <Box marginBottom={2}>
                            <TextField id="outlined-basic" label="비밀번호" variant="outlined" fullWidth/>
                        </Box>
                        <Box marginBottom={2}>
                            <TextField id="outlined-basic" label="비밀번호 확인" variant="outlined" fullWidth/>
                        </Box>
                        <Box marginBottom={2}>
                            <TextField id="outlined-basic" label="이름" variant="outlined" fullWidth/>
                        </Box>
                        <Box marginBottom={2}>
                            <TextField id="outlined-basic" label="이메일" variant="outlined" fullWidth/>
                        </Box>
                        <hr style={{backgroundColor: 'rgb(196,196,196)', height: 1, border: 'none'}}/>
                        <Box marginTop={2}>
                            <Button fullWidth style={{backgroundColor: FooterColor, color: 'white', height: 50}}>
                                <h2 style={{margin:0}}>회원가입</h2>
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}


export default Signup;