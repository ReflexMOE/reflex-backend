var Joi = require('joi');
var handlers = require('../handlers/episodeHandlers');

/**
 * @api {get} /episode/:slug Request Episode Information
 * @apiName Get episode
 * @apiGroup Public
 *
 * @apiParam {slug} slug of the episode's title.
 *
 * @apiSuccess {JSON} JSON representation of an Episode object.
 */

const episodeConfig = {
    validate: {
        params: {
            slug: Joi.string()
                .required()
                .description('The slug of the episode\'s name')
        }
    }
}

/**
 * @api {get} /episode/list/:slug Request Episode List
 * @apiName Get episode list
 * @apiGroup Public
 *
 * @apiParam {slug} slug of the anime's title.
 *
 * @apiSuccess {JSON} JSON list of Episode objects for the desired anime.
 */

const episodeListConfig = {
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