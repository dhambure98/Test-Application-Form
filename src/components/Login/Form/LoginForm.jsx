import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {Checkbox, FormControlLabel, InputAdornment, TextField} from "@mui/material";
import {AccountCircle} from "@material-ui/icons";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

export default function LoginForm(props) {
    const navigate = useNavigate();

    return(
        <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100vw'} maxWidth={'100%'}
               bgcolor={'blue'} sx={{
            backgroundImage: `url("https://t4.ftcdn.net/jpg/03/57/85/41/360_F_357854155_pZ7ueCQaQ8lBl1ePCaaQ5rRUfKctxr7d.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>

            <Stack height={'70vh'} width={'40vw'} spacing={5} border={'1px solid #e7eaed'} boxShadow={2}
                   borderRadius={5}
                   alignItems={'center'}
                   bgcolor={'white'}
                   sx={{opacity: '0.94'}}
            >

                <Stack>
                    <Typography fontSize={'33px'} width={'fit-content'} bgcolor={'white'} position={'relative'}
                        bottom={'0px'} top={'30px'} fontFamily={'Roboto'} fontWeight={450} alignItems={'center'}>
                        Sign in
                    </Typography>
                </Stack>

                <Stack width={'60%'} position={'relative'} direction={'column'} spacing={6}>
                    <Stack width={'65%'} direction={'column'} spacing={3} >
                        <TextField
                            id="input-with-icon-textfield"
                            label="Username"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            sx={{width: '330px'}}
                            type={'text'}
                            /*onChange={handleChangeUserName}*/
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle/>
                                    </InputAdornment>
                                ),
                            }}
                            size={'small'}
                            variant="standard"
                            sx={{width: '330px'}}
                            // onChange={handleChangePassword}
                        />

                        <Stack width={'auto'} direction={'column'} spacing={5}>
                            <FormControlLabel control={<Checkbox/>} label="Stay Logged in"/>
                        </Stack>

                        <Stack width={'100%'} direction={'row'} spacing={0} justifyContent={'end'}>
                            <Button
                                sx={{textTransform: "none"}}
                                alignItems={'center'}
                                size={'large'}
                                color={'secondary'}
                                variant={'contained'}
                                    /*onClick={() => sign_in_onClick(username)}*/>{'Login'}</Button>
                        </Stack>

                        <Stack width={'200%'} direction={'column'} spacing={3} >
                            <Typography
                                fontSize={'15px'}
                                width={'fit-content'}
                                position={'relative'}
                                fontFamily={'Roboto'}
                                fontWeight={450}
                                alignItems={'center'}>
                                Create new account *

                                <Button
                                    href="RegistrationForm"
                                    onClick={()=>navigate('/RegistrationForm')}
                                    sx={{textTransform: "none"}}
                                    alignItems={'center'}>
                                    Click here
                                </Button>
                            </Typography>
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );

}