"use strict";

(() => {
    const e = function() {
        const e = [ [] ], t = new Map([ [ "walla.co.il", 0 ] ]), n = new Map([]), o = new Map([]);
        function c() {
            var e = window.RTCPeerConnection ? "RTCPeerConnection" : window.webkitRTCPeerConnection ? "webkitRTCPeerConnection" : "";
            if ("" === e) return;
            var t = function(e) {
                (void 0)("Document tried to create an RTCPeerConnection: %o", e);
            };
            const n = function() {};
            t.prototype = {
                close: n,
                createDataChannel: n,
                createOffer: n,
                setRemoteDescription: n,
                toString: function() {
                    return "[object RTCPeerConnection]";
                }
            };
            var o = window[e];
            window[e] = t.bind(window), o.prototype && (o.prototype.createDataChannel = function() {
                return {
                    close: function() {},
                    send: function() {}
                };
            }.bind(null));
        }
        const r = [];
        try {
            r.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = r.length;
        if (0 === i) return;
        const s = new Set, a = [];
        if (0 !== o.size) {
            for (let e = 0; e < i; e++) {
                const t = r.slice(e).join("."), n = o.get(t);
                n && a.push(...n);
            }
            o.clear();
        }
        if (0 !== t.size) {
            const e = e => {
                let n = t.get(e);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) a.includes(e) || s.add(e);
                }
            };
            for (let t = 0; t < i; t++) e(r.slice(t).join("."));
            e("*"), t.clear();
        }
        if (0 !== n.size) {
            const e = i - 1;
            for (let t = 0; t < e; t++) for (let o = e; o > t; o--) {
                const e = r.slice(t, o).join(".");
                let c = n.get(e);
                if (void 0 !== c) {
                    "number" == typeof c && (c = [ c ]);
                    for (const e of c) a.includes(e) || s.add(e);
                }
            }
            n.clear();
        }
        for (const t of s) try {
            c(...e[t]);
        } catch (e) {}
        e.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_noWebrtc = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const c = new t.Blob(...t.uBOL_noWebrtc);
            o = t.URL.createObjectURL(c);
            const r = t.document;
            n = r.createElement("script"), n.async = !1, n.src = o, (r.head || r.documentElement || r).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_noWebrtc;
    }
})();