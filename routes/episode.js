var Joi = require('joi');
var handlers = require('../handlers/episodeHandlers');

const episodeConfig = {
    description: 'Get anime',
    notes: 'Returns an anime object by the slug of its name passed in the path',
    tags: ['api'],
    validate: {
        params: {
            slug: Joi.string()
                .required()
                .description('The slug of the episode\'s name')
        }
    }
}

const episodeListConfig = {
    description: 'Get the list of the episodes for an anime',
    notes: 'Returns a list of episode objects by their anime\s name slug passed in the path',
    tags: ['api'],
    validate: {
        params: {
            slug: Joi.string()
                .required()
                .description('The slug of the anime\'s name')
        }
    }
}

module.exports = [
    { method: 'GET', path: '/episode/{slug}', handler: handlers.getEpisode, config: episodeConfig },
    { method: 'GET', path: '/episode/list/{slug}', handler: handlers.getEpisodeList, config: episodeListConfig },
];