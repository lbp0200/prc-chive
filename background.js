chrome.runtime.onInstalled.addListener(function () {
    console.log("Installed");
    chrome.webRequest.onBeforeRequest.addListener(
        function (details) {
            console.log(details);
            return {redirectUrl: "http://127.0.0.1/"};
        },
        {urls: ["*://123.abc/*"]},
        ["blocking"]);
    chrome.webRequest.onBeforeSendHeaders.addListener(
        function (details) {
            console.log(details);
            return {requestHeaders: details.requestHeaders,};
        },
        {urls: ["*://123.abc/*"]},
        ["blocking", "requestHeaders"]);
});