"use strict";

!function() {
    const t = new Map([ [ "konica.al", 0 ], [ "mediaworld.al", 1 ], [ "kohajone.com", 2 ], [ "shkoder.net", 3 ] ]), e = new Map(void 0), s = new Map(void 0);
    self.proceduralImports = self.proceduralImports || [], self.proceduralImports.push({
        argsList: [ [ '{"selector":".widget","tasks":[["has-text","REKLAMA"]]}' ], [ '{"selector":".td_block_template_1","tasks":[["has-text","- Advertisement -"]]}' ], [ '{"selector":".vc_raw_html","tasks":[["has-text","Html code"]]}' ], [ '{"selector":".td-block-title-wrap > h4 > span","tasks":[["has-text","REKLAMA"]]}' ] ],
        hostnamesMap: t,
        entitiesMap: e,
        exceptionsMap: s
    });
}();