import React, { Component } from 'react';

export default class Funy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        data:[]
    };

    render() {
        const { data } = this.props;
        let random = Math.floor(Math.random()* data.length),
            item = data[random] || {};
        return(
            <div className="login-funy">
                <img src={item.imgUrl || 'http://image.wufazhuce.com/FrvLOylTDsUY4-kzmXcHAHkkTfbr'} alt=""/>
                <p className="text">{ item.text || "如果不越界，就无法遇见另一个世界的规则和关系。如果想要崭新的关系，如果想拥有爱情，就必须越界，若是守住了界限，他跟你，就只能到那里为止。"}</p>
                <p className='tr'>__By.佚名</p>
            </div>
        )
    }
}