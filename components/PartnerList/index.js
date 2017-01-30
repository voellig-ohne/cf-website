import React from 'react'
import classNames from 'classNames'
import style from './style.module.less'
import { map } from 'lodash'
import ResponsiveImage from 'components/ResponsiveImage'

export default class PartnerList extends React.Component {
    render () {
        const { partners } = this.props

        console.log(partners)

        return (
            <ul className={ style.partners }>
                {
                    map(partners, (partner, idx) => {
                        return (
                            <li key={idx}
                                    className={ style.partner }>
                                <div className={ style.image_container }>
                                    { partner.data.img ?
                                        <ResponsiveImage source={partner.data.img} 
                                            className={ style.image }
                                            sizes="(max-width: 600px) 100vw, 400px"/>
                                        : null
                                    }
                                </div>
                                
                                { partner.data.name }


                            </li>
                        ) 
                    })
                }
            </ul>
        )
    }
}