import React from 'react';
import './style.less';
import { Link } from 'gatsby';
import classNames from 'classnames';

export default ({ location }) => {
    const links = [
        {
            to: '/ueber_uns/',
            title: 'über uns',
        },
        {
            to: '/leistungen/',
            title: 'leistungen',
        },
        {
            to: '/arbeitsweisen/',
            title: 'arbeitsweisen',
        },
        {
            to: '/usecases/',
            title: 'use cases',
        },
        {
            to: '/workshops/',
            title: 'workshops',
        },
        {
            href: 'https://blog.fuchsundwald.de/',
            title: 'blog',
        },
    ];

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                {links.map((link) => {
                    const linkClasses = classNames('navigation_link', {
                        'navigation_link--active': link.link === location,
                    });
                    return (
                        <li className="navigation-item" key={link.href || link.to}>
                            {link.to && (
                                <Link to={link.to} className={linkClasses}>
                                    {link.title}
                                </Link>
                            )}
                            {link.href && (
                                <a href={link.href} className={linkClasses}>
                                    {link.title}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
