"use strict";

!function() {
    const s = new Map([ [ "monitor.si", 0 ], [ "partis.si", 1 ] ]), t = new Map(void 0), e = new Map(void 0);
    self.proceduralImports = self.proceduralImports || [], self.proceduralImports.push({
        argsList: [ [ '{"selector":"li.article","tasks":[["has-text","Oglasno sporočilo"]]}' ], [ '{"selector":"a.card","tasks":[["has-text","Oglas"]]}' ] ],
        hostnamesMap: s,
        entitiesMap: t,
        exceptionsMap: e
    });
}();