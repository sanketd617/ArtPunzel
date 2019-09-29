import React from "react";
import './Card.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import fontawesome from '@fortawesome/fontawesome';
import {faHeart, faComment} from "@fortawesome/free-solid-svg-icons";

fontawesome.library.add(
    faHeart, faComment);

export default class Card extends React.Component{
    render() {
        return (
            <div className="card">
                <div className="image">
                    <img src={'/images/' + this.props.sketch.image} alt=""/>
                </div>
                # { this.props.sketch.id }
                <span className="action"><FontAwesomeIcon icon={faComment}/></span>
                <span className="action"><FontAwesomeIcon icon={faHeart}/></span>
            </div>
        );
    }
}
