import React from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";
import  "./i18next";
import i18next from "i18next";
import i18n from "i18next";
function App() {
  const { t } = useTranslation();
  const languages = {
      en:{ name: "English" },
      de:{ name: "Deutsch" }
  }
    return (
    <Container >
        <Box mt={20} mb={4}>
            {Object.keys(languages).map((lng)=>
                <Button variant={"outlined"} onClick={()=> i18next.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
                    {languages[lng].name}
                </Button>)
            }
        </Box>
        <Box p={2}  bgcolor={"background.default"}>
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
                    {t('fpc:test.greeting', {firstName : "John" , lastName: "Doe"})}
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
