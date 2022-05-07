const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

const withImages = require('next-images');
module.exports = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
    ...withImages(),
    api: {
        externalResolver: true,
    },
};
