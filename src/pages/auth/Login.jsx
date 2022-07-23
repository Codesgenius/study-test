import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormInput from "../../components/Form/FormInput";
import AuthImage from "../../asset/imgs/auth1.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    emailAddress: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Will navigate based on the response of the server
    //The API will determine the user type
    navigate("/student/dashboard");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <Wrapper imageUrl={AuthImage}>
      <main>
        <div className="main">
          <div className="form-title">
            <h2>Login</h2>
          </div>

          <div className="register-con">
            <form onSubmit={handleSubmit} className="register-form">
              <div className="input-con">
                <label htmlFor="emailAddress">Email Address</label>
                <FormInput
                  id="emailAddress"
                  value={userDetails.emailAddress}
                  type="email"
                  placeholder="school email address"
                  name="emailAddress"
                  onChange={handleChange}
                />
              </div>

              <div className="input-con">
                <label htmlFor="password">Password</label>
                <FormInput
                  id="password"
                  showPassword={showPassword}
                  value={userDetails.password}
                  type="password"
                  placeholder=""
                  name="password"
                  onChange={handleChange}
                  toggleEye={() => setShowPassword(!showPassword)}
                />
              </div>

              <div className="input-con">
                <button type="submit" className="registerBtn">
                  Login
                </button>
              </div>

              <Link to="/auth/register" className="auth-change">
                <p>new account</p>
              </Link>
            </form>
          </div>
        </div>
      </main>

      <aside>
        <div className="image-con"></div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;

    .main {
      display: flex;
      flex-direction: column;
      padding: 1rem 3rem 2rem 3rem;
      border-radius: 10px;
      background-color: #f4f4f2;
      box-shadow: 0px 0px 2px 1px rgba(81, 80, 90, 0.4);

      @media (max-width: 425px) {
        padding: 1rem 1rem;
      }

      .register-con {
        flex: 1;

        .input-con {
          position: relative;
          padding: 7px;
        }

        .auth-change {
          text-decoration: none;
          text-align: right;

          p {
            margin: 0;
          }
        }
      }
    }
  }

  aside {
    @media (max-width: 768px) {
      display: none;
    }

    .image-con {
      position: relative;
      width: 100%;
      height: 100%;
      background-image: url(${({ imageUrl }) => imageUrl});
      background-size: cover;
      background-position: center;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .registerBtn {
    width: 100%;
    height: 2.5rem;
    margin: 10px 0px;
    color: white;
    background-color: rgb(14, 41, 95);
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export default Login;
