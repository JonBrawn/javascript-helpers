var ObjectHelper = ObjectHelper || {};

if( HelperBase ){

    /**
     * This is a helper for variables.
     * @type {}
     */
    var ObjectHelper = HelperBase({

        construct: function(){
        },
        aliases: {
        },
        _this: this,

        

    });

    // Add a short hand helper variable.
    var oh = oh || ObjectHelper;

} else {
    console.log( 'Helpers require helper base!', /* run showLogInfo from logs class. */ );
}
