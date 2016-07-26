import React from 'react'
import './style.less'

module.exports = React.createClass({
    renderLogo() {

    },
    render () {
        const svg = require('./' + this.props.illustration + '.svg')

        return (
            <div dangerouslySetInnerHTML={{ __html: svg }}>
            </div>
        )
    }
})
