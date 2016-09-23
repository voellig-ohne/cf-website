import Illustration from 'components/Illustration'
import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import classNames from 'classNames'

export default class IllustratedSection extends React.Component{
    render() {
        const { illustration, title } = this.props
        const className = classNames(this.props.className, style.section)

        return (
            <section className={ className }>
                <div className={ style['illustration-wrap'] }>
                    <Illustration illustration={ illustration } className={style.illustration} />
                    <h2 className={ style.title }>{ title }</h2>
                </div>
                <div className={ style.text }>
                    { this.props.children }
                </div>
            </section>
        )
    }
}