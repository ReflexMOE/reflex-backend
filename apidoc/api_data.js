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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"episode_number\": 12,\n  \"id\": \"02c99a5d-146b-4c92-9e7a-b4e8213453ed\",\n  \"slug\": \"atelier-escha-logy\",\n  \"title\": \"Atelier Escha & Logy\"\n}",
          "type": "json"
        }
      ]
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
            "description": "<p>list of Anime objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"episode_number\": 2,\n    \"id\": \"23778dc2-b680-48b8-9618-790adeafaa98\",\n    \"slug\": \"zekkyou-gakkyuu-tensei\",\n    \"title\": \"Zekkyou Gakkyuu: Tensei\"\n  },\n  {\n    \"episode_number\": 12,\n    \"id\": \"90b71042-3299-4b32-a7a0-3cbabe38a07f\",\n    \"slug\": \"koyomimonogatari\",\n    \"title\": \"Koyomimonogatari\"\n  }\n]",
          "type": "json"
        }
      ]
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"anime_tile\": \"Yuuki Yuuna wa Yuusha de Aru Saison 02\",\n  \"anime_title_slug\": \"yuuki-yuuna-wa-yuusha-de-aru-saison-02\",\n  \"episode_title\": \"Episode Sp�cial - Yuuki Yuuna wa Yuusha de Aru S02 SP 01 Vostfr\",\n  \"id\": \"03d16707-16eb-48d4-81b1-1b8bebfaf348\",\n  \"slug\": \"episode-special-yuuki-yuuna-wa-yuusha-de-aru-s02-sp-01-vostfr\"\n}",
          "type": "json"
        }
      ]
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n    \"anime_tile\": \"Yuuki Yuuna wa Yuusha de Aru Saison 02\",\n    \"anime_title_slug\": \"yuuki-yuuna-wa-yuusha-de-aru-saison-02\",\n    \"episode_title\": \"Episode Sp�cial - Yuuki Yuuna wa Yuusha de Aru S02 SP 01 Vostfr\",\n    \"id\": \"03d16707-16eb-48d4-81b1-1b8bebfaf348\",\n    \"slug\": \"episode-special-yuuki-yuuna-wa-yuusha-de-aru-s02-sp-01-vostfr\"\n  },\n  {\n    \"anime_tile\": \"Yuuki Yuuna wa Yuusha de Aru Saison 02\",\n    \"anime_title_slug\": \"yuuki-yuuna-wa-yuusha-de-aru-saison-02\",\n    \"episode_title\": \"Episode Sp�cial - Yuuki Yuuna wa Yuusha de Aru S02 SP 02 Vostfr\",\n    \"id\": \"03d16707-16eb-48d4-81b1-1b8bebfaf348\",\n    \"slug\": \"episode-special-yuuki-yuuna-wa-yuusha-de-aru-s02-sp-02-vostfr\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/episode.js",
    "groupTitle": "Public"
  }
] });
