/*jshint esversion: 6 */
global.jQuery = require("jquery");
global.$ = require("jquery");
require('bootstrap');
require('popper.js');

$(document).ready(function() {
    $("main").load("../content/home.html");
    $("#nav-home").toggleClass("active", true);
    $("#nav-projects").toggleClass("active", false);
    $("#nav-contact").toggleClass("active", false);
});

global.projectsClick = function() {
    $("main").load("../content/project.html");
    $("#nav-home").toggleClass("active", false);
    $("#nav-projects").toggleClass("active", true);
    $("#nav-contact").toggleClass("active", false);
};

global.contactClick = function() {
    $("main").load("../content/contact.html");
    $("#nav-home").toggleClass("active", false);
    $("#nav-projects").toggleClass("active", false);
    $("#nav-contact").toggleClass("active", true);
};

global.homeClick = function() {
    $("main").load("../content/home.html");
    $("#nav-home").toggleClass("active", true);
    $("#nav-projects").toggleClass("active", false);
    $("#nav-contact").toggleClass("active", false);
};

global.projectsButtonClick = function() {
    $("main").load("../content/project.html");
    $("#nav-home").toggleClass("active", false);
    $("#nav-projects").toggleClass("active", true);
    $("#nav-contact").toggleClass("active", false);
};