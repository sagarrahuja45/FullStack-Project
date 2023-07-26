import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  StyleButton,
  StyleCard,
  StyleCardTitle,
  StyleHeader,
  StyleCardTitleH3,
  StylePara,
  StyleEmailPass,
  StyleError,
  StyleForm,
  StyleInput,
  StyleMain,
  StyledContainer,
  StyledWrapper,
} from "./dashboard.styled";

const token = localStorage.getItem('token');

const Dashboard = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/createPost");
  };
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const url = 'http://localhost:3001/post/list';
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.get(url, config)
      .then((response) => {
        setPosts(response.data.userPost);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <StyledWrapper>
        <StyledContainer>
          <StyleHeader>
            <StyleCardTitleH3>DASHBOARD</StyleCardTitleH3>
          </StyleHeader>
          <StyleMain>
            <StyleButton onClick={handleCreate}>Create New Post</StyleButton>
               {/* Render the posts */}
               {posts.map((post, index) => (
                <StyleCard>
              <StyleCardTitle key={index}>
                <StyleCardTitleH3>{post.title}</StyleCardTitleH3>
                <StylePara>{post.description}</StylePara>
              </StyleCardTitle>
              </StyleCard>
            ))}
          </StyleMain>
        </StyledContainer>
      </StyledWrapper>
    </>
  );
};

export default Dashboard;
