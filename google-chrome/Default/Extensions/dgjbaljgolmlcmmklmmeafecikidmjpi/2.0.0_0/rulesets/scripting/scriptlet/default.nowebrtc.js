"use strict";

(() => {
    const e = function() {
        const e = [ [] ], o = new Map([ [ "123movies.net", 0 ], [ "bonstreams.net", 0 ], [ "convertinmp4.com", 0 ], [ "crictime.com", 0 ], [ "ddlvalley.me", 0 ], [ "fluvore.com", 0 ], [ "mac-torrents.com", 0 ], [ "nflstream.io", 0 ], [ "oceanoffgames.com", 0 ], [ "pastehere.xyz", 0 ], [ "sawlive.tv", 0 ], [ "skidrowcrack.com", 0 ], [ "toros.co", 0 ], [ "uptobox.com", 0 ], [ "torrentfunk.com", 0 ], [ "dxb.to", 0 ], [ "adyou.me", 0 ], [ "srt.am", 0 ], [ "sintelevisor.com", 0 ], [ "tvpor-internet.com", 0 ], [ "1fichier.com", 0 ], [ "planetfools.com", 0 ], [ "cpmlink.net", 0 ], [ "short.pe", 0 ], [ "185.153.231.222", 0 ], [ "hindimean.com", 0 ], [ "wizhdsports.fi", 0 ], [ "peliculasmx.net", 0 ], [ "animeid.tv", 0 ], [ "coinfaucet.io", 0 ], [ "freecardano.com", 0 ], [ "freenem.com", 0 ], [ "gtaall.com", 0 ], [ "uii.io", 0 ], [ "mimaletamusical.blogspot.com", 0 ], [ "xrivonet.info", 0 ], [ "gounlimited.to", 0 ], [ "ebookdz.com", 0 ], [ "onhockey.tv", 0 ], [ "web.livecricket.is", 0 ], [ "dualpaste.net", 0 ], [ "startseite.to", 0 ], [ "kinoger.to", 0 ], [ "blizzboygames.net", 0 ], [ "telepisodes.org", 0 ], [ "software-on.com", 0 ], [ "sharemods.com", 0 ], [ "modsbase.com", 0 ], [ "cyfostreams.com", 0 ], [ "rlslog.net", 0 ], [ "f1livegp.net", 0 ], [ "zimabdko.com", 0 ], [ "aii.sh", 0 ], [ "buffstreamz.com", 0 ], [ "vupload.com", 0 ], [ "seriesytv.tv", 0 ], [ "owllink.net", 0 ], [ "gaybeeg.info", 0 ], [ "ex-foary.com", 0 ], [ "pstream.net", 0 ], [ "hentaisaturn.com", 0 ], [ "italydownload.com", 0 ], [ "leggenditalia.com", 0 ], [ "oasidownload.com", 0 ], [ "semprehawk.com", 0 ], [ "sms-anonyme.net", 0 ], [ "iulive.blogspot.com", 0 ], [ "embedstream.me", 0 ], [ "eroticmoviesonline.me", 0 ], [ "france.tv", 0 ], [ "bilibili.com", 0 ], [ "dandanzan.top", 0 ], [ "v.qq.com", 0 ] ]), t = new Map([ [ "2ddl", 0 ], [ "allitebooks", 0 ], [ "dramamate", 0 ], [ "eztv", 0 ], [ "kiss-anime", 0 ], [ "letmewatchthis", 0 ], [ "mkvcage", 0 ], [ "yts", 0 ], [ "zooqle", 0 ], [ "streanplay", 0 ], [ "torlock", 0 ], [ "torlock2", 0 ], [ "torrentdownloads", 0 ], [ "watchseries.unblocked", 0 ], [ "ouo", 0 ], [ "watch-series", 0 ], [ "watchseries", 0 ], [ "mejortorrent", 0 ], [ "mejortorrento", 0 ], [ "mejortorrents", 0 ], [ "mejortorrents1", 0 ], [ "mejortorrentt", 0 ], [ "daddylive", 0 ], [ "m4ufree", 0 ], [ "streamm4u", 0 ], [ "mangaku", 0 ], [ "ganool", 0 ], [ "subtorrents", 0 ], [ "subtorrents1", 0 ], [ "pirateproxy", 0 ], [ "hdvid", 0 ], [ "onvid", 0 ], [ "ovid", 0 ], [ "vidhd", 0 ], [ "starmusiq", 0 ], [ "tamilmv", 0 ], [ "mywatchseries", 0 ], [ "yesmovies", 0 ], [ "mycoolmoviez", 0 ], [ "watchtvseries", 0 ], [ "animekb", 0 ], [ "kstreaming", 0 ], [ "streameast", 0 ], [ "thestreameast", 0 ], [ "glodls", 0 ], [ "thevidhd", 0 ], [ "okanime", 0 ], [ "shrink", 0 ], [ "kinoz", 0 ], [ "topstreams", 0 ], [ "1337x", 0 ], [ "x1337x", 0 ], [ "racaty", 0 ], [ "livehere", 0 ], [ "nunuyy", 0 ] ]), n = new Map([]);
        function r() {
            var e = window.RTCPeerConnection ? "RTCPeerConnection" : window.webkitRTCPeerConnection ? "webkitRTCPeerConnection" : "";
            if ("" === e) return;
            var o = function(e) {
                (void 0)("Document tried to create an RTCPeerConnection: %o", e);
            };
            const t = function() {};
            o.prototype = {
                close: t,
                createDataChannel: t,
                createOffer: t,
                setRemoteDescription: t,
                toString: function() {
                    return "[object RTCPeerConnection]";
                }
            };
            var n = window[e];
            window[e] = o.bind(window), n.prototype && (n.prototype.createDataChannel = function() {
                return {
                    close: function() {},
                    send: function() {}
                };
            }.bind(null));
        }
        const c = [];
        try {
            c.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = c.length;
        if (0 === i) return;
        const s = new Set, a = [];
        if (0 !== n.size) {
            for (let e = 0; e < i; e++) {
                const o = c.slice(e).join("."), t = n.get(o);
                t && a.push(...t);
            }
            n.clear();
        }
        if (0 !== o.size) {
            const e = e => {
                let t = o.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) a.includes(e) || s.add(e);
                }
            };
            for (let o = 0; o < i; o++) e(c.slice(o).join("."));
            e("*"), o.clear();
        }
        if (0 !== t.size) {
            const e = i - 1;
            for (let o = 0; o < e; o++) for (let n = e; n > o; n--) {
                const e = c.slice(o, n).join(".");
                let r = t.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) a.includes(e) || s.add(e);
                }
            }
            t.clear();
        }
        for (const o of s) try {
            r(...e[o]);
        } catch (e) {}
        e.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const o = self.wrappedJSObject;
        let t, n;
        try {
            o.uBOL_noWebrtc = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new o.Blob(...o.uBOL_noWebrtc);
            n = o.URL.createObjectURL(r);
            const c = o.document;
            t = c.createElement("script"), t.async = !1, t.src = n, (c.head || c.documentElement || c).append(t);
        } catch (e) {}
        n && (t && t.remove(), o.URL.revokeObjectURL(n)), delete o.uBOL_noWebrtc;
    }
})();