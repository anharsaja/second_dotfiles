!function() {
    const e = self.genericSelectorMap || new Map;
    if (delete self.genericSelectorMap, 0 === e.size) return;
    const t = [];
    let o, n, s, d = 0, i = 0, r = Date.now();
    const c = (e, t) => {
        const o = t.length, n = o + 7 >>> 3;
        let s = (e << 5) + e ^ o;
        for (let e = 0; e < o; e += n) s = (s << 5) + s ^ t.charCodeAt(e);
        return 16777215 & s;
    }, l = (e, t) => {
        const o = e.id;
        "string" == typeof o && 0 !== o.length && t.push(c(35, o.trim()));
    }, a = (e, t) => {
        const o = e.getAttribute("class");
        if ("string" != typeof o) return;
        const n = o.length;
        for (let e = 0, s = 0; e < n; e += 1) s = o.indexOf(" ", e), s !== e && (-1 === s && (s = n), 
        t.push(c(46, o.slice(e, s))), e = s);
    }, h = {
        addedNodes: [],
        nodeSet: new Set,
        add(e) {
            this.addedNodes.push(e);
        },
        next(e) {
            for (const e of this.addedNodes) if (!this.nodeSet.has(e) && (1 === e.nodeType && this.nodeSet.add(e), 
            null !== e.firstElementChild)) for (const t of e.querySelectorAll("[id],[class]")) this.nodeSet.add(t);
            this.addedNodes.length = 0;
            for (const t of this.nodeSet) if (this.nodeSet.delete(t), e.push(t), 64 === e.length) break;
        },
        hasNodes() {
            return 0 !== this.addedNodes.length || 0 !== this.nodeSet.size;
        }
    }, f = () => {
        const n = [], s = [], r = Date.now() + 4;
        for (;h.next(s), 0 !== s.length; ) {
            for (const e of s) l(e, n), a(e, n);
            if (s.length = 0, performance.now() >= r) break;
        }
        for (const o of n) {
            const n = e.get(o);
            void 0 !== n && (t.push(n), e.delete(o));
        }
        if (d += 1, 0 === t.length) return i += 1, void (d >= 100 && i / d >= .95 && p(`too many misses in surveyor (${i}/${d})`));
        void 0 === o && (o = self.requestAnimationFrame((() => {
            o = void 0, u(`${t.join(",")}{display:none!important;}`), t.length = 0;
        })));
    }, u = (e, t = 10) => {
        chrome.runtime.sendMessage({
            what: "insertCSS",
            css: e
        }).catch((() => {
            0 != (t -= 1) && u(e, t - 1);
        }));
    };
    h.add(document), f();
    let g = new MutationObserver((e => {
        for (let t = 0; t < e.length; t++) {
            const o = e[t];
            for (const e of o.addedNodes) 1 === e.nodeType && h.add(e);
        }
        !1 !== h.hasNodes() && (r = Date.now(), void 0 === n && (n = self.setTimeout((() => {
            n = void 0, f();
        }), 64)));
    }));
    g.observe(document, {
        childList: !0,
        subtree: !0
    });
    const m = () => {
        if (s = void 0, void 0 !== g) return Date.now() - r > 2e4 ? p("no more DOM changes") : void (s = self.setTimeout(m, 2e4));
    };
    m();
    const p = t => {
        void 0 !== s && (self.clearTimeout(s), s = void 0), g.disconnect(), g.takeRecords(), 
        g = void 0, e.clear();
    };
}();