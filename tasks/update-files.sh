#!/bin/sh

git checkout master -- docs LICENSE CHANGELOG.md CONTRIBUTING.md
git cat-file blob master:README.md > index.md

git co master -- src/rules
git checkout src
git reset src

mv src docs
rm -rf docs/src/rules/**/__tests__
rm -rf docs/src/rules/**/*.js
rm -rf src/
