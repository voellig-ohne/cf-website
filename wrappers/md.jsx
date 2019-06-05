import React from 'react'
import DocumentTitle from 'react-document-title'
import SectionContentSingle from 'components/SectionContentSingle'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    return (

      <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
        <SectionContentSingle>
            <h1>{post.title}</h1>

            <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </SectionContentSingle>
    </DocumentTitle>
    )
  },
})
