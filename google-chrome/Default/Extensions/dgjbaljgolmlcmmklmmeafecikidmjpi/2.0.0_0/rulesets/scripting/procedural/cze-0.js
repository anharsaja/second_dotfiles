"use strict";

!function() {
    const s = new Map([ [ "autozurnal.com", [ 0, 1 ] ], [ "pppeter.shop", 0 ], [ "presovak.sk", 0 ], [ "csfd.cz", 2 ], [ "doktorka.cz", 3 ], [ "dotekomanie.cz", 4 ], [ "enigmaplus.cz", [ 5, 6 ] ], [ "epochaplus.cz", [ 5, 7 ] ], [ "indian-tv.cz", 8 ], [ "nerdfix.cz", 8 ], [ "parabola.cz", 9 ], [ "bombuj.si", 10 ], [ "serialy.bombuj.si", 10 ], [ "vranovske.sk", 11 ] ]), e = new Map(void 0), a = new Map(void 0);
    self.proceduralImports = self.proceduralImports || [], self.proceduralImports.push({
        argsList: [ [ '{"selector":"body","action":["remove-class","modal-open"]}' ], [ '{"selector":"div","action":["remove-class","with-active-branding"]}' ], [ '{"selector":".ct-related","tasks":[["has-text","/^\\\\s+Reklama/"]]}' ], [ '{"selector":".block-imageblock","tasks":[["has-text","Reklama"]]}' ], [ '{"selector":"div.box","tasks":[["has-text","/^reklama/i"]]}' ], [ '{"selector":".text-center","tasks":[["has",{"selector":"> span","tasks":[["has-text","reklama"]]}]]}', '{"selector":"img[src^=\\"/upload/data/\\"]","tasks":[["upward",3]]}', '{"selector":"span","tasks":[["has-text","reklama"]]}' ], [ '{"selector":"img[src*=\\"/img/atlas\\"]","tasks":[["upward",3]]}' ], [ '{"selector":"img[alt=\\"casopis\\"]","tasks":[["upward",3]]}' ], [ '{"selector":"a","tasks":[["matches-css",{"name":"background-image","value":"url"}],["matches-css",{"name":"position","value":"^fixed$"}],["upward",1]]}' ], [ '{"selector":"h3","tasks":[["has-text","/^Reklama$/"]]}' ], [ '{"selector":"a[id*=\\"zatvorit\\"]","action":["remove-attr","href"]}' ], [ '{"selector":"script","tasks":[["has-text","stopPrntScr"]]}', '{"selector":"style","action":["remove",""],"tasks":[["has-text","::selection"]]}' ] ],
        hostnamesMap: s,
        entitiesMap: e,
        exceptionsMap: a
    });
}();