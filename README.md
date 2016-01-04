# stylelint.io

## Run

* `bundle install && npm install`
* `npm start`

## Updating docs

* `npm run docs`
* Update the docs version in `_config.yml`

## How does this even work?

The basic idea is to use git to copy the necessary documentation and supplemental files from `master`. There's a little extra processing that needs to happen to make the source docs more compatible with urls outside Github.

Here are the automated steps:

* Checkout files from master branch
* Rearrange them based on existing link constraints
* Add front matter so they get picked up by Jekyll
* Move files that should be indexes to the right place

The doc changes can then be reviewed before committing. The next push will automatically publish this branch to github.
