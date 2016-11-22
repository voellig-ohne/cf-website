import React from 'react'
import style from './style.module.less'
import Illustration from 'components/Illustration'
import { Link } from 'react-router'
import classNames from 'classNames'
import { map } from 'lodash'

export default class SectionItemStrip extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        const {
            illustrations,
            title
        } = this.props

        const className = classNames(
            this.props.classNames,
            'section_content',
            'section_content--single',
            style.strip
        )

        console.log(style.illustrationContainer)

        return (
            <section className={className}>
                <div className="section_content-single">
                    <h2 className={style.heading}>{ title }</h2>
                    <div className={style.illustrationContainer}>
                        {
                            map(illustrations, (illustration, key) => {
                                return (
                                    <Illustration 
                                        className={style.illustration}
                                        illustration={illustration.illustration}
                                        key={key} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}