var Joi = require('joi');
var handlers = require('../handlers/animeHandlers');

const animeConfig = {
    description: 'Get anime',
    notes: 'Returns an anime object by the slug of its name passed in the path',
    tags: ['api'],
    validate: {
        params: {
            slug: Joi.string()
                .required()
                .description('The slug of the anime\'s name')
        }
    }
}

const animeListConfig = {
    description: 'Get anime list',
    notes: 'Returns a list of our anime',
    tags: ['api']
}

module.exports = [
    { method: 'GET', path: '/anime/{slug}', handler: handlers.getAnime, config: animeConfig },
    { method: 'GET', path: '/anime/list', handler: handlers.getAnimeList, config: animeListConfig }
];