import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import classNames from 'classNames'
import SectionContentSingle from 'components/SectionContentSingle'

function Events({ events }) {
    return (
        <SectionContentSingle wide={true}>
            <ul className={style.events}>
                { map(events, (event) => {
                    return (
                        <li key={event.title}
                                className={style.event}>
                            { event.title } 
                        </li>
                    )
                })}
            </ul>
        </SectionContentSingle>
    )
}

export default Events;