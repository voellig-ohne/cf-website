require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `sa2fzfna8ry2`,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
    ],
};
