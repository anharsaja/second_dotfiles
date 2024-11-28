"use strict";

(() => {
    const e = function() {
        const e = {}, o = [ [ "scroll" ], [ "/^(contextmenu|copy)$/" ], [ "blur" ], [ "copy" ], [ "contextmenu" ], [ "/^(?:contextmenu|copy|selectstart)$/" ], [ "/^(?:contextmenu|copy)$/", "preventDefault" ], [ "/^(?:contextmenu|keydown)$/" ], [ "DOMContentLoaded", ".js-popup-adblock" ], [ "/^(?:contextmenu|copy|keydown)$/" ], [ "mouseout", "pop" ], [ "/^(?:keyup|keydown)$/" ], [ "keydown" ], [ "keydown", "disable_in_input" ], [ "keydown", "preventDefault" ], [ "/contextmenu|keydown|keyup|copy/" ], [ "copy", "getSelection" ], [ "", "t.preventDefault" ], [ "copy", "replaceCopiedText" ], [ "/^(contextmenu|copy|dragstart|selectstart)$/" ], [ "", "ads" ], [ "/contextmenu|selectstart|copy/" ], [ "/contextmenu|copy|keydown/" ], [ "/contextmenu|select|copy/" ], [ "/^(contextmenu|keydown)$/" ], [ "contextmenu", "a" ], [ "mouseleave" ], [ "/^(mouseout|mouseleave)$/" ], [ "/contextmenu|selectstart/" ], [ "dragstart|keydown/" ], [ "/contextmenu|keydown|dragstart/" ], [ "", "_0x" ], [ "contextmenu", "preventDefault" ], [ "copy", "preventDefault" ], [ "", "adtoniq" ], [ "/^(?:contextmenu|copy|keydown|mousedown)$/" ], [ "/contextmenu|keydown/" ], [ "devtoolschange" ], [ "/contextmenu|copy/" ], [ "", "mdp" ], [ "/blur|mousedown|mouseenter|mouseleave/" ], [ "/contextmenu|cut|copy|paste/" ], [ "/contextmenu|mousedown/" ], [ "mouseout" ], [ "/contextmenu|copy|selectstart/" ], [ "", "0x" ], [ "/^(?:contextmenu|dragstart|selectstart)$/" ], [ "/^(?:contextmenu|copy)$/" ], [ "/dragstart|keyup|keydown/" ], [ "/keyup|keydown/", "wpcc" ], [ "/contextmenu|cut|copy|keydown/" ], [ "", "undefined" ], [ "/contextmenu|selectstart|copy|dragstart/" ], [ "/copy|dragstart/" ], [ "/copy|contextmenu/" ], [ "error" ], [ "dragstart" ], [ "", "AdB" ], [ "selectionchange", "quill.emitter" ], [ "/contextmenu|selectstart|select|copy|dragstart/" ], [ "load", "adLazy" ], [ "copy", 'jQuery!=="undefined"' ], [ "copy", "[native code]" ], [ "selectstart" ], [ "/^(?:copy|paste)$/", "undefined" ], [ "/copy|keydown/" ], [ "/copy|cut|selectstart/" ], [ "/keydown|keyup/", "keyCode" ], [ "keydown", "disabledEvent" ], [ "", "Key" ], [ "/copy|cut|paste|selectstart/" ], [ "/contextmenu|dragstart|keydown/", "event.dispatch.apply" ], [ "beforepaste" ], [ "", "keyCode" ], [ "DOMContentLoaded", "rprw" ], [ "", "key" ], [ "", "ctrlKey" ], [ "contextmenu", "event.triggered" ], [ "copy", "pagelink" ], [ "/keydown|mousedown/" ], [ "copy", "Source" ], [ "mouseleave", "scribd_ad" ], [ "", "login" ], [ "/contextmenu|copy|drag|dragstart/" ], [ "/contextmenu|keydown|keypress|copy/" ], [ "", "blockFuckingEverything" ], [ "mouseout", "openLayer" ], [ "/contextmenu|keydown/", "preventDefault" ], [ "mousedown", "dispatch" ], [ "/contextmenu|mousedown/", 'return"undefined"' ], [ "DOMContentLoaded", "ready" ], [ "keydown", "disabledKeys" ], [ "DOMContentLoaded", "load" ], [ "contextmenu", "_0x" ], [ "keydown", "keyCode" ], [ "contextmenu", "undefined" ], [ "contextmenu", "[native code]" ], [ "/contextmenu|keyup|keydown/" ], [ "mouseout", "cookie" ], [ "DOMContentLoaded", "ads" ], [ "rocket-DOMContentLoaded", "bind(document)" ], [ "mouseout", "innerHeight" ], [ "/^(contextmenu|mousedown|keydown)$/", "preventDefault" ], [ "error", "browser-plugin" ], [ "/select|copy|contextmenu/" ], [ "/cut|copy|paste|contextmenu/" ], [ "keydown", "123" ], [ "mousedown", "undefined", "elements", "body" ], [ "afterKeydown" ], [ "keydown", "void" ], [ "copy", "void" ], [ "load", "ad-wrap" ], [ "/contextmenu|selectstart|dragstart/" ] ], t = new Map([ [ "nationalgeographic.com", [ 0, 4 ] ], [ "artsy.net", 0 ], [ "boards.net", 0 ], [ "freeforums.net", 0 ], [ "proboards.com", 0 ], [ "s0urce.io", 1 ], [ "filefox.cc", 2 ], [ "uol.com.br", 3 ], [ "gazetadopovo.com.br", 3 ], [ "indiatimes.com", 3 ], [ "odiario.com", 3 ], [ "otempo.com.br", 3 ], [ "estadao.com.br", 3 ], [ "bacaan.id", 3 ], [ "ofuxico.com.br", 3 ], [ "pentruea.com", 3 ], [ "ciberduvidas.iscte-iul.pt", 3 ], [ "globo.com", 3 ], [ "citas.in", 3 ], [ "blitzrechner.de", 3 ], [ "emailfake.com", 3 ], [ "lyrical-nonsense.com", 3 ], [ "mediafax.ro", 3 ], [ "economica.net", 3 ], [ "polsatnews.pl", 3 ], [ "novagente.pt", 3 ], [ "arlinadzgn.com", 3 ], [ "bilibili.com", [ 3, 58 ] ], [ "nowcoder.com", 3 ], [ "libertatea.ro", 3 ], [ "erinsakura.com", 3 ], [ "yuque.com", 3 ], [ "deepl.com", 3 ], [ "digi24.ro", 3 ], [ "onna.kr", 3 ], [ "ziare.com", 3 ], [ "agrointel.ro", 3 ], [ "skyozora.com", 3 ], [ "milenio.com", 3 ], [ "veneto.info", 3 ], [ "edurev.in", 3 ], [ "transinfo.pl", 3 ], [ "news.17173.com", 3 ], [ "chowhound.com", 3 ], [ "explore.com", 3 ], [ "foodie.com", 3 ], [ "foodrepublic.com", 3 ], [ "glam.com", 3 ], [ "grunge.com", 3 ], [ "healthdigest.com", 3 ], [ "housedigest.com", 3 ], [ "looper.com", 3 ], [ "mashed.com", 3 ], [ "moneydigest.com", 3 ], [ "nickiswift.com", 3 ], [ "outdoorguide.com", 3 ], [ "slashfilm.com", 3 ], [ "slashgear.com", 3 ], [ "tastingtable.com", 3 ], [ "thedailymeal.com", 3 ], [ "thelist.com", 3 ], [ "women.com", 3 ], [ "wrestlinginc.com", 3 ], [ "abril.com.br", 3 ], [ "sarthaks.com", 3 ], [ "delfi.lt", 3 ], [ "pendulumedu.com", 3 ], [ "bloomberglinea.com", 3 ], [ "bloomberglinea.com.br", 3 ], [ "peliculas24.me", 4 ], [ "roztoczanskipn.pl", 4 ], [ "economictimes.indiatimes.com", 4 ], [ "dzwignice.info", 4 ], [ "script-stack.com", [ 4, 39 ] ], [ "mio.to", 4 ], [ "husseinezzat.com", [ 4, 12 ] ], [ "taxo-acc.pl", 4 ], [ "portalwrc.pl", 4 ], [ "lublin.eu", 4 ], [ "onlystream.tv", 4 ], [ "dddance.party", 4 ], [ "kapiert.de", 4 ], [ "hitcena.pl", 4 ], [ "tv-asahi.co.jp", 4 ], [ "digitalfernsehen.de", 4 ], [ "suzylu.co.uk", 4 ], [ "music.apple.com", 4 ], [ "skidrowcodex.net", 4 ], [ "ds2play.com", 4 ], [ "ds2video.com", 4 ], [ "d0o0d.com", 4 ], [ "vsco.co", 4 ], [ "festival-cannes.com", 4 ], [ "strcloud.in", 4 ], [ "ufret.jp", 4 ], [ "thenekodark.com", 4 ], [ "artesacro.org", 4 ], [ "poli-vsp.ru", 4 ], [ "polyvsp.ru", 4 ], [ "ananweb.jp", 4 ], [ "daimangajiten.com", 4 ], [ "digital.lasegunda.com", 4 ], [ "hibiki-radio.jp", 4 ], [ "garyfeinbergphotography.com", 4 ], [ "clubulbebelusilor.ro", 4 ], [ "gplinks.co", 4 ], [ "ifdreamscametrue.com", 4 ], [ "marksandspencer.com", 4 ], [ "stowarzyszenie-impuls.eu", 4 ], [ "viveretenerife.com", 4 ], [ "oferty.dsautomobiles.pl", 4 ], [ "wzamrani.com", 4 ], [ "citroen.pl", 4 ], [ "peugeot.pl", 4 ], [ "wirtualnyspac3r.pl", 4 ], [ "antena3.com", 4 ], [ "lasexta.com", 4 ], [ "pashplus.jp", 4 ], [ "upvideo.to", 4 ], [ "kpopsea.com", 4 ], [ "cnki.net", 4 ], [ "wpchen.net", 4 ], [ "hongxiu.com", 4 ], [ "readnovel.com", 4 ], [ "uihtm.com", 4 ], [ "uslsoftware.com", 4 ], [ "rule34hentai.net", 4 ], [ "cloudemb.com", 4 ], [ "news24.jp", 4 ], [ "gaminplay.com", 4 ], [ "njjzxl.net", 4 ], [ "voe.sx", [ 4, 67 ] ], [ "voe-unblock.com", [ 4, 67 ] ], [ "scrolller.com", 4 ], [ "cocomanga.com", 4 ], [ "nusantararom.org", [ 4, 73 ] ], [ "virpe.cc", 4 ], [ "pobre.tv", [ 4, 73 ] ], [ "ukrainashop.com", 4 ], [ "celtadigital.com", 4 ], [ "matzoo.pl", 4 ], [ "asia2tv.cn", 4 ], [ "labs.j-novel.club", 4 ], [ "turbo1.co", 4 ], [ "futbollatam.com", 4 ], [ "read.amazon.com", 4 ], [ "box-manga.com", 4 ], [ "the-masters-voice.com", 4 ], [ "hemas.pl", 4 ], [ "accgroup.vn", 4 ], [ "btvnovinite.bg", 4 ], [ "allcryptoz.net", 4 ], [ "crewbase.net", 4 ], [ "crewus.net", 4 ], [ "shinbhu.net", 4 ], [ "shinchu.net", 4 ], [ "thumb8.net", 4 ], [ "thumb9.net", 4 ], [ "topcryptoz.net", 4 ], [ "uniqueten.net", 4 ], [ "ultraten.net", 4 ], [ "cloudcomputingtopics.net", 4 ], [ "bianity.net", 4 ], [ "coinsparty.com", 4 ], [ "postype.com", 4 ], [ "lofter.com", [ 4, 82 ] ], [ "hentaihaven.xxx", 4 ], [ "espn.com", 4 ], [ "4media.com", 4 ], [ "przegladpiaseczynski.pl", 4 ], [ "freewaysintl.com", 4 ], [ "cool-etv.net", 4 ], [ "j91.asia", 4 ], [ "sgd.de", 4 ], [ "dicasfinanceirasbr.com", 4 ], [ "dicasdevalor.net", 4 ], [ "dicasdefinancas.net", 4 ], [ "guiasaude.info", 4 ], [ "felizemforma.com", 4 ], [ "financasdeouro.com", 4 ], [ "mangaschan.net", 4 ], [ "sssscanlator.com", 4 ], [ "nightscans.net", 4 ], [ "cypherscans.xyz", 4 ], [ "twitchemotes.com", 4 ], [ "smartkhabrinews.com", 4 ], [ "streamvid.net", 4 ], [ "mkv-pastes.com", 4 ], [ "ipphone-warehouse.com", [ 4, 108, 109, 110 ] ], [ "freewatchtv.top", 4 ], [ "gdplayertv.top", 4 ], [ "mixstreams.top", 4 ], [ "tvfreemium.top", 4 ], [ "knshow.com", 5 ], [ "jusbrasil.com.br", 6 ], [ "tastycookery.com", 8 ], [ "techsupportall.com", 9 ], [ "lugarcerto.com.br", 10 ], [ "satcesc.com", 11 ], [ "animatedshows.to", 11 ], [ "miraculous.to", [ 11, 32 ] ], [ "jootc.com", 12 ], [ "operatorsekolahdbn.com", 12 ], [ "wawlist.com", 12 ], [ "teachoo.com", 12 ], [ "statelibrary.us", 13 ], [ "bigulnews.tv", 15 ], [ "news.chosun.com", 16 ], [ "androidweblog.com", 17 ], [ "cronista.com", 18 ], [ "fcportables.com", 19 ], [ "venea.net", 20 ], [ "uta-net.com", 21 ], [ "downloadtutorials.net", [ 21, 39 ] ], [ "blog.naver.com", 21 ], [ "myschool-eng.com", 22 ], [ "orangespotlight.com", 23 ], [ "th-world.com", [ 23, 45 ] ], [ "tepat.id", 24 ], [ "itvn.pl", 25 ], [ "itvnextra.pl", 25 ], [ "kuchniaplus.pl", 25 ], [ "miniminiplus.pl", 25 ], [ "player.pl", 25 ], [ "ttv.pl", 25 ], [ "tvn.pl", 25 ], [ "tvn24.pl", 25 ], [ "tvn24bis.pl", 25 ], [ "tvn7.pl", 25 ], [ "tvnfabula.pl", 25 ], [ "tvnstyle.pl", 25 ], [ "tvnturbo.pl", 25 ], [ "x-link.pl", 25 ], [ "x-news.pl", 25 ], [ "kickante.com.br", 26 ], [ "thestar.com.my", 26 ], [ "corriereadriatico.it", 26 ], [ "ilsole24ore.com", 26 ], [ "scribd.com", 27 ], [ "thehouseofportable.com", 28 ], [ "ntvspor.net", 28 ], [ "book.zhulang.com", 28 ], [ "tadu.com", 28 ], [ "selfstudyhistory.com", 29 ], [ "lokercirebon.com", 30 ], [ "avdelphi.com", 31 ], [ "maxstream.video", 32 ], [ "wpb.shueisha.co.jp", 32 ], [ "tiktok.com", 32 ], [ "vedantu.com", 32 ], [ "zsti.zsti.civ.pl", 32 ], [ "kathleenmemberhistory.com", [ 32, 68 ] ], [ "nonesnanking.com", [ 32, 68 ] ], [ "prefulfilloverdoor.com", [ 32, 68 ] ], [ "phenomenalityuniform.com", [ 32, 68 ] ], [ "nectareousoverelate.com", [ 32, 68 ] ], [ "timberwoodanotia.com", [ 32, 68 ] ], [ "strawberriesporail.com", [ 32, 68 ] ], [ "valeronevijao.com", [ 32, 68 ] ], [ "cigarlessarefy.com", [ 32, 68 ] ], [ "figeterpiazine.com", [ 32, 68 ] ], [ "yodelswartlike.com", [ 32, 68 ] ], [ "generatesnitrosate.com", [ 32, 68 ] ], [ "crownmakermacaronicism.com", [ 32, 68 ] ], [ "chromotypic.com", [ 32, 68 ] ], [ "gamoneinterrupted.com", [ 32, 68 ] ], [ "metagnathtuggers.com", [ 32, 68 ] ], [ "wolfdyslectic.com", [ 32, 68 ] ], [ "rationalityaloelike.com", [ 32, 68 ] ], [ "sizyreelingly.com", [ 32, 68 ] ], [ "simpulumlamerop.com", [ 32, 68 ] ], [ "urochsunloath.com", [ 32, 68 ] ], [ "monorhinouscassaba.com", [ 32, 68 ] ], [ "counterclockwisejacky.com", [ 32, 68 ] ], [ "35volitantplimsoles5.com", [ 32, 68 ] ], [ "scatch176duplicities.com", [ 32, 68 ] ], [ "antecoxalbobbing1010.com", [ 32, 68 ] ], [ "boonlessbestselling244.com", [ 32, 68 ] ], [ "cyamidpulverulence530.com", [ 32, 68 ] ], [ "guidon40hyporadius9.com", [ 32, 68 ] ], [ "449unceremoniousnasoseptal.com", [ 32, 68 ] ], [ "19turanosephantasia.com", [ 32, 68 ] ], [ "30sensualizeexpression.com", [ 32, 68 ] ], [ "321naturelikefurfuroid.com", [ 32, 68 ] ], [ "745mingiestblissfully.com", [ 32, 68 ] ], [ "availedsmallest.com", [ 32, 68 ] ], [ "greaseball6eventual20.com", [ 32, 68 ] ], [ "toxitabellaeatrebates306.com", [ 32, 68 ] ], [ "20demidistance9elongations.com", [ 32, 68 ] ], [ "audaciousdefaulthouse.com", [ 32, 68 ] ], [ "fittingcentermondaysunday.com", [ 32, 68 ] ], [ "fraudclatterflyingcar.com", [ 32, 68 ] ], [ "launchreliantcleaverriver.com", [ 32, 68 ] ], [ "matriculant401merited.com", [ 32, 68 ] ], [ "realfinanceblogcenter.com", [ 32, 68 ] ], [ "reputationsheriffkennethsand.com", [ 32, 68 ] ], [ "telyn610zoanthropy.com", [ 32, 68 ] ], [ "tubelessceliolymph.com", [ 32, 68 ] ], [ "tummulerviolableness.com", [ 32, 68 ] ], [ "un-block-voe.net", [ 32, 68 ] ], [ "v-o-e-unblock.com", [ 32, 68 ] ], [ "voe-un-block.com", [ 32, 68 ] ], [ "voeun-block.net", [ 32, 68 ] ], [ "voeunbl0ck.com", [ 32, 68 ] ], [ "voeunblck.com", [ 32, 68 ] ], [ "voeunblk.com", [ 32, 68 ] ], [ "voeunblock3.com", [ 32, 68 ] ], [ "audiotools.pro", 32 ], [ "magesy.blog", 32 ], [ "magesypro.pro", 32 ], [ "audioztools.com", 32 ], [ "www.ntv.co.jp", 32 ], [ "faptiti.com", 32 ], [ "wormate.io", 32 ], [ "selfstudys.com", 32 ], [ "adslink.pw", 32 ], [ "jpopsingles.eu", 32 ], [ "vinstartheme.com", [ 32, 91 ] ], [ "leakedzone.com", [ 32, 94 ] ], [ "fjordd.com", 32 ], [ "seriesperu.com", 32 ], [ "zippyupload.com", 32 ], [ "3xyaoi.com", 32 ], [ "alphapolis.co.jp", 33 ], [ "blog.csdn.net", 33 ], [ "juejin.cn", 33 ], [ "sweetslyrics.com", 33 ], [ "thegatewaypundit.com", 34 ], [ "thegearhunt.com", 35 ], [ "jfdb.jp", 36 ], [ "loginhit.com.ng", 36 ], [ "charbelnemnom.com", 36 ], [ "bphimmoi.net", 36 ], [ "goodhub.xyz", 36 ], [ "thotsbay.tv", 36 ], [ "edailybuzz.com", 38 ], [ "zhihu.com", 38 ], [ "qidian.com", 38 ], [ "invado.pl", 38 ], [ "webnovel.com", 38 ], [ "bajecnavareska.sk", 39 ], [ "lunas.pro", 39 ], [ "onlinefreecourse.net", 39 ], [ "pisr.org", 39 ], [ "uplod.net", 39 ], [ "thewpclub.net", 39 ], [ "thememazing.com", 39 ], [ "themebanks.com", 39 ], [ "mesquitaonline.com", 39 ], [ "skandynawiainfo.pl", 39 ], [ "onlinecoursebay.com", 39 ], [ "magnet-novels.com", 40 ], [ "dreamsfriend.com", 41 ], [ "trakteer.id", 42 ], [ "699pic.com", 42 ], [ "promobit.com.br", 43 ], [ "techjunkie.com", 43 ], [ "zerohedge.com", 43 ], [ "1mg.com", 43 ], [ "khou.com", 43 ], [ "10tv.com", 43 ], [ "kutub3lpdf.com", 44 ], [ "sklep-agroland.pl", 46 ], [ "polagriparts.pl", 47 ], [ "nordkorea-info.de", 48 ], [ "geotips.net", 49 ], [ "hardcoregames.ca", 50 ], [ "lataifas.ro", 51 ], [ "toppremiumpro.com", 52 ], [ "wattpad.com", 53 ], [ "starbene.it", 54 ], [ "fauxid.com", 55 ], [ "androidtvbox.eu", 56 ], [ "nicematin.com", 57 ], [ "yamibo.com", 59 ], [ "fimfiction.net", 60 ], [ "moegirl.org.cn", 61 ], [ "bbs.mihoyo.com", 62 ], [ "peekme.cc", 63 ], [ "ihbarweb.org.tr", 64 ], [ "baixedetudo.net.br", 65 ], [ "gardenia.net", 66 ], [ "wpking.in", 69 ], [ "hollywoodmask.com", 70 ], [ "mbalib.com", 70 ], [ "wenku.baidu.com", 71 ], [ "mooc.chaoxing.com", 72 ], [ "www-daftarharga.blogspot.com", 73 ], [ "realpython.com", 74 ], [ "linkmate.xyz", 75 ], [ "cristelageorgescu.ro", 76 ], [ "novelpia.com", 77 ], [ "privivkainfo.ru", 78 ], [ "frameboxxindore.com", 78 ], [ "descargatepelis.com", 79 ], [ "vercalendario.info", 80 ], [ "zipcode.com.ng", 80 ], [ "slideshare.net", 81 ], [ "poipiku.com", 83 ], [ "postcourier.com.pg", 84 ], [ "gmx.co.uk", 86 ], [ "gmx.com", 86 ], [ "likey.me", 87 ], [ "wallpaperaccess.com", 88 ], [ "shortform.com", 89 ], [ "joysound.com", 90 ], [ "colors.sonicthehedgehog.com", 92 ], [ "senpa.io", 93 ], [ "txori.com", 93 ], [ "braflix.app", 94 ], [ "comikey.com", 95 ], [ "saikaiscans.net", 96 ], [ "translate.goog", 97 ], [ "oreilly.com", 98 ], [ "alfred.camera", 99 ], [ "wrosinski.pl", 100 ], [ "wtsp.com", 101 ], [ "starzunion.com", 102 ], [ "lowcygier.pl", 103 ], [ "studiestoday.com", 104 ], [ "studyrankers.com", 105 ], [ "bharatavani.in", 105 ], [ "bongdaplus.vn", 107 ], [ "timeanddate.com", 111 ], [ "naver.com", 112 ] ]), n = new Map([ [ "mangaku", 4 ], [ "dood", 4 ], [ "streamtape", 4 ], [ "asiatv", 4 ], [ "bg-gledai", 4 ], [ "descarga-animex", 7 ], [ "tabonitobrasil", 14 ], [ "anisubindo", 14 ], [ "wstream", 32 ], [ "voe-unblock", [ 32, 68 ] ], [ "pobre", [ 32, 85 ] ], [ "bmovies", 37 ], [ "daotranslate", 51 ], [ "vidsrc", 106 ] ]), c = new Map([]);
        function a(o = "", t = "") {
            const n = r(), c = n.getExtraArgs(Array.from(arguments), 2), a = n.makeLogPrefix("prevent-addEventListener", o, t), s = n.patternToRegex(o, void 0, !0), i = n.patternToRegex(t), m = (function(o) {
                if (o instanceof Object == 0) return !1;
                e.canDebug && o.debug;
            }(c), c.elements || void 0), l = e => {
                if (e instanceof Window) return "window";
                if (e instanceof Document) return "document";
                if (e instanceof Element == 0) return "?";
                const o = [];
                "" !== e.id && o.push(`#${CSS.escape(e.id)}`);
                for (let t = 0; t < e.classList.length; t++) o.push(`.${CSS.escape(e.classList.item(t))}`);
                for (let t = 0; t < e.attributes.length; t++) {
                    const n = e.attributes.item(t);
                    "id" !== n.name && "class" !== n.name && o.push(`[${CSS.escape(n.name)}="${n.value}"]`);
                }
                return o.join("");
            }, u = (e, o, t) => {
                const c = n.RegExp_test.call(s, o), a = n.RegExp_test.call(i, t), r = c && a;
                return (!r || void 0 === m || !1 !== (!!((l = e) && l.matches && l.matches(m)) || Array.from(document.querySelectorAll(m)).includes(l))) && r;
                var l;
            };
            !function(e, o) {
                const t = e => {
                    const o = {
                        loading: 1,
                        interactive: 2,
                        end: 2,
                        2: 2,
                        complete: 3,
                        idle: 3,
                        3: 3
                    }, t = Array.isArray(e) ? e : [ e ];
                    for (const e of t) {
                        const t = `${e}`;
                        if (!1 !== o.hasOwnProperty(t)) return o[t];
                    }
                    return 0;
                }, n = t(o);
                if (t(document.readyState) >= n) return void e();
                const a = r(), s = [ "readystatechange", () => {
                    t(document.readyState) < n || (e(), a.removeEventListener.apply(document, s));
                }, {
                    capture: !0
                } ];
                a.addEventListener.apply(document, s);
            }((() => {
                (() => {
                    const e = {
                        apply: function(e, c, r) {
                            let s, i;
                            try {
                                s = String(r[0]), "function" == typeof r[1] ? i = String(n.Function_toString(r[1])) : "object" == typeof r[1] && null !== r[1] ? "function" == typeof r[1].handleEvent && (i = String(n.Function_toString(r[1].handleEvent))) : i = String(r[1]);
                            } catch (e) {}
                            if ("" === o && "" === t) n.uboLog(a, `Called: ${s}\n${i}\n${l(c)}`); else if (u(c, s, i)) return n.uboLog(a, `Prevented: ${s}\n${i}\n${l(c)}`);
                            return Reflect.apply(e, c, r);
                        },
                        get: (e, o, t) => "toString" === o ? e.toString.bind(e) : Reflect.get(e, o, t)
                    };
                    self.EventTarget.prototype.addEventListener = new Proxy(self.EventTarget.prototype.addEventListener, e);
                })();
            }), c.runAt);
        }
        function r() {
            if (e.safeSelf) return e.safeSelf;
            const o = globalThis, t = {
                Array_from: Array.from,
                Error: o.Error,
                Function_toStringFn: o.Function.prototype.toString,
                Function_toString: e => t.Function_toStringFn.call(e),
                Math_floor: Math.floor,
                Math_max: Math.max,
                Math_min: Math.min,
                Math_random: Math.random,
                Object: Object,
                Object_defineProperty: Object.defineProperty.bind(Object),
                Object_fromEntries: Object.fromEntries.bind(Object),
                Object_getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor.bind(Object),
                RegExp: o.RegExp,
                RegExp_test: o.RegExp.prototype.test,
                RegExp_exec: o.RegExp.prototype.exec,
                Request_clone: o.Request.prototype.clone,
                XMLHttpRequest: o.XMLHttpRequest,
                addEventListener: o.EventTarget.prototype.addEventListener,
                removeEventListener: o.EventTarget.prototype.removeEventListener,
                fetch: o.fetch,
                JSON: o.JSON,
                JSON_parseFn: o.JSON.parse,
                JSON_stringifyFn: o.JSON.stringify,
                JSON_parse: (...e) => t.JSON_parseFn.call(t.JSON, ...e),
                JSON_stringify: (...e) => t.JSON_stringifyFn.call(t.JSON, ...e),
                log: void 0,
                logLevel: 0,
                makeLogPrefix(...e) {
                    return this.sendToLogger && `[${e.join(" ⁝ ")}]` || "";
                },
                uboLog(...e) {
                    if (void 0 !== this.sendToLogger && void 0 !== e && "" !== e[0]) return this.sendToLogger("info", ...e);
                },
                uboErr(...e) {
                    if (void 0 !== this.sendToLogger && void 0 !== e && "" !== e[0]) return this.sendToLogger("error", ...e);
                },
                escapeRegexChars: e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                initPattern(e, o = {}) {
                    if ("" === e) return {
                        matchAll: !0
                    };
                    const t = !0 !== o.canNegate || !1 === e.startsWith("!");
                    !1 === t && (e = e.slice(1));
                    const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== n ? {
                        re: new this.RegExp(n[1], n[2] || o.flags),
                        expect: t
                    } : void 0 !== o.flags ? {
                        re: new this.RegExp(this.escapeRegexChars(e), o.flags),
                        expect: t
                    } : {
                        pattern: e,
                        expect: t
                    };
                },
                testPattern(e, o) {
                    return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, o) === e.expect : o.includes(e.pattern) === e.expect);
                },
                patternToRegex(e, o, t = !1) {
                    if ("" === e) return /^/;
                    const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === n) {
                        const n = this.escapeRegexChars(e);
                        return new RegExp(t ? `^${n}$` : n, o);
                    }
                    try {
                        return new RegExp(n[1], n[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, o = 0) {
                    const t = e.slice(o).reduce(((e, o, t, n) => {
                        if (0 == (1 & t)) {
                            const o = n[t + 1], c = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                            e.push([ n[t], c ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(t);
                },
                onIdle: (e, t) => o.requestIdleCallback ? o.requestIdleCallback(e, t) : o.requestAnimationFrame(e)
            };
            if (e.safeSelf = t, void 0 === e.bcSecret) return t;
            const n = new o.BroadcastChannel(e.bcSecret);
            let c = [];
            return t.logLevel = e.logLevel || 1, t.sendToLogger = (e, ...o) => {
                if (0 === o.length) return;
                const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
                if (void 0 === c) return n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: t
                });
                c.push({
                    type: e,
                    text: t
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === c) break;
                    c.forEach((({type: e, text: o}) => n.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: o
                    }))), c = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    t.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    t.logLevel = 2;
                }
            }, n.postMessage("areyouready?"), t;
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const i = s.length;
        if (0 === i) return;
        const m = new Set, l = [];
        if (0 !== c.size) {
            for (let e = 0; e < i; e++) {
                const o = s.slice(e).join("."), t = c.get(o);
                t && l.push(...t);
            }
            c.clear();
        }
        if (0 !== t.size) {
            const e = e => {
                let o = t.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) l.includes(e) || m.add(e);
                }
            };
            for (let o = 0; o < i; o++) e(s.slice(o).join("."));
            e("*"), t.clear();
        }
        if (0 !== n.size) {
            const e = i - 1;
            for (let o = 0; o < e; o++) for (let t = e; t > o; t--) {
                const e = s.slice(o, t).join(".");
                let c = n.get(e);
                if (void 0 !== c) {
                    "number" == typeof c && (c = [ c ]);
                    for (const e of c) l.includes(e) || m.add(e);
                }
            }
            n.clear();
        }
        for (const e of m) try {
            a(...o[e]);
        } catch (e) {}
        o.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const o = self.wrappedJSObject;
        let t, n;
        try {
            o.uBOL_addEventListenerDefuser = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const c = new o.Blob(...o.uBOL_addEventListenerDefuser);
            n = o.URL.createObjectURL(c);
            const a = o.document;
            t = a.createElement("script"), t.async = !1, t.src = n, (a.head || a.documentElement || a).append(t);
        } catch (e) {}
        n && (t && t.remove(), o.URL.revokeObjectURL(n)), delete o.uBOL_addEventListenerDefuser;
    }
})();