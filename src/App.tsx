import React from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import { useTranslation, I18nextProvider } from "react-i18next";
import  "./i18next";
function App() {
  const { t } = useTranslation();
  return (
    <Container >
        <Box  mt={20} p={2}  bgcolor={"background.default"}>
            <Box mb={3}>
                <Typography color={"#001862"} >
                    {t('fpc:test.label')}
                </Typography>
                <Typography variant={"h4"} color={"#001862"}>
                    {t('fpc:test.headline')}
                </Typography>
            </Box>

            <Box mb={3}>
                <Typography variant={"h6"} mb={2}>
                    {t('fpc:test.greeting')},
                </Typography>
                <Typography variant={"body2"} mb={2}>
                    {t('fpc:test.paragraph')}
                </Typography>
                <Typography variant={"body2"} mb={2}>
                    {t('fpc:test.plural')}
                </Typography>
            </Box>

            <Box bgcolor={"#BFCEE3"} p={5}>
                <Typography variant={"h4"} mb={2}>
                    {t('fpc:test.headline')}
                </Typography>
                <Typography variant={"body2"} mb={2}>
                    {t('fpc:test.text')}
                </Typography>
                <Button variant="contained" >
                    {t('shared:buttons.save')}
                </Button>
            </Box>
        </Box>
    </Container>
  );
}

export default App;
