import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import VerticalSection from 'components/VerticalSection'
import FoxAndYou from 'components/FoxAndYou'
import Hero from 'components/Hero'
import SectionIconStrip from 'components/SectionIconStrip'
import { filter, map, includes } from 'lodash'

export default class Arbeitsweisen extends React.Component {
    render() {
        const weisen = map(filter(this.props.route.pages, (page) => {
            return includes(page.path, '/arbeitsweisen/weisen')
        }), (page) => {
            return page.data
        })

        const tools = [
            {
                illustration: 'tools_cleverreach',
                title: 'Cleverreach'
            },
            {
                illustration: 'tools_emarsys',
                title: 'emrsys'
            },
            {
                illustration: 'tools_google',
                title: 'Google Ananytics'
            },
            {
                illustration: 'tools_litmus',
                title: 'Litmus'
            },
            {
                illustration: 'tools_mailchimp',
                title: 'Mailchimp'
            },
            {
                illustration: 'tools_newsletter2go',
                title: 'Newsletter2go'
            },
            {
                illustration: 'tools_optivo',
                title: 'Optivo'
            },
            {
                illustration: 'tools_trello',
                title: 'Trello'
            },
            {
                illustration: 'tools_wordpress',
                title: 'Wordpress'
            },
        ]

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

                    <section className="section_content">
                        <h1 className="page_heading">Arbeitsweisen</h1>
                    </section>

                    <VerticalSection sections={weisen} />

                    <SectionIconStrip 
                        title="Tools"
                        illustrations={tools}/>

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
