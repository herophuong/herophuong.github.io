"use strict";
(function() {
  var app;
  app = angular.module("vCard", ["ngAnimate"]);
  app.controller("VCardController", [
    function() {
      this.data = {
        en: {
          name: "PHUONG LE HOANG",
          position: "WEB DEVELOPER"
        },
        vi: {
          name: "LÊ HOÀNG PHƯƠNG",
          position: "NHÀ PHÁT TRIỂN WEB"
        },
        ja: {
          name: "レ　ホアン　フォン",
          position: "ウェブ開発者"
        }
      };
      return this.active = "en";
    }
  ]);
  return app.directive("cardRippleTrigger", [
    function() {
      return {
        restrict: "A",
        link: function(scope, element) {
          return element.on("click", function(event) {
            var ripple;
            ripple = document.createElement("div");
            ripple.className = "ripple";
            ripple.style.top = element[0].offsetTop + "px";
            ripple.style.left = element[0].offsetLeft + "px";
            ripple.addEventListener("animationend", function(event) {
              return ripple.remove();
            });
            return angular.element(document.getElementById("card")).append(ripple);
          });
        }
      };
    }
  ]);
})();
