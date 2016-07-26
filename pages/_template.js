import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import ForrestAnimation from '../components/ForrestAnimation'

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
                <ForrestAnimation className="logo-container" />
            </div>
        )
    },
})
