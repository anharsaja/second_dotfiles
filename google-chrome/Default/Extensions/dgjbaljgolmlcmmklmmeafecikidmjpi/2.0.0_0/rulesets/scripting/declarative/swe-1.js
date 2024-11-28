"use strict";

!function() {
    const e = new Map([ [ "sjofart.ax", 0 ], [ "avestatidning.com", 1 ], [ "salaallehanda.com", 1 ], [ "atl.nu", 1 ], [ "klt.nu", [ 1, 7 ] ], [ "st.nu", 1 ], [ "aktuellhallbarhet.se", 1 ], [ "allehanda.se", 1 ], [ "arbetarbladet.se", 1 ], [ "bandypuls.se", 1 ], [ "barometern.se", [ 1, 7 ] ], [ "bblat.se", 1 ], [ "blt.se", [ 1, 7 ] ], [ "borlangetidning.se", 1 ], [ "bt.se", [ 1, 7 ] ], [ "byggindustrin.se", 1 ], [ "dagensmedia.se", 1 ], [ "dagensmedicin.se", 1 ], [ "dagenssamhalle.se", 1 ], [ "dagligvarunytt.se", 1 ], [ "dalademokraten.se", 1 ], [ "di.se", 1 ], [ "dn.se", [ 1, 29 ] ], [ "expressen.se", [ 1, 33 ] ], [ "fagersta-posten.se", 1 ], [ "falkopingstidning.se", 1 ], [ "falukuriren.se", 1 ], [ "fastighetsnytt.se", 1 ], [ "gd.se", 1 ], [ "hd.se", 1 ], [ "ht.se", 1 ], [ "jp.se", 1 ], [ "kalmarposten.se", [ 1, 7 ] ], [ "kristianstadsbladet.se", [ 1, 7 ] ], [ "landlantbruk.se", 1 ], [ "ljusdalsposten.se", 1 ], [ "ljusnan.se", 1 ], [ "lt.se", 1 ], [ "ltz.se", 1 ], [ "market.se", 1 ], [ "moratidning.se", 1 ], [ "na.se", 1 ], [ "netdoktorpro.se", 1 ], [ "norrteljetidning.se", 1 ], [ "nsk.se", [ 1, 7 ] ], [ "nvp.se", 1 ], [ "nyaludvikatidning.se", 1 ], [ "nynashamnsposten.se", 1 ], [ "olandsbladet.se", [ 1, 7 ] ], [ "op.se", 1 ], [ "popularhistoria.se", 1 ], [ "privataaffarer.se", 1 ], [ "resume.se", 1 ], [ "skaraborgslanstidning.se", 1 ], [ "skd.se", 1 ], [ "skovdenyheter.se", 1 ], [ "smalandsdagblad.se", 1 ], [ "smalanningen.se", 1 ], [ "smp.se", [ 1, 7 ] ], [ "smt.se", 1 ], [ "soderhamnskuriren.se", 1 ], [ "sodran.se", 1 ], [ "sydostran.se", [ 1, 7 ] ], [ "sydsvenskan.se", 1 ], [ "tidningenangermanland.se", 1 ], [ "tidningenharjedalen.se", 1 ], [ "tranastidning.se", 1 ], [ "trelleborgsallehanda.se", [ 1, 7 ] ], [ "ut.se", [ 1, 7 ] ], [ "vastgotabladet.se", 1 ], [ "vaxjobladet.se", [ 1, 7 ] ], [ "vetlandaposten.se", 1 ], [ "vlt.se", 1 ], [ "vn.se", 1 ], [ "vxonews.se", [ 1, 7 ] ], [ "ystadsallehanda.se", [ 1, 7 ] ], [ "bytbil.com", 2 ], [ "discoveringtheplanet.com", 3 ], [ "entreprenad.com", 4 ], [ "branschstegen.se", 4 ], [ "cleannet.se", 4 ], [ "dagenshandel.se", 4 ], [ "food-supply.se", 4 ], [ "foodnet.se", 4 ], [ "framtidensbygg.se", 4 ], [ "fri-kopenskap.se", 4 ], [ "habit.se", 4 ], [ "lifesciencesweden.se", 4 ], [ "medtechmagazine.se", 4 ], [ "motormagasinet.se", 4 ], [ "packnet.se", 4 ], [ "plastnet.se", 4 ], [ "processnet.se", 4 ], [ "recyclingnet.se", 4 ], [ "rt-forum.se", 4 ], [ "runnersworld.se", 4 ], [ "skogsforum.se", 4 ], [ "transportnet.se", 4 ], [ "uochd.se", 4 ], [ "verkstaderna.se", 4 ], [ "woodnet.se", 4 ], [ "goteborg.com", 5 ], [ "hejauppsala.com", 6 ], [ "mabra.com", 7 ], [ "bulletin.nu", 7 ], [ "aftonbladet.se", [ 7, 15 ] ], [ "allas.se", 7 ], [ "bokadirekt.se", 7 ], [ "dagensarena.se", 7 ], [ "elle.se", 7 ], [ "femina.se", 7 ], [ "filmtopp.se", 7 ], [ "fof.se", [ 7, 31, 34 ] ], [ "folkofolk.se", 7 ], [ "hant.se", 7 ], [ "inredningsarkitektur.se", 7 ], [ "kollega.se", 7 ], [ "lchfarkivet.se", 7 ], [ "motherhood.se", 7 ], [ "residencemagazine.se", 7 ], [ "samnytt.se", 7 ], [ "skyscanner.se", 7 ], [ "svenskdam.se", 7 ], [ "sweclockers.com", 8 ], [ "tasteline.com", 9 ], [ "aip.nu", 10 ], [ "lansposten.se", 10 ], [ "dagenskalmar.nu", 11 ], [ "dagenshultsfred.se", 11 ], [ "dagensvastervik.se", 11 ], [ "dagensvimmerby.se", 11 ], [ "fasting.nu", 12 ], [ "kuriren.nu", 13 ], [ "tv.nu", 13 ], [ "corren.se", 13 ], [ "ekuriren.se", 13 ], [ "eposten.se", 13 ], [ "folkbladet.se", 13 ], [ "gotlandjustnu.se", 13 ], [ "helagotland.se", 13 ], [ "kindaposten.se", 13 ], [ "kkuriren.se", 13 ], [ "klart.se", 13 ], [ "mvt.se", 13 ], [ "norran.se", 13 ], [ "nsd.se", 13 ], [ "nt.se", 13 ], [ "pt.se", 13 ], [ "sn.se", 13 ], [ "strengnastidning.se", 13 ], [ "unt.se", 13 ], [ "vimmerbytidning.se", 13 ], [ "vt.se", 13 ], [ "matochpyssel.nu", 14 ], [ "godare.se", 15 ], [ "livsstil.se", 15 ], [ "omni.se", [ 15, 53 ] ], [ "omniekonomi.se", [ 15, 53 ] ], [ "skonhetsredaktorerna.se", 15 ], [ "svd.se", [ 15, 61 ] ], [ "alkompis.se", 16 ], [ "arkitekten.se", 17 ], [ "biblioteksforeningen.se", 18 ], [ "biostock.se", 19 ], [ "tobaksfakta.se", 19 ], [ "byggahus.se", 20 ], [ "byggipedia.se", 21 ], [ "com.se", 22 ], [ "dalarnasaffarer.se", 23 ], [ "jamtlandsaffarer.se", 23 ], [ "naringslivetvgl.se", 23 ], [ "stockholmsaffarer.se", 23 ], [ "dansportalen.se", 24 ], [ "kb.se", 24 ], [ "designbase.se", 25 ], [ "digitalfotoforalla.se", [ 26, 27 ] ], [ "pctidningen.se", [ 26, 27 ] ], [ "iform.se", 27 ], [ "illvet.se", 27 ], [ "slakthistoria.se", 27 ], [ "varldenshistoria.se", 27 ], [ "viivilla.se", 27 ], [ "vinbanken.se", [ 27, 67 ] ], [ "dinbyggare.se", 28 ], [ "dust2.se", 30 ], [ "elinstallatoren.se", 31 ], [ "modernpsykologi.se", 31 ], [ "spraktidningen.se", 31 ], [ "vvsforum.se", 31 ], [ "etc.se", 32 ], [ "fokus.se", 35 ], [ "formas.se", 36 ], [ "rf.se", 36 ], [ "skogssallskapet.se", 36 ], [ "fotbollskanalen.se", 37 ], [ "koket.se", 37 ], [ "tv4.se", 37 ], [ "tv4play.se", 37 ], [ "futsalmagasinet.se", 38 ], [ "hammarbyfotboll.se", 39 ], [ "hemnet.se", 40 ], [ "idrottensaffarer.se", 41 ], [ "improveme.se", 42 ], [ "karinrahm.se", 43 ], [ "kokaihop.se", 44 ], [ "kultwatch.se", 45 ], [ "livetsgoda.se", 46 ], [ "livsmedelsverket.se", 47 ], [ "ljudochbild.se", 48 ], [ "lundgiants.se", 49 ], [ "matspar.se", 50 ], [ "modernalivet.se", 51 ], [ "mytaste.se", 52 ], [ "oru.se", 54 ], [ "pussad.se", 55 ], [ "radio.se", 56 ], [ "samfalligheterna.se", 57 ], [ "spelhubben.se", 58 ], [ "sportbladetplay.se", 59 ], [ "spray.se", 60 ], [ "svenskahousegruppen.se", 62 ], [ "svensktidskrift.se", 63 ], [ "thelocal.se", 64 ], [ "tidningenridsport.se", 65 ], [ "vi.se", 66 ], [ "m.yelp.se", 68 ], [ "macken.xyz", 69 ] ]), t = new Map(void 0), o = new Map([ [ "www.com.se", [ 22 ] ] ]);
    self.declarativeImports = self.declarativeImports || [], self.declarativeImports.push({
        argsList: [ [ '{"selector":"section.huvudsektion","action":["style","margin-top:unset!important"]}' ], [ '{"selector":"body.didomi-popup-open","action":["style","overflow:unset!important"]}' ], [ '{"selector":"html, body","action":["style","overflow: auto !important;"]}' ], [ '{"selector":"html","action":["style","user-select:unset!important; -moz-user-select:unset!important; -webkit-user-select:unset!important;"]}' ], [ '{"selector":".modal-open","action":["style","overflow:initial!important"]}' ], [ '{"selector":"body","action":["style","overflow-y:initial!important"]}' ], [ '{"selector":".cli-barmodal-open","action":["style","overflow:auto!important"]}' ], [ '{"selector":"body","action":["style","overflow:initial!important"]}' ], [ '{"selector":".ad.adPanorama","action":["style","height:100px!important; position:absolute!important;"]}' ], [ '{"selector":".popup","action":["style","overflow: auto !important;"]}' ], [ '{"selector":"body.cookies-not-set","action":["style","overflow:unset!important"]}' ], [ '{"selector":"body","action":["style","margin-top: 0 !important;"]}' ], [ '{"selector":"body","action":["style","display:unset!important"]}' ], [ '{"selector":".sp-message-open body","action":["style","overflow:unset!important;position:unset!important;"]}' ], [ '{"selector":".loading","action":["style","opacity:1!important"]}' ], [ '{"selector":".sp-message-open body","action":["style","overflow:initial!important; position:unset!important; margin-top:unset!important;"]}' ], [ '{"selector":".cdk-global-scrollblock","action":["style","overflow-y: initial !important; position: unset !important;"]}' ], [ '{"selector":".MediaWrapper-content","action":["style","opacity:unset!important"]}', '{"selector":"html","action":["style","--scrollbar-width:initial!important"]}' ], [ '{"selector":"body","action":["style","opacity:1!important"]}' ], [ '{"selector":".pum-open","action":["style","overflow:auto!important"]}' ], [ '{"selector":".attachmentPreviewActive img","action":["style","-webkit-filter: none !important; filter: none !important;"]}', '{"selector":"body.forum-logged-out .svartalistan-results-login-required","action":["style","height: unset !important;"]}' ], [ '{"selector":"*","action":["style","user-select: auto !important;"]}' ], [ '{"selector":"html::before","action":["style","content: \\"OBS! VARNING! Om denna sida är en butik så är det förmodligen en bluffbutik. Detta är ett meddelande från det svenska filtret i din annonsblockerare.\\" !important; font-size: 18px !important; font-family: sans !important; background-color: red !important; color: white !important; padding: 6px !important; width: 100% !important; display: block !important; text-align: center !important;"]}' ], [ '{"selector":".header-menu__wrapp","action":["style","position:unset!important"]}' ], [ '{"selector":"body","action":["style","overflow:unset!important; position:unset!important;"]}' ], [ '{"selector":"html, body","action":["style","overflow:unset!important;"]}' ], [ '{"selector":".opacity-fade","action":["style","opacity:1!important; transition:none!important; animation:unset!important;"]}' ], [ '{"selector":".noScroll, .noScroll body","action":["style","overflow:unset!important"]}' ], [ '{"selector":"*","action":["style","-webkit-touch-callout: default !important; -webkit-user-select: text !important; -moz-user-select: text !important; -ms-user-select: text !important; user-select: text !important;"]}', '{"selector":"::selection","action":["style","background-color:#007aff!important;color:#fff!important;"]}' ], [ '{"selector":"body","action":["style","position:unset!important;overflow-y:scroll!important;"]}' ], [ '{"selector":".main-page-content","action":["style","background-image:none!important;"]}' ], [ '{"selector":".mediaconnect-protected-content, .mediaconnect-protected-content--show","action":["style","max-height: unset !important; overflow: unset !important;"]}', '{"selector":".mediaconnect-protected-content::after","action":["style","background: unset !important;"]}' ], [ '{"selector":".paywalled.hidden","action":["style","display:unset!important"]}' ], [ '{"selector":".tapet-popup-js-no-scroll, .tapet-no-scroll","action":["style","overflow-y:initial!important; position:unset!important;"]}' ], [ '{"selector":".mediaconnect-protected-content .Carousel","action":["style","opacity:unset!important;"]}' ], [ '{"selector":".sesamy-protected-content","action":["style","max-height:unset!important;overflow:unset!important;"]}', '{"selector":".sesamy-protected-content.active::after","action":["style","background:unset!important;"]}' ], [ '{"selector":"body","action":["style","overflow:initial!important; position:initial!important;"]}' ], [ '{"selector":".avod-web-player-pause","action":["style","background-color:transparent!important;"]}' ], [ '{"selector":"html.modal-cacsp-open","action":["style","position:unset!important"]}' ], [ '{"selector":"body[data-modal-open]","action":["style","overflow-y:unset!important;"]}' ], [ '{"selector":"body","action":["style","overflow:unset!important"]}' ], [ '{"selector":"#header","action":["style","height:unset!important;"]}' ], [ '{"selector":".wp-pagenavi","action":["style","position:unset!important;z-index:unset!important"]}' ], [ '{"selector":".thb-page-transition-on","action":["style","opacity:1!important"]}' ], [ '{"selector":"body","action":["style","overflow-y: auto !important;"]}' ], [ '{"selector":".js-preloader > .document, .js-preloader > .hero-section","action":["style","opacity: 1 !important; visibility: visible !important;"]}' ], [ '{"selector":"body","action":["style","opacity:unset!important"]}' ], [ '{"selector":".lock-scroll","action":["style","overflow:unset!important"]}' ], [ '{"selector":"#MoreLink_content-container","action":["style","height:unset!important;"]}', '{"selector":".thecontent, .entry-content","action":["style","max-height: unset !important; overflow: initial !important; height: unset !important;"]}', '{"selector":".wp-caption","action":["style","display:initial!important"]}' ], [ '{"selector":"#LoggaDiv","action":["style","position:unset!important;"]}' ], [ '{"selector":".overflow-hidden","action":["style","overflow-y: initial !important;"]}' ], [ '{"selector":"body.modal-active","action":["style","overflow:unset!important"]}' ], [ '{"selector":".recipe-modal[data-state=\\"default\\"] .modal-container.open, .recipe-modal[data-state=\\"panorama\\"] .modal-container.open","action":["style","padding-top: 0 !important;"]}', '{"selector":".site-wrapper[data-state=\\"panorama\\"], .site-wrapper[data-state=\\"default\\"]","action":["style","padding-top: 40px !important;"]}', '{"selector":"body.modal-active.modal-open::before, body.modal-active::before","action":["style","opacity: unset !important; content: unset !important;"]}' ], [ '{"selector":".header-banner--regular, .app-banner","action":["style","--banner-offset: 0 !important;"]}' ], [ '{"selector":".no-scroll","action":["style","overflow: initial !important;"]}' ], [ '{"selector":"html.g1-popup-visible","action":["style","overflow: initial !important;"]}' ], [ '{"selector":":is(a[data-testid=\\"region-tag\\"], a[data-testid=\\"taglist-item-topic\\"], a[data-testid=\\"taglist-item-genre\\"])","action":["style","background-image:none!important; background:rgb(2, 114, 140)!important;"]}' ], [ '{"selector":".tds-locked-content","action":["style","display:unset!important;"]}' ], [ '{"selector":"html, .unselectable","action":["style","-moz-user-select:initial!important; -webkit-user-select:initial!important; -webkit-touch-callout:initial!important; user-select:initial!important; -webkit-tap-highlight-color:initial!important; cursor:initial!important;"]}' ], [ '{"selector":"body.dimmed","action":["style","overflow:unset!important"]}' ], [ '{"selector":"body","action":["style","-webkit-user-select: text !important; user-select: text !important;"]}' ], [ '{"selector":"body","action":["style","visibility:visible!important;"]}' ], [ '{"selector":"body.modal-open","action":["style","overflow:initial!important"]}' ], [ '{"selector":".tf_svg_lazy","action":["style","transition:none!important; filter:none!important; transform:none!important;"]}' ], [ '{"selector":".single-article-related.single-article-related-short","action":["style","height:unset!important; overflow:unset!important;"]}', '{"selector":".single-article-related.single-article-related-short::after","action":["style","background:unset!important;"]}' ], [ '{"selector":".entry-content","action":["style","display: initial !important;"]}' ], [ '{"selector":"body.cookie-modal-open","action":["style","overflow:unset!important;"]}' ], [ '{"selector":".fancybox-lock","action":["style","overflow-y: auto !important;"]}' ], [ '{"selector":"html","action":["style","overflow:unset!important; position:unset!important;"]}' ], [ '{"selector":".et_pb_section","action":["style","opacity:1!important; animation-duration:unset!important; animation-fill-mode:unset!important;"]}' ] ],
        hostnamesMap: e,
        entitiesMap: t,
        exceptionsMap: o
    });
}();