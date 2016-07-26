import React from 'react'
import './style.less'

module.exports = React.createClass({
    render () {
        const svg = require('./' + this.props.illustration + '.svg')

        return (
            <div dangerouslySetInnerHTML={{ __html: svg }}
                className={this.props.className}>
            </div>
        )
    }
})
