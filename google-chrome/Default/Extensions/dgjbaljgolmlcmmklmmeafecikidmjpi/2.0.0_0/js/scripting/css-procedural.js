!function() {
    const t = self.proceduralImports || [];
    self.proceduralImports = void 0, delete self.proceduralImports;
    const e = [];
    try {
        e.push(...document.location.hostname.split("."));
    } catch (t) {}
    const s = e.length;
    if (0 === s) return;
    const o = [];
    for (const {argsList: r, exceptionsMap: n, hostnamesMap: i, entitiesMap: a} of t) {
        const t = new Set, c = [];
        if (0 !== n.size) {
            for (let t = 0; t < s; t++) {
                const s = e.slice(t).join("."), o = n.get(s);
                o && c.push(...o);
            }
            n.clear();
        }
        if (0 !== i.size) {
            const o = e => {
                let s = i.get(e);
                if (void 0 !== s) {
                    "number" == typeof s && (s = [ s ]);
                    for (const e of s) c.includes(e) || t.add(e);
                }
            };
            for (let t = 0; t < s; t++) o(e.slice(t).join("."));
            o("*"), i.clear();
        }
        if (0 !== a.size) {
            const o = s - 1;
            for (let s = 0; s < o; s++) for (let r = o; r > s; r--) {
                const o = e.slice(s, r).join(".");
                let n = a.get(o);
                if (void 0 !== n) {
                    "number" == typeof n && (n = [ n ]);
                    for (const e of n) c.includes(e) || t.add(e);
                }
            }
            a.clear();
        }
        for (const e of t) o.push(...r[e].map((t => JSON.parse(t))));
        r.length = 0;
    }
    if (t.length = 0, 0 === o.length) return;
    const r = (t, e = 10) => {
        chrome.runtime.sendMessage({
            what: "insertCSS",
            css: t
        }).catch((() => {
            0 != (e -= 1) && r(t, e - 1);
        }));
    }, n = {
        script: !0,
        style: !0
    }, i = (t, e = !1) => {
        if ("" === t) return /^/;
        const s = /^\/(.+)\/([i]?)$/.exec(t);
        if (null !== s) return new RegExp(s[1], s[2] || void 0);
        const o = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(e ? `^${o}$` : o, "i");
    };
    class a {
        begin() {}
        end() {}
    }
    class c extends a {
        constructor(t) {
            super();
        }
        transpose() {}
    }
    class l extends a {
        constructor(t) {
            super(), this.pselector = new f(t[1]);
        }
        transpose(t, e) {
            this.pselector.test(t) === this.target && e.push(t);
        }
    }
    l.prototype.target = !0;
    class h extends l {}
    h.prototype.target = !1;
    class u extends a {
        constructor(t) {
            super(), this.name = t[1].name, this.pseudo = t[1].pseudo ? `::${t[1].pseudo}` : null;
            let e, s = t[1].value;
            Array.isArray(s) && (e = s[1], s = s[0]), this.value = new RegExp(s, e);
        }
        transpose(t, e) {
            const s = window.getComputedStyle(t, this.pseudo);
            null !== s && this.value.test(s[this.name]) && e.push(t);
        }
    }
    class p extends a {
        constructor(t) {
            super(), this.spath = t[1], this.nth = /^(?:\s*[+~]|:)/.test(this.spath), this.nth || /^\s*>/.test(this.spath) && (this.spath = `:scope ${this.spath.trim()}`);
        }
        transpose(t, e) {
            const s = this.nth ? p.qsa(t, this.spath) : t.querySelectorAll(this.spath);
            for (const t of s) e.push(t);
        }
        static qsa(t, e) {
            const s = t.parentElement;
            if (null === s) return [];
            let o = 1;
            for (;null !== (t = t.previousElementSibling); ) o += 1;
            return s.querySelectorAll(`:scope > :nth-child(${o})${e}`);
        }
    }
    class d extends a {
        constructor(t) {
            super();
            const e = t[1];
            "number" == typeof e ? this.i = e : this.s = e;
        }
        transpose(t, e) {
            if ("" !== this.s) {
                const e = t.parentElement;
                if (null === e) return;
                if (null === (t = e.closest(this.s))) return;
            } else {
                let e = this.i;
                for (;;) {
                    if (null === (t = t.parentElement)) return;
                    if (e -= 1, 0 === e) break;
                }
            }
            e.push(t);
        }
    }
    d.prototype.i = 0, d.prototype.s = "";
    class f {
        constructor(t) {
            this.raw = t.raw, this.selector = t.selector, this.tasks = [];
            const e = [];
            if (!1 !== Array.isArray(t.tasks)) {
                for (const s of t.tasks) {
                    const t = this.operatorToTaskMap.get(s[0]) || c;
                    e.push(new t(s));
                }
                this.tasks = e;
            }
        }
        prime(t) {
            const e = t || document;
            if ("" === this.selector) return [ e ];
            if (t !== document) {
                const e = this.selector.charCodeAt(0);
                if (43 === e || 126 === e) return Array.from(p.qsa(t, this.selector));
                if (62 === e) return Array.from(t.querySelectorAll(`:scope ${this.selector}`));
            }
            return Array.from(e.querySelectorAll(this.selector));
        }
        exec(t) {
            let e = this.prime(t);
            for (const t of this.tasks) {
                if (0 === e.length) break;
                const s = [];
                t.begin();
                for (const o of e) t.transpose(o, s);
                t.end(s), e = s;
            }
            return e;
        }
        test(t) {
            const e = this.prime(t);
            for (const t of e) {
                let e = [ t ];
                for (const t of this.tasks) {
                    const s = [];
                    t.begin();
                    for (const o of e) t.transpose(o, s);
                    if (t.end(s), e = s, 0 === e.length) break;
                }
                if (0 !== e.length) return !0;
            }
            return !1;
        }
    }
    f.prototype.operatorToTaskMap = new Map([ [ "has", l ], [ "has-text", class extends a {
        constructor(t) {
            super(), this.needle = i(t[1]);
        }
        transpose(t, e) {
            this.needle.test(t.textContent) && e.push(t);
        }
    } ], [ "if", l ], [ "if-not", h ], [ "matches-attr", class extends a {
        constructor(t) {
            super(), this.reAttr = i(t[1].attr, !0), this.reValue = i(t[1].value, !0);
        }
        transpose(t, e) {
            const s = t.getAttributeNames();
            for (const o of s) !1 !== this.reAttr.test(o) && !1 !== this.reValue.test(t.getAttribute(o)) && e.push(t);
        }
    } ], [ "matches-css", u ], [ "matches-css-after", class extends u {
        constructor(t) {
            super(t), this.pseudo = "::after";
        }
    } ], [ "matches-css-before", class extends u {
        constructor(t) {
            super(t), this.pseudo = "::before";
        }
    } ], [ "matches-media", class extends a {
        constructor(t) {
            super(), this.mql = window.matchMedia(t[1]), "not all" !== this.mql.media && this.mql.addEventListener("change", (() => {
                g instanceof Object != 0 && g.onDOMChanged([ null ]);
            }));
        }
        transpose(t, e) {
            !1 !== this.mql.matches && e.push(t);
        }
    } ], [ "matches-path", class extends a {
        constructor(t) {
            super(), this.needle = i(t[1].replace(/\P{ASCII}/gu, (t => encodeURIComponent(t))));
        }
        transpose(t, e) {
            this.needle.test(self.location.pathname + self.location.search) && e.push(t);
        }
    } ], [ "min-text-length", class extends a {
        constructor(t) {
            super(), this.min = t[1];
        }
        transpose(t, e) {
            t.textContent.length >= this.min && e.push(t);
        }
    } ], [ "not", h ], [ "others", class extends a {
        constructor() {
            super(), this.targets = new Set;
        }
        begin() {
            this.targets.clear();
        }
        end(t) {
            const e = new Set(this.targets), s = new Set, o = document.body;
            let r = null;
            for (let t of this.targets) for (;null !== t && t !== o; ) {
                for (e.add(t), s.delete(t), r = t.previousElementSibling; null !== r; ) !0 !== n[r.localName] && !1 === e.has(r) && s.add(r), 
                r = r.previousElementSibling;
                for (r = t.nextElementSibling; null !== r; ) !0 !== n[r.localName] && !1 === e.has(r) && s.add(r), 
                r = r.nextElementSibling;
                t = t.parentElement;
            }
            for (r of s) t.push(r);
            this.targets.clear();
        }
        transpose(t) {
            for (const e of this.targets) {
                if (e.contains(t)) return;
                t.contains(e) && this.targets.delete(e);
            }
            this.targets.add(t);
        }
    } ], [ "spath", p ], [ "upward", d ], [ "watch-attr", class extends a {
        constructor(t) {
            super(), this.observer = null, this.observed = new WeakSet, this.observerOptions = {
                attributes: !0,
                subtree: !0
            };
            const e = t[1];
            Array.isArray(e) && 0 !== e.length && (this.observerOptions.attributeFilter = t[1]);
        }
        handler() {
            g instanceof Object && g.onDOMChanged([ null ]);
        }
        transpose(t, e) {
            e.push(t), this.observed.has(t) || (null === this.observer && (this.observer = new MutationObserver(this.handler)), 
            this.observer.observe(t, this.observerOptions), this.observed.add(t));
        }
    } ], [ "xpath", class extends a {
        constructor(t) {
            super(), this.xpe = document.createExpression(t[1], null), this.xpr = null;
        }
        transpose(t, e) {
            this.xpr = this.xpe.evaluate(t, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, this.xpr);
            let s = this.xpr.snapshotLength;
            for (;s--; ) {
                const t = this.xpr.snapshotItem(s);
                1 === t.nodeType && e.push(t);
            }
        }
    } ] ]);
    class m extends f {
        constructor(t) {
            super(t), this.budget = 200, this.raw = t.raw, this.cost = 0, this.lastAllowanceTime = 0, 
            this.action = t.action;
        }
        prime(t) {
            try {
                return super.prime(t);
            } catch (t) {}
            return [];
        }
    }
    const g = new class {
        constructor(t) {
            this.selectors = [], this.masterToken = this.randomToken(), this.styleTokenMap = new Map, 
            this.styledNodes = new Set, this.timer = void 0, this.hideStyle = "display:none!important;", 
            this.addSelectors(t), this.adBlox_commitNow();
        }
        addSelectors() {
            for (const t of o) {
                const e = new m(t);
                this.primeProceduralSelector(e), this.selectors.push(e);
            }
            this.onDOMChanged();
        }
        primeProceduralSelector(t) {
            return void 0 === t.action ? this.styleTokenFromStyle(this.hideStyle) : "style" === t.action[0] && this.styleTokenFromStyle(t.action[1]), 
            t;
        }
        adBlox_commitNow() {
            const t = this.styledNodes;
            this.styledNodes = new Set;
            let e = Date.now();
            for (const t of this.selectors.values()) {
                const s = Math.floor((e - t.lastAllowanceTime) / 2e3);
                if (s >= 1 && (t.budget += 50 * s, t.budget > 200 && (t.budget = 200), t.lastAllowanceTime = e), 
                t.budget <= 0) continue;
                const o = t.exec(), r = Date.now();
                t.budget += e - r, t.budget < -500 && (t.budget = -2147483647), e = r, 0 !== o.length && this.processNodes(o, t.action);
            }
            this.unprocessNodes(t);
        }
        styleTokenFromStyle(t) {
            if (void 0 === t) return;
            let e = this.styleTokenMap.get(t);
            return void 0 !== e || (e = this.randomToken(), this.styleTokenMap.set(t, e), r(`[${this.masterToken}][${e}]\n{${t}}\n`)), 
            e;
        }
        processNodes(t, e) {
            const s = e && e[0] || "", o = "" !== s ? e[1] : "";
            switch (s) {
              case "":
              case "style":
                {
                    const e = this.styleTokenFromStyle("" === o ? this.hideStyle : o);
                    for (const s of t) s.setAttribute(this.masterToken, ""), s.setAttribute(e, ""), 
                    this.styledNodes.add(s);
                    break;
                }

              case "remove":
                for (const e of t) e.remove(), e.textContent = "";
                break;

              case "remove-attr":
                {
                    const e = i(o, !0);
                    for (const s of t) for (const t of s.getAttributeNames()) !1 !== e.test(t) && s.removeAttribute(t);
                    break;
                }

              case "remove-class":
                {
                    const e = i(o, !0);
                    for (const s of t) {
                        const t = s.classList;
                        for (const s of t.values()) !1 !== e.test(s) && t.remove(s);
                    }
                    break;
                }
            }
        }
        unprocessNodes(t) {
            for (const e of t) this.styledNodes.has(e) || e.removeAttribute(this.masterToken);
        }
        randomToken() {
            const t = Math.random();
            return String.fromCharCode(25 * t + 97) + Math.floor((.25 + .75 * t) * Number.MAX_SAFE_INTEGER).toString(36).slice(-8);
        }
        onDOMChanged() {
            void 0 === this.timer && (this.timer = self.requestAnimationFrame((() => {
                this.timer = void 0, this.adBlox_commitNow();
            })));
        }
    }(o);
    new MutationObserver((t => {
        let e = !1;
        for (let s = 0; s < t.length && !e; s++) {
            const o = t[s];
            for (const t of o.addedNodes) if (1 === t.nodeType) {
                e = !0;
                break;
            }
            if (!1 === e) for (const t of o.removedNodes) if (1 === t.nodeType) {
                e = !0;
                break;
            }
        }
        !1 !== e && g.onDOMChanged();
    })).observe(document, {
        childList: !0,
        subtree: !0
    });
}();