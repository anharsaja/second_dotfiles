"use strict";

!function() {
    const s = new Map([ [ "extreme-down.art", 0 ], [ "extreme-down.boats", 0 ], [ "torrent9.fm", [ 0, 44 ] ], [ "extreme-down.moe", 0 ], [ "gktorrents.org", [ 0, 44 ] ], [ "gktorrent.sh", [ 0, 44 ] ], [ "t911.tv", [ 0, 44 ] ], [ "2ememain.be", 1 ], [ "krefel.be", 2 ], [ "mediamarkt.be", 3 ], [ "tv5unis.ca", 4 ], [ "20min.ch", 5 ], [ "macg.co", 6 ], [ "igen.fr", 6 ], [ "watchgeneration.fr", 6 ], [ "11anim.com", 7 ], [ "3oloum.com", 8 ], [ "ahladalil.com", 8 ], [ "ahlamontada.com", 8 ], [ "alamontada.com", 8 ], [ "arabepro.com", 8 ], [ "easyforumpro.com", 8 ], [ "fcmulhousefans.com", 8 ], [ "forum2jeux.com", 8 ], [ "forumactif.com", 8 ], [ "forums-actifs.com", 8 ], [ "gid3an.com", 8 ], [ "lebonforum.com", 8 ], [ "own0.com", 8 ], [ "passionmilitaria.com", 8 ], [ "sorcieremonique.com", 8 ], [ "walkingdead-rpg.com", 8 ], [ "yoo7.com", 8 ], [ "ze-43eme.com", 8 ], [ "forumactif.fr", 8 ], [ "forumpro.fr", 8 ], [ "superforum.fr", 8 ], [ "1fr1.net", 8 ], [ "banouta.net", 8 ], [ "forumalgerie.net", 8 ], [ "jordanforum.net", 8 ], [ "orizzontescuolaforum.net", 8 ], [ "syriaforums.net", 8 ], [ "7olm.org", 8 ], [ "forumactif.org", 8 ], [ "galoppourlavie.org", 8 ], [ "algerie-eco.com", 9 ], [ "aliexpress.com", 10 ], [ "aliexpress.us", 10 ], [ "android-mt.com", 11 ], [ "aufeminin.com", 12 ], [ "automobile-propre.com", 13 ], [ "blogdumoderateur.com", 14 ], [ "cdiscount.com", 15 ], [ "commentcamarche.com", 16 ], [ "commentcamarche.net", 16 ], [ "distrowatch.com", 17 ], [ "forumconstruire.com", 18 ], [ "futura-sciences.com", 19 ], [ "ici-londres.com", 20 ], [ "jeanmarcmorandini.com", 21 ], [ "jeuxvideo.com", 22 ], [ "konbini.com", 23 ], [ "laprovence.com", 24 ], [ "libhunt.com", 25 ], [ "linfoweb.com", 26 ], [ "maison-islam.com", 27 ], [ "narcity.com", 28 ], [ "nextinpact.com", 29 ], [ "nicematin.com", 30 ], [ "numerama.com", 31 ], [ "ouedkniss.com", 32 ], [ "phonandroid.com", 33 ], [ "qwant.com", 34 ], [ "scan-manga.com", 35 ], [ "sketchucation.com", 36 ], [ "sookbtp.com", 37 ], [ "starbike.com", 38 ], [ "tourmag.com", 39 ], [ "tsa-algerie.com", 40 ], [ "twitter.com", 41 ], [ "voyageforum.com", 42 ], [ "zataz.com", 43 ], [ "allocine.fr", 45 ], [ "businessinsider.fr", 46 ], [ "cnetfrance.fr", 47 ], [ "cuisineactuelle.fr", 48 ], [ "ebay.fr", 49 ], [ "gameblog.fr", 50 ], [ "h2-mobile.fr", 51 ], [ "forum.hardware.fr", 52 ], [ "hitek.fr", 53 ], [ "iphonesoft.fr", 54 ], [ "lalsace.fr", 55 ], [ "latribune.fr", 56 ], [ "leboncoin.fr", 57 ], [ "lesechos.fr", 58 ], [ "mariefrance.fr", 59 ], [ "minutesports.fr", 60 ], [ "moneyvox.fr", 61 ], [ "on-mag.fr", 62 ], [ "orange.fr", 63 ], [ "actu.orange.fr", 64 ], [ "radio.fr", 65 ], [ "santemagazine.fr", 66 ], [ "top.gg", 67 ], [ "discordbots.org", 67 ], [ "korben.info", 68 ], [ "macommune.info", 69 ], [ "lesfrontaliers.lu", 70 ], [ "lessentiel.lu", 71 ], [ "ccm.net", 72 ], [ "cyclismactu.net", 73 ], [ "emugen.net", 74 ], [ "tennisactu.net", 75 ], [ "thesiteoueb.net", 76 ], [ "extreme-down.ninja", 77 ], [ "temp-mail.org", 78 ], [ "zoneseries.stream", 79 ], [ "ici.tou.tv", 80 ] ]), e = new Map(void 0), t = new Map(void 0);
    self.proceduralImports = self.proceduralImports || [], self.proceduralImports.push({
        argsList: [ [ '{"selector":"a","tasks":[["has-text","/ANONYME|Anonyme|anonyme|PREMIUM|Premium|RAPIDE|Rapide|Usenet|VPN|Vpn/"]]}' ], [ '{"selector":".hz-Listing--list-item","tasks":[["has",{"selector":".hz-Listing-priority","tasks":[["has-text","Pub au top"]]}]]}' ], [ '{"selector":"div[class^=\\"Flex-styled__StyledFlex-\\"]","tasks":[["has",{"selector":"h3","tasks":[["has-text","Produits sponsorisés"]]}]]}' ], [ '{"selector":"[data-index-number]","tasks":[["has-text","Sponsorisé"]]}' ], [ '{"selector":"div[style=\\"min-height: 0px;\\"] > div[class^=\\"css-\\"] > div[class^=\\"css-\\"] > div[data-m32-ad]","tasks":[["upward",2]]}' ], [ '{"selector":".clusterTop","tasks":[["has",{"selector":".teaser","tasks":[["has",{"selector":"h3","tasks":[["has-text","Paid Post"]]}]]}]]}' ], [ '{"selector":"article","tasks":[["has",{"selector":".sidebar-artitle","tasks":[["has-text","/📣|📌/"]]}]]}', '{"selector":"article","tasks":[["has",{"selector":"h2","tasks":[["has-text","/📣|📌/"]]}]]}' ], [ '{"selector":"div[class^=\\"pub\\"]","tasks":[["has-text","adsbygoogle"]]}' ], [ '{"selector":".post","tasks":[["has",{"selector":".postprofile","tasks":[["has-text","Contenu sponsorisé"]]}]]}' ], [ '{"selector":".td_block_wrap","tasks":[["has",{"selector":".block-title","tasks":[["has-text","sponsorisés"]]}]]}' ], [ '{"selector":"._2FypS","tasks":[["has",{"selector":"._1rKqn","tasks":[["has-text","/AD|Annonce|إعلان/"]]}]]}', '{"selector":".search-item-card-wrapper-gallery","tasks":[["has",{"selector":"[class^=\\"multi--ax\\"]","tasks":[["has-text","/AD|Annonce|إعلان/"]]}]]}' ], [ '{"selector":".boutonlink","tasks":[["has",{"selector":"a","tasks":[["has-text","/VPN|rencontre/"]]}]]}', '{"selector":".bp-fin","tasks":[["has",{"selector":"a","tasks":[["has-text","/VPN|rencontre/"]]}]]}' ], [ '{"selector":".af-album-ctn > div.cols-right-album > div.ad-container","tasks":[["upward",1]]}' ], [ '{"selector":".g-bg-gray-light-v4 > .text-center","tasks":[["has-text","/^Publicité$/"]]}' ], [ '{"selector":".breve","tasks":[["has",{"selector":".breve-info","tasks":[["has-text","Sponsorisé"]]}]]}' ], [ '{"selector":".o-block","tasks":[["has",{"selector":".o-block__content:has(.c-sponsoredMentions)"}]]}', '{"selector":"li","tasks":[["has",{"selector":".prdtBlocInline:has(.c-sponsoredMentions)"}]]}' ], [ '{"selector":".ccm_list_catch__item","tasks":[["has-text","Annonces"]]}' ], [ '{"selector":".News1","tasks":[["has",{"selector":"td","tasks":[["has-text","Sponsored"]]}]]}' ], [ '{"selector":".discussion_box > .post_simple_contener","tasks":[["has",{"selector":"> .post_simple > .postsimple_post_cell > .postsimple_head_cell > .postsimple_poster_info > div > .postsimple_pseudo > a > span","tasks":[["has-text","/^Auto-promo$/"]]}]]}' ], [ '{"selector":".postcontainer","tasks":[["has",{"selector":".username","tasks":[["has-text","Publicité"]]}]]}' ], [ '{"selector":".articles_list_item","tasks":[["has",{"selector":".category","tasks":[["has-text","Sponsorisé"]]}]]}' ], [ '{"selector":"#node-story > h2.story_subtitle_title","tasks":[["has-text","/^Ailleurs sur le web$/"]]}' ], [ '{"selector":".anchorMiddleOne","tasks":[["has",{"selector":".badge","tasks":[["has-text","Sponsorisé"]]}]]}', '{"selector":".anchorWrapper","tasks":[["has",{"selector":".cardHorizontalList__footer","tasks":[["has-text","Sponsorisé"]]}]]}', '{"selector":".card","tasks":[["has",{"selector":".badge","tasks":[["has-text","Sponsorisé"]]}]]}', '{"selector":".item-small-pres","tasks":[["has",{"selector":"a:has(.sponsored-prefix)"}]]}', '{"selector":"li","tasks":[["has",{"selector":"a:has(.sponsored-prefix)"}]]}' ], [ '{"selector":".posts-list-row > .posts-list-row-item > .card-item > .ad-wrapper","tasks":[["upward",2]]}', '{"selector":".posts-list-row > .posts-list-row-item > .card-item > div[data-ad-unit-path]","tasks":[["upward",2]]}' ], [ '{"selector":".article-list > .article-list__item","tasks":[["has",{"selector":"> .article-list__text-wrapper > a > .article-list__label","tasks":[["has-text","/^Contenu sponsorisé$/"]]}]]}' ], [ '{"selector":".boxed","tasks":[["has",{"selector":".tag","tasks":[["has-text","Sponsored"]]}]]}', '{"selector":".repo-component","tasks":[["has",{"selector":"label","tasks":[["has-text","sponsored"]]}]]}' ], [ '{"selector":".isnotmobi","tasks":[["has",{"selector":"a","tasks":[["has-text","sponsorisé"]]}]]}', '{"selector":"tbody","tasks":[["has",{"selector":"i","tasks":[["has-text","sponsorisé"]]}]]}' ], [ '{"selector":"aside","tasks":[["has",{"selector":".widget-title","tasks":[["has-text","Publicité"]]}]]}' ], [ '{"selector":".article-thumbnail","tasks":[["has",{"selector":"a","tasks":[["has-text","/Sponsored|sponsorisé/"]]}]]}' ], [ '{"selector":"app-home-item","tasks":[["has",{"selector":".article:has(.sponsored)"}]]}' ], [ '{"selector":"section","tasks":[["has",{"selector":".brand","tasks":[["has-text","sponsorisé"]]}]]}' ], [ '{"selector":".post-card","tasks":[["has",{"selector":"span","tasks":[["has-text","sponso"]]}]]}' ], [ '{"selector":".container","tasks":[["has",{"selector":".o-section-heading","tasks":[["has-text","/Sponsored|Sponsorisées|Stores à la une/"]]}]]}' ], [ '{"selector":"li","tasks":[["has",{"selector":"a","tasks":[["has-text","sponso"]]}]]}' ], [ '{"selector":".results-container > div.result","tasks":[["has",{"selector":"> div.url > span.info","tasks":[["has-text","Annonce"]]}]]}' ], [ '{"selector":"body > #all > style","action":["remove",""],"tasks":[["has-text","#ban_center"]]}' ], [ '{"selector":".post","tasks":[["has",{"selector":".postprofile","tasks":[["has",{"selector":"strong","tasks":[["has-text","Ad Machine"]]}]]}]]}' ], [ '{"selector":".owl-item","tasks":[["has",{"selector":"figure:has(img[src^=\\"publicites/\\"])"}]]}' ], [ '{"selector":".post.has-profile","tasks":[["has",{"selector":".postbody:has(.adsbygoogle)"}]]}' ], [ '{"selector":".wm-module","tasks":[["has-text","Contenu sponsorisé"]]}' ], [ '{"selector":".jwpv-desktop","tasks":[["has-text","Publicité"]]}' ], [ '{"selector":"[data-testid=\\"tweet\\"]","tasks":[["has-text","Sponsorisé"]]}' ], [ '{"selector":"div[style*=\\"width: 300px\\"]","tasks":[["has-text","/Publicité|Publicités/"]]}', '{"selector":"table[class=\\"post\\"]","tasks":[["has",{"selector":"tbody","tasks":[["has-text","/annonces|annonceurs/"]]}]]}' ], [ '{"selector":".custom-sidebar","tasks":[["has",{"selector":"h3","tasks":[["has-text","/Partenaires|Publicité/"]]}]]}' ], [ '{"selector":"div[style]","tasks":[["has-text","/ANONYME|Anonyme|anonyme|Usenet|VPN|Vpn/"]]}', '{"selector":"table[style]","tasks":[["has-text","/ANONYME|Anonyme|anonyme|Usenet|VPN|Vpn/"]]}' ], [ '{"selector":".news-card","tasks":[["has-text","Sponsorisé"]]}' ], [ '{"selector":".post-nonfeatured","tasks":[["has",{"selector":".title-studio","tasks":[["has-text","Contenu Sponsorisé"]]}]]}' ], [ '{"selector":".riverPost","tasks":[["has",{"selector":".tag-desktop","tasks":[["has-text","Publicité"]]}]]}' ], [ '{"selector":"[class$=\\"Container-right\\"] > div.m-top-md","tasks":[["has",{"selector":"> div > span","tasks":[["has-text","Publicité"]]}]]}' ], [ '{"selector":"[id^=\\"nume_html_\\"]","tasks":[["has",{"selector":".mfe-card-group","tasks":[["has",{"selector":".mfe-card-group-title","tasks":[["has-text","sponsorisées"]]}]]}]]}', '{"selector":"[id^=\\"nume_html_\\"]","tasks":[["has",{"selector":".mfe-header","tasks":[["has",{"selector":".mfe-pull-left","tasks":[["has-text","sponsorisés"]]}]]}]]}' ], [ '{"selector":".highlight-item","tasks":[["has",{"selector":".word-wrapper","tasks":[["has-text","sponso"]]}]]}', '{"selector":".item.full.gameblog","tasks":[["has",{"selector":".post-details","tasks":[["has-text","sponsorisé"]]}]]}' ], [ '{"selector":"#main-container .blog__content","tasks":[["has",{"selector":"> .title-wrap--pr > h3","tasks":[["has-text","Annonces"]]}]]}' ], [ '{"selector":".main ~ table.messagetable > tbody > tr.message div[id^=\\"div-gpt-ad-\\"]","tasks":[["upward","table.messagetable"]]}' ], [ '{"selector":".news-bloc","tasks":[["has",{"selector":".article-type","tasks":[["has-text","Sponsorisé"]]}]]}' ], [ '{"selector":"article","tasks":[["has",{"selector":".date","tasks":[["has-text","Sponso"]]}]]}' ], [ '{"selector":"#blockPubGalleryWrapper","action":["remove",""]}' ], [ '{"selector":".article-wrapper","tasks":[["has",{"selector":".subheading","tasks":[["has-text","Partenaire"]]}]]}', '{"selector":".homepage-section.supplement-section","tasks":[["has",{"selector":"span","tasks":[["has-text","Partenaires"]]}]]}', '{"selector":".sticky-sidebar-block > div.bloc","tasks":[["has-text","Annonces légales"]]}' ], [ '{"selector":"#mainContent > div > div#lht-space-ad","tasks":[["upward",1]]}', '{"selector":".undefined","tasks":[["has-text","Sponsorisé"]]}', '{"selector":"a[data-test-id]","tasks":[["has",{"selector":"[class]","tasks":[["has-text","/À la une|Sponsorisé|Urgent/"]]}]]}', '{"selector":"a[data-test-id]","tasks":[["has",{"selector":"[class]","tasks":[["has-text","Sponsorisé"]]}]]}' ], [ '{"selector":"div[id^=\\"custom-gpt-\\"]","tasks":[["upward","div"]]}' ], [ '{"selector":".post > aside.sidebar-before-comments","tasks":[["has",{"selector":"> [class=\\"default-title\\"] > span","tasks":[["has-text","/Ailleurs sur le web|A lire sur le même sujet/"]]}]]}' ], [ '{"selector":"div[align=\\"center\\"]","tasks":[["has-text","PUBLICITÉ"]]}' ], [ '{"selector":".habpage","action":["remove",""]}' ], [ '{"selector":".uk-margin-remove-last-child","tasks":[["has",{"selector":"div","tasks":[["has",{"selector":"span","tasks":[["has-text","PUBLICITÉ"]]}]]}]]}' ], [ '{"selector":".container-fluid > .mt-1 > h3","tasks":[["has-text","/^Liens commerciaux$/"]]}' ], [ '{"selector":".col-xl-4 > .align-items-center > .text-right > span","tasks":[["has-text","/^PUBLICITÉ$/"]]}' ], [ '{"selector":"div[class^=\\"sc-\\"] > div[class^=\\"sc-\\"] > div[id^=\\"RAD_\\"]","tasks":[["upward",2]]}' ], [ '{"selector":"[data-identifier]","tasks":[["has",{"selector":"div:has(.sponsor-color)"}]]}' ], [ '{"selector":".bot-card","tasks":[["has",{"selector":".lib","tasks":[["has-text","Promoted"]]}]]}', '{"selector":".bot-card","tasks":[["has",{"selector":".lib:has(img)"}]]}' ], [ '{"selector":".alderaan-sous-article","tasks":[["has",{"selector":"span","tasks":[["has-text","publicité"]]}]]}', '{"selector":".app-main > article.post > div:not([class^=\\"entry-\\"]):not([class^=\\"comments-\\"])","tasks":[["has-text","Article sponsorisé"]]}', '{"selector":"[class*=\\"sous-categories\\"]","tasks":[["has-text","Lien partenaire"]]}', '{"selector":"div > hr + article.type-post","tasks":[["has",{"selector":"header:has(a[href^=\\"http://bit.ly/\\"])"}]]}', '{"selector":"div > hr + article.type-post","tasks":[["has",{"selector":"header:has(a[href^=\\"http://bitly.com/\\"])"}]]}' ], [ '{"selector":".widget_article","tasks":[["has",{"selector":".title_widget","tasks":[["has-text","/PUBLI INFO|Publi-info/"]]}]]}' ], [ '{"selector":"#fullad-active","action":["remove",""]}' ], [ '{"selector":"aside","tasks":[["has",{"selector":"div + span","tasks":[["has-text","Publicité"]]}]]}' ], [ '{"selector":".ccm_list_catch__item","tasks":[["has-text","Sponsored"]]}' ], [ '{"selector":"#side > div[style^=\\"float\\"]","tasks":[["has",{"selector":"> div","tasks":[["has-text","/^Publicité$/"]]}]]}', '{"selector":"#side > div[style^=\\"float\\"]","tasks":[["has",{"selector":"> h2","tasks":[["has-text","/^Partenaires$/"]]}]]}' ], [ '{"selector":".l-section","tasks":[["has",{"selector":"> div.l-section-h > div.g-cols > div > div.vc_column-inner > div.wpb_wrapper > div.w-separator > div.w-separator-h > h6 > span","tasks":[["has-text","Publicité"]]}]]}' ], [ '{"selector":".main-right > h2","tasks":[["has-text","Partenaires"]]}' ], [ '{"selector":".panel","tasks":[["has",{"selector":".panel-heading","tasks":[["has",{"selector":".panel-title","tasks":[["has-text","Publicité"]]}]]}]]}' ], [ '{"selector":"#sidebar-right > div.blockbox","tasks":[["has",{"selector":"> div.sidetitle > i","tasks":[["has-text","Annonces"]]}]]}' ], [ '{"selector":"li","tasks":[["has",{"selector":".inboxSenderEmail","tasks":[["has-text","AD | Temp Number"]]}]]}' ], [ '{"selector":"a[href=\\"/streaming-video.html\\"]","action":["remove",""]}' ], [ '{"selector":"section > div[class]","tasks":[["has",{"selector":"> p","tasks":[["has-text","/^Publicité$/"]]}]]}' ] ],
        hostnamesMap: s,
        entitiesMap: e,
        exceptionsMap: t
    });
}();