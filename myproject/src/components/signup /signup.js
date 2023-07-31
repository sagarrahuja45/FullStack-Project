import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  StyleButton,
  StyleCard,
  StyleCardTitle,
  StyleCardTitleH1,
  StyleForm,
  StyleMain,
  StyledContainer,
  StyledWrapper,
} from "./signup.styled";

import FormInput from "../form/elements/formInput";
import { validateFirstName, validateEmail, validateLastName, validatePassword} from "../../utils/formValidations";

const Signup = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'all', reValidateMode: 'onChange' });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/signup", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <StyledWrapper>
        <StyledContainer>
          <StyleCard>
            <StyleCardTitle>
              {" "}
              <StyleCardTitleH1>CREATE ACCOUNT</StyleCardTitleH1>
              <span>Already have an account?</span>
              <a href="/login"> Sign In</a>
            </StyleCardTitle>

            <StyleMain>
              <StyleForm onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                control={control}
                name='firstName'
                type='text'
                placeholder="First Name"
                rules={validateFirstName}
                errors={errors}                
                />
                 <FormInput
                control={control}
                name='lastName'
                type='text'
                placeholder="Last Name"
                rules={validateLastName}
                errors={errors}                
                />
                <FormInput
                control={control}
                name='email'
                type='email'
                placeholder="Email"
                rules={validateEmail}
                errors={errors}                
                />
                 <FormInput
                control={control}
                name='password'
                type='password'
                placeholder="Password"
                rules={validatePassword}
                errors={errors}                
                />
                 


                

                <StyleButton type="submit">Signup</StyleButton>
              </StyleForm>
            </StyleMain>
          </StyleCard>
        </StyledContainer>
      </StyledWrapper>
    </>
  );
};

export default Signup;
