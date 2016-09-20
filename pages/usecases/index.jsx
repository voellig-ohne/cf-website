import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { map, includes } from 'lodash'
import MiniForrestGroup from 'components/MiniForrestGroup'
import Hero from 'components/Hero'

export default class UseCases extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle + ' | use cases' }>
                <main>
                    <section className="sub_intro">
                        <MiniForrestGroup className="sub_intro-forrest" />
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Für jeden Wald der richtige Fuchs.
                            </h1>
                        </header>
                    </section>
                    
                    <Hero image="/img/wald_workshop.jpg">
                        <Link to="/workshops/" className="cta">
                            Werden Sie zum Fuchs
                        </Link>
                    </Hero>
                </main>
            </DocumentTitle>
        )
    }
}
