import React from 'react'
import './style.less'

export default class Illustration extends React.Component {
    render () {
        const svg = require('./' + this.props.illustration + '.svg')

        return (
            <div dangerouslySetInnerHTML={{ __html: svg }}
                className={this.props.className}>
            </div>
        )
    }
}
