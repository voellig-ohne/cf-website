import React from 'react'
import classNames from 'classNames'
import style from './style.module.less'
import { map } from 'lodash'

export default class PartnerList extends React.Component {
    render () {
        const { partners } = this.props

        return (
            <ul className={ style.partners }>
                {
                    map(partners, (partner, idx) => {
                        return (
                            <li key={idx}
                                    className={ style.partner }>
                                { partner.data.name }

                            </li>
                        ) 
                    })
                }
            </ul>
        )
    }
}