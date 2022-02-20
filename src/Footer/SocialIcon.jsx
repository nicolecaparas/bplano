import { Component } from "react";

export default class SocialIcon extends Component {
    render() {
        return (
            <i className={`fab fa-${this.props.iconName} fa-3x text-white md:fa-2x md:fa-lg`}></i> 
        )
    }
}