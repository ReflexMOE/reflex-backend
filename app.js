'use strict';

const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const routes = require('./routes');

var r = require('rethinkdbdash')({
    port: 28015,
    host: 'localhost'
});

exports.r = r;

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const swaggerOptions = {
    info: {
        title: 'Reflex Bakckend API',
        version: 1.0
    }
};

(async () => {
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    server.route(routes);


    const init = async () => {

        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    };

    process.on('unhandledRejection', (err) => {

        console.log(err);
        process.exit(1);
    });

    init();
})();