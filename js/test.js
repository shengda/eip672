const tr = require('../build/test.sol');

const generateClass = require('eth-contract-class').default;

module.exports.Implementer = generateClass(
    tr.ImplementerAbi, tr.ImplementerByteCode);
module.exports.Checker = generateClass(
    tr.CheckerAbi, tr.CheckerByteCode);
module.exports.Releaser = generateClass(
    tr.ReleaserAbi, tr.ReleaserByteCode);
module.exports.NameSetter = generateClass(
    tr.NameSetterAbi, tr.NameSetterByteCode);
module.exports.IReverseResolver = generateClass(
  tr.IReverseResolverAbi, tr.IReverseResolverByteCode)
