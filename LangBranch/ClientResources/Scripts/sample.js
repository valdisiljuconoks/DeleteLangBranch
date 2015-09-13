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

    return declare("alloy.sample", [_Module, ContentTreeStoreModel], {
        initialize: function() {
            var target = ContentTreeStoreModel;

            aspect.after(target, "pasteItem", function(result) {
                alert("test");
            });
        },

        pasteItem: function() {
            alert("adsf");
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