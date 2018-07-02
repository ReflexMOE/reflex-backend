var main = require('../app');
var Boom = require('boom');

module.exports = {
    getEpisode: function (request, h) {
        return new Promise(resolve => {
            main.r.db('reflex').table('episodes').filter({ 'slug': request.params.slug })
                .run()
                .then(function (response) {
                    if (response.length != 0) {
                        console.log('Episode successfully returned');
                        resolve(response[0]);
                    } else {
                        resolve(Boom.notFound('Cannot find the requested page'));
                    }
                })
        })
    },
    getEpisodeList: function (request, h) {
        return new Promise(resolve => {
            main.r.db('reflex').table('episodes').filter({ 'anime_title_slug': request.params.slug })
                .run()
                .then(function (response) {
                    if (response.length != 0) {
                        console.log('Episode list successfully returned');
                        resolve(response);
                    } else {
                        resolve(Boom.notFound('Cannot find the requested page'));
                    }
                })
        })
    }
};