// ==UserScript==
// @name         SD YouTube Thumbnails
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/edit*
// @grant        none
// ==/UserScript==
function IsImageOk(img) {
    // During the onload event, IE correctly identifies any images that
    // weren’t downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
        return false;
    }

    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.
    if (img.naturalWidth === 0) {
        return false;
    }

    // No other way of checking: assume it’s ok.
    return true;
}

(function() {
    'use strict';

    // Your code here...
    var resize = false;

    var divs = document.getElementsByClassName("yt-thumb-clip");
    var i;
    for (i = 0; i < divs.length; i++) {
        var img = divs[i].getElementsByTagName('img')[0];
        var src = img.src;
        var sub = "1.jpg";
        if (src.indexOf(sub) !== -1){
            src = src.replace(sub, "sd1.jpg");
            if (IsImageOk(img)) {
               img.src = src;
               img.style.width='400px';
               resize = true;
            }
        }
        sub = "2.jpg";
        if (src.indexOf(sub) !== -1){
            src = src.replace(sub, "sd2.jpg");
            if (IsImageOk(img)) {
               img.src = src;
               img.style.width='400px';
               resize = true;
            }
        }
        sub = "3.jpg";
        if (src.indexOf(sub) !== -1){
            src = src.replace(sub, "sd3.jpg");
            if (IsImageOk(img)) {
               img.src = src;
               img.style.width='400px';
               resize = true;
            }
        }
    }

    if (resize) {
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
    }
})();

