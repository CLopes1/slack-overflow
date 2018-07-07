import React, { Component } from "react";
import "./Categories.css";
import { Carousel } from "react-materialize";
import catArray from "../../catArray.json";

let $ = window.$

//This initializes the carousel

class Categories extends Component {
    componentDidMount() {

        // HACK: this function moves to the end of the carousel after it's initialized via componentDidMount.
        // This enables you to go click left within the carousel. 
        $('.carousel').carousel('next', 16)
    }

    //Renders the carousel. Here we're looping over catArray.json to display all of the individual categories listed in the JSON. 
    render() {
        return (
            <div>
                <div id="Carousel">

                    <Carousel
                        options={{
                            dist: -40,
                            shift: 40,
                        }}
                        
                        children={catArray.map((cat) => {

                            return (

                                <p
                                    key={cat.id}
                                    id="cards"
                                    onClick={() => { this.props.onImageClick(cat) }}>{cat.name}
                                </p>
                            );
                        })}
                    />

                </div>

            </div>
        )
    }
}

export default Categories;