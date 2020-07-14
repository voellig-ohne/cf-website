import React from 'react';
import { Link } from 'gatsby';

export default ({ label, targetLink, targetPage }) => {
    if (targetLink) {
        return (
            <a className="cta" href={targetLink}>
                {label}
            </a>
        );
    }

    if (targetPage) {
        return (
            <Link className="cta" to={targetPage?.slug}>
                {label}
            </Link>
        );
    }

    return null;
};
