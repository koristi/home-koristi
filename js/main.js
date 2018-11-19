/*jshint esversion: 6 */
global.jQuery = require("jquery");
global.$ = require("jquery");
require('bootstrap');
require('popper.js');

$(document).ready(function() {
    $("main").load("../home.html");
    $("#nav-home").toggleClass("active", true);
    $("#nav-projects").toggleClass("active", false);
    $("#nav-contact").toggleClass("active", false);
});

global.projectsClick = function() {
    $("main").load("../project.html");
    $("#nav-home").toggleClass("active", false);
    $("#nav-projects").toggleClass("active", true);
    $("#nav-contact").toggleClass("active", false);
};

global.contactClick = function() {
    $("main").load("../contact.html");
    $("#nav-home").toggleClass("active", false);
    $("#nav-projects").toggleClass("active", false);
    $("#nav-contact").toggleClass("active", true);
};

global.homeClick = function() {
    $("main").load("../home.html");
    $("#nav-home").toggleClass("active", true);
    $("#nav-projects").toggleClass("active", false);
    $("#nav-contact").toggleClass("active", false);
};

global.projectsButtonClick = function() {
    $("main").load("../project.html");
    $("#nav-home").toggleClass("active", false);
    $("#nav-projects").toggleClass("active", true);
    $("#nav-contact").toggleClass("active", false);
};