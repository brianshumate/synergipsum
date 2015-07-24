// yes, this is indeed the saddest of all pandabones...

var i
var j
var module
var adjectives = [ '24/7', '24/7/365', 'accurate', 'adaptive', 'agile',
  'alternative', 'an expanded array of', 'B2B', 'B2C',
  'backend', 'backward-compatible', 'best-of-breed',
  'bleeding-edge', 'brandcuff-free', 'bricks-and-clicks',
  'business', 'clicks-and-mortar', 'client-based',
  'client-centered', 'client-centric', 'client-focused',
  'collaborative', 'compelling', 'competitive',
  'continuous', 'cooperative', 'corporate',
  'cost effective', 'covalent', 'cross functional',
  'cross-media', 'cross-platform', 'cross-unit',
  'customer directed', 'customized', 'cutting-edge',
  'distinctive', 'distributed', 'diverse', 'dynamic',
  'e-business', 'economically sound', 'effective',
  'efficient', 'emerging', 'empowered', 'enabled',
  'end-to-end', 'enterprise', 'enterprise-wide', 'epic',
  'equity invested', 'error-free', 'ethical', 'excellent',
  'exceptional', 'extensible', 'extensive', 'flexible',
  'focused', 'freemium', 'frictionless', 'front-end',
  'fully researched', 'fully tested', 'functional',
  'functionalized', 'future-proof', 'global', 'go forward',
  'geocentric', 'geofenced', 'geo-social', 'goal-oriented',
  'granular', 'high leverage', 'high standards in',
  'high-payoff', 'high-quality', 'highly efficient',
  'HTML5', 'holistic', 'impactful', 'inexpensive',
  'innovative', 'installed base', 'integrated',
  'interactive', 'interdependent', 'intermandated',
  'interoperable', 'intuitive', 'just in time', 'kinda',
  'leading-edge', 'lean', 'leveraged',
  'long-term high-impact', 'low-risk high-yield',
  'magnetic', 'maintainable', 'market positioning',
  'market-driven', 'mission-critical', 'mobile',
  'multidisciplinary', 'multifunctional',
  'multimedia based', 'next-generation',
  'object oriented', 'one-to-one', 'open-source',
  'optimal', 'orthogonal', 'out-of-the-box', 'pandemic',
  'parallel', 'performance based', 'performant', 'pivotal',
  'plug-and-play', 'premier', 'premium',
  'principle-centered', 'proactive', 'process-centric',
  'professional', 'progressive', 'prospective', 'quality',
  'real-time', 'reliable', 'resource sucking',
  'resource maximizing', 'resource-leveling',
  'revolutionary', 'robust', 'scalable', 'seamless',
  'social', 'social-aware', 'sorta', 'stand-alone',
  'standardized', 'standards compliant', 'state of the art',
  'stealth mode', 'sticky', 'strategic', 'superior',
  'sustainable', 'synergistic', 'tactical', 'team building',
  'team driven', 'technically sound', 'timely', 'top-line',
  'transparent', 'turnkey', 'ubiquitous', 'unique',
  'user-centric', 'user friendly', 'value-added',
  'vertical', 'viral', 'virtual', 'visionary',
  'web scale', 'web-enabled', 'wireless', 'world-class',
  'worldwide', '2.0', '3.0' ]
var adverbs = [ 'appropriately', 'assertively', 'authoritatively',
  'collaboratively', 'cooperatively', 'compellingly',
  'competently', 'completely', 'continually', 'continuously',
  'conveniently', 'credibly', 'distinctively', 'dramatically',
  'dynamically', 'efficiently', 'energistically',
  'enthusiastically', 'epically', 'fundamentally',
  'geospatially', 'globally', 'holisticly', 'interactively',
  'intrinsically', 'monotonectally', 'objectively',
  'opportunistically', 'phosfluorescently', 'proactively',
  'precipitously', 'professionally', 'progressively',
  'quickly', 'rapidiously', 'seamlessly', 'synergistically',
  'uniquely' ]
var conjunctions = [ 'apropos', 'in lieu of', 'through', 'via', 'vis-a-vis',
  'with', 'without', 'and', 'before', 'after', 'whereas',
  'for', 'rather than' ]
