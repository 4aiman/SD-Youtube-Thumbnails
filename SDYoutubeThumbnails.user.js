// ==UserScript==
// @name         SD YouTube Thumbnails
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/edit*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
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

    var divs = document.getElementsByClassName("yt-thumb-clip");
    var i;
    for (i = 0; i < divs.length; i++) {
        var img = divs[i].getElementsByTagName('img')[0];
        var src = img.src;
        var sub = "1.jpg";
        if (src.indexOf(sub) !== -1){
            src = src.replace(sub, "sd1.jpg");
            img.src = src;
            img.style.width='400px';
        }
        sub = "2.jpg";
        if (src.indexOf(sub) !== -1){
            src = src.replace(sub, "sd2.jpg");
            img.src = src;
            img.style.width='400px';
        }
        sub = "3.jpg";
        if (src.indexOf(sub) !== -1){
            src = src.replace(sub, "sd3.jpg");
            img.src = src;
            img.style.width='400px';
        }
    }
})();

