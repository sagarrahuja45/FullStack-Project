import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  StyleButton,
  StyleCard,
  StyleCardTitle,
  StyleError,
  StyleForm,
  StyleInput,
  StyleMain,
  StyledWrapper,
  StyledContainer,
  StyleCardTitleH1
} from "./createPost.styled";
const token = localStorage.getItem('token');


const CreatePost = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const config = {
    headers: {
      'token': `${token}`
    }
  };

  const createSubmit = (data) => {
    try {
      axios.post("http://localhost:3001/post/create",data,config).then((response) => {
        if (response.status === 200) {
          navigate("/dashboard");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <StyledWrapper>
        <StyledContainer>
          <StyleCard>
            <StyleCardTitle><StyleCardTitleH1>
              Create a new post 
            </StyleCardTitleH1></StyleCardTitle>

            <StyleMain>
              <StyleForm onSubmit={handleSubmit(createSubmit)}>
                <StyleInput
                  type="text"
                  className="input-field"
                  placeholder="Title"
                  name="title"
                  {...register("title", { required: "* Please enter a title" })}
                ></StyleInput>
                {errors.title && (
                  <StyleError>{errors.title.message}</StyleError>
                )}
                <StyleInput
                  type="textarea"
                  placeholder="Description"
                  name="description"
                  {...register("description", {
                    required: "* Please enter description",
                  })}
                ></StyleInput>
                {errors.description && (
                  <StyleError>{errors.description.message}</StyleError>
                )}
                <StyleButton type ="submit">Create</StyleButton>
              </StyleForm>
            </StyleMain>
          </StyleCard>
        </StyledContainer>
      </StyledWrapper>
    </>
  );
};

export default CreatePost;
