import React from "react";
import './nav.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import fontawesome from '@fortawesome/fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {toggleNavAction} from "../../actions/navActions";

fontawesome.library.add(faChevronDown);

class Nav extends React.Component {
    render() {
        return (
            <div className='nav-content'>
                <div className='brand'>
                    ArtPunzel
                </div>
                <div className={'arrow ' + (this.props.isOpen ? 'rotated' : '')} onClick={ this.props.toggle }>
                    <FontAwesomeIcon icon="chevron-down"/>
                </div>
                <div className={ 'links ' + (this.props.isOpen ? 'open' : '') }>
                    <a href="#">First</a>
                    <a href="#">Second Link</a>
                    <a href="#">Third option</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isOpen: state.nav.isOpen
});

const mapDispatchToProps = (dispatch) => ({
    toggle: () => {
        dispatch(toggleNavAction())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
