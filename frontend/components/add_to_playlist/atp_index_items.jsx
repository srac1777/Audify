import React from 'react';
import { Link } from 'react-router-dom';

class ATPIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.playlist.title}
            </li>
        );
    }
}

export default ATPIndexItem;