import React from 'react'
import style from './style.module.less'
import classNames from 'classNames'
import { map } from 'lodash'
import Illustration from 'components/Illustration'

export default class VerticalSection extends React.Component {
    render () {
        const { sections } = this.props

        return (
            <section className="section_content section_content--single">
                <div className={classNames('section_content-single', 'section_content-single--wide')}>
                    <div className={style.sections}>
                        {
                            map(sections, (section, idx) => {
                                return (
                                    <div key={idx}
                                            className={style.section}>
                                        <div className={style.illustration_container}>
                                            <Illustration illustration={section.icon} className={style.illustration} />
                                        </div>
                                        <h2>{ section.title }</h2>
                                        {
                                            section.subTitle ?
                                            <p className={style.sub_title}>
                                                { section.subTitle }
                                            </p> :
                                            null
                                        }
                                        <div dangerouslySetInnerHTML={{ __html: section.body }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
