import React from 'react'
import './style.less'
import Illustration from 'components/Illustration'

export default class LogoContainer extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isFixedTop: false,
            isFixedBottom: false,
            bottomDistance: 0
        }
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.containerHeight = this._logoContainer.offsetHeight
            this.footer = document.getElementById('footer')
            this.scrollChange()
            this.calculateResize()
            window.addEventListener('scroll', this.scrollChange.bind(this))
            window.addEventListener('resize', this.calculateResize.bind(this))
        }
    }
    calculateResize() {
        this.footerTop = this.footer.offsetTop
        this.windowHeight = window.innerHeight

        this.setState({
            bottomDistance: this.footer.offsetHeight
        })
    }
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
    }
    render() {
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
}
