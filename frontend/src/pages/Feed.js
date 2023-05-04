import {
    Box,
    Card,
    Grid,
    TextField,
    Typography,
    InputAdornment,
    Button,
  } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green["A700"]),
  backgroundColor: green["A200"],
  '&:hover': {
    backgroundColor: green["A400"],
  },
}));
  
  const Feed = () => {
    const [query, setQuery] = useState("");
    const [post, setPost] = useState();
  
    //
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await axios.get(`http://localhost:8080/posts/${query}`);
        setPost(response.data);
      };
      const fetchInitialPosts = async () => {
          const response = await axios.get(`http://localhost:8080/posts`);
          console.log(response);
          setPost(response.data);
      }
      if (query.length === 0) fetchInitialPosts();
      if (query.length > 2) fetchPosts();
    }, [query]);
  console.log(post);
    return (
      <>
      <Helmet><title>JobFinder | Feed</title></Helmet>
      <Grid container spacing={2} sx={{ margin: "2%" }}>
        <Grid item xs={12} sx={12} md={12} lg={12}>
        <ColorButton sx={{ margin: "1% 2%" }} variant="outlined">
              <Link to="/" className="stylelink"><h3>Home</h3></Link>
            </ColorButton>
          <Box>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search..."
              sx={{ width: "75%", padding: "2% auto" }}
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
            />
          </Box>
        </Grid>
        {post &&
          post.map((p) => {
            return (
              <Grid key={p.id} item xs={12} md={6} lg={4}>
                <Card class="card">
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "2rem", fontWeight: "600" }}
                  >
               {p.profile}
                  </Typography>
                  <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="body" >
                    Description: {p.desc}
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">
                    Years of Experience: {p.exp} years
                  </Typography>
  
                  <Typography gutterBottom  variant="body">Skills : </Typography>
                  {p.techs.map((s, i) => {
                    return (
                      <Typography variant="body" gutterBottom key={i}>
                        {i === p.techs.length - 1 ? s : `${s}, `}
                      </Typography>
                    );
                  })}
    
                </Card>
              </Grid>
            );
          })}
      </Grid>
      </>
    );
  };
  
  export default Feed;