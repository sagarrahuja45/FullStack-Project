import React from "react";
import { StyleInput } from "../../createPost/createPost.styled";
import { Controller } from "react-hook-form";
import FormFieldError from "./formFieldError";

const FormInput = ({ control, color, name, type, placeholder = '', errors, ...rest }) => {
    const error = errors?.[name];
  
    return (
      <>
        <Controller
          control={control}
          render={({ field }) => {
            return <StyleInput type={type} errors={error} placeholder={placeholder} {...field} />;
          }}
          name={name}
          color={color}
          {...rest}
        />
        {error && <FormFieldError error={error} {...rest} />}

      </>
    );  
  };

export default FormInput;
