import Illustration from 'components/Illustration'
import React from 'react'
import './style.less'
import { map } from 'lodash'
import classNames from 'classNames'

const ELEMENT_SIZE = {
    width: 30,
    height: 28
}

export default class Forrest extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            size: {
                height: 0,
                width: 0
            },
            foxPosition: {
                row: 0,
                column: 0
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
        const windowSize = {
            height: this.container.offsetHeight,
            width: this.container.offsetWidth
        }

        const gridDimentions = this.getGridDimentions(windowSize, ELEMENT_SIZE)
        const foxPosition = this.generateFoxPosition(gridDimentions)
        const grid = this.generateGrid(gridDimentions)

        this.setState({
            grid,
            foxPosition
        })
    }
    generateGrid(gridDimentions) {
        return Array.apply(null, {length: gridDimentions.height}).map((row, rowIndex) => {
            return Array.apply(null, {length: gridDimentions.width}).map((column, columnIndex) => {
                return {
                    isActive: Math.random() < .8
                }
            })
        })
    }
    generateFoxPosition(gridDimentions) {
        return {
            row: Math.round(gridDimentions.width * Math.random()),
            column: Math.round(gridDimentions.height * Math.random())
        }
    }
    getGridDimentions(windowSize, elementSize) {
        return {
            height: windowSize.height / elementSize.height,
            width: windowSize.width / elementSize.width
        }
    }
    onMouseEnter() {
    }
    isFox(currentPosition, foxPosition) {
        return currentPosition.row === foxPosition.row &&
                (currentPosition.column === foxPosition.column ||
                currentPosition.column + 1 === foxPosition.column)
    }
    render () {
        const { className } = this.props

        return (
            <div className={ classNames('forrest', className) }
                ref={(c) => this.container = c}>
                {
                    map(this.state.grid, (row, idxRow) => {
                        return (
                            <div key={idxRow}
                                    className="forrest-row">
                                {
                                    map(row, (element, idxElement) => {

                                        const isFox = this.isFox(
                                            { row: idxRow, column: idxElement},
                                            this.state.foxPosition
                                        )

                                        const classes = classNames(
                                            'forrest-element',
                                            {
                                                'forrest-element--active': element.isActive,
                                                'forrest-element--fox': isFox
                                            }
                                        )

                                        return (
                                            <Illustration illustration="element"
                                                className={classes}
                                                key={idxElement}
                                                onMouseEnter={this.onMouseEnter.bind(this)} />
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
