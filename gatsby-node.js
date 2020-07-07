const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const pageComponent = path.resolve('./src/components/Page/index.js');

        resolve(
            graphql(
                `
                    {
                        allContentfulPage {
                            edges {
                                node {
                                    title
                                    slug
                                }
                            }
                        }
                    }
                `
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors); // eslint-disable-line no-console
                    reject(result.errors);
                }

                const pages = result.data.allContentfulPage.edges;
                pages.forEach((page) => {
                    const path = page.node.slug;
                    createPage({
                        path: path,
                        component: pageComponent,
                        context: {
                            slug: page.node.slug,
                        },
                    });
                });
            })
        );
    });
};
