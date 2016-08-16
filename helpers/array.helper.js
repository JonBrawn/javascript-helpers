var ArrayHelper = ArrayHelper || {};

if( HelperBase ){

    /**
     * This is a helper for variables.
     * @type {}
     */
    var ArrayHelper = HelperBase({

        construct: function(){

        },

        aliases: {

        },

        _this: this,
    });

    // Add a short hand helper variable.
    var ah = ah || ArrayHelper;

} else {
    console.log( 'Helpers require helper base!', /* run showLogInfo from logs class. */ );
}
