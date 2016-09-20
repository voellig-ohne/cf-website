import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Forrest from 'components/Forrest'
import Hero from 'components/Hero'
import IllustratedSection from 'components/IllustratedSection'

export default class Leistungen extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle + ' | leistungen'  }>
                <main>
                    <section className="sub_intro">
                        <Forrest className="sub_intro-forrest"
                            mode="single"/>
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Wir finden den richtigen Weg durch den Wald.
                            </h1>
                        </header>
                    </section>

                    <IllustratedSection
                            title="Entwicklung eines Visuellen wie inhaltlichen Konzepts."
                            illustration="icon_entwicklung">
                        <p>
                            Text über Analyse. Cor siti si tem nonecae rumquis 
                            volor accus et utas eumquiantiae praturi nobitate 
                            poribusandi dolupie ndamusc idemporeped moditemqui 
                            a sed maion non eiuntis volut la si teni aruptae 
                            volupic temolor autesti stibus ad ma nis eumquat 
                            iumentur? Daecae. Itae. Nam lanturescium dio erferia 
                            necab imolore ea ipsus ipisquiam.
                        </p>
                    </IllustratedSection>

                    <IllustratedSection
                            title="Projektmanagement und Expertise."
                            illustration="icon_planung">
                        <p>
                            Text über Analyse. Cor siti si tem nonecae rumquis 
                            volor accus et utas eumquiantiae praturi nobitate 
                            poribusandi dolupie ndamusc idemporeped moditemqui 
                            a sed maion non eiuntis volut la si teni aruptae 
                            volupic temolor autesti stibus ad ma nis eumquat 
                            iumentur? Daecae. Itae. Nam lanturescium dio erferia 
                            necab imolore ea ipsus ipisquiam.
                        </p>
                    </IllustratedSection>

                    <IllustratedSection
                            title="Ausführliche Beratung und Betreuung."
                            illustration="icon_beratung">
                        <p>
                            Text über Analyse. Cor siti si tem nonecae rumquis 
                            volor accus et utas eumquiantiae praturi nobitate 
                            poribusandi dolupie ndamusc idemporeped moditemqui 
                            a sed maion non eiuntis volut la si teni aruptae 
                            volupic temolor autesti stibus ad ma nis eumquat 
                            iumentur? Daecae. Itae. Nam lanturescium dio erferia 
                            necab imolore ea ipsus ipisquiam.
                        </p>
                    </IllustratedSection>

                    <IllustratedSection
                            title="Technische Umsetzung."
                            illustration="icon_programmierung">
                        <p>
                            Text über Analyse. Cor siti si tem nonecae rumquis 
                            volor accus et utas eumquiantiae praturi nobitate 
                            poribusandi dolupie ndamusc idemporeped moditemqui 
                            a sed maion non eiuntis volut la si teni aruptae 
                            volupic temolor autesti stibus ad ma nis eumquat 
                            iumentur? Daecae. Itae. Nam lanturescium dio erferia 
                            necab imolore ea ipsus ipisquiam.
                        </p>
                    </IllustratedSection>

                    <Hero image="/img/wald_buro.jpg">
                        <Link to="/arbeitsweisen/" className="cta">
                            Wie arbeitet fuchs+wald?
                        </Link>
                    </Hero>

                </main>
            </DocumentTitle>
        )
    }
}
