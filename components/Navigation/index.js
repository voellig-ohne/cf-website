import React from 'react'
import './style.less'
import { Link } from 'react-router'

module.exports = React.createClass({
    render () {
        const links = [
            {
                link: '/',
                title: 'über uns'
            },{
                link: '/leistungen/',
                title: 'unsere leistungen'
            },{
                link: '/arbeitsweisen/',
                title: 'arbeitsweisen'
            },{
                link: '/usecases/',
                title: 'use cases'
            },{
                link: '/workshops/',
                title: 'beratung & workshops'
            }
        ]

        return (
            <nav className="navigation">
                <ul className="navigation-list">
                    {links.map((link) => {
                        return (
                            <li className="navigation-item"
                                    key={link.link}>
                                <Link to={link.link}
                                        className="navigation-link">
                                    {link.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
})
