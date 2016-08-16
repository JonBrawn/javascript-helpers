var VariableHelper = VariableHelper || {};

if( HelperBase ){

    /**
     * This is a helper for variables.
     * @type {}
     */
    var VariableHelper = HelperBase({

        construct: function(){

        },
        aliases: {
            'dd': 'definedOrDefault'
        },
        _this: this,

        /**
         * Function to check a variable is defined
         * if not return default.
         * @param  {str} variable
         * @param  {mix} defaultReturn
         * @return {mix}
         */
        default: function( variable, defaultReturn ){
            if( typeof variable === undefined ){
                return defaultReturn;
            }
            return variable;
        },

        /**
         * Backups is a method class that
         * allows you to back up a variable if
         * needed.
         * @type class method
         */
        backup: {
            backups: {}
            add: function( variable, alias, subalias ){
                if( typeof subalias != 'string' || typeof subalias != 'integer' ) {
                    subalias = 1;
                }
                this.backups[alias].push( {subalias: variable} );
                return;
            },
            get: function( alias, subalias ){
                if( subalias ){
                    return this.backups[alias][subalias];
                }
                return this.backups[alias];
            }
        }
    });

    // Add a short hand helper variable.
    var vh = vh || VariableHelper;

} else {
    console.log( 'Helpers require helper base!', /* run showLogInfo from logs class. */ );
}
