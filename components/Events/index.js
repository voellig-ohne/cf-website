import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import classNames from 'classNames'
import SectionContentSingle from 'components/SectionContentSingle'
import moment from 'moment';
import 'moment/locale/de';

function Events({ events }) {
    return (
        <SectionContentSingle wide={true}>
            <ul className={style.events}>
                { map(events, (event) => {
                    console.log(event)
                    return (
                        <li key={event.title}
                                className={style.event}>
                            <div className={style.meta}>
                                { event.date && <Date date={event.date} /> } 
                            </div>
                            <div className={style.meta}>
                                <h2>{ event.title }</h2>
                                <div className={style.body}
                                        dangerouslySetInnerHTML={{ __html: event.body }} />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </SectionContentSingle>
    )
}

function Date({ date }) {
    const d = moment(date);

    return (
        <div className={style.date}>
            { d.format('MMMM') }            
        </div>
    )
}

export default Events;