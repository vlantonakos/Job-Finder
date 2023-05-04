import * as React from 'react';
import {Box ,Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom"
import Create from './Create';
import "../App.css"
import { green } from '@mui/material/colors';
import { Helmet } from 'react-helmet'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green["A700"]),
  backgroundColor: green["A200"],
  '&:hover': {
    backgroundColor: green["A400"],
  },
}));

export default function Home() {

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    <Helmet><title>JobFinder | Dashboard</title></Helmet>
    <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
    <h2 align='center'>EMPLOYER DASHBOARD</h2>
    <ColorButton sx={{ margin:"2% 2%"}} variant="contained"><Link className="stylelink" to="/"><h3>Home</h3></Link></ColorButton>
    </Box>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={<h4>Create Post</h4>} value="1" />
          </TabList>
        </Box>
        <TabPanel value="1"><Create /></TabPanel>
      </TabContext>
    </Box>
    </>
  );
}