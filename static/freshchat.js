function initFreshChat() {
    window.fcWidget.init({
    token: "198866dd-3472-4e07-81ec-1fcdcc01395b",
    host: "https://wchat.eu.freshchat.com"
    });
}
function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.eu.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk Messaging-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
