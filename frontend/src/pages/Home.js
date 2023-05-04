import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { Helmet } from 'react-helmet'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green["A700"]),
  backgroundColor: green["A200"],
  '&:hover': {
    backgroundColor: green["A400"],
  },
}));

const Home = () => {
  return (
    <div>
      <Helmet><title>JobFinder | Home</title></Helmet>
      <h1 align="center">
        Get Hired or Hire people for free!
      </h1>
      <div>
        <ul className="ul">
          <li className="li">
          <ColorButton sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/employer/dashboard" className="stylelink">
              <h3>Hire talent</h3>
            </Link>
            </ColorButton>
          </li>
          <li className="li">
          <ColorButton sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/employee/feed" className="stylelink">
            <h3>Get Job Now</h3>
            </Link>
            </ColorButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;