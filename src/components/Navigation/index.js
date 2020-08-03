import React from 'react';
import './style.less';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { addForwardSlashToSlug } from '../utils';

export default ({ location, menu }) => {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                {menu.map(({ label, targetLink, targetPage }, index) => {
                    const linkClasses = classNames('navigation_link', {
                        'navigation_link--active': targetPage?.slug === location,
                    });
                    return (
                        <li className="navigation-item" key={index}>
                            {targetPage && (
                                <Link to={addForwardSlashToSlug(targetPage?.slug)} className={linkClasses}>
                                    {label}
                                </Link>
                            )}
                            {targetLink && (
                                <a href={targetLink} className={linkClasses}>
                                    {label}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
