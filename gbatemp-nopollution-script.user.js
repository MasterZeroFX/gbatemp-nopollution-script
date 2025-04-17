// ==UserScript==
// @name                 No Patreon Pollution for GBATemp
// @description          Removes Patreon banners, avatar frames, username styles/backgrounds, and custom titles on GBATemp for a cleaner look. AKA no pollution.
// @license              WTFPL
// @version              2.0
// @author               MasterZeroFX
// @match                https://gbatemp.net/*
// @require              https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant                GM_addStyle
// @grant                GM.getValue
// ==/UserScript==
//- The @grant directives are needed to restore the proper sandbox.
/* global $ */

(function() {
    'use strict';

    function removeClassesByPrefix(selector, prefix) {
        $(selector).removeClass(function (index, css) {
            const classRegex = new RegExp('(^|\\s)' + prefix + '\\S*', 'g');
            const matches = css.match(classRegex);
            return matches ? matches.join(' ') : '';
        });
    }

    // Remove Avatar Frames
    removeClassesByPrefix("a[class*='ap-ss-avatarFrame']", 'ap-ss-avatarFrame');

    // Remove Username Sparkle Backgrounds
    // These wrap the username link
    removeClassesByPrefix("span[class*='ap-ss-sparkle']", 'ap-ss-sparkle');

    // Remove Custom Username Fonts/Styles
    // These are on a span inside the username link
    removeClassesByPrefix("span[class*='ap-ss-usernameStyle']", 'ap-ss-usernameStyle');

    // Remove Custom User Titles
    // These are on the H5 user title element
    removeClassesByPrefix("h5[class*='ap-ss-customTitleStyle']", 'ap-ss-customTitleStyle');
  
    $("a").remove(".userBanner");
    $("a[class*='patron-']").removeClass (function (index, css) {
       return (css.match (/(^|\s)patron\S+/g) || []).join(' ');
    });
})();
