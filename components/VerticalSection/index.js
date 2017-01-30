import React from 'react'
import style from './style.module.less'
import classNames from 'classNames'
import { map } from 'lodash'
import Illustration from 'components/Illustration'
import SectionContentSingle from 'components/SectionContentSingle'

export default class VerticalSection extends React.Component {
    render () {
        const { sections } = this.props

        return (
            <SectionContentSingle wide={ true }>
                <div className={style.sections}>
                    {
                        map(sections, (section, idx) => {
                            return (
                                <div key={idx}
                                        className={style.section}>
                                    <div className={style.illustration_container}>
                                        <Illustration illustration={section.icon} className={style.illustration} />
                                    </div>
                                    {
                                        section.subTitle ?
                                        <p className={style.sub_title}>
                                            { section.subTitle }
                                        </p> :
                                        null
                                    }
                                    <h2>{ section.title }</h2>
                                    <div dangerouslySetInnerHTML={{ __html: section.body }} />
                                </div>
                            )
                        })
                    }
                </div>
            </SectionContentSingle>
        )
    }
}
