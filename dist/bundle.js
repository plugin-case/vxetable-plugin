var vxeTablePlugin = (function (exports) {
      'use strict';

      const hi = (title, version) =>
            console.log(
              `%c ${title} %c V${version} `,
              'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
              'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
            );
            
      // hi('hello','0.0.6');

      exports.hi = hi;

      return exports;

})({});
