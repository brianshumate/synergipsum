var adjectives = new Array("24/7", "24/7/365", "accurate", "adaptive", "alternative", "an expanded array of", "B2B", "B2C", "backend", "backward-compatible", "best-of-breed", "bleeding-edge", "bricks-and-clicks", "business", "clicks-and-mortar", "client-based", "client-centered", "client-centric", "client-focused", "collaborative", "compelling", "competitive", "cooperative", "corporate", "cost effective", "covalent", "cross functional", "cross-media", "cross-platform", "cross-unit", "customer directed", "customized", "cutting-edge", "distinctive", "distributed", "diverse", "dynamic", "e-business", "economically sound", "effective", "efficient", "emerging", "empowered", "enabled", "end-to-end", "enterprise", "enterprise-wide", "epic", "equity invested", "error-free", "ethical", "excellent", "exceptional", "extensible", "extensive", "flexible", "focused", "freemium", "frictionless", "front-end", "fully researched", "fully tested", "functional", "functionalized", "future-proof", "global", "go forward", "geocentric", "geofenced", "geo-social",  "goal-oriented", "granular", "high leverage", "high standards in", "high-payoff", "high-quality", "highly efficient", "HTML5", "holistic", "impactful", "inexpensive", "innovative", "installed base", "integrated", "interactive", "interdependent", "intermandated", "interoperable", "intuitive", "just in time", "kinda",  "leading-edge", "leveraged", "long-term high-impact", "low-risk high-yield", "magnetic", "maintainable", "market positioning", "market-driven", "mission-critical", "multidisciplinary", "multifunctional", "multimedia based", "next-generation", "object oriented", "one-to-one", "open-source", "optimal", "orthogonal", "out-of-the-box", "pandemic", "parallel", "performance based", "performant", "pivotal", "plug-and-play", "premier", "premium", "principle-centered", "proactive", "process-centric", "professional", "progressive", "prospective", "quality", "real-time", "reliable", "resource sucking", "resource maximizing", "resource-leveling", "revolutionary", "robust", "scalable", "seamless", "social", "social-aware", "sorta", "stand-alone", "standardized", "standards compliant", "state of the art", "sticky", "strategic", "superior", "sustainable", "synergistic", "tactical", "team building", "team driven", "technically sound", "timely", "top-line", "transparent", "turnkey", "ubiquitous", "unique", "user-centric", "user friendly", "value-added", "vertical", "viral", "virtual", "visionary", "web-enabled", "wireless", "world-class", "worldwide", "2.0", "3.0"),
    adverbs = new Array ("appropriately", "assertively", "authoritatively", "collaboratively", "cooperatively", "compellingly", "competently", "completely", "continually", "continuously", "conveniently", "credibly", "distinctively", "dramatically", "dynamically", "efficiently", "energistically", "enthusiastically", "epically", "globally", "holisticly", "interactively", "intrinsicly", "monotonectally", "objectively", "phosfluorescently", "proactively", "professionally", "progressively", "quickly", "rapidiously", "seamlessly", "synergistically", "uniquely");
    conjunctions = new Array("apropos", "in lieu of", "through", "via", "vis-a-vis", "with", "without", "and", "before", "after", "whereas", "for", "rather than"),
    nouns = new Array("action items", "alignments", "Android apps", "applications", "app stores", "architectures", "bandwidth", "benefits", "best practices", "blockers", "blog posts", "brogrammers", "catalysts for change", "channels", "cloud services", "collaboration and idea-sharing", "communities", "content", "conferences", "convergence", "core competencies", "customer service", "DSLs", "data", "deliverables", "devops teams", "e-business", "e-commerce", "ecosystems", "e-markets", "e-tailers", "e-services", "event loops", "experiences", "expertise", "eyeballs", "functionalities", "game-changer", "gists", "git repositories", "growth strategies", "gurus", "Haskell developers", "human capital", "ideas", "imperatives", "impetus",  "infomediaries", "information", "infrastructures", "initiatives", "innovation", "intellectual capital", "interfaces", "internal or \'organic\' sources", "JavaScript developers", "leadership", "long tail",  "low-hanging fruit", "MVPs", "MongoDB clusters", "leadership skills", "manufactured products", "markets", "materials", "mashups", "meta-services", "methodologies", "methods of empowerment", "metrics", "mindshare", "mobile", "mobile apps", "models", "networks", "niches", "niche markets", "ninjas", "Node.JS developers", "NoSQL", "offshoring", "opportunities", "\'outside the box\' thinking", "outsourcing", "paradigms", "partnerships", "platforms", "podcasts", "portals", "potentialities", "process improvements", "processes", "programmers", "products", "quality vectors", "relationships", "resources", "results", "Riak clusters", "ROI", "rockstars", "Ruby apps", "Ruby on Rails apps", "scenarios", "schemas", "services", "solutions", "sources", "strategic theme areas", "supply chains", "synergy", "systems", "system logs", "technologies", "technology", "testing procedures", "the cloud", "thought leaders", "total linkage", "tweets", "unconferences", "users", "value", "web-readiness", "web scale", "web services", "web caching engines", "WebOS apps"),
    verbs = new Array("actualize", "administrate", "aggregate", "architect", "assert", "benchmark", "brand", "brogram", "build", "code", "communicate", "conceptualize", "coordinate", "create", "cultivate", "customize", "deliver", "deploy", "develop", "disintermediate", "disseminate", "drive", "embrace", "e-enable", "empower", "enable", "engage", "engineer", "enhance", "envisioneer", "evisculate", "evolve", "expedite", "exploit", "extend", "fabricate", "facilitate", "fashion", "formulate", "foster", "generate", "grow", "hack", "harness", "impact", "implement", "incentivize", "incubate", "initiate", "innovate", "integrate", "iterate", "leverage existing", "leverage other\'s", "leverage all", "leverage most", "leverage some", "maintain", "matrix", "maximize", "mesh", "monetize", "morph", "myocardinate", "negotiate", "network", "optimize", "orchestrate", "parallel task", "pontificate", "predominate", "procrastinate", "productivate", "productize", "program", "promote", "provide access to", "pursue", "recaptiualize", "reconceptualize", "redefine", "re-engineer", "reintermediate", "reinvent", "repurpose", "restore", "revolutionize", "scale", "seize", "simplify", "strategize", "streamline", "supply", "syndicate", "synergize", "synthesize", "target", "transform", "transition", "underwhelm", "unleash", "utilize", "visualize", "whiteboard", "workshop"),
    paras = '';

