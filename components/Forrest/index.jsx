import Illustration from 'components/Illustration'
import React from 'react'
import './style.less'
import { map } from 'lodash'
import classNames from 'classNames'

const ELEMENT_SIZE = {
    width: 30,
    height: 30
}

export default class Forrest extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            size: {
                height: 0,
                width: 0
            }
        }
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.onResize()
            window.addEventListener('resize', this.onResize.bind(this))
        }
    }
    onResize() {
        this.setState({
            size: {
                height: this.container.offsetHeight,
                width: this.container.offsetWidth
            }
        })
    }
    generateGrid(size, ELEMENT_SIZE) {
        const gridDimentions = {
            height: size.height / ELEMENT_SIZE.height,
            width: size.width / ELEMENT_SIZE.width
        }

        return Array.apply(null, {length: gridDimentions.height}).map(() => {
            return Array.apply(null, {length: gridDimentions.width}).map(() => {
                return {
                    isActive: Math.random() < .8
                }
            })
        })
    }
    render () {
        const { className } = this.props

        const grid = this.generateGrid(this.state.size, ELEMENT_SIZE)

        return (
            <div className={ classNames('forrest', className) }
                ref={(c) => this.container = c}>
                {
                    map(grid, (row, idxRow) => {
                        return (
                            <div key={idxRow}
                                    className="forrest-row">
                                {
                                    map(row, (element, idxElement) => {
                                        const classes = classNames(
                                            'forrest-element',
                                            {
                                                'forrest-element--active': element.isActive
                                            }
                                        )
                                        return (
                                            <Illustration illustration="element"
                                                className={classes}
                                                key={idxElement} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
