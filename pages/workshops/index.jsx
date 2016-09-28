import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Forrest from 'components/Forrest'
import Hero from 'components/Hero'
import VerticalSection from 'components/VerticalSection'
import { map, filter } from 'lodash' 

export default class Workshops extends React.Component {
    render() {
        const workshops = map(filter(this.props.route.pages, (page) => {
            return page.path.includes('/workshops/workshops')
        }), (page) => {
            return page.data
        })

        return (
            <DocumentTitle title={ config.siteTitle  + ' | workshops' }>
                <main>
                    <section className="sub_intro">
                        <Forrest className="sub_intro-forrest"
                            mode="many"
                            density="0" />
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Jeder kann ein Fuchs sein.
                            </h1>
                        </header>
                    </section>

                    <section className="section_content">
                        <h1 className="page_heading">Coaching & Workshops</h1>
                    </section>

                    <VerticalSection sections={workshops} />

                    <Hero image="/img/wald_telefon.jpg">
                        <a href="mailto:cf@undwald.de" className="cta">
                            Treten Sie in Kontakt!
                        </a>
                    </Hero>
                </main>
            </DocumentTitle>
        )
    }
}
