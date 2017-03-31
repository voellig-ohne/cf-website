import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import classNames from 'classNames'
import SectionContentSingle from 'components/SectionContentSingle'
import moment from 'moment';
import 'moment/locale/de';

const TYPES = {
    open: 'Offener Workshop',
    individual: 'Individueller Workshop',
    inhouse: 'Inhouse Workshop'
}

function Events({ events }) {
    return (
        <SectionContentSingle wide={true}>
            <ul className={style.events}>
                { map(events, (event) => {
                    return (
                        <li key={event.title}
                                className={style.event}>
                            <div className={style.meta}>
                                { event.date && <Date date={event.date} /> } 
                                <div>
                                </div>
                            </div>
                            <div className={style.content}>
                                <h2 className={style.heading}>
                                    { event.title }
                                </h2>
                                <div className={style.body}
                                        dangerouslySetInnerHTML={{ __html: event.body }} />
                            </div>
                            <div className={style.footer}> 
                                <div>
                                    { !!event.price && 
                                        <Meta> 
                                            <span>Preis</span>
                                            <span>{event.price}</span>
                                        </Meta>
                                    } 
                                    { !!event.type && 
                                        <Meta> 
                                            <span>Typ</span>
                                            <span>{ TYPES[event.type] }</span>
                                        </Meta>
                                    } 
                                </div>
                                { event.link && 
                                    <a className='cta cta__small'
                                            href={event.link}
                                            target='_blank'>
                                        { event.type === 'open' ?
                                            'Buchen' : 'Mehr Informationen'
                                        }                                            
                                    </a>
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
        </SectionContentSingle>
    )
}

function Meta({ children }) {
    return (
        <div className={style.meta_info}>
            <span className={style.meta_info_key}>
                { children[0] }
            </span>:&nbsp;
            <span className={style.meta_info_value}>
                { children[1] }
            </span>
        </div>
    )
}

function Date({ date }) {
    const d = moment(date);

    return (
        <div className={style.date}>
            <div className={style.day}>
                { d.format('DD.MM.') }
            </div>
            <div className={style.year}>
                { map(d.format('YYYY'), (number, idx) => {
                    return (
                        <span key={idx}>
                            { number }
                        </span>
                    );
                    })
                 }
            </div>
        </div>
    )
}

export default Events;