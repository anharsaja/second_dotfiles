"use strict";

!function() {
    const e = new Map([ [ "grammarly.com", 0 ], [ "linux.do", 1 ], [ "www.nicovideo.jp", 2 ], [ "freshchoice.co.nz", 3 ] ]), t = new Map(void 0), a = new Map(void 0);
    self.proceduralImports = self.proceduralImports || [], self.proceduralImports.push({
        argsList: [ [ '{"selector":".ReactModalPortal","tasks":[["has-text","confidence"]]}' ], [ '{"selector":"body.topic-in-gated-category","action":["remove-class","topic-in-gated-category"]}' ], [ '{"selector":"","tasks":[["matches-path","/\\\\/(search|tag)\\\\//"],["spath"," .nicoadVideoItem"]]}', '{"selector":"","tasks":[["matches-path","/tag/"],["spath",".nicodicNicoadVideoList"]]}' ], [ '{"selector":"[data-broadcast-modal]","action":["remove",""]}' ] ],
        hostnamesMap: e,
        entitiesMap: t,
        exceptionsMap: a
    });
}();