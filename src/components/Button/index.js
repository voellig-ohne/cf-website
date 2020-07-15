import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

export default ({ label, targetLink, targetPage, size, className }) => {
    const classNamesElement = classNames(className, 'cta', { cta__small: size === 'small' });
    if (targetLink) {
        return (
            <a className={classNamesElement} href={targetLink}>
                {label}
            </a>
        );
    }

    if (targetPage) {
        return (
            <Link className={classNamesElement} to={targetPage?.slug}>
                {label}
            </Link>
        );
    }

    return null;
};
