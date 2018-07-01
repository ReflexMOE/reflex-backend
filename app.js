'use strict';

const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const routes = require('./routes');

const r = require('rethinkdbdash')({
    port: 28015,
    host: 'localhost'
});

exports.r = r;

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.start();
console.log(`Server running at: ${server.info.uri}`);

