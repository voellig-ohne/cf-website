import React from 'react'
import style from './style.module.less'
import classNames from 'classNames'

export default class Teaser extends React.Component {
    render () {
        const { title, children } = this.props

        return (
            <section className="section_content section_content--single">
                <div className="section_content-single">
                    { title ?
                        <h1 className="page_heading">
                            { title }
                        </h1> :
                        null
                    }
                    
                    <p className={style.text}>
                        { children }
                    </p>
                </div>
            </section>
        )
    }
}
