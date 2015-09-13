define([
    "dojo",
    "dojo/_base/declare",
    "dojo/aspect",
    "epi/_Module",
    "epi/dependency",
    "epi/routes",
    "epi-cms/widget/ContentTreeModelConfirmation",
    "epi-cms/widget/ContentTreeStoreModel"
], function(
    dojo,
    declare,
    aspect,
    _Module,
    dependency,
    routes,
    ContentTreeModelConfirmation,
    ContentTreeStoreModel
) {

    return declare("alloy/sample", [_Module], {
        initialize: function () {
            this.inherited(arguments);

            // asdf
        }
    });
});


//define("alloy/sample", [
//    "dojo",
//    "dojo/_base/declare",
//    "epi/_Module",
//    "epi/dependency",
//    "epi/routes",
//    "epi-cms/widget/ContentTreeModelConfirmation"
//], function (
//    dojo,
//    declare,
//    _Module,
//    dependency,
//    routes,
//    ContentTreeModelConfirmation
//) {
//    return function(model) {
//        return model;
//    }
//});