"use strict";

do ->
    app = angular.module "vCard", ["ngAnimate"]
    
    app.controller "VCardController", [->
        this.data =
            en:
                name: "PHUONG LE HOANG",
                position: "WEB DEVELOPER"
            vi:
                name: "LÊ HOÀNG PHƯƠNG",
                position: "NHÀ PHÁT TRIỂN WEB"
            ja:
                name: "レ　ホアン　フォン"
                position: "ウェブ開発者"
            
        this.active = "en"
    ]
    
    app.directive "cardRippleTrigger", [->
        restrict: "A"
        link: (scope, element) ->
            element.on "click", (event) ->
                ripple = document.createElement "div"
                ripple.className = "ripple"
                ripple.style.top = element[0].offsetTop + "px"
                ripple.style.left = element[0].offsetLeft + "px"
                ripple.addEventListener "animationend", (event) ->
                    ripple.remove()
                angular.element(document.getElementById("card")).append ripple
    ]
