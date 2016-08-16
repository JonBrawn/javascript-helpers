var LogHelper = LogHelper || {};

if( HelperBase ){

    /**
     * This is a helper for variables.
     * @type {}
     */
    var LogHelper = HelperBase({

        construct: function(){

        },
        aliases: {

        },
        _this: this,

    });

    // Add a short hand helper variable.
    var lh = lh || LogHelper;

} else {
    console.log( 'Helpers require helper base!', /* run showLogInfo from logs class. */ );
}
