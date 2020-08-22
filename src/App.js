import React from "react";
import "./App.scss";
import RouterURL from "./RouterURL/RouterURL";
import { connect } from "react-redux";
import Navigation from "./Pages/Navigation/Navigation";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";

import styled from "styled-components";
import { selectCurrentUser } from "./redux/user/user.selectors";
const TextStyles = styled.div`
  color: red;
  border: ${(props) => (props.isActive ? "5px solid blue" : "2px solid red")};
`;

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { addNewUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log({
            id: snapShot.id,
            ...snapShot.data(),
          });
          addNewUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      addNewUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <TextStyles isActive={true}>SAMPLE USE OF STYLED-COMPONENTS</TextStyles>
        <Navigation currentUser={this.props.currentUser} />
        <RouterURL currentUser={this.props.currentUser} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
