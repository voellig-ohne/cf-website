import Illustration from 'components/Illustration'
import React from 'react'
import './style.less'
import { map, find } from 'lodash'
import classNames from 'classNames'

const ELEMENT_SIZE = {
    width: 30,
    height: 28
}

const MANY_FREQUENCY = 5;

const MODE_SINGLE = 'single'
const MODE_MANY = 'many'

export default class Forrest extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            size: {
                height: 0,
                width: 0
            },
            foxPositions: [{
                row: 0,
                column: 0
            }]
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

        const foxPositions = (this.props.mode === MODE_MANY) ? [] : [this.generateFoxPositionTopHalf(gridDimentions)]

        const grid = this.generateGrid(gridDimentions)

        this.setState({
            gridDimentions,
            grid,
            foxPositions
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
        const foxPositions = [this.generateFoxPositionTopHalf(this.state.gridDimentions)]
        this.setState({ foxPositions })
    }
    addFox(currentPosition) {
        const foxPositions = this.state.foxPositions
        foxPositions.push(currentPosition)
        this.setState({ foxPositions })
    }
    onMouseEnter(isFox, currentPosition) {
        if (isFox && this.props.mode === MODE_SINGLE) {
            this.rePositionFox()
        }
        if (this.props.mode === MODE_MANY) {
            this.hoverCount = this.hoverCount ? this.hoverCount + 1 : 1
            if (this.hoverCount % MANY_FREQUENCY === 1) {
                this.addFox(currentPosition)
            }
        }
    }
    isFox(currentPosition, foxPositions) {
        return !!find(foxPositions, (foxPosition) => {
            return currentPosition.column === foxPosition.column &&
                (currentPosition.row === foxPosition.row ||
                currentPosition.row + 1 === foxPosition.row)
        })
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
                                        const currentPosition = { row: idxElement, column: idxRow }

                                        const isFox = this.isFox(
                                            currentPosition,
                                            this.state.foxPositions
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
                                                onMouseEnter={this.onMouseEnter.bind(this, isFox, currentPosition)} />
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
