// ==UserScript==
// @name         SD YouTube Thumbnails
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       4aiman
// @match        https://www.youtube.com/edit*
// @match        https://i.ytimg.com/*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant GM_addStyle
// ==/UserScript==

function imageExists(image_url){
    $.ajax({
        url:image_url,
        type:'HEAD',
        error: function(){
            return false;
        },
        success: function(){
            return true;
        }
    });
}

function IsImageOk(img) {
    if (!imageExists(img.src)) { return false; }
    if (!img.complete) { return false; }
    if (img.naturalWidth === 0) { return false; }

    return true;
}

(function() {
    'use strict';


    // Your code here...
    var resize = true;

    var divs = document.getElementsByClassName("yt-thumb-clip");
    var i;
    for (i = 0; i < divs.length; i++) {
        var img = divs[i].getElementsByTagName('img')[0];
        var src = img.src;
        var sub = "1.jpg";
        if (src.indexOf(sub) !== -1){
            src = src.replace(sub, "sd1.jpg");
            img.style.width='400px';
            if (IsImageOk(img)) {
               img.src = src;
            }
        }
        sub = "2.jpg";
        if (src.indexOf(sub) !== -1){
            src = src.replace(sub, "sd2.jpg");
            img.style.width='400px';
            if (IsImageOk(img)) {
               img.src = src;
            }
        }
        sub = "3.jpg";
        if (src.indexOf(sub) !== -1){
            src = src.replace(sub, "sd3.jpg");
            img.style.width='400px';
            if (IsImageOk(img)) {
               img.src = src;
            }
        }
    }

    var wraps = document.getElementsByClassName(".metadata-thumbnail-chooser.vertical-thumbnail-chooser");
    var j;
    for (j = 0; j < wraps.length; j++) {
        wraps[j].style.width = "420px";
    }

    wraps = document.getElementsByClassName(".selectable-thumb.standard-thumb.thumb_dimensions.selectable-thumb-selected");
    for (j = 0; j < wraps.length; j++) {
        wraps[j].style.width = "420px";
    }

    wraps = document.getElementsByClassName("yt-thumb-120");
    for (j = 0; j < wraps.length; j++) {
        wraps[j].style.width = "420px";
    }

    var info = document.getElementById('video-info')
    info.style = 'clear: left; margin-top: -350pt';
    GM_addStyle('dt, dd { font-size: 12pt!important; width: 125pt!important;}');
    GM_addStyle('dl {width: 450pt!important;}');
    GM_addStyle('h2 {font-size: 14pt!important;}');
    GM_addStyle('.vm-sprite.yt-sprite {float:none!important;}');
    GM_addStyle('.yt-uix-button.yt-uix-button-size-default.yt-uix-button-default.custom-thumb-button {width:420px!important; height:40pt!important; font-size:14pt!important;}');
    GM_addStyle('.yt-uix-hovercard-target.custom-thumb-text { font-size:14pt!important;}');

})();

