#!/bin/sh

git checkout master -- docs LICENSE CHANGELOG.md CONTRIBUTING.md
git cat-file blob master:README.md > index.md
