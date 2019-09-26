import React from 'react';
import './App.scss';
import Nav from "./Nav/Nav";
import {connect} from "react-redux";
import {toggleNavAction} from "../actions/navActions";

class App extends React.Component {
  render() {
      return (
          <div>
              <div className={"nav " + (this.props.isNavOpen ? 'opened' : '')}>
                  <Nav />
              </div>
              <div className="main">

              </div>
          </div>
      );
  }
}

const mapStateToProps = (state) => ({
    isNavOpen: state.nav.isOpen
});

const mapDispatchToProps = (dispatch) => ({
    // toggle: () => {
    //     dispatch(toggleNavAction())
    // }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
