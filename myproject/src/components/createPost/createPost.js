import React from "react";
import { useForm } from "react-hook-form";
import "./createPost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createSubmit = (data) => {
    try {
     axios
        .post("http://localhost:3001/create-post", data)
        .then((response) => {
          console.log(response);
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
      <section className="wrapper-create-post">
        <div className="container-create-post">
          <div className="card">
            <div className="card-title">
              <h1> Create a New Post</h1>
            </div>

            <div className="main-create">
              <form
                className="form-create"
                onSubmit={handleSubmit(createSubmit)}
              >
                <input
                  type="text"
                  className="input-field"
                  placeholder="Title"
                  name="title"
                  {...register("title", { required: "* Please enter a title" })}
                ></input>
                {errors.title && (
                  <span className="errors">{errors.title.message}</span>
                )}
                <input
                  type="textarea"
                  className="input-field"
                  placeholder="Description"
                  name="description"
                  {...register("description", {
                    required: "* Please enter description",
                  })}
                ></input>
                {errors.description && (
                  <span className="errors">{errors.description.message}</span>
                )}
                <input
                  type="submit"
                  className="create-button"
                  value="Create"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatePost;
