import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class GithubWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static defaultProps = {
        user: ''
    };

    static propTypes = {
        user: PropTypes.string
    };

    render() {
        return(
            <div className="github-widget">
                
            </div>
        )
    }
}