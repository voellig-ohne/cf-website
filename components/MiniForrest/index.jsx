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
        console.log(style)
    }
    render () {
        const { className, forrest } = this.props

        return (
            <div className={ classNames(style.forrest, className) }>
                {
                    map(forrest, (row) => {
                        return (
                            <div className={style.row}>
                                {
                                    map(row, (cell) => {
                                        const classes = classNames(
                                            style.element,
                                            {
                                                [style.tree]: cell === TREE,
                                                [style.fox]: cell === FOX
                                            }
                                        )

                                        if (cell === EMPTY) {
                                            return (
                                                <div className={ classes } />
                                            )
                                        }

                                        return (
                                            <Illustration illustration="element"
                                                className={ classes } />
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
