import { Typography, Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack,} from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../../components/common/Button";

export default function LoginForm(props) {

    return(
        <Stack mt={10} >
            <Stack ml={26}>
                <Typography fontSize={'24px'}>Cart Manage</Typography>
            </Stack>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} mt={8}>
                <Stack direction={'row'} spacing={19}>
                    <Box sx={{minWidth: 120, width: '400px'}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Category"
                                // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField size={'small'} sx={{width: '400px'}} label={'Price'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <Box sx={{minWidth: 120, width: '400px'}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Category"
                                // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        maxRows={4}
                        sx={{width: '400px'}}
                    />
                </Stack>
            </Stack>
            <Stack width={'90vw'} justifyContent={'flex-end'} direction={'row'} mt={4}>
                <Box>
                    <Button style={{backgroundColor:'#c4af9e', color:'black', marginRight:'20px'}}>Clear</Button>
                </Box>
                <Box>
                    <Button style={{backgroundColor:'#8a69ec', color:'black', marginLeft:'20px'}}>Save</Button>
                </Box>
            </Stack>

        </Stack>
    );
}