# Synergipsum

[![npm version](https://badge.fury.io/js/synergipsum.svg)](http://badge.fury.io/js/synergipsum)

This goofy module returns strings of awful synergy speak, like what you'd
expect to hear in the average tech startup pitch or pointy haired boss.
Best enjoyed when read to yourself in the voice of Bill Lumbergh.

The module exports a `SynergIpsum` constructor with a `create` function;
instances of `SynergIpsum` provide a `generate` function that takes an
argument for the number of sentences of blather you'd like.

Pretty simple, but probably also half-baked, so use at own risk, without
warranty of fitness expressed or implied, void where prohibited, 
you'll shoot your eye out, etc.

## Example installation and invocation

```
npm install synergipsum
```

```
node

var synergy = require('synergipsum')
var blather = synergy.create(7) // synergy speak with 7 sentences
blather.generate()
```

Maybe this will do more later, and the vocabulary might expand over time. 
This is also my first ever Node.js module, so feel free to offer suggestions,
pull requests, and all the neighborly things.

## Thanks

I could not have made this module without inspiration from similar things
with established vocabularies. I borrowed the majority of syngergipsum's
vocabulary from the most excellent 
[Web Economy Bullshit Generator](http://www.dack.com/web/bullshit.html).

Hopefully its output is as fun for you as it was for me to learn a
little with. Speaking of which, I'd like to thank Pedro Teixeira (@pgte) for
his fantastic [NodeTuts](http://nodetuts.com/) screencasts, and in
particular for #17, which was the inspiration for this module. :)

I highly recommend checking out both NodeTuts and Pedro's
["Hands-on Node.js"](https://leanpub.com/hands-on-nodejs) book as well.
