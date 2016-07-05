import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Logo from '../components/Logo'

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
                <Logo className="logo-container" />
            </div>
        )
    },
})
