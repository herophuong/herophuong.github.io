"use strict";

do ->
    app = angular.module "vCard", ["ngAnimate"]
    
    app.controller "VCardController", [->
        this.data =
            en:
                name: "PHUONG LE HOANG",
                position: "WEB DEVELOPER",
                callToAction: "CONTACT ME"
            vi:
                name: "LÊ HOÀNG PHƯƠNG",
                position: "NHÀ PHÁT TRIỂN WEB",
                callToAction: "LIÊN HẸ"
            ja:
                name: "レ　ホアン　フォン"
                position: "ウェブ開発者"
                callToAction: "メールを送る"
            
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
    
    app.animation ".lang-content", ["$animateCss", ($animateCss) ->
        enter: (element) ->
            parent = element.parent()
            sibling = element.siblings()
            $animateCss parent,
                from:
                    width: sibling.width()
                    height: sibling.height()
                to:
                    width: element.width()
                    height: element.height()
                transitionStyle: '.5s cubic-bezier(.55, 0, .1, 1) all'
            .start().done ->
                parent.css 'width', ''
                parent.css 'height', ''
            $animateCss element, {event: "enter", structural: true}
        leave: (element) ->
            $animateCss element, {event: "leave", structural: true}
    ]
