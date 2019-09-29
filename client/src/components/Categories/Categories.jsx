import React from "react";
import './Categories.scss'
import Category from "./Category";
import { Link } from "react-router-dom";
class Categories extends React.Component {


    render() {
        return (
            <div className="categories">
                {
                    this.props.categories.map((category, index) => {
                        return (
                            <Link to={'/gallery/' + category.link} key={index}>
                                <Category title={category.title} image={category.image} />
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
}

export default Categories;
