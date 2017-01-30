import React from 'react'
import classNames from 'classNames'

export default class SectionContentSingle extends React.Component {
    render () {
        const { children, wide, title } = this.props

        const wrapperClasses = classNames('section_content-single', {
            'section_content-single--wide': wide
        })

        return (
            <section className="section_content section_content--single">
                <div className={wrapperClasses}>
                    { 
                        title ?
                        <h1 className="page_heading">{ title }</h1> : null
                    }
                    { this.props.children }
                </div>
            </section>
        )
    }
}