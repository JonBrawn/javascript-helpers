var HelperBase = HelperBase || {};

HelperBase = function( methods ) {

    // Setup the base helper
    var helper = function(){
        this.aliases = {};
        for (var i = 0; i < this.aliases.length; i++) {
            var f = this.aliases[i].call;
            var t = this;
            var a = this.aliases[i].alias;


            this[a] = function( args ){
                t[f].apply( arguments );
            }
        }
        this.construct.apply( this, arguments );
    }

    // run through the methods and properties to setup new
    // class for helper.
    for( var property in methods ){
        helper.prototype[property] = methods[property];
    }

    // Make sure construct is defined.
    if( !helper.prototype.construct ){
        helper.prototype.construct = function(){}
    }

    // Apply a hooks instantiation.
    // helper.prototype.hooks()

    // Return helper which will be
    // an instantiation of other classes.
    return helper;
};
