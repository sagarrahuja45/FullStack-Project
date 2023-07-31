import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  StyleButton,
  StyleCard,
  StyleCardTitle,
  StyleHeader,
  StyleCardTitleH3,
  StylePara,
  StyleForm,
  StyleInput,
  StyledButtons,
  StyledDelete,
  StyledEdit,
  StyleMain,
  StyledContainer,
  StyledWrapper,
  StyledLabel,
  StyleError,
} from "./dashboard.styled";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/createPost");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [posts, setPosts] = useState([]);
  const [editState, setEditState] = useState({});
  const [editId, setEditId] = useState();

  const handleEdit = (postId) => {
    setEditId(postId);
    setEditState((prevState) => ({
      ...prevState,
      [postId]: true,
    }));
  };

  const handleSave = async (data, postId) => {
    try {
      await axios.put(`http://localhost:3001/post/update?_id=${editId}`, data);
    } catch (error) {
      console.error("Error updating post:", error);
    }
    setEditState((prevState) => ({
      ...prevState,
      [postId]: false,
    }));
  
  };

  const handleDelete = (postId) => {
    axios
      .delete(`http://localhost:3001/post/delete?_id=${postId}`)
      .then((response) => {
        // Fetch the updated list of posts after successful deletion
        axios
          .get("http://localhost:3001/post/list", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setPosts(response.data.userPost);
          })
          .catch((error) => {
            console.error("Error fetching updated posts:", error);
          });
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  useEffect(() => {
    const url = "http://localhost:3001/post/list";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        setPosts(response.data.userPost);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <StyledWrapper>
        <StyledContainer>
          <StyleHeader>
            <StyleCardTitleH3>DASHBOARD</StyleCardTitleH3>
            <StyleButton onClick={handleCreate}>Create New Post</StyleButton>
          </StyleHeader>
          <StyleMain>
            {/* Render the posts */}
            {posts.map((post) => (
              <StyleCard key={post._id}>
                <StyleCardTitle>
                  {editState[post._id] ? ( 
                    <>
                      <StyleForm onSubmit={handleSubmit(handleSave)}>
                        <StyledLabel>Title</StyledLabel>
                        <StyleInput
                          type="text"
                          placeholder="Title"
                          name="title"
                          defaultValue={post.title}
                          {...register("title", {
                            required: "title is required",
                          })}
                        ></StyleInput>
                        {errors.title && (
                          <StyleError>* {errors.title.message}</StyleError>
                        )}
                        <StyledLabel>Description</StyledLabel>
                        <StyleInput
                          type="text"
                          placeholder="Description"
                          name="description"
                          defaultValue={post.description}
                          {...register("description", {
                            required: "Description is required",
                          })}
                        ></StyleInput>
                        {errors.description && (
                          <StyleError>
                            * {errors.description.message}
                          </StyleError>
                        )}
                        <StyleButton type="submit">Save</StyleButton>
                      </StyleForm>
                    </>
                  ) : (
                    <>
                      <StyleCardTitleH3>{post.title}</StyleCardTitleH3>
                      <StylePara>{post.description}</StylePara>
                      <StyledButtons>
                        <StyledEdit onClick={() => handleEdit(post._id)}>
                          Edit
                        </StyledEdit>
                        <StyledDelete onClick={() => handleDelete(post._id)}>
                          Delete
                        </StyledDelete>
                      </StyledButtons>
                    </>
                  )}
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
