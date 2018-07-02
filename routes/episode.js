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
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "anime_tile": "Yuuki Yuuna wa Yuusha de Aru Saison 02",
 *       "anime_title_slug": "yuuki-yuuna-wa-yuusha-de-aru-saison-02",
 *       "episode_title": "Episode Spécial - Yuuki Yuuna wa Yuusha de Aru S02 SP 01 Vostfr",
 *       "id": "03d16707-16eb-48d4-81b1-1b8bebfaf348",
 *       "slug": "episode-special-yuuki-yuuna-wa-yuusha-de-aru-s02-sp-01-vostfr"
 *     }
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
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *        "anime_tile": "Yuuki Yuuna wa Yuusha de Aru Saison 02",
 *        "anime_title_slug": "yuuki-yuuna-wa-yuusha-de-aru-saison-02",
 *        "episode_title": "Episode Spécial - Yuuki Yuuna wa Yuusha de Aru S02 SP 01 Vostfr",
 *        "id": "03d16707-16eb-48d4-81b1-1b8bebfaf348",
 *        "slug": "episode-special-yuuki-yuuna-wa-yuusha-de-aru-s02-sp-01-vostfr"
 *      },
 *      {
 *        "anime_tile": "Yuuki Yuuna wa Yuusha de Aru Saison 02",
 *        "anime_title_slug": "yuuki-yuuna-wa-yuusha-de-aru-saison-02",
 *        "episode_title": "Episode Spécial - Yuuki Yuuna wa Yuusha de Aru S02 SP 02 Vostfr",
 *        "id": "03d16707-16eb-48d4-81b1-1b8bebfaf348",
 *        "slug": "episode-special-yuuki-yuuna-wa-yuusha-de-aru-s02-sp-02-vostfr"
 *      }
 *    ]
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