"use strict";

!function() {
    const s = new Map([ [ "suprovatsydney.com.au", 0 ], [ "uthayannews.ca", 1 ], [ "bangla.24livenewspaper.com", 2 ], [ "aadarshhimachal.com", 3 ], [ "aapkikhabar.com", 4 ], [ "angulonline.com", 5 ], [ "bhadainimirror.com", 6 ], [ "blivenews.com", 7 ], [ "dailyharyananews.com", 7 ], [ "fashionnewsera.com", 7 ], [ "cgnewsonline.com", 8 ], [ "chatonay71news.com", 9 ], [ "cityandolan.com", 10 ], [ "cityliveindia.com", 11 ], [ "countrynewstoday.com", 12 ], [ "dakshinapath.com", 13 ], [ "dhamaka36.com", 14 ], [ "bharatiyadigitalnews.in", [ 14, 64 ] ], [ "dhinasari.com", 15 ], [ "entevarthakal.com", 16 ], [ "etamilnews.com", 17 ], [ "filmybuzz.com", 18 ], [ "gossiplanka.com", 19 ], [ "horizonhind.com", 20 ], [ "hrbreakingnews.com", 21 ], [ "timeskerala.com", 21 ], [ "ibmnews24.com", 22 ], [ "meranews.com", 22 ], [ "tamizhakam.com", 22 ], [ "tv20news.in", 22 ], [ "indiasamachar24.com", 23 ], [ "indocanadiantimes.com", 24 ], [ "janamtv.com", 25 ], [ "jansandeshonline.com", 26 ], [ "janwarta.com", 27 ], [ "khabardev.com", 28 ], [ "kirandoot.com", 29 ], [ "lnstarnews.com", 30 ], [ "loginkerala.com", 31 ], [ "loudspeakeronline.com", 32 ], [ "madhepurakhabar.com", 33 ], [ "munaadi.com", 34 ], [ "naya-alo.com", 35 ], [ "neplays.com", 36 ], [ "news24bite.com", 37 ], [ "newstodaynetwork.com", 38 ], [ "nobat.com", 39 ], [ "pingara.com", 40 ], [ "pksnews24.com", 41 ], [ "punjabikangaroo.com", 42 ], [ "rajdhanidaily.com", 43 ], [ "rochakkhabare.com", 44 ], [ "utkalpratidin.com", [ 44, 60 ] ], [ "theonlinepost.in", [ 44, 87 ] ], [ "sabhavarthakal.com", 45 ], [ "samajkihalchal.com", 46 ], [ "samarthsahara.com", 47 ], [ "varchasvnews.com", 47 ], [ "samayduniya.com", 48 ], [ "satyavoice.com", 49 ], [ "seithipunal.com", 50 ], [ "khabaraaptak.net", 50 ], [ "shikshabhartinetwork.com", 51 ], [ "smtv24x7.com", 52 ], [ "thedesiawaaz.com", 53 ], [ "theheadline24.com", 54 ], [ "thesigmanews.com", 55 ], [ "ttncinema.com", 56 ], [ "twentyfournews.com", 57 ], [ "unitednewskannada.com", 58 ], [ "upuklive.com", 59 ], [ "jalauntimessite.wordpress.com", 61 ], [ "yugvartanews.com", 62 ], [ "yuvaharyana.com", 63 ], [ "biharnation.in", 65 ], [ "cg24news.in", 66 ], [ "champarantoday.in", 67 ], [ "bhingatimes.co.in", 68 ], [ "indiakhabar.co.in", 69 ], [ "deshkikhabar.in", 70 ], [ "doonhorizon.in", 71 ], [ "theexpose.in", [ 71, 85 ] ], [ "encounterindia.in", 72 ], [ "indianewscentre.in", 73 ], [ "janadeshexpress.in", 74 ], [ "lifestylenama.in", 75 ], [ "madhubaninews.in", 76 ], [ "magadhexpress.in", 77 ], [ "namastepurvanchal.in", 78 ], [ "newsmoments.in", 79 ], [ "newstm.in", 80 ], [ "pressnote.in", 81 ], [ "rozanapost.in", 82 ], [ "rozanaspokesman.in", 83 ], [ "soochnanews.in", 84 ], [ "thenewswords.in", 86 ], [ "todaynewshindi.in", 88 ], [ "visionnewsservice.in", 89 ], [ "viznews.in", 90 ], [ "odiascraps.info", 91 ], [ "k9media.live", 92 ], [ "news11.live", 93 ], [ "abcnews.media", 94 ], [ "indiannewsservice.net", 95 ], [ "satkhiraprobaho.net", 96 ], [ "tutyonline.net", 97 ], [ "asr24.news", 98 ], [ "livevns.news", 99 ], [ "ammanealing.org", 100 ], [ "thannambikkai.org", 101 ] ]), e = new Map(void 0), t = new Map(void 0);
    self.proceduralImports = self.proceduralImports || [], self.proceduralImports.push({
        argsList: [ [ '{"selector":".box_header","tasks":[["has-text","Advertising"]]}' ], [ '{"selector":".widget_text","tasks":[["has",{"selector":".widget-title > span","tasks":[["has-text","Advertising"]]}]]}' ], [ '{"selector":".advertisement","tasks":[["has-text","advertisement"]]}' ], [ '{"selector":".wpb_wrapper","tasks":[["has",{"selector":"> h5","tasks":[["has-text","Ads"]]}]]}' ], [ '{"selector":"[id^=\\"custom\\"]","tasks":[["has",{"selector":"> a","tasks":[["has-text","Government Ad"]]}]]}', '{"selector":"div[id^=\\"AS_O_\\"] div","tasks":[["has",{"selector":"> div > div > a > div h5","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":".elementor-widget-heading","tasks":[["has",{"selector":"> div > h2","tasks":[["has-text","Sponsored"]]}]]}' ], [ '{"selector":".sidebar-widget","tasks":[["has",{"selector":".title","tasks":[["has-text","MIsource"]]}]]}', '{"selector":".sidebar-widget","tasks":[["has",{"selector":".title","tasks":[["has-text","Prasadam"]]}]]}' ], [ '{"selector":"div[id^=\\"AS_O_LHS_1\\"] > div","tasks":[["has",{"selector":"> div > div > a > span","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> small","tasks":[["has-text","Advt"]]}]]}' ], [ '{"selector":".widget_recent_entries","tasks":[["has-text","ads"]]}' ], [ '{"selector":"div[data-slot=\\"460008\\"] div","tasks":[["has",{"selector":"> div > div > a > div > h6","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> .main-heading","tasks":[["has-text","Advertizement"]]}]]}' ], [ '{"selector":".td-block-title > span","tasks":[["has-text","Advertisement"]]}' ], [ '{"selector":".sidebar-widget","tasks":[["has",{"selector":"> .widget-head > .title","tasks":[["has-text","ADV"]]}]]}' ], [ '{"selector":".mb-3","tasks":[["has",{"selector":"> .section-title > h4","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".tdm-descr","tasks":[["has-text","Advertisement"]]}' ], [ '{"selector":".fourth_2_inner","tasks":[["has",{"selector":"> a > div > h1","tasks":[["has-text","advertisement"]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> .section-title > h4","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".container-fluid div","tasks":[["has",{"selector":"> h2","tasks":[["has-text","Ads"]]}]]}' ], [ '{"selector":".HTML","tasks":[["has",{"selector":".title","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"div > h2","tasks":[["has-text","Google Ads"]]}', '{"selector":"strong","tasks":[["has-text","ABS Hospital"]]}', '{"selector":"strong","tasks":[["has-text","Vijay Bakery"]]}' ], [ '{"selector":"div[id^=\\"AS_O_LHS\\"] > div","tasks":[["has",{"selector":"> div > div > a > div > h5","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"p","tasks":[["has-text","Advertisement"]]}' ], [ '{"selector":".widget","tasks":[["has",{"selector":".widget-title > h4","tasks":[["has-text","Advertise"]]}]]}' ], [ '{"selector":".block-title span","tasks":[["has-text","Sponsored Ads"]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> .jeg_block_title > span","tasks":[["has-text","ADVT"]]}]]}' ], [ '{"selector":"div[id^=\\"AS_P_LHS_\\"] > div","tasks":[["has",{"selector":"> div > div > a > div > h5","tasks":[["has-text","Ad |"]]}]]}', '{"selector":"div[id^=\\"AS_P_LHS_\\"] > div","tasks":[["has",{"selector":"> div > div > a > div > p","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":".td_block_wrap","tasks":[["has",{"selector":"> div > h4 > span","tasks":[["has-text","Ad"]]}]]}' ], [ '{"selector":".list-category-posts-half","tasks":[["has",{"selector":"> .widget-title","tasks":[["has-text","AD"]]}]]}' ], [ '{"selector":".sidebar-widget","tasks":[["has",{"selector":"> div > h4","tasks":[["has-text","adv"]]}]]}' ], [ '{"selector":".elementor-widget-wrap","tasks":[["has",{"selector":"h2","tasks":[["has-text","Adv."]]}]]}' ], [ '{"selector":"div[id^=\\"AS_O_LHS\\"] > div","tasks":[["has",{"selector":"> div > div > a > h2 + span","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"div.sidebar-widget","tasks":[["has",{"selector":"> .widget-head > h4","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".HTML","tasks":[["has",{"selector":"> .widget-title > .title","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".mb-3","tasks":[["has",{"selector":".section-title > h4","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".textwidget","tasks":[["has-text",".adsbygoogle"]]}' ], [ '{"selector":".widget--title .h4","tasks":[["has-text","Advertisement"]]}' ], [ '{"selector":"figure","tasks":[["has",{"selector":"> figcaption","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"div[id^=\\"AS_O_LHS\\"] > div","tasks":[["has",{"selector":"> div > div > a > h4","tasks":[["has-text","Ad: "]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> small","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".block-title-4","tasks":[["has",{"selector":"> h4 > span","tasks":[["has-text","Advertisements"]]}]]}' ], [ '{"selector":"div.primary-sidebar-widget","tasks":[["has",{"selector":"> div > span","tasks":[["has-text","Advertisement"]]}]]}', '{"selector":"div[data-adid]","tasks":[["has",{"selector":"> p","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"#side .widget","tasks":[["has",{"selector":"> .heading > span","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".elementor-widget-wrap p","tasks":[["has-text","Ads"]]}' ], [ '{"selector":"div[id*=\\"_O_\\"] div","tasks":[["has",{"selector":"> div > div > a > div *","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":".jeg_block_heading","tasks":[["has",{"selector":"> .jeg_block_title > span","tasks":[["has-text","ADVERTISEMENTS"]]}]]}', '{"selector":".jeg_block_heading","tasks":[["has",{"selector":"> .jeg_block_title > span","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"div.sidebar h5","tasks":[["has",{"selector":"> span","tasks":[["has-text","Ads"]]}]]}' ], [ '{"selector":".heading","tasks":[["has",{"selector":"> span","tasks":[["has-text","Advt"]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> a span","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"div[id^=\\"AS_O_\\"] > div","tasks":[["has",{"selector":"> div > a > div > h5","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":".widget","tasks":[["has",{"selector":"> .widget--title > h2","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> .box_header","tasks":[["has-text","Advertisements"]]}]]}' ], [ '{"selector":".single_post_content","tasks":[["has",{"selector":"> h2 > span > a","tasks":[["has-text","ADS"]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> div > a > div > p","tasks":[["has-text","Ad:"]]}]]}', '{"selector":"div","tasks":[["has",{"selector":"> div > div > a > div > div > p","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> .heading > span","tasks":[["has-text","Advt."]]}]]}' ], [ '{"selector":"div.wrapper-sticky div","tasks":[["has",{"selector":"> div.section-heading > span","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"div[id*=\\"_O_\\"] div","tasks":[["has",{"selector":"> div > div > a > div p","tasks":[["has-text","AD |"]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> span","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".single_sidebar","tasks":[["has",{"selector":"> h2 > span","tasks":[["has-text","advertisement"]]}]]}' ], [ '{"selector":".colombiaonesuccess > div","tasks":[["has",{"selector":"> div > div > a span","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"div[id*=\\"_O_\\"] div","tasks":[["has",{"selector":"div-gpt-ad > div > div > a > div *","tasks":[["has-text","Ad:"]]}]]}' ], [ '{"selector":".widget-title","tasks":[["has-text","Advertisment"]]}' ], [ '{"selector":"center","tasks":[["has-text","ADVERTISEMENT"]]}' ], [ '{"selector":"div[id^=\\"AS_O_LHS\\"] > div","tasks":[["has",{"selector":"> div > a > div > h5","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"center","tasks":[["has-text","Advertisement"]]}' ], [ '{"selector":".primary-sidebar-widget","tasks":[["has",{"selector":"> .section-heading > .h-text","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".sidebar","tasks":[["has",{"selector":"> h5 > span","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".sidebar-widget","tasks":[["has",{"selector":"> .widget-head > .title","tasks":[["has-text","Ads"]]}]]}' ], [ '{"selector":".my-4","tasks":[["has",{"selector":"> h5","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> .section-title > h4","tasks":[["has-text","ADVERTISEMENT"]]}]]}' ], [ '{"selector":"span","tasks":[["has-text","Advertisement"]]}' ], [ '{"selector":".colombiaonesuccess > div","tasks":[["has",{"selector":"> div > div > a h5","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":".sidebar-widget","tasks":[["has",{"selector":"> .widget-head > .title","tasks":[["has-text","ADS"]]}]]}' ], [ '{"selector":".fashion_technology_area div","tasks":[["has",{"selector":"> div > h2 span","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"section.widget_text","tasks":[["has",{"selector":"div > h4.widget-title","tasks":[["has-text","Advertisment"]]}]]}' ], [ '{"selector":"div[id*=\\"_O_LHS_\\"] > div","tasks":[["has",{"selector":"> div > div > a > div > h5","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"figure","tasks":[["has",{"selector":"> figcaption","tasks":[["has-text","ADVERTISEMENT"]]}]]}' ], [ '{"selector":".wp-block-group","tasks":[["has",{"selector":"> div > .wp-block-heading","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".elementor-widget-heading","tasks":[["has",{"selector":"> div > h2","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"div[id^=\\"AS_O_LHS_\\"] > div","tasks":[["has",{"selector":"> div > div > a > div > p","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"div[id^=\\"AS_O_\\"] div","tasks":[["has",{"selector":"> div > a > div h5","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":"#main-content .main-carousel","tasks":[["has",{"selector":"> .title-wrapper > h2 > span","tasks":[["has-text","Advertisement"]]}]]}', '{"selector":"#main-content .theiaStickySidebar","tasks":[["has",{"selector":"> div > .title-wrapper > h2 span","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"aside","tasks":[["has",{"selector":"> h3 > span","tasks":[["has-text","Advt"]]}]]}' ], [ '{"selector":"div[style]","tasks":[["has",{"selector":"> div","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"h4.td-block-title","tasks":[["has",{"selector":"> span","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".colombiaonesuccess > div","tasks":[["has",{"selector":"> div > div a p","tasks":[["has-text","Ad:"]]}]]}' ], [ '{"selector":"","tasks":[["has",{"selector":"> h4","tasks":[["has-text","Advertise"]]}]]}' ], [ '{"selector":"div[id*=\\"_O_\\"] div","tasks":[["has",{"selector":"> div > div > a > div *","tasks":[["has-text","Ad:"]]}]]}' ], [ '{"selector":".sidebar-widget","tasks":[["has",{"selector":"h4","tasks":[["has-text","Ads"]]}]]}' ], [ '{"selector":".sidebar-widget > h2","tasks":[["has-text","Advertisement"]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> .heading > span","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"div[id*=\\"_O_\\"] > div","tasks":[["has",{"selector":"> div > div > a > div > h4 > span","tasks":[["has-text","Ad:"]]}]]}', '{"selector":"div[id*=\\"_O_\\"] > div","tasks":[["has",{"selector":"> div > div > a > div > p","tasks":[["has-text","Ad:"]]}]]}' ], [ '{"selector":"[id^=\\"AS_O_\\"] div","tasks":[["has",{"selector":"> div > a > div > h5","tasks":[["has-text","Ad |"]]}]]}' ], [ '{"selector":".align_cent","tasks":[["has-text","Advertise"]]}' ], [ '{"selector":".widget_custom_html","tasks":[["has",{"selector":"> div > div > h3","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".sidebar h2","tasks":[["has-text","Advertisement"]]}' ], [ '{"selector":"div","tasks":[["has",{"selector":"> h3","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":".sub_new b","tasks":[["has-text","Ads"]]}' ], [ '{"selector":".card","tasks":[["has",{"selector":"> .card-header","tasks":[["has-text","Advertisment"]]}]]}' ], [ '{"selector":".colombiaonesuccess div","tasks":[["has",{"selector":"> div > div > a > h5","tasks":[["has-text","Ad:"]]}]]}', '{"selector":".colombiaonesuccess div","tasks":[["has",{"selector":"> div > div a > p","tasks":[["has-text","Ad:"]]}]]}' ], [ '{"selector":".wpb_wrapper","tasks":[["has",{"selector":"> div > .sc_item_title","tasks":[["has-text","Advertisement"]]}]]}' ], [ '{"selector":"h2","tasks":[["has-text","Advertisement"]]}' ] ],
        hostnamesMap: s,
        entitiesMap: e,
        exceptionsMap: t
    });
}();