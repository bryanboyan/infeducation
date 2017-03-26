/**
 * Require this module to polyfill some handy features to js native objects.
 */

if (!String.prototype.format) {
 String.prototype.format = function() {
   var args = arguments;
   return this.replace(/{(\d+)}/g, (match, number) => {
     return typeof args[number] != 'undefined'
       ? args[number]
       : match;
   });
 };
}
