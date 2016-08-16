var Hookbase = Hookbase || {};

Hookbase = function( methods ) {

    // Setup the base hookbase
    var hookbase = function() {
        this.hooks   = [];
        this.aliases = {};

        this.config  = {
            'defaultGroup': 'default'
        };

        if( !this.hooks[this.config.defaultGroup] ){
            this.defaultHook = this.hooks[this.config.defaultGroup];
        }

        for (var i = 0; i < this.aliases.length; i++) {
            var f = this.aliases[i].call;
            var t = this;
            var a = this.aliases[i].alias;


            this[a] = function( args ){
                t[f].apply( arguments );
            }
        }
        this.construct.apply( this, arguments );
    };

    // run through the methods and properties to setup new
    // class for hookbase.
    for( var property in methods ){
        hookbase.prototype[property] = methods[property];
    }

    // Make sure construct is defined.
    if( !hookbase.prototype.construct ){
        hookbase.prototype.construct = function(){}
    }

    hookbase.prototype.addHook = function ( hookName, hookGroup, cb ) {
        var hookGroup = this.hookGroupIsOrDefault( hookGroup );
        this.hooks[hookGroup][hookName] = cb;
        return;
    };

    hookbase.prototype.removeHook = function ( hookName, hookGroup ) {
        if ( this.hooks[hookGroup][hookName] ){
            delete this.hooks[hookGroup][hookName];
        }
        return;
    };

    hookbase.prototype.doHook = function( hookName ){
        var hooks = this.findHook.byname( hookName );
    };

    if( !hookbase.prototype.query )

    hookbase.prototype.hookGroupIsOrDefault = function ( hookGroup ) {
        if( typeof hookGroup !== 'string' || hookGroup.length <= 0 ){
            var hookGroup = this.config.defaultGroup;
        }
        return hookGroup;
    };

    // Apply a hooks instantiation.
    // hookbase.prototype.hooks()

    // Return hookbase which will be
    // an instantiation of other classes.
    return hookbase;
};
