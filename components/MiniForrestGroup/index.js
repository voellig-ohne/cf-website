import Illustration from 'components/Illustration'
import React from 'react'
import style from './style.module.less'
import { map, includes } from 'lodash'
import classNames from 'classNames'

import forrests from './_forrests.js'
import MiniForrest from 'components/MiniForrest'

export default class miniForrest extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        const greenBackground = [1,3,4,6]

        const { className, forrest, background } = this.props
        const classes = classNames(
            style.forrests,
            className,
            {
                [style.green]: background === 'green'
            }
        )

        return (
            <div className={ classes }>
                {
                    map(forrests, (forrest, idx) => {
                        return (
                            <MiniForrest className={style.forrest}
                                forrest={forrest}
                                background={includes(greenBackground, idx) ? 'green' : 'white'}
                                key={idx} />
                        )
                    })
                }
            </div>
        )
    }
}
