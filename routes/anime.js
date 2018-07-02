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
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "episode_number": 12,
 *       "id": "02c99a5d-146b-4c92-9e7a-b4e8213453ed",
 *       "slug": "atelier-escha-logy",
 *       "title": "Atelier Escha & Logy"
 *     }
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
 * @apiParam {slug} slug of the anime's title.
 *
 * @apiSuccess {JSON} JSON list of Anime objects.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    [
 *      {
 *        "episode_number": 2,
 *        "id": "23778dc2-b680-48b8-9618-790adeafaa98",
 *        "slug": "zekkyou-gakkyuu-tensei",
 *        "title": "Zekkyou Gakkyuu: Tensei"
 *      },
 *      {
 *        "episode_number": 12,
 *        "id": "90b71042-3299-4b32-a7a0-3cbabe38a07f",
 *        "slug": "koyomimonogatari",
 *        "title": "Koyomimonogatari"
 *      }
 *    ]
 */

const animeListConfig = {
}

module.exports = [
    { method: 'GET', path: '/anime/{slug}', handler: handlers.getAnime, config: animeConfig },
    { method: 'GET', path: '/anime/list', handler: handlers.getAnimeList, config: animeListConfig }
];