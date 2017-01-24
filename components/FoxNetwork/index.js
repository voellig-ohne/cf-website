import Illustration from 'components/Illustration'
import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import classNames from 'classNames'

const ANIMAL_COUNT = 16;
const GRAPHICS_COUNT = 12;

export default class FoxNetwork extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        const leaves = Array.apply(null, {length: ANIMAL_COUNT}).map((animal, index) => {
            return 'tiere_' + index % GRAPHICS_COUNT
        })

        console.log(leaves)

        const containerClasses = classNames(this.props.className)

        return (
            <div className={containerClasses}
                onClick={this.generate.bind(this)}
                ref={(c) => this.containerEl = c}>
                <div className={style.container}>
                    <div className={style.fox}>
                        <Illustration
                            illustration="fuchs"
                            className={style.fox_illustration} />
                    </div>
                    <div className={style.leaves}>
                        {
                            map(leaves, (leave, idx) => {
                                const classes = classNames(style.leave, {
                                    [style['leave-active']]: idx === this.state.targetAnimalIndex
                                })
                                return (
                                    <Illustration
                                        key={idx}
                                        illustration={leave}
                                        className={classes} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                this.onResize()
            }, 0)

            window.addEventListener('resize', this.onResize.bind(this))
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize.bind(this))
    }
    onResize() {
        this.setState({
            
        })
    }
    generate() {
        console.log('clicked')
    }
}