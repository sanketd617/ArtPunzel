import React from "react";
import './Category.scss'

class Category extends React.Component {


    render() {
        return (
            <div className="category">
                <div className="content">
                    <div className="image">
                        <img src={'/images/' + this.props.image } alt="" />
                    </div>
                    <div className="title">
                        { this.props.title }
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;
