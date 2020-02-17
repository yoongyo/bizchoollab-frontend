import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LoginMutation } from '../Queries/AuthMutation';
import { useLogin } from '../Contexts/AuthContext';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { BackgroundColor, HeaderColor, FooterColor } from '../Static/Color/Color';
import CircularProgress from '@material-ui/core/CircularProgress';


const Login = () => {
    const login = useLogin();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [keepLogin, setKeepLogin] = useState(true);
    const loginMuatation = useMutation(LoginMutation, {
        variables: {
            id: id,
            password: password
        }
    })

    const LoginClick = async() => {
        try {
            setLoading(true);
            const {data: {tokenAuth}} = await loginMuatation();
            console.log(tokenAuth);
            if (tokenAuth) {
                login(tokenAuth.token, keepLogin);
            } else {

            }
        } catch(e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box style={{backgroundColor: BackgroundColor}}>
            <Container maxWidth="md" style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', height: window.innerHeight}}>
                <Link to="/" style={{textDecoration: 'none', color: HeaderColor}}>
                    <h1 style={{marginBottom: 30, fontSize: 44, fontWeight: 'bold', marginTop: 0}}>BIZCHOOL</h1>
                </Link>
                <Box py={4} px={3} border={1} width={360} height={300} borderColor='rgb(196,196,196)' style={{backgroundColor: 'white', borderRadius: 8}}>
                    <form>
                        <Box marginBottom={2}>
                            <TextField onChange={(e) => setId(e.target.value)} label="아이디" variant="outlined" fullWidth />
                        </Box>
                        <Box marginBottom={2}>
                            <TextField onChange={(e) => setPassword(e.target.value)} type="password" label="비밀번호" variant="outlined" fullWidth/>
                        </Box>
                        <Box paddingBottom={1}>
                            <Button onClick={LoginClick} fullWidth style={{backgroundColor: FooterColor, color: 'white', height: 50}}>
                                {loading ? <CircularProgress/> : <h2 style={{margin:0}}>로그인</h2>} 
                            </Button>
                        </Box>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <Checkbox
                                checked={keepLogin}
                                onChange={(e) => setKeepLogin(e.target.checked)}
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <p>로그인 상태 유지</p>
                        </Box>
                        <hr style={{backgroundColor: 'rgb(196,196,196)', height: 1, border: 'none'}}/>
                        <Box style={{display: 'flex', justifyContent: 'center'}}>
                            <Link to="/fuck" style={{textDecoration: 'none', color: 'black'}}><p>아이디/비밀번호 찾기</p></Link>
                            <p style={{marginLeft: 5, marginRight: 5}}>|</p>
                            <Link to="/accounts/signup" style={{textDecoration: 'none', color: 'black'}}><p>회원가입</p></Link>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default Login;