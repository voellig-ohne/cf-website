import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { filter, map } from 'lodash'
import Hero from 'components/Hero'
import MiniForrestGroup from 'components/MiniForrestGroup'
import Illustration from 'components/Illustration'
import Teaser from 'components/Teaser'
import style from './style.module.less'
import classNames from 'classNames'

export default class UseCases extends React.Component {
    render() {
        const cases = filter(this.props.route.pages, (page) => {
            return page.path.includes('/usecases/cases/')
        })

        return (
            <DocumentTitle title={ config.siteTitle + ' | use cases' }>
                <main>
                    <section className="sub_intro">
                        <div className="sub_intro-forrest">
                            <MiniForrestGroup  />
                        </div>
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Für jeden Wald der richtige Fuchs.
                            </h1>
                        </header>
                    </section>

                    <Teaser title="Use Cases">
                        Unterschiedliche Herausforderungen erfordern unterschiedliches KnowHow und Herangehensweisen. Mehr Details über erfolgreiche Projekte lesen Sie hier nach.
                    </Teaser>

                    {
                        map(cases, (useCase, idx) => {
                            return (
                                <UseCase useCase={useCase.data} key={idx} index={idx} />
                            )
                        })
                    }
                    
                    <Hero image="wald_workshop">
                        <Link to="/workshops/" className="cta">
                            Werden Sie zum Fuchs!
                        </Link>
                    </Hero>
                </main>
            </DocumentTitle>
        )
    }
}

class UseCase extends React.Component {
    render() {
        const { title, intro, body, icons } = this.props.useCase
        const index = this.props.index

        return (
            <section className="section_content section_content--single">
                <div className={classNames('section_content-single', style.container)}>
                    <div className={style['bubble-container']}>
                        <div className={style.bubble}>
                            <span className={style['bubble-inner']}>
                                Use Case<br />
                                #{ index + 1 }
                            </span>
                        </div>                        
                    </div>
                    <div className={style.icons}>
                        {
                            map(icons, (icon) => {
                                return <Illustration key={icon} illustration={'icon_' + icon} />
                            })
                        }
                    </div>
                    <h2 className={style.title}>
                        {title}
                    </h2>
                    <p>{ intro }</p>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                </div>
            </section>
        )
    }
}