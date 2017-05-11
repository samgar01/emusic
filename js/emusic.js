var screen = $.mobile.getScreenHeight();

var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight();

var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();

var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();

var content = screen - header - footer - contentCurrent;

$(".ui-content").height(content);

var app = {
    // Application Constructor
    initialize: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },

    onDeviceReady: function() {
        // We will init / bootstrap our application here
    },
};
app.initialize();