install:
	npm ci

brain-gcd:
	node bin/brain-gcd.js

brain-games:
	node bin/brain-games.js

brain-calc:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
