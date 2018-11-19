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

$("#nav-projects").click(function() {
    $("main").load("../projects.html");
    $("#nav-home").toggleClass("active", false);
    $("#nav-projects").toggleClass("active", true);
    $("#nav-contact").toggleClass("active", false);
});

$("#nav-contact").click(function() {
    $("main").load("../contact.html");
    $("#nav-home").toggleClass("active", false);
    $("#nav-projects").toggleClass("active", false);
    $("#nav-contact").toggleClass("active", true);
});

$("#nav-home").click(function() {
    $("main").load("../home.html");
    $("#nav-home").toggleClass("active", true);
    $("#nav-projects").toggleClass("active", false);
    $("#nav-contact").toggleClass("active", false);
});

$("#btn-projects").click(function() {
    $("main").load("../projects.html");
    $("#nav-home").toggleClass("active", false);
    $("#nav-projects").toggleClass("active", true);
    $("#nav-contact").toggleClass("active", false);
});