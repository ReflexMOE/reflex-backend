define({ "api": [
  {
    "type": "get",
    "url": "/anime/:slug",
    "title": "Request Anime Information",
    "name": "Get_anime",
    "group": "Public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "slug",
            "optional": false,
            "field": "slug",
            "description": "<p>of the anime's title.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>representation of an Anime object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/anime.js",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "/anime/list",
    "title": "Request Anime List",
    "name": "Get_anime_list",
    "group": "Public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "slug",
            "optional": false,
            "field": "slug",
            "description": "<p>of the anime'stitle.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>list of Anime objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/anime.js",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "/episode/:slug",
    "title": "Request Episode Information",
    "name": "Get_episode",
    "group": "Public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "slug",
            "optional": false,
            "field": "slug",
            "description": "<p>of the episode's title.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>representation of an Episode object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/episode.js",
    "groupTitle": "Public"
  },
  {
    "type": "get",
    "url": "/episode/list/:slug",
    "title": "Request Episode List",
    "name": "Get_episode_list",
    "group": "Public",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "slug",
            "optional": false,
            "field": "slug",
            "description": "<p>of the anime's title.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "JSON",
            "description": "<p>list of Episode objects for the desired anime.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/episode.js",
    "groupTitle": "Public"
  }
] });
