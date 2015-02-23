/*global it */
'use strict';
var assert = require('assert');
var gitLatestTag = require('./');

it('without options', function () {
  var cmd = gitLatestTag();
  assert.strictEqual(cmd, 'git describe');
});

it('with an option that takes no value with a truthy value', function () {
  var cmd = gitLatestTag({
    all: 'yes'
  });
  assert.strictEqual(cmd, 'git describe --all');
});

it('with an option that takes no value with a falsy value', function () {
  var cmd = gitLatestTag({
    all: null
  });
  assert.strictEqual(cmd, 'git describe');
});

it('with an options that takes a value', function () {
  var cmd = gitLatestTag({
    abbrev: 10
  });
  assert.strictEqual(cmd, 'git describe --abbrev=10');
});

it('with a "true"', function () {
  var cmd = gitLatestTag(true);
  assert.strictEqual(cmd, 'git describe --tags --abbrev=0');
});

it('shouldn\'t take option.checkFirstCommit into accound', function () {
  var cmd = gitLatestTag({
    all: 'ok',
    checkFirstCommit: false,
    contains: true,
    candidates: 10
  });
  assert.strictEqual(cmd, 'git describe --all --contains --candidates=10');
});