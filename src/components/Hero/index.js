import React from 'react';
import './style.less';
import Illustration from '../components/Illustration';
import ResponsiveImage from '../components/ResponsiveImage';
import { Link } from 'react-router';
import classNames from 'classNames';

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { image, title } = this.props;

        const className = classNames(this.props.classNames, 'hero', {
            'hero--has_text': this.props.children,
        });

        return (
            <section className={className}>
                <ResponsiveImage source={image} className="hero-image" />
                <div className="hero-text">
                    <div>
                        {title ? <h1>{title}</h1> : null}

                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}
