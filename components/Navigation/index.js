import React from 'react'
import './style.less'
import { Link } from 'react-router'
import classNames from 'classNames'

export default class Navigation extends React.Component {
    render () {
        const links = [
            {
                link: '/ueber_uns/',
                title: 'über uns'
            },{
                link: '/leistungen/',
                title: 'leistungen'
            },{
                link: '/arbeitsweisen/',
                title: 'arbeitsweisen'
            },{
                link: '/usecases/',
                title: 'use cases'
            },{
                link: '/workshops/',
                title: 'workshops'
            }
        ]

        const { location } = this.props

        return (
            <nav className="navigation">
                <ul className="navigation-list">
                    {links.map((link) => {
                        const linkClasses = classNames('navigation_link', {'navigation_link--active': link.link === location})
                        return (
                            <li className="navigation-item"
                                    key={link.link}>
                                <Link to={link.link} className={linkClasses}>
                                    {link.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