function capitalize(str) {
  tmpstr = str.toLowerCase();
  tmpchar = tmpstr.substring(0, 1).toUpperCase();
  poststring = tmpstr.substring(1, str.length);
  tmpstr = tmpchar + poststring;
  str = tmpstr;

	return str;
}

function randArray(arr) {
	var pick = Math.floor(Math.random() * arr.length);
	return arr[pick];
}

function synergize() {
	var synergy = '';

	var adverb = randArray(adverbs);
	adverb = capitalize(adverb);
	synergy = adverb;

	var verb = randArray(verbs);
	synergy = synergy + ' ' + verb;

	var adjective = randArray(adjectives);
	synergy = synergy + ' ' + adjective;

	var noun = randArray(nouns);
	synergy = synergy + ' ' + noun;

	var conjunction = randArray(conjunctions);
	synergy = synergy + ' ' + conjunction;

	adjective = randArray(adjectives);
	synergy = synergy + ' ' + adjective;
	noun = randArray(nouns);
	synergy = synergy + ' ' + noun;
	synergy = synergy + '. ';

	return synergy;
}

module.exports.generate = function(paras) {
	if (paras == 0)
    console.log('Puny paragraph count detected: ' + paras + ', setting to 3...')
  	var parasvalue = 3;

	if (paras)
		var parasvalue = paras;
	else {
		var parasvalue = 3;
	}

	var ipsum         = '',
      sentencecount = 3,
      tmptxt        = '',
      wordcount     = parasvalue * 3;

  for (i = 1; i <= wordcount; i++) {

    tmptxt = tmptxt + synergize();

		if(i % sentencecount === 0) {
			tmptxt = tmptxt + "\n\n";
		}
		ipsum = ipsum + tmptxt;
		tmptxt = '';
	}

	var words = tmptxt.split(' ');

	for(j = 0; j < wordcount; j++) {
		ipsum = ipsum + words[j] + ' ';
	}
	ipsum = ipsum.substring(0, ipsum.lastIndexOf('.') + 1);

	var sepwords   = ipsum.split(' '),
      parasep    = ipsum.split("\n\n"),
	    paracount  = parasep.length,
	    paraplural = 's',
      wordtotal  = sepwords.length;

  if (wordtotal == 1) {
		paracount = 0;
		wordtotal = 0;
	}

	if (paracount <= 1)
		paraplural = '';

	var stats = paracount + ' paragraph' + paraplural + ' / ' + wordtotal + ' words';

  console.log('Synergipsum: chunk barfed up with these characteristics: ' + stats);

  return ipsum;
}