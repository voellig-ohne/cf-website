import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const page = this.props.route.page.data
    return (
        <DocumentTitle title={`${config.siteTitle} | ${page.title}`}>
            <section className="section_content section_content--single">
                <div className="section_content-single"
                    dangerouslySetInnerHTML={{ __html: page.body }} />
            </section>
        </DocumentTitle>
    )
  },
})
