# Synergipsum

This goofy module returns strings of awful synergy speak, like what you'd
expect to hear in the average tech startup pitch or pointy haired boss.
Best enjoyed when read to yourself in the voice of Bill Lumbergh.

The module exports a `SynergIpsum` constructor with a `create` function;
instances of `SynergIpsum` provide a `generate` function that takes an
argument for the number of sentences of blather you'd like.

Pretty simple, but probably not quite baked, so use at own risk,
without warranty of fitness, you'll shoot your eye out, etc.

## Example installation and invocation

```
npm install -g synergipsum
```

```
node

var Synergy = require('synergipsum')
var blather = Synergy.create(7) // synergy speak with 7 sentences
blather.generate()
```

Maybe it will do more later, and the vocabulary will definitely continue
to be expanded over time. This is also my first ever Node.js module, so feel
free to offer suggestions, pull requests, and all of the neighborly things.

## Thanks

I could not have made this module without inspiration from similar things
with established vocabularies. The majority of syngergipsum vocabulary was
borrowed from the most excellent
[Web Economy Bullshit Generator](http://www.dack.com/web/bullshit.html).

Hopefully its output is as fun for you as it was for me to learn a
little with. Speaking of which, I'd like to thank Pedro Teixeira (@pgte) for
his fantastic [NodeTuts](http://nodetuts.com/) screencasts, and in
particular for #17, which was the inspiration for this module. :)

I highly recommend checking out both NodeTuts and Pedro's
["Hands-on Node.js"](https://leanpub.com/hands-on-nodejs) book as well.
