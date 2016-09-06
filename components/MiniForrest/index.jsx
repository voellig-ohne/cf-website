import Illustration from 'components/Illustration'
import React from 'react'
import style from './style.module.less'
import { map, find } from 'lodash'
import classNames from 'classNames'

const TREE = 't'
const FOX = 'f'
const EMPTY = 'e'

export default class miniForrest extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { className, forrest, background } = this.props
        console.log(background)
        const classes = classNames(
            style.forrest,
            className,
            {
                [style.green]: background === 'green'
            }
        )

        return (
            <div className={ classes }>
                {
                    map(forrest, (row, rowIdx) => {
                        return (
                            <div className={style.row}
                                    key={rowIdx}>
                                {
                                    map(row, (cell, cellIdx) => {
                                        const classes = classNames(
                                            style.element,
                                            {
                                                [style.tree]: cell === TREE,
                                                [style.fox]: cell === FOX
                                            }
                                        )

                                        if (cell === EMPTY) {
                                            return (
                                                <div className={ classes }
                                                    key={cellIdx} />
                                            )
                                        }

                                        return (
                                            <Illustration illustration="element"
                                                className={ classes }
                                                key={cellIdx} />
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
