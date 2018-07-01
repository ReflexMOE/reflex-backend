var Joi = require('joi');
var handlers = require('../handlers/animeHandlers');

/**
 * @api {get} /anime/:slug Request Anime Information
 * @apiName Get anime
 * @apiGroup Public
 *
 * @apiParam {slug} slug of the anime's title.
 *
 * @apiSuccess {JSON} JSON representation of an Anime object.
 */

const animeConfig = {
    validate: {
        params: {
            slug: Joi.string()
                .required()
                .description('The slug of the anime\'s name')
        }
    }
}

/**
 * @api {get} /anime/list Request Anime List
 * @apiName Get anime list
 * @apiGroup Public
 *
 * @apiParam {slug} slug of the anime'stitle.
 *
 * @apiSuccess {JSON} JSON list of Anime objects.
 */

const animeListConfig = {
}

module.exports = [
    { method: 'GET', path: '/anime/{slug}', handler: handlers.getAnime, config: animeConfig },
    { method: 'GET', path: '/anime/list', handler: handlers.getAnimeList, config: animeListConfig }
];