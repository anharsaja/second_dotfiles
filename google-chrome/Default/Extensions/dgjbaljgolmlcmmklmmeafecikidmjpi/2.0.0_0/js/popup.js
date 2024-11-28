(() => {
    var e = {
        638: function(e, t) {
            var n;
            /*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */            !function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e);
                } : n(t);
            }("undefined" != typeof window ? window : this, (function(r, o) {
                "use strict";
                var i = [], a = Object.getPrototypeOf, s = i.slice, u = i.flat ? function(e) {
                    return i.flat.call(e);
                } : function(e) {
                    return i.concat.apply([], e);
                }, c = i.push, l = i.indexOf, f = {}, p = f.toString, d = f.hasOwnProperty, h = d.toString, v = h.call(Object), g = {}, y = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
                }, m = function(e) {
                    return null != e && e === e.window;
                }, b = r.document, x = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function w(e, t, n) {
                    var r, o, i = (n = n || b).createElement("script");
                    if (i.text = e, t) for (r in x) (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
                    n.head.appendChild(i).parentNode.removeChild(i);
                }
                function k(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e;
                }
                var T = "3.7.1", C = /HTML$/i, E = function(e, t) {
                    return new E.fn.init(e, t);
                };
                function S(e) {
                    var t = !!e && "length" in e && e.length, n = k(e);
                    return !y(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
                }
                function j(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                }
                E.fn = E.prototype = {
                    jquery: T,
                    constructor: E,
                    length: 0,
                    toArray: function() {
                        return s.call(this);
                    },
                    get: function(e) {
                        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                    },
                    pushStack: function(e) {
                        var t = E.merge(this.constructor(), e);
                        return t.prevObject = this, t;
                    },
                    each: function(e) {
                        return E.each(this, e);
                    },
                    map: function(e) {
                        return this.pushStack(E.map(this, (function(t, n) {
                            return e.call(t, n, t);
                        })));
                    },
                    slice: function() {
                        return this.pushStack(s.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    even: function() {
                        return this.pushStack(E.grep(this, (function(e, t) {
                            return (t + 1) % 2;
                        })));
                    },
                    odd: function() {
                        return this.pushStack(E.grep(this, (function(e, t) {
                            return t % 2;
                        })));
                    },
                    eq: function(e) {
                        var t = this.length, n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push: c,
                    sort: i.sort,
                    splice: i.splice
                }, E.extend = E.fn.extend = function() {
                    var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
                    for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), 
                    s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], 
                    "__proto__" !== t && a !== r && (c && r && (E.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], 
                    i = o && !Array.isArray(n) ? [] : o || E.isPlainObject(n) ? n : {}, o = !1, a[t] = E.extend(c, i, r)) : void 0 !== r && (a[t] = r));
                    return a;
                }, E.extend({
                    expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e);
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== p.call(e) || (t = a(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || h.call(n) !== v));
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function(e, t, n) {
                        w(e, {
                            nonce: t && t.nonce
                        }, n);
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (S(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                        return e;
                    },
                    text: function(e) {
                        var t, n = "", r = 0, o = e.nodeType;
                        if (!o) for (;t = e[r++]; ) n += E.text(t);
                        return 1 === o || 11 === o ? e.textContent : 9 === o ? e.documentElement.textContent : 3 === o || 4 === o ? e.nodeValue : n;
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (S(Object(e)) ? E.merge(n, "string" == typeof e ? [ e ] : e) : c.call(n, e)), 
                        n;
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : l.call(t, e, n);
                    },
                    isXMLDoc: function(e) {
                        var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                        return !C.test(t || n && n.nodeName || "HTML");
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                        return e.length = o, e;
                    },
                    grep: function(e, t, n) {
                        for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                        return r;
                    },
                    map: function(e, t, n) {
                        var r, o, i = 0, a = [];
                        if (S(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o); else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                        return u(a);
                    },
                    guid: 1,
                    support: g
                }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = i[Symbol.iterator]), 
                E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    f["[object " + t + "]"] = t.toLowerCase();
                }));
                var _ = i.pop, L = i.sort, A = i.splice, D = "[\\x20\\t\\r\\n\\f]", O = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g");
                E.contains = function(e, t) {
                    var n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
                };
                var N = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                function P(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
                }
                E.escapeSelector = function(e) {
                    return (e + "").replace(N, P);
                };
                var q = b, H = c;
                !function() {
                    var e, t, n, o, a, u, c, f, p, h, v = H, y = E.expando, m = 0, b = 0, x = ee(), w = ee(), k = ee(), T = ee(), C = function(e, t) {
                        return e === t && (a = !0), 0;
                    }, S = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", N = "(?:\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", P = "\\[" + D + "*(" + N + ")(?:" + D + "*([*^$|!~]?=)" + D + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + D + "*\\]", $ = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp(D + "+", "g"), M = new RegExp("^" + D + "*," + D + "*"), F = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"), I = new RegExp(D + "|>"), W = new RegExp($), B = new RegExp("^" + N + "$"), z = {
                        ID: new RegExp("^#(" + N + ")"),
                        CLASS: new RegExp("^\\.(" + N + ")"),
                        TAG: new RegExp("^(" + N + "|[*])"),
                        ATTR: new RegExp("^" + P),
                        PSEUDO: new RegExp("^" + $),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + S + ")$", "i"),
                        needsContext: new RegExp("^" + D + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)", "i")
                    }, U = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, V = /[+~]/, Y = new RegExp("\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\([^\\r\\n\\f])", "g"), Q = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
                    }, J = function() {
                        ue();
                    }, K = pe((function(e) {
                        return !0 === e.disabled && j(e, "fieldset");
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        v.apply(i = s.call(q.childNodes), q.childNodes), i[q.childNodes.length].nodeType;
                    } catch (e) {
                        v = {
                            apply: function(e, t) {
                                H.apply(e, s.call(t));
                            },
                            call: function(e) {
                                H.apply(e, s.call(arguments, 1));
                            }
                        };
                    }
                    function Z(e, t, n, r) {
                        var o, i, a, s, c, l, d, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                        if (!r && (ue(t), t = t || u, f)) {
                            if (11 !== m && (c = X.exec(e))) if (o = c[1]) {
                                if (9 === m) {
                                    if (!(a = t.getElementById(o))) return n;
                                    if (a.id === o) return v.call(n, a), n;
                                } else if (h && (a = h.getElementById(o)) && Z.contains(t, a) && a.id === o) return v.call(n, a), 
                                n;
                            } else {
                                if (c[2]) return v.apply(n, t.getElementsByTagName(e)), n;
                                if ((o = c[3]) && t.getElementsByClassName) return v.apply(n, t.getElementsByClassName(o)), 
                                n;
                            }
                            if (!(T[e + " "] || p && p.test(e))) {
                                if (d = e, h = t, 1 === m && (I.test(e) || F.test(e))) {
                                    for ((h = V.test(e) && se(t.parentNode) || t) == t && g.scope || ((s = t.getAttribute("id")) ? s = E.escapeSelector(s) : t.setAttribute("id", s = y)), 
                                    i = (l = le(e)).length; i--; ) l[i] = (s ? "#" + s : ":scope") + " " + fe(l[i]);
                                    d = l.join(",");
                                }
                                try {
                                    return v.apply(n, h.querySelectorAll(d)), n;
                                } catch (t) {
                                    T(e, !0);
                                } finally {
                                    s === y && t.removeAttribute("id");
                                }
                            }
                        }
                        return me(e.replace(O, "$1"), t, n, r);
                    }
                    function ee() {
                        var e = [];
                        return function n(r, o) {
                            return e.push(r + " ") > t.cacheLength && delete n[e.shift()], n[r + " "] = o;
                        };
                    }
                    function te(e) {
                        return e[y] = !0, e;
                    }
                    function ne(e) {
                        var t = u.createElement("fieldset");
                        try {
                            return !!e(t);
                        } catch (e) {
                            return !1;
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null;
                        }
                    }
                    function re(e) {
                        return function(t) {
                            return j(t, "input") && t.type === e;
                        };
                    }
                    function oe(e) {
                        return function(t) {
                            return (j(t, "input") || j(t, "button")) && t.type === e;
                        };
                    }
                    function ie(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && K(t) === e : t.disabled === e : "label" in t && t.disabled === e;
                        };
                    }
                    function ae(e) {
                        return te((function(t) {
                            return t = +t, te((function(n, r) {
                                for (var o, i = e([], n.length, t), a = i.length; a--; ) n[o = i[a]] && (n[o] = !(r[o] = n[o]));
                            }));
                        }));
                    }
                    function se(e) {
                        return e && void 0 !== e.getElementsByTagName && e;
                    }
                    function ue(e) {
                        var n, r = e ? e.ownerDocument || e : q;
                        return r != u && 9 === r.nodeType && r.documentElement ? (c = (u = r).documentElement, 
                        f = !E.isXMLDoc(u), h = c.matches || c.webkitMatchesSelector || c.msMatchesSelector, 
                        c.msMatchesSelector && q != u && (n = u.defaultView) && n.top !== n && n.addEventListener("unload", J), 
                        g.getById = ne((function(e) {
                            return c.appendChild(e).id = E.expando, !u.getElementsByName || !u.getElementsByName(E.expando).length;
                        })), g.disconnectedMatch = ne((function(e) {
                            return h.call(e, "*");
                        })), g.scope = ne((function() {
                            return u.querySelectorAll(":scope");
                        })), g.cssHas = ne((function() {
                            try {
                                return u.querySelector(":has(*,:jqfake)"), !1;
                            } catch (e) {
                                return !0;
                            }
                        })), g.getById ? (t.filter.ID = function(e) {
                            var t = e.replace(Y, Q);
                            return function(e) {
                                return e.getAttribute("id") === t;
                            };
                        }, t.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && f) {
                                var n = t.getElementById(e);
                                return n ? [ n ] : [];
                            }
                        }) : (t.filter.ID = function(e) {
                            var t = e.replace(Y, Q);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t;
                            };
                        }, t.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && f) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++]; ) if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
                                }
                                return [];
                            }
                        }), t.find.TAG = function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                        }, t.find.CLASS = function(e, t) {
                            if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e);
                        }, p = [], ne((function(e) {
                            var t;
                            c.appendChild(e).innerHTML = "<a id='" + y + "' href='' disabled='disabled'></a><select id='" + y + "-\r\\' disabled='disabled'><option selected=''></option></select>", 
                            e.querySelectorAll("[selected]").length || p.push("\\[" + D + "*(?:value|" + S + ")"), 
                            e.querySelectorAll("[id~=" + y + "-]").length || p.push("~="), e.querySelectorAll("a#" + y + "+*").length || p.push(".#.+[+~]"), 
                            e.querySelectorAll(":checked").length || p.push(":checked"), (t = u.createElement("input")).setAttribute("type", "hidden"), 
                            e.appendChild(t).setAttribute("name", "D"), c.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), 
                            (t = u.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + D + "*name" + D + "*=" + D + "*(?:''|\"\")");
                        })), g.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), C = function(e, t) {
                            if (e === t) return a = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument == q && Z.contains(q, e) ? -1 : t === u || t.ownerDocument == q && Z.contains(q, t) ? 1 : o ? l.call(o, e) - l.call(o, t) : 0 : 4 & n ? -1 : 1);
                        }, u) : u;
                    }
                    for (e in Z.matches = function(e, t) {
                        return Z(e, null, null, t);
                    }, Z.matchesSelector = function(e, t) {
                        if (ue(e), f && !T[t + " "] && (!p || !p.test(t))) try {
                            var n = h.call(e, t);
                            if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
                        } catch (e) {
                            T(t, !0);
                        }
                        return Z(t, u, null, [ e ]).length > 0;
                    }, Z.contains = function(e, t) {
                        return (e.ownerDocument || e) != u && ue(e), E.contains(e, t);
                    }, Z.attr = function(e, n) {
                        (e.ownerDocument || e) != u && ue(e);
                        var r = t.attrHandle[n.toLowerCase()], o = r && d.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !f) : void 0;
                        return void 0 !== o ? o : e.getAttribute(n);
                    }, Z.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e);
                    }, E.uniqueSort = function(e) {
                        var t, n = [], r = 0, i = 0;
                        if (a = !g.sortStable, o = !g.sortStable && s.call(e, 0), L.call(e, C), a) {
                            for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                            for (;r--; ) A.call(e, n[r], 1);
                        }
                        return o = null, e;
                    }, E.fn.uniqueSort = function() {
                        return this.pushStack(E.uniqueSort(s.apply(this)));
                    }, (t = E.expr = {
                        cacheLength: 50,
                        createPseudo: te,
                        match: z,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(Y, Q), e[3] = (e[3] || e[4] || e[5] || "").replace(Y, Q), 
                                "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]), 
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]), 
                                e;
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = le(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                                e[2] = n.slice(0, t)), e.slice(0, 3));
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(Y, Q).toLowerCase();
                                return "*" === e ? function() {
                                    return !0;
                                } : function(e) {
                                    return j(e, t);
                                };
                            },
                            CLASS: function(e) {
                                var t = x[e + " "];
                                return t || (t = new RegExp("(^|" + D + ")" + e + "(" + D + "|$)")) && x(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                                }));
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var o = Z.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                                };
                            },
                            CHILD: function(e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                                return 1 === r && 0 === o ? function(e) {
                                    return !!e.parentNode;
                                } : function(t, n, u) {
                                    var c, l, f, p, d, h = i !== a ? "nextSibling" : "previousSibling", v = t.parentNode, g = s && t.nodeName.toLowerCase(), b = !u && !s, x = !1;
                                    if (v) {
                                        if (i) {
                                            for (;h; ) {
                                                for (f = t; f = f[h]; ) if (s ? j(f, g) : 1 === f.nodeType) return !1;
                                                d = h = "only" === e && !d && "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (d = [ a ? v.firstChild : v.lastChild ], a && b) {
                                            for (x = (p = (c = (l = v[y] || (v[y] = {}))[e] || [])[0] === m && c[1]) && c[2], 
                                            f = p && v.childNodes[p]; f = ++p && f && f[h] || (x = p = 0) || d.pop(); ) if (1 === f.nodeType && ++x && f === t) {
                                                l[e] = [ m, p, x ];
                                                break;
                                            }
                                        } else if (b && (x = p = (c = (l = t[y] || (t[y] = {}))[e] || [])[0] === m && c[1]), 
                                        !1 === x) for (;(f = ++p && f && f[h] || (x = p = 0) || d.pop()) && (!(s ? j(f, g) : 1 === f.nodeType) || !++x || (b && ((l = f[y] || (f[y] = {}))[e] = [ m, x ]), 
                                        f !== t)); ) ;
                                        return (x -= o) === r || x % r == 0 && x / r >= 0;
                                    }
                                };
                            },
                            PSEUDO: function(e, n) {
                                var r, o = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                                return o[y] ? o(n) : o.length > 1 ? (r = [ e, e, "", n ], t.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function(e, t) {
                                    for (var r, i = o(e, n), a = i.length; a--; ) e[r = l.call(e, i[a])] = !(t[r] = i[a]);
                                })) : function(e) {
                                    return o(e, 0, r);
                                }) : o;
                            }
                        },
                        pseudos: {
                            not: te((function(e) {
                                var t = [], n = [], r = ye(e.replace(O, "$1"));
                                return r[y] ? te((function(e, t, n, o) {
                                    for (var i, a = r(e, null, o, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                                })) : function(e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
                                };
                            })),
                            has: te((function(e) {
                                return function(t) {
                                    return Z(e, t).length > 0;
                                };
                            })),
                            contains: te((function(e) {
                                return e = e.replace(Y, Q), function(t) {
                                    return (t.textContent || E.text(t)).indexOf(e) > -1;
                                };
                            })),
                            lang: te((function(e) {
                                return B.test(e || "") || Z.error("unsupported lang: " + e), e = e.replace(Y, Q).toLowerCase(), 
                                function(t) {
                                    var n;
                                    do {
                                        if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                };
                            })),
                            target: function(e) {
                                var t = r.location && r.location.hash;
                                return t && t.slice(1) === e.id;
                            },
                            root: function(e) {
                                return e === c;
                            },
                            focus: function(e) {
                                return e === function() {
                                    try {
                                        return u.activeElement;
                                    } catch (e) {}
                                }() && u.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
                            },
                            enabled: ie(!1),
                            disabled: ie(!0),
                            checked: function(e) {
                                return j(e, "input") && !!e.checked || j(e, "option") && !!e.selected;
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function(e) {
                                return !t.pseudos.empty(e);
                            },
                            header: function(e) {
                                return G.test(e.nodeName);
                            },
                            input: function(e) {
                                return U.test(e.nodeName);
                            },
                            button: function(e) {
                                return j(e, "input") && "button" === e.type || j(e, "button");
                            },
                            text: function(e) {
                                var t;
                                return j(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                            },
                            first: ae((function() {
                                return [ 0 ];
                            })),
                            last: ae((function(e, t) {
                                return [ t - 1 ];
                            })),
                            eq: ae((function(e, t, n) {
                                return [ n < 0 ? n + t : n ];
                            })),
                            even: ae((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e;
                            })),
                            odd: ae((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e;
                            })),
                            lt: ae((function(e, t, n) {
                                var r;
                                for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                                return e;
                            })),
                            gt: ae((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                return e;
                            }))
                        }
                    }).pseudos.nth = t.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) t.pseudos[e] = re(e);
                    for (e in {
                        submit: !0,
                        reset: !0
                    }) t.pseudos[e] = oe(e);
                    function ce() {}
                    function le(e, n) {
                        var r, o, i, a, s, u, c, l = w[e + " "];
                        if (l) return n ? 0 : l.slice(0);
                        for (s = e, u = [], c = t.preFilter; s; ) {
                            for (a in r && !(o = M.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), 
                            r = !1, (o = F.exec(s)) && (r = o.shift(), i.push({
                                value: r,
                                type: o[0].replace(O, " ")
                            }), s = s.slice(r.length)), t.filter) !(o = z[a].exec(s)) || c[a] && !(o = c[a](o)) || (r = o.shift(), 
                            i.push({
                                value: r,
                                type: a,
                                matches: o
                            }), s = s.slice(r.length));
                            if (!r) break;
                        }
                        return n ? s.length : s ? Z.error(e) : w(e, u).slice(0);
                    }
                    function fe(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r;
                    }
                    function pe(e, t, n) {
                        var r = t.dir, o = t.next, i = o || r, a = n && "parentNode" === i, s = b++;
                        return t.first ? function(t, n, o) {
                            for (;t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, o);
                            return !1;
                        } : function(t, n, u) {
                            var c, l, f = [ m, s ];
                            if (u) {
                                for (;t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                            } else for (;t = t[r]; ) if (1 === t.nodeType || a) if (l = t[y] || (t[y] = {}), 
                            o && j(t, o)) t = t[r] || t; else {
                                if ((c = l[i]) && c[0] === m && c[1] === s) return f[2] = c[2];
                                if (l[i] = f, f[2] = e(t, n, u)) return !0;
                            }
                            return !1;
                        };
                    }
                    function de(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                            return !0;
                        } : e[0];
                    }
                    function he(e, t, n, r, o) {
                        for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (i = e[s]) && (n && !n(i, r, o) || (a.push(i), 
                        c && t.push(s)));
                        return a;
                    }
                    function ve(e, t, n, r, o, i) {
                        return r && !r[y] && (r = ve(r)), o && !o[y] && (o = ve(o, i)), te((function(i, a, s, u) {
                            var c, f, p, d, h = [], g = [], y = a.length, m = i || function(e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) Z(e, t[r], n);
                                return n;
                            }(t || "*", s.nodeType ? [ s ] : s, []), b = !e || !i && t ? m : he(m, h, e, s, u);
                            if (n ? n(b, d = o || (i ? e : y || r) ? [] : a, s, u) : d = b, r) for (c = he(d, g), 
                            r(c, [], s, u), f = c.length; f--; ) (p = c[f]) && (d[g[f]] = !(b[g[f]] = p));
                            if (i) {
                                if (o || e) {
                                    if (o) {
                                        for (c = [], f = d.length; f--; ) (p = d[f]) && c.push(b[f] = p);
                                        o(null, d = [], c, u);
                                    }
                                    for (f = d.length; f--; ) (p = d[f]) && (c = o ? l.call(i, p) : h[f]) > -1 && (i[c] = !(a[c] = p));
                                }
                            } else d = he(d === a ? d.splice(y, d.length) : d), o ? o(null, a, d, u) : v.apply(a, d);
                        }));
                    }
                    function ge(e) {
                        for (var r, o, i, a = e.length, s = t.relative[e[0].type], u = s || t.relative[" "], c = s ? 1 : 0, f = pe((function(e) {
                            return e === r;
                        }), u, !0), p = pe((function(e) {
                            return l.call(r, e) > -1;
                        }), u, !0), d = [ function(e, t, o) {
                            var i = !s && (o || t != n) || ((r = t).nodeType ? f(e, t, o) : p(e, t, o));
                            return r = null, i;
                        } ]; c < a; c++) if (o = t.relative[e[c].type]) d = [ pe(de(d), o) ]; else {
                            if ((o = t.filter[e[c].type].apply(null, e[c].matches))[y]) {
                                for (i = ++c; i < a && !t.relative[e[i].type]; i++) ;
                                return ve(c > 1 && de(d), c > 1 && fe(e.slice(0, c - 1).concat({
                                    value: " " === e[c - 2].type ? "*" : ""
                                })).replace(O, "$1"), o, c < i && ge(e.slice(c, i)), i < a && ge(e = e.slice(i)), i < a && fe(e));
                            }
                            d.push(o);
                        }
                        return de(d);
                    }
                    function ye(e, r) {
                        var o, i = [], a = [], s = k[e + " "];
                        if (!s) {
                            for (r || (r = le(e)), o = r.length; o--; ) (s = ge(r[o]))[y] ? i.push(s) : a.push(s);
                            (s = k(e, function(e, r) {
                                var o = r.length > 0, i = e.length > 0, a = function(a, s, c, l, p) {
                                    var d, h, g, y = 0, b = "0", x = a && [], w = [], k = n, T = a || i && t.find.TAG("*", p), C = m += null == k ? 1 : Math.random() || .1, S = T.length;
                                    for (p && (n = s == u || s || p); b !== S && null != (d = T[b]); b++) {
                                        if (i && d) {
                                            for (h = 0, s || d.ownerDocument == u || (ue(d), c = !f); g = e[h++]; ) if (g(d, s || u, c)) {
                                                v.call(l, d);
                                                break;
                                            }
                                            p && (m = C);
                                        }
                                        o && ((d = !g && d) && y--, a && x.push(d));
                                    }
                                    if (y += b, o && b !== y) {
                                        for (h = 0; g = r[h++]; ) g(x, w, s, c);
                                        if (a) {
                                            if (y > 0) for (;b--; ) x[b] || w[b] || (w[b] = _.call(l));
                                            w = he(w);
                                        }
                                        v.apply(l, w), p && !a && w.length > 0 && y + r.length > 1 && E.uniqueSort(l);
                                    }
                                    return p && (m = C, n = k), x;
                                };
                                return o ? te(a) : a;
                            }(a, i))).selector = e;
                        }
                        return s;
                    }
                    function me(e, n, r, o) {
                        var i, a, s, u, c, l = "function" == typeof e && e, p = !o && le(e = l.selector || e);
                        if (r = r || [], 1 === p.length) {
                            if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === n.nodeType && f && t.relative[a[1].type]) {
                                if (!(n = (t.find.ID(s.matches[0].replace(Y, Q), n) || [])[0])) return r;
                                l && (n = n.parentNode), e = e.slice(a.shift().value.length);
                            }
                            for (i = z.needsContext.test(e) ? 0 : a.length; i-- && (s = a[i], !t.relative[u = s.type]); ) if ((c = t.find[u]) && (o = c(s.matches[0].replace(Y, Q), V.test(a[0].type) && se(n.parentNode) || n))) {
                                if (a.splice(i, 1), !(e = o.length && fe(a))) return v.apply(r, o), r;
                                break;
                            }
                        }
                        return (l || ye(e, p))(o, n, !f, r, !n || V.test(e) && se(n.parentNode) || n), r;
                    }
                    ce.prototype = t.filters = t.pseudos, t.setFilters = new ce, g.sortStable = y.split("").sort(C).join("") === y, 
                    ue(), g.sortDetached = ne((function(e) {
                        return 1 & e.compareDocumentPosition(u.createElement("fieldset"));
                    })), E.find = Z, E.expr[":"] = E.expr.pseudos, E.unique = E.uniqueSort, Z.compile = ye, 
                    Z.select = me, Z.setDocument = ue, Z.tokenize = le, Z.escape = E.escapeSelector, 
                    Z.getText = E.text, Z.isXML = E.isXMLDoc, Z.selectors = E.expr, Z.support = E.support, 
                    Z.uniqueSort = E.uniqueSort;
                }();
                var $ = function(e, t, n) {
                    for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                        if (o && E(e).is(n)) break;
                        r.push(e);
                    }
                    return r;
                }, R = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                }, M = E.expr.match.needsContext, F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function I(e, t, n) {
                    return y(t) ? E.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n;
                    })) : t.nodeType ? E.grep(e, (function(e) {
                        return e === t !== n;
                    })) : "string" != typeof t ? E.grep(e, (function(e) {
                        return l.call(t, e) > -1 !== n;
                    })) : E.filter(t, e, n);
                }
                E.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [ r ] : [] : E.find.matches(e, E.grep(t, (function(e) {
                        return 1 === e.nodeType;
                    })));
                }, E.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length, o = this;
                        if ("string" != typeof e) return this.pushStack(E(e).filter((function() {
                            for (t = 0; t < r; t++) if (E.contains(o[t], this)) return !0;
                        })));
                        for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, o[t], n);
                        return r > 1 ? E.uniqueSort(n) : n;
                    },
                    filter: function(e) {
                        return this.pushStack(I(this, e || [], !1));
                    },
                    not: function(e) {
                        return this.pushStack(I(this, e || [], !0));
                    },
                    is: function(e) {
                        return !!I(this, "string" == typeof e && M.test(e) ? E(e) : e || [], !1).length;
                    }
                });
                var W, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (E.fn.init = function(e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if (n = n || W, "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : B.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), 
                            F.test(r[1]) && E.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this;
                        }
                        return (o = b.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
                }).prototype = E.fn, W = E(b);
                var z = /^(?:parents|prev(?:Until|All))/, U = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function G(e, t) {
                    for (;(e = e[t]) && 1 !== e.nodeType; ) ;
                    return e;
                }
                E.fn.extend({
                    has: function(e) {
                        var t = E(e, this), n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
                        }));
                    },
                    closest: function(e, t) {
                        var n, r = 0, o = this.length, i = [], a = "string" != typeof e && E(e);
                        if (!M.test(e)) for (;r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            i.push(n);
                            break;
                        }
                        return this.pushStack(i.length > 1 ? E.uniqueSort(i) : i);
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? l.call(E(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    },
                    add: function(e, t) {
                        return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                    }
                }), E.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null;
                    },
                    parents: function(e) {
                        return $(e, "parentNode");
                    },
                    parentsUntil: function(e, t, n) {
                        return $(e, "parentNode", n);
                    },
                    next: function(e) {
                        return G(e, "nextSibling");
                    },
                    prev: function(e) {
                        return G(e, "previousSibling");
                    },
                    nextAll: function(e) {
                        return $(e, "nextSibling");
                    },
                    prevAll: function(e) {
                        return $(e, "previousSibling");
                    },
                    nextUntil: function(e, t, n) {
                        return $(e, "nextSibling", n);
                    },
                    prevUntil: function(e, t, n) {
                        return $(e, "previousSibling", n);
                    },
                    siblings: function(e) {
                        return R((e.parentNode || {}).firstChild, e);
                    },
                    children: function(e) {
                        return R(e.firstChild);
                    },
                    contents: function(e) {
                        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (j(e, "template") && (e = e.content || e), 
                        E.merge([], e.childNodes));
                    }
                }, (function(e, t) {
                    E.fn[e] = function(n, r) {
                        var o = E.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = E.filter(r, o)), 
                        this.length > 1 && (U[e] || E.uniqueSort(o), z.test(e) && o.reverse()), this.pushStack(o);
                    };
                }));
                var X = /[^\x20\t\r\n\f]+/g;
                function V(e) {
                    return e;
                }
                function Y(e) {
                    throw e;
                }
                function Q(e, t, n, r) {
                    var o;
                    try {
                        e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
                    } catch (e) {
                        n.apply(void 0, [ e ]);
                    }
                }
                E.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return E.each(e.match(X) || [], (function(e, n) {
                            t[n] = !0;
                        })), t;
                    }(e) : E.extend({}, e);
                    var t, n, r, o, i = [], a = [], s = -1, u = function() {
                        for (o = o || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < i.length; ) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, 
                        n = !1);
                        e.memory || (n = !1), t = !1, o && (i = n ? [] : "");
                    }, c = {
                        add: function() {
                            return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                                E.each(n, (function(n, r) {
                                    y(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== k(r) && t(r);
                                }));
                            }(arguments), n && !t && u()), this;
                        },
                        remove: function() {
                            return E.each(arguments, (function(e, t) {
                                for (var n; (n = E.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= s && s--;
                            })), this;
                        },
                        has: function(e) {
                            return e ? E.inArray(e, i) > -1 : i.length > 0;
                        },
                        empty: function() {
                            return i && (i = []), this;
                        },
                        disable: function() {
                            return o = a = [], i = n = "", this;
                        },
                        disabled: function() {
                            return !i;
                        },
                        lock: function() {
                            return o = a = [], n || t || (i = n = ""), this;
                        },
                        locked: function() {
                            return !!o;
                        },
                        fireWith: function(e, n) {
                            return o || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
                            this;
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function() {
                            return !!r;
                        }
                    };
                    return c;
                }, E.extend({
                    Deferred: function(e) {
                        var t = [ [ "notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2 ], [ "resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected" ] ], n = "pending", o = {
                            state: function() {
                                return n;
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this;
                            },
                            catch: function(e) {
                                return o.then(null, e);
                            },
                            pipe: function() {
                                var e = arguments;
                                return E.Deferred((function(n) {
                                    E.each(t, (function(t, r) {
                                        var o = y(e[r[4]]) && e[r[4]];
                                        i[r[1]]((function() {
                                            var e = o && o.apply(this, arguments);
                                            e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [ e ] : arguments);
                                        }));
                                    })), e = null;
                                })).promise();
                            },
                            then: function(e, n, o) {
                                var i = 0;
                                function a(e, t, n, o) {
                                    return function() {
                                        var s = this, u = arguments, c = function() {
                                            var r, c;
                                            if (!(e < i)) {
                                                if ((r = n.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = r && ("object" == typeof r || "function" == typeof r) && r.then, y(c) ? o ? c.call(r, a(i, t, V, o), a(i, t, Y, o)) : (i++, 
                                                c.call(r, a(i, t, V, o), a(i, t, Y, o), a(i, t, V, t.notifyWith))) : (n !== V && (s = void 0, 
                                                u = [ r ]), (o || t.resolveWith)(s, u));
                                            }
                                        }, l = o ? c : function() {
                                            try {
                                                c();
                                            } catch (r) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(r, l.error), e + 1 >= i && (n !== Y && (s = void 0, 
                                                u = [ r ]), t.rejectWith(s, u));
                                            }
                                        };
                                        e ? l() : (E.Deferred.getErrorHook ? l.error = E.Deferred.getErrorHook() : E.Deferred.getStackHook && (l.error = E.Deferred.getStackHook()), 
                                        r.setTimeout(l));
                                    };
                                }
                                return E.Deferred((function(r) {
                                    t[0][3].add(a(0, r, y(o) ? o : V, r.notifyWith)), t[1][3].add(a(0, r, y(e) ? e : V)), 
                                    t[2][3].add(a(0, r, y(n) ? n : Y));
                                })).promise();
                            },
                            promise: function(e) {
                                return null != e ? E.extend(e, o) : o;
                            }
                        }, i = {};
                        return E.each(t, (function(e, r) {
                            var a = r[2], s = r[5];
                            o[r[1]] = a.add, s && a.add((function() {
                                n = s;
                            }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(r[3].fire), 
                            i[r[0]] = function() {
                                return i[r[0] + "With"](this === i ? void 0 : this, arguments), this;
                            }, i[r[0] + "With"] = a.fireWith;
                        })), o.promise(i), e && e.call(i, i), i;
                    },
                    when: function(e) {
                        var t = arguments.length, n = t, r = Array(n), o = s.call(arguments), i = E.Deferred(), a = function(e) {
                            return function(n) {
                                r[e] = this, o[e] = arguments.length > 1 ? s.call(arguments) : n, --t || i.resolveWith(r, o);
                            };
                        };
                        if (t <= 1 && (Q(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();
                        for (;n--; ) Q(o[n], a(n), i.reject);
                        return i.promise();
                    }
                });
                var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                E.Deferred.exceptionHook = function(e, t) {
                    r.console && r.console.warn && e && J.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                }, E.readyException = function(e) {
                    r.setTimeout((function() {
                        throw e;
                    }));
                };
                var K = E.Deferred();
                function Z() {
                    b.removeEventListener("DOMContentLoaded", Z), r.removeEventListener("load", Z), 
                    E.ready();
                }
                E.fn.ready = function(e) {
                    return K.then(e).catch((function(e) {
                        E.readyException(e);
                    })), this;
                }, E.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || K.resolveWith(b, [ E ]));
                    }
                }), E.ready.then = K.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? r.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", Z), 
                r.addEventListener("load", Z));
                var ee = function(e, t, n, r, o, i, a) {
                    var s = 0, u = e.length, c = null == n;
                    if ("object" === k(n)) for (s in o = !0, n) ee(e, t, s, n[s], !0, i, a); else if (void 0 !== r && (o = !0, 
                    y(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(E(e), n);
                    })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
                }, te = /^-ms-/, ne = /-([a-z])/g;
                function re(e, t) {
                    return t.toUpperCase();
                }
                function oe(e) {
                    return e.replace(te, "ms-").replace(ne, re);
                }
                var ie = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
                function ae() {
                    this.expando = E.expando + ae.uid++;
                }
                ae.uid = 1, ae.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t;
                    },
                    set: function(e, t, n) {
                        var r, o = this.cache(e);
                        if ("string" == typeof t) o[oe(t)] = n; else for (r in t) o[oe(r)] = t[r];
                        return o;
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][oe(t)];
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
                        void 0 !== n ? n : t);
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(oe) : (t = oe(t)) in r ? [ t ] : t.match(X) || []).length;
                                for (;n--; ) delete r[t[n]];
                            }
                            (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !E.isEmptyObject(t);
                    }
                };
                var se = new ae, ue = new ae, ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, le = /[A-Z]/g;
                function fe(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(le, "-$&").toLowerCase(), 
                    "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ce.test(e) ? JSON.parse(e) : e);
                            }(n);
                        } catch (e) {}
                        ue.set(e, t, n);
                    } else n = void 0;
                    return n;
                }
                E.extend({
                    hasData: function(e) {
                        return ue.hasData(e) || se.hasData(e);
                    },
                    data: function(e, t, n) {
                        return ue.access(e, t, n);
                    },
                    removeData: function(e, t) {
                        ue.remove(e, t);
                    },
                    _data: function(e, t, n) {
                        return se.access(e, t, n);
                    },
                    _removeData: function(e, t) {
                        se.remove(e, t);
                    }
                }), E.fn.extend({
                    data: function(e, t) {
                        var n, r, o, i = this[0], a = i && i.attributes;
                        if (void 0 === e) {
                            if (this.length && (o = ue.get(i), 1 === i.nodeType && !se.get(i, "hasDataAttrs"))) {
                                for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = oe(r.slice(5)), 
                                fe(i, r, o[r]));
                                se.set(i, "hasDataAttrs", !0);
                            }
                            return o;
                        }
                        return "object" == typeof e ? this.each((function() {
                            ue.set(this, e);
                        })) : ee(this, (function(t) {
                            var n;
                            if (i && void 0 === t) return void 0 !== (n = ue.get(i, e)) || void 0 !== (n = fe(i, e)) ? n : void 0;
                            this.each((function() {
                                ue.set(this, e, t);
                            }));
                        }), null, t, arguments.length > 1, null, !0);
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            ue.remove(this, e);
                        }));
                    }
                }), E.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = se.get(e, t), n && (!r || Array.isArray(n) ? r = se.access(e, t, E.makeArray(n)) : r.push(n)), 
                        r || [];
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = E.queue(e, t), r = n.length, o = n.shift(), i = E._queueHooks(e, t);
                        "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), 
                        delete i.stop, o.call(e, (function() {
                            E.dequeue(e, t);
                        }), i)), !r && i && i.empty.fire();
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return se.get(e, n) || se.access(e, n, {
                            empty: E.Callbacks("once memory").add((function() {
                                se.remove(e, [ t + "queue", n ]);
                            }))
                        });
                    }
                }), E.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = E.queue(this, e, t);
                            E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e);
                        }));
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            E.dequeue(this, e);
                        }));
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function(e, t) {
                        var n, r = 1, o = E.Deferred(), i = this, a = this.length, s = function() {
                            --r || o.resolveWith(i, [ i ]);
                        };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = se.get(i[a], e + "queueHooks")) && n.empty && (r++, 
                        n.empty.add(s));
                        return s(), o.promise(t);
                    }
                });
                var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, de = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"), he = [ "Top", "Right", "Bottom", "Left" ], ve = b.documentElement, ge = function(e) {
                    return E.contains(e.ownerDocument, e);
                }, ye = {
                    composed: !0
                };
                ve.getRootNode && (ge = function(e) {
                    return E.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument;
                });
                var me = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ge(e) && "none" === E.css(e, "display");
                };
                function be(e, t, n, r) {
                    var o, i, a = 20, s = r ? function() {
                        return r.cur();
                    } : function() {
                        return E.css(e, t, "");
                    }, u = s(), c = n && n[3] || (E.cssNumber[t] ? "" : "px"), l = e.nodeType && (E.cssNumber[t] || "px" !== c && +u) && de.exec(E.css(e, t));
                    if (l && l[3] !== c) {
                        for (u /= 2, c = c || l[3], l = +u || 1; a--; ) E.style(e, t, l + c), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), 
                        l /= i;
                        l *= 2, E.style(e, t, l + c), n = n || [];
                    }
                    return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, 
                    r.start = l, r.end = o)), o;
                }
                var xe = {};
                function we(e) {
                    var t, n = e.ownerDocument, r = e.nodeName, o = xe[r];
                    return o || (t = n.body.appendChild(n.createElement(r)), o = E.css(t, "display"), 
                    t.parentNode.removeChild(t), "none" === o && (o = "block"), xe[r] = o, o);
                }
                function ke(e, t) {
                    for (var n, r, o = [], i = 0, a = e.length; i < a; i++) (r = e[i]).style && (n = r.style.display, 
                    t ? ("none" === n && (o[i] = se.get(r, "display") || null, o[i] || (r.style.display = "")), 
                    "" === r.style.display && me(r) && (o[i] = we(r))) : "none" !== n && (o[i] = "none", 
                    se.set(r, "display", n)));
                    for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
                    return e;
                }
                E.fn.extend({
                    show: function() {
                        return ke(this, !0);
                    },
                    hide: function() {
                        return ke(this);
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            me(this) ? E(this).show() : E(this).hide();
                        }));
                    }
                });
                var Te, Ce, Ee = /^(?:checkbox|radio)$/i, Se = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, je = /^$|^module$|\/(?:java|ecma)script/i;
                Te = b.createDocumentFragment().appendChild(b.createElement("div")), (Ce = b.createElement("input")).setAttribute("type", "radio"), 
                Ce.setAttribute("checked", "checked"), Ce.setAttribute("name", "t"), Te.appendChild(Ce), 
                g.checkClone = Te.cloneNode(!0).cloneNode(!0).lastChild.checked, Te.innerHTML = "<textarea>x</textarea>", 
                g.noCloneChecked = !!Te.cloneNode(!0).lastChild.defaultValue, Te.innerHTML = "<option></option>", 
                g.option = !!Te.lastChild;
                var _e = {
                    thead: [ 1, "<table>", "</table>" ],
                    col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                    _default: [ 0, "", "" ]
                };
                function Le(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
                    void 0 === t || t && j(e, t) ? E.merge([ e ], n) : n;
                }
                function Ae(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) se.set(e[n], "globalEval", !t || se.get(t[n], "globalEval"));
                }
                _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, _e.th = _e.td, g.option || (_e.optgroup = _e.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
                var De = /<|&#?\w+;/;
                function Oe(e, t, n, r, o) {
                    for (var i, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((i = e[d]) || 0 === i) if ("object" === k(i)) E.merge(p, i.nodeType ? [ i ] : i); else if (De.test(i)) {
                        for (a = a || f.appendChild(t.createElement("div")), s = (Se.exec(i) || [ "", "" ])[1].toLowerCase(), 
                        u = _e[s] || _e._default, a.innerHTML = u[1] + E.htmlPrefilter(i) + u[2], l = u[0]; l--; ) a = a.lastChild;
                        E.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
                    } else p.push(t.createTextNode(i));
                    for (f.textContent = "", d = 0; i = p[d++]; ) if (r && E.inArray(i, r) > -1) o && o.push(i); else if (c = ge(i), 
                    a = Le(f.appendChild(i), "script"), c && Ae(a), n) for (l = 0; i = a[l++]; ) je.test(i.type || "") && n.push(i);
                    return f;
                }
                var Ne = /^([^.]*)(?:\.(.+)|)/;
                function Pe() {
                    return !0;
                }
                function qe() {
                    return !1;
                }
                function He(e, t, n, r, o, i) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n, n = void 0), t) He(e, s, n, r, t[s], i);
                        return e;
                    }
                    if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, 
                    r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = qe; else if (!o) return e;
                    return 1 === i && (a = o, (o = function(e) {
                        return E().off(e), a.apply(this, arguments);
                    }).guid = a.guid || (a.guid = E.guid++)), e.each((function() {
                        E.event.add(this, t, o, r, n);
                    }));
                }
                function $e(e, t, n) {
                    n ? (se.set(e, t, !1), E.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var n, r = se.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (r) (E.event.special[t] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), 
                                se.set(this, t, r), this[t](), n = se.get(this, t), se.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), 
                                e.preventDefault(), n;
                            } else r && (se.set(this, t, E.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), 
                            e.isImmediatePropagationStopped = Pe);
                        }
                    })) : void 0 === se.get(e, t) && E.event.add(e, t, Pe);
                }
                E.event = {
                    global: {},
                    add: function(e, t, n, r, o) {
                        var i, a, s, u, c, l, f, p, d, h, v, g = se.get(e);
                        if (ie(e)) for (n.handler && (n = (i = n).handler, o = i.selector), o && E.find.matchesSelector(ve, o), 
                        n.guid || (n.guid = E.guid++), (u = g.events) || (u = g.events = Object.create(null)), 
                        (a = g.handle) || (a = g.handle = function(t) {
                            return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0;
                        }), c = (t = (t || "").match(X) || [ "" ]).length; c--; ) d = v = (s = Ne.exec(t[c]) || [])[1], 
                        h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, 
                        f = E.event.special[d] || {}, l = E.extend({
                            type: d,
                            origType: v,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && E.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), 
                        f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, l) : p.push(l), 
                        E.event.global[d] = !0);
                    },
                    remove: function(e, t, n, r, o) {
                        var i, a, s, u, c, l, f, p, d, h, v, g = se.hasData(e) && se.get(e);
                        if (g && (u = g.events)) {
                            for (c = (t = (t || "").match(X) || [ "" ]).length; c--; ) if (d = v = (s = Ne.exec(t[c]) || [])[1], 
                            h = (s[2] || "").split(".").sort(), d) {
                                for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                                s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; ) l = p[i], 
                                !o && v !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(i, 1), 
                                l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || E.removeEvent(e, d, g.handle), 
                                delete u[d]);
                            } else for (d in u) E.event.remove(e, d + t[c], n, r, !0);
                            E.isEmptyObject(u) && se.remove(e, "handle events");
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, o, i, a, s = new Array(arguments.length), u = E.event.fix(e), c = (se.get(this, "events") || Object.create(null))[u.type] || [], l = E.event.special[u.type] || {};
                        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                        if (u.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                            for (a = E.event.handlers.call(this, u, c), t = 0; (o = a[t++]) && !u.isPropagationStopped(); ) for (u.currentTarget = o.elem, 
                            n = 0; (i = o.handlers[n++]) && !u.isImmediatePropagationStopped(); ) u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, 
                            u.data = i.data, void 0 !== (r = ((E.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), 
                            u.stopPropagation()));
                            return l.postDispatch && l.postDispatch.call(this, u), u.result;
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, o, i, a, s = [], u = t.delegateCount, c = e.target;
                        if (u && c.nodeType && !("click" === e.type && e.button >= 1)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? E(o, this).index(c) > -1 : E.find(o, this, null, [ c ]).length), 
                            a[o] && i.push(r);
                            i.length && s.push({
                                elem: c,
                                handlers: i
                            });
                        }
                        return c = this, u < t.length && s.push({
                            elem: c,
                            handlers: t.slice(u)
                        }), s;
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(E.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: y(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e];
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                });
                            }
                        });
                    },
                    fix: function(e) {
                        return e[E.expando] ? e : new E.Event(e);
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return Ee.test(t.type) && t.click && j(t, "input") && $e(t, "click", !0), !1;
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return Ee.test(t.type) && t.click && j(t, "input") && $e(t, "click"), !0;
                            },
                            _default: function(e) {
                                var t = e.target;
                                return Ee.test(t.type) && t.click && j(t, "input") && se.get(t, "click") || j(t, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                            }
                        }
                    }
                }, E.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }, E.Event = function(e, t) {
                    if (!(this instanceof E.Event)) return new E.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Pe : qe, 
                    this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
                    this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
                    t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
                }, E.Event.prototype = {
                    constructor: E.Event,
                    isDefaultPrevented: qe,
                    isPropagationStopped: qe,
                    isImmediatePropagationStopped: qe,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Pe, e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Pe, e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Pe, e && !this.isSimulated && e.stopImmediatePropagation(), 
                        this.stopPropagation();
                    }
                }, E.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, E.event.addProp), E.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    function n(e) {
                        if (b.documentMode) {
                            var n = se.get(this, "handle"), r = E.event.fix(e);
                            r.type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r);
                        } else E.event.simulate(t, e.target, E.event.fix(e));
                    }
                    E.event.special[e] = {
                        setup: function() {
                            var r;
                            if ($e(this, e, !0), !b.documentMode) return !1;
                            (r = se.get(this, t)) || this.addEventListener(t, n), se.set(this, t, (r || 0) + 1);
                        },
                        trigger: function() {
                            return $e(this, e), !0;
                        },
                        teardown: function() {
                            var e;
                            if (!b.documentMode) return !1;
                            (e = se.get(this, t) - 1) ? se.set(this, t, e) : (this.removeEventListener(t, n), 
                            se.remove(this, t));
                        },
                        _default: function(t) {
                            return se.get(t.target, e);
                        },
                        delegateType: t
                    }, E.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this, o = b.documentMode ? this : r, i = se.get(o, t);
                            i || (b.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), 
                            se.set(o, t, (i || 0) + 1);
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this, o = b.documentMode ? this : r, i = se.get(o, t) - 1;
                            i ? se.set(o, t, i) : (b.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), 
                            se.remove(o, t));
                        }
                    };
                })), E.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    E.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = e.relatedTarget, o = e.handleObj;
                            return r && (r === this || E.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                            e.type = t), n;
                        }
                    };
                })), E.fn.extend({
                    on: function(e, t, n, r) {
                        return He(this, e, t, n, r);
                    },
                    one: function(e, t, n, r) {
                        return He(this, e, t, n, r, 1);
                    },
                    off: function(e, t, n) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                        this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, t, e[o]);
                            return this;
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), 
                        this.each((function() {
                            E.event.remove(this, e, n, t);
                        }));
                    }
                });
                var Re = /<script|<style|<link/i, Me = /checked\s*(?:[^=]|=\s*.checked.)/i, Fe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function Ie(e, t) {
                    return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
                }
                function We(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
                }
                function Be(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
                    e;
                }
                function ze(e, t) {
                    var n, r, o, i, a, s;
                    if (1 === t.nodeType) {
                        if (se.hasData(e) && (s = se.get(e).events)) for (o in se.remove(t, "handle events"), 
                        s) for (n = 0, r = s[o].length; n < r; n++) E.event.add(t, o, s[o][n]);
                        ue.hasData(e) && (i = ue.access(e), a = E.extend({}, i), ue.set(t, a));
                    }
                }
                function Ue(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && Ee.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
                }
                function Ge(e, t, n, r) {
                    t = u(t);
                    var o, i, a, s, c, l, f = 0, p = e.length, d = p - 1, h = t[0], v = y(h);
                    if (v || p > 1 && "string" == typeof h && !g.checkClone && Me.test(h)) return e.each((function(o) {
                        var i = e.eq(o);
                        v && (t[0] = h.call(this, o, i.html())), Ge(i, t, n, r);
                    }));
                    if (p && (i = (o = Oe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), 
                    i || r)) {
                        for (s = (a = E.map(Le(o, "script"), We)).length; f < p; f++) c = o, f !== d && (c = E.clone(c, !0, !0), 
                        s && E.merge(a, Le(c, "script"))), n.call(e[f], c, f);
                        if (s) for (l = a[a.length - 1].ownerDocument, E.map(a, Be), f = 0; f < s; f++) c = a[f], 
                        je.test(c.type || "") && !se.access(c, "globalEval") && E.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, {
                            nonce: c.nonce || c.getAttribute("nonce")
                        }, l) : w(c.textContent.replace(Fe, ""), c, l));
                    }
                    return e;
                }
                function Xe(e, t, n) {
                    for (var r, o = t ? E.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || E.cleanData(Le(r)), 
                    r.parentNode && (n && ge(r) && Ae(Le(r, "script")), r.parentNode.removeChild(r));
                    return e;
                }
                E.extend({
                    htmlPrefilter: function(e) {
                        return e;
                    },
                    clone: function(e, t, n) {
                        var r, o, i, a, s = e.cloneNode(!0), u = ge(e);
                        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = Le(s), 
                        r = 0, o = (i = Le(e)).length; r < o; r++) Ue(i[r], a[r]);
                        if (t) if (n) for (i = i || Le(e), a = a || Le(s), r = 0, o = i.length; r < o; r++) ze(i[r], a[r]); else ze(e, s);
                        return (a = Le(s, "script")).length > 0 && Ae(a, !u && Le(e, "script")), s;
                    },
                    cleanData: function(e) {
                        for (var t, n, r, o = E.event.special, i = 0; void 0 !== (n = e[i]); i++) if (ie(n)) {
                            if (t = n[se.expando]) {
                                if (t.events) for (r in t.events) o[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                                n[se.expando] = void 0;
                            }
                            n[ue.expando] && (n[ue.expando] = void 0);
                        }
                    }
                }), E.fn.extend({
                    detach: function(e) {
                        return Xe(this, e, !0);
                    },
                    remove: function(e) {
                        return Xe(this, e);
                    },
                    text: function(e) {
                        return ee(this, (function(e) {
                            return void 0 === e ? E.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                            }));
                        }), null, e, arguments.length);
                    },
                    append: function() {
                        return Ge(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e);
                        }));
                    },
                    prepend: function() {
                        return Ge(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Ie(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        }));
                    },
                    before: function() {
                        return Ge(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        }));
                    },
                    after: function() {
                        return Ge(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        }));
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(Le(e, !1)), 
                        e.textContent = "");
                        return this;
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map((function() {
                            return E.clone(this, e, t);
                        }));
                    },
                    html: function(e) {
                        return ee(this, (function(e) {
                            var t = this[0] || {}, n = 0, r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !Re.test(e) && !_e[(Se.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                                e = E.htmlPrefilter(e);
                                try {
                                    for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(Le(t, !1)), 
                                    t.innerHTML = e);
                                    t = 0;
                                } catch (e) {}
                            }
                            t && this.empty().append(e);
                        }), null, e, arguments.length);
                    },
                    replaceWith: function() {
                        var e = [];
                        return Ge(this, arguments, (function(t) {
                            var n = this.parentNode;
                            E.inArray(this, e) < 0 && (E.cleanData(Le(this)), n && n.replaceChild(t, this));
                        }), e);
                    }
                }), E.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    E.fn[e] = function(e) {
                        for (var n, r = [], o = E(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), 
                        E(o[a])[t](n), c.apply(r, n.get());
                        return this.pushStack(r);
                    };
                }));
                var Ve = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"), Ye = /^--/, Qe = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = r), t.getComputedStyle(e);
                }, Je = function(e, t, n) {
                    var r, o, i = {};
                    for (o in t) i[o] = e.style[o], e.style[o] = t[o];
                    for (o in r = n.call(e), t) e.style[o] = i[o];
                    return r;
                }, Ke = new RegExp(he.join("|"), "i");
                function Ze(e, t, n) {
                    var r, o, i, a, s = Ye.test(t), u = e.style;
                    return (n = n || Qe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(O, "$1") || void 0), 
                    "" !== a || ge(e) || (a = E.style(e, t)), !g.pixelBoxStyles() && Ve.test(a) && Ke.test(t) && (r = u.width, 
                    o = u.minWidth, i = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, 
                    u.width = r, u.minWidth = o, u.maxWidth = i)), void 0 !== a ? a + "" : a;
                }
                function et(e, t) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get;
                        }
                    };
                }
                !function() {
                    function e() {
                        if (l) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                            l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                            ve.appendChild(c).appendChild(l);
                            var e = r.getComputedStyle(l);
                            n = "1%" !== e.top, u = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), 
                            o = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), 
                            ve.removeChild(c), l = null;
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e));
                    }
                    var n, o, i, a, s, u, c = b.createElement("div"), l = b.createElement("div");
                    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
                    g.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(g, {
                        boxSizingReliable: function() {
                            return e(), o;
                        },
                        pixelBoxStyles: function() {
                            return e(), a;
                        },
                        pixelPosition: function() {
                            return e(), n;
                        },
                        reliableMarginLeft: function() {
                            return e(), u;
                        },
                        scrollboxSize: function() {
                            return e(), i;
                        },
                        reliableTrDimensions: function() {
                            var e, t, n, o;
                            return null == s && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), 
                            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", 
                            t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ve.appendChild(e).appendChild(t).appendChild(n), 
                            o = r.getComputedStyle(t), s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight, 
                            ve.removeChild(e)), s;
                        }
                    }));
                }();
                var tt = [ "Webkit", "Moz", "ms" ], nt = b.createElement("div").style, rt = {};
                function ot(e) {
                    return E.cssProps[e] || rt[e] || (e in nt ? e : rt[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; ) if ((e = tt[n] + t) in nt) return e;
                    }(e) || e);
                }
                var it = /^(none|table(?!-c[ea]).+)/, at = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, st = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function ut(e, t, n) {
                    var r = de.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                }
                function ct(e, t, n, r, o, i) {
                    var a = "width" === t ? 1 : 0, s = 0, u = 0, c = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (;a < 4; a += 2) "margin" === n && (c += E.css(e, n + he[a], !0, o)), r ? ("content" === n && (u -= E.css(e, "padding" + he[a], !0, o)), 
                    "margin" !== n && (u -= E.css(e, "border" + he[a] + "Width", !0, o))) : (u += E.css(e, "padding" + he[a], !0, o), 
                    "padding" !== n ? u += E.css(e, "border" + he[a] + "Width", !0, o) : s += E.css(e, "border" + he[a] + "Width", !0, o));
                    return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), 
                    u + c;
                }
                function lt(e, t, n) {
                    var r = Qe(e), o = (!g.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r), i = o, a = Ze(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Ve.test(a)) {
                        if (!n) return a;
                        a = "auto";
                    }
                    return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && j(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, r), 
                    (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ct(e, t, n || (o ? "border" : "content"), i, r, a) + "px";
                }
                function ft(e, t, n, r, o) {
                    return new ft.prototype.init(e, t, n, r, o);
                }
                E.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Ze(e, "opacity");
                                    return "" === n ? "1" : n;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageSlice: !0,
                        columnCount: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        scale: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o, i, a, s = oe(t), u = Ye.test(t), c = e.style;
                            if (u || (t = ot(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
                            "string" == (i = typeof n) && (o = de.exec(n)) && o[1] && (n = be(e, t, o), i = "number"), 
                            null != n && n == n && ("number" !== i || u || (n += o && o[3] || (E.cssNumber[s] ? "" : "px")), 
                            g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
                            a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n));
                        }
                    },
                    css: function(e, t, n, r) {
                        var o, i, a, s = oe(t);
                        return Ye.test(t) || (t = ot(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), 
                        void 0 === o && (o = Ze(e, t, r)), "normal" === o && t in st && (o = st[t]), "" === n || n ? (i = parseFloat(o), 
                        !0 === n || isFinite(i) ? i || 0 : o) : o;
                    }
                }), E.each([ "height", "width" ], (function(e, t) {
                    E.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return !it.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? lt(e, t, r) : Je(e, at, (function() {
                                return lt(e, t, r);
                            }));
                        },
                        set: function(e, n, r) {
                            var o, i = Qe(e), a = !g.scrollboxSize() && "absolute" === i.position, s = (a || r) && "border-box" === E.css(e, "boxSizing", !1, i), u = r ? ct(e, t, r, s, i) : 0;
                            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ct(e, t, "border", !1, i) - .5)), 
                            u && (o = de.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = E.css(e, t)), 
                            ut(0, n, u);
                        }
                    };
                })), E.cssHooks.marginLeft = et(g.reliableMarginLeft, (function(e, t) {
                    if (t) return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left;
                    }))) + "px";
                })), E.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    E.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) o[e + he[r] + t] = i[r] || i[r - 2] || i[0];
                            return o;
                        }
                    }, "margin" !== e && (E.cssHooks[e + t].set = ut);
                })), E.fn.extend({
                    css: function(e, t) {
                        return ee(this, (function(e, t, n) {
                            var r, o, i = {}, a = 0;
                            if (Array.isArray(t)) {
                                for (r = Qe(e), o = t.length; a < o; a++) i[t[a]] = E.css(e, t[a], !1, r);
                                return i;
                            }
                            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                        }), e, t, arguments.length > 1);
                    }
                }), E.Tween = ft, ft.prototype = {
                    constructor: ft,
                    init: function(e, t, n, r, o, i) {
                        this.elem = e, this.prop = n, this.easing = o || E.easing._default, this.options = t, 
                        this.start = this.now = this.cur(), this.end = r, this.unit = i || (E.cssNumber[n] ? "" : "px");
                    },
                    cur: function() {
                        var e = ft.propHooks[this.prop];
                        return e && e.get ? e.get(this) : ft.propHooks._default.get(this);
                    },
                    run: function(e) {
                        var t, n = ft.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
                        this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                        n && n.set ? n.set(this) : ft.propHooks._default.set(this), this;
                    }
                }, ft.prototype.init.prototype = ft.prototype, ft.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                        },
                        set: function(e) {
                            E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit);
                        }
                    }
                }, ft.propHooks.scrollTop = ft.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    }
                }, E.easing = {
                    linear: function(e) {
                        return e;
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing"
                }, E.fx = ft.prototype.init, E.fx.step = {};
                var pt, dt, ht = /^(?:toggle|show|hide)$/, vt = /queueHooks$/;
                function gt() {
                    dt && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(gt) : r.setTimeout(gt, E.fx.interval), 
                    E.fx.tick());
                }
                function yt() {
                    return r.setTimeout((function() {
                        pt = void 0;
                    })), pt = Date.now();
                }
                function mt(e, t) {
                    var n, r = 0, o = {
                        height: e
                    };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = he[r])] = o["padding" + n] = e;
                    return t && (o.opacity = o.width = e), o;
                }
                function bt(e, t, n) {
                    for (var r, o = (xt.tweeners[t] || []).concat(xt.tweeners["*"]), i = 0, a = o.length; i < a; i++) if (r = o[i].call(n, t, e)) return r;
                }
                function xt(e, t, n) {
                    var r, o, i = 0, a = xt.prefilters.length, s = E.Deferred().always((function() {
                        delete u.elem;
                    })), u = function() {
                        if (o) return !1;
                        for (var t = pt || yt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++) c.tweens[i].run(r);
                        return s.notifyWith(e, [ c, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ c, 1, 0 ]), 
                        s.resolveWith(e, [ c ]), !1);
                    }, c = s.promise({
                        elem: e,
                        props: E.extend({}, t),
                        opts: E.extend(!0, {
                            specialEasing: {},
                            easing: E.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: pt || yt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = E.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r;
                        },
                        stop: function(t) {
                            var n = 0, r = t ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < r; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [ c, 1, 0 ]), s.resolveWith(e, [ c, t ])) : s.rejectWith(e, [ c, t ]), 
                            this;
                        }
                    }), l = c.props;
                    for (function(e, t) {
                        var n, r, o, i, a;
                        for (n in e) if (o = t[r = oe(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), 
                        n !== r && (e[r] = i, delete e[n]), (a = E.cssHooks[r]) && "expand" in a) for (n in i = a.expand(i), 
                        delete e[r], i) n in e || (e[n] = i[n], t[n] = o); else t[r] = o;
                    }(l, c.opts.specialEasing); i < a; i++) if (r = xt.prefilters[i].call(c, e, l, c.opts)) return y(r.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), 
                    r;
                    return E.map(l, bt, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), 
                    E.fx.timer(E.extend(u, {
                        elem: e,
                        anim: c,
                        queue: c.opts.queue
                    })), c;
                }
                E.Animation = E.extend(xt, {
                    tweeners: {
                        "*": [ function(e, t) {
                            var n = this.createTween(e, t);
                            return be(n.elem, e, de.exec(t), n), n;
                        } ]
                    },
                    tweener: function(e, t) {
                        y(e) ? (t = e, e = [ "*" ]) : e = e.match(X);
                        for (var n, r = 0, o = e.length; r < o; r++) n = e[r], xt.tweeners[n] = xt.tweeners[n] || [], 
                        xt.tweeners[n].unshift(t);
                    },
                    prefilters: [ function(e, t, n) {
                        var r, o, i, a, s, u, c, l, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, v = e.nodeType && me(e), g = se.get(e, "fxshow");
                        for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
                        s = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || s();
                        }), a.unqueued++, p.always((function() {
                            p.always((function() {
                                a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                            }));
                        }))), t) if (o = t[r], ht.test(o)) {
                            if (delete t[r], i = i || "toggle" === o, o === (v ? "hide" : "show")) {
                                if ("show" !== o || !g || void 0 === g[r]) continue;
                                v = !0;
                            }
                            d[r] = g && g[r] || E.style(e, r);
                        }
                        if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                        null == (c = g && g.display) && (c = se.get(e, "display")), "none" === (l = E.css(e, "display")) && (c ? l = c : (ke([ e ], !0), 
                        c = e.style.display || c, l = E.css(e, "display"), ke([ e ]))), ("inline" === l || "inline-block" === l && null != c) && "none" === E.css(e, "float") && (u || (p.done((function() {
                            h.display = c;
                        })), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), 
                        n.overflow && (h.overflow = "hidden", p.always((function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                        }))), u = !1, d) u || (g ? "hidden" in g && (v = g.hidden) : g = se.access(e, "fxshow", {
                            display: c
                        }), i && (g.hidden = !v), v && ke([ e ], !0), p.done((function() {
                            for (r in v || ke([ e ]), se.remove(e, "fxshow"), d) E.style(e, r, d[r]);
                        }))), u = bt(v ? g[r] : 0, r, p), r in g || (g[r] = u.start, v && (u.end = u.start, 
                        u.start = 0));
                    } ],
                    prefilter: function(e, t) {
                        t ? xt.prefilters.unshift(e) : xt.prefilters.push(e);
                    }
                }), E.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? E.extend({}, e) : {
                        complete: n || !n && t || y(e) && e,
                        duration: e,
                        easing: n && t || t && !y(t) && t
                    };
                    return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), 
                    null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        y(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
                    }, r;
                }, E.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(me).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r);
                    },
                    animate: function(e, t, n, r) {
                        var o = E.isEmptyObject(e), i = E.speed(t, n, r), a = function() {
                            var t = xt(this, E.extend({}, e), i);
                            (o || se.get(this, "finish")) && t.stop(!0);
                        };
                        return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), 
                        this.each((function() {
                            var t = !0, o = null != e && e + "queueHooks", i = E.timers, a = se.get(this);
                            if (o) a[o] && a[o].stop && r(a[o]); else for (o in a) a[o] && a[o].stop && vt.test(o) && r(a[o]);
                            for (o = i.length; o--; ) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), 
                            t = !1, i.splice(o, 1));
                            !t && n || E.dequeue(this, e);
                        }));
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each((function() {
                            var t, n = se.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = E.timers, a = r ? r.length : 0;
                            for (n.finish = !0, E.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
                            t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
                            i.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish;
                        }));
                    }
                }), E.each([ "toggle", "show", "hide" ], (function(e, t) {
                    var n = E.fn[t];
                    E.fn[t] = function(e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(mt(t, !0), e, r, o);
                    };
                })), E.each({
                    slideDown: mt("show"),
                    slideUp: mt("hide"),
                    slideToggle: mt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    E.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r);
                    };
                })), E.timers = [], E.fx.tick = function() {
                    var e, t = 0, n = E.timers;
                    for (pt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || E.fx.stop(), pt = void 0;
                }, E.fx.timer = function(e) {
                    E.timers.push(e), E.fx.start();
                }, E.fx.interval = 13, E.fx.start = function() {
                    dt || (dt = !0, gt());
                }, E.fx.stop = function() {
                    dt = null;
                }, E.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, E.fn.delay = function(e, t) {
                    return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                        var o = r.setTimeout(t, e);
                        n.stop = function() {
                            r.clearTimeout(o);
                        };
                    }));
                }, function() {
                    var e = b.createElement("input"), t = b.createElement("select").appendChild(b.createElement("option"));
                    e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", 
                    e.type = "radio", g.radioValue = "t" === e.value;
                }();
                var wt, kt = E.expr.attrHandle;
                E.fn.extend({
                    attr: function(e, t) {
                        return ee(this, E.attr, e, t, arguments.length > 1);
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            E.removeAttr(this, e);
                        }));
                    }
                }), E.extend({
                    attr: function(e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === i && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? wt : void 0)), 
                        void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
                        n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r);
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!g.radioValue && "radio" === t && j(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0, o = t && t.match(X);
                        if (o && 1 === e.nodeType) for (;n = o[r++]; ) e.removeAttribute(n);
                    }
                }), wt = {
                    set: function(e, t, n) {
                        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
                    }
                }, E.each(E.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = kt[t] || E.find.attr;
                    kt[t] = function(e, t, r) {
                        var o, i, a = t.toLowerCase();
                        return r || (i = kt[a], kt[a] = o, o = null != n(e, t, r) ? a : null, kt[a] = i), 
                        o;
                    };
                }));
                var Tt = /^(?:input|select|textarea|button)$/i, Ct = /^(?:a|area)$/i;
                function Et(e) {
                    return (e.match(X) || []).join(" ");
                }
                function St(e) {
                    return e.getAttribute && e.getAttribute("class") || "";
                }
                function jt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(X) || [];
                }
                E.fn.extend({
                    prop: function(e, t) {
                        return ee(this, E.prop, e, t, arguments.length > 1);
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[E.propFix[e] || e];
                        }));
                    }
                }), E.extend({
                    prop: function(e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && E.isXMLDoc(e) || (t = E.propFix[t] || t, 
                        o = E.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = E.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1;
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), g.optSelected || (E.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null;
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                    }
                }), E.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                    E.propFix[this.toLowerCase()] = this;
                })), E.fn.extend({
                    addClass: function(e) {
                        var t, n, r, o, i, a;
                        return y(e) ? this.each((function(t) {
                            E(this).addClass(e.call(this, t, St(this)));
                        })) : (t = jt(e)).length ? this.each((function() {
                            if (r = St(this), n = 1 === this.nodeType && " " + Et(r) + " ") {
                                for (i = 0; i < t.length; i++) o = t[i], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                                a = Et(n), r !== a && this.setAttribute("class", a);
                            }
                        })) : this;
                    },
                    removeClass: function(e) {
                        var t, n, r, o, i, a;
                        return y(e) ? this.each((function(t) {
                            E(this).removeClass(e.call(this, t, St(this)));
                        })) : arguments.length ? (t = jt(e)).length ? this.each((function() {
                            if (r = St(this), n = 1 === this.nodeType && " " + Et(r) + " ") {
                                for (i = 0; i < t.length; i++) for (o = t[i]; n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                                a = Et(n), r !== a && this.setAttribute("class", a);
                            }
                        })) : this : this.attr("class", "");
                    },
                    toggleClass: function(e, t) {
                        var n, r, o, i, a = typeof e, s = "string" === a || Array.isArray(e);
                        return y(e) ? this.each((function(n) {
                            E(this).toggleClass(e.call(this, n, St(this), t), t);
                        })) : "boolean" == typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = jt(e), 
                        this.each((function() {
                            if (s) for (i = E(this), o = 0; o < n.length; o++) r = n[o], i.hasClass(r) ? i.removeClass(r) : i.addClass(r); else void 0 !== e && "boolean" !== a || ((r = St(this)) && se.set(this, "__className__", r), 
                            this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : se.get(this, "__className__") || ""));
                        })));
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + Et(St(n)) + " ").indexOf(t) > -1) return !0;
                        return !1;
                    }
                });
                var _t = /\r/g;
                E.fn.extend({
                    val: function(e) {
                        var t, n, r, o = this[0];
                        return arguments.length ? (r = y(e), this.each((function(n) {
                            var o;
                            1 === this.nodeType && (null == (o = r ? e.call(this, n, E(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = E.map(o, (function(e) {
                                return null == e ? "" : e + "";
                            }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
                        }))) : o ? (t = E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(_t, "") : null == n ? "" : n : void 0;
                    }
                }), E.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = E.find.attr(e, "value");
                                return null != t ? t : Et(E.text(e));
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
                                for (r = i < 0 ? u : a ? i : 0; r < u; r++) if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                    if (t = E(n).val(), a) return t;
                                    s.push(t);
                                }
                                return s;
                            },
                            set: function(e, t) {
                                for (var n, r, o = e.options, i = E.makeArray(t), a = o.length; a--; ) ((r = o[a]).selected = E.inArray(E.valHooks.option.get(r), i) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), i;
                            }
                        }
                    }
                }), E.each([ "radio", "checkbox" ], (function() {
                    E.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1;
                        }
                    }, g.checkOn || (E.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
                }));
                var Lt = r.location, At = {
                    guid: Date.now()
                }, Dt = /\?/;
                E.parseXML = function(e) {
                    var t, n;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = (new r.DOMParser).parseFromString(e, "text/xml");
                    } catch (e) {}
                    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, (function(e) {
                        return e.textContent;
                    })).join("\n") : e)), t;
                };
                var Ot = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e) {
                    e.stopPropagation();
                };
                E.extend(E.event, {
                    trigger: function(e, t, n, o) {
                        var i, a, s, u, c, l, f, p, h = [ n || b ], v = d.call(e, "type") ? e.type : e, g = d.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (a = p = s = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(v + E.event.triggered) && (v.indexOf(".") > -1 && (g = v.split("."), 
                        v = g.shift(), g.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[E.expando] ? e : new E.Event(v, "object" == typeof e && e)).isTrigger = o ? 2 : 3, 
                        e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                        e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : E.makeArray(t, [ e ]), 
                        f = E.event.special[v] || {}, o || !f.trigger || !1 !== f.trigger.apply(n, t))) {
                            if (!o && !f.noBubble && !m(n)) {
                                for (u = f.delegateType || v, Ot.test(u + v) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
                                s = a;
                                s === (n.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || r);
                            }
                            for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); ) p = a, e.type = i > 1 ? u : f.bindType || v, 
                            (l = (se.get(a, "events") || Object.create(null))[e.type] && se.get(a, "handle")) && l.apply(a, t), 
                            (l = c && a[c]) && l.apply && ie(a) && (e.result = l.apply(a, t), !1 === e.result && e.preventDefault());
                            return e.type = v, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !ie(n) || c && y(n[v]) && !m(n) && ((s = n[c]) && (n[c] = null), 
                            E.event.triggered = v, e.isPropagationStopped() && p.addEventListener(v, Nt), n[v](), 
                            e.isPropagationStopped() && p.removeEventListener(v, Nt), E.event.triggered = void 0, 
                            s && (n[c] = s)), e.result;
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = E.extend(new E.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        E.event.trigger(r, null, t);
                    }
                }), E.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            E.event.trigger(e, t, this);
                        }));
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return E.event.trigger(e, t, n, !0);
                    }
                });
                var Pt = /\[\]$/, qt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, $t = /^(?:input|select|textarea|keygen)/i;
                function Rt(e, t, n, r) {
                    var o;
                    if (Array.isArray(t)) E.each(t, (function(t, o) {
                        n || Pt.test(e) ? r(e, o) : Rt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
                    })); else if (n || "object" !== k(t)) r(e, t); else for (o in t) Rt(e + "[" + o + "]", t[o], n, r);
                }
                E.param = function(e, t) {
                    var n, r = [], o = function(e, t) {
                        var n = y(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, (function() {
                        o(this.name, this.value);
                    })); else for (n in e) Rt(n, e[n], t, o);
                    return r.join("&");
                }, E.fn.extend({
                    serialize: function() {
                        return E.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = E.prop(this, "elements");
                            return e ? E.makeArray(e) : this;
                        })).filter((function() {
                            var e = this.type;
                            return this.name && !E(this).is(":disabled") && $t.test(this.nodeName) && !Ht.test(e) && (this.checked || !Ee.test(e));
                        })).map((function(e, t) {
                            var n = E(this).val();
                            return null == n ? null : Array.isArray(n) ? E.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(qt, "\r\n")
                                };
                            })) : {
                                name: t.name,
                                value: n.replace(qt, "\r\n")
                            };
                        })).get();
                    }
                });
                var Mt = /%20/g, Ft = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Bt = /^(?:GET|HEAD)$/, zt = /^\/\//, Ut = {}, Gt = {}, Xt = "*/".concat("*"), Vt = b.createElement("a");
                function Yt(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, o = 0, i = t.toLowerCase().match(X) || [];
                        if (y(n)) for (;r = i[o++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                    };
                }
                function Qt(e, t, n, r) {
                    var o = {}, i = e === Gt;
                    function a(s) {
                        var u;
                        return o[s] = !0, E.each(e[s] || [], (function(e, s) {
                            var c = s(t, n, r);
                            return "string" != typeof c || i || o[c] ? i ? !(u = c) : void 0 : (t.dataTypes.unshift(c), 
                            a(c), !1);
                        })), u;
                    }
                    return a(t.dataTypes[0]) || !o["*"] && a("*");
                }
                function Jt(e, t) {
                    var n, r, o = E.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && E.extend(!0, e, r), e;
                }
                Vt.href = Lt.href, E.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Lt.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Xt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": E.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Jt(Jt(e, E.ajaxSettings), t) : Jt(E.ajaxSettings, e);
                    },
                    ajaxPrefilter: Yt(Ut),
                    ajaxTransport: Yt(Gt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e, e = void 0), t = t || {};
                        var n, o, i, a, s, u, c, l, f, p, d = E.ajaxSetup({}, t), h = d.context || d, v = d.context && (h.nodeType || h.jquery) ? E(h) : E.event, g = E.Deferred(), y = E.Callbacks("once memory"), m = d.statusCode || {}, x = {}, w = {}, k = "canceled", T = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!a) for (a = {}; t = Wt.exec(i); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "];
                                }
                                return null == t ? null : t.join(", ");
                            },
                            getAllResponseHeaders: function() {
                                return c ? i : null;
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), 
                                this;
                            },
                            overrideMimeType: function(e) {
                                return null == c && (d.mimeType = e), this;
                            },
                            statusCode: function(e) {
                                var t;
                                if (e) if (c) T.always(e[T.status]); else for (t in e) m[t] = [ m[t], e[t] ];
                                return this;
                            },
                            abort: function(e) {
                                var t = e || k;
                                return n && n.abort(t), C(0, t), this;
                            }
                        };
                        if (g.promise(T), d.url = ((e || d.url || Lt.href) + "").replace(zt, Lt.protocol + "//"), 
                        d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(X) || [ "" ], 
                        null == d.crossDomain) {
                            u = b.createElement("a");
                            try {
                                u.href = d.url, u.href = u.href, d.crossDomain = Vt.protocol + "//" + Vt.host != u.protocol + "//" + u.host;
                            } catch (e) {
                                d.crossDomain = !0;
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = E.param(d.data, d.traditional)), 
                        Qt(Ut, d, t, T), c) return T;
                        for (f in (l = E.event && d.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), 
                        d.type = d.type.toUpperCase(), d.hasContent = !Bt.test(d.type), o = d.url.replace(Ft, ""), 
                        d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Mt, "+")) : (p = d.url.slice(o.length), 
                        d.data && (d.processData || "string" == typeof d.data) && (o += (Dt.test(o) ? "&" : "?") + d.data, 
                        delete d.data), !1 === d.cache && (o = o.replace(It, "$1"), p = (Dt.test(o) ? "&" : "?") + "_=" + At.guid++ + p), 
                        d.url = o + p), d.ifModified && (E.lastModified[o] && T.setRequestHeader("If-Modified-Since", E.lastModified[o]), 
                        E.etag[o] && T.setRequestHeader("If-None-Match", E.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), 
                        T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : d.accepts["*"]), 
                        d.headers) T.setRequestHeader(f, d.headers[f]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(h, T, d) || c)) return T.abort();
                        if (k = "abort", y.add(d.complete), T.done(d.success), T.fail(d.error), n = Qt(Gt, d, t, T)) {
                            if (T.readyState = 1, l && v.trigger("ajaxSend", [ T, d ]), c) return T;
                            d.async && d.timeout > 0 && (s = r.setTimeout((function() {
                                T.abort("timeout");
                            }), d.timeout));
                            try {
                                c = !1, n.send(x, C);
                            } catch (e) {
                                if (c) throw e;
                                C(-1, e);
                            }
                        } else C(-1, "No Transport");
                        function C(e, t, a, u) {
                            var f, p, b, x, w, k = t;
                            c || (c = !0, s && r.clearTimeout(s), n = void 0, i = u || "", T.readyState = e > 0 ? 4 : 0, 
                            f = e >= 200 && e < 300 || 304 === e, a && (x = function(e, t, n) {
                                for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
                                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r) for (o in s) if (s[o] && s[o].test(r)) {
                                    u.unshift(o);
                                    break;
                                }
                                if (u[0] in n) i = u[0]; else {
                                    for (o in n) {
                                        if (!u[0] || e.converters[o + " " + u[0]]) {
                                            i = o;
                                            break;
                                        }
                                        a || (a = o);
                                    }
                                    i = i || a;
                                }
                                if (i) return i !== u[0] && u.unshift(i), n[i];
                            }(d, T, a)), !f && E.inArray("script", d.dataTypes) > -1 && E.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), 
                            x = function(e, t, n, r) {
                                var o, i, a, s, u, c = {}, l = e.dataTypes.slice();
                                if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                                for (i = l.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), 
                                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift()) if ("*" === i) i = u; else if ("*" !== u && u !== i) {
                                    if (!(a = c[u + " " + i] || c["* " + i])) for (o in c) if ((s = o.split(" "))[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                        !0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], l.unshift(s[1]));
                                        break;
                                    }
                                    if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                        t = a(t);
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + i
                                        };
                                    }
                                }
                                return {
                                    state: "success",
                                    data: t
                                };
                            }(d, x, T, f), f ? (d.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (E.lastModified[o] = w), 
                            (w = T.getResponseHeader("etag")) && (E.etag[o] = w)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state, 
                            p = x.data, f = !(b = x.error))) : (b = k, !e && k || (k = "error", e < 0 && (e = 0))), 
                            T.status = e, T.statusText = (t || k) + "", f ? g.resolveWith(h, [ p, k, T ]) : g.rejectWith(h, [ T, k, b ]), 
                            T.statusCode(m), m = void 0, l && v.trigger(f ? "ajaxSuccess" : "ajaxError", [ T, d, f ? p : b ]), 
                            y.fireWith(h, [ T, k ]), l && (v.trigger("ajaxComplete", [ T, d ]), --E.active || E.event.trigger("ajaxStop")));
                        }
                        return T;
                    },
                    getJSON: function(e, t, n) {
                        return E.get(e, t, n, "json");
                    },
                    getScript: function(e, t) {
                        return E.get(e, void 0, t, "script");
                    }
                }), E.each([ "get", "post" ], (function(e, t) {
                    E[t] = function(e, n, r, o) {
                        return y(n) && (o = o || r, r = n, n = void 0), E.ajax(E.extend({
                            url: e,
                            type: t,
                            dataType: o,
                            data: n,
                            success: r
                        }, E.isPlainObject(e) && e));
                    };
                })), E.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                })), E._evalUrl = function(e, t, n) {
                    return E.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            E.globalEval(e, t, n);
                        }
                    });
                }, E.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (y(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), 
                        this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                            for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                            return e;
                        })).append(this)), this;
                    },
                    wrapInner: function(e) {
                        return y(e) ? this.each((function(t) {
                            E(this).wrapInner(e.call(this, t));
                        })) : this.each((function() {
                            var t = E(this), n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e);
                        }));
                    },
                    wrap: function(e) {
                        var t = y(e);
                        return this.each((function(n) {
                            E(this).wrapAll(t ? e.call(this, n) : e);
                        }));
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            E(this).replaceWith(this.childNodes);
                        })), this;
                    }
                }), E.expr.pseudos.hidden = function(e) {
                    return !E.expr.pseudos.visible(e);
                }, E.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }, E.ajaxSettings.xhr = function() {
                    try {
                        return new r.XMLHttpRequest;
                    } catch (e) {}
                };
                var Kt = {
                    0: 200,
                    1223: 204
                }, Zt = E.ajaxSettings.xhr();
                g.cors = !!Zt && "withCredentials" in Zt, g.ajax = Zt = !!Zt, E.ajaxTransport((function(e) {
                    var t, n;
                    if (g.cors || Zt && !e.crossDomain) return {
                        send: function(o, i) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), 
                            o) s.setRequestHeader(a, o[a]);
                            t = function(e) {
                                return function() {
                                    t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
                                    "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Kt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()));
                                };
                            }, s.onload = t(), n = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                                4 === s.readyState && r.setTimeout((function() {
                                    t && n();
                                }));
                            }, t = t("abort");
                            try {
                                s.send(e.hasContent && e.data || null);
                            } catch (e) {
                                if (t) throw e;
                            }
                        },
                        abort: function() {
                            t && t();
                        }
                    };
                })), E.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1);
                })), E.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return E.globalEval(e), e;
                        }
                    }
                }), E.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                })), E.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function(r, o) {
                            t = E("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                            }), b.head.appendChild(t[0]);
                        },
                        abort: function() {
                            n && n();
                        }
                    };
                }));
                var en, tn = [], nn = /(=)\?(?=&|$)|\?\?/;
                E.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = tn.pop() || E.expando + "_" + At.guid++;
                        return this[e] = !0, e;
                    }
                }), E.ajaxPrefilter("json jsonp", (function(e, t, n) {
                    var o, i, a, s = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
                    s ? e[s] = e[s].replace(nn, "$1" + o) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), 
                    e.converters["script json"] = function() {
                        return a || E.error(o + " was not called"), a[0];
                    }, e.dataTypes[0] = "json", i = r[o], r[o] = function() {
                        a = arguments;
                    }, n.always((function() {
                        void 0 === i ? E(r).removeProp(o) : r[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, 
                        tn.push(o)), a && y(i) && i(a[0]), a = i = void 0;
                    })), "script";
                })), g.createHTMLDocument = ((en = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
                2 === en.childNodes.length), E.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, 
                    t.head.appendChild(r)) : t = b), i = !n && [], (o = F.exec(e)) ? [ t.createElement(o[1]) ] : (o = Oe([ e ], t, i), 
                    i && i.length && E(i).remove(), E.merge([], o.childNodes)));
                    var r, o, i;
                }, E.fn.load = function(e, t, n) {
                    var r, o, i, a = this, s = e.indexOf(" ");
                    return s > -1 && (r = Et(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 
                    a.length > 0 && E.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        i = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
                    })).always(n && function(e, t) {
                        a.each((function() {
                            n.apply(this, i || [ e.responseText, t, e ]);
                        }));
                    }), this;
                }, E.expr.pseudos.animated = function(e) {
                    return E.grep(E.timers, (function(t) {
                        return e === t.elem;
                    })).length;
                }, E.offset = {
                    setOffset: function(e, t, n) {
                        var r, o, i, a, s, u, c = E.css(e, "position"), l = E(e), f = {};
                        "static" === c && (e.style.position = "relative"), s = l.offset(), i = E.css(e, "top"), 
                        u = E.css(e, "left"), ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1 ? (a = (r = l.position()).top, 
                        o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), y(t) && (t = t.call(e, n, E.extend({}, s))), 
                        null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), 
                        "using" in t ? t.using.call(e, f) : l.css(f);
                    }
                }, E.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                            E.offset.setOffset(this, e, t);
                        }));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
                        {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0;
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0], o = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect(); else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); ) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0), 
                                o.left += E.css(e, "borderLeftWidth", !0));
                            }
                            return {
                                top: t.top - o.top - E.css(r, "marginTop", !0),
                                left: t.left - o.left - E.css(r, "marginLeft", !0)
                            };
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === E.css(e, "position"); ) e = e.offsetParent;
                            return e || ve;
                        }));
                    }
                }), E.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    E.fn[e] = function(r) {
                        return ee(this, (function(e, r, o) {
                            var i;
                            if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                            i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
                        }), e, r, arguments.length);
                    };
                })), E.each([ "top", "left" ], (function(e, t) {
                    E.cssHooks[t] = et(g.pixelPosition, (function(e, n) {
                        if (n) return n = Ze(e, t), Ve.test(n) ? E(e).position()[t] + "px" : n;
                    }));
                })), E.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    E.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        E.fn[r] = function(o, i) {
                            var a = arguments.length && (n || "boolean" != typeof o), s = n || (!0 === o || !0 === i ? "margin" : "border");
                            return ee(this, (function(t, n, o) {
                                var i;
                                return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
                                Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? E.css(t, n, s) : E.style(t, n, o, s);
                            }), t, a ? o : void 0, a);
                        };
                    }));
                })), E.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(e, t) {
                    E.fn[t] = function(e) {
                        return this.on(t, e);
                    };
                })), E.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r);
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                    hover: function(e, t) {
                        return this.on("mouseenter", e).on("mouseleave", t || e);
                    }
                }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    E.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                }));
                var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                E.proxy = function(e, t) {
                    var n, r, o;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), 
                    (o = function() {
                        return e.apply(t || this, r.concat(s.call(arguments)));
                    }).guid = e.guid = e.guid || E.guid++, o;
                }, E.holdReady = function(e) {
                    e ? E.readyWait++ : E.ready(!0);
                }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = j, E.isFunction = y, 
                E.isWindow = m, E.camelCase = oe, E.type = k, E.now = Date.now, E.isNumeric = function(e) {
                    var t = E.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }, E.trim = function(e) {
                    return null == e ? "" : (e + "").replace(rn, "$1");
                }, void 0 === (n = function() {
                    return E;
                }.apply(t, [])) || (e.exports = n);
                var on = r.jQuery, an = r.$;
                return E.noConflict = function(e) {
                    return r.$ === E && (r.$ = an), e && r.jQuery === E && (r.jQuery = on), E;
                }, void 0 === o && (r.jQuery = r.$ = E), E;
            }));
        }
    }, t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.exports;
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t;
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        });
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        var e = n(638), t = n.n(e);
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function o(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== r(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t);
                        if ("object" !== r(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e, "string");
                return "symbol" === r(t) ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function i() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ i = function() {
                return e;
            };
            var e = {}, t = Object.prototype, n = t.hasOwnProperty, o = Object.defineProperty || function(e, t, n) {
                e[t] = n.value;
            }, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator", u = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag";
            function l(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t];
            }
            try {
                l({}, "");
            } catch (e) {
                l = function(e, t, n) {
                    return e[t] = n;
                };
            }
            function f(e, t, n, r) {
                var i = t && t.prototype instanceof h ? t : h, a = Object.create(i.prototype), s = new j(r || []);
                return o(a, "_invoke", {
                    value: T(e, n, s)
                }), a;
            }
            function p(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            e.wrap = f;
            var d = {};
            function h() {}
            function v() {}
            function g() {}
            var y = {};
            l(y, s, (function() {
                return this;
            }));
            var m = Object.getPrototypeOf, b = m && m(m(_([])));
            b && b !== t && n.call(b, s) && (y = b);
            var x = g.prototype = h.prototype = Object.create(y);
            function w(e) {
                [ "next", "throw", "return" ].forEach((function(t) {
                    l(e, t, (function(e) {
                        return this._invoke(t, e);
                    }));
                }));
            }
            function k(e, t) {
                function i(o, a, s, u) {
                    var c = p(e[o], e, a);
                    if ("throw" !== c.type) {
                        var l = c.arg, f = l.value;
                        return f && "object" == r(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                            i("next", e, s, u);
                        }), (function(e) {
                            i("throw", e, s, u);
                        })) : t.resolve(f).then((function(e) {
                            l.value = e, s(l);
                        }), (function(e) {
                            return i("throw", e, s, u);
                        }));
                    }
                    u(c.arg);
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function r() {
                            return new t((function(t, r) {
                                i(e, n, t, r);
                            }));
                        }
                        return a = a ? a.then(r, r) : r();
                    }
                });
            }
            function T(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var a = n.delegate;
                        if (a) {
                            var s = C(a, n);
                            if (s) {
                                if (s === d) continue;
                                return s;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = p(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === d) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            };
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg);
                    }
                };
            }
            function C(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", 
                t.arg = void 0, C(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", 
                t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = p(r, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, d);
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function S(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function j(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(E, this), this.reset(!0);
            }
            function _(e) {
                if (e) {
                    var t = e[s];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, o = function t() {
                            for (;++r < e.length; ) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: L
                };
            }
            function L() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return v.prototype = g, o(x, "constructor", {
                value: g,
                configurable: !0
            }), o(g, "constructor", {
                value: v,
                configurable: !0
            }), v.displayName = l(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, l(e, c, "GeneratorFunction")), 
                e.prototype = Object.create(x), e;
            }, e.awrap = function(e) {
                return {
                    __await: e
                };
            }, w(k.prototype), l(k.prototype, u, (function() {
                return this;
            })), e.AsyncIterator = k, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(f(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next();
                }));
            }, w(x), l(x, c, "Generator"), l(x, s, (function() {
                return this;
            })), l(x, "toString", (function() {
                return "[object Generator]";
            })), e.keys = function(e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e;
                    }
                    return e.done = !0, e;
                };
            }, e.values = _, j.prototype = {
                constructor: j,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), 
                    !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;
                    function r(n, r) {
                        return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], a = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var s = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (s) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(a);
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                    this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                    d;
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                S(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: _(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, e;
        }
        function a(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), u = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function s(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function s(e) {
                        a(i, r, o, s, u, "next", e);
                    }
                    function u(e) {
                        a(i, r, o, s, u, "throw", e);
                    }
                    s(void 0);
                }));
            };
        }
        var u = self.browser instanceof Object && self.browser instanceof Element == 0 ? self.browser : self.chrome, c = (u.declarativeNetRequest, 
        u.i18n, u.runtime);
        function l(e) {
            return new Promise((function(t) {
                t(new URL(e).host);
            }));
        }
        function f(e) {
            return new Promise((function(t, n) {
                var r = 5;
                !function o() {
                    c.sendMessage(e).then((function(e) {
                        t(e);
                    })).catch((function(e) {
                        (r -= 1) <= 0 ? n(e) : setTimeout(o, 200);
                    }));
                }();
            }));
        }
        function p(e) {
            return d.apply(this, arguments);
        }
        function d() {
            return (d = s(i().mark((function e(t) {
                var n, r;
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (u.storage instanceof Object != 0) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (u.storage.local instanceof Object != 0) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        return e.prev = 4, e.next = 7, u.storage.local.get(t);

                      case 7:
                        if ((n = e.sent) instanceof Object != 0) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        return r = void 0 === n[t] ? "darkTheme" !== t && ("modeLevel" === t ? 1 : "userRules" === t || "allowlist" === t ? [] : void 0) : n[t], 
                        e.abrupt("return", r);

                      case 14:
                        e.prev = 14, e.t0 = e.catch(4);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }), e, null, [ [ 4, 14 ] ]);
            })))).apply(this, arguments);
        }
        function h(e, t) {
            return v.apply(this, arguments);
        }
        function v() {
            return (v = s(i().mark((function e(t, n) {
                return i().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (u.storage instanceof Object != 0) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (u.storage.local instanceof Object != 0) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        return e.abrupt("return", u.storage.local.set(o({}, t, n)));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })))).apply(this, arguments);
        }
        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function y(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i, a, s = [], u = !0, c = !1;
                    try {
                        if (i = (n = n.call(e)).next, 0 === t) {
                            if (Object(n) !== n) return;
                            u = !1;
                        } else for (;!(u = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); u = !0) ;
                    } catch (e) {
                        c = !0, o = e;
                    } finally {
                        try {
                            if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return;
                        } finally {
                            if (c) throw o;
                        }
                    }
                    return s;
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0;
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function b() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ b = function() {
                return e;
            };
            var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
                e[t] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t];
            }
            try {
                u({}, "");
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n;
                };
            }
            function c(e, t, n, o) {
                var i = t && t.prototype instanceof p ? t : p, a = Object.create(i.prototype), s = new j(o || []);
                return r(a, "_invoke", {
                    value: T(e, n, s)
                }), a;
            }
            function l(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            e.wrap = c;
            var f = {};
            function p() {}
            function d() {}
            function h() {}
            var v = {};
            u(v, i, (function() {
                return this;
            }));
            var y = Object.getPrototypeOf, m = y && y(y(_([])));
            m && m !== t && n.call(m, i) && (v = m);
            var x = h.prototype = p.prototype = Object.create(v);
            function w(e) {
                [ "next", "throw", "return" ].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e);
                    }));
                }));
            }
            function k(e, t) {
                function o(r, i, a, s) {
                    var u = l(e[r], e, i);
                    if ("throw" !== u.type) {
                        var c = u.arg, f = c.value;
                        return f && "object" == g(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                            o("next", e, a, s);
                        }), (function(e) {
                            o("throw", e, a, s);
                        })) : t.resolve(f).then((function(e) {
                            c.value = e, a(c);
                        }), (function(e) {
                            return o("throw", e, a, s);
                        }));
                    }
                    s(u.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(e, n) {
                        function r() {
                            return new t((function(t, r) {
                                o(e, n, t, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function T(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var a = n.delegate;
                        if (a) {
                            var s = C(a, n);
                            if (s) {
                                if (s === f) continue;
                                return s;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = l(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            };
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg);
                    }
                };
            }
            function C(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", 
                t.arg = void 0, C(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", 
                t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
                var o = l(r, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                f;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = void 0), t.delegate = null, f) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, f);
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function S(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function j(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(E, this), this.reset(!0);
            }
            function _(e) {
                if (e) {
                    var t = e[i];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, o = function t() {
                            for (;++r < e.length; ) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: L
                };
            }
            function L() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return d.prototype = h, r(x, "constructor", {
                value: h,
                configurable: !0
            }), r(h, "constructor", {
                value: d,
                configurable: !0
            }), d.displayName = u(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, u(e, s, "GeneratorFunction")), 
                e.prototype = Object.create(x), e;
            }, e.awrap = function(e) {
                return {
                    __await: e
                };
            }, w(k.prototype), u(k.prototype, a, (function() {
                return this;
            })), e.AsyncIterator = k, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(c(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next();
                }));
            }, w(x), u(x, s, "Generator"), u(x, i, (function() {
                return this;
            })), u(x, "toString", (function() {
                return "[object Generator]";
            })), e.keys = function(e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e;
                    }
                    return e.done = !0, e;
                };
            }, e.values = _, j.prototype = {
                constructor: j,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), 
                    !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;
                    function r(n, r) {
                        return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], a = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var s = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (s) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
                    f) : this.complete(a);
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                    this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                    f;
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), f;
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                S(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: _(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), f;
                }
            }, e;
        }
        function x(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), u = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function w(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        x(i, r, o, a, s, "next", e);
                    }
                    function s(e) {
                        x(i, r, o, a, s, "throw", e);
                    }
                    a(void 0);
                }));
            };
        }
        function k(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, (void 0, i = function(e, t) {
                    if ("object" !== g(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t);
                        if ("object" !== g(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(r.key, "string"), "symbol" === g(i) ? i : String(i)), r);
            }
            var i;
        }
        var T = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.$mode = t()("#mode"), this.$main = t()("#main"), this.$settings = t()("#settings"), 
                this.$sett_view = t()("#pp_settings"), this.$don_sett = t()("#done_settings"), this.$opt_variant = t()("#opt"), 
                this.$comp_variant = t()("#comp"), this.$active_button = t()("#action_button"), 
                this.$remove_from_wl = t()("#action_remove_from_wl"), this.$button_reload = t()("#button_reload"), 
                this.$second_action_button = t()("#second_action_button"), this.$button_box = t()("#button_box"), 
                this.$opt = t()("#opt"), this.$comp = t()("#comp"), this.$hide = t()("#hide"), this.$done_toolbar = t()("#done_toolbar"), 
                this.$rate = t()("#rate"), this.$auto_refresh = t()("#auto_refresh"), this.$allow_list = t()("#allow_list"), 
                this.$advanced_sett = t()("#advanced_sett"), this.$block_el_on_site = t()("#block_el_on_site"), 
                this.$allow = t()("#allow"), this.popupPanelData = {}, this.currentTab = {}, this.tabHostname = "", 
                this.modeLevel = null, this.allowlist = [], this.getTheme(), this.initListenerButtons(), 
                this.init();
            }
            var n, r, i, a, s, c, d, v;
            return n = e, (r = [ {
                key: "getTheme",
                value: function() {
                    var e = this;
                    p("darkTheme").then((function(t) {
                        e.applyTheme(t), e.$mode.attr("checked", t);
                    }));
                }
            }, {
                key: "getBlockedRequestsCount",
                value: function() {
                    var e = this;
                    p("blockedRequestsCount").then((function(n) {
                        var r = 0, o = 0;
                        n.forEach((function(t) {
                            t.id === e.currentTab.id && (r = t.count), o += t.count;
                        })), t()(".page_info_box .count").text(r > 999 ? "999+" : r), t()(".total_info_box .count").text(o > 9999 ? "9999+" : o);
                    }));
                }
            }, {
                key: "applyTheme",
                value: function(e) {
                    !0 === e ? t()("*").addClass("dark_mode") : t()("*").removeClass("dark_mode");
                }
            }, {
                key: "initListenerButtons",
                value: function() {
                    var e = this, n = this;
                    this.$mode.on("change", (function(e) {
                        n.applyTheme(e.target.checked), h("darkTheme", e.target.checked);
                    })), this.$button_box.on("click", (function() {
                        n.clickOnStartPause();
                    })), this.$settings.on("click", (function() {
                        n.oppenPPSettings();
                    })), this.$hide.on("click", (function() {
                        t()(".toolbar_wrapper").css("display", "flex");
                    })), this.$done_toolbar.on("click", (function() {
                        t()(".toolbar_wrapper").css("display", "none");
                    })), this.$rate.on("click", (function() {
                        n.openRatePage();
                    })), this.$allow_list.on("click", (function() {
                        u.runtime.sendMessage({
                            type: "openSettingsPage",
                            page: "allowlist"
                        });
                    })), this.$don_sett.on("click", (function() {
                        n.$sett_view.css("display", "none"), n.$main.css("display", "block");
                    })), this.$advanced_sett.on("click", (function() {
                        u.runtime.sendMessage({
                            type: "openSettingsPage",
                            page: "general"
                        });
                    })), this.$block_el_on_site.on("click", w(b().mark((function e() {
                        return b().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                u.runtime.sendMessage({
                                    what: "openAssistant"
                                }, (function() {
                                    setTimeout((function() {
                                        window.close();
                                    }), 2e3);
                                }));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }), e);
                    })))), this.$allow.on("change", (function(e) {
                        p("allowlist").then(function() {
                            var t = w(b().mark((function t(r) {
                                var o, i, a, s;
                                return b().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        return o = e.target.checked, i = r, t.next = 4, new Promise((function(e, t) {
                                            u.tabs.query({}, (function(t) {
                                                t.forEach((function(t) {
                                                    !0 === t.active && e(t);
                                                }));
                                            }));
                                        })).then((function(e) {
                                            return e;
                                        }));

                                      case 4:
                                        return a = t.sent, t.next = 7, l(a.url).then((function(e) {
                                            return e;
                                        }));

                                      case 7:
                                        s = t.sent, !0 === o ? i.find((function(e) {
                                            return e === s;
                                        })) || (i.push(s), h("allowlist", i).then((function() {
                                            n.clickOnPauseBlocker(0);
                                        }))) : h("allowlist", i.filter((function(e) {
                                            return e !== s;
                                        }))).then((function() {
                                            p("modeLevel").then((function(e) {
                                                n.clickOnStartBlocker(e);
                                            }));
                                        }));

                                      case 9:
                                      case "end":
                                        return t.stop();
                                    }
                                }), t);
                            })));
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        }());
                    })), this.$active_button.on("click", (function() {
                        n.clickOnStartPause();
                    })), this.$remove_from_wl.on("click", (function() {
                        n.removeSiteFromWhileList();
                    })), this.$second_action_button.on("click", (function(e) {
                        var r = t()(e.target).attr("data-type");
                        "rate_app" === r ? n.openRatePage() : "remove_rules" === r && n.removeAllUserRules();
                    })), this.$second_action_button.on("mousedown", (function() {
                        e.$second_action_button.css("box-shadow", "rgb(0, 122, 255) 0px 0px 1px 1px");
                    })), this.$second_action_button.on("mouseup", (function() {
                        e.$second_action_button.css("box-shadow", "none");
                    })), t()(".clicker-css").on("mouseenter", (function(e) {
                        t()(e.currentTarget).css("border", "1px solid #007aff");
                    })), t()(".clicker-css").on("mouseleave", (function(e) {
                        t()(e.currentTarget).css("border", "none");
                    })), t()(".clicker-css").on("mousedown", (function(e) {
                        0 === e.button && t()(e.currentTarget).addClass("trans-bg");
                    })), t()(".clicker-css").on("mouseup", (function(e) {
                        0 === e.button && t()(e.currentTarget).removeClass("trans-bg");
                    })), t()(".active-hover").on("mouseenter", (function(e) {
                        t()(e.currentTarget).css("background-color", "#50cba4");
                    })), t()(".active-hover").on("mouseleave", (function(e) {
                        t()(e.currentTarget).css("background-color", "#09B37D");
                    })), t()(".active-hover").on("mousedown", (function(e) {
                        0 === e.button && t()(e.currentTarget).css("background-color", "#6fe7c1");
                    })), t()(".active-hover").on("mouseup", (function(e) {
                        0 === e.button && t()(e.currentTarget).css("background-color", "#50cba4");
                    }));
                }
            }, {
                key: "clickOnStartPause",
                value: function() {
                    var e = this;
                    0 === this.popupPanelData.level ? p("modeLevel").then((function(t) {
                        e.popupPanelData.level = t, e.clickOnStartBlocker(t);
                    })) : (h("modeLevel", this.popupPanelData.level), this.popupPanelData.level = 0, 
                    this.clickOnPauseBlocker(0));
                }
            }, {
                key: "clickOnStartBlocker",
                value: (v = w(b().mark((function e(t) {
                    var n;
                    return b().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = this.normalizedHostname(this.tabHostname), this.runningMode(), e.next = 4, 
                            f({
                                what: "setFilteringMode",
                                hostname: n,
                                level: t
                            });

                          case 4:
                            u.tabs.reload(this.currentTab.id), window.close();

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }), e, this);
                }))), function(e) {
                    return v.apply(this, arguments);
                })
            }, {
                key: "clickOnPauseBlocker",
                value: (d = w(b().mark((function e(t) {
                    var n;
                    return b().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = this.normalizedHostname(this.tabHostname), this.pausedMode(), e.next = 4, 
                            f({
                                what: "setFilteringMode",
                                hostname: n,
                                level: t
                            });

                          case 4:
                            u.tabs.reload(this.currentTab.id), window.close();

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }), e, this);
                }))), function(e) {
                    return d.apply(this, arguments);
                })
            }, {
                key: "normalizedHostname",
                value: function(e) {
                    return e.replace(/^www\./, "");
                }
            }, {
                key: "init",
                value: (c = w(b().mark((function e() {
                    var t, n, r, o, i, a;
                    return b().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, p("allowlist").then((function(e) {
                                return e;
                            }));

                          case 2:
                            return this.allowlist = e.sent, e.next = 5, u.tabs.query({
                                active: !0,
                                currentWindow: !0
                            });

                          case 5:
                            if (t = e.sent, n = y(t, 1), (r = n[0]) instanceof Object != 0) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !0);

                          case 10:
                            Object.assign(this.currentTab, r);
                            try {
                                o = new URL(this.currentTab.url), this.tabHostname = o.hostname || "";
                            } catch (e) {}
                            if (void 0 === o) {
                                e.next = 17;
                                break;
                            }
                            return e.next = 15, f({
                                what: "popupPanelData",
                                origin: o.origin,
                                hostname: this.normalizedHostname(this.tabHostname)
                            });

                          case 15:
                            (i = e.sent) instanceof Object && Object.assign(this.popupPanelData, i);

                          case 17:
                            return 1 === this.popupPanelData.level || 3 === this.popupPanelData.level ? this.runningMode() : 0 === this.popupPanelData.level && this.pausedMode(), 
                            this.getBlockedRequestsCount(), e.next = 21, l(this.currentTab.url).then((function(e) {
                                return e;
                            }));

                          case 21:
                            return a = e.sent, this.allowlist.find((function(e) {
                                return e === a;
                            })) ? this.$allow.attr("checked", !0) : this.$allow.attr("checked", !1), e.abrupt("return", !0);

                          case 25:
                          case "end":
                            return e.stop();
                        }
                    }), e, this);
                }))), function() {
                    return c.apply(this, arguments);
                })
            }, {
                key: "runningMode",
                value: (s = w(b().mark((function e() {
                    var n = this;
                    return b().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t()("#ext_status").text("Running"), t()("#ext_status").addClass("animate-dots"), 
                            t()(".button_box").removeClass("paused"), t()(".icon_box").removeClass("paused"), 
                            t()(".button_box").addClass("running"), t()(".icon_box").addClass("running"), t()(".block_hide_element").css("display", "none"), 
                            t()(".main .action_button").text("Pause AdBlocker"), p("userRules").then((function(e) {
                                var r = "Rate app", o = "rate_app";
                                e.find((function(e) {
                                    var t = e.ruleText.split("##")[0];
                                    if (t === n.tabHostname || n.tabHostname.includes(t)) return e;
                                })) && (r = "Remove all rules for this page", o = "remove_rules"), t()(".main .second_action_button").text(r), 
                                t()(".main .second_action_button").attr("data-type", o);
                            }));

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                }))), function() {
                    return s.apply(this, arguments);
                })
            }, {
                key: "pausedMode",
                value: (a = w(b().mark((function e() {
                    var n;
                    return b().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t()("#ext_status").text("Paused"), t()("#ext_status").removeClass("animate-dots"), 
                            t()(".button_box").removeClass("running"), t()(".icon_box").removeClass("running"), 
                            t()(".icon_box").removeClass("whatever"), t()(".button_box").addClass("paused"), 
                            t()(".icon_box").addClass("paused"), t()(".block_hide_element").css("display", "block"), 
                            t()(".main .action_button").text("Start AdBlocker"), t()(".main .second_action_button").text("Rate app"), 
                            t()(".main .second_action_button").attr("data-type", "rate_app"), e.next = 13, l(this.currentTab.url).then((function(e) {
                                return e;
                            }));

                          case 13:
                            n = e.sent, this.allowlist.find((function(e) {
                                return e === n;
                            })) && (t()("#ext_status").text("In allowlist"), t()(".icon_box").removeClass("paused"), 
                            t()(".icon_box").addClass("whatever"), t()(".button_box_block").css("display", "block"), 
                            t()(".action_button").css("display", "none"), t()(".action_button_allow_list").css("display", "flex"));

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }), e, this);
                }))), function() {
                    return a.apply(this, arguments);
                })
            }, {
                key: "oppenPPSettings",
                value: (i = w(b().mark((function e() {
                    var n, r;
                    return b().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return this.$main.css("display", "none"), this.$sett_view.css("display", "block"), 
                            e.next = 4, l(this.currentTab.url).then((function(e) {
                                return e;
                            }));

                          case 4:
                            if (n = e.sent, this.allowlist.find((function(e) {
                                return e === n;
                            })) && t()(".opt_comp_block").css("display", "block"), 0 !== this.popupPanelData.level) {
                                e.next = 13;
                                break;
                            }
                            return e.next = 10, p("modeLevel").then((function(e) {
                                return e;
                            }));

                          case 10:
                            r = e.sent, e.next = 14;
                            break;

                          case 13:
                            r = this.popupPanelData.level;

                          case 14:
                            3 === r ? (t()(".opt").removeClass("active"), t()(".comp").addClass("active")) : 1 === r && (t()(".comp").removeClass("active"), 
                            t()(".opt").addClass("active")), t()("#auto_refresh").attr("checked", this.popupPanelData.autoReload);

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }), e, this);
                }))), function() {
                    return i.apply(this, arguments);
                })
            }, {
                key: "openRatePage",
                value: function() {
                    u.tabs.create({
                        url: "https://chrome.google.com/webstore/detail/" + u.runtime.id + "/reviews"
                    });
                }
            }, {
                key: "removeAllUserRules",
                value: function() {
                    var e = this;
                    t()(".main .second_action_button").css("display", "none"), t()(".popup_loader").css("display", "flex"), 
                    p("userRules").then((function(n) {
                        h("userRules", n.filter((function(t) {
                            var n, r = t.ruleText.split("##")[0];
                            if (r !== e.tabHostname && (n = t), !e.tabHostname.includes(r)) return n;
                        }))).then((function() {
                            setTimeout((function() {
                                t()(".main .second_action_button").text("Rate app"), t()(".main .second_action_button").attr("data-type", "rate_app"), 
                                t()(".popup_loader").css("display", "none"), t()(".main .second_action_button").css("display", "flex");
                            }), 1e3);
                        }));
                    }));
                }
            }, {
                key: "removeSiteFromWhileList",
                value: function() {
                    var e = this;
                    p("allowlist").then((function(t) {
                        l(e.currentTab.url).then((function(n) {
                            h("allowlist", t.filter((function(e) {
                                return e !== n;
                            }))).then((function() {
                                p("modeLevel").then((function(t) {
                                    e.clickOnStartBlocker(t);
                                }));
                            }));
                        }));
                    }));
                }
            } ]) && k(n.prototype, r), Object.defineProperty(n, "prototype", {
                writable: !1
            }), e;
        }();
        document.addEventListener("DOMContentLoaded", (function() {
            new T;
        }));
    })();
})();