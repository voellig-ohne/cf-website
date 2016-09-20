import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Forrest from 'components/Forrest'
import Hero from 'components/Hero'

export default class Arbeitsweisen extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle + ' | arbeitsweisen'  }>
                <main>
                    <section className="section_content">
                        <h1 className="page_heading">Arbeitsweisen</h1>
                    </section>

                    <Hero image="/img/wald_briefe.jpg">
                        <Link to="/usecases/" className="cta">
                            Lesen Sie Use-Cases
                        </Link>
                    </Hero>
                </main>
            </DocumentTitle>
        )
    }
}
