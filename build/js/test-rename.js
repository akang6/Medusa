!function e(t,i,n){function c(o,h){if(!i[o]){if(!t[o]){var s="function"==typeof require&&require;if(!h&&s)return s(o,!0);if(r)return r(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var a=i[o]={exports:{}};t[o][0].call(a.exports,function(e){var i=t[o][1][e];return c(i||e)},a,a.exports,e,t,i,n)}return i[o].exports}for(var r="function"==typeof require&&require,o=0;o<n.length;o++)c(n[o]);return c}({1:[function(e,t,i){$(document).ready(()=>{$(".seriesCheck").on("click",function(){const e=this;$(".seasonCheck:visible").each(function(){this.checked=e.checked}),$(".epCheck:visible").each(function(){this.checked=e.checked})}),$(".seasonCheck").on("click",function(){const e=this,t=$(e).attr("id");$(".epCheck:visible").each(function(){$(this).attr("id").split("x")[0]===t&&(this.checked=e.checked)})}),$("input[type=submit]").on("click",()=>{const e=[];if($(".epCheck").each(function(){!0===this.checked&&e.push($(this).attr("id"))}),0===e.length)return!1;window.location.href=$("base").attr("href")+"home/doRename?show="+$("#series-id").attr("value")+"&eps="+e.join("|")})})},{}]},{},[1]);
//# sourceMappingURL=test-rename.js.map