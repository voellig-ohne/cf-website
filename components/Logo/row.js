import React from 'react'

module.exports = React.createClass({
    render () {
        const rows = this.props.rows.map((row, index) => {
            return (
                <div key={index}>{row}</div>
            )
        })
        return (
            <div>
                {rows}
            </div>
        )
    }
})
