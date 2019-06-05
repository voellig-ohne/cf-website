import React from 'react';
import './style.less';
import { Link } from 'react-router';
import classNames from 'classNames';

export default class Navigation extends React.Component {
    render() {
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

        const { location } = this.props;

        return (
            <nav className="navigation">
                <ul className="navigation-list">
                    {links.map(link => {
                        const linkClasses = classNames('navigation_link', {
                            'navigation_link--active': link.link === location,
                        });
                        return (
                            <li className="navigation-item" key={link.link}>
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
    }
}
