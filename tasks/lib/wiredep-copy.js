'use strict';

var _ = require('lodash'),
    wirdep = require('wiredep');

module.exports = {
  collate: function(opts) {
    return _.chain(wirdep(opts))
      .omit('packages')
      .values()
      .flatten()
      .value();
  },
  rename: function(file, options) {
    //==============================================
    //  There's been a problem here because replace may not work in all cases
    // - BMW (3/30/15)
    //==============================================
    console.log(options.bower);

    //==============================================
    // We are going to use "{options.src}/{options.bower}" to identify where we
    // actually need to replace this.  The code as it was written before will fall apart if the
    // "options.dest" string exists in more than one place in the "options.src" string
    // - BMW (3/30/15)
    //==============================================
    var toSplit = options.src + '/'+options.bower+'/';
    // Some happy debug code if you want to look....
    //console.log('');
    //
    //console.log('FILE', file);
    //console.log('toSplit', toSplit);
    //console.log('');

    var bits = file.split(toSplit);

    var dest = options.dest + '/' + options.bower + '/' + bits[1];
//    console.log('DEST: ', dest);
    return dest;
  }
};
