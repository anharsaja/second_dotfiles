"use strict";

(() => {
    const e = function() {
        const e = {}, o = [ [], [ "", "1200", "0" ], [ "generalTimeLeft", "*", "0.02" ], [ "stop()" ], [ "clearInterval" ], [ "myTimer", "1500" ], [ "countdown", "2000" ], [ "downloadTimer" ], [ "", "", "0" ], [ "counter", "2000" ], [ "", "1800" ], [ "yuidea-", "*" ], [ "timeLeft" ], [ "", "", "0.001" ], [ "time" ], [ "time", "2500" ], [ "clearInterval", "*" ], [ "seconds" ], [ "", "", "0.02" ], [ "time.html", "1000" ], [ "circle_animation" ], [ "countdown" ], [ "web_counter" ], [ "video_counter" ], [ "/SplashScreen|BannerAd/" ], [ "i--" ], [ "", "*", "0" ], [ "curAd" ], [ "js-btn-skip", "1000" ], [ "countdown", "*", "0.001" ], [ "timer" ], [ "gotolink" ], [ "invoke", "1000" ], [ "download", "*", "0.02" ], [ "countdown", "*" ], [ "disabled" ], [ "/counter|timer/", "*" ], [ "_0x", "*", "0.001" ], [ "counter", "*", "0.02" ], [ "/.?/", "*", "0.02" ], [ "/wpsafe|wait/", "*", "0.001" ], [ "timer", "*", "0.02" ], [ "timer", "1300" ], [ "countDown", "*" ], [ "timer", "*" ], [ "/.?/", "*", "0.001" ], [ "timeLeft", "*", "0.001" ], [ "timer", "*", "0.001" ], [ "counter", "*", "0.001" ], [ "timer", "1000", "0.001" ], [ "timer", "1600", "0.001" ], [ "count", "*", "0.001" ], [ "counter" ], [ "/counter|wait/", "*", "0.001" ], [ "interval", "*" ], [ "sec--", "*", "0.001" ], [ "show_download_links" ], [ "counter", "*" ], [ "countDown" ], [ "", "", "0.3" ], [ "sec--" ], [ "time", "", "0" ], [ "secs" ], [ "download" ], [ "_0x" ], [ "timer.remove" ], [ "downloadButton" ], [ "timePassed" ], [ "timeleft" ], [ "counter--" ], [ "(i-1)" ], [ "skipOptions" ], [ "countDown", "1150", "0.5" ], [ "timercounter" ], [ "count", "*" ], [ "#timer" ], [ "temp" ], [ "sec" ], [ "counter", "", "0.02" ], [ "timePassed", "1300" ], [ "timer", "1800" ], [ "download_delay" ], [ "distance" ], [ "count" ], [ "contador" ], [ "display" ], [ "countdownTime", "1500" ], [ "second" ], [ "timer", "1500" ], [ "updatePercentage", "100", "0.02" ], [ "current()" ], [ "l", "", "0" ], [ "countdown", "*", "0.02" ], [ "time", "", "0.02" ], [ "wait" ], [ "downloadToken" ], [ "updateProgress", "*" ], [ "current-=1" ], [ "counter", "1000", "0.001" ], [ "scrollIncrement", "*" ], [ "", "*", "0.001" ], [ "saniye" ], [ "", "1000", "0.001" ], [ "skipAdSeconds", "", "0.02" ], [ "adv", "*" ] ], i = new Map([ [ "mage.si", 0 ], [ "arcade.buzzrtv.com", 0 ], [ "arcade.lemonde.fr", 0 ], [ "arena.gamesforthebrain.com", 0 ], [ "bestpuzzlesandgames.com", 0 ], [ "cointiply.arkadiumarena.com", 0 ], [ "gamelab.com", 0 ], [ "games.abqjournal.com", 0 ], [ "games.ajc.com", 0 ], [ "games.amny.com", 0 ], [ "games.bellinghamherald.com", 0 ], [ "games.besthealthmag.ca", 0 ], [ "games.bnd.com", 0 ], [ "games.boston.com", 0 ], [ "games.bostonglobe.com", 0 ], [ "games.bradenton.com", 0 ], [ "games.centredaily.com", 0 ], [ "games.cnhinews.com", 0 ], [ "games.crosswordgiant.com", 0 ], [ "games.dallasnews.com", 0 ], [ "games.daytondailynews.com", 0 ], [ "games.denverpost.com", 0 ], [ "games.everythingzoomer.com", 0 ], [ "games.fresnobee.com", 0 ], [ "games.gameshownetwork.com", 0 ], [ "games.get.tv", 0 ], [ "games.greatergood.com", 0 ], [ "games.heraldonline.com", 0 ], [ "games.heraldsun.com", 0 ], [ "games.idahostatesman.com", 0 ], [ "games.insp.com", 0 ], [ "games.islandpacket.com", 0 ], [ "games.journal-news.com", 0 ], [ "games.kansas.com", 0 ], [ "games.kansascity.com", 0 ], [ "games.kentucky.com", 0 ], [ "games.lancasteronline.com", 0 ], [ "games.ledger-enquirer.com", 0 ], [ "games.macon.com", 0 ], [ "games.mercedsunstar.com", 0 ], [ "games.modbee.com", 0 ], [ "games.moviestvnetwork.com", 0 ], [ "games.myrtlebeachonline.com", 0 ], [ "games.nationalreview.com", 0 ], [ "games.newsobserver.com", 0 ], [ "games.parade.com", 0 ], [ "games.pressdemocrat.com", 0 ], [ "games.puzzlebaron.com", 0 ], [ "games.puzzler.com", 0 ], [ "games.puzzles.ca", 0 ], [ "games.qns.com", 0 ], [ "games.readersdigest.ca", 0 ], [ "games.sacbee.com", 0 ], [ "games.sanluisobispo.com", 0 ], [ "games.sixtyandme.com", 0 ], [ "games.sltrib.com", 0 ], [ "games.springfieldnewssun.com", 0 ], [ "games.star-telegram.com", 0 ], [ "games.sunherald.com", 0 ], [ "games.theadvocate.com", 0 ], [ "games.thenewstribune.com", 0 ], [ "games.theolympian.com", 0 ], [ "games.theportugalnews.com", 0 ], [ "games.thestar.com", 0 ], [ "games.thestate.com", 0 ], [ "games.tri-cityherald.com", 0 ], [ "games.triviatoday.com", 0 ], [ "games.usnews.com", 0 ], [ "games.vgwplay.com", 0 ], [ "games.wordgenius.com", 0 ], [ "games.wtop.com", 0 ], [ "jeux.meteocity.com", 0 ], [ "juegos.as.com", 0 ], [ "juegos.elnuevoherald.com", 0 ], [ "juegos.elpais.com", 0 ], [ "philly.arkadiumarena.com", 0 ], [ "play.dictionary.com", 0 ], [ "puzzles.centralmaine.com", 0 ], [ "puzzles.crosswordsolver.org", 0 ], [ "puzzles.nola.com", 0 ], [ "puzzles.pressherald.com", 0 ], [ "puzzles.sunjournal.com", 0 ], [ "al.ly", 0 ], [ "bbf.lt", 0 ], [ "cpmlink.net", 0 ], [ "cut-urls.com", 0 ], [ "iiv.pl", 0 ], [ "shink.me", 0 ], [ "ur.ly", 0 ], [ "url.gem-flash.com", 0 ], [ "zeiz.me", 0 ], [ "1ink.cc", 0 ], [ "azlink.xyz", 0 ], [ "soft112.com", 0 ], [ "short-url.link", 0 ], [ "4download.net", 0 ], [ "s.sseluxx.com", 0 ], [ "onifile.com", 0 ], [ "coolmathgames.com", 0 ], [ "link-to.net", [ 0, 21, 22, 23 ] ], [ "telepisodes.org", 0 ], [ "onle.co", 0 ], [ "freeupload.info", 0 ], [ "fstore.biz", 0 ], [ "uploadfree.info", 0 ], [ "deltabit.co", 0 ], [ "puzzles.msn.com", 0 ], [ "shon.xyz", 0 ], [ "sfile.mobi", 0 ], [ "upfile.us", 0 ], [ "game-kentang.blogspot.com", 0 ], [ "shortgoo.blogspot.com", 0 ], [ "indavideo.hu", 0 ], [ "sfirmware.com", 0 ], [ "mobilelegends.shop", 0 ], [ "ockles.com", 0 ], [ "urlpay.net", 0 ], [ "underhentai.net", 0 ], [ "customercareal.com", 0 ], [ "faupto.com", 0 ], [ "suanoticia.online", 0 ], [ "linkconfig.com", 0 ], [ "lg-firmwares.com", 0 ], [ "modcombo.com", 0 ], [ "aylink.co", 0 ], [ "gitizle.vip", 0 ], [ "shtms.co", 0 ], [ "cryptokinews.com", 0 ], [ "cpmlink.pro", 0 ], [ "speedynews.xyz", [ 0, 89 ] ], [ "infokeeda.xyz", 0 ], [ "webzeni.com", 0 ], [ "mysflink.blogspot.com", 0 ], [ "runmods.com", 0 ], [ "anomize.xyz", 0 ], [ "bondibeachau.com", 0 ], [ "konstantinova.net", 0 ], [ "kangkimin.com", 0 ], [ "iklandb.com", 0 ], [ "onepiecex.xyz", 0 ], [ "thingiverse.com", 0 ], [ "ufreegames.com", 0 ], [ "saungfirmware.id", 0 ], [ "kpopstan.com", 0 ], [ "bdlink.pw", 0 ], [ "fairyanime.com", 0 ], [ "7misr4day.com", 0 ], [ "sama-pro.com", 0 ], [ "otomi-games.com", 0 ], [ "curseforge.com", 0 ], [ "mobitaak.com", 0 ], [ "arhplyrics.in", 0 ], [ "telenord.it", 0 ], [ "raky.in", 0 ], [ "desiflixindia.com", 0 ], [ "insurance.iptvsetupguide.com", 0 ], [ "javguru.top", 0 ], [ "diglink.blogspot.com", 0 ], [ "vkprime.com", 0 ], [ "i-polls.com", 0 ], [ "freecoursesonline.me", 0 ], [ "yesdownloader.com", 0 ], [ "games.metv.com", 0 ], [ "arkadium.com", 0 ], [ "tonanmedia.my.id", 0 ], [ "skiplink.me", 0 ], [ "yurasu.xyz", 0 ], [ "isekaipalace.com", 0 ], [ "khaddavi.net", 0 ], [ "jrtekno.com", 0 ], [ "mitedrive.com", 0 ], [ "miteblog.com", 0 ], [ "games.dailymail.co.uk", 0 ], [ "fullhd4k.com", 0 ], [ "juegos.eleconomista.es", 0 ], [ "lk21static.xyz", 0 ], [ "filmizlehdfilm.com", 0 ], [ "easybib.com", 0 ], [ "wallpaperaccess.com", 0 ], [ "deportealdia.live", 1 ], [ "noticiasesports.live", 1 ], [ "noweconomy.live", 1 ], [ "puzzles.standard.co.uk", 2 ], [ "puzzles.independent.co.uk", 2 ], [ "puzzles.bestforpuzzles.com", 2 ], [ "arkadiumarena.com", 2 ], [ "games.charlotteobserver.com", 2 ], [ "games.miamiherald.com", 2 ], [ "games.startribune.com", 2 ], [ "games.word.tips", 2 ], [ "indi-share.com", 4 ], [ "premid.app", 4 ], [ "cheatcloud.cc", 4 ], [ "cheater.ninja", 4 ], [ "cheatermad.com", 4 ], [ "cheatsquad.gg", 4 ], [ "freepdf-books.com", 5 ], [ "themeslide.com", 6 ], [ "jpopsingles.eu", 7 ], [ "vanillatweaks.net", 7 ], [ "shortenbuddy.com", 7 ], [ "megadescarga.net", 8 ], [ "megadescargas.net", 8 ], [ "lnk.news", 8 ], [ "lnk.parts", 8 ], [ "fssquad.com", 8 ], [ "easylinkref.com", 8 ], [ "thememypc.net", 9 ], [ "sanoybonito.club", 9 ], [ "dreamcheeky.com", [ 9, 57 ] ], [ "fidlarmusic.com", [ 9, 57 ] ], [ "publicananker.com", [ 9, 57 ] ], [ "rezence.com", [ 9, 57 ] ], [ "rodjulian.com", 9 ], [ "mikl4forex.com", 9 ], [ "gawbne.com", 9 ], [ "forex-golds.com", 9 ], [ "forex-trnd.com", 9 ], [ "link.tl", 10 ], [ "gamelopte.com", 11 ], [ "goto.com.np", 12 ], [ "vrcmods.com", 12 ], [ "dramaworldhd.co", 12 ], [ "consoleroms.com", 12 ], [ "romspedia.com", 12 ], [ "shortlinks.tech", 12 ], [ "forexlap.com", 13 ], [ "forexmab.com", 13 ], [ "forexwaw.club", 13 ], [ "forex-articles.com", 13 ], [ "fx4vip.com", 13 ], [ "forexrw7.com", [ 13, 55 ] ], [ "3rabsports.com", 13 ], [ "fx-22.com", [ 13, 55 ] ], [ "gold-24.net", [ 13, 55 ] ], [ "icutlink.com", 14 ], [ "android-apk.org", 14 ], [ "zegtrends.com", 15 ], [ "simsdom.com", 16 ], [ "fansonlinehub.com", 16 ], [ "hotmediahub.com", 16 ], [ "terabox.fun", 16 ], [ "teralink.me", 16 ], [ "terashare.me", 16 ], [ "teraearn.com", 16 ], [ "fautsy.com", 17 ], [ "multifaucet.org", 17 ], [ "coinlyhub.com", 17 ], [ "i-bits.io", 17 ], [ "claimbits.io", 17 ], [ "mundotec.pro", 17 ], [ "legionjuegos.org", 18 ], [ "legionpeliculas.org", 18 ], [ "legionprogramas.org", 18 ], [ "so1.asia", 18 ], [ "lewdzone.com", 20 ], [ "direct-link.net", [ 21, 22, 23 ] ], [ "direkt-wissen.com", [ 21, 22, 23 ] ], [ "hieunguyenphoto.com", 21 ], [ "py.md", 21 ], [ "ipalibrary.me", 21 ], [ "gamearter.com", 24 ], [ "onlyhgames.com", 25 ], [ "ayobelajarbareng.com", 26 ], [ "semawur.com", 26 ], [ "techmody.io", 26 ], [ "series-d.com", 27 ], [ "doofree88.com", 28 ], [ "acdriftingpro.com", 29 ], [ "pixsera.net", 30 ], [ "imgair.net", 30 ], [ "imgblaze.net", 30 ], [ "imgfrost.net", 30 ], [ "vestimage.site", 30 ], [ "imgwia.buzz", 30 ], [ "imgbibam.online", 30 ], [ "imgngf.online", 30 ], [ "imgqaz.online", 30 ], [ "imgulur.online", 30 ], [ "imgurj.online", 30 ], [ "imgurt.online", 30 ], [ "imgwtz.online", 30 ], [ "imgwxr.online", 30 ], [ "imgwzr.online", 30 ], [ "imgyre.online", 30 ], [ "imgbak.store", 30 ], [ "imgbek.store", 30 ], [ "picler.store", 30 ], [ "piclerx.store", 30 ], [ "piclerz.store", 30 ], [ "pixlev.store", 30 ], [ "pixmax.store", 30 ], [ "pixmex.store", 30 ], [ "imgbaex.store", 30 ], [ "imgbah.online", 30 ], [ "imgbaie.online", 30 ], [ "imgbango.store", 30 ], [ "imgbier.store", 30 ], [ "imgbimn.store", 30 ], [ "imgbqw.store", 30 ], [ "imgbuba.online", 30 ], [ "imgbwe.store", 30 ], [ "imgbxs.online", 30 ], [ "imgcao.store", 30 ], [ "imgnwe.online", 30 ], [ "imgqge.store", 30 ], [ "imgqxb.online", 30 ], [ "imgteq.online", 30 ], [ "imgtex.online", 30 ], [ "imgtuta.online", 30 ], [ "imgwqr.online", 30 ], [ "imgwww.store", 30 ], [ "imgxza.store", 30 ], [ "imgezx.sbs", 30 ], [ "imgbcxsb.store", 30 ], [ "imgbcxs.store", 30 ], [ "imgbake.cfd", 30 ], [ "imgmffg.sbs", 30 ], [ "imgmffgtr.sbs", 30 ], [ "imgnbg.sbs", 30 ], [ "imgngc.sbs", 30 ], [ "imgnmh.cfd", 30 ], [ "imgqte.sbs", 30 ], [ "imguthes.sbs", 30 ], [ "imgwag.cfd", 30 ], [ "imgwang.cfd", 30 ], [ "imgwety.sbs", 30 ], [ "imgxuh.cfd", 30 ], [ "imgxytw.cfd", 30 ], [ "imgycgey.sbs", 30 ], [ "imgyruy.cfd", 30 ], [ "imgyusa.cfd", 30 ], [ "imgyyqey.sbs", 30 ], [ "imgyer.store", 30 ], [ "imgxhs.store", 30 ], [ "imgwekr.online", 30 ], [ "imgwbfh.online", 30 ], [ "imgwak.online", 30 ], [ "imgutry.online", 30 ], [ "imgutiyu.online", 30 ], [ "imgutbbn.online", 30 ], [ "imgubfd.online", 30 ], [ "imgrei.online", 30 ], [ "imgqec.online", 30 ], [ "imgpaiou.online", 30 ], [ "imgpaiki.online", 30 ], [ "imgmjj.store", 30 ], [ "imgfa.store", 30 ], [ "imgbutrt.store", 30 ], [ "imgbty.store", 30 ], [ "imgbdl.store", 30 ], [ "imgngh.sbs", 30 ], [ "imgbbfg.pics", 30 ], [ "imgjhrjjr.pics", 30 ], [ "imgleko.pics", 30 ], [ "imgluki.pics", 30 ], [ "imgnffe.pics", 30 ], [ "imgnnnf.pics", 30 ], [ "imgrwqz.pics", 30 ], [ "imgtweqz.pics", 30 ], [ "imgxzgf.pics", 30 ], [ "imgyyeryt.pics", 30 ], [ "picbbc.one", 30 ], [ "picbbdr.one", 30 ], [ "picbest.one", 30 ], [ "picbhrt.one", 30 ], [ "picnrrt.one", 30 ], [ "picqqw.one", 30 ], [ "picqr.one", 30 ], [ "picqtwe.one", 30 ], [ "picsjre.one", 30 ], [ "piczzaq.one", 30 ], [ "imgqazx.sbs", 30 ], [ "imgiruyw.online", 30 ], [ "picnerr.cfd", 30 ], [ "pichfer.cfd", 30 ], [ "picbbeq.cfd", 30 ], [ "picqaxs.cfd", 30 ], [ "picxxdd.cfd", 30 ], [ "picqweff.cfd", 30 ], [ "pickjsn.cfd", 30 ], [ "piczzxsw.cfd", 30 ], [ "picbbbde.cfd", 30 ], [ "picbdd.cfd", 30 ], [ "imgbahxg.sbs", 30 ], [ "imgxune.sbs", 30 ], [ "imgqklw.shop", 30 ], [ "pixqkhgrt.shop", 30 ], [ "pixqbngg.shop", 30 ], [ "pixqwet.shop", 30 ], [ "pixmos.shop", 30 ], [ "imgtgd.shop", 30 ], [ "imgcsxx.shop", 30 ], [ "imgcssd.shop", 30 ], [ "imguwjsd.sbs", 30 ], [ "pictbbf.shop", 30 ], [ "pixbryexa.sbs", 30 ], [ "picbqqa.sbs", 30 ], [ "pixbkghxa.sbs", 30 ], [ "imgmgf.sbs", 30 ], [ "picbcxvxa.sbs", 30 ], [ "imguee.sbs", 30 ], [ "imgmffmv.sbs", 30 ], [ "imgbqb.sbs", 30 ], [ "imgbyrev.sbs", 30 ], [ "imgbncvnv.sbs", 30 ], [ "pixtryab.shop", 30 ], [ "imggune.shop", 30 ], [ "pictryhab.shop", 30 ], [ "pixbnab.shop", 30 ], [ "imgbnwe.shop", 30 ], [ "imgbbnhi.shop", 30 ], [ "imgnbii.shop", 30 ], [ "imghqqbg.shop", 30 ], [ "imgyhq.shop", 30 ], [ "pixnbrqwg.sbs", 30 ], [ "pixnbrqw.sbs", 30 ], [ "picmsh.sbs", 30 ], [ "imgpke.sbs", 30 ], [ "picuenr.sbs", 30 ], [ "imgolemn.sbs", 30 ], [ "imgoebn.sbs", 30 ], [ "picnwqez.sbs", 30 ], [ "imgjajhe.sbs", 30 ], [ "pixjnwe.sbs", 30 ], [ "pixkfjtrkf.shop", 30 ], [ "pixkfkf.shop", 30 ], [ "pixdfdjkkr.shop", 30 ], [ "pixdfdj.shop", 30 ], [ "picnft.shop", 30 ], [ "pixrqqz.shop", 30 ], [ "picngt.shop", 30 ], [ "picjgfjet.shop", 30 ], [ "picjbet.shop", 30 ], [ "imgkkabm.shop", 30 ], [ "imgxabm.shop", 30 ], [ "imgthbm.shop", 30 ], [ "imgmyqbm.shop", 30 ], [ "imgwwqbm.shop", 30 ], [ "imgjvmbbm.shop", 30 ], [ "takez.co", 30 ], [ "nightfallnews.com", 30 ], [ "cararegistrasi.com", 30 ], [ "ipa-apps.me", 30 ], [ "theicongenerator.com", 30 ], [ "zentum.club", 30 ], [ "imslp.org", 30 ], [ "michaelemad.com", 30 ], [ "chooyomi.com", 30 ], [ "go.freetrx.fun", 30 ], [ "imgjbxzjv.shop", 30 ], [ "imgjmgfgm.shop", 30 ], [ "picxnkjkhdf.sbs", 30 ], [ "imgxxbdf.sbs", 30 ], [ "imgnngr.sbs", 30 ], [ "imgjjtr.sbs", 30 ], [ "imgqbbds.sbs", 30 ], [ "imgbvdf.sbs", 30 ], [ "imgqnnnebrf.sbs", 30 ], [ "imgebrf.sbs", 30 ], [ "apps2app.com", 31 ], [ "restegourmet.de", 32 ], [ "getmodsapk.com", 33 ], [ "visionpapers.org", 35 ], [ "moonplusnews.com", 36 ], [ "loanoffering.in", 36 ], [ "comptegratuite.com", 37 ], [ "timestej.com", 37 ], [ "theramishali.blogspot.com", 37 ], [ "thepowerofpen.in", 37 ], [ "tech24us.com", 38 ], [ "freethemesy.com", 38 ], [ "tech5s.co", 39 ], [ "ez4mods.com", 39 ], [ "yalifin.xyz", 39 ], [ "lrncook.xyz", 39 ], [ "gadgetsreview27.com", 39 ], [ "newsbawa.com", 39 ], [ "androidquest.com", 39 ], [ "fx-gd.net", 39 ], [ "healthy4pepole.com", 39 ], [ "hightrip.net", 39 ], [ "to-travel.net", 39 ], [ "drinkspartner.com", 39 ], [ "uploadsoon.com", 39 ], [ "wp.uploadfiles.in", 39 ], [ "viralxns.com", 39 ], [ "veganab.co", 40 ], [ "camdigest.com", 40 ], [ "nichapk.com", 41 ], [ "easyworldbusiness.com", 41 ], [ "riveh.com", 41 ], [ "naukrilelo.in", 42 ], [ "hipsonyc.com", 43 ], [ "bookszone.in", 44 ], [ "uptechnologys.com", 45 ], [ "sevenjournals.com", 45 ], [ "overgal.com", 46 ], [ "mamahawa.com", 47 ], [ "lollty.pro", 47 ], [ "postazap.com", 47 ], [ "financeyogi.net", 47 ], [ "finclub.in", 47 ], [ "easywithcode.tech", 47 ], [ "letest25.co", 47 ], [ "truevpnlover.com", 47 ], [ "financebolo.com", 47 ], [ "rphost.in", 47 ], [ "vedamdigi.tech", 47 ], [ "cancelguider.online", 47 ], [ "bigdata.rawlazy.si", 48 ], [ "codesnse.com", 48 ], [ "filmypoints.in", 49 ], [ "flightsim.to", 49 ], [ "freethailottery.live", 50 ], [ "progfu.com", 50 ], [ "investorveda.com", 51 ], [ "computerpedia.in", 51 ], [ "itscybertech.com", 52 ], [ "thaitrieuvi.live", 52 ], [ "forexeen.us", 52 ], [ "health-and.me", 52 ], [ "filessrc.com", 52 ], [ "srcimdb.com", 52 ], [ "droidmirror.com", 52 ], [ "infokik.com", 52 ], [ "arealgamer.org", 52 ], [ "travel.vebma.com", 53 ], [ "cloud.majalahhewan.com", 53 ], [ "crm.cekresi.me", 53 ], [ "ai.tempatwisata.pro", 53 ], [ "cinedesi.in", 54 ], [ "thevouz.in", 54 ], [ "tejtime24.com", 54 ], [ "msic.site", 55 ], [ "apkmb.com", 56 ], [ "apkhihe.com", 56 ], [ "aemenstore.com", 57 ], [ "byboe.com", 57 ], [ "cazzette.com", 57 ], [ "hookeaudio.com", 57 ], [ "jncojeans.com", 57 ], [ "kiemlua.com", 57 ], [ "kingsleynyc.com", 57 ], [ "lucidcam.com", 57 ], [ "nguyenvanbao.com", 57 ], [ "nousdecor.com", 57 ], [ "pennbookcenter.com", 57 ], [ "restorbio.com", 57 ], [ "staaker.com", 57 ], [ "uebnews.online", 57 ], [ "thegoneapp.com", 57 ], [ "samapkstore.com", 58 ], [ "5ggyan.com", 58 ], [ "emulatorgames.net", 59 ], [ "doctor-groups.com", 60 ], [ "luckydice.net", 60 ], [ "menjelajahi.com", 61 ], [ "unityassetcollection.com", 62 ], [ "romadd.com", 63 ], [ "rethmic.com", 64 ], [ "romhustler.org", 65 ], [ "filmyhitlink.xyz", 66 ], [ "allwpworld.com", 68 ], [ "trzpro.com", 69 ], [ "techhelpbd.com", 69 ], [ "zedge.net", 70 ], [ "send-anywhere.com", 71 ], [ "upstore.net", 72 ], [ "rincondelsazon.com", 73 ], [ "tattoosbeauty.com", 73 ], [ "disheye.com", 74 ], [ "yifysub.net", 75 ], [ "mp3juices.icu", 76 ], [ "watchdoge.xyz", 77 ], [ "bingotingo.com", 78 ], [ "thizissam.in", 78 ], [ "proviralhost.com", 79 ], [ "urbharat.xyz", 79 ], [ "techyreviewx.com", 80 ], [ "jojo-themes.net", 81 ], [ "redirect.dafontvn.com", 82 ], [ "cue-vana.com", 83 ], [ "crdroid.net", 83 ], [ "rlxtech.tech", 83 ], [ "descargatepelis.com", 84 ], [ "edufileshare.com", 85 ], [ "kuncomic.com", 86 ], [ "wowroms.com", 87 ], [ "mhma12.tech", 88 ], [ "play.aidungeon.io", 90 ], [ "whatsappmods.net", 91 ], [ "adshnk.com", 92 ], [ "blogmado.com", 93 ], [ "pinloker.com", 94 ], [ "sekilastekno.com", 94 ], [ "web1s.asia", 94 ], [ "fikper.com", 95 ], [ "tralhasvarias.blogspot.com", 96 ], [ "busuu.com", 97 ], [ "recipahi.com", 98 ], [ "thestar.com", 99 ], [ "obaianinho.com", 100 ], [ "punkrust.net", 101 ], [ "apkprime.org", 102 ], [ "novelgames.com", 103 ], [ "3bmeteo.com", 104 ] ]), s = new Map([ [ "123link", 0 ], [ "platinmods", 0 ], [ "eg4link", 0 ], [ "idlelivelink", 0 ], [ "igram", 0 ], [ "lin-ks", 0 ], [ "xberuang", 0 ], [ "topflix", 0 ], [ "leechall", 0 ], [ "bde4", 0 ], [ "lootlinks", 0 ], [ "filmizletv", 0 ], [ "ouo", 3 ], [ "acortalo", 8 ], [ "acortar", 8 ], [ "filemoon", 17 ], [ "dutchycorp", 19 ], [ "bluemediafiles", 25 ], [ "pixlev", 30 ], [ "5play", 34 ], [ "10short", 47 ], [ "cinemakottaga", 67 ], [ "privatemoviez", 83 ] ]), t = new Map([ [ "go.skiplink.me", [ 0 ] ], [ "encurtador.postazap.com", [ 47 ] ] ]);
        function m(o = "", i = "", s = "") {
            if ("string" != typeof o) return;
            const t = function() {
                if (e.safeSelf) return e.safeSelf;
                const o = globalThis, i = {
                    Array_from: Array.from,
                    Error: o.Error,
                    Function_toStringFn: o.Function.prototype.toString,
                    Function_toString: e => i.Function_toStringFn.call(e),
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
                    JSON_parse: (...e) => i.JSON_parseFn.call(i.JSON, ...e),
                    JSON_stringify: (...e) => i.JSON_stringifyFn.call(i.JSON, ...e),
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
                        const i = !0 !== o.canNegate || !1 === e.startsWith("!");
                        !1 === i && (e = e.slice(1));
                        const s = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        return null !== s ? {
                            re: new this.RegExp(s[1], s[2] || o.flags),
                            expect: i
                        } : void 0 !== o.flags ? {
                            re: new this.RegExp(this.escapeRegexChars(e), o.flags),
                            expect: i
                        } : {
                            pattern: e,
                            expect: i
                        };
                    },
                    testPattern(e, o) {
                        return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, o) === e.expect : o.includes(e.pattern) === e.expect);
                    },
                    patternToRegex(e, o, i = !1) {
                        if ("" === e) return /^/;
                        const s = /^\/(.+)\/([gimsu]*)$/.exec(e);
                        if (null === s) {
                            const s = this.escapeRegexChars(e);
                            return new RegExp(i ? `^${s}$` : s, o);
                        }
                        try {
                            return new RegExp(s[1], s[2] || void 0);
                        } catch (e) {}
                        return /^/;
                    },
                    getExtraArgs(e, o = 0) {
                        const i = e.slice(o).reduce(((e, o, i, s) => {
                            if (0 == (1 & i)) {
                                const o = s[i + 1], t = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                                e.push([ s[i], t ]);
                            }
                            return e;
                        }), []);
                        return this.Object_fromEntries(i);
                    },
                    onIdle: (e, i) => o.requestIdleCallback ? o.requestIdleCallback(e, i) : o.requestAnimationFrame(e)
                };
                if (e.safeSelf = i, void 0 === e.bcSecret) return i;
                const s = new o.BroadcastChannel(e.bcSecret);
                let t = [];
                return i.logLevel = e.logLevel || 1, i.sendToLogger = (e, ...o) => {
                    if (0 === o.length) return;
                    const i = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
                    if (void 0 === t) return s.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: i
                    });
                    t.push({
                        type: e,
                        text: i
                    });
                }, s.onmessage = e => {
                    switch (e.data) {
                      case "iamready!":
                        if (void 0 === t) break;
                        t.forEach((({type: e, text: o}) => s.postMessage({
                            what: "messageToLogger",
                            type: e,
                            text: o
                        }))), t = void 0;
                        break;

                      case "setScriptletLogLevelToOne":
                        i.logLevel = 1;
                        break;

                      case "setScriptletLogLevelToTwo":
                        i.logLevel = 2;
                    }
                }, s.postMessage("areyouready?"), i;
            }().patternToRegex(o);
            let m = "*" !== i ? parseInt(i, 10) : -1;
            (isNaN(m) || !1 === isFinite(m)) && (m = 1e3);
            let n = parseFloat(s);
            n = !1 === isNaN(n) && isFinite(n) ? Math.min(Math.max(n, .001), 50) : .05, self.setInterval = new Proxy(self.setInterval, {
                apply: function(e, o, i) {
                    const [s, c] = i;
                    return -1 !== m && c !== m || !t.test(s.toString()) || (i[1] = c * n), e.apply(o, i);
                }
            });
        }
        const n = [];
        try {
            n.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = n.length;
        if (0 === c) return;
        const a = new Set, r = [];
        if (0 !== t.size) {
            for (let e = 0; e < c; e++) {
                const o = n.slice(e).join("."), i = t.get(o);
                i && r.push(...i);
            }
            t.clear();
        }
        if (0 !== i.size) {
            const e = e => {
                let o = i.get(e);
                if (void 0 !== o) {
                    "number" == typeof o && (o = [ o ]);
                    for (const e of o) r.includes(e) || a.add(e);
                }
            };
            for (let o = 0; o < c; o++) e(n.slice(o).join("."));
            e("*"), i.clear();
        }
        if (0 !== s.size) {
            const e = c - 1;
            for (let o = 0; o < e; o++) for (let i = e; i > o; i--) {
                const e = n.slice(o, i).join(".");
                let t = s.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) r.includes(e) || a.add(e);
                }
            }
            s.clear();
        }
        for (const e of a) try {
            m(...o[e]);
        } catch (e) {}
        o.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const o = self.wrappedJSObject;
        let i, s;
        try {
            o.uBOL_adjustSetInterval = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const t = new o.Blob(...o.uBOL_adjustSetInterval);
            s = o.URL.createObjectURL(t);
            const m = o.document;
            i = m.createElement("script"), i.async = !1, i.src = s, (m.head || m.documentElement || m).append(i);
        } catch (e) {}
        s && (i && i.remove(), o.URL.revokeObjectURL(s)), delete o.uBOL_adjustSetInterval;
    }
})();