import React from 'react'
import './style.less'
import Illustration from 'components/Illustration'

module.exports = React.createClass({
    componentDidMount () {
        if (typeof window !== 'undefined') {
            this.containerHeight = this._logoContainer.offsetHeight
            this.scrollChange()
            window.addEventListener('scroll', this.scrollChange)
        }
    },
    getInitialState : function() {
        return {
            isFixed: false
        }
    },
    scrollChange() {
        const isFixed = window.scrollY > this.containerHeight

        if (this.state.isFixed !== isFixed) {
            this.setState({isFixed: isFixed})
        }
    },
    render () {
        let containerClasses = 'logo-container'
        containerClasses += this.state.isFixed ? ' logo-container--fixed' : ''

        return (
            <div className={containerClasses}
                ref={(c) => this._logoContainer = c}>
                <Illustration illustration="logo"
                    className="logo" />
            </div>
        )
    }
})
