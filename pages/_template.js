import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import LogoContainer from '../components/LogoContainer';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import 'fonts/fuchs.css';
import 'style/main.less';

module.exports = React.createClass({
    propTypes() {
        return {
            children: React.PropTypes.any,
        };
    },
    render() {
        return (
            <div>
                {this.props.children}
                <Navigation location={this.props.location.pathname} />
                <Footer />
                <LogoContainer className="logo-container" />
            </div>
        );
    },
});
