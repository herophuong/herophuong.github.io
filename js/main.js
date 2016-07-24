"use strict";
(function() {
  var app;
  app = angular.module("vCard", ["ngAnimate"]);
  app.controller("VCardController", [
    function() {
      this.data = {
        en: {
          name: "PHUONG LE HOANG",
          position: "WEB DEVELOPER",
          callToAction: "CONTACT ME"
        },
        vi: {
          name: "LÊ HOÀNG PHƯƠNG",
          position: "NHÀ PHÁT TRIỂN WEB",
          callToAction: "LIÊN HẸ"
        },
        ja: {
          name: "レ　ホアン　フォン",
          position: "ウェブ開発者",
          callToAction: "メールを送る"
        }
      };
      return this.active = "en";
    }
  ]);
  app.directive("cardRippleTrigger", [
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
  return app.animation(".lang-content", [
    "$animateCss", function($animateCss) {
      return {
        enter: function(element) {
          var parent, sibling;
          parent = element.parent();
          sibling = element.siblings();
          $animateCss(parent, {
            from: {
              width: sibling.width(),
              height: sibling.height()
            },
            to: {
              width: element.width(),
              height: element.height()
            },
            transitionStyle: '.5s cubic-bezier(.55, 0, .1, 1) all'
          }).start().done(function() {
            parent.css('width', '');
            return parent.css('height', '');
          });
          return $animateCss(element, {
            event: "enter",
            structural: true
          });
        },
        leave: function(element) {
          return $animateCss(element, {
            event: "leave",
            structural: true
          });
        }
      };
    }
  ]);
})();
