import React from "react";
import './Categories.scss'
import Category from "./Category";

class Categories extends React.Component {


    render() {
        return (
            <div className="categories">
                <Category title="All" image="one.jpg"/>
                <Category title="Singles" image="two.jpg"/>
                <Category title="Couples" image="three.jpg"/>
                <Category title="Miscellaneous" image="four.jpg"/>
                <Category title="Black & White" image="seven.jpg"/>
            </div>
        );
    }
}

export default Categories;
