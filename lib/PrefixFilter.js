// Generated by CoffeeScript 1.3.3
(function() {
  var PrefixFilter,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  PrefixFilter = (function() {

    function PrefixFilter(prefix, subFilter) {
      this.subFilter = subFilter;
      this.filter = __bind(this.filter, this);

      this.prefix = prefix != null ? prefix : '';
    }

    PrefixFilter.prototype.filter = function(terms) {
      var term;
      if (this.subFilter != null) {
        terms = this.subFilter.filter(terms);
      }
      return (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = terms.length; _i < _len; _i++) {
          term = terms[_i];
          _results.push(this.prefix + term);
        }
        return _results;
      }).call(this);
    };

    return PrefixFilter;

  })();

  module.exports = {
    PrefixFilter: PrefixFilter
  };

}).call(this);
