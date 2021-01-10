import React, { Component } from 'react';
import './App.css';
import { Container,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CardList from './component/CardList';




class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      gameData: {
        "count": 490071,
        "next": "https://api.rawg.io/api/games?page=2",
        "previous": null,
        "results": [
            {
                "id": 3498,
                "slug": "grand-theft-auto-v",
                "name": "Grand Theft Auto V",
                "released": "2013-09-17",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
                "rating": 4.48,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 2587,
                        "percent": 58.97
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1451,
                        "percent": 33.07
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 274,
                        "percent": 6.25
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 75,
                        "percent": 1.71
                    }
                ],
                "ratings_count": 4341,
                "reviews_text_count": 27,
                "added": 13851,
                "added_by_status": {
                    "yet": 337,
                    "owned": 8384,
                    "beaten": 3597,
                    "toplay": 378,
                    "dropped": 656,
                    "playing": 499
                },
                "metacritic": 97,
                "playtime": 68,
                "suggestions_count": 426,
                "updated": "2020-09-23T07:10:53",
                "user_game": null,
                "reviews_count": 4387,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286559,
                            "image_background": "https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": {
                            "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
                            "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 186,
                            "name": "Xbox Series S/X",
                            "slug": "xbox-series-x",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 114,
                            "image_background": "https://media.rawg.io/media/games/6b1/6b14dc4cc1785e396580c69165e55d2d.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 187,
                            "name": "PlayStation 5",
                            "slug": "playstation5",
                            "image": null,
                            "year_end": null,
                            "year_start": 2020,
                            "games_count": 121,
                            "image_background": "https://media.rawg.io/media/screenshots/0bb/0bb8c784084cbf5d6a4672f119439534.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2696,
                            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2013-09-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 438095,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 310,
                            "image_background": "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png"
                        }
                    },
                    {
                        "id": 290375,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    },
                    {
                        "id": 290378,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 290377,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 290376,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/5b0/5b0cfff8c606c5e4db4f74f108c4413b.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/91d/91d6b5963064a5f686f635c302095b55.mp4",
                        "640": "https://media.rawg.io/media/stories-640/5b0/5b0cfff8c606c5e4db4f74f108c4413b.mp4",
                        "full": "https://media.rawg.io/media/stories/f64/f64ce0b857918b0c202f2a5d3217848e.mp4"
                    },
                    "video": "dZubIhK-Z6w",
                    "preview": "https://media.rawg.io/media/stories-previews/f65/f6593df6c8df32c7f4763f9cb112a514.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 10812,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 3258,
                        "image_background": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 2565,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 3359,
                        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 11209,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 3008,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 5519,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 1233,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 489,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 1628,
                        "image_background": "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 1827221,
                        "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
                    },
                    {
                        "id": 1827222,
                        "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
                    },
                    {
                        "id": 1827223,
                        "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
                    },
                    {
                        "id": 1827225,
                        "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
                    },
                    {
                        "id": 1827226,
                        "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
                    },
                    {
                        "id": 1827227,
                        "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
                    }
                ]
            },
            {
                "id": 4200,
                "slug": "portal-2",
                "name": "Portal 2",
                "released": "2011-04-18",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
                "rating": 4.61,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 2581,
                        "percent": 69.91
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 939,
                        "percent": 25.43
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 100,
                        "percent": 2.71
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 72,
                        "percent": 1.95
                    }
                ],
                "ratings_count": 3659,
                "reviews_text_count": 21,
                "added": 12127,
                "added_by_status": {
                    "yet": 388,
                    "owned": 7630,
                    "beaten": 3464,
                    "toplay": 216,
                    "dropped": 332,
                    "playing": 97
                },
                "metacritic": 95,
                "playtime": 11,
                "suggestions_count": 589,
                "updated": "2020-08-03T02:17:38",
                "user_game": null,
                "reviews_count": 3692,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2011-04-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2011-04-19",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2011-04-19",
                        "requirements_en": null,
                        "requirements_ru": {
                            "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
                            "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2011-04-19",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 44243,
                            "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                        },
                        "released_at": "2011-04-19",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63526,
                            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                        },
                        "released_at": "2011-04-19",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Puzzle",
                        "slug": "puzzle",
                        "games_count": 57224,
                        "image_background": "https://media.rawg.io/media/screenshots/42d/42d770eb49f2ba01cd4045e0d92af7a9.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 465889,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 33916,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 4526,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    },
                    {
                        "id": 13134,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/fde/fde8aaeeab956f6b705bbb4161b09004.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/b26/b265f65b9f16dc20245863636d4094b2.mp4",
                        "640": "https://media.rawg.io/media/stories-640/fde/fde8aaeeab956f6b705bbb4161b09004.mp4",
                        "full": "https://media.rawg.io/media/stories/671/67196dea179367b70212bdaed88ba451.mp4"
                    },
                    "video": "dVVZaZ8yO6o",
                    "preview": "https://media.rawg.io/media/stories-previews/faf/faf0bb37b806db65f1c76395c8f36c7c.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 9428,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 2565,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 8780,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 11209,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 2407,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 4936,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 5519,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 75,
                        "name": "Local Co-Op",
                        "slug": "local-co-op",
                        "language": "eng",
                        "games_count": 3555,
                        "image_background": "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3471,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1052,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 40838,
                        "name": "Includes level editor",
                        "slug": "includes-level-editor",
                        "language": "eng",
                        "games_count": 1308,
                        "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
                    },
                    {
                        "id": 25,
                        "name": "Space",
                        "slug": "space",
                        "language": "eng",
                        "games_count": 23733,
                        "image_background": "https://media.rawg.io/media/screenshots/072/07222ab3475a9da84a0359bb3a33b679.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1017,
                        "image_background": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg"
                    },
                    {
                        "id": 40834,
                        "name": "Commentary available",
                        "slug": "commentary-available",
                        "language": "eng",
                        "games_count": 215,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 87,
                        "name": "Science",
                        "slug": "science",
                        "language": "eng",
                        "games_count": 904,
                        "image_background": "https://media.rawg.io/media/screenshots/5bb/5bb6b09c84027d979a46affaba10fc7c.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 2,
                    "name": "Everyone 10+",
                    "slug": "everyone-10-plus"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 99018,
                        "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
                    },
                    {
                        "id": 99019,
                        "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
                    },
                    {
                        "id": 99020,
                        "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
                    },
                    {
                        "id": 99021,
                        "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
                    },
                    {
                        "id": 99022,
                        "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
                    },
                    {
                        "id": 99023,
                        "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
                    }
                ]
            },
            {
                "id": 3328,
                "slug": "the-witcher-3-wild-hunt",
                "name": "The Witcher 3: Wild Hunt",
                "released": "2015-05-18",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
                "rating": 4.67,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 3158,
                        "percent": 77.96
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 642,
                        "percent": 15.85
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 162,
                        "percent": 4.0
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 89,
                        "percent": 2.2
                    }
                ],
                "ratings_count": 3994,
                "reviews_text_count": 42,
                "added": 11987,
                "added_by_status": {
                    "yet": 653,
                    "owned": 6862,
                    "beaten": 2799,
                    "toplay": 521,
                    "dropped": 499,
                    "playing": 653
                },
                "metacritic": 92,
                "playtime": 50,
                "suggestions_count": 688,
                "updated": "2020-10-02T00:57:03",
                "user_game": null,
                "reviews_count": 4051,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4147,
                            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2015-05-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 74815,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 32729,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 354780,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3017,
                            "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                        }
                    },
                    {
                        "id": 312313,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 305376,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 3565,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/619/6197079f588ae10e3fe87edad3ee2d43.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/310/3109cc6c6168db8a03acc45f7edf5109.mp4",
                        "640": "https://media.rawg.io/media/stories-640/619/6197079f588ae10e3fe87edad3ee2d43.mp4",
                        "full": "https://media.rawg.io/media/stories/a25/a257f298e1de01ef2a077da02a5c8ee8.mp4"
                    },
                    "video": "2bSk-8C76dc",
                    "preview": "https://media.rawg.io/media/stories-previews/5ac/5ac124b0b14e2bc794bedb240870d1f4.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 10811,
                        "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 3258,
                        "image_background": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 3359,
                        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 10941,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 3008,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 2981,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 6195,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 44,
                        "name": "Nudity",
                        "slug": "nudity",
                        "language": "eng",
                        "games_count": 2276,
                        "image_background": "https://media.rawg.io/media/games/c81/c812e158129e00c9b0f096ae8a0bb7d6.jpg"
                    },
                    {
                        "id": 336,
                        "name": "controller support",
                        "slug": "controller-support",
                        "language": "eng",
                        "games_count": 293,
                        "image_background": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 753,
                        "image_background": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg"
                    },
                    {
                        "id": 145,
                        "name": "Choices Matter",
                        "slug": "choices-matter",
                        "language": "eng",
                        "games_count": 835,
                        "image_background": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Dark Fantasy",
                        "slug": "dark-fantasy",
                        "language": "eng",
                        "games_count": 1320,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 66,
                        "name": "Medieval",
                        "slug": "medieval",
                        "language": "eng",
                        "games_count": 2370,
                        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                    },
                    {
                        "id": 82,
                        "name": "Magic",
                        "slug": "magic",
                        "language": "eng",
                        "games_count": 4110,
                        "image_background": "https://media.rawg.io/media/games/0bb/0bbceedd3e1420df0fdaf66a2e373b2b.jpg"
                    },
                    {
                        "id": 218,
                        "name": "Multiple Endings",
                        "slug": "multiple-endings",
                        "language": "eng",
                        "games_count": 2706,
                        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
                    },
                    {
                        "id": 30336,
                        "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
                    },
                    {
                        "id": 30337,
                        "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
                    },
                    {
                        "id": 30338,
                        "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
                    },
                    {
                        "id": 30339,
                        "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
                    },
                    {
                        "id": 30340,
                        "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
                    },
                    {
                        "id": 30342,
                        "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
                    }
                ]
            },
            {
                "id": 5286,
                "slug": "tomb-raider",
                "name": "Tomb Raider (2013)",
                "released": "2013-03-05",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
                "rating": 4.06,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1548,
                        "percent": 59.93
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 663,
                        "percent": 25.67
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 300,
                        "percent": 11.61
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 72,
                        "percent": 2.79
                    }
                ],
                "ratings_count": 2568,
                "reviews_text_count": 7,
                "added": 10955,
                "added_by_status": {
                    "yet": 382,
                    "owned": 7380,
                    "beaten": 2646,
                    "toplay": 153,
                    "dropped": 312,
                    "playing": 82
                },
                "metacritic": 86,
                "playtime": 11,
                "suggestions_count": 673,
                "updated": "2020-08-03T05:49:25",
                "user_game": null,
                "reviews_count": 2583,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "i486-100, 8 Мб",
                            "recommended": "Pentium 166, 16 Мб"
                        }
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63526,
                            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                        },
                        "released_at": "2013-03-05",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 74815,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 79036,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 66275,
                            "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                        }
                    },
                    {
                        "id": 218233,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16227,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
                        }
                    },
                    {
                        "id": 5640,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    },
                    {
                        "id": 13151,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 33824,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/02a/02ae488ef3392f85c002070b76fd6e37.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/72b/72b59b73ae9dddeedcf32356e4642917.mp4",
                        "640": "https://media.rawg.io/media/stories-640/02a/02ae488ef3392f85c002070b76fd6e37.mp4",
                        "full": "https://media.rawg.io/media/stories/c38/c38f88ae99cd6287d4c47db5e4147baf.mp4"
                    },
                    "video": "sAh36qL_bJ0",
                    "preview": "https://media.rawg.io/media/stories-previews/779/7797244cc365b61d9710b5f7b6fd48a5.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 10811,
                        "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 3359,
                        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1525,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 4936,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 8470,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 3368,
                        "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 1233,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 74,
                        "name": "Retro",
                        "slug": "retro",
                        "language": "eng",
                        "games_count": 17977,
                        "image_background": "https://media.rawg.io/media/games/fad/fadc4be043ed07904012d47cd02671e4.jpg"
                    },
                    {
                        "id": 69,
                        "name": "Action-Adventure",
                        "slug": "action-adventure",
                        "language": "eng",
                        "games_count": 6592,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 322,
                        "image_background": "https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg"
                    },
                    {
                        "id": 269,
                        "name": "Quick-Time Events",
                        "slug": "quick-time-events",
                        "language": "eng",
                        "games_count": 99,
                        "image_background": "https://media.rawg.io/media/games/3c4/3c4a44ed99c87c56e0cdcfaaaf5c3628.jpg"
                    },
                    {
                        "id": 126,
                        "name": "Dinosaurs",
                        "slug": "dinosaurs",
                        "language": "eng",
                        "games_count": 1036,
                        "image_background": "https://media.rawg.io/media/screenshots/61f/61f183e3d12c7846ed6bd3c027a9fa47.jpg"
                    },
                    {
                        "id": 306,
                        "name": "Lara Croft",
                        "slug": "lara-croft",
                        "language": "eng",
                        "games_count": 14,
                        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
                    },
                    {
                        "id": 99160,
                        "image": "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg"
                    },
                    {
                        "id": 99161,
                        "image": "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg"
                    },
                    {
                        "id": 99162,
                        "image": "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg"
                    },
                    {
                        "id": 99163,
                        "image": "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg"
                    },
                    {
                        "id": 99164,
                        "image": "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg"
                    },
                    {
                        "id": 99165,
                        "image": "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
                    }
                ]
            },
            {
                "id": 5679,
                "slug": "the-elder-scrolls-v-skyrim",
                "name": "The Elder Scrolls V: Skyrim",
                "released": "2011-11-11",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
                "rating": 4.42,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1761,
                        "percent": 56.82
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1005,
                        "percent": 32.43
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 274,
                        "percent": 8.84
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 59,
                        "percent": 1.9
                    }
                ],
                "ratings_count": 3079,
                "reviews_text_count": 13,
                "added": 10791,
                "added_by_status": {
                    "yet": 305,
                    "owned": 6797,
                    "beaten": 2345,
                    "toplay": 254,
                    "dropped": 816,
                    "playing": 274
                },
                "metacritic": 94,
                "playtime": 44,
                "suggestions_count": 625,
                "updated": "2020-07-06T04:26:04",
                "user_game": null,
                "reviews_count": 3099,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2011-11-11",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере",
                            "recommended": "Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере"
                        }
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2011-11-11",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2011-11-11",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4147,
                            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
                        },
                        "released_at": "2011-11-11",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 32729,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 49792,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 32919,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8533,
                            "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
                        }
                    },
                    {
                        "id": 15144,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 6037,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/706/706aad163bc0ff757ad963890175e000.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/d9d/d9d7c5751608ec1f8fc64fc130254cfc.mp4",
                        "640": "https://media.rawg.io/media/stories-640/706/706aad163bc0ff757ad963890175e000.mp4",
                        "full": "https://media.rawg.io/media/stories/7de/7de89d64eaf9153286ea1e352aef080d.mp4"
                    },
                    "video": "xmlWVe8LeS8",
                    "preview": "https://media.rawg.io/media/stories-previews/deb/debfa1bae1fca937ee311dad403ef739.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 9428,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 10811,
                        "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 3258,
                        "image_background": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 3359,
                        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 6892,
                        "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 10941,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 3008,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1052,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 2981,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 489,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 468,
                        "name": "role-playing",
                        "slug": "role-playing",
                        "language": "eng",
                        "games_count": 1191,
                        "image_background": "https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg"
                    },
                    {
                        "id": 121,
                        "name": "Character Customization",
                        "slug": "character-customization",
                        "language": "eng",
                        "games_count": 1150,
                        "image_background": "https://media.rawg.io/media/games/f54/f54e9fb2f4aac37810ea1a69a3e4480a.jpg"
                    },
                    {
                        "id": 40,
                        "name": "Dark Fantasy",
                        "slug": "dark-fantasy",
                        "language": "eng",
                        "games_count": 1320,
                        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
                    },
                    {
                        "id": 66,
                        "name": "Medieval",
                        "slug": "medieval",
                        "language": "eng",
                        "games_count": 2370,
                        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                    },
                    {
                        "id": 82,
                        "name": "Magic",
                        "slug": "magic",
                        "language": "eng",
                        "games_count": 4110,
                        "image_background": "https://media.rawg.io/media/games/0bb/0bbceedd3e1420df0fdaf66a2e373b2b.jpg"
                    },
                    {
                        "id": 215,
                        "name": "Dragons",
                        "slug": "dragons",
                        "language": "eng",
                        "games_count": 1593,
                        "image_background": "https://media.rawg.io/media/games/3e5/3e5b137b31a674513af88ce6f24994e6.jpg"
                    },
                    {
                        "id": 205,
                        "name": "Lore-Rich",
                        "slug": "lore-rich",
                        "language": "eng",
                        "games_count": 130,
                        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    },
                    {
                        "id": 118307,
                        "image": "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg"
                    },
                    {
                        "id": 118308,
                        "image": "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg"
                    },
                    {
                        "id": 118309,
                        "image": "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg"
                    },
                    {
                        "id": 118310,
                        "image": "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg"
                    },
                    {
                        "id": 118311,
                        "image": "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg"
                    },
                    {
                        "id": 118312,
                        "image": "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
                    }
                ]
            },
            {
                "id": 12020,
                "slug": "left-4-dead-2",
                "name": "Left 4 Dead 2",
                "released": "2009-11-17",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
                "rating": 4.09,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1152,
                        "percent": 53.83
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 663,
                        "percent": 30.98
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 257,
                        "percent": 12.01
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 68,
                        "percent": 3.18
                    }
                ],
                "ratings_count": 2131,
                "reviews_text_count": 4,
                "added": 10442,
                "added_by_status": {
                    "yet": 252,
                    "owned": 7817,
                    "beaten": 1567,
                    "toplay": 56,
                    "dropped": 648,
                    "playing": 102
                },
                "metacritic": 89,
                "playtime": 9,
                "suggestions_count": 610,
                "updated": "2020-12-02T13:36:02",
                "user_game": null,
                "reviews_count": 2140,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2009-11-17",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
                            "recommended": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере"
                        }
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2009-11-17",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 34000,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 13208,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/6bf/6bf9c27538426b187908bafd61160c3e.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/ca2/ca2a28e46c37b95cc89a1ad09ca11319.mp4",
                        "640": "https://media.rawg.io/media/stories-640/6bf/6bf9c27538426b187908bafd61160c3e.mp4",
                        "full": "https://media.rawg.io/media/stories/641/6410df150314b7903fb651393711847f.mp4"
                    },
                    "video": "58f3OH7qBAU",
                    "preview": "https://media.rawg.io/media/stories-previews/ecb/ecba71900f6e78ccc6521c4d24c399d6.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 9428,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 2565,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 18297,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 2407,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 3516,
                        "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 4239,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 75,
                        "name": "Local Co-Op",
                        "slug": "local-co-op",
                        "language": "eng",
                        "games_count": 3555,
                        "image_background": "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 1989,
                        "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3471,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1052,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 489,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 6063,
                        "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
                    },
                    {
                        "id": 5,
                        "name": "Replay Value",
                        "slug": "replay-value",
                        "language": "eng",
                        "games_count": 859,
                        "image_background": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1017,
                        "image_background": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Post-apocalyptic",
                        "slug": "post-apocalyptic",
                        "language": "eng",
                        "games_count": 1561,
                        "image_background": "https://media.rawg.io/media/games/df9/df988191048e92cf86dabd2987c47b62.jpg"
                    },
                    {
                        "id": 17,
                        "name": "Survival Horror",
                        "slug": "survival-horror",
                        "language": "eng",
                        "games_count": 3434,
                        "image_background": "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg"
                    },
                    {
                        "id": 40856,
                        "name": "Valve Anti-Cheat enabled",
                        "slug": "valve-anti-cheat-enabled",
                        "language": "eng",
                        "games_count": 105,
                        "image_background": "https://media.rawg.io/media/games/657/657574cd437df9102f511b3be095b0ea.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 565,
                        "image_background": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg"
                    },
                    {
                        "id": 40834,
                        "name": "Commentary available",
                        "slug": "commentary-available",
                        "language": "eng",
                        "games_count": 215,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 40839,
                        "name": "Includes Source SDK",
                        "slug": "includes-source-sdk",
                        "language": "eng",
                        "games_count": 52,
                        "image_background": "https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                    },
                    {
                        "id": 99748,
                        "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
                    },
                    {
                        "id": 99749,
                        "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
                    },
                    {
                        "id": 99750,
                        "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
                    },
                    {
                        "id": 99751,
                        "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
                    },
                    {
                        "id": 99752,
                        "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
                    },
                    {
                        "id": 99753,
                        "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
                    }
                ]
            },
            {
                "id": 802,
                "slug": "borderlands-2",
                "name": "Borderlands 2",
                "released": "2012-09-18",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
                "rating": 4.05,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1089,
                        "percent": 47.95
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 729,
                        "percent": 32.1
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 368,
                        "percent": 16.2
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 85,
                        "percent": 3.74
                    }
                ],
                "ratings_count": 2260,
                "reviews_text_count": 7,
                "added": 10338,
                "added_by_status": {
                    "yet": 397,
                    "owned": 7321,
                    "beaten": 1516,
                    "toplay": 116,
                    "dropped": 800,
                    "playing": 188
                },
                "metacritic": 89,
                "playtime": 10,
                "suggestions_count": 660,
                "updated": "2020-08-07T02:30:06",
                "user_game": null,
                "reviews_count": 2271,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3<br>\t</li><li><strong>Processor:</strong> 2.4 GHz Dual Core Processor<br>\t</li><li><strong>Memory:</strong> 2 GB(XP)/ 2 GB(Vista)<br>\t</li><li><strong>Hard Disk Space:</strong> 13 GB free<br>\t</li><li><strong>Video Memory:</strong> 256 MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8500 /ATI Radeon HD 2600<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3/Vista/Win 7<br>\t</li><li><strong>Processor:</strong> 2.3 GHz Quad Core processor<br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Memory:</strong> 512MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce GTX 560 / ATI Radeon HD 5850<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение",
                            "recommended": "Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63526,
                            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2012-09-18",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 32729,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 4000,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    },
                    {
                        "id": 817,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 71617,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 66275,
                            "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                        }
                    },
                    {
                        "id": 34042,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 11088,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 213037,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16227,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/7fc/7fc5cc0196871480ac2a135642b6b915.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/8f7/8f760822fce7fea1c38cf12a0b5f9823.mp4",
                        "640": "https://media.rawg.io/media/stories-640/7fc/7fc5cc0196871480ac2a135642b6b915.mp4",
                        "full": "https://media.rawg.io/media/stories/f55/f5519239ab5e4fced6a10b9c43b5ae43.mp4"
                    },
                    "video": "gBRpvXBmDL4",
                    "preview": "https://media.rawg.io/media/stories-previews/dc3/dc3a816f526eba6c4e3ac59bf4c151ac.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 9428,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 10811,
                        "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 3258,
                        "image_background": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 2565,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 8780,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 11209,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 2407,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 5519,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 2981,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 167,
                        "name": "Futuristic",
                        "slug": "futuristic",
                        "language": "eng",
                        "games_count": 1852,
                        "image_background": "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
                    },
                    {
                        "id": 120,
                        "name": "Memes",
                        "slug": "memes",
                        "language": "eng",
                        "games_count": 953,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 148,
                        "name": "Dark Humor",
                        "slug": "dark-humor",
                        "language": "eng",
                        "games_count": 1345,
                        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                    },
                    {
                        "id": 98,
                        "name": "Loot",
                        "slug": "loot",
                        "language": "eng",
                        "games_count": 1082,
                        "image_background": "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg"
                    },
                    {
                        "id": 166,
                        "name": "Stylized",
                        "slug": "stylized",
                        "language": "eng",
                        "games_count": 901,
                        "image_background": "https://media.rawg.io/media/games/566/566f53f43aa1bd28c63cf3a4d21440ee.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 7041,
                        "image": "https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg"
                    },
                    {
                        "id": 7062,
                        "image": "https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg"
                    },
                    {
                        "id": 7070,
                        "image": "https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg"
                    },
                    {
                        "id": 7072,
                        "image": "https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg"
                    },
                    {
                        "id": 7081,
                        "image": "https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg"
                    },
                    {
                        "id": 7088,
                        "image": "https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg"
                    }
                ]
            },
            {
                "id": 4062,
                "slug": "bioshock-infinite",
                "name": "BioShock Infinite",
                "released": "2013-03-26",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
                "rating": 4.39,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1571,
                        "percent": 55.57
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 930,
                        "percent": 32.9
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 257,
                        "percent": 9.09
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 69,
                        "percent": 2.44
                    }
                ],
                "ratings_count": 2806,
                "reviews_text_count": 14,
                "added": 10304,
                "added_by_status": {
                    "yet": 498,
                    "owned": 6324,
                    "beaten": 2868,
                    "toplay": 242,
                    "dropped": 304,
                    "playing": 68
                },
                "metacritic": 94,
                "playtime": 12,
                "suggestions_count": 599,
                "updated": "2020-08-03T02:19:32",
                "user_game": null,
                "reviews_count": 2827,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD",
                            "recommended": "Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4147,
                            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 44243,
                            "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2013-03-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 461035,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8533,
                            "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
                        }
                    },
                    {
                        "id": 440409,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 71727,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 66275,
                            "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                        }
                    },
                    {
                        "id": 33810,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 13084,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 4382,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/151/151157e3bb2dd3e3f1e5fbee39ccc69d.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/675/6757abdfbef0ef1de5bb4ff12cddd854.mp4",
                        "640": "https://media.rawg.io/media/stories-640/151/151157e3bb2dd3e3f1e5fbee39ccc69d.mp4",
                        "full": "https://media.rawg.io/media/stories/08b/08bc3708d9cd197262ba60123cfa60f3.mp4"
                    },
                    "video": "PsqD6W818CA",
                    "preview": "https://media.rawg.io/media/stories-previews/d93/d93cf264a5fbcee92a3c80de89052ba6.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 9428,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 10811,
                        "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 8780,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 64,
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "language": "eng",
                        "games_count": 10941,
                        "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 3516,
                        "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
                    },
                    {
                        "id": 115,
                        "name": "Controller",
                        "slug": "controller",
                        "language": "eng",
                        "games_count": 4912,
                        "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 847,
                        "image_background": "https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg"
                    },
                    {
                        "id": 154,
                        "name": "Steampunk",
                        "slug": "steampunk",
                        "language": "eng",
                        "games_count": 672,
                        "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
                    },
                    {
                        "id": 305,
                        "name": "Linear",
                        "slug": "linear",
                        "language": "eng",
                        "games_count": 502,
                        "image_background": "https://media.rawg.io/media/games/8a7/8a75028028592f9323d1e6e86668bb91.jpg"
                    },
                    {
                        "id": 208,
                        "name": "Alternate History",
                        "slug": "alternate-history",
                        "language": "eng",
                        "games_count": 739,
                        "image_background": "https://media.rawg.io/media/screenshots/25d/25d3d89fc858df9d5268dcf2e95292e7.jpg"
                    },
                    {
                        "id": 317,
                        "name": "Time Travel",
                        "slug": "time-travel",
                        "language": "eng",
                        "games_count": 953,
                        "image_background": "https://media.rawg.io/media/games/99b/99b39612e864d6ddfdb2c407fd9010a1.jpg"
                    },
                    {
                        "id": 287,
                        "name": "Political",
                        "slug": "political",
                        "language": "eng",
                        "games_count": 297,
                        "image_background": "https://media.rawg.io/media/screenshots/7f7/7f7159db791f6423da090c1359cd672d.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    },
                    {
                        "id": 98549,
                        "image": "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg"
                    },
                    {
                        "id": 98550,
                        "image": "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg"
                    },
                    {
                        "id": 98551,
                        "image": "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg"
                    },
                    {
                        "id": 98552,
                        "image": "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg"
                    },
                    {
                        "id": 98553,
                        "image": "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg"
                    },
                    {
                        "id": 98554,
                        "image": "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg"
                    }
                ]
            },
            {
                "id": 13536,
                "slug": "portal",
                "name": "Portal",
                "released": "2007-10-09",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
                "rating": 4.52,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1904,
                        "percent": 61.2
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1023,
                        "percent": 32.88
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 126,
                        "percent": 4.05
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 58,
                        "percent": 1.86
                    }
                ],
                "ratings_count": 3092,
                "reviews_text_count": 14,
                "added": 10285,
                "added_by_status": {
                    "yet": 252,
                    "owned": 6499,
                    "beaten": 3137,
                    "toplay": 129,
                    "dropped": 220,
                    "playing": 48
                },
                "metacritic": 90,
                "playtime": 4,
                "suggestions_count": 329,
                "updated": "2020-03-08T18:54:32",
                "user_game": null,
                "reviews_count": 3111,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63526,
                            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": {
                            "minimum": "<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 34061,
                            "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": {
                            "minimum": "4.4 and up"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": {
                            "minimum": "<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
                            "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 44243,
                            "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2007-10-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 74815,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Puzzle",
                        "slug": "puzzle",
                        "games_count": 57224,
                        "image_background": "https://media.rawg.io/media/screenshots/42d/42d770eb49f2ba01cd4045e0d92af7a9.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 40973,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16227,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
                        }
                    },
                    {
                        "id": 14890,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/727/72779f22fc89f5b492c1af76be79adfd.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/7c7/7c7fbde10f02794c08a07a89eb3c7353.mp4",
                        "640": "https://media.rawg.io/media/stories-640/727/72779f22fc89f5b492c1af76be79adfd.mp4",
                        "full": "https://media.rawg.io/media/stories/8a1/8a17d3fc984d01379a83338b2d753c37.mp4"
                    },
                    "video": "LXDT7b0sqIs",
                    "preview": "https://media.rawg.io/media/stories-previews/40c/40cea10792d04a016a851c616507332d.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 8780,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 6892,
                        "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 11209,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1525,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 4936,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 5519,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 40838,
                        "name": "Includes level editor",
                        "slug": "includes-level-editor",
                        "language": "eng",
                        "games_count": 1308,
                        "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
                    },
                    {
                        "id": 111,
                        "name": "Short",
                        "slug": "short",
                        "language": "eng",
                        "games_count": 18910,
                        "image_background": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1017,
                        "image_background": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg"
                    },
                    {
                        "id": 114,
                        "name": "Physics",
                        "slug": "physics",
                        "language": "eng",
                        "games_count": 11218,
                        "image_background": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg"
                    },
                    {
                        "id": 40834,
                        "name": "Commentary available",
                        "slug": "commentary-available",
                        "language": "eng",
                        "games_count": 215,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 148,
                        "name": "Dark Humor",
                        "slug": "dark-humor",
                        "language": "eng",
                        "games_count": 1345,
                        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                    },
                    {
                        "id": 40839,
                        "name": "Includes Source SDK",
                        "slug": "includes-source-sdk",
                        "language": "eng",
                        "games_count": 52,
                        "image_background": "https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg"
                    },
                    {
                        "id": 87,
                        "name": "Science",
                        "slug": "science",
                        "language": "eng",
                        "games_count": 904,
                        "image_background": "https://media.rawg.io/media/screenshots/5bb/5bb6b09c84027d979a46affaba10fc7c.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 3,
                    "name": "Teen",
                    "slug": "teen"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                    },
                    {
                        "id": 115793,
                        "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
                    },
                    {
                        "id": 115794,
                        "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
                    },
                    {
                        "id": 115795,
                        "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
                    },
                    {
                        "id": 115796,
                        "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
                    },
                    {
                        "id": 115797,
                        "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
                    },
                    {
                        "id": 115798,
                        "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
                    }
                ]
            },
            {
                "id": 3439,
                "slug": "life-is-strange-episode-1-2",
                "name": "Life is Strange",
                "released": "2015-01-29",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
                "rating": 4.11,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1105,
                        "percent": 43.49
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 929,
                        "percent": 36.56
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 346,
                        "percent": 13.62
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 161,
                        "percent": 6.34
                    }
                ],
                "ratings_count": 2519,
                "reviews_text_count": 16,
                "added": 10221,
                "added_by_status": {
                    "yet": 542,
                    "owned": 6727,
                    "beaten": 2202,
                    "toplay": 219,
                    "dropped": 403,
                    "playing": 128
                },
                "metacritic": 83,
                "playtime": 7,
                "suggestions_count": 858,
                "updated": "2020-06-29T10:40:03",
                "user_game": null,
                "reviews_count": 2541,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 34061,
                            "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": {
                            "minimum": "6.0 and up"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "iOS",
                            "slug": "ios",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 67840,
                            "image_background": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": {
                            "minimum": "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63526,
                            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 44243,
                            "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2015-01-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "iOS",
                            "slug": "ios"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 74815,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 451321,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3017,
                            "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                        }
                    },
                    {
                        "id": 44714,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 66275,
                            "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                        }
                    },
                    {
                        "id": 245823,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 217695,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16227,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
                        }
                    },
                    {
                        "id": 35602,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 35603,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 3702,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/514/51432922c6982fc36865911381f82d89.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/a62/a62010b1d14c37fd758537b580859229.mp4",
                        "640": "https://media.rawg.io/media/stories-640/514/51432922c6982fc36865911381f82d89.mp4",
                        "full": "https://media.rawg.io/media/stories/169/16924bb66f26bb2cfbcb16f1f5d169a8.mp4"
                    },
                    "video": "RVBwecPZTCs",
                    "preview": "https://media.rawg.io/media/stories-previews/d72/d72a6ce63e97055ffa20a5fdeec37145.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 3359,
                        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                    },
                    {
                        "id": 189,
                        "name": "Female Protagonist",
                        "slug": "female-protagonist",
                        "language": "eng",
                        "games_count": 4936,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 141,
                        "name": "Point & Click",
                        "slug": "point-click",
                        "language": "eng",
                        "games_count": 5990,
                        "image_background": "https://media.rawg.io/media/games/99d/99d7fadd2342f575d238a4e1f5c542b6.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 6195,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 111,
                        "name": "Short",
                        "slug": "short",
                        "language": "eng",
                        "games_count": 18910,
                        "image_background": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
                    },
                    {
                        "id": 117,
                        "name": "Mystery",
                        "slug": "mystery",
                        "language": "eng",
                        "games_count": 5997,
                        "image_background": "https://media.rawg.io/media/games/813/813f9dab418a3d549f8b9ad8ef2f3d9c.jpg"
                    },
                    {
                        "id": 145,
                        "name": "Choices Matter",
                        "slug": "choices-matter",
                        "language": "eng",
                        "games_count": 835,
                        "image_background": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg"
                    },
                    {
                        "id": 120,
                        "name": "Memes",
                        "slug": "memes",
                        "language": "eng",
                        "games_count": 953,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 91,
                        "name": "Walking Simulator",
                        "slug": "walking-simulator",
                        "language": "eng",
                        "games_count": 3376,
                        "image_background": "https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg"
                    },
                    {
                        "id": 218,
                        "name": "Multiple Endings",
                        "slug": "multiple-endings",
                        "language": "eng",
                        "games_count": 2706,
                        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                    },
                    {
                        "id": 406,
                        "name": "Story",
                        "slug": "story",
                        "language": "eng",
                        "games_count": 7757,
                        "image_background": "https://media.rawg.io/media/screenshots/4f5/4f5ba4c03c5aea5d15b3067f894431cc.jpg"
                    },
                    {
                        "id": 232,
                        "name": "Episodic",
                        "slug": "episodic",
                        "language": "eng",
                        "games_count": 329,
                        "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
                    },
                    {
                        "id": 317,
                        "name": "Time Travel",
                        "slug": "time-travel",
                        "language": "eng",
                        "games_count": 953,
                        "image_background": "https://media.rawg.io/media/games/99b/99b39612e864d6ddfdb2c407fd9010a1.jpg"
                    },
                    {
                        "id": 295,
                        "name": "Soundtrack",
                        "slug": "soundtrack",
                        "language": "eng",
                        "games_count": 1975,
                        "image_background": "https://media.rawg.io/media/screenshots/fc8/fc80b9de449267da53eaff8b2ff33b08.jpg"
                    },
                    {
                        "id": 302,
                        "name": "Time Manipulation",
                        "slug": "time-manipulation",
                        "language": "eng",
                        "games_count": 117,
                        "image_background": "https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg"
                    },
                    {
                        "id": 992,
                        "name": "student",
                        "slug": "student",
                        "language": "eng",
                        "games_count": 924,
                        "image_background": "https://media.rawg.io/media/screenshots/836/836c11b350dc13ed9ae815c10c9e49ff.jpg"
                    },
                    {
                        "id": 2682,
                        "name": "strange",
                        "slug": "strange",
                        "language": "eng",
                        "games_count": 242,
                        "image_background": "https://media.rawg.io/media/screenshots/cd8/cd87f13df436ca4df58028522836048d.jpg"
                    },
                    {
                        "id": 3197,
                        "name": "photography",
                        "slug": "photography",
                        "language": "eng",
                        "games_count": 129,
                        "image_background": "https://media.rawg.io/media/screenshots/465/465f4cb420e42aa1e3270b8ea2a09759.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 1826487,
                        "image": "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg"
                    },
                    {
                        "id": 1826488,
                        "image": "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg"
                    },
                    {
                        "id": 1826489,
                        "image": "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg"
                    },
                    {
                        "id": 1826490,
                        "image": "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg"
                    },
                    {
                        "id": 1826491,
                        "image": "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg"
                    },
                    {
                        "id": 1826492,
                        "image": "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
                    }
                ]
            },
            {
                "id": 4291,
                "slug": "counter-strike-global-offensive",
                "name": "Counter-Strike: Global Offensive",
                "released": "2012-08-21",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
                "rating": 3.57,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1016,
                        "percent": 47.72
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 571,
                        "percent": 26.82
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 321,
                        "percent": 15.08
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 221,
                        "percent": 10.38
                    }
                ],
                "ratings_count": 2114,
                "reviews_text_count": 13,
                "added": 10162,
                "added_by_status": {
                    "yet": 167,
                    "owned": 7926,
                    "beaten": 552,
                    "toplay": 42,
                    "dropped": 1078,
                    "playing": 397
                },
                "metacritic": 81,
                "playtime": 59,
                "suggestions_count": 608,
                "updated": "2020-08-07T06:18:15",
                "user_game": null,
                "reviews_count": 2129,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2012-08-21",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
                            "recommended": "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2012-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2012-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 49169,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 11489,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 4619,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/0cc/0cca2e6569d5c6631b1c422116d3dd71.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/3e0/3e000fb9f8308f35acebb76780b7a0a6.mp4",
                        "640": "https://media.rawg.io/media/stories-640/0cc/0cca2e6569d5c6631b1c422116d3dd71.mp4",
                        "full": "https://media.rawg.io/media/stories/fb9/fb9afaf60913f55c68f94044058f37cd.mp4"
                    },
                    "video": "E1Ne_s0hLjk",
                    "preview": "https://media.rawg.io/media/stories-previews/030/030727d491549f229c493cc5fcfd84ef.jpg"
                },
                "tags": [
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 2565,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 2407,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 1989,
                        "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3471,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1052,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 489,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 70,
                        "name": "War",
                        "slug": "war",
                        "language": "eng",
                        "games_count": 6111,
                        "image_background": "https://media.rawg.io/media/games/8ee/8eed88e297441ef9202b5d1d35d7d86f.jpg"
                    },
                    {
                        "id": 157,
                        "name": "PvP",
                        "slug": "pvp",
                        "language": "eng",
                        "games_count": 3138,
                        "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1221,
                        "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
                    },
                    {
                        "id": 40856,
                        "name": "Valve Anti-Cheat enabled",
                        "slug": "valve-anti-cheat-enabled",
                        "language": "eng",
                        "games_count": 105,
                        "image_background": "https://media.rawg.io/media/games/657/657574cd437df9102f511b3be095b0ea.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 565,
                        "image_background": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg"
                    },
                    {
                        "id": 131,
                        "name": "Fast-Paced",
                        "slug": "fast-paced",
                        "language": "eng",
                        "games_count": 6258,
                        "image_background": "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg"
                    },
                    {
                        "id": 170,
                        "name": "Competitive",
                        "slug": "competitive",
                        "language": "eng",
                        "games_count": 740,
                        "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
                    },
                    {
                        "id": 81,
                        "name": "Military",
                        "slug": "military",
                        "language": "eng",
                        "games_count": 499,
                        "image_background": "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg"
                    },
                    {
                        "id": 77,
                        "name": "Realistic",
                        "slug": "realistic",
                        "language": "eng",
                        "games_count": 1061,
                        "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
                    },
                    {
                        "id": 73,
                        "name": "e-sports",
                        "slug": "e-sports",
                        "language": "eng",
                        "games_count": 79,
                        "image_background": "https://media.rawg.io/media/screenshots/f2b/f2b17902186569c0270e9c1196c3ca1b.jpg"
                    },
                    {
                        "id": 245,
                        "name": "Trading",
                        "slug": "trading",
                        "language": "eng",
                        "games_count": 592,
                        "image_background": "https://media.rawg.io/media/screenshots/98c/98c25faca7a3e594188e0ae5fa112eed.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                    },
                    {
                        "id": 81644,
                        "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
                    },
                    {
                        "id": 81645,
                        "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
                    },
                    {
                        "id": 81646,
                        "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
                    },
                    {
                        "id": 81647,
                        "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
                    },
                    {
                        "id": 81648,
                        "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
                    },
                    {
                        "id": 81649,
                        "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
                    }
                ]
            },
            {
                "id": 4286,
                "slug": "bioshock",
                "name": "BioShock",
                "released": "2007-08-21",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
                "rating": 4.39,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1269,
                        "percent": 54.0
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 854,
                        "percent": 36.34
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 162,
                        "percent": 6.89
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 65,
                        "percent": 2.77
                    }
                ],
                "ratings_count": 2327,
                "reviews_text_count": 15,
                "added": 9370,
                "added_by_status": {
                    "yet": 394,
                    "owned": 6091,
                    "beaten": 2156,
                    "toplay": 180,
                    "dropped": 462,
                    "playing": 87
                },
                "metacritic": 96,
                "playtime": 3,
                "suggestions_count": 654,
                "updated": "2020-08-03T02:18:53",
                "user_game": null,
                "reviews_count": 2350,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2010-07-06",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": {
                            "minimum": "<h2 class=\"bb_tag\"><strong>Minimum: </strong></h2><ul class=\"bb_ul\"><li><strong>Operating System</strong>: Windows XP (with Service Pack 2) or Windows Vista<br></li><li><strong>CPU</strong>: Intel single-core Pentium 4 processor at 2.4GHz<br></li><li><strong>RAM</strong>: 1 GB<br></li><li><strong>Video Card</strong>: Direct X 9.0c compliant video card with 128MB RAM and Pixel Shader 3.0 (NVIDIA 6600 or better/ATI X1300 or better, excluding ATI X1550)<br></li><li><strong>Sound Card</strong>: 100% direct X 9.0c compatible sound card<br></li><li><strong>Hard Drive Space</strong>: 8GB<br></li><li>Game requires Internet connection for activation</li></ul>",
                            "recommended": "<h2 class=\"bb_tag\"><strong>Recommended: </strong></h2><ul class=\"bb_ul\"><li><strong>CPU</strong>: Intel Core 2 Duo processor<br></li><li><strong>RAM</strong>: 2GB<br></li><li><strong>Video Card</strong>: DX 9 - Direct X 9.0c compliant video card with 512 MB RAM and Pixel Shader 3.0 (NVIDIA GeForce 7900 GT or better), DX 10 - NVIDIA GeForce 8600 or better<br></li><li><strong>Sound Card</strong>: SoundBlaster(r) X-Fi(tm) series (optimized foruse with Creative Labs EAX ADVANCED HD 4.0 or EAX ADVANCED HD 5.0 compatible sound cards)</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon 64 2.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows XP SP2 или Vista,Интернет-соединение",
                            "recommended": "Core 2 Duo/Athlon 64 X2 3 ГГц,2 Гб памяти,3D-ускоритель с 512 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows Vista,Интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63526,
                            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "iOS",
                            "slug": "ios",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 67840,
                            "image_background": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2007-08-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "iOS",
                            "slug": "ios"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 440407,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 79531,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 66275,
                            "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                        }
                    },
                    {
                        "id": 4614,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    },
                    {
                        "id": 33844,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 20580,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/812/81238e77897b40294fce96e82601aba5.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/6af/6afdafa07a421d6300afcec772559fe0.mp4",
                        "640": "https://media.rawg.io/media/stories-640/812/81238e77897b40294fce96e82601aba5.mp4",
                        "full": "https://media.rawg.io/media/stories/f82/f8211f5933005d1c3587f06e9164225d.mp4"
                    },
                    "video": "FoCmjOB0KHo",
                    "preview": "https://media.rawg.io/media/stories-previews/e4e/e4ef5474302c8e73e4af663aefc84360.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 10811,
                        "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 8780,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 6892,
                        "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 18297,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1525,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 2981,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 6195,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 847,
                        "image_background": "https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg"
                    },
                    {
                        "id": 154,
                        "name": "Steampunk",
                        "slug": "steampunk",
                        "language": "eng",
                        "games_count": 672,
                        "image_background": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg"
                    },
                    {
                        "id": 208,
                        "name": "Alternate History",
                        "slug": "alternate-history",
                        "language": "eng",
                        "games_count": 739,
                        "image_background": "https://media.rawg.io/media/screenshots/25d/25d3d89fc858df9d5268dcf2e95292e7.jpg"
                    },
                    {
                        "id": 287,
                        "name": "Political",
                        "slug": "political",
                        "language": "eng",
                        "games_count": 297,
                        "image_background": "https://media.rawg.io/media/screenshots/7f7/7f7159db791f6423da090c1359cd672d.jpg"
                    },
                    {
                        "id": 250,
                        "name": "Underwater",
                        "slug": "underwater",
                        "language": "eng",
                        "games_count": 1050,
                        "image_background": "https://media.rawg.io/media/screenshots/5af/5af1974e330a1ba6f4319400dde88129.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    },
                    {
                        "id": 170993,
                        "image": "https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg"
                    },
                    {
                        "id": 170994,
                        "image": "https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg"
                    },
                    {
                        "id": 170995,
                        "image": "https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg"
                    },
                    {
                        "id": 170996,
                        "image": "https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg"
                    },
                    {
                        "id": 170997,
                        "image": "https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg"
                    },
                    {
                        "id": 170998,
                        "image": "https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg"
                    }
                ]
            },
            {
                "id": 13537,
                "slug": "half-life-2",
                "name": "Half-Life 2",
                "released": "2004-11-16",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
                "rating": 4.5,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1613,
                        "percent": 63.25
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 724,
                        "percent": 28.39
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 148,
                        "percent": 5.8
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 65,
                        "percent": 2.55
                    }
                ],
                "ratings_count": 2540,
                "reviews_text_count": 9,
                "added": 9345,
                "added_by_status": {
                    "yet": 399,
                    "owned": 6052,
                    "beaten": 2342,
                    "toplay": 169,
                    "dropped": 314,
                    "playing": 69
                },
                "metacritic": 96,
                "playtime": 7,
                "suggestions_count": 581,
                "updated": "2019-09-17T15:58:20",
                "user_game": null,
                "reviews_count": 2550,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 34061,
                            "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": {
                            "minimum": "4.4 and up"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 44243,
                            "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 80,
                            "name": "Xbox",
                            "slug": "xbox-old",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 676,
                            "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63526,
                            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": {
                            "minimum": "Pentium III/Athlon 1.2 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,5 Гб на винчестере,доступ в Интернет",
                            "recommended": "Pentium 4/Athlon XP 2.5 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,5 Гб на винчестере,доступ в Интернет"
                        }
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2004-11-16",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 41441,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16227,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
                        }
                    },
                    {
                        "id": 14891,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/7d7/7d7b25f5b3fb214df4b36f282ffd71c9.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/6fa/6fab3eb81c948d087b1ac89e3ad41991.mp4",
                        "640": "https://media.rawg.io/media/stories-640/7d7/7d7b25f5b3fb214df4b36f282ffd71c9.mp4",
                        "full": "https://media.rawg.io/media/stories/61f/61ff4e702e32afa2ad607e3d71d80db0.mp4"
                    },
                    "video": "zDqK_C9Xtvk",
                    "preview": "https://media.rawg.io/media/stories-previews/189/189e86b4bf80b0f0a1fab5896e65dc9f.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 9428,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 8780,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 6892,
                        "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 18297,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1525,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 489,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 6063,
                        "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1017,
                        "image_background": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg"
                    },
                    {
                        "id": 114,
                        "name": "Physics",
                        "slug": "physics",
                        "language": "eng",
                        "games_count": 11218,
                        "image_background": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg"
                    },
                    {
                        "id": 172,
                        "name": "Aliens",
                        "slug": "aliens",
                        "language": "eng",
                        "games_count": 3772,
                        "image_background": "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg"
                    },
                    {
                        "id": 119,
                        "name": "Dystopian",
                        "slug": "dystopian",
                        "language": "eng",
                        "games_count": 847,
                        "image_background": "https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg"
                    },
                    {
                        "id": 40839,
                        "name": "Includes Source SDK",
                        "slug": "includes-source-sdk",
                        "language": "eng",
                        "games_count": 52,
                        "image_background": "https://media.rawg.io/media/screenshots/f34/f34c86335d0c51baa582aa93fa2d3f55.jpg"
                    },
                    {
                        "id": 319,
                        "name": "Silent Protagonist",
                        "slug": "silent-protagonist",
                        "language": "eng",
                        "games_count": 61,
                        "image_background": "https://media.rawg.io/media/screenshots/348/3484e5e04d710095e65766215d1b6b93.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 115804,
                        "image": "https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg"
                    },
                    {
                        "id": 115805,
                        "image": "https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg"
                    },
                    {
                        "id": 115806,
                        "image": "https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg"
                    },
                    {
                        "id": 115807,
                        "image": "https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg"
                    },
                    {
                        "id": 115808,
                        "image": "https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg"
                    },
                    {
                        "id": 115809,
                        "image": "https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg"
                    }
                ]
            },
            {
                "id": 1030,
                "slug": "limbo",
                "name": "Limbo",
                "released": "2010-07-21",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg",
                "rating": 4.16,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1191,
                        "percent": 51.87
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 809,
                        "percent": 35.24
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 224,
                        "percent": 9.76
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 72,
                        "percent": 3.14
                    }
                ],
                "ratings_count": 2271,
                "reviews_text_count": 16,
                "added": 9340,
                "added_by_status": {
                    "yet": 392,
                    "owned": 6093,
                    "beaten": 2154,
                    "toplay": 186,
                    "dropped": 446,
                    "playing": 69
                },
                "metacritic": 88,
                "playtime": 3,
                "suggestions_count": 222,
                "updated": "2020-01-21T20:05:54",
                "user_game": null,
                "reviews_count": 2296,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP, Vista, 7<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2 GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 512MB<br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> 5 years or younger. Integrated graphics and very low budget cards may not work. Shader Model 3.0 required<br>\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c\t<br>\t\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере",
                            "recommended": "Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "iOS",
                            "slug": "ios",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 67840,
                            "image_background": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 44243,
                            "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM <br>\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63526,
                            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "Please be advised that LIMBO only runs Macs produced in 2009 and onwards.<br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3 or later.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) <br>\t\t\t\t\t</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 21,
                            "name": "Android",
                            "slug": "android",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 34061,
                            "image_background": "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": {
                            "minimum": "4.4 and up"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4147,
                            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 19,
                            "name": "PS Vita",
                            "slug": "ps-vita",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 1927,
                            "image_background": "https://media.rawg.io/media/games/6fc/6fcb1c529c764700d55f3bbc1b0fbb5b.jpg"
                        },
                        "released_at": "2010-07-21",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 4,
                            "name": "iOS",
                            "slug": "ios"
                        }
                    },
                    {
                        "platform": {
                            "id": 8,
                            "name": "Android",
                            "slug": "android"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 74815,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    },
                    {
                        "id": 51,
                        "name": "Indie",
                        "slug": "indie",
                        "games_count": 33904,
                        "image_background": "https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg"
                    },
                    {
                        "id": 7,
                        "name": "Puzzle",
                        "slug": "puzzle",
                        "games_count": 57224,
                        "image_background": "https://media.rawg.io/media/screenshots/42d/42d770eb49f2ba01cd4045e0d92af7a9.jpg"
                    },
                    {
                        "id": 83,
                        "name": "Platformer",
                        "slug": "platformer",
                        "games_count": 50541,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 335541,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 310,
                            "image_background": "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png"
                        }
                    },
                    {
                        "id": 40035,
                        "store": {
                            "id": 8,
                            "name": "Google Play",
                            "slug": "google-play",
                            "domain": "play.google.com",
                            "games_count": 16227,
                            "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
                        }
                    },
                    {
                        "id": 49142,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8533,
                            "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
                        }
                    },
                    {
                        "id": 33137,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 26852,
                        "store": {
                            "id": 5,
                            "name": "GOG",
                            "slug": "gog",
                            "domain": "gog.com",
                            "games_count": 3017,
                            "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                        }
                    },
                    {
                        "id": 10311,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 7493,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 3679,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    },
                    {
                        "id": 1054,
                        "store": {
                            "id": 4,
                            "name": "App Store",
                            "slug": "apple-appstore",
                            "domain": "apps.apple.com",
                            "games_count": 66275,
                            "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/8b0/8b0b7285424bc9ace90187a5dd9b909b.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/bc5/bc5fa222c4737edf739459fd7b4d2439.mp4",
                        "640": "https://media.rawg.io/media/stories-640/8b0/8b0b7285424bc9ace90187a5dd9b909b.mp4",
                        "full": "https://media.rawg.io/media/stories/7e1/7e121b3198f343b14ad98d2454a194f5.mp4"
                    },
                    "video": "iDLc9HLhDa4",
                    "preview": "https://media.rawg.io/media/stories-previews/3c1/3c170f1df7acc0202aabf45cb6b33bd7.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 9428,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 45,
                        "name": "2D",
                        "slug": "2d",
                        "language": "eng",
                        "games_count": 88752,
                        "image_background": "https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 18297,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 49,
                        "name": "Difficult",
                        "slug": "difficult",
                        "language": "eng",
                        "games_count": 7513,
                        "image_background": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg"
                    },
                    {
                        "id": 115,
                        "name": "Controller",
                        "slug": "controller",
                        "language": "eng",
                        "games_count": 4912,
                        "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
                    },
                    {
                        "id": 41,
                        "name": "Dark",
                        "slug": "dark",
                        "language": "eng",
                        "games_count": 6195,
                        "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                    },
                    {
                        "id": 336,
                        "name": "controller support",
                        "slug": "controller-support",
                        "language": "eng",
                        "games_count": 293,
                        "image_background": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
                    },
                    {
                        "id": 111,
                        "name": "Short",
                        "slug": "short",
                        "language": "eng",
                        "games_count": 18910,
                        "image_background": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
                    },
                    {
                        "id": 113,
                        "name": "Side Scroller",
                        "slug": "side-scroller",
                        "language": "eng",
                        "games_count": 4562,
                        "image_background": "https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg"
                    },
                    {
                        "id": 114,
                        "name": "Physics",
                        "slug": "physics",
                        "language": "eng",
                        "games_count": 11218,
                        "image_background": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 322,
                        "image_background": "https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg"
                    },
                    {
                        "id": 337,
                        "name": "overlay",
                        "slug": "overlay",
                        "language": "eng",
                        "games_count": 194,
                        "image_background": "https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg"
                    },
                    {
                        "id": 83,
                        "name": "Puzzle-Platformer",
                        "slug": "puzzle-platformer",
                        "language": "eng",
                        "games_count": 6172,
                        "image_background": "https://media.rawg.io/media/screenshots/2d9/2d9f74addd8f5b5f83459c2cb700aaf4.jpg"
                    },
                    {
                        "id": 46,
                        "name": "Surreal",
                        "slug": "surreal",
                        "language": "eng",
                        "games_count": 2380,
                        "image_background": "https://media.rawg.io/media/screenshots/76a/76a4511b693e10e282463b5904a2f450.jpg"
                    },
                    {
                        "id": 112,
                        "name": "Minimalist",
                        "slug": "minimalist",
                        "language": "eng",
                        "games_count": 7086,
                        "image_background": "https://media.rawg.io/media/screenshots/2f2/2f2958ae87ac35e3442f3c87424a09b2.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 3,
                    "name": "Teen",
                    "slug": "teen"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg"
                    },
                    {
                        "id": 30985,
                        "image": "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg"
                    },
                    {
                        "id": 30986,
                        "image": "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg"
                    },
                    {
                        "id": 30987,
                        "image": "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg"
                    },
                    {
                        "id": 30988,
                        "image": "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg"
                    },
                    {
                        "id": 30989,
                        "image": "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg"
                    },
                    {
                        "id": 30990,
                        "image": "https://media.rawg.io/media/screenshots/4a8/4a8c625374918e96e74948189e90c20b.jpg"
                    }
                ]
            },
            {
                "id": 28,
                "slug": "red-dead-redemption-2",
                "name": "Red Dead Redemption 2",
                "released": "2018-10-26",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
                "rating": 4.57,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 2197,
                        "percent": 71.68
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 595,
                        "percent": 19.41
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 180,
                        "percent": 5.87
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 93,
                        "percent": 3.03
                    }
                ],
                "ratings_count": 3008,
                "reviews_text_count": 46,
                "added": 9158,
                "added_by_status": {
                    "yet": 503,
                    "owned": 4821,
                    "beaten": 1641,
                    "toplay": 1246,
                    "dropped": 290,
                    "playing": 657
                },
                "metacritic": 96,
                "playtime": 19,
                "suggestions_count": 645,
                "updated": "2020-11-23T02:33:54",
                "user_game": null,
                "reviews_count": 3065,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2018-10-26",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 - Service Pack 1 (6.1.7601)<br></li><li><strong>Processor:</strong> Intel® Core™ i5-2500K / AMD FX-6300<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 - April 2018 Update (v1803)<br></li><li><strong>Processor:</strong> Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br></li><li><strong>Memory:</strong> 12 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2018-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2018-10-26",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 74815,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 384218,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 374316,
                        "store": {
                            "id": 11,
                            "name": "Epic Games",
                            "slug": "epic-games",
                            "domain": "epicgames.com",
                            "games_count": 310,
                            "image_background": "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png"
                        }
                    },
                    {
                        "id": 257732,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    },
                    {
                        "id": 48782,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/b19/b1904018c12b752274008720a9f9cc2f.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/130/1309c8ea2eb2c7fedf96048e8de53e0c.mp4",
                        "640": "https://media.rawg.io/media/stories-640/b19/b1904018c12b752274008720a9f9cc2f.mp4",
                        "full": "https://media.rawg.io/media/stories/cd6/cd62fd7cded52a72d11b39b188237540.mp4"
                    },
                    "video": "55OoIvMU8b4",
                    "preview": "https://media.rawg.io/media/stories-previews/c63/c6377b573b3549bfefddc0d9ae982ba1.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 3258,
                        "image_background": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 3359,
                        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 6892,
                        "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 2407,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 3516,
                        "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 3008,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 8470,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 34,
                        "name": "Violent",
                        "slug": "violent",
                        "language": "eng",
                        "games_count": 4145,
                        "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 1233,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 157,
                        "name": "PvP",
                        "slug": "pvp",
                        "language": "eng",
                        "games_count": 3138,
                        "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1221,
                        "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
                    },
                    {
                        "id": 192,
                        "name": "Mature",
                        "slug": "mature",
                        "language": "eng",
                        "games_count": 753,
                        "image_background": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg"
                    },
                    {
                        "id": 110,
                        "name": "Cinematic",
                        "slug": "cinematic",
                        "language": "eng",
                        "games_count": 322,
                        "image_background": "https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg"
                    },
                    {
                        "id": 77,
                        "name": "Realistic",
                        "slug": "realistic",
                        "language": "eng",
                        "games_count": 1061,
                        "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 1627,
                        "image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
                    },
                    {
                        "id": 478,
                        "name": "3rd-Person Perspective",
                        "slug": "3rd-person-perspective",
                        "language": "eng",
                        "games_count": 81,
                        "image_background": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg"
                    },
                    {
                        "id": 270,
                        "name": "Blood",
                        "slug": "blood",
                        "language": "eng",
                        "games_count": 1372,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 78,
                        "name": "America",
                        "slug": "america",
                        "language": "eng",
                        "games_count": 149,
                        "image_background": "https://media.rawg.io/media/games/b28/b2813f31d36b83d2e8d4e246a2cfcbe2.jpg"
                    },
                    {
                        "id": 45878,
                        "name": "Online PvP",
                        "slug": "online-pvp",
                        "language": "eng",
                        "games_count": 815,
                        "image_background": "https://media.rawg.io/media/games/2e1/2e10f56f6fb99a791c19999ff3d34e7a.jpg"
                    },
                    {
                        "id": 578,
                        "name": "Masterpiece",
                        "slug": "masterpiece",
                        "language": "eng",
                        "games_count": 178,
                        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                    },
                    {
                        "id": 181,
                        "name": "Hunting",
                        "slug": "hunting",
                        "language": "eng",
                        "games_count": 576,
                        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                    },
                    {
                        "id": 577,
                        "name": "Beautiful",
                        "slug": "beautiful",
                        "language": "eng",
                        "games_count": 1557,
                        "image_background": "https://media.rawg.io/media/games/2e1/2e10f56f6fb99a791c19999ff3d34e7a.jpg"
                    },
                    {
                        "id": 152,
                        "name": "Western",
                        "slug": "western",
                        "language": "eng",
                        "games_count": 734,
                        "image_background": "https://media.rawg.io/media/games/04b/04bee394bb570439b7d68470f5ee0a0f.jpg"
                    },
                    {
                        "id": 5452,
                        "name": "3rd-person",
                        "slug": "3rd-person",
                        "language": "eng",
                        "games_count": 65,
                        "image_background": "https://media.rawg.io/media/screenshots/121/1215c10ff94fdac896fc4a92a3834856.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
                    },
                    {
                        "id": 778173,
                        "image": "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg"
                    },
                    {
                        "id": 778174,
                        "image": "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg"
                    },
                    {
                        "id": 778175,
                        "image": "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg"
                    },
                    {
                        "id": 778176,
                        "image": "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg"
                    },
                    {
                        "id": 778177,
                        "image": "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg"
                    },
                    {
                        "id": 778178,
                        "image": "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg"
                    }
                ]
            },
            {
                "id": 11859,
                "slug": "team-fortress-2",
                "name": "Team Fortress 2",
                "released": "2007-10-10",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
                "rating": 3.67,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 891,
                        "percent": 45.55
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 487,
                        "percent": 24.9
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 395,
                        "percent": 20.19
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 183,
                        "percent": 9.36
                    }
                ],
                "ratings_count": 1941,
                "reviews_text_count": 13,
                "added": 8691,
                "added_by_status": {
                    "yet": 116,
                    "owned": 6806,
                    "beaten": 520,
                    "toplay": 24,
                    "dropped": 1108,
                    "playing": 117
                },
                "metacritic": 92,
                "playtime": 9,
                "suggestions_count": 545,
                "updated": "2020-07-08T03:57:06",
                "user_game": null,
                "reviews_count": 1956,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2007-10-10",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 (32/64-bit)/Vista/XP<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>DirectX:</strong> Version 8.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 (32/64-bit)<br></li><li><strong>Processor:</strong> Pentium 4 processor (3.0GHz, or better)<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
                            "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 44243,
                            "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                        },
                        "released_at": "2007-10-10",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "macOS",
                            "slug": "macos",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 63526,
                            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
                        },
                        "released_at": "2007-10-10",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Leopard 10.5.8 and above<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8 or higher, ATI X1600 or higher, Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
                        },
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 5,
                            "name": "Apple Macintosh",
                            "slug": "mac"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 13018,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/a65/a655bf5c37dd13053263c7c97205a357.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/4c4/4c4b9f19b3f54ca7562a727a3733fe1c.mp4",
                        "640": "https://media.rawg.io/media/stories-640/a65/a655bf5c37dd13053263c7c97205a357.mp4",
                        "full": "https://media.rawg.io/media/stories/439/439434576db06365a1e8cbe9fccf02a0.mp4"
                    },
                    "video": "jP8THCntY9Y",
                    "preview": "https://media.rawg.io/media/stories-previews/f35/f3562a21166f810cb3b2e69b2e1a27c3.jpg"
                },
                "tags": [
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 2565,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 6892,
                        "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 11209,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 2407,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 123,
                        "name": "Comedy",
                        "slug": "comedy",
                        "language": "eng",
                        "games_count": 5519,
                        "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                    },
                    {
                        "id": 79,
                        "name": "Free to Play",
                        "slug": "free-to-play",
                        "language": "eng",
                        "games_count": 3466,
                        "image_background": "https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 1989,
                        "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                    },
                    {
                        "id": 11669,
                        "name": "stats",
                        "slug": "stats",
                        "language": "eng",
                        "games_count": 3471,
                        "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                    },
                    {
                        "id": 40852,
                        "name": "Steam Workshop",
                        "slug": "steam-workshop",
                        "language": "eng",
                        "games_count": 1052,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 489,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 40838,
                        "name": "Includes level editor",
                        "slug": "includes-level-editor",
                        "language": "eng",
                        "games_count": 1308,
                        "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
                    },
                    {
                        "id": 40832,
                        "name": "Cross-Platform Multiplayer",
                        "slug": "cross-platform-multiplayer",
                        "language": "eng",
                        "games_count": 1597,
                        "image_background": "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg"
                    },
                    {
                        "id": 40833,
                        "name": "Captions available",
                        "slug": "captions-available",
                        "language": "eng",
                        "games_count": 1017,
                        "image_background": "https://media.rawg.io/media/games/d9f/d9f982e042df6263684ba1fdea3efc1c.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1221,
                        "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
                    },
                    {
                        "id": 40856,
                        "name": "Valve Anti-Cheat enabled",
                        "slug": "valve-anti-cheat-enabled",
                        "language": "eng",
                        "games_count": 105,
                        "image_background": "https://media.rawg.io/media/games/657/657574cd437df9102f511b3be095b0ea.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 565,
                        "image_background": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg"
                    },
                    {
                        "id": 170,
                        "name": "Competitive",
                        "slug": "competitive",
                        "language": "eng",
                        "games_count": 740,
                        "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
                    },
                    {
                        "id": 125,
                        "name": "Crafting",
                        "slug": "crafting",
                        "language": "eng",
                        "games_count": 1560,
                        "image_background": "https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg"
                    },
                    {
                        "id": 197,
                        "name": "Robots",
                        "slug": "robots",
                        "language": "eng",
                        "games_count": 4679,
                        "image_background": "https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg"
                    },
                    {
                        "id": 40834,
                        "name": "Commentary available",
                        "slug": "commentary-available",
                        "language": "eng",
                        "games_count": 215,
                        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 164,
                        "name": "Cartoony",
                        "slug": "cartoony",
                        "language": "eng",
                        "games_count": 860,
                        "image_background": "https://media.rawg.io/media/screenshots/f10/f10e7cafed6665861c58187b2ae3b310.jpg"
                    },
                    {
                        "id": 179,
                        "name": "Cartoon",
                        "slug": "cartoon",
                        "language": "eng",
                        "games_count": 1856,
                        "image_background": "https://media.rawg.io/media/screenshots/e8b/e8b50920b3b0545a4ad25554b3b4c493.jpg"
                    },
                    {
                        "id": 265,
                        "name": "Class-Based",
                        "slug": "class-based",
                        "language": "eng",
                        "games_count": 87,
                        "image_background": "https://media.rawg.io/media/screenshots/e4b/e4b75996477d874d4d7297fa5cba49f3.jpg"
                    },
                    {
                        "id": 245,
                        "name": "Trading",
                        "slug": "trading",
                        "language": "eng",
                        "games_count": 592,
                        "image_background": "https://media.rawg.io/media/screenshots/98c/98c25faca7a3e594188e0ae5fa112eed.jpg"
                    }
                ],
                "esrb_rating": null,
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                    },
                    {
                        "id": 97905,
                        "image": "https://media.rawg.io/media/screenshots/596/5968ba06bac8bee0ec7e9d03c970c421.jpg"
                    },
                    {
                        "id": 97906,
                        "image": "https://media.rawg.io/media/screenshots/94f/94f4eb0b3d1fde7a37ec84f0f66f7f87.jpg"
                    },
                    {
                        "id": 97907,
                        "image": "https://media.rawg.io/media/screenshots/a0a/a0ad82cad18d0a2466d1d5f12bf8858c.jpg"
                    },
                    {
                        "id": 97908,
                        "image": "https://media.rawg.io/media/screenshots/a83/a83038d2ec296522ab1b9ab0521b1ec3.jpg"
                    },
                    {
                        "id": 97909,
                        "image": "https://media.rawg.io/media/screenshots/8d4/8d488a3e65256ec777c8097b0faacc78.jpg"
                    },
                    {
                        "id": 97910,
                        "image": "https://media.rawg.io/media/screenshots/707/707c7488bd6e35bc74d274a923bc1df2.jpg"
                    }
                ]
            },
            {
                "id": 2454,
                "slug": "doom",
                "name": "DOOM (2016)",
                "released": "2016-05-13",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
                "rating": 4.39,
                "rating_top": 5,
                "ratings": [
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 1315,
                        "percent": 52.96
                    },
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 934,
                        "percent": 37.62
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 175,
                        "percent": 7.05
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 59,
                        "percent": 2.38
                    }
                ],
                "ratings_count": 2459,
                "reviews_text_count": 18,
                "added": 8607,
                "added_by_status": {
                    "yet": 364,
                    "owned": 5422,
                    "beaten": 1800,
                    "toplay": 345,
                    "dropped": 435,
                    "playing": 241
                },
                "metacritic": 85,
                "playtime": 11,
                "suggestions_count": 668,
                "updated": "2020-09-14T21:44:34",
                "user_game": null,
                "reviews_count": 2483,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2016-05-13",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 650<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i5<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> GTX 770<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "i386-33, 4 Мб",
                            "recommended": "i486-40, 8 Мб"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo Switch",
                            "slug": "nintendo-switch",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4147,
                            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
                        },
                        "released_at": "2016-05-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2016-05-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2016-05-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 7,
                            "name": "Nintendo",
                            "slug": "nintendo"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 355582,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 8223,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 38659,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8533,
                            "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
                        }
                    },
                    {
                        "id": 2571,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/58e/58e76ab51a852851c17079501b25e1d1.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/7d4/7d46a83f8c25f1eec57fd6178047d528.mp4",
                        "640": "https://media.rawg.io/media/stories-640/58e/58e76ab51a852851c17079501b25e1d1.mp4",
                        "full": "https://media.rawg.io/media/stories/f26/f26ca04e8951d83e0eb4126bf1b2549f.mp4"
                    },
                    "video": "crU9dvS6uUU",
                    "preview": "https://media.rawg.io/media/stories-previews/fcc/fcc6558ed824a5fba2b7c5193e53ef27.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 2565,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 8780,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 6892,
                        "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 16,
                        "name": "Horror",
                        "slug": "horror",
                        "language": "eng",
                        "games_count": 18297,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    {
                        "id": 49,
                        "name": "Difficult",
                        "slug": "difficult",
                        "language": "eng",
                        "games_count": 7513,
                        "image_background": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1525,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 3516,
                        "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
                    },
                    {
                        "id": 63,
                        "name": "Zombies",
                        "slug": "zombies",
                        "language": "eng",
                        "games_count": 6063,
                        "image_background": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
                    },
                    {
                        "id": 131,
                        "name": "Fast-Paced",
                        "slug": "fast-paced",
                        "language": "eng",
                        "games_count": 6258,
                        "image_background": "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg"
                    },
                    {
                        "id": 120,
                        "name": "Memes",
                        "slug": "memes",
                        "language": "eng",
                        "games_count": 953,
                        "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                    },
                    {
                        "id": 271,
                        "name": "Remake",
                        "slug": "remake",
                        "language": "eng",
                        "games_count": 993,
                        "image_background": "https://media.rawg.io/media/screenshots/dba/dbacb00b6ad30fae992c93173171ded4.jpg"
                    },
                    {
                        "id": 270,
                        "name": "Blood",
                        "slug": "blood",
                        "language": "eng",
                        "games_count": 1372,
                        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                    },
                    {
                        "id": 187,
                        "name": "Demons",
                        "slug": "demons",
                        "language": "eng",
                        "games_count": 827,
                        "image_background": "https://media.rawg.io/media/games/202/2023cb28ef354720a2ca4652727687d0.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 22393,
                        "image": "https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg"
                    },
                    {
                        "id": 22394,
                        "image": "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg"
                    },
                    {
                        "id": 22398,
                        "image": "https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg"
                    },
                    {
                        "id": 22400,
                        "image": "https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg"
                    },
                    {
                        "id": 22402,
                        "image": "https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg"
                    },
                    {
                        "id": 22404,
                        "image": "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg"
                    }
                ]
            },
            {
                "id": 3070,
                "slug": "fallout-4",
                "name": "Fallout 4",
                "released": "2015-11-09",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
                "rating": 3.76,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 1085,
                        "percent": 48.01
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 611,
                        "percent": 27.04
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 442,
                        "percent": 19.56
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 122,
                        "percent": 5.4
                    }
                ],
                "ratings_count": 2244,
                "reviews_text_count": 11,
                "added": 8467,
                "added_by_status": {
                    "yet": 354,
                    "owned": 5387,
                    "beaten": 1399,
                    "toplay": 256,
                    "dropped": 837,
                    "playing": 234
                },
                "metacritic": 84,
                "playtime": 44,
                "suggestions_count": 435,
                "updated": "2020-07-06T04:52:40",
                "user_game": null,
                "reviews_count": 2260,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2015-11-09",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2015-11-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 18,
                            "name": "PlayStation 4",
                            "slug": "playstation4",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 5459,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2015-11-09",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 5,
                        "name": "RPG",
                        "slug": "role-playing-games-rpg",
                        "games_count": 32729,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 13248,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 9047,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 3252,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/427/427aa7b8aa4a789d76a7a6f1c6d26abe.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/adf/adffa53bdde5a8df6dc411fb35a21322.mp4",
                        "640": "https://media.rawg.io/media/stories-640/427/427aa7b8aa4a789d76a7a6f1c6d26abe.mp4",
                        "full": "https://media.rawg.io/media/stories/cce/ccebe893f98691720853ec9296d598d2.mp4"
                    },
                    "video": "5WlVFdlH_aM",
                    "preview": "https://media.rawg.io/media/stories-previews/a73/a732516c57f24d07bf523781fd2a3390.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 40849,
                        "name": "Steam Cloud",
                        "slug": "steam-cloud",
                        "language": "eng",
                        "games_count": 9428,
                        "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 24,
                        "name": "RPG",
                        "slug": "rpg",
                        "language": "eng",
                        "games_count": 10811,
                        "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                    },
                    {
                        "id": 118,
                        "name": "Story Rich",
                        "slug": "story-rich",
                        "language": "eng",
                        "games_count": 8330,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 3258,
                        "image_background": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 32,
                        "name": "Sci-fi",
                        "slug": "sci-fi",
                        "language": "eng",
                        "games_count": 8780,
                        "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 3359,
                        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 3008,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 1,
                        "name": "Survival",
                        "slug": "survival",
                        "language": "eng",
                        "games_count": 4239,
                        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Exploration",
                        "slug": "exploration",
                        "language": "eng",
                        "games_count": 8470,
                        "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 1233,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 97,
                        "name": "Action RPG",
                        "slug": "action-rpg",
                        "language": "eng",
                        "games_count": 2981,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 43,
                        "name": "Post-apocalyptic",
                        "slug": "post-apocalyptic",
                        "language": "eng",
                        "games_count": 1561,
                        "image_background": "https://media.rawg.io/media/games/df9/df988191048e92cf86dabd2987c47b62.jpg"
                    }
                ],
                "esrb_rating": null,
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 27994,
                        "image": "https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg"
                    },
                    {
                        "id": 27996,
                        "image": "https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg"
                    },
                    {
                        "id": 28000,
                        "image": "https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg"
                    },
                    {
                        "id": 28002,
                        "image": "https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg"
                    },
                    {
                        "id": 28004,
                        "image": "https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg"
                    },
                    {
                        "id": 28006,
                        "image": "https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg"
                    }
                ]
            },
            {
                "id": 3939,
                "slug": "payday-2",
                "name": "PAYDAY 2",
                "released": "2013-08-13",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
                "rating": 3.49,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 714,
                        "percent": 51.74
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 384,
                        "percent": 27.83
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 149,
                        "percent": 10.8
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 133,
                        "percent": 9.64
                    }
                ],
                "ratings_count": 1372,
                "reviews_text_count": 7,
                "added": 8453,
                "added_by_status": {
                    "yet": 332,
                    "owned": 6777,
                    "beaten": 443,
                    "toplay": 58,
                    "dropped": 766,
                    "playing": 77
                },
                "metacritic": 79,
                "playtime": 9,
                "suggestions_count": 461,
                "updated": "2019-11-05T16:34:08",
                "user_game": null,
                "reviews_count": 1380,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2013-08-13",
                        "requirements_en": {
                            "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows 7<br>\t</li><li><strong>Processor:</strong>2 GHz Intel Dual Core Processor<br>\t</li><li><strong>Memory:</strong>4 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (512MB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>31 GB HD space <br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>",
                            "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows 10<br>\t</li><li><strong>Processor:</strong>2.3 GHz Intel Quad Core Processor<br>\t</li><li><strong>Memory:</strong>8 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (1GB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>45 GB HD space<br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>"
                        },
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 44243,
                            "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                        },
                        "released_at": "2013-08-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2013-08-13",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    },
                    {
                        "platform": {
                            "id": 6,
                            "name": "Linux",
                            "slug": "linux"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Shooter",
                        "slug": "shooter",
                        "games_count": 33118,
                        "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 34027,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 27939,
                        "store": {
                            "id": 6,
                            "name": "Nintendo Store",
                            "slug": "nintendo",
                            "domain": "nintendo.com",
                            "games_count": 8533,
                            "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
                        }
                    },
                    {
                        "id": 10780,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    },
                    {
                        "id": 4258,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/754/75466cbed22b9f3f48a944180e5338f6.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/c8b/c8b3397011576e3b114655380e1dc03c.mp4",
                        "640": "https://media.rawg.io/media/stories-640/754/75466cbed22b9f3f48a944180e5338f6.mp4",
                        "full": "https://media.rawg.io/media/stories/022/022b01139b75e5d6fbf541aaa7a36c90.mp4"
                    },
                    "video": "hh69MawiCyA",
                    "preview": "https://media.rawg.io/media/stories-previews/f1d/f1da244bd787758d2f73f6ebe6cb623d.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 40847,
                        "name": "Steam Achievements",
                        "slug": "steam-achievements",
                        "language": "eng",
                        "games_count": 20335,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 7808,
                        "name": "steam-trading-cards",
                        "slug": "steam-trading-cards",
                        "language": "eng",
                        "games_count": 7604,
                        "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
                    },
                    {
                        "id": 40836,
                        "name": "Full controller support",
                        "slug": "full-controller-support",
                        "language": "eng",
                        "games_count": 9571,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 42,
                        "name": "Great Soundtrack",
                        "slug": "great-soundtrack",
                        "language": "eng",
                        "games_count": 3100,
                        "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 2565,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    {
                        "id": 8,
                        "name": "First-Person",
                        "slug": "first-person",
                        "language": "eng",
                        "games_count": 10205,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 30,
                        "name": "FPS",
                        "slug": "fps",
                        "language": "eng",
                        "games_count": 6530,
                        "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 11209,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 9,
                        "name": "Online Co-Op",
                        "slug": "online-co-op",
                        "language": "eng",
                        "games_count": 2407,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    },
                    {
                        "id": 15,
                        "name": "Stealth",
                        "slug": "stealth",
                        "language": "eng",
                        "games_count": 3368,
                        "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
                    },
                    {
                        "id": 80,
                        "name": "Tactical",
                        "slug": "tactical",
                        "language": "eng",
                        "games_count": 1989,
                        "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                    },
                    {
                        "id": 40837,
                        "name": "In-App Purchases",
                        "slug": "in-app-purchases",
                        "language": "eng",
                        "games_count": 1221,
                        "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
                    },
                    {
                        "id": 11,
                        "name": "Team-Based",
                        "slug": "team-based",
                        "language": "eng",
                        "games_count": 565,
                        "image_background": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 1627,
                        "image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
                    },
                    {
                        "id": 216,
                        "name": "Heist",
                        "slug": "heist",
                        "language": "eng",
                        "games_count": 220,
                        "image_background": "https://media.rawg.io/media/games/2ed/2ed38a102fe66a0ea98a8e09c660a458.jpg"
                    },
                    {
                        "id": 171,
                        "name": "PvE",
                        "slug": "pve",
                        "language": "eng",
                        "games_count": 598,
                        "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
                    },
                    {
                        "id": 274,
                        "name": "Gun Customization",
                        "slug": "gun-customization",
                        "language": "eng",
                        "games_count": 90,
                        "image_background": "https://media.rawg.io/media/screenshots/843/843670d1fe5c805f5c7ac77d715e3d24.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 5,
                    "name": "Adults Only",
                    "slug": "adults-only"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 74194,
                        "image": "https://media.rawg.io/media/screenshots/c38/c38f5aa479eebab20cedcdae370e6e18.jpg"
                    },
                    {
                        "id": 74195,
                        "image": "https://media.rawg.io/media/screenshots/442/442be5656b314e3289ecd1486b5282f1.jpg"
                    },
                    {
                        "id": 74196,
                        "image": "https://media.rawg.io/media/screenshots/c2c/c2ccfeaeda357f932d1899a91f298850.jpg"
                    },
                    {
                        "id": 74197,
                        "image": "https://media.rawg.io/media/screenshots/a18/a18da938def6ce6e5b571f1c20272ab0.jpg"
                    },
                    {
                        "id": 74198,
                        "image": "https://media.rawg.io/media/screenshots/a5d/a5da0d01195f01cdedec974d52892128.jpg"
                    },
                    {
                        "id": 74199,
                        "image": "https://media.rawg.io/media/screenshots/4ee/4ee5c3c8b850ab4ba8e04b9f5d5ab060.jpg"
                    }
                ]
            },
            {
                "id": 4459,
                "slug": "grand-theft-auto-iv",
                "name": "Grand Theft Auto IV",
                "released": "2008-04-29",
                "tba": false,
                "background_image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
                "rating": 4.24,
                "rating_top": 4,
                "ratings": [
                    {
                        "id": 4,
                        "title": "recommended",
                        "count": 859,
                        "percent": 45.04
                    },
                    {
                        "id": 5,
                        "title": "exceptional",
                        "count": 796,
                        "percent": 41.74
                    },
                    {
                        "id": 3,
                        "title": "meh",
                        "count": 207,
                        "percent": 10.85
                    },
                    {
                        "id": 1,
                        "title": "skip",
                        "count": 45,
                        "percent": 2.36
                    }
                ],
                "ratings_count": 1893,
                "reviews_text_count": 9,
                "added": 8343,
                "added_by_status": {
                    "yet": 210,
                    "owned": 5609,
                    "beaten": 1696,
                    "toplay": 125,
                    "dropped": 640,
                    "playing": 63
                },
                "metacritic": 95,
                "playtime": 9,
                "suggestions_count": 509,
                "updated": "2020-08-03T02:25:58",
                "user_game": null,
                "reviews_count": 1907,
                "saturated_color": "0f0f0f",
                "dominant_color": "0f0f0f",
                "platforms": [
                    {
                        "platform": {
                            "id": 4,
                            "name": "PC",
                            "slug": "pc",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 286551,
                            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                        },
                        "released_at": "2008-04-29",
                        "requirements_en": {
                            "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows Vista - Service Pack 1 / Windows XP - Service Pack 3                    <br>\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Core 2 Duo 1.8GHz, AMD Athlon X2 64 2.4GHz                    <br>\t\t\t\t\t</li><li><strong>Memory:</strong> 1.5GB XP / 1.5GB Vista                    <br>\t\t\t\t\t</li><li><strong>Graphics:</strong> 256MB Nvidia 7900 / 256MB ATI X1900                    <br>\t\t\t\t\t</li><li><strong>DirectX Version:</strong> DirectX 9.0c Compliant Card                     <br>\t\t\t\t\t</li><li><strong>Hard Drive:</strong> 16GB of Hard Disc Space                     <br>\t\t\t\t\t</li><li><strong>Sound Card:</strong> 5.1 Channel Audio Card                     <br>\t\t\t\t\t</li><li><strong>Other Requirements:</strong> Initial activation requires internet connection; Online play requires log-in to Games For Windows - Live and Rockstar Games Social Club (13+ to register); software installations required including Adobe Flash, DirectX, Microsoft’s .NET Framework 3.0, Games For Windows - LIVE, and Internet Explorer.                    </li></ul>"
                        },
                        "requirements_ru": {
                            "minimum": "Core 2 Duo/Athlon X2 64 2 ГГц, 1 Гб памяти, GeForce 7900/Radeon X1900,17 Гб на винчестере,XP SP3/Vista SP1,интернет-соединение",
                            "recommended": "Core 2 Quad/Phenom X4 2.5 ГГц,2 Гб памяти, GeForce GTX 280/Radeon HD 4870,17 Гб на винчестере,XP SP3/Vista SP1,интернет-соединение"
                        }
                    },
                    {
                        "platform": {
                            "id": 1,
                            "name": "Xbox One",
                            "slug": "xbox-one",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 4144,
                            "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                        },
                        "released_at": "2008-04-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 16,
                            "name": "PlayStation 3",
                            "slug": "playstation3",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 3616,
                            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                        },
                        "released_at": "2008-04-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    },
                    {
                        "platform": {
                            "id": 14,
                            "name": "Xbox 360",
                            "slug": "xbox360",
                            "image": null,
                            "year_end": null,
                            "year_start": null,
                            "games_count": 2695,
                            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                        },
                        "released_at": "2008-04-29",
                        "requirements_en": null,
                        "requirements_ru": null
                    }
                ],
                "parent_platforms": [
                    {
                        "platform": {
                            "id": 1,
                            "name": "PC",
                            "slug": "pc"
                        }
                    },
                    {
                        "platform": {
                            "id": 2,
                            "name": "PlayStation",
                            "slug": "playstation"
                        }
                    },
                    {
                        "platform": {
                            "id": 3,
                            "name": "Xbox",
                            "slug": "xbox"
                        }
                    }
                ],
                "genres": [
                    {
                        "id": 4,
                        "name": "Action",
                        "slug": "action",
                        "games_count": 104982,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Adventure",
                        "slug": "adventure",
                        "games_count": 74815,
                        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                    }
                ],
                "stores": [
                    {
                        "id": 465944,
                        "store": {
                            "id": 2,
                            "name": "Xbox Store",
                            "slug": "xbox-store",
                            "domain": "microsoft.com",
                            "games_count": 3756,
                            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                        }
                    },
                    {
                        "id": 4787,
                        "store": {
                            "id": 3,
                            "name": "PlayStation Store",
                            "slug": "playstation-store",
                            "domain": "store.playstation.com",
                            "games_count": 7135,
                            "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                        }
                    },
                    {
                        "id": 42864,
                        "store": {
                            "id": 7,
                            "name": "Xbox 360 Store",
                            "slug": "xbox360",
                            "domain": "marketplace.xbox.com",
                            "games_count": 1908,
                            "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
                        }
                    },
                    {
                        "id": 17290,
                        "store": {
                            "id": 1,
                            "name": "Steam",
                            "slug": "steam",
                            "domain": "store.steampowered.com",
                            "games_count": 47341,
                            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                        }
                    }
                ],
                "clip": {
                    "clip": "https://media.rawg.io/media/stories-640/be3/be37d466f17e6f07137a7abccb1db0b2.mp4",
                    "clips": {
                        "320": "https://media.rawg.io/media/stories-320/d4b/d4bdda80a368a827ccddcf1c7176bac6.mp4",
                        "640": "https://media.rawg.io/media/stories-640/be3/be37d466f17e6f07137a7abccb1db0b2.mp4",
                        "full": "https://media.rawg.io/media/stories/d6e/d6e9068e5fb35421f00728309550df0a.mp4"
                    },
                    "video": "C1SSQtsIutg",
                    "preview": "https://media.rawg.io/media/stories-previews/760/7603c0db02b132a6e90276f86360984b.jpg"
                },
                "tags": [
                    {
                        "id": 31,
                        "name": "Singleplayer",
                        "slug": "singleplayer",
                        "language": "eng",
                        "games_count": 96950,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    },
                    {
                        "id": 7,
                        "name": "Multiplayer",
                        "slug": "multiplayer",
                        "language": "eng",
                        "games_count": 23130,
                        "image_background": "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
                    },
                    {
                        "id": 13,
                        "name": "Atmospheric",
                        "slug": "atmospheric",
                        "language": "eng",
                        "games_count": 10910,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 18,
                        "name": "Co-op",
                        "slug": "co-op",
                        "language": "eng",
                        "games_count": 6051,
                        "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
                    },
                    {
                        "id": 36,
                        "name": "Open World",
                        "slug": "open-world",
                        "language": "eng",
                        "games_count": 3258,
                        "image_background": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
                    },
                    {
                        "id": 411,
                        "name": "cooperative",
                        "slug": "cooperative",
                        "language": "eng",
                        "games_count": 2565,
                        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                    },
                    {
                        "id": 149,
                        "name": "Third Person",
                        "slug": "third-person",
                        "language": "eng",
                        "games_count": 3359,
                        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
                    },
                    {
                        "id": 40845,
                        "name": "Partial Controller Support",
                        "slug": "partial-controller-support",
                        "language": "eng",
                        "games_count": 6892,
                        "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Funny",
                        "slug": "funny",
                        "language": "eng",
                        "games_count": 11209,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 193,
                        "name": "Classic",
                        "slug": "classic",
                        "language": "eng",
                        "games_count": 1525,
                        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                    },
                    {
                        "id": 26,
                        "name": "Gore",
                        "slug": "gore",
                        "language": "eng",
                        "games_count": 3516,
                        "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
                    },
                    {
                        "id": 37,
                        "name": "Sandbox",
                        "slug": "sandbox",
                        "language": "eng",
                        "games_count": 3008,
                        "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                    },
                    {
                        "id": 150,
                        "name": "Third-Person Shooter",
                        "slug": "third-person-shooter",
                        "language": "eng",
                        "games_count": 1233,
                        "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
                    },
                    {
                        "id": 62,
                        "name": "Moddable",
                        "slug": "moddable",
                        "language": "eng",
                        "games_count": 489,
                        "image_background": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
                    },
                    {
                        "id": 144,
                        "name": "Crime",
                        "slug": "crime",
                        "language": "eng",
                        "games_count": 1627,
                        "image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
                    },
                    {
                        "id": 148,
                        "name": "Dark Humor",
                        "slug": "dark-humor",
                        "language": "eng",
                        "games_count": 1345,
                        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
                    },
                    {
                        "id": 153,
                        "name": "Satire",
                        "slug": "satire",
                        "language": "eng",
                        "games_count": 646,
                        "image_background": "https://media.rawg.io/media/screenshots/5ce/5ce17393fdcd1a4356187e388fa21723.jpeg"
                    },
                    {
                        "id": 321,
                        "name": "Bowling",
                        "slug": "bowling",
                        "language": "eng",
                        "games_count": 84,
                        "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                    }
                ],
                "esrb_rating": {
                    "id": 4,
                    "name": "Mature",
                    "slug": "mature"
                },
                "short_screenshots": [
                    {
                        "id": -1,
                        "image": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
                    },
                    {
                        "id": 139042,
                        "image": "https://media.rawg.io/media/screenshots/07f/07f7cf80741ff306e4eca982c3e64ac8.jpg"
                    },
                    {
                        "id": 139043,
                        "image": "https://media.rawg.io/media/screenshots/fef/fefd51ec13aa33acbd796ef79bcef7cb.jpg"
                    },
                    {
                        "id": 139044,
                        "image": "https://media.rawg.io/media/screenshots/b78/b78ffd258d5793be704c380e572748bc.jpg"
                    },
                    {
                        "id": 139045,
                        "image": "https://media.rawg.io/media/screenshots/17c/17c85ab9dfc4fda8e1e5ba72932ef2bf.jpg"
                    },
                    {
                        "id": 139046,
                        "image": "https://media.rawg.io/media/screenshots/a12/a12ca99cc74c1e7eba7100b0891dd1e0.jpg"
                    },
                    {
                        "id": 139047,
                        "image": "https://media.rawg.io/media/screenshots/b25/b254f9729ae3f36a9ccffccaa01d5cf6.jpg"
                    }
                ]
            }
        ],
        "seo_title": "All Games",
        "seo_description": "",
        "seo_keywords": "",
        "seo_h1": "All Games",
        "noindex": false,
        "nofollow": false,
        "description": "",
        "filters": {
            "years": [
                {
                    "from": 2020,
                    "to": 2020,
                    "filter": "2020-01-01,2020-12-31",
                    "decade": 2020,
                    "years": [
                        {
                            "year": 2020,
                            "count": 131717,
                            "nofollow": false
                        }
                    ],
                    "nofollow": true,
                    "count": 131717
                },
                {
                    "from": 2010,
                    "to": 2019,
                    "filter": "2010-01-01,2019-12-31",
                    "decade": 2010,
                    "years": [
                        {
                            "year": 2019,
                            "count": 79238,
                            "nofollow": false
                        },
                        {
                            "year": 2018,
                            "count": 71205,
                            "nofollow": false
                        },
                        {
                            "year": 2017,
                            "count": 56230,
                            "nofollow": true
                        },
                        {
                            "year": 2016,
                            "count": 41090,
                            "nofollow": true
                        },
                        {
                            "year": 2015,
                            "count": 26250,
                            "nofollow": true
                        },
                        {
                            "year": 2014,
                            "count": 15463,
                            "nofollow": true
                        },
                        {
                            "year": 2013,
                            "count": 6237,
                            "nofollow": true
                        },
                        {
                            "year": 2012,
                            "count": 5271,
                            "nofollow": true
                        },
                        {
                            "year": 2011,
                            "count": 4215,
                            "nofollow": true
                        },
                        {
                            "year": 2010,
                            "count": 3792,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 308991
                },
                {
                    "from": 2000,
                    "to": 2009,
                    "filter": "2000-01-01,2009-12-31",
                    "decade": 2000,
                    "years": [
                        {
                            "year": 2009,
                            "count": 3021,
                            "nofollow": true
                        },
                        {
                            "year": 2008,
                            "count": 1947,
                            "nofollow": true
                        },
                        {
                            "year": 2007,
                            "count": 1489,
                            "nofollow": true
                        },
                        {
                            "year": 2006,
                            "count": 1199,
                            "nofollow": true
                        },
                        {
                            "year": 2005,
                            "count": 1080,
                            "nofollow": true
                        },
                        {
                            "year": 2004,
                            "count": 1083,
                            "nofollow": true
                        },
                        {
                            "year": 2003,
                            "count": 1072,
                            "nofollow": true
                        },
                        {
                            "year": 2002,
                            "count": 939,
                            "nofollow": true
                        },
                        {
                            "year": 2001,
                            "count": 1059,
                            "nofollow": true
                        },
                        {
                            "year": 2000,
                            "count": 932,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 13821
                },
                {
                    "from": 1990,
                    "to": 1999,
                    "filter": "1990-01-01,1999-12-31",
                    "decade": 1990,
                    "years": [
                        {
                            "year": 1999,
                            "count": 715,
                            "nofollow": true
                        },
                        {
                            "year": 1998,
                            "count": 658,
                            "nofollow": true
                        },
                        {
                            "year": 1997,
                            "count": 821,
                            "nofollow": true
                        },
                        {
                            "year": 1996,
                            "count": 678,
                            "nofollow": true
                        },
                        {
                            "year": 1995,
                            "count": 809,
                            "nofollow": true
                        },
                        {
                            "year": 1994,
                            "count": 749,
                            "nofollow": true
                        },
                        {
                            "year": 1993,
                            "count": 703,
                            "nofollow": true
                        },
                        {
                            "year": 1992,
                            "count": 605,
                            "nofollow": true
                        },
                        {
                            "year": 1991,
                            "count": 532,
                            "nofollow": true
                        },
                        {
                            "year": 1990,
                            "count": 499,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 6769
                },
                {
                    "from": 1980,
                    "to": 1989,
                    "filter": "1980-01-01,1989-12-31",
                    "decade": 1980,
                    "years": [
                        {
                            "year": 1989,
                            "count": 393,
                            "nofollow": true
                        },
                        {
                            "year": 1988,
                            "count": 296,
                            "nofollow": true
                        },
                        {
                            "year": 1987,
                            "count": 324,
                            "nofollow": true
                        },
                        {
                            "year": 1986,
                            "count": 240,
                            "nofollow": true
                        },
                        {
                            "year": 1985,
                            "count": 220,
                            "nofollow": true
                        },
                        {
                            "year": 1984,
                            "count": 179,
                            "nofollow": true
                        },
                        {
                            "year": 1983,
                            "count": 202,
                            "nofollow": true
                        },
                        {
                            "year": 1982,
                            "count": 140,
                            "nofollow": true
                        },
                        {
                            "year": 1981,
                            "count": 63,
                            "nofollow": true
                        },
                        {
                            "year": 1980,
                            "count": 34,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 2091
                },
                {
                    "from": 1970,
                    "to": 1979,
                    "filter": "1970-01-01,1979-12-31",
                    "decade": 1970,
                    "years": [
                        {
                            "year": 1979,
                            "count": 15,
                            "nofollow": true
                        },
                        {
                            "year": 1978,
                            "count": 17,
                            "nofollow": true
                        },
                        {
                            "year": 1977,
                            "count": 12,
                            "nofollow": true
                        },
                        {
                            "year": 1976,
                            "count": 7,
                            "nofollow": true
                        },
                        {
                            "year": 1975,
                            "count": 2,
                            "nofollow": true
                        },
                        {
                            "year": 1974,
                            "count": 1,
                            "nofollow": true
                        },
                        {
                            "year": 1973,
                            "count": 1,
                            "nofollow": true
                        },
                        {
                            "year": 1972,
                            "count": 1,
                            "nofollow": true
                        },
                        {
                            "year": 1971,
                            "count": 5,
                            "nofollow": true
                        },
                        {
                            "year": 1970,
                            "count": 1,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 62
                },
                {
                    "from": 1960,
                    "to": 1969,
                    "filter": "1960-01-01,1969-12-31",
                    "decade": 1960,
                    "years": [
                        {
                            "year": 1962,
                            "count": 1,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 1
                },
                {
                    "from": 1950,
                    "to": 1959,
                    "filter": "1950-01-01,1959-12-31",
                    "decade": 1950,
                    "years": [
                        {
                            "year": 1957,
                            "count": 1,
                            "nofollow": true
                        }
                    ],
                    "nofollow": true,
                    "count": 1
                }
            ]
        },
        "nofollow_collections": [
            "stores"
        ]
    }
    };
    
    //this.handleCards=this.handleCards.bind(this)
  }

  

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <Container>
          {console.log('kkkkkkkkkkkkkkk',this.state.gameData.results)}
          <div  >
            <CardList className='card-container' games={this.state.gameData.results}></CardList>
            </div>
          </Container>

          <Button className='btn btn-danger'>bbb</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
