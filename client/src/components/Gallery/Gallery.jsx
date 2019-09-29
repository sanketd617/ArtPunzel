import React from "react";
import './Gallery.scss';
import Card from "../Card/Card";
import {Link} from "react-router-dom";

const sketches = [
    {
        image: 'one.jpg',
        id: '1',
        likes: 100,
        comments: 56
    },
    {
        image: 'two.jpg',
        id: '2',
        likes: 100,
        comments: 56
    },
    {
        image: 'three.jpg',
        id: '3',
        likes: 100,
        comments: 56
    },
    {
        image: 'four.jpg',
        id: '4',
        likes: 100,
        comments: 56
    },
    {
        image: 'ten.jpg',
        id: '5',
        likes: 100,
        comments: 56
    },
    {
        image: 'nine.jpg',
        id: '6',
        likes: 100,
        comments: 56
    },
    {
        image: 'seven.jpg',
        id: '7',
        likes: 100,
        comments: 56
    },
    {
        image: 'eight.jpg',
        id: '8',
        likes: 100,
        comments: 56
    },
    {
        image: 'one.jpg',
        id: '1',
        likes: 100,
        comments: 56
    },
    {
        image: 'two.jpg',
        id: '2',
        likes: 100,
        comments: 56
    },
    {
        image: 'three.jpg',
        id: '3',
        likes: 100,
        comments: 56
    },
    {
        image: 'four.jpg',
        id: '4',
        likes: 100,
        comments: 56
    },
    {
        image: 'ten.jpg',
        id: '5',
        likes: 100,
        comments: 56
    },
    {
        image: 'nine.jpg',
        id: '6',
        likes: 100,
        comments: 56
    },
    {
        image: 'seven.jpg',
        id: '7',
        likes: 100,
        comments: 56
    },
    {
        image: 'eight.jpg',
        id: '8',
        likes: 100,
        comments: 56
    },
];

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                {
                    sketches.map((sketch, index) => (
                        <Link to={'/sketch/' + sketch.id } key={index}>
                            <Card sketch={sketch}/>
                        </Link>
                    ))
                }
            </div>
        );
    }
}
