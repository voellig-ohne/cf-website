import React from 'react'
import './style.less'
import Illustration from 'components/Illustration'

module.exports = React.createClass({
    componentDidMount () {
        if (typeof window !== 'undefined') {
            this.containerHeight = this._logoContainer.offsetHeight
            this.footer = document.getElementById('footer')
            this.scrollChange()
            this.calculateResize()
            window.addEventListener('scroll', this.scrollChange)
            window.addEventListener('resize', this.calculateResize)
        }
    },
    calculateResize () {
        this.footerTop = this.footer.offsetTop
        this.windowHeight = window.innerHeight

        this.setState({
            bottomDistance: this.footer.offsetHeight
        })
    },
    getInitialState : function() {
        return {
            isFixedTop: false,
            isFixedBottom: false,
            bottomDistance: 0
        }
    },
    scrollChange() {
        const scrollY = window.scrollY
        const isFixedTop = scrollY > this.containerHeight
        const isFixedBottom = this.footerTop < this.windowHeight + scrollY

        if (this.state.isFixedTop !== isFixedTop) {
            this.setState({isFixedTop: isFixedTop})
        }
        if (this.state.isFixedBottom !== isFixedBottom) {
            this.setState({isFixedBottom: isFixedBottom})
        }
    },
    render () {
        let containerClasses = 'logo-container'
        containerClasses += !this.state.isFixedTop ? ' logo-container--fixedTop' : ''
        containerClasses += this.state.isFixedBottom ? ' logo-container--fixedBottom' : ''

        const style = this.state.isFixedBottom ? {bottom: this.state.bottomDistance} : undefined

        return (
            <div className={containerClasses}
                style={style}
                ref={(c) => this._logoContainer = c}>
                <Illustration illustration="logo"
                    className="logo" />
            </div>
        )
    }
})
