import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function RegistrationFrom(props) {



        return(
        <ValidatorForm>
            <Stack justifyContent={'center'} alignItems={'center'} height={'150vh'} width={'100vw'} maxWidth={'100%'}
                   bgcolor={'black'} sx={{
                backgroundImage: `url("https://t4.ftcdn.net/jpg/03/57/85/41/360_F_357854155_pZ7ueCQaQ8lBl1ePCaaQ5rRUfKctxr7d.jpg")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                <Stack height={'120vh'} width={'70vw'} spacing={3} border={'1px solid #e7eaed'} boxShadow={2}
                       borderRadius={5}
                       alignItems={'center'}
                       bgcolor={'white'}
                       sx={{opacity: '0.94'}}
                >

                    <Stack
                        justifyContent={'center'}
                        alignItems={'center'}
                        height={'100vh'}
                        width={'100vw'}
                        maxWidth={'100%'} b>

                            <Stack>
                                <Typography
                                    fontFamily={'Roboto'}
                                    fontSize={'33px'}
                                    width={'fit-content'}
                                    bgcolor={'white'}
                                    position={'relative'}
                                    top={'-70px'}
                                    fontWeight={450}>
                                    Create New Account
                                </Typography>
                            </Stack>

                            <Stack>
                                <Typography
                                    fontFamily={'Roboto'}
                                    fontSize={'15px'}
                                    width={'fit-content'}
                                    bgcolor={'white'}
                                    bottom={'5px'}
                                    position={'relative'}
                                    top={'-70px'}
                                    fontWeight={450}>
                                    (User Registration)
                                </Typography>
                            </Stack>

                            <Stack position={'relative'} left={'10px'} direction={'column'} spacing={4}>
                                <Stack width={'70%'} direction={'row'} spacing={4}>
                                    <TextValidator id="outlined-search" label="First Name" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                    <TextValidator id="outlined-search" label="Last Name" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                </Stack>

                                <Stack width={'70%'} direction={'row'} spacing={4}>
                                    <TextValidator id="outlined-search" label="Email Address" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                    <TextValidator id="outlined-search" label="Username" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                </Stack>

                                <Stack width={'70%'} direction={'row'} spacing={4}>
                                    <TextValidator id="outlined-search" label="Password" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                    <TextValidator id="outlined-search" label="City" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                </Stack>

                                <Stack width={'70%'} direction={'row'} spacing={4}>
                                    <TextValidator id="outlined-search" label="Street" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                    <TextValidator id="outlined-search" label="Street No" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                </Stack>

                                <Stack width={'70%'} direction={'row'} spacing={4}>
                                    <TextValidator id="outlined-search" label="Zip Code" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                    <TextValidator id="outlined-search" label="Lat Value" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                </Stack>

                                <Stack width={'70%'} direction={'row'} spacing={4}>
                                    <TextValidator id="outlined-search" label="Long Value" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                    <TextValidator id="outlined-search" label="Mobile Number" type="text" size={'small'}
                                                   sx={{width: '400px'}}/>
                                </Stack>
                            </Stack>

                            <Stack width={'50%'} direction="row" spacing={2} justifyContent={'end'}>
                                <Button
                                    sx={{textTransform: "none"}}
                                    size={'large'}
                                    variant={"contained"}
                                    title={'sign up'}
                                    type={"submit"}
                                    color={"success"}
                                    startIcon={<CheckCircleIcon/>}>
                                    Success
                                </Button>

                                <Button
                                    sx={{textTransform: "none"}}
                                    size={'large'}
                                    variant={"contained"}
                                    title={'sign up'}
                                    type={"submit"}
                                    color={"success"}
                                    startIcon={<CheckCircleIcon/>}>
                                    Success
                                </Button>
                            </Stack>


                    </Stack>
                </Stack>
            </Stack>


        </ValidatorForm>
    )
}