import React from 'react';
import classNames from 'classNames';

export default ({ wide, title, classNameWrapper, className, children }) => {
    const classes = classNames('section_content', 'section_content--single', className);

    const wrapperClasses = classNames('section_content-single', classNameWrapper, {
        'section_content-single--wide': wide,
    });

    return (
        <section className={classes}>
            <div className={wrapperClasses}>
                {title ? <h1 className="page_heading">{title}</h1> : null}
                {children}
            </div>
        </section>
    );
};
