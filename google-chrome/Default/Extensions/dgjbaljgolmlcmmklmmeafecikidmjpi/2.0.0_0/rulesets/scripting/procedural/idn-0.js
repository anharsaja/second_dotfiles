"use strict";

!function() {
    const s = new Map([ [ "tempo.co", 0 ], [ "cloud.majalahhewan.com", 1 ], [ "info.vebma.com", 1 ], [ "tokopedia.com", 2 ], [ "cari.com.my", 3 ], [ "neonime.net", 4 ] ]), t = new Map(void 0), e = new Map(void 0);
    self.proceduralImports = self.proceduralImports || [], self.proceduralImports.push({
        argsList: [ [ '{"selector":"body","action":["remove-class","pad-apps"]}' ], [ '{"selector":"span","tasks":[["has-text","Advertisement"]]}' ], [ '{"selector":".product-card","tasks":[["has",{"selector":"span","tasks":[["has-text","/^Ad$/"]]}]]}', '{"selector":"div[data-testid=\\"divCarouselProduct\\"]","tasks":[["has",{"selector":"span","tasks":[["has-text","/^Ad$/"]]}]]}', '{"selector":"div[data-testid=\\"lazy-frame\\"]","tasks":[["has",{"selector":"span","tasks":[["has-text","/^Ad$/"]]}]]}', '{"selector":"div[data-testid^=\\"divProductRecommendation\\"]","tasks":[["has",{"selector":"span","tasks":[["has-text","/^Ad$/"]]}]]}' ], [ '{"selector":"center","tasks":[["has-text","ADVERTISEMENT"]]}' ], [ '{"selector":"[data-src^=\\"https://neonime.net/wp-content/\\"]","tasks":[["xpath",".."]]}' ] ],
        hostnamesMap: s,
        entitiesMap: t,
        exceptionsMap: e
    });
}();