import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { mapFields } from '../contentfulRichText';
import { addForwardSlashToSlug } from '../utils';

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
        let linktToPage = addForwardSlashToSlug(targetPage.slug ? targetPage.slug : mapFields(targetPage.fields).slug);

        return (
            <Link className={classNamesElement} to={linktToPage}>
                {label}
            </Link>
        );
    }

    return null;
};
