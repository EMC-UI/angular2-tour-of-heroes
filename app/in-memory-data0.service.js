"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            {
                id: 1011334,
                name: "3-D Man",
                description: "",
                modified: "2014-04-29T14:18:17-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011334",
                comics: {
                    available: 11,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
                            name: "Avengers: The Initiative (2007) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24571",
                            name: "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21546",
                            name: "Avengers: The Initiative (2007) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21741",
                            name: "Avengers: The Initiative (2007) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
                            name: "Avengers: The Initiative (2007) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22299",
                            name: "Avengers: The Initiative (2007) #18"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22300",
                            name: "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22506",
                            name: "Avengers: The Initiative (2007) #19"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10223",
                            name: "Marvel Premiere (1972) #35"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10224",
                            name: "Marvel Premiere (1972) #36"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10225",
                            name: "Marvel Premiere (1972) #37"
                        }],
                    returned: 11
                },
                series: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
                            name: "Avengers: The Initiative (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2045",
                            name: "Marvel Premiere (1972 - 1981)"
                        }],
                    returned: 2
                },
                stories: {
                    available: 17,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19947",
                            name: "Cover #19947",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19948",
                            name: "The 3-D Man!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19949",
                            name: "Cover #19949",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19950",
                            name: "The Devil's Music!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19951",
                            name: "Cover #19951",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19952",
                            name: "Code-Name:  The Cold Warrior!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/47185",
                            name: "Avengers: The Initiative (2007) #14 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/47499",
                            name: "Avengers: The Initiative (2007) #15 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/47792",
                            name: "Avengers: The Initiative (2007) #16",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/47793",
                            name: "Avengers: The Initiative (2007) #16 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/48362",
                            name: "Avengers: The Initiative (2007) #17 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49104",
                            name: "Avengers: The Initiative (2007) #18 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49106",
                            name: "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49888",
                            name: "Avengers: The Initiative (2007) #19",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49889",
                            name: "Avengers: The Initiative (2007) #19 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/54371",
                            name: "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/96303",
                            name: "Deadpool (1997) #44",
                            type: "interiorStory"
                        }],
                    returned: 17
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                            name: "Secret Invasion"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1017100,
                name: "A-Bomb (HAS)",
                description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
                modified: "2013-09-18T15:54:04-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1017100",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017100/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009144,
                name: "A.I.M.",
                description: "AIM is a terrorist organization bent on destroying the world.",
                modified: "2013-10-17T14:41:30-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009144",
                comics: {
                    available: 33,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009144/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36763",
                            name: "Ant-Man & the Wasp (2010) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17553",
                            name: "Avengers (1998) #67"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7340",
                            name: "Avengers (1963) #87"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1170",
                            name: "Avengers Vol. 2: Red Zone (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1214",
                            name: "Avengers Vol. II: Red Zone (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12787",
                            name: "Captain America (1998) #28"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20367",
                            name: "Defenders (1972) #57"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/31068",
                            name: "Incredible Hulks (2009) #606 (VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36737",
                            name: "Marvel Adventures Super Heroes (2010) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2110",
                            name: "Marvel Masterworks: Captain America Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1130",
                            name: "Marvel Masterworks: Captain America Vol. 1 - 2nd Edition (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2319",
                            name: "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2820",
                            name: "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2001",
                            name: "Marvel Masterworks: The Invincible Iron Man Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17468",
                            name: "Marvel Masterworks: The Invincible Iron Man Vol. 1 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1164",
                            name: "Marvel Masterworks: The Silver Surfer Vol. 2 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/48816",
                            name: "Secret Avengers (2013) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/48817",
                            name: "Secret Avengers (2013) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/48818",
                            name: "Secret Avengers (2013) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11068",
                            name: "Strange Tales (1951) #146"
                        }],
                    returned: 20
                },
                series: {
                    available: 23,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009144/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13082",
                            name: "Ant-Man & the Wasp (2010 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/354",
                            name: "Avengers (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
                            name: "Avengers (1963 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/227",
                            name: "Avengers Vol. 2: Red Zone (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/271",
                            name: "Avengers Vol. II: Red Zone (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1997",
                            name: "Captain America (1998 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3743",
                            name: "Defenders (1972 - 1986)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8842",
                            name: "Incredible Hulks (2009 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9718",
                            name: "Marvel Adventures Super Heroes (2010 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1506",
                            name: "Marvel Masterworks: Captain America Vol. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/189",
                            name: "Marvel Masterworks: Captain America Vol. 1 - 2nd Edition (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1468",
                            name: "Marvel Masterworks: Doctor Strange Vol. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1494",
                            name: "Marvel Masterworks: The Invincible Iron Man Vol. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3300",
                            name: "Marvel Masterworks: The Invincible Iron Man Vol. 1 (0000 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/222",
                            name: "Marvel Masterworks: The Silver Surfer Vol. 2 (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/17547",
                            name: "Secret Avengers (2013 - 2014)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2076",
                            name: "Strange Tales (1951 - 1968)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2079",
                            name: "Tales of Suspense (1959 - 1968)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13213",
                            name: "Taskmaster (2010 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 31,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009144/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10253",
                            name: "When the Unliving Strike",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10255",
                            name: "Cover #10255",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10256",
                            name: "The Enemy Within!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10259",
                            name: "Death Before Dishonor!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10261",
                            name: "Cover #10261",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10262",
                            name: "The End of A.I.M.!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/11921",
                            name: "The Red Skull Lives!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/11930",
                            name: "He Who Holds the Cosmic Cube",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/11936",
                            name: "The Maddening Mystery of the Inconceivable Adaptoid!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/11981",
                            name: "If This Be... Modok",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/11984",
                            name: "A Time to Die -- A Time to Live!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/11995",
                            name: "At the Mercy of the Maggia",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15243",
                            name: "Look Homeward, Avenger",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28233",
                            name: "In Sin Airy X",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28971",
                            name: "[The Brothers Part I]",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/34426",
                            name: "The Red Skull Lives!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/34435",
                            name: "He Who Holds the Cosmic Cube",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/34441",
                            name: "The Maddening Mystery of the Inconceivable Adaptoid!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/34486",
                            name: "If This Be... Modok",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/34489",
                            name: "A Time to Die -- A Time to Live!",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009144/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009146,
                name: "Abomination (Emil Blonsky)",
                description: "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
                modified: "2012-03-20T12:32:12-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009146",
                comics: {
                    available: 43,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009146/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17547",
                            name: "Avengers (1998) #61"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17548",
                            name: "Avengers (1998) #62"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1098",
                            name: "Avengers Vol. 1: World Trust (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8557",
                            name: "Earth X (1999) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
                            name: "Earth X (New (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20863",
                            name: "Hulk (2008) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23677",
                            name: "Hulk Vol. 1: Red Hulk (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2499",
                            name: "Hulk: Destruction (2005) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14425",
                            name: "Incredible Hulk (1999) #25"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14428",
                            name: "Incredible Hulk (1999) #28"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14450",
                            name: "Incredible Hulk (1999) #50"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14451",
                            name: "Incredible Hulk (1999) #51"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8948",
                            name: "Incredible Hulk (1962) #137"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9006",
                            name: "Incredible Hulk (1962) #195"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9007",
                            name: "Incredible Hulk (1962) #196"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9125",
                            name: "Incredible Hulk (1962) #314"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9193",
                            name: "Incredible Hulk (1962) #382"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9194",
                            name: "Incredible Hulk (1962) #383"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9195",
                            name: "Incredible Hulk (1962) #384"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9243",
                            name: "Incredible Hulk (1962) #432"
                        }],
                    returned: 20
                },
                series: {
                    available: 24,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009146/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/354",
                            name: "Avengers (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/158",
                            name: "Avengers Vol. 1: World Trust (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/378",
                            name: "Earth X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1806",
                            name: "Earth X (New (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3374",
                            name: "Hulk (2008 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6831",
                            name: "Hulk Vol. 1: Red Hulk (2009 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/924",
                            name: "Hulk: Destruction (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
                            name: "Incredible Hulk (1962 - 1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/465",
                            name: "Incredible Hulk (1999 - 2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2983",
                            name: "Incredible Hulk Annual (1968 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/212",
                            name: "Incredible Hulk Vol. 4: Abominable (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/244",
                            name: "Incredible Hulk Vol. IV: Abominable (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8842",
                            name: "Incredible Hulks (2009 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2572",
                            name: "Iron Man (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/977",
                            name: "Irredeemable Ant-Man (2006 - 2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2423",
                            name: "Irredeemable Ant-Man Vol. 1: Low-Life (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3722",
                            name: "Killraven (2002 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2437",
                            name: "Killraven Premiere (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1671",
                            name: "Marvel Masterworks: The Incredible Hulk Vol.3 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2301",
                            name: "Marvel Super-Heroes (1992 - 1993)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 39,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009146/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4946",
                            name: "4 of 4 - 4XLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5496",
                            name: "1 of 6 -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12370",
                            name: "Cover #12370",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12372",
                            name: "Whosoever Harms the Hulk..!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18419",
                            name: "[none]",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18420",
                            name: "The Stars Mine Enemy",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18537",
                            name: "Warfare In Wonderland!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18539",
                            name: "The Abomination Proclamation!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18776",
                            name: "Cover #18776",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18914",
                            name: "Moving On",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18916",
                            name: "Green Canard",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18918",
                            name: "Small Talk",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19024",
                            name: "Shades of Green",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19081",
                            name: "Who Shall Fear The Green Goliath?",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19082",
                            name: "Last Legs",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19119",
                            name: "The Great Astonishment - Chapter One: Auld Lang Syne",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19122",
                            name: "The Great Astonishment - Chapter Two: The Edge of Universal Pain",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19124",
                            name: "The Strangest Story Of All Time!!",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19125",
                            name: "The Great Astonishment - Conclusion: It's All True!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24932",
                            name: "Earth X Chapter Seven",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009146/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/296",
                            name: "Chaos War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/253",
                            name: "Infinity Gauntlet"
                        }],
                    returned: 2
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Abomination?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009146/abomination_emil_blonsky?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009148,
                name: "Absorbing Man",
                description: "",
                modified: "2013-10-24T14:32:08-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009148",
                comics: {
                    available: 44,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009148/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36481",
                            name: "Avengers Academy (2010) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36480",
                            name: "Avengers Academy (2010) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36479",
                            name: "Avengers Academy (2010) #18"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36484",
                            name: "Avengers Academy (2010) #19"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36489",
                            name: "Avengers Academy (2010) #21"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6935",
                            name: "Avengers Annual (1967) #20"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12783",
                            name: "Captain America (1998) #24"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20427",
                            name: "Dazzler (1981) #18"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20428",
                            name: "Dazzler (1981) #19"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/41433",
                            name: "Fear Itself (2010) #2 (3rd Printing Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38452",
                            name: "Fear Itself: Fellowship of Fear (2011) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39848",
                            name: "Fear Itself: The Worthy (2011) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/40977",
                            name: "Fear Itself: The Worthy (2011) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55857",
                            name: "Illuminati (2015) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9072",
                            name: "Incredible Hulk (1962) #261"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/29794",
                            name: "Iron Man 2.0 (2011) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/29795",
                            name: "Iron Man 2.0 (2011) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9698",
                            name: "Journey Into Mystery (1952) #122"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5234",
                            name: "Marvel Adventures Fantastic Four (2005) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6277",
                            name: "Marvel Adventures Fantastic Four Vol. 5: All 4 One, 4 for All (Digest)"
                        }],
                    returned: 20
                },
                series: {
                    available: 30,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009148/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9086",
                            name: "Avengers Academy (2010 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1988",
                            name: "Avengers Annual (1967 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1997",
                            name: "Captain America (1998 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3745",
                            name: "Dazzler (1981 - 1986)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13691",
                            name: "Fear Itself (2010 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13857",
                            name: "Fear Itself: Fellowship of Fear (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13827",
                            name: "Fear Itself: The Worthy (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20084",
                            name: "Heroes for Hire (1997 - 1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20552",
                            name: "Illuminati (2015 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
                            name: "Incredible Hulk (1962 - 1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9924",
                            name: "Iron Man 2.0 (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2032",
                            name: "Journey Into Mystery (1952 - 1966)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/926",
                            name: "Marvel Adventures Fantastic Four (2005 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1959",
                            name: "Marvel Adventures Fantastic Four Vol. 5: All 4 One, 4 for All (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14492",
                            name: "Marvel Masterworks: The Mighty Thor Vol. 3 (2011 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14491",
                            name: "Marvel Masterworks: The Mighty Thor Vol. 3 Variant (DM Only) (2011 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1588",
                            name: "Marvel Masterworks: The Mighty Thor Vol. 4 (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2301",
                            name: "Marvel Super-Heroes (1992 - 1993)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1866",
                            name: "Mighty Avengers (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2059",
                            name: "Paradise X (2002 - 2003)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 45,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009148/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4988",
                            name: "1 of 1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/11028",
                            name: "Journey Into Mystery (1952) #122",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/16688",
                            name: "Thor (1966) #206",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/16691",
                            name: "Thor (1966) #207",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17049",
                            name: "Thor (1966) #375",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17050",
                            name: "Shadows of the Past",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17051",
                            name: "Heroes Always Win...Don't They?",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17342",
                            name: "Cover #17342",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17412",
                            name: "A Wing and a Prayer",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18670",
                            name: "Encounter On Easter Island!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21604",
                            name: "Secret Wars (1984) #6",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21606",
                            name: "Secret Wars (1984) #7",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26016",
                            name: "Paradise X Issue 0",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26025",
                            name: "Cover #26025",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28708",
                            name: "The Hunted Part 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31596",
                            name: "",
                            type: "pinup"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31597",
                            name: "Downtown Demolition",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/37745",
                            name: "A Wing and a Prayer",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/39926",
                            name: "And the Absorbing Man Makes Three!",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/39927",
                            name: "Hammer Time!",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009148/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/302",
                            name: "Fear Itself"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/270",
                            name: "Secret Wars"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/309",
                            name: "Shattered Heroes"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/273",
                            name: "Siege"
                        }],
                    returned: 4
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/84/absorbing_man?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Absorbing_Man?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009148/absorbing_man?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009149,
                name: "Abyss",
                description: "",
                modified: "2014-04-29T14:10:43-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009149",
                comics: {
                    available: 8,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009149/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13943",
                            name: "Uncanny X-Men (1963) #402"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13945",
                            name: "Uncanny X-Men (1963) #404"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13946",
                            name: "Uncanny X-Men (1963) #405"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13947",
                            name: "Uncanny X-Men (1963) #406"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13970",
                            name: "Uncanny X-Men (1963) #429"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13972",
                            name: "Uncanny X-Men (1963) #431"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12386",
                            name: "X-Men: Alpha (1994) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2539",
                            name: "X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)"
                        }],
                    returned: 8
                },
                series: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009149/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2104",
                            name: "X-Men: Alpha (1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1583",
                            name: "X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)"
                        }],
                    returned: 3
                },
                stories: {
                    available: 8,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009149/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26281",
                            name: "A Beginning",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28352",
                            name: "Utility of Myth",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28356",
                            name: "Army Ants",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28358",
                            name: "Ballroom Blitzkrieg",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28360",
                            name: "Staring Contests are for Suckers",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28407",
                            name: "The Draco Part One: Sins of the Father",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28411",
                            name: "The Draco Part Three",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28413",
                            name: "The Draco Part Four",
                            type: "interiorStory"
                        }],
                    returned: 8
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009149/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
                            name: "Age of Apocalypse"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Abyss_(alien)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010903,
                name: "Abyss (Age of Apocalypse)",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010903",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010903/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010903/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010903/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010903/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Abyss_(Age_of_Apocalypse)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010903/abyss_age_of_apocalypse?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010354,
                name: "Adam Warlock",
                description: "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
                modified: "2013-08-07T13:49:06-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010354",
                comics: {
                    available: 123,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010354/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17271",
                            name: "Annihilation: Conquest (2007) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17405",
                            name: "Annihilation: Conquest (2007) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17645",
                            name: "Annihilation: Conquest (2007) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20686",
                            name: "Annihilation: Conquest (2007) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20885",
                            name: "Annihilation: Conquest (2007) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21016",
                            name: "Annihilation: Conquest (2007) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12412",
                            name: "Avengers Forever (1998) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1033",
                            name: "Avengers Legends Vol. I: Avengers Forever (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20731",
                            name: "Clandestine Classic Premiere (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20187",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #27"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20193",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #32"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20197",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #36"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8560",
                            name: "Earth X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8552",
                            name: "Earth X (1999) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8550",
                            name: "Earth X (1999) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
                            name: "Earth X (New (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12975",
                            name: "Fantastic Four (1961) #172"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13195",
                            name: "Fantastic Four (1961) #370"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/25305",
                            name: "Guardians of the Galaxy (2008) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8988",
                            name: "Incredible Hulk (1962) #177"
                        }],
                    returned: 20
                },
                series: {
                    available: 52,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010354/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3061",
                            name: "Annihilation: Conquest (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2111",
                            name: "Avengers Forever (1998 - 2001)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/93",
                            name: "Avengers Legends Vol. I: Avengers Forever (2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3874",
                            name: "Clandestine Classic Premiere (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3741",
                            name: "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/378",
                            name: "Earth X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1806",
                            name: "Earth X (New (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
                            name: "Fantastic Four (1961 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/4885",
                            name: "Guardians of the Galaxy (2008 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
                            name: "Incredible Hulk (1962 - 1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2983",
                            name: "Incredible Hulk Annual (1968 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6673",
                            name: "Infinity Crusade (1993 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6449",
                            name: "Infinity Crusade Vol. 1 (2008 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2023",
                            name: "Infinity Gauntlet (1991)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2024",
                            name: "Infinity War (1992)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2039",
                            name: "Marvel Comics Presents (1988 - 1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1697",
                            name: "Marvel Comics Presents: Wolverine Vol. 4 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1837",
                            name: "Marvel Masterworks: Warlock Vol. (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2045",
                            name: "Marvel Premiere (1972 - 1981)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2301",
                            name: "Marvel Super-Heroes (1992 - 1993)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 142,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010354/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1412",
                            name: "Cover #1412",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1602",
                            name: "Cover #1602",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1800",
                            name: "Cover #1800",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1842",
                            name: "Cover #1842",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12569",
                            name: "Cry, the Bedeviled Planet!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13121",
                            name: "Forever Evil",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18500",
                            name: "Peril of the Paired Planets",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18501",
                            name: "Peril of the Paired Planets",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18503",
                            name: "Triumph On Terra-Two",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19847",
                            name: "Cover #19847",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19848",
                            name: "Performance",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19859",
                            name: "Days of Future Present Part 4",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19860",
                            name: "You Must Remember This",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19883",
                            name: "The Adventures of Lockheed the Space Dragon and His Pet Girl, Kitty",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19884",
                            name: "The Saga of Storm: Goddess of Thunder",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19885",
                            name: "There's No Place Like Home",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19887",
                            name: "Cover #19887",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19888",
                            name: "And Men Shall Call Him Warlock",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19911",
                            name: "Cover #19911",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19912",
                            name: "The Hounds of Helios",
                            type: ""
                        }],
                    returned: 20
                },
                events: {
                    available: 10,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010354/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/293",
                            name: "Annihilation: Conquest"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/233",
                            name: "Atlantis Attacks"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/235",
                            name: "Blood and Thunder"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/240",
                            name: "Days of Future Present"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/302",
                            name: "Fear Itself"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/253",
                            name: "Infinity Gauntlet"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/29",
                            name: "Infinity War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/263",
                            name: "Mutant Massacre"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/271",
                            name: "Secret Wars II"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/280",
                            name: "X-Tinction Agenda"
                        }],
                    returned: 10
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2854/adam_warlock?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Warlock,_Adam?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010846,
                name: "Aegis (Trey Rollins)",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d",
                    extension: "gif"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010846",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010846/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010846/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010846/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010846/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/95/aegis?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Aegis_%28Trey_Rollins%29?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010846/aegis_trey_rollins?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011297,
                name: "Agent Brand",
                description: "",
                modified: "2013-10-24T13:09:30-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011297",
                comics: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011297/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5477",
                            name: "Astonishing X-Men (2004) #19 (Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38318",
                            name: "Astonishing X-Men (2004) #38"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38319",
                            name: "Astonishing X-Men (2004) #40"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/40024",
                            name: "Astonishing X-Men (2004) #40 (I Am Captain America Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39890",
                            name: "Heralds (Trade Paperback)"
                        }],
                    returned: 5
                },
                series: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011297/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                            name: "Astonishing X-Men (2004 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13065",
                            name: "Heralds (2010 - Present)"
                        }],
                    returned: 2
                },
                stories: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011297/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3353",
                            name: "Interior #3353",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/89900",
                            name: "Astonishing X-Men (2004) #38",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/90548",
                            name: "Heralds TPB",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/90819",
                            name: "Interior #90819",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/90853",
                            name: " Interior  Astonishing X-Men (2004) #40",
                            type: "interiorStory"
                        }],
                    returned: 5
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011297/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/100/agent_brand?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Agent_Brand?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011297/agent_brand?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009150,
                name: "Agent Zero",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009150",
                comics: {
                    available: 20,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009150/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3357",
                            name: "Weapon X: Days of Future Now (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2438",
                            name: "Weapon X: Days of Future Now (2005) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18293",
                            name: "What If? (1989)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14182",
                            name: "Wolverine (1988) #60"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14183",
                            name: "Wolverine (1988) #61"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14184",
                            name: "Wolverine (1988) #62"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14185",
                            name: "Wolverine (1988) #63"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14186",
                            name: "Wolverine (1988) #64"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14189",
                            name: "Wolverine (1988) #67"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14190",
                            name: "Wolverine (1988) #68"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14211",
                            name: "Wolverine (1988) #87"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14107",
                            name: "Wolverine (1988) #163"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14110",
                            name: "Wolverine (1988) #166"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14121",
                            name: "Wolverine (1988) #176"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1023",
                            name: "Wolverine/Deadpool: Weapon X (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18176",
                            name: "X-Man (1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14282",
                            name: "X-Men (1991) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14293",
                            name: "X-Men (1991) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18132",
                            name: "X-Men Unlimited (1993) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18116",
                            name: "X-Men Unlimited (1993) #15"
                        }],
                    returned: 20
                },
                series: {
                    available: 8,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009150/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/869",
                            name: "Weapon X: Days of Future Now (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1478",
                            name: "Weapon X: Days of Future Now (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3648",
                            name: "What If? (1989 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2262",
                            name: "Wolverine (1988 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/84",
                            name: "Wolverine/Deadpool: Weapon X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3643",
                            name: "X-Man (1995 - 2000)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2265",
                            name: "X-Men (1991 - 2001)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3637",
                            name: "X-Men Unlimited (1993 - 2003)"
                        }],
                    returned: 8
                },
                stories: {
                    available: 20,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009150/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4606",
                            name: "3 of 5 - 5XLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28706",
                            name: "The Hunted Part 2",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28712",
                            name: "The Hunted Part 5",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28738",
                            name: "The Logan Files Epilogue",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28881",
                            name: "Counting Coup",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28883",
                            name: "Nightmare Quest!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28885",
                            name: "Reunion!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28887",
                            name: "Bastions of Glory!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28889",
                            name: "What Goes Around...",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28895",
                            name: "Valley O' Death",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28897",
                            name: "Epsilon Red",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28941",
                            name: "Showdown In Lowtown",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29125",
                            name: "Last Stand",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29139",
                            name: "Over...Again",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38511",
                            name: "Second Contact",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38554",
                            name: "Among Us--A Sabretooth",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38555",
                            name: "The Whispers Scream",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38556",
                            name: "Sabretooth Vs. Maverick: Severed Ties",
                            type: "pinup"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38650",
                            name: "Maverick",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38903",
                            name: "Maverick",
                            type: ""
                        }],
                    returned: 20
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009150/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/102/agent_zero?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Agent_Zero?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009150/agent_zero?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011198,
                name: "Agents of Atlas",
                description: "",
                modified: "2010-11-17T14:36:25-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011198",
                comics: {
                    available: 31,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011198/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6318",
                            name: "Agents of Atlas (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23659",
                            name: "Agents of Atlas (2009) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4801",
                            name: "Agents of Atlas (2006) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23660",
                            name: "Agents of Atlas (2009) #1 (50/50 COVER)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5089",
                            name: "Agents of Atlas (2006) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23825",
                            name: "Agents of Atlas (2009) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/27402",
                            name: "Agents of Atlas (2009) #2 (BACHALO 2ND PRINTING VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23824",
                            name: "Agents of Atlas (2009) #2 (MCGUINNESS VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5241",
                            name: "Agents of Atlas (2006) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24015",
                            name: "Agents of Atlas (2009) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24016",
                            name: "Agents of Atlas (2009) #3 (MCGUINNESS VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24017",
                            name: "Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5404",
                            name: "Agents of Atlas (2006) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24219",
                            name: "Agents of Atlas (2009) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24221",
                            name: "Agents of Atlas (2009) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5665",
                            name: "Agents of Atlas (2006) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24222",
                            name: "Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24360",
                            name: "Agents of Atlas (2009) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5842",
                            name: "Agents of Atlas (2006) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24361",
                            name: "Agents of Atlas (2009) #7"
                        }],
                    returned: 20
                },
                series: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011198/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1097",
                            name: "Agents of Atlas (2006 - 2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6807",
                            name: "Agents of Atlas (2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1980",
                            name: "Agents of Atlas (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9181",
                            name: "Avengers Vs. Atlas (2010)"
                        }],
                    returned: 4
                },
                stories: {
                    available: 38,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011198/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6008",
                            name: "1 of 6 - 6 XLS-",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6009",
                            name: "1 of 6 - 6 XLS-",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6010",
                            name: "2 of 6 - 6 XLS -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6011",
                            name: "2 of 6 - 6 XLS -",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6012",
                            name: "3 of 6 - 6 XLS -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6013",
                            name: "3 of 6 - 6 XLS -",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6014",
                            name: "4 of 6 - 6 XLS -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6015",
                            name: "4 of 6 - 6 XLS -",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6016",
                            name: "5 of 6 - 6 XLS -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6017",
                            name: "5 of 6 - 6 XLS -",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6018",
                            name: "5 of 6 - Story A - 6XLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6019",
                            name: "5 of 6 - Story A - 6XLS",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52393",
                            name: "1 of 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52395",
                            name: "1 of 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52861",
                            name: "2 of 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52863",
                            name: "2 of 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53263",
                            name: "3 of 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53265",
                            name: "3 of 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53266",
                            name: "3 of 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53669",
                            name: "1 of 2",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011198/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/318",
                            name: "Dark Reign"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/103/agents_of_atlas?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Agents_of_Atlas?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011198/agents_of_atlas?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011136,
                name: "Air-Walker (Gabriel Lan)",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011136",
                comics: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011136/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4108",
                            name: "Annihilation: Silver Surfer (2006) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5589",
                            name: "Heroes Reborn: Iron Man (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16330",
                            name: "Iron Man (1996) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16331",
                            name: "Iron Man (1996) #12"
                        }],
                    returned: 4
                },
                series: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011136/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1078",
                            name: "Annihilation: Silver Surfer (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1814",
                            name: "Heroes Reborn: Iron Man (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13577",
                            name: "Iron Man (1996 - 1998)"
                        }],
                    returned: 3
                },
                stories: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011136/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5925",
                            name: "Annihilation: Silver Surfer (2006) #1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/34082",
                            name: "Magical Mystery Tour",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/34085",
                            name: "Matters of the Heart",
                            type: "interiorStory"
                        }],
                    returned: 3
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011136/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/229",
                            name: "Annihilation"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/109/air-walker?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Air-Walker_(Gabriel_Lan)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011136/air-walker_gabriel_lan?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011176,
                name: "Ajak",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011176",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011176/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011176/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011176/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011176/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/111/ajak?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Ajak?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011176/ajak?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010870,
                name: "Ajaxis",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010870",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010870/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010870/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010870/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010870/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/113/ajaxis?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Ajaxis?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010870/ajaxis?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010836,
                name: "Alex Power",
                description: "",
                modified: "2011-10-27T09:57:58-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce5a385a2e82",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010836",
                comics: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010836/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/35509",
                            name: "Amazing Spider-Man (1999) #673"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/31366",
                            name: "Thor and the Warriors Four (2010) #1"
                        }],
                    returned: 2
                },
                series: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010836/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                            name: "Amazing Spider-Man (1999 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9731",
                            name: "Thor and the Warriors Four (2010)"
                        }],
                    returned: 2
                },
                stories: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010836/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/71416",
                            name: "Cover #71416",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/95451",
                            name: "Amazing Spider-Man (1999) #673",
                            type: "cover"
                        }],
                    returned: 2
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010836/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/1387/alex_power?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010836/alex_power?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010755,
                name: "Alex Wilder",
                description: "Despite being the only one of the Runaways without any superhuman abilities or tech, Alex Wilder became the de facto leader of the group due to his natural leadership skills and intellect, as well as prodigy-level logic and strategy.",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/4c00377144d5a",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010755",
                comics: {
                    available: 7,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010755/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15061",
                            name: "Runaways (2003) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15071",
                            name: "Runaways (2003) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15072",
                            name: "Runaways (2003) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15073",
                            name: "Runaways (2003) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15074",
                            name: "Runaways (2003) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15075",
                            name: "Runaways (2003) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1273",
                            name: "Runaways Vol. 1: Pride & Joy (Digest)"
                        }],
                    returned: 7
                },
                series: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010755/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2584",
                            name: "Runaways (2003 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/327",
                            name: "Runaways Vol. 1: Pride & Joy (2004)"
                        }],
                    returned: 2
                },
                stories: {
                    available: 7,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010755/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30606",
                            name: "Pride and Joy, Part 1 of 6",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30622",
                            name: "Cover #30622",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30623",
                            name: "Pride and Joy, Part 2 of 6",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30625",
                            name: "Pride and Joy, Part 3 of 6",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30627",
                            name: "Pride and Joy, Part 4 of 6",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30629",
                            name: "Pride and Joy, Part 5 of 6",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30631",
                            name: "Pride and Joy, Part 6 of 6",
                            type: "interiorStory"
                        }],
                    returned: 7
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010755/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2820/alex_wilder?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Wilder%2C_Alex?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010755/alex_wilder?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1014990,
                name: "Alice",
                description: "",
                modified: "2010-11-18T16:01:44-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/6/70/4cd061e6d6573",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1014990",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1014990/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1014990/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1014990/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1014990/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/122/alice?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1014990/alice?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009435,
                name: "Alicia Masters",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4c003d40ac7ae",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009435",
                comics: {
                    available: 9,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009435/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17460",
                            name: "Fantastic Four 1 2 3 4 (2001)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16082",
                            name: "Fantastic Four: 1234 (2001) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16083",
                            name: "Fantastic Four: 1234 (2001) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16084",
                            name: "Fantastic Four: 1234 (2001) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38977",
                            name: "Fear Itself: FF (2011) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/19501",
                            name: "Marvel Two-in-One (1974) #32"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/19506",
                            name: "Marvel Two-in-One (1974) #37"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18751",
                            name: "The Thing (1983) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18752",
                            name: "The Thing (1983) #9"
                        }],
                    returned: 9
                },
                series: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009435/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3292",
                            name: "Fantastic Four 1 2 3 4 (2001)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2579",
                            name: "Fantastic Four: 1234 (2001 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14102",
                            name: "Fear Itself: FF (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3715",
                            name: "Marvel Two-in-One (1974 - 1983)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3667",
                            name: "The Thing (1983 - 1986)"
                        }],
                    returned: 5
                },
                stories: {
                    available: 8,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009435/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32850",
                            name: "2: Staring at the Fish Tank ",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32855",
                            name: "3: Darkness and the Mole Man",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32860",
                            name: "4: Prime Mover",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/40123",
                            name: "Cover #40123",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/40125",
                            name: "Cover #40125",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/41360",
                            name: "Only The Invisible Girl Can Save Us Now!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/41370",
                            name: "Game Point!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/85537",
                            name: "Interior #85537",
                            type: "interiorStory"
                        }],
                    returned: 8
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009435/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2732/alicia_masters?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Masters%2C_Alicia?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009435/alicia_masters?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010370,
                name: "Alpha Flight",
                description: "",
                modified: "2013-10-24T13:09:22-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010370",
                comics: {
                    available: 172,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010370/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39654",
                            name: "Alpha Flight (2011) #0.1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
                            name: "Alpha Flight (1983) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/393",
                            name: "Alpha Flight (2004) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39819",
                            name: "Alpha Flight (2011) #1 (Eaglesham Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38569",
                            name: "Alpha Flight (2011) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/456",
                            name: "Alpha Flight (2004) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12679",
                            name: "Alpha Flight (1983) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39818",
                            name: "Alpha Flight (2011) #2 (Eaglesham Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/616",
                            name: "Alpha Flight (2004) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12690",
                            name: "Alpha Flight (1983) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39820",
                            name: "Alpha Flight (2011) #3 (Eaglesham Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/677",
                            name: "Alpha Flight (2004) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12701",
                            name: "Alpha Flight (1983) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38567",
                            name: "Alpha Flight (2011) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12712",
                            name: "Alpha Flight (1983) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38568",
                            name: "Alpha Flight (2011) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/613",
                            name: "Alpha Flight (2004) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38566",
                            name: "Alpha Flight (2011) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12723",
                            name: "Alpha Flight (1983) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/572",
                            name: "Alpha Flight (2004) #6"
                        }],
                    returned: 20
                },
                series: {
                    available: 21,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010370/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/719",
                            name: "Alpha Flight (2004 - 2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13907",
                            name: "Alpha Flight (2011 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
                            name: "Alpha Flight (1983 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1983",
                            name: "Alpha Flight Classic Vol. 1 (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1234",
                            name: "Alpha Flight Vol. 1: You Gotta Be Kiddin' Me (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1335",
                            name: "Alpha Flight Vol. 2: Waxing Poetic (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                            name: "Astonishing X-Men (2004 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1995",
                            name: "Cable (1993 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/11854",
                            name: "Chaos War (2010 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13468",
                            name: "Chaos War One-Shots (2010 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14399",
                            name: "Essential X-Men Vol. 2 (All-New Edition) (2011 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2123",
                            name: "Fantastic Four (1996 - 1997)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
                            name: "Fantastic Four (1961 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1812",
                            name: "Heroes Reborn: Fantastic Four (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
                            name: "Incredible Hulk (1962 - 1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3719",
                            name: "Marvel Fanfare (1982 - 1992)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2095",
                            name: "What If? (1977 - 1984)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2262",
                            name: "Wolverine (1988 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3637",
                            name: "X-Men Unlimited (1993 - 2003)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 324,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010370/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2922",
                            name: "1 of 4 - Days of Future Present Past Participle",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2923",
                            name: "Cover #2923",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2924",
                            name: "Interior #2924",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2926",
                            name: "Interior #2926",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2928",
                            name: "Interior #2928",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2929",
                            name: "Cover #2929",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2930",
                            name: "Interior #2930",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2932",
                            name: "Interior #2932",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2934",
                            name: "Interior #2934",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2936",
                            name: "WAXING POETIC PART 1 (OF 2) Is the All-New, All-Different Alpha Flight really disbanding after only seven issues? Not if the r",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2937",
                            name: "WAXING POETIC PART 2 (OF 2) Montreal faces its gravest hour as it falls under attack by…wax statues of the entire Marvel Unive",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2938",
                            name: "WAXING POETIC PART 2 (OF 2) Montreal faces its gravest hour as it falls under attack by…wax statues of the entire Marvel Unive",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2940",
                            name: "2 of 4 - Days of Future Present Past Participle",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2941",
                            name: "3 of 4 - Days of Future Present Past Participle",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2942",
                            name: "3 of 4 - Days of Future Present Past Participle",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2943",
                            name: "4 of 4 - Days of Future Present Past Participle",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2944",
                            name: "4 of 4 - Days of Future Present Past Participle",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13113",
                            name: "With Malice Toward All!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18775",
                            name: "Hook, Line, and Sinker",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/20797",
                            name: "What if Alpha Flight talked like T.V. Canadians?",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010370/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/116",
                            name: "Acts of Vengeance!"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/296",
                            name: "Chaos War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/302",
                            name: "Fear Itself"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/29",
                            name: "Infinity War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/271",
                            name: "Secret Wars II"
                        }],
                    returned: 5
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/126/alpha_flight?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Alpha_Flight?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010370/alpha_flight?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011227,
                name: "Amadeus Cho",
                description: "",
                modified: "2013-08-07T13:50:56-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/3/80/520288b9cb581",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011227",
                comics: {
                    available: 30,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011227/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38496",
                            name: "Fear Itself: The Home Front (2010) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38493",
                            name: "Fear Itself: The Home Front (2010) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30722",
                            name: "Hercules: Fall of an Avenger (2010) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20636",
                            name: "Incredible Hercules (2008) #114"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20827",
                            name: "Incredible Hercules (2008) #115"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20828",
                            name: "Incredible Hercules (2008) #115 (VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23930",
                            name: "Incredible Hercules (2008) #128"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30015",
                            name: "Incredible Hulks (2009) #607 (MCGUINNESS VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36044",
                            name: "Incredible Hulks (2009) #630"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23106",
                            name: "Mighty Avengers (2007) #21"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23603",
                            name: "Mighty Avengers (2007) #22"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23762",
                            name: "Mighty Avengers (2007) #23"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23964",
                            name: "Mighty Avengers (2007) #24"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24163",
                            name: "Mighty Avengers (2007) #25"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/25970",
                            name: "Mighty Avengers (2007) #26"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/25971",
                            name: "Mighty Avengers (2007) #27"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/25972",
                            name: "Mighty Avengers (2007) #28"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/25973",
                            name: "Mighty Avengers (2007) #29"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/25974",
                            name: "Mighty Avengers (2007) #30"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/25975",
                            name: "Mighty Avengers (2007) #31"
                        }],
                    returned: 20
                },
                series: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011227/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13881",
                            name: "Fear Itself: The Home Front (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9350",
                            name: "Hercules: Fall of an Avenger (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3762",
                            name: "Incredible Hercules (2008 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8842",
                            name: "Incredible Hulks (2009 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1866",
                            name: "Mighty Avengers (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20614",
                            name: "The Totally Awesome Hulk (2015 - Present)"
                        }],
                    returned: 6
                },
                stories: {
                    available: 31,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011227/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/44256",
                            name: "Herc 3 of 4",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/44605",
                            name: "Herc 4 of 4",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/44606",
                            name: "Herc 4 of 4",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/44607",
                            name: "Herc 4 of 4",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/51237",
                            name: "Interior #51237",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52267",
                            name: "2 of 6",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52726",
                            name: "3 of 6",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53077",
                            name: "2 of 2 Dark Reign",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53148",
                            name: "1 of 1",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53543",
                            name: "1 of 2",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57228",
                            name: "Interior #57228",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57230",
                            name: "Interior #57230",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57232",
                            name: "Interior #57232",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57234",
                            name: "Interior #57234",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57236",
                            name: "Interior #57236",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57238",
                            name: "Interior #57238",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57240",
                            name: "Interior #57240",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57242",
                            name: "Interior #57242",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/63744",
                            name: "Interior #63744",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/64992",
                            name: "Interior #64992",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011227/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/318",
                            name: "Dark Reign"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/302",
                            name: "Fear Itself"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/273",
                            name: "Siege"
                        }],
                    returned: 3
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/comics/characters/1011227/amadeus_cho?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Amadeus_Cho?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011227/amadeus_cho?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011361,
                name: "American Eagle (Jason Strongbow)",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4ce5a6d8b8f2a",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011361",
                comics: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011361/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10105",
                            name: "Marvel Comics Presents (1988) #27"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10042",
                            name: "Marvel Comics Presents (1988) #128"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10045",
                            name: "Marvel Comics Presents (1988) #130"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10063",
                            name: "Marvel Comics Presents (1988) #147"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10064",
                            name: "Marvel Comics Presents (1988) #148"
                        }],
                    returned: 5
                },
                series: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011361/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2039",
                            name: "Marvel Comics Presents (1988 - 1995)"
                        }],
                    returned: 1
                },
                stories: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011361/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22862",
                            name: "The Hunter and the Hunted",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22880",
                            name: "Screams",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22990",
                            name: "Saints and Sinner",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22996",
                            name: "500 Guns",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/23237",
                            name: "Just Another Shade of Hate",
                            type: ""
                        }],
                    returned: 5
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011361/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/132/american_eagle?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/American_Eagle_(Jason_Strongbow)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011361/american_eagle_jason_strongbow?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009152,
                name: "Ancient One",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009152",
                comics: {
                    available: 21,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009152/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20234",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20245",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20172",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #13"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20182",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #22"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20183",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #23"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20194",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #33"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20195",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #34"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20207",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #45"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20209",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #47"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20217",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #54"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20218",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #55"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20250",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #84"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20251",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #85"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20253",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #87"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20254",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #88"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2319",
                            name: "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2820",
                            name: "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11070",
                            name: "Strange Tales (1951) #148"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11079",
                            name: "Strange Tales (1951) #156"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11091",
                            name: "Strange Tales (1951) #167"
                        }],
                    returned: 20
                },
                series: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009152/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3741",
                            name: "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1468",
                            name: "Marvel Masterworks: Doctor Strange Vol. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2076",
                            name: "Strange Tales (1951 - 1968)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3648",
                            name: "What If? (1989 - 1998)"
                        }],
                    returned: 4
                },
                stories: {
                    available: 20,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009152/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10258",
                            name: "Cover #10258",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10263",
                            name: "If Kaluu Should Triumph...",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10292",
                            name: "Umar Walks the Earth!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10333",
                            name: "This Dream---This Doom!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/39010",
                            name: "What if Wolverine had Become Lord of the Vampires?",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43211",
                            name: "TBOTV:The Curse of the Darkhold Part V, The Torch is Passed",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43237",
                            name: "TBOTV:Legends and Lore of the Dark Dimension, Part 2",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43240",
                            name: "TBOTV:Legends and Lore of the Dark Dimension, Part 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43266",
                            name: "The Alexandrain Quatrain",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43269",
                            name: "Is There a Doctor Not In The House?",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43293",
                            name: "Death's Greatest Hits",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43297",
                            name: "Strange Bedfellows II",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43314",
                            name: "From Here...To There...To Eternity",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43317",
                            name: "World Enough, And Time...",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43353",
                            name: "TBOTV: The Mordo Chronicles, Part II",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43377",
                            name: "TBOTV: The Mordo Chronicles Part III",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43394",
                            name: "Journey to the East [The Homecoming, Part One]",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43396",
                            name: "The Disciple's Tale [The Homecoming, Part Two]",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43400",
                            name: "Resurrection [The Homecoming, Part Four]",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43402",
                            name: "After Life, Part One",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009152/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/116",
                            name: "Acts of Vengeance!"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/253",
                            name: "Infinity Gauntlet"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/29",
                            name: "Infinity War"
                        }],
                    returned: 3
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/145/ancient_one?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Ancient_One?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009152/ancient_one?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011396,
                name: "Angel (Thomas Halloway)",
                description: "",
                modified: "2014-03-05T13:14:48-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011396",
                comics: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011396/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20636",
                            name: "Incredible Hercules (2008) #114"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16736",
                            name: "Marvel Mystery Comics (1939) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/26595",
                            name: "The Marvels Project (2009) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/28927",
                            name: "The Marvels Project (Trade Paperback)"
                        }],
                    returned: 4
                },
                series: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011396/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3762",
                            name: "Incredible Hercules (2008 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2981",
                            name: "Marvel Mystery Comics (1939 - 1949)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8395",
                            name: "The Marvels Project (2009 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/10470",
                            name: "The Marvels Project (2011)"
                        }],
                    returned: 4
                },
                stories: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011396/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/34565",
                            name: "Cover #34565",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/44256",
                            name: "Herc 3 of 4",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/58499",
                            name: "Cover #58499",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/63049",
                            name: "The Marvels Project: Birth Of The Super Heroes TPB",
                            type: "cover"
                        }],
                    returned: 4
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011396/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/1011396/angel_thomas_halloway/featured?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Angel_(Thomas_Halloway)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011396/angel_thomas_halloway?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011338,
                name: "Angel (Ultimate)",
                description: "",
                modified: "2014-03-05T13:15:49-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/4/50/531769ae4399f",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011338",
                comics: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011338/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15715",
                            name: "Ultimate X-Men (2000) #24"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15716",
                            name: "Ultimate X-Men (2000) #25"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16226",
                            name: "Ultimate X-Men Ultimate Collection Book 2 (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17464",
                            name: "Ultimate X-Men Vol. 4: Hellfire & Brimstone (Trade Paperback)"
                        }],
                    returned: 4
                },
                series: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011338/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/474",
                            name: "Ultimate X-Men (2000 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2719",
                            name: "Ultimate X-Men Ultimate Collection Book 2 (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3296",
                            name: "Ultimate X-Men Vol. 4: Hellfire & Brimstone (2003 - Present)"
                        }],
                    returned: 3
                },
                stories: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011338/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31888",
                            name: "[UNCANNY X-MEN #416 Preview]",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31899",
                            name: "[UNCANNY X-MEN #416 Preview]",
                            type: "interiorStory"
                        }],
                    returned: 2
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011338/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/1/angel?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Angel_(Ultimate)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011338/angel_ultimate?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1017574,
                name: "Angela (Aldrif Odinsdottir)",
                description: "",
                modified: "2014-11-17T17:45:37-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/7/00/545a82f59dd73",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1017574",
                comics: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017574/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/51201",
                            name: "1602 Witch Hunter Angela (2015) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/56505",
                            name: "Angela: Queen of Hel (2015) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/43301",
                            name: "Guardians of the Galaxy (2013) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/43300",
                            name: "Guardians of the Galaxy (2013) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/43296",
                            name: "Guardians of the Galaxy (2013) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/43295",
                            name: "Guardians of the Galaxy (2013) #11"
                        }],
                    returned: 6
                },
                series: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017574/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/19244",
                            name: "1602 Witch Hunter Angela (2015 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20696",
                            name: "Angela: Queen of Hel (2015 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/16410",
                            name: "Guardians of the Galaxy (2013 - Present)"
                        }],
                    returned: 3
                },
                stories: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017574/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/96952",
                            name: "Cover #96952",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/96954",
                            name: "Guardians of the Galaxy #10",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/96962",
                            name: "Cover #96962",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/96964",
                            name: "Cover #96964",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/113979",
                            name: "cover from 1602 Witch Hunter Angela (2015) #4",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/123865",
                            name: "cover from Angela: Queen of Hel (2015) #5",
                            type: "cover"
                        }],
                    returned: 6
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017574/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/3455/angela?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1017574/angela_aldrif_odinsdottir?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010674,
                name: "Anita Blake",
                description: "",
                modified: "2004-04-14T00:00:00-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c0038fa14452",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010674",
                comics: {
                    available: 46,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010674/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5912",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5745",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6143",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16548",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20681",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006) #8 (Booth Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20880",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5907",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21227",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21368",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006) #12"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24448",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures - The Complete Collection (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16034",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures Vol. 1 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16024",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures Vol. 1 (DM (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23012",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures Vol. 2 (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22250",
                            name: "Anita Blake, Vampire Hunter: The Laughing Corpse (2008) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22565",
                            name: "Anita Blake, Vampire Hunter: The Laughing Corpse (2008) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22984",
                            name: "Anita Blake, Vampire Hunter: The Laughing Corpse (2008) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23160",
                            name: "Anita Blake, Vampire Hunter: The Laughing Corpse (2008) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23644",
                            name: "Anita Blake, Vampire Hunter: The Laughing Corpse (2008) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24088",
                            name: "Anita Blake, Vampire Hunter: The Laughing Corpse Book 1 - Animator (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/29296",
                            name: "Anita Blake: Circus of the Damned - The Charmer (2010) #1"
                        }],
                    returned: 20
                },
                series: {
                    available: 15,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010674/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1152",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures (2006 - 2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/7552",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures - The Complete Collection (2009 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2568",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures Vol. 1 (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2556",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures Vol. 1 (DM (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6427",
                            name: "Anita Blake, Vampire Hunter: Guilty Pleasures Vol. 2 (2008 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/5859",
                            name: "Anita Blake, Vampire Hunter: The Laughing Corpse (2008 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/7273",
                            name: "Anita Blake, Vampire Hunter: The Laughing Corpse Book 1 - Animator (2009 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9795",
                            name: "Anita Blake: Circus of the Damned - The Charmer (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9855",
                            name: "Anita Blake: Circus of the Damned - The Scoundrel (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/10005",
                            name: "Anita Blake: Circus of the Damned Book 1 (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9854",
                            name: "Anita Blake: Circus of the Damned The Ingenue (2010 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/7559",
                            name: "Anita Blake: The Laughing Corpse - Executioner (2009 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/7197",
                            name: "Anita Blake: The Laughing Corpse - Necromancer (2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2539",
                            name: "Laurell K. Hamilton's Anita Blake - Vampire Hunter: The First Death (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3892",
                            name: "Laurell K. Hamilton's Anita Blake, Vampire Hunter: The First Death DM Only (2008)"
                        }],
                    returned: 15
                },
                stories: {
                    available: 49,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010674/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6285",
                            name: "Cover #6285",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/7932",
                            name: "Cover #7932",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/33070",
                            name: "2XLS - The First Death 2 of 2",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/33374",
                            name: "12XLS 8 of 12",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/44350",
                            name: "12XLS 8 of 12",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/44711",
                            name: "12XLS 9 of 12",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/46887",
                            name: "12XLS 11 of 12",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/47188",
                            name: "12XLS 12 of 12",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49008",
                            name: "15XLS 1 of 15",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/50014",
                            name: "15XLS 2 of 15",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/51012",
                            name: "15XLS 3 of 15",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/51361",
                            name: "5XLS 4 of 5",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52361",
                            name: "5XLS 5 of 5",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53269",
                            name: "5XLS 1 of 5",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53270",
                            name: "5XLS 1 of 5",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53271",
                            name: "5XLS 1 of 5",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53678",
                            name: "5XLS 2 of 5",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53679",
                            name: "5XLS 2 of 5",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53989",
                            name: "Cover #53989",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53991",
                            name: "Cover #53991",
                            type: "cover"
                        }],
                    returned: 20
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010674/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/3428/anita_blake?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Blake,_Anita_(Anita_Blake_Universe)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010674/anita_blake?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009154,
                name: "Annihilus",
                description: "",
                modified: "2013-11-20T17:06:36-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/528d31f20a2f6",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009154",
                comics: {
                    available: 42,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009154/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55364",
                            name: "All-New, All-Different Avengers (2015) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4788",
                            name: "Annihilation (2006) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5230",
                            name: "Annihilation (2006) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5529",
                            name: "Annihilation (2006) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5795",
                            name: "Annihilation (2006) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4473",
                            name: "Annihilation: Nova (2006) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4218",
                            name: "Annihilation: Silver Surfer (2006) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4315",
                            name: "Annihilation: Silver Surfer (2006) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4822",
                            name: "Annihilation: The Nova Corps (2006) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2055",
                            name: "Essential Fantastic Four Vol. 4 (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13316",
                            name: "Fantastic Four (1996) #13"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15537",
                            name: "Fantastic Four (1998) #19"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15561",
                            name: "Fantastic Four (1998) #40"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15563",
                            name: "Fantastic Four (1998) #42"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15564",
                            name: "Fantastic Four (1998) #43"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15565",
                            name: "Fantastic Four (1998) #44"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13068",
                            name: "Fantastic Four (1961) #256"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13104",
                            name: "Fantastic Four (1961) #289"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13106",
                            name: "Fantastic Four (1961) #290"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13181",
                            name: "Fantastic Four (1961) #358"
                        }],
                    returned: 20
                },
                series: {
                    available: 23,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009154/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20443",
                            name: "All-New, All-Different Avengers (2015 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3613",
                            name: "Annihilation (2006 - 2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1081",
                            name: "Annihilation: Nova (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1078",
                            name: "Annihilation: Silver Surfer (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1115",
                            name: "Annihilation: The Nova Corps (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1263",
                            name: "Essential Fantastic Four Vol. 4 (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/421",
                            name: "Fantastic Four (1998 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2123",
                            name: "Fantastic Four (1996 - 1997)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
                            name: "Fantastic Four (1961 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2012",
                            name: "Fantastic Four Annual (1963 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1424",
                            name: "Fantastic Four Visionaries: John Byrne Vol. 3 (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13577",
                            name: "Iron Man (1996 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3719",
                            name: "Marvel Fanfare (1982 - 1992)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/49",
                            name: "Marvel Mangaverse Vol. I (2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2275",
                            name: "Marvel Mangaverse: Fantastic Four (2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1437",
                            name: "Marvel Masterworks: The Fantastic Four Vol. 8 (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2059",
                            name: "Paradise X (2002 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2431",
                            name: "Paradise X Vol. 1 (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2702",
                            name: "Paradise X Vol. 2 (New Printing) (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2093",
                            name: "Webspinners: Tales of Spider-Man (1999 - 2000)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 42,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009154/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5927",
                            name: "Annihilation: Silver Surfer (2006) #2",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5929",
                            name: "Annihilation: Silver Surfer (2006) #3",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5960",
                            name: "3 of 6 - Annihilation",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5962",
                            name: "4 of 6 - Annihilation",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5966",
                            name: "6 of 6 - End of Story",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6149",
                            name: "Cover #6149",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12778",
                            name: "Cover #12778",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12853",
                            name: "Rip Wide the Sky!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12856",
                            name: "Cover #12856",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12857",
                            name: "Risk",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13029",
                            name: "Annihilus",
                            type: "pinup"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13223",
                            name: "And Then Came Despair",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13332",
                            name: "Even the Watchers Can Die!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15362",
                            name: "Cover #15362",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/25765",
                            name: "Cover #25765",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/25766",
                            name: "With Everything To Lose [Part 3 of 3]",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/25840",
                            name: "Life in Wartime",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26016",
                            name: "Paradise X Issue 0",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26020",
                            name: "Paradise X Issue 10",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26026",
                            name: "Paradise X Issue 2",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009154/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/229",
                            name: "Annihilation"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/154/annihilus?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Annihilus?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009154/annihilus?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011301,
                name: "Anole",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c002e635ddd9",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011301",
                comics: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011301/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24173",
                            name: "Runaways (2008) #10"
                        }],
                    returned: 1
                },
                series: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011301/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/5338",
                            name: "Runaways (2008 - 2009)"
                        }],
                    returned: 1
                },
                stories: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011301/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53571",
                            name: "Interior #53571",
                            type: "interiorStory"
                        }],
                    returned: 1
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011301/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/155/anole?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Anole?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011301/anole?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010802,
                name: "Ant-Man (Eric O'Grady)",
                description: "",
                modified: "2014-03-05T13:20:04-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010802",
                comics: {
                    available: 37,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010802/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36765",
                            name: "Ant-Man & the Wasp (2010) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36764",
                            name: "Ant-Man & the Wasp (2010) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36763",
                            name: "Ant-Man & the Wasp (2010) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37655",
                            name: "Ant-Man & Wasp: Small World (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17397",
                            name: "Avengers: The Initiative (2007) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17638",
                            name: "Avengers: The Initiative (2007) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
                            name: "Avengers: The Initiative (2007) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24571",
                            name: "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
                            name: "Avengers: The Initiative (2007) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22299",
                            name: "Avengers: The Initiative (2007) #18"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22300",
                            name: "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22506",
                            name: "Avengers: The Initiative (2007) #19"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22912",
                            name: "Avengers: The Initiative (2007) #20"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39955",
                            name: "Fear Itself: The Fearless (2011) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/34543",
                            name: "I Am an Avenger (2010) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5199",
                            name: "Irredeemable Ant-Man (2006) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5628",
                            name: "Irredeemable Ant-Man (2006) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5938",
                            name: "Irredeemable Ant-Man (2006) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6076",
                            name: "Irredeemable Ant-Man (2006) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15950",
                            name: "Irredeemable Ant-Man (2006) #10"
                        }],
                    returned: 20
                },
                series: {
                    available: 13,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010802/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13082",
                            name: "Ant-Man & the Wasp (2010 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13540",
                            name: "Ant-Man & Wasp: Small World (2010 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
                            name: "Avengers: The Initiative (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14804",
                            name: "Fear Itself: The Fearless (2011 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/11872",
                            name: "I Am an Avenger (2010 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/977",
                            name: "Irredeemable Ant-Man (2006 - 2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2423",
                            name: "Irredeemable Ant-Man Vol. 1: Low-Life (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/5202",
                            name: "Marvel Adventures Super Heroes (2008 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13602",
                            name: "Onslaught Unleashed (2010 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/18681",
                            name: "Original Sin (2014 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9799",
                            name: "Secret Avengers (2010 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/18527",
                            name: "Thunderbolts (2006 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14016",
                            name: "X-MEN: GOD LOVES, MAN KILLS (2011 - Present)"
                        }],
                    returned: 13
                },
                stories: {
                    available: 37,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010802/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5496",
                            name: "1 of 6 -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5500",
                            name: "3 of 6 -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/7767",
                            name: "5 of 6 - Story A; Franklin Richards back-ups",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/7769",
                            name: "6 of 6 - Story A",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/8239",
                            name: "6 of 6 - Story A",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32573",
                            name: "Irredeemable Ant-Man (2006) #10",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/36469",
                            name: "Avengers: The Initiative (2007) #8",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/36907",
                            name: "Avengers: The Initiative (2007) #9",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/47185",
                            name: "Avengers: The Initiative (2007) #14 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/48361",
                            name: "Avengers: The Initiative (2007) #17",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/48362",
                            name: "Avengers: The Initiative (2007) #17 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49104",
                            name: "Avengers: The Initiative (2007) #18 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49106",
                            name: "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49889",
                            name: "Avengers: The Initiative (2007) #19 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/50870",
                            name: "Avengers: The Initiative (2007) #20 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/50955",
                            name: "24XLS 6 of 24",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/50956",
                            name: "24XLS 6 of 24",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/54371",
                            name: "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/63371",
                            name: "Secret Avengers #10",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/64810",
                            name: "Cover #64810",
                            type: "cover"
                        }],
                    returned: 20
                },
                events: {
                    available: 7,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010802/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/318",
                            name: "Dark Reign"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/302",
                            name: "Fear Itself"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/319",
                            name: "Original Sin"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                            name: "Secret Invasion"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/309",
                            name: "Shattered Heroes"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/273",
                            name: "Siege"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/277",
                            name: "World War Hulk"
                        }],
                    returned: 7
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/1010802/ant-man_eric_ogrady/featured?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Ant-Man_(Eric_O%27Grady)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010802/ant-man_eric_ogrady?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010801,
                name: "Ant-Man (Scott Lang)",
                description: "",
                modified: "2015-09-25T17:14:28-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010801",
                comics: {
                    available: 15,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010801/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17749",
                            name: "A-Next (1998) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17750",
                            name: "A-Next (1998) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55329",
                            name: "The Astonishing Ant-Man (2015) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55910",
                            name: "The Astonishing Ant-Man (2015) #1 (Brooks Hip-&#8203;Hop Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/57206",
                            name: "The Astonishing Ant-Man (2015) #1 (Cosplay Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/57205",
                            name: "The Astonishing Ant-Man (2015) #1 (Young Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7088",
                            name: "Avengers (1963) #221"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/57899",
                            name: "Deadpool: Too Soon? Infinite Comic (2016) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/57901",
                            name: "Deadpool: Too Soon? Infinite Comic (2016) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/57902",
                            name: "Deadpool: Too Soon? Infinite Comic (2016) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55126",
                            name: "Heroes for Hire (1997) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/53675",
                            name: "Heroes for Hire (1997) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55341",
                            name: "The Astonishing Ant-Man (2015) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55342",
                            name: "The Astonishing Ant-Man (2015) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4802",
                            name: "Women of Marvel (Trade Paperback)"
                        }],
                    returned: 15
                },
                series: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010801/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3620",
                            name: "A-Next (1998 - 1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
                            name: "Avengers (1963 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/21104",
                            name: "Deadpool: Too Soon? Infinite Comic (2016 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20084",
                            name: "Heroes for Hire (1997 - 1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20437",
                            name: "The Astonishing Ant-Man (2015 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1777",
                            name: "Women of Marvel (2006)"
                        }],
                    returned: 6
                },
                stories: {
                    available: 18,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010801/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/14715",
                            name: "Cover #14715",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/37669",
                            name: "Cover #37669",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/37671",
                            name: "Cover #37671",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/121702",
                            name: "story from Ant-Man (2015) #1",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/121725",
                            name: "cover from Ant-Man (2015) #9",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/121727",
                            name: "cover from Ant-Man (2015) #10",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/122805",
                            name: "cover from Ant-Man (2015) #1 (BROOKS HIP-HOP VARIANT)",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/125227",
                            name: "cover from Ant-Man (2015) #1 (YOUNG VARIANT)",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/125229",
                            name: "cover from Ant-Man (2015) #1 (COSPLAY VARIANT)",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/126501",
                            name: "story from Deadpool: Too Soon Infinite Comic (2016) #1",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/126504",
                            name: "cover from Deadpool: Too Soon Infinite Comic (2016) #3",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/126507",
                            name: "story from Deadpool: Too Soon Infinite Comic (2016) #4",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/134400",
                            name: "interior to Heroes for Hire (1997) #6",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/134408",
                            name: "interior to Heroes for Hire (1997) #10",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/134412",
                            name: "interior to Heroes for Hire (1997) #12",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/134414",
                            name: "interior to Heroes for Hire (1997) #13",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/134416",
                            name: "interior to Heroes for Hire (1997) #14",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/134420",
                            name: "interior to Heroes for Hire (1997) #16",
                            type: "interiorStory"
                        }],
                    returned: 18
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010801/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/comics/characters/1010801/ant-man_scott_lang?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Ant-Man_(Scott_Lang)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010801/ant-man_scott_lang?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009156,
                name: "Apocalypse",
                description: "",
                modified: "2013-10-18T12:48:43-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/f/e0/526166076a1d0",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009156",
                comics: {
                    available: 70,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009156/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7459",
                            name: "Cable (1993) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24171",
                            name: "Cable (2008) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24172",
                            name: "Cable (2008) #14 (OLIVETTI MW, 50/50 COVER)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24631",
                            name: "Cable (2008) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24632",
                            name: "Cable (2008) #15 (OLIVETTI (MW, 50/50 COVER))"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7410",
                            name: "Cable (1993) #35"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7454",
                            name: "Cable (1993) #75"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39445",
                            name: "Essential X-Factor Vol. 2 (All-New Edition) (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9267",
                            name: "Incredible Hulk (1962) #456"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/26022",
                            name: "Mystic Comics 70th Anniversary Special (2009) #1 (MARTIN VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1489",
                            name: "Official Handbook of the Marvel Universe (2004) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1590",
                            name: "Official Handbook of the Marvel Universe (2004) #9 (THE WOMEN OF MARVEL)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1689",
                            name: "Official Handbook of the Marvel Universe (2004) #10 (MARVEL KNIGHTS)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1749",
                            name: "Official Handbook of the Marvel Universe (2004) #11 (X-MEN - AGE OF APOCALYPSE)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1886",
                            name: "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1994",
                            name: "Official Handbook of the Marvel Universe (2004) #13 (TEAMS)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10453",
                            name: "Onslaught: Marvel Universe (1996) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/32586",
                            name: "Uncanny X-Force (2010) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13836",
                            name: "Uncanny X-Men (1963) #295"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13876",
                            name: "Uncanny X-Men (1963) #335"
                        }],
                    returned: 20
                },
                series: {
                    available: 36,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009156/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/4002",
                            name: "Cable (2008 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1995",
                            name: "Cable (1993 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14400",
                            name: "Essential X-Factor Vol. 2 (All-New Edition) (2011 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
                            name: "Incredible Hulk (1962 - 1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8138",
                            name: "Mystic Comics 70th Anniversary Special (2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/787",
                            name: "Official Handbook of the Marvel Universe (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2057",
                            name: "Onslaught: Marvel Universe (1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9976",
                            name: "Uncanny X-Force (2010 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1075",
                            name: "What If? X-Men Age of Apocalypse (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2425",
                            name: "What If?: Event Horizon (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2262",
                            name: "Wolverine (1988 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/84",
                            name: "Wolverine/Deadpool: Weapon X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2098",
                            name: "X-Factor (1986 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6689",
                            name: "X-Factor Annual (1986 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/5068",
                            name: "X-Factor Visionaries: Peter David Vol. 4 (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3633",
                            name: "X-Force (1991 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2265",
                            name: "X-Men (1991 - 2001)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3640",
                            name: "X-Men Chronicles (1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3637",
                            name: "X-Men Unlimited (1993 - 2003)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 67,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009156/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/477",
                            name: "Cover #477",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4153",
                            name: "Cover #4153",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4223",
                            name: "Cover #4223",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4430",
                            name: "Cover #4430",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4513",
                            name: "Cover #4513",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4612",
                            name: "Cover #4612",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4614",
                            name: "Cover #4614",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5919",
                            name: "Cover #5919",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19075",
                            name: "...Meet War!",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22203",
                            name: "Whose Death Is It, Anyway?",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22207",
                            name: "Die, Mutants, Die!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22210",
                            name: "The Horsemen of Apocalypse",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22221",
                            name: "You Say You Want Some Evolution?",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22222",
                            name: "Fall of the Mutants",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22224",
                            name: "Fall of the Mutants",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22229",
                            name: "Gifts!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22273",
                            name: "Guardian",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22282",
                            name: "Meanwhile, On Earth...",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22284",
                            name: "Home!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22324",
                            name: "Bitter Sacrifice!",
                            type: "cover"
                        }],
                    returned: 20
                },
                events: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009156/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/116",
                            name: "Acts of Vengeance!"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
                            name: "Age of Apocalypse"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/246",
                            name: "Evolutionary War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/248",
                            name: "Fall of the Mutants"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/298",
                            name: "Messiah War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/154",
                            name: "Onslaught"
                        }],
                    returned: 6
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/166/apocalypse?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Apocalypse_(En_Sabah_Nur)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009156/apocalypse?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010866,
                name: "Aqueduct",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/50/4c0035b3630cd",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010866",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010866/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010866/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010866/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010866/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/169/aqueduct?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Aqueduct?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010866/aqueduct?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010773,
                name: "Arachne",
                description: "",
                modified: "2013-10-24T13:07:59-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/70/5269526591794",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010773",
                comics: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010773/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37899",
                            name: "Amazing Spider-Man (1999) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30310",
                            name: "Amazing Spider-Man (1999) #635"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/29773",
                            name: "Herc (2010) #8"
                        }],
                    returned: 3
                },
                series: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010773/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                            name: "Amazing Spider-Man (1999 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9898",
                            name: "Herc (2010 - 2011)"
                        }],
                    returned: 2
                },
                stories: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010773/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/64693",
                            name: "Herc (2010) #8 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/69447",
                            name: "Amazing Spider-Man (1999) #635 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/94843",
                            name: "Amazing Spider-Man (1999) #5",
                            type: "cover"
                        }],
                    returned: 3
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010773/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/305",
                            name: "Spider-Island"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/173/arachne?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Arachne_(Julia_Carpenter)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010773/arachne?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009158,
                name: "Arcade",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c0042091ab69",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009158",
                comics: {
                    available: 18,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009158/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17712",
                            name: "Agent X (2002) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20586",
                            name: "Classic X-Men (1986) #30"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8591",
                            name: "Excalibur (1988) #125"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1587",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17692",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17693",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12439",
                            name: "Uncanny X-Men (1963) #122"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12440",
                            name: "Uncanny X-Men (1963) #123"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13686",
                            name: "Uncanny X-Men (1963) #145"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13687",
                            name: "Uncanny X-Men (1963) #146"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13688",
                            name: "Uncanny X-Men (1963) #147"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13844",
                            name: "Uncanny X-Men (1963) #303"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4100",
                            name: "Uncanny X-Men Omnibus Vol. 1 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17993",
                            name: "X-Force (1991) #29"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14281",
                            name: "X-Men (1991) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3995",
                            name: "X-Men: Mutant Genesis (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12371",
                            name: "X-Men: Prime (1995) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5369",
                            name: "X-Men: The Complete Age of Apocalypse Epic Book 4 (Trade Paperback)"
                        }],
                    returned: 18
                },
                series: {
                    available: 13,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009158/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/459",
                            name: "Agent X (2002 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3751",
                            name: "Classic X-Men (1986 - 1990)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2011",
                            name: "Excalibur (1988 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1440",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3460",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3459",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1723",
                            name: "Uncanny X-Men Omnibus Vol. 1 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3633",
                            name: "X-Force (1991 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2265",
                            name: "X-Men (1991 - 2001)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1774",
                            name: "X-Men: Mutant Genesis (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2102",
                            name: "X-Men: Prime (1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1685",
                            name: "X-Men: The Complete Age of Apocalypse Epic Book 4 (2006)"
                        }],
                    returned: 13
                },
                stories: {
                    available: 14,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009158/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15429",
                            name: "Cry For The Children!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15431",
                            name: "Arcade's Murder World",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22463",
                            name: "Tying the Knot",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24495",
                            name: "Racing the Night",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27794",
                            name: "Kidnapped!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27795",
                            name: "X-Men vs. Murderworld (Guess Who Wins?)",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27796",
                            name: "Murderworld!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27798",
                            name: "Rogue Storm!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28117",
                            name: "Motions",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29116",
                            name: "A Villains Gallery",
                            type: "pinup"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/37532",
                            name: "Dead Man's Switch Part Five",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38264",
                            name: "Arcade--Shatterstar--Murderworld",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43937",
                            name: "Play With Me",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43939",
                            name: "Back Cover",
                            type: "backcovers"
                        }],
                    returned: 14
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009158/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
                            name: "Age of Apocalypse"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/178/arcade?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Arcade?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009158/arcade?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009159,
                name: "Archangel",
                description: "",
                modified: "2013-10-18T12:48:24-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/8/03/526165ed93180",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009159",
                comics: {
                    available: 531,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009159/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17701",
                            name: "Age of Apocalypse: The Chosen (1995) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12555",
                            name: "All-Winners Comics (1941) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12651",
                            name: "Alpha Flight (1983) #111"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/40803",
                            name: "Astonishing X-Men (2004) #51"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17509",
                            name: "Avengers (1998) #27"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17546",
                            name: "Avengers (1998) #60"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4461",
                            name: "Avengers Assemble Vol. 3 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6950",
                            name: "Avengers Icons: Vision (2002) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1098",
                            name: "Avengers Vol. 1: World Trust (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17854",
                            name: "Bishop (1994) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23971",
                            name: "Cable (2008) #13"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23972",
                            name: "Cable (2008) #13 (OLIVETTI (MW, 50/50 COVER))"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24171",
                            name: "Cable (2008) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24172",
                            name: "Cable (2008) #14 (OLIVETTI MW, 50/50 COVER)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24631",
                            name: "Cable (2008) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7389",
                            name: "Cable (1993) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/942",
                            name: "Call, the Vol. 1: The Brotherhood & the Wagon (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/943",
                            name: "Call, the Vol. 2: The Precinct (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12845",
                            name: "Captain America (2002) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1194",
                            name: "Captain America Vol. I: The New Deal (Trade Paperback)"
                        }],
                    returned: 20
                },
                series: {
                    available: 138,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009159/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3614",
                            name: "Age of Apocalypse: The Chosen (1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2114",
                            name: "All-Winners Comics (1941 - 1947)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
                            name: "Alpha Flight (1983 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                            name: "Astonishing X-Men (2004 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/354",
                            name: "Avengers (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1737",
                            name: "Avengers Assemble Vol. 3 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1990",
                            name: "Avengers Icons: Vision (2002 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/158",
                            name: "Avengers Vol. 1: World Trust (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3626",
                            name: "Bishop (1994 - 1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1995",
                            name: "Cable (1993 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/4002",
                            name: "Cable (2008 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/7",
                            name: "Call, the Vol. 1: The Brotherhood & the Wagon (2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8",
                            name: "Call, the Vol. 2: The Precinct (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/485",
                            name: "Captain America (2002 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/251",
                            name: "Captain America Vol. I: The New Deal (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/690",
                            name: "Captain Marvel (2000 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/175",
                            name: "Captain Marvel Vol. 1: Nothing to Lose (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/105",
                            name: "Captain Marvel Vol. I (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2001",
                            name: "Champions (1975 - 1978)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1720",
                            name: "Champions Classic Vol. 1 (2006)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 577,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009159/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3261",
                            name: "2 of 2 - Save the Life of My Child",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4058",
                            name: "Cover #4058",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6222",
                            name: "Cover #6222",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/8685",
                            name: "Dead Days 1 of 1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/8823",
                            name: "[The Six Big Men]",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9053",
                            name: "Cover #9053",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9059",
                            name: "The Case of the Mad Gargoyle",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9719",
                            name: "The House of Horror",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9724",
                            name: "Killer's Last Stand",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9729",
                            name: "The Case of the Beggar Prince",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9735",
                            name: "Charity Bazaar Murders",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9741",
                            name: "The Devil's Imposter",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9747",
                            name: "Tell-Tale Cigarette",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9753",
                            name: "The Parrot Murder Secret",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9758",
                            name: "Mystery of Horror House",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9763",
                            name: "Adventure of the Generous Fence",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9770",
                            name: "Shadow of the Noose",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9776",
                            name: "The Two-Faced Corpse",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9781",
                            name: "Slaves of the Python",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/9787",
                            name: "Give the Devil His Due",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 17,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009159/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/116",
                            name: "Acts of Vengeance!"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
                            name: "Age of Apocalypse"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/233",
                            name: "Atlantis Attacks"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/240",
                            name: "Days of Future Present"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/246",
                            name: "Evolutionary War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/248",
                            name: "Fall of the Mutants"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/249",
                            name: "Fatal Attractions"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/252",
                            name: "Inferno"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/29",
                            name: "Infinity War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/32",
                            name: "Kings of Pain"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/299",
                            name: "Messiah CompleX"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/298",
                            name: "Messiah War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/263",
                            name: "Mutant Massacre"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/154",
                            name: "Onslaught"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/276",
                            name: "War of Kings"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/277",
                            name: "World War Hulk"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/280",
                            name: "X-Tinction Agenda"
                        }],
                    returned: 17
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/1/angel?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Angel_(Warren_Worthington_III)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009159/archangel?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009160,
                name: "Arclight",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/4c0042067fd8b",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009160",
                comics: {
                    available: 12,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009160/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13751",
                            name: "Uncanny X-Men (1963) #210"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13752",
                            name: "Uncanny X-Men (1963) #211"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13756",
                            name: "Uncanny X-Men (1963) #215"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13760",
                            name: "Uncanny X-Men (1963) #219"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13762",
                            name: "Uncanny X-Men (1963) #221"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13763",
                            name: "Uncanny X-Men (1963) #222"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13781",
                            name: "Uncanny X-Men (1963) #240"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13891",
                            name: "Uncanny X-Men (1963) #350"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12175",
                            name: "X-Factor (1986) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12186",
                            name: "X-Factor (1986) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1032",
                            name: "X-Men: Mutant Massacre (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1292",
                            name: "X-Men: Old Soldiers (Trade Paperback)"
                        }],
                    returned: 12
                },
                series: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009160/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2098",
                            name: "X-Factor (1986 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/92",
                            name: "X-Men: Mutant Massacre (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/343",
                            name: "X-Men: Old Soldiers (2004)"
                        }],
                    returned: 4
                },
                stories: {
                    available: 12,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009160/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22086",
                            name: "Fallen Angel!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22110",
                            name: "Redemption!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26181",
                            name: "The Blood of Apocalypse Part Two: The Hunger",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27930",
                            name: "The Morning After",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27932",
                            name: "Massacre",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27940",
                            name: "Old Soldiers",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27948",
                            name: "Where Duty Lies",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27952",
                            name: "Death By Drowning",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27954",
                            name: "Heartbreak",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27989",
                            name: "Inferno",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27990",
                            name: "Inferno, Part the First: Strike the Match",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28228",
                            name: "Trial & Errors",
                            type: "interiorStory"
                        }],
                    returned: 12
                },
                events: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009160/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/252",
                            name: "Inferno"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/263",
                            name: "Mutant Massacre"
                        }],
                    returned: 2
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/182/arclight?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Arclight?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009160/arclight?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010784,
                name: "Ares",
                description: "",
                modified: "2014-04-29T14:50:59-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/10/535ff3daea603",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010784",
                comics: {
                    available: 42,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010784/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24348",
                            name: "Adam: Legend of the Blue Marvel (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22461",
                            name: "Adam: Legend of the Blue Marvel (2008) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37071",
                            name: "Amazing Spider-Man (1999) #647 (MCNIVEN VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3423",
                            name: "Ares (2006) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3540",
                            name: "Ares (2006) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3947",
                            name: "Ares (2006) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4074",
                            name: "Ares (2006) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4186",
                            name: "Ares (2006) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5205",
                            name: "Ares: God of War (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17532",
                            name: "Avengers (1998) #48"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7352",
                            name: "Avengers (1963) #98"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7353",
                            name: "Avengers (1963) #99"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7156",
                            name: "Avengers (1963) #283"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7157",
                            name: "Avengers (1963) #284"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7158",
                            name: "Avengers (1963) #285"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21394",
                            name: "Avengers/Invaders (2008) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22935",
                            name: "Avengers/Invaders (2008) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1038",
                            name: "Avengers: The Kang Dynasty (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37066",
                            name: "Chaos War: Ares (2010) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55828",
                            name: "Contest of Champions (2015) #10"
                        }],
                    returned: 20
                },
                series: {
                    available: 18,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010784/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/7524",
                            name: "Adam: Legend of the Blue Marvel (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6079",
                            name: "Adam: Legend of the Blue Marvel (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                            name: "Amazing Spider-Man (1999 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/983",
                            name: "Ares (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1648",
                            name: "Ares: God of War (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/354",
                            name: "Avengers (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
                            name: "Avengers (1963 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/4864",
                            name: "Avengers/Invaders (2008 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/98",
                            name: "Avengers: The Kang Dynasty (2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13259",
                            name: "Chaos War: Ares (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20535",
                            name: "Contest of Champions (2015 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3762",
                            name: "Incredible Hercules (2008 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1866",
                            name: "Mighty Avengers (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/5381",
                            name: "Mighty Avengers Vol. 1: The Ultron Initiative (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/4619",
                            name: "Secret Invasion: The Infiltration (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6796",
                            name: "Secret Warriors (2008 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2989",
                            name: "Sub-Mariner (1968 - 1974)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/10469",
                            name: "The Marvel Art of Mike Deodato (2011)"
                        }],
                    returned: 18
                },
                stories: {
                    available: 44,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010784/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5532",
                            name: "1 of 5 xLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5533",
                            name: "1 of 5 xLS",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5535",
                            name: "2 of 5 xLS",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5537",
                            name: "3 of 5 xLS",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5539",
                            name: "4 of 5 xLS",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/5541",
                            name: "5 of 5 xLS",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/7882",
                            name: "Mighty Avengers (2007) #1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/8337",
                            name: "1 of 6 - Ultron",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/8340",
                            name: "2 of 6 - Ultron",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/8682",
                            name: "3 of 6 - Ultron; THE INITIATIVE BANNER",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/14852",
                            name: "Whom the Gods Would Destroy",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/14854",
                            name: "Battleground:  Olympus",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/14856",
                            name: "Twilight of the Gods",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15267",
                            name: "Let Slip the Dogs of War",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15269",
                            name: "They First Make Mad",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32377",
                            name: "4 of 6 - Ultron; THE INITIATIVE BANNER",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32378",
                            name: "4 of 6 - Ultron; THE INITIATIVE BANNER",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32605",
                            name: "5 of 6 - Ultron; THE INITIATIVE BANNER",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/33311",
                            name: "6 of 6 - Ultron; THE INITIATIVE BANNER",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/33312",
                            name: "6 of 6 - Ultron; THE INITIATIVE BANNER",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010784/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/296",
                            name: "Chaos War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/318",
                            name: "Dark Reign"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/255",
                            name: "Initiative"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                            name: "Secret Invasion"
                        }],
                    returned: 4
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/183/ares?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Ares?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010784/ares?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011012,
                name: "Armadillo",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/2/40/4c0032754da02",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011012",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011012/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011012/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011012/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011012/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/189/armadillo?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Armadillo?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011012/armadillo?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011298,
                name: "Armor (Hisako Ichiki)",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c002e6cbf990",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011298",
                comics: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011298/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21511",
                            name: "Astonishing X-Men (2004) #25"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38320",
                            name: "Astonishing X-Men (2004) #37"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38318",
                            name: "Astonishing X-Men (2004) #38"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/41548",
                            name: "Wolverine & the X-Men: Alpha & Omega (2011) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/41546",
                            name: "Wolverine & the X-Men: Alpha & Omega (2011) #5"
                        }],
                    returned: 5
                },
                series: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011298/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                            name: "Astonishing X-Men (2004 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/15486",
                            name: "Wolverine & the X-Men: Alpha & Omega (2011 - 2012)"
                        }],
                    returned: 2
                },
                stories: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011298/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/47427",
                            name: "1 of 6 Ghost Box",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/84191",
                            name: "Cover #84191",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/89900",
                            name: "Astonishing X-Men (2004) #38",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/93981",
                            name: "Wolverine & The X-â€‹Men Alpha & Omega (2011) #5",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/93985",
                            name: "Cover #93985",
                            type: "cover"
                        }],
                    returned: 5
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011298/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/191/armor?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Armor_(Hisako_Ichiki)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011298/armor_hisako_ichiki?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009740,
                name: "Arnim Zola",
                description: "The frail, dwarfish Arnim Zola was born in 1930s Switzerland where he became the world's leading biochemist and genetic engineer.",
                modified: "2012-03-20T12:33:28-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/8/b0/4c00393a4cb7c",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009740",
                comics: {
                    available: 7,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009740/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5402",
                            name: "Captain America (2004) #24"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7589",
                            name: "Captain America (1968) #208"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7590",
                            name: "Captain America (1968) #209"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5372",
                            name: "Captain America and the Falcon: The Swine (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13537",
                            name: "Civil War: Captain America (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/60265",
                            name: "Ultimate Spider-Man Infinite Comic (2016) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23500",
                            name: "X-51 (1999) #12"
                        }],
                    returned: 7
                },
                series: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009740/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1996",
                            name: "Captain America (1968 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/832",
                            name: "Captain America (2004 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1707",
                            name: "Captain America and the Falcon: The Swine (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2256",
                            name: "Civil War: Captain America (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/22189",
                            name: "Ultimate Spider-Man Infinite Comic (2016 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6688",
                            name: "X-51 (1999 - 2000)"
                        }],
                    returned: 6
                },
                stories: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009740/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4276",
                            name: "3 of 3 - Civil War",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/7702",
                            name: "2 of 6 - Death of the Dream",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17672",
                            name: "The River of Death!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17674",
                            name: "Arnim Zola--The Bio-Fanatic!!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52136",
                            name: "Space Odyssey",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/131008",
                            name: "cover from Ultimate Spider-Man Infinite Comic (2016) #5",
                            type: "cover"
                        }],
                    returned: 6
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009740/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/238",
                            name: "Civil War"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2790/arnim_zola?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Zola,_Arnim?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009740/arnim_zola?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010748,
                name: "Arsenic",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c00359a2be7b",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010748",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010748/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010748/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010748/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010748/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/197/arsenic?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Arsenic_(and_Old_Lace)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010748/arsenic?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009163,
                name: "Aurora",
                description: "",
                modified: "2011-05-10T15:56:51-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/f/10/4c004203f1072",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009163",
                comics: {
                    available: 53,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009163/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17701",
                            name: "Age of Apocalypse: The Chosen (1995) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38570",
                            name: "Alpha Flight (2011) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
                            name: "Alpha Flight (1983) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39819",
                            name: "Alpha Flight (2011) #1 (Eaglesham Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38569",
                            name: "Alpha Flight (2011) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12679",
                            name: "Alpha Flight (1983) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38565",
                            name: "Alpha Flight (2011) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12690",
                            name: "Alpha Flight (1983) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12701",
                            name: "Alpha Flight (1983) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12734",
                            name: "Alpha Flight (1983) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12745",
                            name: "Alpha Flight (1983) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12638",
                            name: "Alpha Flight (1983) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12649",
                            name: "Alpha Flight (1983) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12660",
                            name: "Alpha Flight (1983) #12"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12671",
                            name: "Alpha Flight (1983) #13"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12673",
                            name: "Alpha Flight (1983) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12674",
                            name: "Alpha Flight (1983) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12675",
                            name: "Alpha Flight (1983) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12676",
                            name: "Alpha Flight (1983) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12693",
                            name: "Alpha Flight (1983) #32"
                        }],
                    returned: 20
                },
                series: {
                    available: 14,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009163/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3614",
                            name: "Age of Apocalypse: The Chosen (1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
                            name: "Alpha Flight (1983 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13907",
                            name: "Alpha Flight (2011 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1983",
                            name: "Alpha Flight Classic Vol. 1 (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13260",
                            name: "Chaos War: Alpha Flight (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1440",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1723",
                            name: "Uncanny X-Men Omnibus Vol. 1 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/163",
                            name: "Weapon X Vol. 1 (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/138",
                            name: "Weapon X Vol. I (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3653",
                            name: "Weapon X: The Draft - Wild Child (2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2262",
                            name: "Wolverine (1988 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2098",
                            name: "X-Factor (1986 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1583",
                            name: "X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)"
                        }],
                    returned: 14
                },
                stories: {
                    available: 59,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009163/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15427",
                            name: "Shoot-Out at the Stampede!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21096",
                            name: "Alpha Flight (1983) #1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21097",
                            name: "Tundra!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21099",
                            name: "Blood Battle",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21124",
                            name: "Alpha Flight #12",
                            type: "ad"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21126",
                            name: "Bare Bones",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21128",
                            name: "Bare Bones Part II",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21132",
                            name: "Speaking of Experience",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21145",
                            name: "And One Shall Surely Die !",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21146",
                            name: "And One Shall Surely Die",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21165",
                            name: "Faith!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21168",
                            name: "The Perfect World",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21169",
                            name: "No Future Part 2",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21170",
                            name: "Ordeal!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21172",
                            name: "Nightmare",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21174",
                            name: "The Hollow Man",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21176",
                            name: "Biology Class",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21178",
                            name: "Blind Date",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21180",
                            name: "And Foresaking All Others",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21181",
                            name: "Guardian is Dead. Who Will Lead Alpha Flight?",
                            type: "ad"
                        }],
                    returned: 20
                },
                events: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009163/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
                            name: "Age of Apocalypse"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/296",
                            name: "Chaos War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/302",
                            name: "Fear Itself"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/29",
                            name: "Infinity War"
                        }],
                    returned: 4
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/221/aurora?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Aurora?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009163/aurora?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009164,
                name: "Avalanche",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/f/10/4c0042010d383",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009164",
                comics: {
                    available: 30,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009164/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6929",
                            name: "Avengers Annual (1967) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7467",
                            name: "Cable (1993) #87"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12460",
                            name: "Uncanny X-Men (1963) #141"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13683",
                            name: "Uncanny X-Men (1963) #142"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13718",
                            name: "Uncanny X-Men (1963) #177"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13719",
                            name: "Uncanny X-Men (1963) #178"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13740",
                            name: "Uncanny X-Men (1963) #199"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13741",
                            name: "Uncanny X-Men (1963) #200"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13747",
                            name: "Uncanny X-Men (1963) #206"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13766",
                            name: "Uncanny X-Men (1963) #225"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13767",
                            name: "Uncanny X-Men (1963) #226"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13796",
                            name: "Uncanny X-Men (1963) #255"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13942",
                            name: "Uncanny X-Men (1963) #401"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13943",
                            name: "Uncanny X-Men (1963) #402"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13944",
                            name: "Uncanny X-Men (1963) #403"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13945",
                            name: "Uncanny X-Men (1963) #404"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13946",
                            name: "Uncanny X-Men (1963) #405"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13947",
                            name: "Uncanny X-Men (1963) #406"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18350",
                            name: "What If? (1989) #47"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12301",
                            name: "X-Factor (1986) #8"
                        }],
                    returned: 20
                },
                series: {
                    available: 9,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009164/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1988",
                            name: "Avengers Annual (1967 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1995",
                            name: "Cable (1993 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3648",
                            name: "What If? (1989 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2098",
                            name: "X-Factor (1986 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6689",
                            name: "X-Factor Annual (1986 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2100",
                            name: "X-Men Annual (1970 - 1991)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1327",
                            name: "X-Men: Days of Future Past (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1318",
                            name: "X-Men: Dream's End (2004)"
                        }],
                    returned: 9
                },
                stories: {
                    available: 37,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009164/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15472",
                            name: "Days of Future Past",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17387",
                            name: "Betrayal",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19866",
                            name: "The Razor's Edge Part 2: The Killing Stroke",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22086",
                            name: "Fallen Angel!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22092",
                            name: "Ambushed!",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22106",
                            name: "Promised Vengeance",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22108",
                            name: "The Waking",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22352",
                            name: "Lost and Found!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22376",
                            name: "Spots!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24370",
                            name: "Dream's End Part II: Life Decisions",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26136",
                            name: "Heroes and Villains Part One",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26137",
                            name: "Cover #26137",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26138",
                            name: "Heroes and Villains Part Two: Treachery",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26140",
                            name: "Heroes and Villains Part Three: Foreshadowing",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/26142",
                            name: "Heroes and Villains Part Four: Full Circle",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27788",
                            name: "Mind Out of Time!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27864",
                            name: "Sanction",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27865",
                            name: "Cover #27865",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27866",
                            name: "Hell Hath No Fury",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27908",
                            name: "The Spiral Path",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009164/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/246",
                            name: "Evolutionary War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/248",
                            name: "Fall of the Mutants"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/32",
                            name: "Kings of Pain"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/263",
                            name: "Mutant Massacre"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/270",
                            name: "Secret Wars"
                        }],
                    returned: 5
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/222/avalanche?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Avalanche?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009164/avalanche?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009165,
                name: "Avengers",
                description: "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle. With a roster that has included Captain America, Iron Man, Ant-Man, Hulk, Thor, Wasp and dozens more over the years, the Avengers have come to be regarded as Earth's No. 1 team.",
                modified: "2014-05-27T20:28:26-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009165",
                comics: {
                    available: 1091,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009165/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/42539",
                            name: "Age of Apocalypse (2011) #2 (Avengers Art Appreciation Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37405",
                            name: "Age of Ultron (2013) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37406",
                            name: "Age of Ultron (2013) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37407",
                            name: "Age of Ultron (2013) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/45904",
                            name: "Age of Ultron (2013) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/45905",
                            name: "Age of Ultron (2013) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/45906",
                            name: "Age of Ultron (2013) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/45907",
                            name: "Age of Ultron (2013) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/45908",
                            name: "Age of Ultron (2013) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38523",
                            name: "Age of X: Universe (2011) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37255",
                            name: "Alias Omnibus (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55363",
                            name: "All-New, All-Different Avengers (2015) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55364",
                            name: "All-New, All-Different Avengers (2015) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/55365",
                            name: "All-New, All-Different Avengers (2015) #12"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/60276",
                            name: "All-New, All-Different Avengers Annual (2016) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12766",
                            name: "Alpha Flight (1983) #99"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12639",
                            name: "Alpha Flight (1983) #100"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12640",
                            name: "Alpha Flight (1983) #101"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37894",
                            name: "Amazing Spider-Man (1999) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37902",
                            name: "Amazing Spider-Man (1999) #7"
                        }],
                    returned: 20
                },
                series: {
                    available: 229,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009165/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/15331",
                            name: "Age of Apocalypse (2011 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/17318",
                            name: "Age of Ultron (2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13896",
                            name: "Age of X: Universe (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13383",
                            name: "Alias Omnibus (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20443",
                            name: "All-New, All-Different Avengers (2015 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/22190",
                            name: "All-New, All-Different Avengers Annual (2016 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
                            name: "Alpha Flight (1983 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                            name: "Amazing Spider-Man (1999 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
                            name: "Amazing Spider-Man Annual (1964 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1489",
                            name: "Amazing Spider-Man Vol. 10: New Avengers (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                            name: "Astonishing X-Men (2004 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/10030",
                            name: "Atlantis Attacks (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/10031",
                            name: "Atlantis Attacks (DM Only) (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
                            name: "Avengers (1963 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3621",
                            name: "Avengers (1996 - 1997)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/354",
                            name: "Avengers (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9085",
                            name: "Avengers (2010 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/16452",
                            name: "Avengers (2012 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9859",
                            name: "Avengers & the Infinity Gauntlet (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/10035",
                            name: "Avengers & the Infinity Gauntlet (2011)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 1505,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009165/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/490",
                            name: "Interior #490",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/542",
                            name: "Interior #542",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/572",
                            name: "Interior #572",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/574",
                            name: "Interior #574",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/575",
                            name: "Interior #575",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/577",
                            name: "Interior #577",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/579",
                            name: "Interior #579",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/580",
                            name: "Interior #580",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/892",
                            name: "Cover #892",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1025",
                            name: "Interior #1025",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1027",
                            name: "Interior #1027",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1029",
                            name: "Interior #1029",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1031",
                            name: "Interior #1031",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1039",
                            name: "Interior #1039",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1041",
                            name: "Avengers (1998) #502",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1043",
                            name: "Interior #1043",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1055",
                            name: "Interior #1055",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1164",
                            name: "1 of 5 - New Avengers",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1650",
                            name: "Interior #1650",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1948",
                            name: "Interior #1948",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 26,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009165/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/116",
                            name: "Acts of Vengeance!"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/314",
                            name: "Age of Ultron"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/303",
                            name: "Age of X"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/233",
                            name: "Atlantis Attacks"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/234",
                            name: "Avengers Disassembled"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/310",
                            name: "Avengers VS X-Men"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/296",
                            name: "Chaos War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/238",
                            name: "Civil War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/239",
                            name: "Crossing"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/318",
                            name: "Dark Reign"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/246",
                            name: "Evolutionary War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/302",
                            name: "Fear Itself"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/252",
                            name: "Inferno"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/315",
                            name: "Infinity"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/253",
                            name: "Infinity Gauntlet"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/29",
                            name: "Infinity War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/255",
                            name: "Initiative"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/37",
                            name: "Maximum Security"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/154",
                            name: "Onslaught"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/319",
                            name: "Original Sin"
                        }],
                    returned: 20
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/68/avengers?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Avengers?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009165/avengers?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009168,
                name: "Banshee",
                description: "",
                modified: "2013-11-01T16:27:08-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/03/52740e4619f54",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009168",
                comics: {
                    available: 166,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009168/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12676",
                            name: "Alpha Flight (1983) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12754",
                            name: "Alpha Flight (1983) #88"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37881",
                            name: "Chaos War: X-Men (2010) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20566",
                            name: "Classic X-Men (1986) #12"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20567",
                            name: "Classic X-Men (1986) #13"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20570",
                            name: "Classic X-Men (1986) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20572",
                            name: "Classic X-Men (1986) #18"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20580",
                            name: "Classic X-Men (1986) #25"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20590",
                            name: "Classic X-Men (1986) #34"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20592",
                            name: "Classic X-Men (1986) #36"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8556",
                            name: "Earth X (1999) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
                            name: "Earth X (New (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8580",
                            name: "Excalibur (1988) #115"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1587",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17692",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17693",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39530",
                            name: "Marvel Masterworks: The X-Men Vol. 3 DM Variant TPB (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39531",
                            name: "Marvel Masterworks: The X-Men Vol. 3 TPB (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1377",
                            name: "Marvel Masterworks: The X-Men Vol. 4 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1192",
                            name: "Marvel Masterworks: The X-Men Vol. III - 2nd Edition (1st) (Trade Paperback)"
                        }],
                    returned: 20
                },
                series: {
                    available: 44,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009168/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
                            name: "Alpha Flight (1983 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13588",
                            name: "Chaos War: X-Men (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3751",
                            name: "Classic X-Men (1986 - 1990)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/378",
                            name: "Earth X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1806",
                            name: "Earth X (New (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2011",
                            name: "Excalibur (1988 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1440",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3459",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3460",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14485",
                            name: "Marvel Masterworks: The X-Men Vol. 3 DM Variant TPB (2011 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14486",
                            name: "Marvel Masterworks: The X-Men Vol. 3 TPB (2011 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1364",
                            name: "Marvel Masterworks: The X-Men Vol. 4 (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/249",
                            name: "Marvel Masterworks: The X-Men Vol. III - 2nd Edition (1st) (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1689",
                            name: "Marvel Masterworks: The X-Men Vol.6 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3716",
                            name: "Marvel Team-Up (1972 - 1985)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1595",
                            name: "Marvel Visionaries: Chris Claremont (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1430",
                            name: "Marvel Weddings (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2055",
                            name: "New Mutants (1983 - 1991)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1763",
                            name: "New Mutants Classic Vol. 1 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2059",
                            name: "Paradise X (2002 - 2003)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 179,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009168/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15379",
                            name: "Betrayed By Professor X !",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15380",
                            name: "Greater Love Hath No X-Man...",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15382",
                            name: "Like a Phoenix, From the Ashes!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15384",
                            name: "Who Will Stop the Juggernaut?",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15385",
                            name: "Death Siege!",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15386",
                            name: "The Fall of the Tower",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15388",
                            name: "The Gentleman's Name is Magneto",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15390",
                            name: "Phoenix Unleashed!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15392",
                            name: "Dark Shroud of the Past !",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15393",
                            name: "Beginning the Incredible Saga of -- the Starjammers !",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15394",
                            name: "Where No X-Man Has Gone Before!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15395",
                            name: "Cover #15395",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15396",
                            name: "Armageddon Now !",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15397",
                            name: "Wanted: Wolverine Dead or Alive!",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15398",
                            name: "Home are the Heroes!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15401",
                            name: "Cover #15401",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15402",
                            name: "The X-Sanction!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15403",
                            name: "Cover #15403",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15404",
                            name: "Mindgames!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15406",
                            name: "Magneto Triumphant!",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 8,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009168/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/116",
                            name: "Acts of Vengeance!"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
                            name: "Age of Apocalypse"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/296",
                            name: "Chaos War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/240",
                            name: "Days of Future Present"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/249",
                            name: "Fatal Attractions"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/299",
                            name: "Messiah CompleX"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/154",
                            name: "Onslaught"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/280",
                            name: "X-Tinction Agenda"
                        }],
                    returned: 8
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/232/banshee?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Banshee?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009168/banshee?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009596,
                name: "Banshee (Theresa Rourke)",
                description: "The daughter of former X-Men member Sean Cassidy, a.k.a. Banshee, and Maeve Rourke, Theresa Rourke was raised by her first cousin once removed, mutant terrorist Thomas Cassidy, a.k.a. Black Tom.",
                modified: "2011-03-23T17:37:27-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/4ce5a1a50e56b",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009596",
                comics: {
                    available: 137,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009596/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7426",
                            name: "Cable (1993) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7448",
                            name: "Cable (1993) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7459",
                            name: "Cable (1993) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7387",
                            name: "Cable (1993) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7388",
                            name: "Cable (1993) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7452",
                            name: "Cable (1993) #73"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20731",
                            name: "Clandestine Classic Premiere (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8473",
                            name: "Deadpool (1997) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8484",
                            name: "Deadpool (1997) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8495",
                            name: "Deadpool (1997) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8506",
                            name: "Deadpool (1997) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8465",
                            name: "Deadpool (1997) #12"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8466",
                            name: "Deadpool (1997) #13"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8476",
                            name: "Deadpool (1997) #22"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8513",
                            name: "Deadpool (1997) #56"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24957",
                            name: "Deadpool Vol. 1: Secret Invasion (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10123",
                            name: "Marvel Comics Presents (1988) #43"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3171",
                            name: "Marvel Comics Presents Wolverine Vol. 2 (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17693",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17692",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (Hardcover)"
                        }],
                    returned: 20
                },
                series: {
                    available: 31,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009596/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1995",
                            name: "Cable (1993 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3874",
                            name: "Clandestine Classic Premiere (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2005",
                            name: "Deadpool (1997 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/7713",
                            name: "Deadpool Vol. 1: Secret Invasion (2009 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2039",
                            name: "Marvel Comics Presents (1988 - 1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1591",
                            name: "Marvel Comics Presents Wolverine Vol. 2 (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3460",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3459",
                            name: "Marvel Masterworks: The Uncanny X-Men Vol. 6 (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2281",
                            name: "New X-Men (2001 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1807",
                            name: "New X-Men (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/56",
                            name: "New X-Men Vol. III: New Worlds (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2059",
                            name: "Paradise X (2002 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2702",
                            name: "Paradise X Vol. 2 (New Printing) (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3648",
                            name: "What If? (1989 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1035",
                            name: "X-Factor (2005 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2098",
                            name: "X-Factor (1986 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6689",
                            name: "X-Factor Annual (1986 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/5068",
                            name: "X-Factor Visionaries: Peter David Vol. 4 (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1882",
                            name: "X-Factor: The Longest Night (2007)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 160,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009596/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4905",
                            name: "1 of 6",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4912",
                            name: "1 of 1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19864",
                            name: "Kings of Pain Part 3",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19865",
                            name: "Kings of Pain Part 3: Queens of Sacrifice",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22101",
                            name: "Phalanx Covenant: Life Signs Part 1",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22327",
                            name: "Clash Reunion",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22362",
                            name: "Tough Love",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/23343",
                            name: "Hello Little Girl... Is Your Father Home?",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24194",
                            name: "Fear & Loathing Part 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24196",
                            name: "Shadows",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24277",
                            name: "Sinsearly Yours Sincerely Mine...",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24322",
                            name: "Fathers and Sons Act 2: Illuminated Knights",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24331",
                            name: "Is This the Last Goodbye?",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24354",
                            name: "Fathers and Sons Part 3: Dayspring",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24495",
                            name: "Racing the Night",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24531",
                            name: "Deadpool (1997) #12",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24534",
                            name: "Deadpool (1997) #13",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24554",
                            name: "Deadpool (1997) #2",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24562",
                            name: "Deadpool (1997) #22",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24580",
                            name: "Deadpool (1997) #3",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009596/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
                            name: "Age of Apocalypse"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/249",
                            name: "Fatal Attractions"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/32",
                            name: "Kings of Pain"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/154",
                            name: "Onslaught"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                            name: "Secret Invasion"
                        }],
                    returned: 5
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/232/banshee?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Siryn?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009596/banshee_theresa_rourke?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009169,
                name: "Baron Strucker",
                description: "",
                modified: "2012-03-20T12:30:55-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/8/80/4c0041fb5a90d",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009169",
                comics: {
                    available: 26,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009169/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12848",
                            name: "Captain America (2002) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7655",
                            name: "Captain America (1968) #274"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7775",
                            name: "Captain America (1968) #394"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1138",
                            name: "Captain America Vol. 2: The Extremists (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8557",
                            name: "Earth X (1999) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
                            name: "Earth X (New (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2319",
                            name: "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2820",
                            name: "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15516",
                            name: "Marvel Super-Heroes (1992) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2371",
                            name: "Marvel Visionaries: Chris Claremont (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/27723",
                            name: "Nick Fury, Agent of Shield (1989) #21"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/27724",
                            name: "Nick Fury, Agent of Shield (1989) #22"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/27727",
                            name: "Nick Fury, Agent of Shield (1989) #25"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22201",
                            name: "Punisher War Journal (1988) #45"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/22202",
                            name: "Punisher War Journal (1988) #46"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/26288",
                            name: "Secret Warriors (2008) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/26289",
                            name: "Secret Warriors (2008) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30174",
                            name: "Secret Warriors (2008) #13"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/31597",
                            name: "Secret Warriors (2008) #13 (DEADPOOL VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30180",
                            name: "Secret Warriors (2008) #20"
                        }],
                    returned: 20
                },
                series: {
                    available: 14,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009169/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/485",
                            name: "Captain America (2002 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1996",
                            name: "Captain America (1968 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/197",
                            name: "Captain America Vol. 2: The Extremists (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/378",
                            name: "Earth X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1806",
                            name: "Earth X (New (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1468",
                            name: "Marvel Masterworks: Doctor Strange Vol. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2301",
                            name: "Marvel Super-Heroes (1992 - 1993)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1595",
                            name: "Marvel Visionaries: Chris Claremont (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8852",
                            name: "Nick Fury, Agent of Shield (1989 - 1992)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/5860",
                            name: "Punisher War Journal (1988 - 1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6796",
                            name: "Secret Warriors (2008 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2076",
                            name: "Strange Tales (1951 - 1968)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2088",
                            name: "Untold Tales of Spider-Man (1995 - 1997)"
                        }],
                    returned: 14
                },
                stories: {
                    available: 22,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009169/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/10293",
                            name: "Cover #10293",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17809",
                            name: "Cover #17809",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/18092",
                            name: "The Crimson Crusade",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24427",
                            name: "Cover #24427",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24429",
                            name: "Hydra and Go-Seek",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24932",
                            name: "Earth X Chapter Seven",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/25548",
                            name: "[untitled]",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27830",
                            name: "Cover #27830",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27831",
                            name: "Gold Rush!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28046",
                            name: "Madripoor Nights",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31595",
                            name: "",
                            type: "pinup"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49690",
                            name: "The Vegas Idea",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/49692",
                            name: "Hot Chrome and Cold Blood",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57879",
                            name: "Secret Warriors (2008) #6",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/57881",
                            name: "Secret Warriors (2008) #7",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/60773",
                            name: "Der Totenkopf",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/60775",
                            name: "Pledge of Allegiance",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/60781",
                            name: "Commencement Ceremonies",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/69175",
                            name: "Secret Warriors (2008) #13",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/69187",
                            name: "Secret Warriors (2008) #20",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009169/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/318",
                            name: "Dark Reign"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/3240/baron_strucker?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Baron_Strucker?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009169/baron_strucker?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009170,
                name: "Baron Zemo (Heinrich Zemo)",
                description: "",
                modified: "2012-03-20T12:37:26-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/60/4c0041f84c9fe",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009170",
                comics: {
                    available: 20,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009170/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7310",
                            name: "Avengers (1963) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7321",
                            name: "Avengers (1963) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6953",
                            name: "Avengers (1963) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6940",
                            name: "Avengers Annual (1967) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1668",
                            name: "Captain America (2004) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1870",
                            name: "Captain America (2004) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12848",
                            name: "Captain America (2002) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2420",
                            name: "Captain America (2004) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1138",
                            name: "Captain America Vol. 2: The Extremists (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3916",
                            name: "Captain America: Winter Soldier Vol. 1 (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5195",
                            name: "Captain America: Winter Soldier Vol. 2 (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8557",
                            name: "Earth X (1999) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
                            name: "Earth X (New (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3512",
                            name: "House of M: World of M (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/87",
                            name: "Marvel Masterworks: The Avengers Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2001",
                            name: "Marvel Masterworks: The Invincible Iron Man Vol. (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11345",
                            name: "Tales of Suspense (1959) #98"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11346",
                            name: "Tales of Suspense (1959) #99"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38098",
                            name: "Thunderbolts (2006) #164"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39349",
                            name: "Ultimate Comics Thor (Hardcover)"
                        }],
                    returned: 20
                },
                series: {
                    available: 15,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009170/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
                            name: "Avengers (1963 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1988",
                            name: "Avengers Annual (1967 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/832",
                            name: "Captain America (2004 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/485",
                            name: "Captain America (2002 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/197",
                            name: "Captain America Vol. 2: The Extremists (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1612",
                            name: "Captain America: Winter Soldier Vol. 1 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1613",
                            name: "Captain America: Winter Soldier Vol. 2 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/378",
                            name: "Earth X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1806",
                            name: "Earth X (New (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1614",
                            name: "House of M: World of M (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1390",
                            name: "Marvel Masterworks: The Avengers Vol. (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1494",
                            name: "Marvel Masterworks: The Invincible Iron Man Vol. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2079",
                            name: "Tales of Suspense (1959 - 1968)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/18527",
                            name: "Thunderbolts (2006 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14304",
                            name: "Ultimate Comics Thor (2011 - Present)"
                        }],
                    returned: 15
                },
                stories: {
                    available: 15,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009170/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4234",
                            name: "4 of 8 - Out of Time",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4237",
                            name: "Cover: Captain America (2004) #6 of 6 - Out of Time",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4238",
                            name: "6 of 6 - Out of Time",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4246",
                            name: "House of M tie-in",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/11992",
                            name: "The Claws of the Panther",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/11996",
                            name: "The Man Who Lived Twice!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/14442",
                            name: "The Avengers Break Up!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15182",
                            name: "Masters of Evil!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15203",
                            name: "Avengers (1963) #7 cover",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/15204",
                            name: "Their Darkest Hour!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17441",
                            name: "Masters of Evil",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24932",
                            name: "Earth X Chapter Seven",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/25548",
                            name: "[untitled]",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/89319",
                            name: "ULTIMATE COMICS THOR PREMIERE HC",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/90400",
                            name: "Thunderbolts (2006) #164 cover",
                            type: "cover"
                        }],
                    returned: 15
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009170/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/251",
                            name: "House of M"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/238/baron_zemo?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Baron_Zemo_(Heinrich_Zemo)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009170/baron_zemo_heinrich_zemo?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010906,
                name: "Baron Zemo (Helmut Zemo)",
                description: "",
                modified: "2011-02-24T13:21:20-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4c0035890fb0a",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010906",
                comics: {
                    available: 9,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010906/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7739",
                            name: "Captain America (1968) #358"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7740",
                            name: "Captain America (1968) #359"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7741",
                            name: "Captain America (1968) #360"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7742",
                            name: "Captain America (1968) #361"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7743",
                            name: "Captain America (1968) #362"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/33346",
                            name: "Captain America (2004) #606 (HEROIC AGE VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/35416",
                            name: "Captain America (2004) #609 (WOMEN OF MARVEL VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38153",
                            name: "Hawkeye: Blind Spot (2011) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39712",
                            name: "Thunderbolts (2006) #163.1"
                        }],
                    returned: 9
                },
                series: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010906/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1996",
                            name: "Captain America (1968 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/832",
                            name: "Captain America (2004 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13731",
                            name: "Hawkeye: Blind Spot (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/18527",
                            name: "Thunderbolts (2006 - 2012)"
                        }],
                    returned: 4
                },
                stories: {
                    available: 9,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010906/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17986",
                            name: "Captain America (1968) #358",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17989",
                            name: "Captain America (1968) #359",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17992",
                            name: "Captain America (1968) #360",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17995",
                            name: "Captain America (1968) #361",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17998",
                            name: "Captain America (1968) #362",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/85243",
                            name: "Hawkeye: Blind Spot #2 ",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/90135",
                            name: "Thunderbolts (2011) #1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/94772",
                            name: "Captain America (2004) #606, HEROIC AGE VARIANT",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/94774",
                            name: "Captain America (2004) #609, WOMEN OF MARVEL VARIANT",
                            type: "cover"
                        }],
                    returned: 9
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010906/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/238/baron_zemo?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Baron_Zemo_(Helmut_Zemo)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010906/baron_zemo_helmut_zemo?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009171,
                name: "Bastion",
                description: "",
                modified: "2013-10-24T13:07:45-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/d/80/52695253215f4",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009171",
                comics: {
                    available: 24,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009171/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7422",
                            name: "Cable (1993) #46"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7423",
                            name: "Cable (1993) #47"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8584",
                            name: "Excalibur (1988) #119"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13682",
                            name: "Uncanny X-Men (1963)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13875",
                            name: "Uncanny X-Men (1963) #334"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13878",
                            name: "Uncanny X-Men (1963) #337"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13880",
                            name: "Uncanny X-Men (1963) #339"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13884",
                            name: "Uncanny X-Men (1963) #343"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13887",
                            name: "Uncanny X-Men (1963) #346"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13923",
                            name: "Uncanny X-Men (1963) #382"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23500",
                            name: "X-51 (1999) #12"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12205",
                            name: "X-Factor (1986) #127"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18037",
                            name: "X-Force (1991) #69"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14355",
                            name: "X-Men (1991) #64"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14358",
                            name: "X-Men (1991) #67"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14360",
                            name: "X-Men (1991) #69"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18112",
                            name: "X-Men Unlimited (1993) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18117",
                            name: "X-Men Unlimited (1993) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30274",
                            name: "X-Men: Second Coming (2010) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38405",
                            name: "X-Men: Second Coming (Trade Paperback)"
                        }],
                    returned: 20
                },
                series: {
                    available: 14,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009171/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1995",
                            name: "Cable (1993 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2011",
                            name: "Excalibur (1988 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6688",
                            name: "X-51 (1999 - 2000)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2098",
                            name: "X-Factor (1986 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3633",
                            name: "X-Force (1991 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2265",
                            name: "X-Men (1991 - 2001)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3637",
                            name: "X-Men Unlimited (1993 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9359",
                            name: "X-Men: Second Coming (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13833",
                            name: "X-Men: Second Coming (2011 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9808",
                            name: "X-Men: Second Coming - Revelations: Blind Science (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13832",
                            name: "X-Men: Second Coming Revelations (2011 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6430",
                            name: "X-Men: The Complete Onslaught Epic Book 4 (2008 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3284",
                            name: "X-Men: The Complete Onslaught Epic Vol. 1 TPB (2007)"
                        }],
                    returned: 14
                },
                stories: {
                    available: 24,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009171/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22150",
                            name: "Darker Destiny",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22448",
                            name: "Preludes & Nightmares!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24268",
                            name: "Target: Bastion",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24270",
                            name: "Cover #24270",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/27786",
                            name: "Operation Zero Tolerance Interview",
                            type: "text article"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28182",
                            name: "Dark Horizon",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28192",
                            name: "Know Thy Enemy",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28197",
                            name: "Fight And Flight",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28209",
                            name: "Where No X-Man Has Gone Before!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28216",
                            name: "The Story Of The Year!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28311",
                            name: "Lost Souls",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29112",
                            name: "I Had a Dream",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29113",
                            name: "Operation Zero Tolerance Interview",
                            type: "text article"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29265",
                            name: "Games of Deceit & Death Part 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29271",
                            name: "On the Verge of Extinction !",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29275",
                            name: "Operation Zero Tolerance: The Conclusion",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38359",
                            name: "Roadside Attractions",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38490",
                            name: "Adrift",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38522",
                            name: "Primal",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52136",
                            name: "Space Odyssey",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009171/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/154",
                            name: "Onslaught"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/279",
                            name: "X-Men: Second Coming"
                        }],
                    returned: 2
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/comics/characters/1009171/bastion?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Bastion?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009171/bastion?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009172,
                name: "Batroc the Leaper",
                description: "",
                modified: "2011-03-03T11:45:12-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4ce59eb840da5",
                    extension: "gif"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009172",
                comics: {
                    available: 11,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009172/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36945",
                            name: "Batroc (2010) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12800",
                            name: "Captain America (1998) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7739",
                            name: "Captain America (1968) #358"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7740",
                            name: "Captain America (1968) #359"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7741",
                            name: "Captain America (1968) #360"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7742",
                            name: "Captain America (1968) #361"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7743",
                            name: "Captain America (1968) #362"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37570",
                            name: "Captain America: Allies & Enemies (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8474",
                            name: "Deadpool (1997) #20"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/58997",
                            name: "Gwenpool (2016) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38273",
                            name: "Hawkeye: Blind Spot TPB (Trade Paperback)"
                        }],
                    returned: 11
                },
                series: {
                    available: 7,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009172/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13194",
                            name: "Batroc (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1996",
                            name: "Captain America (1968 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1997",
                            name: "Captain America (1998 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13504",
                            name: "Captain America: Allies & Enemies (2010 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2005",
                            name: "Deadpool (1997 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/21490",
                            name: "Gwenpool (2016 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13787",
                            name: "Hawkeye: Blind Spot TPB (2011 - Present)"
                        }],
                    returned: 7
                },
                stories: {
                    available: 11,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009172/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17986",
                            name: "Captain America (1968) #358",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17989",
                            name: "Captain America (1968) #359",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17992",
                            name: "Captain America (1968) #360",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17995",
                            name: "Captain America (1968) #361",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17998",
                            name: "Captain America (1968) #362",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24556",
                            name: "Deadpool (1997) #20",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/67177",
                            name: "Captain America (1998) #4",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/81931",
                            name: "Batroc (2010) #1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/83065",
                            name: "Cover #83065",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/91269",
                            name: "Hawkeye: Blind Spot TPB",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/128540",
                            name: "cover from Gwenpool, the Unbelievable (2016) #3",
                            type: "cover"
                        }],
                    returned: 11
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009172/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/246/batroc_the_leaper?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Batroc_(Georges_Batroc)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009172/batroc_the_leaper?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009173,
                name: "Battering Ram",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708",
                    extension: "gif"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009173",
                comics: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009173/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17961",
                            name: "X-Force (1991) #116"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1028",
                            name: "X-Force: Famous, Mutant & Mortal (Hardcover)"
                        }],
                    returned: 2
                },
                series: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009173/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3633",
                            name: "X-Force (1991 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/88",
                            name: "X-Force: Famous, Mutant & Mortal (2003)"
                        }],
                    returned: 2
                },
                stories: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009173/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38198",
                            name: "Cover #38198",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/38199",
                            name: "Exit Wounds",
                            type: "interiorStory"
                        }],
                    returned: 2
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009173/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2685/battering_ram?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Battering_Ram?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009173/battering_ram?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009174,
                name: "Beak",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c0040b8329ad",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009174",
                comics: {
                    available: 15,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009174/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5451",
                            name: "New X-Men (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14936",
                            name: "New X-Men (2001) #117"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14938",
                            name: "New X-Men (2001) #119"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14944",
                            name: "New X-Men (2001) #125"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14945",
                            name: "New X-Men (2001) #126"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14950",
                            name: "New X-Men (2001) #131"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14954",
                            name: "New X-Men (2001) #135"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14955",
                            name: "New X-Men (2001) #136"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14956",
                            name: "New X-Men (2001) #137"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14957",
                            name: "New X-Men (2001) #138"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14960",
                            name: "New X-Men (2001) #141"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/124",
                            name: "New X-Men (2001) #149"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/123",
                            name: "New X-Men (2001) #150"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2592",
                            name: "New X-Men Vol. 2: Imperial (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/994",
                            name: "New X-Men Vol. III: New Worlds (Trade Paperback)"
                        }],
                    returned: 15
                },
                series: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009174/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1807",
                            name: "New X-Men (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2281",
                            name: "New X-Men (2001 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1166",
                            name: "New X-Men Vol. 2: Imperial (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/56",
                            name: "New X-Men Vol. III: New Worlds (1999)"
                        }],
                    returned: 4
                },
                stories: {
                    available: 14,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009174/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2277",
                            name: "Cover #2277",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2448",
                            name: "Cover #2448",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30425",
                            name: "The Prime of Miss Emma Frost",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30427",
                            name: "Riot at Xavier's",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30429",
                            name: "when X is not X",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30431",
                            name: "teaching children about fractals",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30444",
                            name: "Some Angels Falling",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30453",
                            name: "Cover #30453",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30454",
                            name: "All Hell",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30456",
                            name: "Cover #30456",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30457",
                            name: "Losers",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30474",
                            name: "Germ Free Generation: two of three",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30478",
                            name: "Danger Rooms",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/67329",
                            name: "new x-men 141 cover",
                            type: "cover"
                        }],
                    returned: 14
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009174/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/249/beak?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Beak?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009174/beak?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009175,
                name: "Beast",
                description: "",
                modified: "2014-01-13T14:48:32-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009175",
                comics: {
                    available: 589,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009175/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/44580",
                            name: "All-New X-Men (2012) #3 (Mcguinness Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/12651",
                            name: "Alpha Flight (1983) #111"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23247",
                            name: "Amazing Adventures (1970) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23248",
                            name: "Amazing Adventures (1970) #12"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23249",
                            name: "Amazing Adventures (1970) #13"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23250",
                            name: "Amazing Adventures (1970) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23251",
                            name: "Amazing Adventures (1970) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23252",
                            name: "Amazing Adventures (1970) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23253",
                            name: "Amazing Adventures (1970) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/48021",
                            name: "Amazing X-Men (2013) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/660",
                            name: "Astonishing X-Men (2004) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/723",
                            name: "Astonishing X-Men (2004) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/531",
                            name: "Astonishing X-Men (2004) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1808",
                            name: "Astonishing X-Men (2004) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/843",
                            name: "Astonishing X-Men (2004) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/927",
                            name: "Astonishing X-Men (2004) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38",
                            name: "Astonishing X-Men (2004) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1436",
                            name: "Astonishing X-Men (2004) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1626",
                            name: "Astonishing X-Men (2004) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1719",
                            name: "Astonishing X-Men (2004) #10"
                        }],
                    returned: 20
                },
                series: {
                    available: 164,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009175/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/16449",
                            name: "All-New X-Men (2012 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
                            name: "Alpha Flight (1983 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6666",
                            name: "Amazing Adventures (1970 - 1976)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/18142",
                            name: "Amazing X-Men (2013 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                            name: "Astonishing X-Men (2004 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/7576",
                            name: "Astonishing X-Men by Joss Whedon & John Cassaday (2009 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1464",
                            name: "Astonishing X-Men Vol. 1 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1298",
                            name: "Astonishing X-Men Vol. 1: Gifted (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1422",
                            name: "Astonishing X-Men Vol. 2: Dangerous (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1485",
                            name: "Astonishing X-Men Vol. 3: Torn (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/5055",
                            name: "Astonishing X-Men Vol. 4: Unstoppable (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9781",
                            name: "Astonishing X-Men: Xenogenesis (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9085",
                            name: "Avengers (2010 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
                            name: "Avengers (1963 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/354",
                            name: "Avengers (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1988",
                            name: "Avengers Annual (1967 - 1994)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13320",
                            name: "Avengers Annual (2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1340",
                            name: "Avengers Assemble (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1496",
                            name: "Avengers Assemble Vol. 2 (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1737",
                            name: "Avengers Assemble Vol. 3 (2006)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 641,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009175/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/608",
                            name: "Cover #608",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/610",
                            name: "Cover #610",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/612",
                            name: "Cover #612",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/628",
                            name: "1 of 1 - Holiday Issue",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1046",
                            name: "Cover #1046",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1490",
                            name: "Cover #1490",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2190",
                            name: "6 of 6 - Enemy of the State",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2448",
                            name: "Cover #2448",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2835",
                            name: "1 of 1 - Kitty/Colossus",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2836",
                            name: "1 of 1 - Kitty/Colossus",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3305",
                            name: "Cover for Astonishing X-Men (2004) #7",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3306",
                            name: "1 of 6 - Dangerous",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3308",
                            name: "Interior #3308",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3309",
                            name: "Cover for Astonishing X-Men (2004) #1, #3309",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3310",
                            name: "Interior #3310",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3318",
                            name: "Interior #3318",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3322",
                            name: "“GIFTED” 5 (OF 6)  As demand for the",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3324",
                            name: "“GIFTED” PART 6 (OF 6) Outnumbered and outgunned, the X-Men are finally brought together as a team by their newest addition – bu",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3326",
                            name: "2 of 6 - Dangerous",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3328",
                            name: "3 of 6 - Dangerous",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 22,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009175/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/116",
                            name: "Acts of Vengeance!"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
                            name: "Age of Apocalypse"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/233",
                            name: "Atlantis Attacks"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/310",
                            name: "Avengers VS X-Men"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/320",
                            name: "Axis"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/296",
                            name: "Chaos War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/238",
                            name: "Civil War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/240",
                            name: "Days of Future Present"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/245",
                            name: "Enemy of the State"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/246",
                            name: "Evolutionary War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/248",
                            name: "Fall of the Mutants"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/249",
                            name: "Fatal Attractions"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/302",
                            name: "Fear Itself"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/252",
                            name: "Inferno"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/315",
                            name: "Infinity"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/29",
                            name: "Infinity War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/32",
                            name: "Kings of Pain"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/37",
                            name: "Maximum Security"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/299",
                            name: "Messiah CompleX"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/263",
                            name: "Mutant Massacre"
                        }],
                    returned: 20
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/3/beast?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Beast_(Henry_McCoy)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009175/beast?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010909,
                name: "Beast (Earth-311)",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4c0035813dc4c",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010909",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010909/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010909/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010909/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010909/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/3/beast?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Beast_(Earth-311)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010909/beast_earth-311?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010908,
                name: "Beast (Ultimate)",
                description: "",
                modified: "2014-03-05T13:19:55-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/53176a9be110c",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010908",
                comics: {
                    available: 43,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010908/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15770",
                            name: "Ultimate Marvel Team-Up (2001) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5132",
                            name: "Ultimate Marvel Team-Up Ultimate Collection (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4045",
                            name: "Ultimate Spider-Man (2000) #93"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4746",
                            name: "Ultimate Spider-Man Vol. 16: Deadpool (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18475",
                            name: "Ultimate War (2003) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18477",
                            name: "Ultimate War (2003) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15699",
                            name: "Ultimate X-Men (2000) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15710",
                            name: "Ultimate X-Men (2000) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15721",
                            name: "Ultimate X-Men (2000) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15732",
                            name: "Ultimate X-Men (2000) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15743",
                            name: "Ultimate X-Men (2000) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15754",
                            name: "Ultimate X-Men (2000) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15765",
                            name: "Ultimate X-Men (2000) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15767",
                            name: "Ultimate X-Men (2000) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15768",
                            name: "Ultimate X-Men (2000) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15700",
                            name: "Ultimate X-Men (2000) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15701",
                            name: "Ultimate X-Men (2000) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15702",
                            name: "Ultimate X-Men (2000) #12"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15705",
                            name: "Ultimate X-Men (2000) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15706",
                            name: "Ultimate X-Men (2000) #16"
                        }],
                    returned: 20
                },
                series: {
                    available: 17,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010908/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2311",
                            name: "Ultimate Marvel Team-Up (2001 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1823",
                            name: "Ultimate Marvel Team-Up Ultimate Collection (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/466",
                            name: "Ultimate Spider-Man (2000 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1618",
                            name: "Ultimate Spider-Man Vol. 16: Deadpool (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3659",
                            name: "Ultimate War (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/474",
                            name: "Ultimate X-Men (2000 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13887",
                            name: "Ultimate X-Men MGC (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1758",
                            name: "Ultimate X-Men Ultimate Collection Book 1 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2719",
                            name: "Ultimate X-Men Ultimate Collection Book 2 (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1168",
                            name: "Ultimate X-Men Vol. 3: World Tour (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3296",
                            name: "Ultimate X-Men Vol. 4: Hellfire & Brimstone (2003 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/216",
                            name: "Ultimate X-Men Vol. 5: Ultimate War (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/210",
                            name: "Ultimate X-Men Vol. 6: Return of the King (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/80",
                            name: "Ultimate X-Men Vol. I: The Tomorrow People (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/81",
                            name: "Ultimate X-Men Vol. II: Return to Weapon X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/82",
                            name: "Ultimate X-Men Vol. III: World Tour (2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/243",
                            name: "Ultimate X-Men Vol. VI: Return of the King (2003)"
                        }],
                    returned: 17
                },
                stories: {
                    available: 53,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010908/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1380",
                            name: "3 of 7 - Deadpool",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31881",
                            name: "Previously In Ultimate X-Men:",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31886",
                            name: "Previously In Ultimate X-Men:",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31897",
                            name: "Previously In Ultimate X-Men:",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31902",
                            name: "Previously In Ultimate X-Men:",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31903",
                            name: "Hellfire and Brimstone Part 3",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32039",
                            name: "Previously In Ultimate X-Men:",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32044",
                            name: "Previously In Ultimate X-Men:",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32045",
                            name: "Hellfire and Brimstone Part 1",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32054",
                            name: "Previously In Ultimate X-Men:",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32055",
                            name: "Resignation",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32058",
                            name: "The Enemy Within",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32059",
                            name: "Previously ...",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32060",
                            name: "The Tomorrow People Part 2",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32071",
                            name: "Previously In Ultimate X-Men:",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32072",
                            name: "World Tour Part 4",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32082",
                            name: "Previously In Ultimate X-Men:",
                            type: "recap"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32091",
                            name: "[untitled]",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32092",
                            name: "World Tour Part Two",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32101",
                            name: "Previously ...",
                            type: "recap"
                        }],
                    returned: 20
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010908/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/3/beast?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Beast_(Ultimate)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010908/beast_ultimate?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009176,
                name: "Becatron",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009176",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009176/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009176/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009176/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009176/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/251/becatron?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009176/becatron?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009177,
                name: "Bedlam",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009177",
                comics: {
                    available: 8,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009177/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17506",
                            name: "Avengers (1998) #24"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17507",
                            name: "Avengers (1998) #25"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4461",
                            name: "Avengers Assemble Vol. 3 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7452",
                            name: "Cable (1993) #73"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7457",
                            name: "Cable (1993) #78"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10519",
                            name: "Peter Parker: Spider-Man (1999) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18639",
                            name: "Thor (1998) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20913",
                            name: "X-Men Vs. Apocalypse Vol. 1: The Twelve (Trade Paperback)"
                        }],
                    returned: 8
                },
                series: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009177/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/354",
                            name: "Avengers (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1737",
                            name: "Avengers Assemble Vol. 3 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1995",
                            name: "Cable (1993 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2060",
                            name: "Peter Parker: Spider-Man (1999 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/581",
                            name: "Thor (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/4020",
                            name: "X-Men Vs. Apocalypse Vol. 1: The Twelve (2008)"
                        }],
                    returned: 6
                },
                stories: {
                    available: 8,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009177/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24332",
                            name: "Pestilence!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24349",
                            name: "I Still Believe I Cannot Be Saved",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/25563",
                            name: "Cover #25563",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/25564",
                            name: "An Exemplary Day",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/37370",
                            name: "Harsh Judgments",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/37371",
                            name: "Cover #37371",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/37372",
                            name: "The Ninth Day",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/39937",
                            name: "The Eighth Day Part 1",
                            type: "interiorStory"
                        }],
                    returned: 8
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009177/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/252/bedlam?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009177/bedlam?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009178,
                name: "Beef",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708",
                    extension: "gif"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009178",
                comics: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009178/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13822",
                            name: "Uncanny X-Men (1963) #281"
                        }],
                    returned: 1
                },
                series: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009178/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
                            name: "Uncanny X-Men (1963 - 2011)"
                        }],
                    returned: 1
                },
                stories: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009178/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28072",
                            name: "Fresh Upstart",
                            type: "interiorStory"
                        }],
                    returned: 1
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009178/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/253/beef?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Beef?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009178/beef?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009179,
                name: "Beetle (Abner Jenkins)",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009179",
                comics: {
                    available: 15,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009179/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6605",
                            name: "Amazing Spider-Man (1963) #21"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6917",
                            name: "Amazing Spider-Man (1963) #94"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13151",
                            name: "Fantastic Four (1961) #330"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13155",
                            name: "Fantastic Four (1961) #334"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13535",
                            name: "Fantastic Four Visionaries: Walter Simonson Vol. 1 (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/19930",
                            name: "Iron Man (1998) #55"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9471",
                            name: "Iron Man (1968) #229"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/9533",
                            name: "Iron Man (1968) #285"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5872",
                            name: "Iron Man: Armor Wars (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/19571",
                            name: "Marvel Two-in-One (1974) #96"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14609",
                            name: "Peter Parker, the Spectacular Spider-Man (1976) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14760",
                            name: "Peter Parker, the Spectacular Spider-Man (1976) #59"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14614",
                            name: "Peter Parker, the Spectacular Spider-Man (1976) #164"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15339",
                            name: "Thunderbolts (1997) #35"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/14025",
                            name: "Webspinners: Tales of Spider-Man (1999) #17"
                        }],
                    returned: 15
                },
                series: {
                    available: 10,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009179/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1987",
                            name: "Amazing Spider-Man (1963 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
                            name: "Fantastic Four (1961 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2254",
                            name: "Fantastic Four Visionaries: Walter Simonson Vol. 1 (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2572",
                            name: "Iron Man (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2029",
                            name: "Iron Man (1968 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1846",
                            name: "Iron Man: Armor Wars (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3715",
                            name: "Marvel Two-in-One (1974 - 1983)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2271",
                            name: "Peter Parker, the Spectacular Spider-Man (1976 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2296",
                            name: "Thunderbolts (1997 - 2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2093",
                            name: "Webspinners: Tales of Spider-Man (1999 - 2000)"
                        }],
                    returned: 10
                },
                stories: {
                    available: 17,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009179/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12952",
                            name: "Good Dreams!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12961",
                            name: "Shadows of Alarm..!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13791",
                            name: "Cover #13791",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19423",
                            name: "Stark Wars Chapter 5: Red Snow",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19544",
                            name: "Carnage at Stark Enterprises!",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/19545",
                            name: "Ashes to Ashes",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/25745",
                            name: "Cover #25745",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/28527",
                            name: "Cover #28527",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29662",
                            name: "Cover #29662",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29673",
                            name: "Cover #29673",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/29674",
                            name: "Bugged",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/30097",
                            name: "Cover #30097",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31076",
                            name: "Cover #31076",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31079",
                            name: "Rap Sheet",
                            type: "letters"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/41504",
                            name: "Visiting Hours!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/42729",
                            name: "Iron Man Gallery",
                            type: "pinup"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/66337",
                            name: "AMAZING SPIDER-MAN 94 cover",
                            type: "cover"
                        }],
                    returned: 17
                },
                events: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009179/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/116",
                            name: "Acts of Vengeance!"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/231",
                            name: "Armor Wars"
                        }],
                    returned: 2
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/254/beetle?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009179/beetle_abner_jenkins?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009329,
                name: "Ben Grimm",
                description: "",
                modified: "2011-03-18T12:27:31-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009329",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009329/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009329/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009329/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009329/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2763/ben_grimm?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009329/ben_grimm?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009489,
                name: "Ben Parker",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009489",
                comics: {
                    available: 7,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009489/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24407",
                            name: "Amazing Spider-Man (1999) #600"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/29303",
                            name: "Amazing Spider-Man (1999) #600 (2ND PRINTING VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/35517",
                            name: "Amazing Spider-Man (1999) #655"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/40886",
                            name: "Amazing Spider-Man (1999) #655 (2nd Printing Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16906",
                            name: "Amazing Spider-Man Annual (1964) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1879",
                            name: "Marvel Masterworks: The Amazing Spider-Man Vol. 7 - (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10506",
                            name: "Peter Parker: Spider-Man (1999)"
                        }],
                    returned: 7
                },
                series: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009489/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                            name: "Amazing Spider-Man (1999 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
                            name: "Amazing Spider-Man Annual (1964 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1389",
                            name: "Marvel Masterworks: The Amazing Spider-Man Vol. 7 - (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2060",
                            name: "Peter Parker: Spider-Man (1999 - 2003)"
                        }],
                    returned: 4
                },
                stories: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009489/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/23711",
                            name: "A Prelude in Red",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/35456",
                            name: "Cover #35456",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53948",
                            name: "Amazing Spider-Man (1999) #600 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/63774",
                            name: "Amazing Spider-Man (1999) #600, 2nd Printing Variant - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/78542",
                            name: "Amazing Spider-Man (1999) #655 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/92597",
                            name: "Amazing Spider-Man (1999) #655, 2nd Printing Variant - Int",
                            type: "interiorStory"
                        }],
                    returned: 6
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009489/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2737/ben_parker?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Parker%2C_Ben_%28Uncle_Ben%29?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009489/ben_parker?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011346,
                name: "Ben Reilly",
                description: "Ben Reilly was the most genetically stable of the many clones of Spider-Man created by Professor Miles Warren, the Jackal.",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/2/20/4ce5a6abaea69",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011346",
                comics: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011346/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6809",
                            name: "Amazing Spider-Man (1963) #394"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24416",
                            name: "Amazing Spider-Man (1999) #609"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24417",
                            name: "Amazing Spider-Man (1999) #610"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38126",
                            name: "Spider-Man: New York Stories (Trade Paperback)"
                        }],
                    returned: 4
                },
                series: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011346/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1987",
                            name: "Amazing Spider-Man (1963 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                            name: "Amazing Spider-Man (1999 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13721",
                            name: "Spider-Man: New York Stories (2011 - Present)"
                        }],
                    returned: 3
                },
                stories: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011346/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/14244",
                            name: "The Double Part 2: No Escape",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/54190",
                            name: "Amazing Spider-Man (1999) #609 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/54192",
                            name: "Amazing Spider-Man (1999) #610 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/83788",
                            name: "Spider-Man: New York Stories (0000) #1",
                            type: "cover"
                        }],
                    returned: 4
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011346/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2919/ben_reilly?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Ben%20Reilly?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011346/ben_reilly?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010782,
                name: "Ben Urich",
                description: "Ben Urich is a reporter for the Daily Bugle who has many ties to the city's superhero community.",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c00373d10e5e",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010782",
                comics: {
                    available: 25,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010782/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37255",
                            name: "Alias Omnibus (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24415",
                            name: "Amazing Spider-Man (1999) #608"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16889",
                            name: "Amazing Spider-Man Annual (1964) #15"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16890",
                            name: "Amazing Spider-Man Annual (1964) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15616",
                            name: "Daredevil (1998) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15617",
                            name: "Daredevil (1998) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2298",
                            name: "Daredevil (1998) #76"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3946",
                            name: "Daredevil (1998) #83"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3895",
                            name: "Daredevil Vol. 13: The Murdock Papers (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/955",
                            name: "Daredevil Vol. III: Wake Up (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5203",
                            name: "Daredevil: The Devil, Inside and Out Vol. 1 (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15855",
                            name: "Mighty Avengers (2007) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21802",
                            name: "Mighty Avengers Vol. 1: The Ultron Initiative (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5198",
                            name: "Pulse Vol. 3: Fear (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/553",
                            name: "The Pulse (2004) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/803",
                            name: "The Pulse (2004) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1508",
                            name: "The Pulse (2004) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1707",
                            name: "The Pulse (2004) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1935",
                            name: "The Pulse (2004) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2386",
                            name: "The Pulse (2004) #11"
                        }],
                    returned: 20
                },
                series: {
                    available: 14,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010782/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13383",
                            name: "Alias Omnibus (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                            name: "Amazing Spider-Man (1999 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
                            name: "Amazing Spider-Man Annual (1964 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/449",
                            name: "Daredevil (1998 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1528",
                            name: "Daredevil Vol. 13: The Murdock Papers (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/20",
                            name: "Daredevil Vol. III: Wake Up (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1646",
                            name: "Daredevil: The Devil, Inside and Out Vol. 1 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1866",
                            name: "Mighty Avengers (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/5381",
                            name: "Mighty Avengers Vol. 1: The Ultron Initiative (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1630",
                            name: "Pulse Vol. 3: Fear (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/674",
                            name: "The Pulse (2004 - 2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1192",
                            name: "The Pulse Vol. 1: Thin Air (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1259",
                            name: "The Pulse Vol. 2: Secret War (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/6685",
                            name: "Venom: Lethal Protector (1993)"
                        }],
                    returned: 14
                },
                stories: {
                    available: 18,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010782/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1090",
                            name: "6 of 6 - Decalogue",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1103",
                            name: "2 of 6 - The Devil in Cell Block D",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2339",
                            name: "Cover #2339",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2343",
                            name: "THIN AIR PART 5 (OF 5) The downfall of Norman Osborn – the shocking conclusion to the story that rocked the Spidey-verse!  Str",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2345",
                            name: "2 of 5 - Secret War arc",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2347",
                            name: "3 of 4 - Secret War arc",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2349",
                            name: "4 of 4 - Secret War arc",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2353",
                            name: "1 of 5 -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2359",
                            name: "1 of",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2361",
                            name: "2 of - Fear",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31929",
                            name: "Wake Up Part 1",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31932",
                            name: "Wake Up Part 2",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32378",
                            name: "4 of 6 - Ultron; THE INITIATIVE BANNER",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/35397",
                            name: "Spider-Man: Threat Or Menace?",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/35407",
                            name: "",
                            type: "profile"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/52045",
                            name: "Lethal Protector Part 1: Dark Soul Drifting",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/54188",
                            name: "Amazing Spider-Man (1999) #608 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/82495",
                            name: "[untitled]",
                            type: "interiorStory"
                        }],
                    returned: 18
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010782/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/255",
                            name: "Initiative"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2826/ben_urich?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Urich%2C_Ben?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010782/ben_urich?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010829,
                name: "Bengal",
                description: "",
                modified: "2013-10-24T13:01:00-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5269523ee6c03",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010829",
                comics: {
                    available: 9,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010829/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20679",
                            name: "Avengers: The Initiative (2007) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21975",
                            name: "Avengers: The Initiative (2007) #17"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23112",
                            name: "Avengers: The Initiative (2007) #21"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/23968",
                            name: "Avengers: The Initiative (2007) #23"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24167",
                            name: "Avengers: The Initiative (2007) #24"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/29817",
                            name: "Avengers: The Initiative (2007) #34"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/29931",
                            name: "Avengers: The Initiative (2007) #35"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16057",
                            name: "Marvel Knights (2000) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16058",
                            name: "Marvel Knights (2000) #12"
                        }],
                    returned: 9
                },
                series: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010829/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
                            name: "Avengers: The Initiative (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2576",
                            name: "Marvel Knights (2000 - 2001)"
                        }],
                    returned: 2
                },
                stories: {
                    available: 9,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010829/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32756",
                            name: "Hero for Hire",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/32758",
                            name: "The Long, Long Night",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/44343",
                            name: "Avengers: The Initiative (2007) #10",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/48362",
                            name: "Avengers: The Initiative (2007) #17 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/51249",
                            name: "Avengers: The Initiative (2007) #21 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53156",
                            name: "Avengers: The Initiative (2007) #23 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/53551",
                            name: "Avengers: The Initiative (2007) #24 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/64779",
                            name: "Avengers: The Initiative (2007) #34 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/64976",
                            name: "Avengers: The Initiative (2007) #35 - Int",
                            type: "interiorStory"
                        }],
                    returned: 9
                },
                events: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010829/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/318",
                            name: "Dark Reign"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                            name: "Secret Invasion"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/273",
                            name: "Siege"
                        }],
                    returned: 3
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/257/bengal?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Bengal_(Duc_No_Tranh)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010829/bengal?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009180,
                name: "Beta-Ray Bill",
                description: "",
                modified: "2013-10-17T14:41:43-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/3/90/52602f3e88d25",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009180",
                comics: {
                    available: 21,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009180/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36644",
                            name: "Annihilators (2010) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38642",
                            name: "Annihilators (2010) #1 (GARNER VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36647",
                            name: "Annihilators (2010) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38640",
                            name: "Annihilators (2010) #2 (DAVIS VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36646",
                            name: "Annihilators (2010) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38641",
                            name: "Annihilators (2010) #3 (DJURDJEVIC VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36645",
                            name: "Annihilators (2010) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/38643",
                            name: "Annihilators (2010) #4 (VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39982",
                            name: "Annihilators: Earthfall (2011) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/41284",
                            name: "Annihilators: Earthfall (2011) #1 (Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39981",
                            name: "Annihilators: Earthfall (2011) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/21741",
                            name: "Avengers: The Initiative (2007) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37979",
                            name: "The Thanos Imperative: Devastation (2010) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/18656",
                            name: "Thor (1998) #32"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11665",
                            name: "Thor (1966) #337"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11685",
                            name: "Thor (1966) #357"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11768",
                            name: "Thor (1966) #440"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/29474",
                            name: "Thor by Walter Simonson (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1165",
                            name: "Thor Legends Vol. 2: Walt Simonson Book II (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36073",
                            name: "Thor: Blood & Thunder (Trade Paperback)"
                        }],
                    returned: 20
                },
                series: {
                    available: 10,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009180/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13025",
                            name: "Annihilators (2010 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14818",
                            name: "Annihilators: Earthfall (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
                            name: "Avengers: The Initiative (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13604",
                            name: "The Thanos Imperative: Devastation (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/581",
                            name: "Thor (1998 - 2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2083",
                            name: "Thor (1966 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/10491",
                            name: "Thor by Walter Simonson (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/223",
                            name: "Thor Legends Vol. 2: Walt Simonson Book II (2003)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/12850",
                            name: "Thor: Blood & Thunder (2010 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/11981",
                            name: "Thor: Worldengine (2010 - Present)"
                        }],
                    returned: 10
                },
                stories: {
                    available: 22,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009180/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/16971",
                            name: "Doom!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17013",
                            name: "A New Deal From An Old Deck, or, The Credit Card Soldiers",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/17213",
                            name: "Thor (1966) #440",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/39973",
                            name: "Forever Kursed",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/39976",
                            name: "This Kursed Earth...!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/47793",
                            name: "Avengers: The Initiative (2007) #16 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/64101",
                            name: "Cover #64101",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/79831",
                            name: "Thor: Blood & Thunder TPB",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/80420",
                            name: "Interior #80420",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/81312",
                            name: "Cover #81312 ",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/81315",
                            name: "Annihilators (2010) #4",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/81316",
                            name: "Annihilators #3",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/81318",
                            name: "ANNIHILATORS 2 ",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/83506",
                            name: "Interior From The Thanos Imperative: Devestation (2010) #1",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/84823",
                            name: "ANNIHILATORS 2 DAVIS VARIANT ",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/85238",
                            name: "Annihilators (2010) #1, Garner Cover",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/89213",
                            name: "Annihilators #3 (Djurdjevic Variant)",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/90524",
                            name: "Annihilators (2010) #4, VARIANT",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/90729",
                            name: "Annihilators: Earthfall (2011) #2",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/90731",
                            name: "Annihilators: Earthfall (2011) #1 Cover",
                            type: "cover"
                        }],
                    returned: 20
                },
                events: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009180/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                            name: "Secret Invasion"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/294",
                            name: "The Thanos Imperative"
                        }],
                    returned: 2
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2686/beta-ray_bill?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Beta_Ray_Bill?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009180/beta-ray_bill?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010325,
                name: "Betty Brant",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4c7c644f453fb",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010325",
                comics: {
                    available: 15,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010325/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37255",
                            name: "Alias Omnibus (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24421",
                            name: "Amazing Spider-Man (1999) #614"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/28227",
                            name: "Amazing Spider-Man (1999) #622"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37071",
                            name: "Amazing Spider-Man (1999) #647 (MCNIVEN VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/39291",
                            name: "Amazing Spider-Man (1999) #654.1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/35517",
                            name: "Amazing Spider-Man (1999) #655"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/40886",
                            name: "Amazing Spider-Man (1999) #655 (2nd Printing Variant)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/35503",
                            name: "Amazing Spider-Man (1999) #665"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/40025",
                            name: "Amazing Spider-Man (1999) #665 (AMAZING SPIDER-MAN 665 I AM CAPTAIN AMERICA VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/35513",
                            name: "Amazing Spider-Man (1999) #666"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16906",
                            name: "Amazing Spider-Man Annual (1964) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16890",
                            name: "Amazing Spider-Man Annual (1964) #16"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/16543",
                            name: "Avengers: The Initiative (2007) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1879",
                            name: "Marvel Masterworks: The Amazing Spider-Man Vol. 7 - (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/41760",
                            name: "Venom (2011) #5 (2nd Printing Variant)"
                        }],
                    returned: 15
                },
                series: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010325/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13383",
                            name: "Alias Omnibus (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                            name: "Amazing Spider-Man (1999 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
                            name: "Amazing Spider-Man Annual (1964 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
                            name: "Avengers: The Initiative (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1389",
                            name: "Marvel Masterworks: The Amazing Spider-Man Vol. 7 - (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13911",
                            name: "Venom (2011 - Present)"
                        }],
                    returned: 6
                },
                stories: {
                    available: 14,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010325/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/33364",
                            name: "Avengers: The Initiative (2007) #7 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/35407",
                            name: "",
                            type: "profile"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/35456",
                            name: "Cover #35456",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/54200",
                            name: "Amazing Spider-Man (1999) #614 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/61677",
                            name: "Amazing Spider-Man (1999) #622 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/78514",
                            name: "Amazing Spider-Man (1999) #665 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/78534",
                            name: "Amazing Spider-Man (1999) #666 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/78542",
                            name: "Amazing Spider-Man (1999) #655 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/82495",
                            name: "[untitled]",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/89209",
                            name: "Amazing Spider-Man (1999) #654.1 - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/90821",
                            name: "Amazing Spider-Man (1999) #665, I Am Captain America Variant - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/92597",
                            name: "Amazing Spider-Man (1999) #655, 2nd Printing Variant - Int",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/94453",
                            name: "Interior #94453",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/94768",
                            name: "Amazing Spider-Man (1999) #647, MCNIVEN VARIANT",
                            type: "cover"
                        }],
                    returned: 14
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010325/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/305",
                            name: "Spider-Island"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2793/betty_brant?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Brant,_Betty?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010325/betty_brant?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009548,
                name: "Betty Ross",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/2/b0/4ce5a12071562",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009548",
                comics: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009548/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/29378",
                            name: "Incredible Hulk Vol. 3: World War Hulks (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30015",
                            name: "Incredible Hulks (2009) #607 (MCGUINNESS VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36908",
                            name: "Incredible Hulks (2009) #634"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1500",
                            name: "Marvel Masterworks: The Incredible Hulk Vol. 2 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/15493",
                            name: "Marvel Super-Heroes (1967) #82"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/11411",
                            name: "Tales to Astonish (1959) #66"
                        }],
                    returned: 6
                },
                series: {
                    available: 5,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009548/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/10261",
                            name: "Incredible Hulk Vol. 3: World War Hulks (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8842",
                            name: "Incredible Hulks (2009 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1404",
                            name: "Marvel Masterworks: The Incredible Hulk Vol. 2 (2004)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2300",
                            name: "Marvel Super-Heroes (1967 - 1982)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2080",
                            name: "Tales to Astonish (1959 - 1968)"
                        }],
                    returned: 5
                },
                stories: {
                    available: 6,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009548/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12274",
                            name: "The Power of Dr. Banner!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/31515",
                            name: "If I Kill You--I Die!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/37765",
                            name: "The Invasion of the Lava Men",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/63909",
                            name: "INCREDIBLE HULK VOL. 3 #1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/81853",
                            name: "Interior #81853",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/94793",
                            name: "Incredible Hulks (2009) #607, MCGUINNESS VARIANT",
                            type: "cover"
                        }],
                    returned: 6
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009548/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2751/betty_ross?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Ross-Banner%2C_Betty?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009548/betty_ross?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011138,
                name: "Beyonder",
                description: "",
                modified: "2013-11-20T17:06:32-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/7/10/528d31df87c49",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011138",
                comics: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011138/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20158",
                            name: "Doctor Strange (1974) #74"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/10374",
                            name: "New Mutants (1983) #37"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/41161",
                            name: "Shame Itself (2011) #1"
                        }],
                    returned: 3
                },
                series: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011138/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3740",
                            name: "Doctor Strange (1974 - 1988)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2055",
                            name: "New Mutants (1983 - 1991)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/15295",
                            name: "Shame Itself (2011)"
                        }],
                    returned: 3
                },
                stories: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011138/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/21450",
                            name: "If I Should Die",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43178",
                            name: "Cover #43178",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/93178",
                            name: "Interior #93178",
                            type: "interiorStory"
                        }],
                    returned: 3
                },
                events: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011138/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/271",
                            name: "Secret Wars II"
                        }],
                    returned: 1
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/260/beyonder?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Maker?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011138/beyonder?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011296,
                name: "Bi-Beast",
                description: "",
                modified: "2011-05-24T16:45:33-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011296",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011296/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011296/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011296/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/79773",
                            name: "Cover #79773",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/79777",
                            name: "Incredible Hulks (2009) #631",
                            type: "cover"
                        }],
                    returned: 2
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011296/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/261/bi-beast?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Bi-Beast?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011296/bi-beast?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010843,
                name: "Big Bertha",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4c0035cfca8b6",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010843",
                comics: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010843/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8463",
                            name: "Deadpool (1997) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8464",
                            name: "Deadpool (1997) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/1858",
                            name: "G.L.a. (2005) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3117",
                            name: "G.L.a.: Misassembled (Trade Paperback)"
                        }],
                    returned: 4
                },
                series: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010843/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2005",
                            name: "Deadpool (1997 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/823",
                            name: "G.L.a. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1375",
                            name: "G.L.a.: Misassembled (2005)"
                        }],
                    returned: 3
                },
                stories: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010843/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4183",
                            name: "1 of 4 - 4LXS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24523",
                            name: "Deadpool (1997) #10",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24527",
                            name: "Deadpool (1997) #11",
                            type: "interiorStory"
                        }],
                    returned: 3
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010843/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2840/big_bertha?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Big_Bertha?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010843/big_bertha?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009181,
                name: "Big Wheel",
                description: "",
                modified: "2012-12-27T15:37:56-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/3/00/4c0040b26877d",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009181",
                comics: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009181/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6575",
                            name: "Amazing Spider-Man (1963) #183"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/46462",
                            name: "Superior Spider-Man (2013) #1"
                        }],
                    returned: 2
                },
                series: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009181/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1987",
                            name: "Amazing Spider-Man (1963 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/17554",
                            name: "Superior Spider-Man (2013 - Present)"
                        }],
                    returned: 2
                },
                stories: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009181/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13727",
                            name: "Cover #13727",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/104513",
                            name: "story from Superior Spider-Man (2013) #1",
                            type: "interiorStory"
                        }],
                    returned: 2
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009181/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/3212/big_wheel?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Big_Wheel?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009181/big_wheel?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011262,
                name: "Bill Hollister",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011262",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011262/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011262/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011262/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011262/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/2900/bill_hollister?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Hollister,_Bill?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011262/bill_hollister?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009182,
                name: "Bishop",
                description: "",
                modified: "2013-10-17T14:41:53-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/3/70/52602f4b42d98",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009182",
                comics: {
                    available: 241,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009182/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17701",
                            name: "Age of Apocalypse: The Chosen (1995) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5844",
                            name: "Avengers Assemble Vol. 4 (Hardcover)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17851",
                            name: "Bishop (1994) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17852",
                            name: "Bishop (1994) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17853",
                            name: "Bishop (1994) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/17854",
                            name: "Bishop (1994) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20609",
                            name: "Bishop: The Last X-Man (1999) #1"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20618",
                            name: "Bishop: The Last X-Man (1999) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20619",
                            name: "Bishop: The Last X-Man (1999) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20620",
                            name: "Bishop: The Last X-Man (1999) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20621",
                            name: "Bishop: The Last X-Man (1999) #6"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20622",
                            name: "Bishop: The Last X-Man (1999) #7"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20623",
                            name: "Bishop: The Last X-Man (1999) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20624",
                            name: "Bishop: The Last X-Man (1999) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20610",
                            name: "Bishop: The Last X-Man (1999) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20611",
                            name: "Bishop: The Last X-Man (1999) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20612",
                            name: "Bishop: The Last X-Man (1999) #12"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20613",
                            name: "Bishop: The Last X-Man (1999) #13"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20614",
                            name: "Bishop: The Last X-Man (1999) #14"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20615",
                            name: "Bishop: The Last X-Man (1999) #15"
                        }],
                    returned: 20
                },
                series: {
                    available: 59,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009182/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3614",
                            name: "Age of Apocalypse: The Chosen (1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1816",
                            name: "Avengers Assemble Vol. 4 (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3626",
                            name: "Bishop (1994 - 1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3753",
                            name: "Bishop: The Last X-Man (1999 - 2001)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/784",
                            name: "Black Panther (2005 - 2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1726",
                            name: "Black Panther: The Bride (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/4002",
                            name: "Cable (2008 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1995",
                            name: "Cable (1993 - 2002)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/4059",
                            name: "Cable Classic Vol. 1 (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/10105",
                            name: "Civil War: X-Men (2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1110",
                            name: "Civil War: X-Men (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1965",
                            name: "Civil War: X-Men (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3874",
                            name: "Clandestine Classic Premiere (2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/733",
                            name: "District X (2004 - 2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1360",
                            name: "District X Vol. 2: Underground (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/421",
                            name: "Fantastic Four (1998 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1430",
                            name: "Marvel Weddings (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2049",
                            name: "Maximum Security (2000 - 2001)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8133",
                            name: "Ms. Marvel Vol. 6: Ascension (2009 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/915",
                            name: "Mutopia X (2005)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 297,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009182/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/477",
                            name: "Cover #477",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/764",
                            name: "1 of 3 -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/774",
                            name: "3 of 3 - The First Foursaken",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3189",
                            name: "2 of 2: One of Us",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3846",
                            name: "5 of 5 - Bride of the Panther",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3848",
                            name: "Cover #3848",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4866",
                            name: "1 of 5- 5XLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6126",
                            name: "1 of 4",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22362",
                            name: "Tough Love",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22364",
                            name: "Snikts and Bones",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/22366",
                            name: "One of these Days",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24198",
                            name: "The Phalanx Sanction",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24206",
                            name: "Mired in Destiny",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24257",
                            name: "The Future is Now!",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24344",
                            name: "In My Eyes",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24349",
                            name: "I Still Believe I Cannot Be Saved",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24492",
                            name: "Interior #24492",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24493",
                            name: "Endings",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24494",
                            name: "Cover #24494",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24495",
                            name: "Racing the Night",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 8,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009182/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/227",
                            name: "Age of Apocalypse"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/238",
                            name: "Civil War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/249",
                            name: "Fatal Attractions"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/251",
                            name: "House of M"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/37",
                            name: "Maximum Security"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/299",
                            name: "Messiah CompleX"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/298",
                            name: "Messiah War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/154",
                            name: "Onslaught"
                        }],
                    returned: 8
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/264/bishop?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Bishop_(Lucas_Bishop)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009182/bishop?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1011224,
                name: "Bishop (Ultimate)",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1011224",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011224/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011224/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011224/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1011224/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/264/bishop?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Bishop%20(Ultimate)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1011224/bishop_ultimate?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009183,
                name: "Black Bird",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009183",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009183/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009183/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009183/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009183/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/269/black_bird?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009183/black_bird?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009184,
                name: "Black Bolt",
                description: "",
                modified: "2013-10-24T14:39:01-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/1/20/52696929dc721",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009184",
                comics: {
                    available: 88,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009184/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/7088",
                            name: "Avengers (1963) #221"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37287",
                            name: "Avengers Academy (2010) #2 (2ND PRINTING VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4425",
                            name: "Black Panther (2005) #18"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4516",
                            name: "Black Panther (2005) #18 (TURNER VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5092",
                            name: "Black Panther (2005) #20"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13513",
                            name: "Black Panther: Civil War (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/5216",
                            name: "Black Panther: The Bride (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8552",
                            name: "Earth X (1999) #2"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8553",
                            name: "Earth X (1999) #3"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8554",
                            name: "Earth X (1999) #4"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8555",
                            name: "Earth X (1999) #5"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8558",
                            name: "Earth X (1999) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8559",
                            name: "Earth X (1999) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8549",
                            name: "Earth X (1999) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/8550",
                            name: "Earth X (1999) #11"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/4241",
                            name: "Earth X (New (Trade Paperback)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13323",
                            name: "Fantastic Four (1996) #8"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13324",
                            name: "Fantastic Four (1996) #9"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13313",
                            name: "Fantastic Four (1996) #10"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/13315",
                            name: "Fantastic Four (1996) #12"
                        }],
                    returned: 20
                },
                series: {
                    available: 40,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009184/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
                            name: "Avengers (1963 - 1996)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9086",
                            name: "Avengers Academy (2010 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/784",
                            name: "Black Panther (2005 - 2008)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2226",
                            name: "Black Panther: Civil War (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1726",
                            name: "Black Panther: The Bride (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/378",
                            name: "Earth X (1999)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1806",
                            name: "Earth X (New (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2123",
                            name: "Fantastic Four (1996 - 1997)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
                            name: "Fantastic Four (1961 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/421",
                            name: "Fantastic Four (1998 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2445",
                            name: "Fantastic Four/Inhumans (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/13440",
                            name: "FF (2010 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/4885",
                            name: "Guardians of the Galaxy (2008 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1812",
                            name: "Heroes Reborn: Fantastic Four (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2027",
                            name: "Inhumans (2000)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/19477",
                            name: "Inhumans: Attilan Rising (2015 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9347",
                            name: "Iron Man Legacy (2010 - 2011)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2039",
                            name: "Marvel Comics Presents (1988 - 1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1866",
                            name: "Mighty Avengers (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/753",
                            name: "New Avengers (2004 - 2010)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 82,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009184/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3469",
                            name: "4 of 4 - Sentry",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3846",
                            name: "5 of 5 - Bride of the Panther",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3848",
                            name: "Cover #3848",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3852",
                            name: "Cover #3852",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6232",
                            name: "1 of 6 - Silent War",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6238",
                            name: "1 of 5 - 5XLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/7906",
                            name: "2 of 5 - 5 XLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/8689",
                            name: "3 of 5 - 5XLS - Secret Wars",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/12898",
                            name: "The Marvel Rage!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13145",
                            name: "Suddenly ... The Secret Defenders",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13151",
                            name: "It's Always Darkest Before the ... DOOM!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13259",
                            name: "If Death Be Our Destiny--!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13334",
                            name: "In Memoriam!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13341",
                            name: "At the Mercy of Maximus!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/14715",
                            name: "Cover #14715",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/20769",
                            name: "What if Black Bolt got the Hiccups?",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/20802",
                            name: "What if Black Bolt Hosted a Television Talk Show?",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/23119",
                            name: "Cover #23119",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/23120",
                            name: "History Lesson",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/24740",
                            name: "Woof",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 8,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009184/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/238",
                            name: "Civil War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/315",
                            name: "Infinity"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/317",
                            name: "Inhumanity"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/295",
                            name: "Realm of Kings"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                            name: "Secret Invasion"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/323",
                            name: "Secret Wars (2015)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/276",
                            name: "War of Kings"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/277",
                            name: "World War Hulk"
                        }],
                    returned: 8
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/4/black_bolt?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Black_Bolt?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009184/black_bolt?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1017330,
                name: "Black Bolt (Marvel War of Heroes)",
                description: "",
                modified: "2013-09-18T11:01:06-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/5239c021b3bfc",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1017330",
                comics: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017330/comics",
                    items: [],
                    returned: 0
                },
                series: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017330/series",
                    items: [],
                    returned: 0
                },
                stories: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017330/stories",
                    items: [],
                    returned: 0
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1017330/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/4/black_bolt?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1017330/black_bolt_marvel_war_of_heroes?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1009185,
                name: "Black Cat",
                description: "",
                modified: "2013-10-24T13:07:32-0400",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/e/03/526952357d91c",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1009185",
                comics: {
                    available: 81,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009185/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6587",
                            name: "Amazing Spider-Man (1963) #194"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6588",
                            name: "Amazing Spider-Man (1963) #195"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6599",
                            name: "Amazing Spider-Man (1963) #204"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6600",
                            name: "Amazing Spider-Man (1963) #205"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6623",
                            name: "Amazing Spider-Man (1963) #226"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/6624",
                            name: "Amazing Spider-Man (1963) #227"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24413",
                            name: "Amazing Spider-Man (1999) #606"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/24414",
                            name: "Amazing Spider-Man (1999) #607"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/28710",
                            name: "Amazing Spider-Man (1999) #612 (VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/28226",
                            name: "Amazing Spider-Man (1999) #621"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/28227",
                            name: "Amazing Spider-Man (1999) #622"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30305",
                            name: "Amazing Spider-Man (1999) #630"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/32402",
                            name: "Amazing Spider-Man (1999) #630 (QUINONES VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/33328",
                            name: "Amazing Spider-Man (1999) #632 (HEROIC AGE VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30320",
                            name: "Amazing Spider-Man (1999) #645"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/34135",
                            name: "Amazing Spider-Man (1999) #648"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37045",
                            name: "Amazing Spider-Man (1999) #648 (CASELLI VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/30323",
                            name: "Amazing Spider-Man (1999) #648 (CAMPBELL VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/36937",
                            name: "Amazing Spider-Man (1999) #648 (BLANK COVER VARIANT)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37073",
                            name: "Amazing Spider-Man (1999) #648 (WRAPAROUND VARIANT)"
                        }],
                    returned: 20
                },
                series: {
                    available: 34,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009185/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                            name: "Amazing Spider-Man (1999 - 2013)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1987",
                            name: "Amazing Spider-Man (1963 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9835",
                            name: "Amazing Spider-Man Presents: Black Cat (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/925",
                            name: "Claws (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/12916",
                            name: "Daredevil (2011 - 2014)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14701",
                            name: "Defenders (2011 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/14074",
                            name: "Essential Spider-Man Vol. 10 (2011 - Present)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/823",
                            name: "G.L.a. (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1375",
                            name: "G.L.a.: Misassembled (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/9311",
                            name: "Girl Comics (2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1121",
                            name: "Heroes for Hire (2006 - 2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1966",
                            name: "Heroes for Hire Vol. 1: Civil War (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2700",
                            name: "Heroes for Hire Vol. 2: Ahead of the Curve (2007)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2039",
                            name: "Marvel Comics Presents (1988 - 1995)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1696",
                            name: "Marvel Comics Presents: Wolverine Vol. 3 (2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/721",
                            name: "Marvel Knights Spider-Man (2004 - 2006)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1556",
                            name: "Marvel Knights Spider-Man Vol. 1 (2005)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1866",
                            name: "Mighty Avengers (2007 - 2010)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2271",
                            name: "Peter Parker, the Spectacular Spider-Man (1976 - 1998)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/2060",
                            name: "Peter Parker: Spider-Man (1999 - 2003)"
                        }],
                    returned: 20
                },
                stories: {
                    available: 89,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009185/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1727",
                            name: "4 of 6 xLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/2973",
                            name: "2 of 4 -",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/3005",
                            name: "5 of 5 - Feral",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4185",
                            name: "2 of 4 - 4XLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/4952",
                            name: "3 of 3 - 3XLS",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6162",
                            name: "2 of 5",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6164",
                            name: "3 of 3",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6166",
                            name: "1 of 2",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/6170",
                            name: "1 of 3 - Story C",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/7872",
                            name: "2 of 3 - Story C",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/7874",
                            name: "3 of 3 - Story C",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/7882",
                            name: "Mighty Avengers (2007) #1",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/8325",
                            name: "3 of 3 - Story C",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/8337",
                            name: "1 of 6 - Ultron",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13753",
                            name: "Cover #13753",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13755",
                            name: "The Spider's Web",
                            type: "letters"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13756",
                            name: "Cover #13756",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13757",
                            name: "Nine Lives Has The Black Cat!",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13779",
                            name: "Cover #13779",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/13780",
                            name: "The Black Cat Aways Lands on Her Feet!",
                            type: "interiorStory"
                        }],
                    returned: 20
                },
                events: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1009185/events",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/events/238",
                            name: "Civil War"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/255",
                            name: "Initiative"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/151",
                            name: "Maximum Carnage"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/events/277",
                            name: "World War Hulk"
                        }],
                    returned: 4
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/271/black_cat?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Black_Cat_(Felicia_Hardy)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1009185/black_cat?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010910,
                name: "Black Cat (Ultimate)",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/80/4c00357da502e",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010910",
                comics: {
                    available: 4,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010910/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37460",
                            name: "Ultimate Comics Spider-Man (2009) #151"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/37462",
                            name: "Ultimate Comics Spider-Man (2009) #152"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/2416",
                            name: "Ultimate Spider-Man (2000) #84"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/3122",
                            name: "Ultimate Spider-Man Vol. 14: Warriors (Trade Paperback)"
                        }],
                    returned: 4
                },
                series: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010910/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/8509",
                            name: "Ultimate Comics Spider-Man (2009 - 2012)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/466",
                            name: "Ultimate Spider-Man (2000 - 2009)"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/series/1425",
                            name: "Ultimate Spider-Man Vol. 14: Warriors (2005)"
                        }],
                    returned: 3
                },
                stories: {
                    available: 3,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010910/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/1360",
                            name: "6 of 7 - Warriors",
                            type: "cover"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/82919",
                            name: "Interior Story From Ultimate Comics Spider-Man (2009) #151",
                            type: "interiorStory"
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/82922",
                            name: "Cover #82922",
                            type: "cover"
                        }],
                    returned: 3
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010910/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/271/black_cat?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "wiki",
                        url: "http://marvel.com/universe/Black_Cat_(Ultimate)?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010910/black_cat_ultimate?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }, {
                id: 1010859,
                name: "Black Crow",
                description: "",
                modified: "1969-12-31T19:00:00-0500",
                thumbnail: {
                    path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    extension: "jpg"
                },
                resourceURI: "http://gateway.marvel.com/v1/public/characters/1010859",
                comics: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010859/comics",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/comics/20185",
                            name: "Doctor Strange, Sorcerer Supreme (1988) #25"
                        }],
                    returned: 1
                },
                series: {
                    available: 1,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010859/series",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/series/3741",
                            name: "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
                        }],
                    returned: 1
                },
                stories: {
                    available: 2,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010859/stories",
                    items: [{
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43243",
                            name: "The Cheyenne Gods demand vengeance...and only Black Crow, Red Wolf, and Doc stand in their way!",
                            type: ""
                        }, {
                            resourceURI: "http://gateway.marvel.com/v1/public/stories/43244",
                            name: "Always Autumn",
                            type: ""
                        }],
                    returned: 2
                },
                events: {
                    available: 0,
                    collectionURI: "http://gateway.marvel.com/v1/public/characters/1010859/events",
                    items: [],
                    returned: 0
                },
                urls: [{
                        type: "detail",
                        url: "http://marvel.com/characters/273/black_crow?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }, {
                        type: "comiclink",
                        url: "http://marvel.com/comics/characters/1010859/black_crow?utm_campaign=apiRef&utm_source=a209df55a8f47a76b87abf209cab27ec"
                    }]
            }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data0.service.js.map