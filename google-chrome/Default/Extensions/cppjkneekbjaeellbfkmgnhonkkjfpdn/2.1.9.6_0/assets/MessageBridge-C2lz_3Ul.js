var h=Object.defineProperty;var a=s=>{throw TypeError(s)};var v=(s,e,o)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o;var i=(s,e,o)=>v(s,typeof e!="symbol"?e+"":e,o),p=(s,e,o)=>e.has(s)||a("Cannot "+o);var u=(s,e,o)=>(p(s,e,"read from private field"),o?o.call(s):e.get(s)),f=(s,e,o)=>e.has(s)?a("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,o),n=(s,e,o,t)=>(p(s,e,"write to private field"),t?t.call(s,o):e.set(s,o),o);var R=(s=>(s.Offscreen="offscreen",s.Onscreen="options",s.Popup="popup",s.Service="service",s))(R||{});const w=(s,e)=>new Promise((o,t)=>{try{s(e,void 0,l=>{o(l)})!==!0&&o(void 0)}catch(c){t(c)}});var r;class d{constructor(e,o){i(this,"callback");f(this,r);n(this,r,e),this.callback=o}get origin(){return u(this,r)}set origin(e){n(this,r,e)}}r=new WeakMap;export{R as B,d as M,w as p};
