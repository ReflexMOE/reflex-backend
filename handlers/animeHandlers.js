var main = require('../app');
var Boom = require('boom');

module.exports = {
    getAnime: function (request, h) {
        return new Promise(resolve => {
            main.r.db('reflex').table('animes').filter({'slug': request.params.slug})
                .run()
                .then(function (response) {
                    if (response.length != 0) {
                        console.log('Anime successfully returned');
                        resolve(response[0]);
                    } else {
                        resolve(Boom.notFound('Cannot find the requested page'));
                    }
                })
        })
    },
    getAnimeList: function (request, h) {
        return new Promise(resolve => {
            main.r.db('reflex').table('animes')
                .run()
                .then(function (response) {
                    console.log('Anime list successfully returned');
                    resolve(response);
                })
        })
    }
};