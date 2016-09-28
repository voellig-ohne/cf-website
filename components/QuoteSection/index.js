import React from 'react'
import style from './style.module.less'
import classNames from 'classNames'

export default class VerticalSection extends React.Component {
    render () {
        const { children, author } = this.props

        return (
            <section className="section_content section_content--single">
                <div className={classNames('section_content-single', style.container)}>
                    <blockquote className={style.quote} dangerouslySetInnerHTML={{ __html: children }}className={ style.quote } />
                    <div className={ style.author }>
                        { author }
                    </div>
                </div>
            </section>
        )
    }
}
