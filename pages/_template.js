import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import LogoContainer from '../components/LogoContainer'
import Navigation from '../components/Navigation'

import 'style/main.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {
        return (
            <div>
                {this.props.children}
                <Navigation />
                <LogoContainer className="logo-container" />
            </div>
        )
    },
})
