import React from 'react'
import { map } from 'lodash'
import './style.less'
import { Link } from 'react-router'
import Illustration from 'components/Illustration'

export default class Footer extends React.Component {
    render() {
        const infoList = [{                
                title: (
                    <Illustration illustration="home" />
                ),
                value: (
                    <span>
                        Christian Fuchs<br />
                        Sonnenallee 206<br />
                        12059 Berlin
                    </span>
                )
            },{                
                title: (
                    <b>§</b>
                ),
                value: (
                    <Link to="/haftungsausschluss/">
                        Impressum
                    </Link>
                )
            },
        ]

        const socialMedia = [
            {
                icon: 'twitter',
                link: 'https://twitter.com/FuchsUndWald',
                title: '@FuchsUndWald'
            }, {
                icon: 'xing',
                link: 'http://xing.to/christianfuchs',
                title: 'christianfuchs'
            }, {
                icon: 'facebook',
                link: 'https://www.facebook.com/fuchsundwald',
                title: 'fuchs+wald'
            }, {
                icon: 'home',
                title: (
                    <span>
                        fuchs+wald<br /> 
                        c/o Christian Fuchs<br />
                        Sonnenallee 206<br />
                        12059 Berlin
                    </span>
                )
            }, {
                iconChar: '§',
                link: '/impressum/',
                title: 'Impressum'
            }, {
                icon: 'sternchen',
                link: 'https://volligohne.de/projekte/fuchsundwald/',
                title: (
                    <span className='footer-credit'>
                         gestaltung & code:<br />
                         völlig ohne
                    </span>
                ), 
                className: 'footer-credit-row'
            }
        ]

        return (
            <footer className="footer"
                id="footer">
                <section className="footer-section footer-imprint">
                    <p>
                        fuchs+wald<br />
                        <em>Digitaldialoge</em>
                    </p>
                    <dl>
                    {
                        map(socialMedia, (info, idx) => {
                            return (
                                <div key={ idx } 
                                        className={info.className}>
                                    <dt>
                                        { 
                                            info.iconChar ? 
                                            info.iconChar : 
                                            ( <Illustration illustration={info.icon} /> )    
                                        }
                                    </dt>
                                    <dd>
                                        { 
                                            !info.link ? 
                                            info.title : 
                                            ( 
                                                <a href={info.link}>
                                                    { info.title }
                                                </a>
                                            )    
                                        }
                                    </dd>
                                </div>
                            )
                        })
                    }
                    </dl>
                </section>
                <section className="footer-section">
                    <h2>kontakt</h2>
                    <a href="mailto:projektanfrage@undwald.de" className="cta">
                        Projektanfrage senden
                    </a>
                </section>
            </footer>
        )
    }
}
