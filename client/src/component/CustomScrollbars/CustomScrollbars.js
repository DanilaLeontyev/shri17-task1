import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import "./CustomScrollbars.css";

class CustomScrollbars extends React.Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.renderThumb = this.renderThumb.bind(this);
    }

    renderThumb({ style, ...props }) {

        const thumbStyle = {
            background: `#D5DFE9`,
            borderRadius: 100,
            width: 8,
            right: 4
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }

    render() {
        return (
            <Scrollbars
                renderThumbVertical={this.renderThumb}
                {...this.props} />
        );
    }
}

export default CustomScrollbars