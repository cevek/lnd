(function (e, t, n) {
    if (e.snaptr) return;
    var a = (e.snaptr = function () {
        a.handleRequest
            ? a.handleRequest.apply(a, arguments)
            : a.queue.push(arguments);
    });
    a.queue = [];
    var s = "script";
    r = t.createElement(s);
    r.async = !0;
    r.src = n;
    var u = t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r, u);
})(window, document, "https://sc-static.net/scevent.min.js");
snaptr("init", "9de7200e-29aa-4cfa-ac86-7a739d473550", {
    user_email: "support@smile2impress.com",
});