var nouns = [ 'action items', 'aggregation engines', 'alignments',
  'Android apps', 'applications', 'app stores', 'architectures',
  'backlogs', 'bandwidth', 'benefits', 'best practices',
  'blockers', 'blog posts', 'bookmarklets', 'brand cuffs',
  'brogrammers', 'catalysts for change', 'channels',
  'cloud services', 'collaboration and idea-sharing',
  'communities', 'content', 'content curation platforms',
  'conferences', 'convergence', 'core competencies',
  'customer service', 'DSLs', 'data', 'deliverables',
  'devops teams', 'e-business', 'e-commerce',
  'ecosystems', 'e-markets', 'Erlang wizards', 'e-tailers',
  'e-services', 'event loops', 'experiences', 'expertise',
  'eyeballs', 'functionalities', 'game-changer', 'gists',
  'git repositories', 'growth strategies', 'gurus',
  'Haskell developers', 'hipsters', 'human capital', 'ideas',
  'imperatives', 'impetus', 'infomediaries', 'information',
  'infrastructures', 'initiatives', 'innovation',
  'intellectual capital', 'intellectual properties',
  'interfaces', 'organic sources', 'JavaScript developers',
  'leadership', 'long tail', 'low-hanging fruit', 'MVPs',
  'leadership skills', 'manufactured products', 'markets',
  'market type theories', 'materials', 'mashups',
  'meta-services', 'methodologies', 'methods of empowerment',
  'metrics', 'mindshare', 'minimum viable products',
  'mobile apps', 'models', 'networks', 'niches', 'niche markets',
  'ninjas', 'Node.JS developers', 'NoSQL', 'offshoring',
  'opportunities', 'outside the box thinking', 'outsourcing',
  'paradigms', 'partnerships', 'pirates', 'platforms',
  'podcasts', 'portals', 'potentialities',
  'process improvements', 'processes', 'products', 'programmers',
  'products', 'quality vectors', 'REST APIs', 'REST endpoints',
  'rock stars', 'RSS feeds', 'relationships', 'resources',
  'results', 'Riak clusters', 'ROI', 'robots', 'rockstars',
  'Ruby apps', 'Ruby on Rails apps', 'scenarios', 'schemas',
  'services', 'social media strategies', 'solutions', 'sources',
  'strategic theme areas', 'supply chains', 'synergy', 'systems',
  'system logs', 'technologies', 'technologists', 'technology',
  'testing procedures', 'the cloud', 'thought leaders',
  'total linkage', 'tweets', 'tweetstreams', 'unconferences',
  'users', 'value', 'web-readiness', 'web services',
  'web caching engines', 'WebOS apps', 'webinars' ]
var verbs = [ 'actualize', 'administrate', 'aggregate', 'architect',
  'assert', 'benchmark', 'brand', 'brogram', 'build', 'code',
  'communicate', 'conceptualize', 'coordinate', 'create',
  'cultivate', 'curate', 'customize', 'deliver', 'deploy',
  'develop', 'disintermediate', 'disseminate', 'drive',
  'embrace', 'e-enable', 'empower', 'enable', 'engage',
  'engineer', 'enhance', 'envisioneer', 'evisculate',
  'evolve', 'expedite', 'exploit', 'extend', 'fabricate',
  'facilitate', 'fashion', 'formulate', 'foster', 'generate',
  'grow', 'hack', 'harness', 'impact', 'implement',
  'incentivize', 'incubate', 'initiate', 'innovate', 'integrate',
  'iterate', 'leverage existing', 'leverage others',
  'leverage all', 'leverage most', 'leverage some', 'maintain',
  'matrix', 'maximize', 'mesh', 'monetize', 'morph',
  'myocardinate', 'negotiate', 'network', 'optimize',
  'orchestrate', 'parallel task', 'pivot', 'pontificate',
  'predominate', 'procrastinate', 'productivate', 'productize',
  'program', 'promote', 'provide access to', 'pursue',
  'recaptiualize', 'reconceptualize', 'redefine',
  're-engineer', 'reintermediate', 'reinvent', 'reinvigorate',
  'repurpose', 'resegment', 'restore', 'revolutionize', 'scale',
  'seize', 'silos', 'simplify', 'strategize', 'streamline',
  'supply', 'syndicate', 'synergize', 'synthesize', 'target',
  'transform', 'transition', 'underwhelm', 'unleash', 'utilize',
  'visualize', 'whiteboard', 'workshop' ]

var SynergIpsum = function (paras) {
  this.paras = paras || 1
}

SynergIpsum.prototype.generate = function () {
  var ipsum = ''
  var tmptxt = ''
  var wordcount = this.paras * 1
  for (i = 1; i <= wordcount; i += 1) {
    tmptxt = tmptxt + synergize()
    ipsum = ipsum + tmptxt
    tmptxt = ''
  }
  var words = tmptxt.split(' ')
  for (j = 0; j < wordcount; j += 1) {
    ipsum = ipsum + words[j] + ' '
  }
  ipsum = ipsum.substring(0, ipsum.lastIndexOf('.') + 1)
  var sepwords = ipsum.split(' ')
  var wordtotal = sepwords.length
  if (wordtotal === 1) {
    wordtotal = 0
  }
  return ipsum
}
module.exports.create = function (paras) {
  return new SynergIpsum(paras)
}

module.exports._class = SynergIpsum

var capitalize = function capitalize (str) {
  'use strict'
  var poststring, tmpchar, tmpstr
  tmpstr = str.toLowerCase()
  tmpchar = tmpstr.substring(0, 1).toUpperCase()
  poststring = tmpstr.substring(1, str.length)
  str = tmpchar + poststring
  return str
}

var randArray = function (arr) {
  'use strict'
  var selection = Math.floor(Math.random() * arr.length)
  return arr[selection]
}

var synergize = function () {
  'use strict'
  var synergy
  var adverb = capitalize(randArray(adverbs))
  var verb = randArray(verbs)
  var adjective = randArray(adjectives)
  var noun = randArray(nouns)
  var conjunction = randArray(conjunctions)
  synergy = adverb + ' ' + verb + ' ' + adjective + ' ' + noun + ' ' + conjunction
  adjective = randArray(adjectives)
  synergy = synergy + ' ' + adjective
  noun = randArray(nouns)
  synergy = synergy + ' ' + noun + '. '
  return synergy
}

var main = function () {
  'use strict'
  return new SynergIpsum(1)
}

if (require.main === module) {
  main()
}
