import React from 'react'
import classNames from 'classNames'
import style from './style.module.less'
import { map } from 'lodash'
import ResponsiveImage from 'components/ResponsiveImage'

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
                                <div className={ style.image_container_container }>
                                    <div className={ style.image_container }>
                                        { partner.data.img ?
                                            <ResponsiveImage source={partner.data.img} 
                                                className={ style.image }
                                                sizes="(max-width: 600px) 100vw, 400px"/>
                                            : null
                                        }
                                    </div>
                                </div>
                                
                                <h2 className={ style.heading }>
                                    { partner.data.name }
                                </h2>

                                <div  className={ style.text }
                                    dangerouslySetInnerHTML={{ __html: partner.data.body }} />

                                { partner.data.link ?
                                    <a href={ partner.data.link.href }
                                            target="_blank">
                                        { partner.data.link.text }
                                    </a> : null
                                }
                            </li>
                        ) 
                    })
                }
            </ul>
        )
    }
}