import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import classNames from 'classNames'

function Events({ events }) {
    return (
        <ul>
            { map(events, (event) => {
                return (
                    <li key={event.title}>
                        { event.title } 
                    </li>
                )
            })}
        </ul>
    )
}

export default Events;