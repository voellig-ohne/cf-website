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
        const gridDimentions = this.getGridDimentions(ELEMENT_SIZE)

        const foxPosition = this.generateFoxPositionTopHalf(gridDimentions)
        const grid = this.generateGrid(gridDimentions)

        this.setState({
            gridDimentions,
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
    generateFoxPositionTopHalf(gridDimentions) {
        return {
            row:    Math.round(((gridDimentions.width - 5) * Math.random()) + 2),
            column: Math.round((gridDimentions.height * Math.random()) / 2 + 1)
        }
    }
    getGridDimentions(elementSize) {
        const windowSize = {
            height: this.container.offsetHeight,
            width: this.container.offsetWidth
        }

        return {
            height: windowSize.height / elementSize.height,
            width: windowSize.width / elementSize.width
        }
    }
    rePositionFox() {
        const foxPosition = this.generateFoxPositionTopHalf(this.state.gridDimentions)
        this.setState({ foxPosition })
    }
    onMouseEnter(isFox) {
        if (isFox) {
            this.rePositionFox()
        }
    }
    isFox(currentPosition, foxPosition) {
        return currentPosition.column === foxPosition.column &&
                (currentPosition.row === foxPosition.row ||
                currentPosition.row + 1 === foxPosition.row)
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
                                            { row: idxElement, column: idxRow },
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
                                                onMouseEnter={this.onMouseEnter.bind(this, isFox)} />
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
