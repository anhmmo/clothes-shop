import React, { Component } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./SignIn.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <Input
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="button-container">
            <Button type="submit"> Sign in </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign in with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
