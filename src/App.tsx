import React from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";
function App() {
    const { t } = useTranslation();
  return (
    <Container >
        <Box  mt={20} p={2}  bgcolor={"background.default"}>
            <Box mb={3}>
                <Typography color={"#001862"} >
                    Label
                </Typography>
                <Typography variant={"h4"} color={"#001862"}>
                    Successful newsletter signup
                </Typography>
            </Box>

            <Box mb={3}>
                <Typography variant={"h6"} mb={2}>
                    Hello firstName lastName,
                </Typography>
                <Typography variant={"body2"} mb={2}>
                    Welcome to ClimatePartner. We have created your user account.
                </Typography>
                <Typography variant={"body2"} mb={2}>
                    You have subscribed to number services.
                </Typography>
            </Box>

            <Box bgcolor={"#BFCEE3"} p={5}>
                <Typography variant={"h4"} mb={2}>
                    Activate my account
                </Typography>
                <Typography variant={"body2"} mb={2}>
                    Simply activate your account and create your password by [date].
                </Typography>
                <Button variant="contained" >
                    Activate my account
                </Button>
            </Box>
        </Box>
    </Container>
  );
}

export default App;
