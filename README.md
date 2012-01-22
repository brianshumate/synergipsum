# Synergipsum

This goofy module returns strings of awful synergy speak, like what you'd expect to hear in the average tech startup pitch. Best enjoyed when read to yourself in the voice of Bill Lumberg.

The module exports a `SynergIpsum` constructor with `create` function; instances of `SynergIpsum` provide a `generate` function that takes an argument for the number of paragraphs of blather you'd like.

Pretty simple, but probably not quite properly baked, so constructive criticism is certainly welcome.

For example:

    npm install synergipsum

    node

    > S = require('synergipsum');
    { create: [Function], _class: [Function] }
    > s0 = S.create(2); // a synergipsum w/ 2 paragraphs
    > s0.generate();
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

This is also my first ever Node.js module, so feel free to offer suggestions, pull requests, and all of the neighborly things which are great about free and open source software.

## Thanks

I could not have made this module without inspiration from similar things with established vocabularies. The majority of syngergipsum vocabulary was borrowed from the most excellent [Web Economy Bullshit Generator](http://www.dack.com/web/bullshit.html).

Hopefully its output is as fun for you as it was for me to learn a little with. Speaking of which, I'd like to thank Pedro Teixeira (@pgte) for his fantastic [NodeTuts](http://nodetuts.com/) screencasts, and in particular for #17, which was the inspiration for this module. :)

I highly recommend checking out both NodeTuts and Pedro's ["Hands-on Node.js"](http://nodetuts.com/handson-nodejs-book.html) book as well.