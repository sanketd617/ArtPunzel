import React from 'react';
import './App.scss';
import Nav from "./Nav/Nav";
import Categories from "./Categories/Categories";
import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import Error from "./404/Error";

const categories = [
    {
        title: 'All',
        image: 'one.jpg',
        link: 'all'
    },
    {
        title: 'Singles',
        image: 'two.jpg',
        link: 'singles'
    },
    {
        title: 'Couples',
        image: 'three.jpg',
        link: 'couples'
    },
    {
        title: 'Black & White',
        image: 'four.jpg',
        link: 'black-n-white'
    },
    {
        title: 'Miscellaneous',
        image: 'seven.jpg',
        link: 'misc'
    },
];

class App extends React.Component {
  render() {
      return (
          <Router>
              <div className={"nav " + (this.props.isNavOpen ? 'opened' : '')}>
                  <Nav categories={categories}/>
              </div>
              <div className="main">
                <Switch>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>
                    <Route path="/" exact>
                        <Categories categories={categories}/>
                    </Route>
                    <Route>
                        <Error />
                    </Route>
                </Switch>
              </div>
          </Router>
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
