import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import GoogleTracking from 'components/GoogleTracking';

const BUILD_TIME = new Date().getTime();

require('file?name=.htaccess!./.htaccess');

module.exports = React.createClass({
    displayName: 'HTML',
    propTypes: {
        body: React.PropTypes.string,
    },
    render() {
        const { body, route } = this.props;
        const title = DocumentTitle.rewind();
        let css;
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={{ __html: require('!raw!postcss!./public/styles.css') }} />;
        }

        return (
            <html lang="de">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
                    <link rel="shortcut icon" href="/favicon.png" />
                    <title>{title}</title>
                    {css}
                </head>
                <body>
                    <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
                    <GoogleTracking />
                </body>
            </html>
        );
    },
});
