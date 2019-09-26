import React from "react";
import './nav.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import fontawesome from '@fortawesome/fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {toggleNavAction} from "../../actions/navActions";
import {
    faFacebook,
    faGithub,
    faGitlab,
    faHackerrank,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

fontawesome.library.add(
    faChevronDown, faFacebook, faInstagram,
    faGithub, faLinkedin, faGitlab,
    faHackerrank);

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
                    <a href="#">Home</a>
                    <a href="#">Singles</a>
                    <a href="#">Couples</a>
                    <a href="#">Black & White</a>
                    <a href="#">Miscellaneous</a>

                    <div className="social">
                        <div className="title">
                            Follow us on
                        </div>
                        <div className="social-btns">
                            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                        </div>
                    </div>

                    <div className="dev">
                        <div className="title">Developer</div>
                        <div className="dev-name">
                            Sanket Dahegaonkar
                        </div>
                        <div className="social-links">
                            <a href="#">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} /> sanketd617
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={['fab', 'github']} /> sanketd617
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={['fab', 'gitlab']} /> sanketd617
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={['fab', 'facebook']} /> sanketdgreat
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={['fab', 'hackerrank']} /> dsanket617
                            </a>
                        </div>
                    </div>
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
