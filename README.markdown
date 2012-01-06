# Synergipsum

This module returns strings of awful synergy speak, like you'd expect to read from some technoweenie blogger pundit, management type, or Silicon Valley angel investor.

It exports a `SynergIpsum` class with create method and a `generate` function which takes an argument for the number of paragraphs of blather you'd like.

For example:

    npm install synergipsum

    node

    > S = require('synergipsum');
    { create: [Function], _class: [Function] }
    s0 = S.create(2); // a synergipsum w/ 2 paragraphs
    s0.generate();
    Synergipsum: chunk barfed up with these characteristics: 2 paragraphs / 58 words
    'Continuously revolutionize extensive MongoDB clusters via social
    interfaces. Authoritatively unleash geofenced ninjas through client-based
    portals. Globally procrastinate optimal methodologies via cutting-edge
    \'outside the box\' thinking. \n\nAuthoritatively enable optimal Riak
    clusters without equity invested web caching engines. Objectively
    disintermediate state of the art collaboration and idea-sharing without
    global quality vectors. Efficiently embrace magnetic MVPs via highly
    efficient Android apps.'

Maybe it will do more later, and the vocabulary will definitely continue to be expanded over time, too.