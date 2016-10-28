import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import VerticalSection from 'components/VerticalSection'
import FoxAndYou from 'components/FoxAndYou'
import Hero from 'components/Hero'
import { filter, map, includes } from 'lodash'

export default class Arbeitsweisen extends React.Component {
    render() {
        const weisen = map(filter(this.props.route.pages, (page) => {
            return includes(page.path, '/arbeitsweisen/weisen')
        }), (page) => {
            return page.data
        })

        return (
            <DocumentTitle title={ config.siteTitle + ' | arbeitsweisen'  }>
                <main>
                    <section className="sub_intro">
                        <FoxAndYou className="sub_intro-forrest" />
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Der Fuchs und Du.
                            </h1>
                        </header>
                    </section>

                    <VerticalSection sections={weisen} />

                    <Hero image="wald_briefe">
                        <Link to="/usecases/" className="cta">
                            Lesen Sie Use-Cases
                        </Link>
                    </Hero>
                </main>
            </DocumentTitle>
        )
    }
}
