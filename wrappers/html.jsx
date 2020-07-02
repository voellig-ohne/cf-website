import React from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
import SectionContentSingle from 'components/SectionContentSingle';

module.exports = React.createClass({
    propTypes() {
        return {
            router: React.PropTypes.object,
        };
    },
    render() {
        const page = this.props.route.page.data;
        return (
            <DocumentTitle title={`${config.siteTitle} | ${page.title}`}>
                <SectionContentSingle>
                    <div dangerouslySetInnerHTML={{ __html: page.body }} />
                </SectionContentSingle>
            </DocumentTitle>
        );
    },
});
