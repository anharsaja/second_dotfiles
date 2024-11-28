"use strict";

(() => {
    const e = function() {
        const e = {}, t = [ [ "cicc.cookie_cat_statistic", "true" ], [ "window.consentManagementEnabled", "false" ], [ "config.requireCookieConsent", "false" ], [ "BrockmanAllowedCookies.targeting", "true" ], [ "BrockmanAllowedCookies.functional", "true" ], [ "settings.consent", "true" ], [ "HB.CookieSettings.init", "noopFunc" ], [ "WHT.ShowConsentForm", "trueFunc" ], [ "useGDPR", "false" ], [ "xv.disclaimer.displayCookiePopup", "noopFunc" ], [ "Didomi", "noopFunc" ], [ "realCookieBanner", "undefined" ], [ "amw.isCookieConsentAccepted", "true" ], [ "amw.isMarketingCookiesAccepted", "false" ], [ "amw.isAnalyticsCookiesAccepted", "false" ], [ "window.cmpmngr.setConsentViaBtn", "noopFunc" ], [ "tcfAllowUseCookies", "true" ], [ "cicc.cookie_cat_functional", "true" ], [ "cicc.cookie_cat_marketing", "true" ], [ "tweakersConfig.userConfiguredConsent.youtube.approved", "true" ], [ "tweakersConfig.userConfiguredConsent.omny.approved", "true" ], [ "tweakersConfig.userConfiguredConsent.pcnltelecom.approved", "true" ], [ "tweakersConfig.userConfiguredConsent.googlemaps.approved", "true" ], [ "tweakersConfig.userConfiguredConsent.streamable.approved", "true" ], [ "tweakersConfig.userConfiguredConsent.soundcloud.approved", "true" ], [ "tweakersConfig.userConfiguredConsent.knightlab.approved", "true" ], [ "yleConsentSdk._consentSdk._embedded_social_media", "true" ], [ "yleConsentSdk.show", "noopFunc" ], [ "cockieConsentManagement", "noopFunc" ], [ "window.scrollTo", "noopFunc" ], [ "flagTcfLoaded", "true" ] ], n = new Map([ [ "elgiganten.dk", 0 ], [ "elgiganten.se", 0 ], [ "elkjop.no", 0 ], [ "gigantti.fi", 0 ], [ "historianet.fi", [ 0, 17, 18 ] ], [ "tieku.fi", [ 0, 17, 18 ] ], [ "fruugo.at", 1 ], [ "fruugo.be", 1 ], [ "fruugo.cz", 1 ], [ "fruugo.de", 1 ], [ "fruugo.dk", 1 ], [ "fruugo.es", 1 ], [ "fruugo.fi", 1 ], [ "fruugo.gr", 1 ], [ "fruugo.hu", 1 ], [ "fruugo.ie", 1 ], [ "fruugo.it", 1 ], [ "fruugo.lu", 1 ], [ "fruugo.nl", 1 ], [ "fruugo.pl", 1 ], [ "fruugo.pt", 1 ], [ "fruugo.ro", 1 ], [ "fruugo.sk", 1 ], [ "fimfiction.net", 2 ], [ "eurogamer.nl", [ 3, 4 ] ], [ "eurogamer.es", [ 3, 4 ] ], [ "eurogamer.cz", [ 3, 4 ] ], [ "eurogamer.net", [ 3, 4 ] ], [ "eurogamer.pl", [ 3, 4 ] ], [ "eurogamer.pt", [ 3, 4 ] ], [ "rockpapershotgun.com", [ 3, 4 ] ], [ "vg247.com", [ 3, 4 ] ], [ "vadhander.hogakusten.com", 5 ], [ "vadhander.kramfors.se", 5 ], [ "stewes.de", 6 ], [ "gadgethacks.com", 7 ], [ "qastack.fr", 8 ], [ "xvideos.com", 9 ], [ "elconfidencial.com", 10 ], [ "euromaster.de", 10 ], [ "lavanguardia.com", 10 ], [ "strefabiznesu.pl", 10 ], [ "jofogas.hu", 10 ], [ "gamepro.de", 10 ], [ "melty.fr", 10 ], [ "mixingmonster.com", 11 ], [ "elektrotechnik-schabus.de", 11 ], [ "online.ch", 11 ], [ "media-consulting.ch", 11 ], [ "grafische-visualisierung.de", 11 ], [ "asfour.ch", 11 ], [ "achtsamerleben.de", 11 ], [ "foto-shooting.ch", 11 ], [ "savvista.com", 11 ], [ "marketing-strategen.com", 11 ], [ "aeotec.com", 11 ], [ "itv4.de", 11 ], [ "imprimare3d.com", 11 ], [ "juwelier-dringo.de", 11 ], [ "pulpe.eu", 11 ], [ "ilonpolku.fi", 11 ], [ "oculyze.net", 11 ], [ "mikanews.de", 11 ], [ "bitreporter.de", 11 ], [ "zertificon.com", 11 ], [ "kieruneknorwegia.pl", 11 ], [ "mannschaft.com", 11 ], [ "windowspower.de", 11 ], [ "bbfun.de", 11 ], [ "schreiners-it.de", 11 ], [ "infobroker.de", 11 ], [ "1000-haushaltstipps.de", 11 ], [ "theoblog.de", 11 ], [ "notebook-doktor.de", 11 ], [ "base-chat.de", 11 ], [ "campingbuddies.de", 11 ], [ "saunahuus.de", 11 ], [ "krefindo.de", 11 ], [ "tuhlteim.de", 11 ], [ "getaawp.com", 11 ], [ "wrestling-point.de", 11 ], [ "englishradar.com", 11 ], [ "wt-onlineakademie.de", 11 ], [ "readyforboarding.pl", 11 ], [ "thegeekfreaks.de", 11 ], [ "picockpit.com", 11 ], [ "der-windows-papst.de", 11 ], [ "kjr-pi.de", 11 ], [ "splendid-internet.de", 11 ], [ "do.de", 11 ], [ "compact-online.de", 11 ], [ "fuckyeah.shop", 11 ], [ "kiyoua-news.de", 11 ], [ "tourismus-uckermark.de", 11 ], [ "angelmagazin.de", 11 ], [ "technik-hauptstadt.de", 11 ], [ "tuhlteim-pedia.de", 11 ], [ "fobizz.com", 11 ], [ "fabian-heinz-webdesign.de", 11 ], [ "jpgames.de", 11 ], [ "kulturpass-kino.de", 11 ], [ "aspies.de", 11 ], [ "frixtender.de", 11 ], [ "brauerei-strate.de", 11 ], [ "hookahx.de", 11 ], [ "frickeldave.de", 11 ], [ "leben-mit-ohne.de", 11 ], [ "ilyabiz.com", 11 ], [ "neuneinhalb.org", 11 ], [ "baycix.de", 11 ], [ "basta.berlin", 11 ], [ "herrlichergarten.de", 11 ], [ "spieltraum-berlin.de", 11 ], [ "patria.net", 11 ], [ "blog.ipc-computer.de", 11 ], [ "gaming-grounds.de", 11 ], [ "ekiwi-blog.de", 11 ], [ "erp-up.de", 11 ], [ "philosophia-perennis.com", 11 ], [ "tecsafe.de", 11 ], [ "devm.io", 11 ], [ "schnittmuster-datenbank.de", 11 ], [ "rosgovas.com", 11 ], [ "blu-ray-rezensionen.net", 11 ], [ "bricksforge.io", 11 ], [ "lenovocampus.de", 11 ], [ "rotlichtaus.de", 11 ], [ "louisreynier.com", 11 ], [ "stricken-online.com", 11 ], [ "haarausfall-stopp.com", 11 ], [ "cargoe.at", 11 ], [ "pandore-gendarmerie.org", 11 ], [ "pureselfmade.com", 11 ], [ "fild.de", 11 ], [ "m-m-m.de", 11 ], [ "yogainspires.co.uk", 11 ], [ "youngimages.de", 11 ], [ "katzenbaumdesign.de", 11 ], [ "goerlach-gmbh.com", 11 ], [ "lichtempfindlich.org", 11 ], [ "gasthaus-schmidmayer.de", 11 ], [ "narrwalla.de", 11 ], [ "efg-passau.de", 11 ], [ "gefahrgutjaeger.de", 11 ], [ "locafrique-sf.com", 11 ], [ "financeads.com", 11 ], [ "tutonaut.de", 11 ], [ "freegossip.gr", 11 ], [ "ltmemory.de", 11 ], [ "randombrick.de", 11 ], [ "playcentral.de", 11 ], [ "nachbelichtet.com", 11 ], [ "philosophenlexikon.de", 11 ], [ "schulebruetten.ch", 11 ], [ "almacenessanagustin.com", 11 ], [ "autoverwertung-berk.de", 11 ], [ "gosch.de", 11 ], [ "ousuca.com", 11 ], [ "stw-langenfeld.de", 11 ], [ "yurishop.it", 11 ], [ "europace.de", 11 ], [ "autobrinkmann.de", 11 ], [ "move-ment.at", 11 ], [ "techniknews.net", 11 ], [ "epages.com", 11 ], [ "thinkingwithyou.com", 11 ], [ "mfu-pilotenclub.at", 11 ], [ "artkon.de", 11 ], [ "running-green.de", 11 ], [ "danielederosa.de", 11 ], [ "ivfp.de", 11 ], [ "bs-achern.de", 11 ], [ "swiss-commerce.ch", 11 ], [ "asga.ch", 11 ], [ "ellasblog.de", 11 ], [ "gamenite.de", 11 ], [ "mmo-sankar.de", 11 ], [ "istaf-indoor.de", 11 ], [ "iqskitchen.de", 11 ], [ "ekiwi.de", 11 ], [ "nordlicht-ev.de", 11 ], [ "zimmerwetter.de", 11 ], [ "pinel-netzwerk.de", 11 ], [ "bierspot.de", 11 ], [ "lightcon.com", 11 ], [ "roschmann.de", 11 ], [ "simtarife.de", 11 ], [ "egon-w-kreutzer.de", 11 ], [ "terra-natur.com", 11 ], [ "devowl.io", 11 ], [ "cleverpush.com", 11 ], [ "subitec.com", 11 ], [ "kwerfeldein.de", 11 ], [ "tecalliance.net", 11 ], [ "viel-unterwegs.de", 11 ], [ "madame-lenormand.de", 11 ], [ "4kfilme.de", 11 ], [ "gymnasium-hochdahl.de", 11 ], [ "popp.eu", 11 ], [ "maniac.de", 11 ], [ "supertipp-online.de", 11 ], [ "winlocal.de", 11 ], [ "schiffe-und-kreuzfahrten.de", 11 ], [ "guiademayores.com", 11 ], [ "jankarres.de", 11 ], [ "nahrungsmittel-intoleranz.com", 11 ], [ "branson-germany.de", 11 ], [ "miriamkreativ.de", 11 ], [ "zaunbau-koch.de", 11 ], [ "bsk-consulting.de", 11 ], [ "windata.de", 11 ], [ "prodopa.de", 11 ], [ "zahnarzt-kuboth.de", 11 ], [ "audiovision.de", 11 ], [ "brachmannofficial.com", 11 ], [ "compari.net", 11 ], [ "computer-und-technik-im-wohnmobil.de", 11 ], [ "seifriz-preis.de", 11 ], [ "suitapp.de", 11 ], [ "rossoft.co.uk", 11 ], [ "wind-craft.eu", 11 ], [ "manyanet.org", 11 ], [ "mack-design.com", 11 ], [ "pocket-pirates-prt.de", 11 ], [ "tanzschulebogner.de", 11 ], [ "toplink.de", 11 ], [ "vg-veitsbronn-seukendorf.de", 11 ], [ "skiweltcup.tv", 11 ], [ "desser.co.uk", 11 ], [ "symposium.org", 11 ], [ "manneskraft-gesteigert.com", 11 ], [ "barracred.com.br", 11 ], [ "tv-sport.de", 11 ], [ "boheme-schwabing.de", 11 ], [ "spherity.com", 11 ], [ "tc-equipment.de", 11 ], [ "webfactory-i4.de", 11 ], [ "webtimiser.de", 11 ], [ "wp-ninjas.de", 11 ], [ "profiel.de", 11 ], [ "goeltzschtal-reisen.de", 11 ], [ "everbloom.eu", 11 ], [ "myclim8.com", 11 ], [ "smiley.blue", 11 ], [ "tulipize.com", 11 ], [ "burzaucebnic.sk", 11 ], [ "komm-mit.com", 11 ], [ "istdasvegan.eu", 11 ], [ "openforests.com", 11 ], [ "industriemedien.at", 11 ], [ "torinostoria.com", 11 ], [ "igvm.de", 11 ], [ "pinel.de", 11 ], [ "music-service-geiger.de", 11 ], [ "insidetrading.de", 11 ], [ "ls-service.at", 11 ], [ "blogyourthing.com", 11 ], [ "bildung-ab-50.de", 11 ], [ "teilzeitreisender.de", 11 ], [ "vivoil.com", 11 ], [ "borderline-plattform.de", 11 ], [ "accace.ro", 11 ], [ "lang-ag.com", 11 ], [ "reise-zikaden.de", 11 ], [ "restaurant-lindenhof.at", 11 ], [ "nmmn.com", 11 ], [ "exitroom.berlin", 11 ], [ "weiterbildungsfinder.de", 11 ], [ "erfurt-touristinformation.de", 11 ], [ "elisazunder.de", 11 ], [ "visconti.partners", 11 ], [ "plr-paket.de", 11 ], [ "spytunes.com", 11 ], [ "schneelaeuferzunft.de", 11 ], [ "flaviamelissa.com.br", 11 ], [ "flughafen.tips", 11 ], [ "webtapete.de", 11 ], [ "erbsenprinzessin.com", 11 ], [ "cranimax.com", 11 ], [ "ac-grimmen.de", 11 ], [ "floristasgarcia.es", 11 ], [ "monikabirknerfreedombusiness.de", 11 ], [ "lattinepersonalizzate.it", 11 ], [ "olmatic.de", 11 ], [ "die-werbeschmiede.de", 11 ], [ "supereight.net", 11 ], [ "visitmedia.de", 11 ], [ "egro-direktwerbung.de", 11 ], [ "alleingeborener-zwilling.com", 11 ], [ "actrento.com", 11 ], [ "antik-shop.de", 11 ], [ "accace.cz", 11 ], [ "happiness-bundles.com", 11 ], [ "classic-emaille.de", 11 ], [ "fakturia.de", 11 ], [ "beeze.de", 11 ], [ "brunozimmer.de", 11 ], [ "derhoerbuchblog.de", 11 ], [ "udo-lermann.de", 11 ], [ "ciss.de", 11 ], [ "volksfest-nuernberg.de", 11 ], [ "ubisys.de", 11 ], [ "wildbits.de", 11 ], [ "softedu.pl", 11 ], [ "maxkoch.de", 11 ], [ "mario-kaps.de", 11 ], [ "salzstreuner.de", 11 ], [ "goessential.com", 11 ], [ "tiesse.com", 11 ], [ "compagniefruitiere.fr", 11 ], [ "motivationstipp.de", 11 ], [ "holzkisten-fabrik.de", 11 ], [ "dasmagazin.de", 11 ], [ "akademie-management.de", 11 ], [ "salzerkfz.de", 11 ], [ "aglini.com", 11 ], [ "m38a1.de", 11 ], [ "thomasschlechter.de", 11 ], [ "smorfianapoletanaweb.it", 11 ], [ "vzm.de", 11 ], [ "proofing.de", 11 ], [ "kbmv-matting.de", 11 ], [ "vitalplus.com", 11 ], [ "karver-systems.com", 11 ], [ "boeser-chinese.de", 11 ], [ "reinhardstrempel.de", 11 ], [ "bewusstes-zentrum.de", 11 ], [ "wildpark-ortenburg.de", 11 ], [ "24hessen.de", 11 ], [ "janamaenz.photography", 11 ], [ "prodottidellapiazza.it", 11 ], [ "continentale-hannover.de", 11 ], [ "accace.sk", 11 ], [ "wzl-zwickau.de", 11 ], [ "picipix.com", 11 ], [ "tkm-systemtechnik.de", 11 ], [ "drive4brands.de", 11 ], [ "brancaia.com", 11 ], [ "trirhena-consulting.de", 11 ], [ "pferde-hunde-therapie.de", 11 ], [ "ffzblossin.de", 11 ], [ "coyagaming.de", 11 ], [ "cocktailsworld.net", 11 ], [ "forum-koepenick.de", 11 ], [ "immobilien-skiba.de", 11 ], [ "penzkofer-bau.de", 11 ], [ "fitnesscenter-schardt.de", 11 ], [ "abcteile24.de", 11 ], [ "wohnmobilcenter-drechsler.de", 11 ], [ "crossculture-academy.com", 11 ], [ "blhv.de", 11 ], [ "blindbild.com", 11 ], [ "zouboulis.com", 11 ], [ "esderaiz.com", 11 ], [ "ichbindochnichthierumbeliebtzusein.com", 11 ], [ "von-zinsen-leben.de", 11 ], [ "c-parts.de", 11 ], [ "accademiainformatica.com", 11 ], [ "lobetalarbeit.de", 11 ], [ "hannover-living.de", 11 ], [ "tsg6209weinheim.de", 11 ], [ "stefaniegoldmarie.com", 11 ], [ "dictum-shop.de", 11 ], [ "oakbeardcare.com", 11 ], [ "patchbox.com", 11 ], [ "lazyinvestors.de", 11 ], [ "frohreich.de", 11 ], [ "transport-versicherungen.info", 11 ], [ "mummelito.de", 11 ], [ "reisekontakte.at", 11 ], [ "ojas.de", 11 ], [ "stadt-schoeneck.de", 11 ], [ "piazzadeimestieri.it", 11 ], [ "fasteninfos.de", 11 ], [ "brodbeck-dd.de", 11 ], [ "hundewelpe.de", 11 ], [ "jadent.de", 11 ], [ "duft-werk.de", 11 ], [ "wunderpen.com", 11 ], [ "crazeuk.com", 11 ], [ "drhorvath.de", 11 ], [ "weingut-knipser.de", 11 ], [ "donostiroller.com", 11 ], [ "roemermann.com", 11 ], [ "bestwig.de", 11 ], [ "tango-flores.de", 11 ], [ "china-central-consultants.com", 11 ], [ "lacasadavantialsole.org", 11 ], [ "naturseifen-moosmed.de", 11 ], [ "akzent-magazin.com", 11 ], [ "wp-loft.de", 11 ], [ "welte-glasuren.com", 11 ], [ "balsamico.shop", 11 ], [ "sl-landschaftsgestaltung.de", 11 ], [ "betec.de", 11 ], [ "alquilerordenadores.com", 11 ], [ "bayern-kreativ.de", 11 ], [ "tim-ehling.com", 11 ], [ "signisalc.org", 11 ], [ "coworkingrepublic.com", 11 ], [ "dacsa.com", 11 ], [ "plzenoviny.cz", 11 ], [ "odw-journal.de", 11 ], [ "kasteninblau.de", 11 ], [ "lichttraeumer.de", 11 ], [ "missinfogeek.net", 11 ], [ "automatiksysteme.com", 11 ], [ "adzurro.de", 11 ], [ "vectorsoft.de", 11 ], [ "suedafrika-wein.de", 11 ], [ "noaf.de", 11 ], [ "hundgemacht.net", 11 ], [ "testefiorite.it", 11 ], [ "klsys.com", 11 ], [ "feuerhexen.de", 11 ], [ "lemarit.com", 11 ], [ "lameerooftop.com", 11 ], [ "ideentitaet.com", 11 ], [ "kaiser-mania.de", 11 ], [ "accace.com", 11 ], [ "naku.at", 11 ], [ "goldpreis24.de", 11 ], [ "ejwleo.de", 11 ], [ "josefbergs.com", 11 ], [ "caucasus-naturefund.org", 11 ], [ "energiemetropole-leipzig.de", 11 ], [ "von-neindorff-stiftung.de", 11 ], [ "locandazita.com", 11 ], [ "samadhi-vegetarian.de", 11 ], [ "host.pl", 11 ], [ "pentadoc-radar.com", 11 ], [ "kd-slovenija.de", 11 ], [ "accace.hu", 11 ], [ "stilweb.it", 11 ], [ "wolfgangallgaeuer.com", 11 ], [ "kohlkg.de", 11 ], [ "rechtsanwalt-nierfeld.de", 11 ], [ "karlhoeffkes.de", 11 ], [ "verstehepferde.de", 11 ], [ "socceressen.de", 11 ], [ "dcore.de", 11 ], [ "edr-software.com", 11 ], [ "denk-doch-mal.de", 11 ], [ "meinstream.net", 11 ], [ "stefan-froescher.eu", 11 ], [ "zabel-group.de", 11 ], [ "photofloh.de", 11 ], [ "annabeauty-stuttgart.de", 11 ], [ "swg-chemnitz.de", 11 ], [ "klicks-kaufen.de", 11 ], [ "levne-sauny.cz", 11 ], [ "versicherungsmakler-leistenschneider.de", 11 ], [ "arsdigita.de", 11 ], [ "flugschule-hochries.de", 11 ], [ "osmc.de", 11 ], [ "zumkutscher.de", 11 ], [ "evkirche-eilsen.de", 11 ], [ "thingybob.de", 11 ], [ "inicionet.com", 11 ], [ "feucht-obsttechnik.de", 11 ], [ "weimar-touristinformation.de", 11 ], [ "yplay.de", 11 ], [ "vcfrankfurt.de", 11 ], [ "derklassiker.de", 11 ], [ "lepetitmarchedauvergne.fr", 11 ], [ "gooloo.de", 11 ], [ "pizzeria-algusto.de", 11 ], [ "presto-personaldienste.de", 11 ], [ "wallygusto.de", 11 ], [ "frigge-dinstak.de", 11 ], [ "klangmassage-moser.de", 11 ], [ "grupo-loma.com", 11 ], [ "samenbank-berlin.de", 11 ], [ "flow-in-yoga.de", 11 ], [ "lb-consultores.com", 11 ], [ "b757.info", 11 ], [ "luegeten.ch", 11 ], [ "hof-droste.de", 11 ], [ "aachen50plus.de", 11 ], [ "arabesque-essen.de", 11 ], [ "grid.de", 11 ], [ "canvascga.com", 11 ], [ "mallorca-unternehmen.com", 11 ], [ "hauspanorama.de", 11 ], [ "vienna-interiors.at", 11 ], [ "music-on-net.de", 11 ], [ "baumarkt-vogl.at", 11 ], [ "knoblauch.de", 11 ], [ "rissland-kunststoffe.de", 11 ], [ "fahrstil.cc", 11 ], [ "hallesches-fotoatelier.de", 11 ], [ "dollenberg-isolierung.de", 11 ], [ "timo-bernhard.de", 11 ], [ "feuerwehr-oberau.de", 11 ], [ "kuechenboerse.de", 11 ], [ "erlebnispark-ziegenhagen.de", 11 ], [ "frauzuckerbroetchen.com", 11 ], [ "hopfner.info", 11 ], [ "tiermasseur-mannsberger.at", 11 ], [ "gcol.de", 11 ], [ "blueoceangaming.com", 11 ], [ "pinel-medizin.de", 11 ], [ "knauer-galabau.de", 11 ], [ "zahnarzt-dr-henkel.de", 11 ], [ "tonispizza-rastatt.de", 11 ], [ "wichmann.biz", 11 ], [ "schuetzendepot.de", 11 ], [ "horizonte.com", 11 ], [ "dayspamainz.de", 11 ], [ "gerdes-reisen.de", 11 ], [ "dg-pw.de", 11 ], [ "brill-art.de", 11 ], [ "carbon.ag", 11 ], [ "199-euro-computer.de", 11 ], [ "pndracingteam.net", 11 ], [ "sv-langenfeld.de", 11 ], [ "steinway-park-seesen.de", 11 ], [ "sonderversum.com", 11 ], [ "forwardis.com", 11 ], [ "verein-fairbund.de", 11 ], [ "hs-soft.com", 11 ], [ "backstagefrankfurt.de", 11 ], [ "hans-engelke.de", 11 ], [ "vapecoco.com", 11 ], [ "imprints.de", 11 ], [ "rolandgermany.com", 11 ], [ "fschemie-goettingen.de", 11 ], [ "hypnose.ac", 11 ], [ "estudio-nous.com", 11 ], [ "kunstmuseum-heidenheim.de", 11 ], [ "htvb.org", 11 ], [ "ridee.bike", 11 ], [ "zur-glocke.com", 11 ], [ "hotelkristall.it", 11 ], [ "babiceurican.cz", 11 ], [ "farbenherz.com", 11 ], [ "it-koehler.com", 11 ], [ "bklm-ahaus.de", 11 ], [ "gesundheitsladen-online.de", 11 ], [ "createchange.me", 11 ], [ "amway-estonia.com", [ 12, 13, 14 ] ], [ "amway-latvia.com", [ 12, 13, 14 ] ], [ "amway-lithuania.com", [ 12, 13, 14 ] ], [ "amway.es", [ 12, 13, 14 ] ], [ "amway.no", [ 12, 13, 14 ] ], [ "amway.nl", [ 12, 13, 14 ] ], [ "amway.co.uk", [ 12, 13, 14 ] ], [ "amway.com.tr", [ 12, 13, 14 ] ], [ "amway.pt", [ 12, 13, 14 ] ], [ "amway.be", [ 12, 13, 14 ] ], [ "amway.sk", [ 12, 13, 14 ] ], [ "amway.de", [ 12, 13, 14 ] ], [ "amway.ch", [ 12, 13, 14 ] ], [ "amway.gr", [ 12, 13, 14 ] ], [ "amway.ie", [ 12, 13, 14 ] ], [ "amway.se", [ 12, 13, 14 ] ], [ "amway.pl", [ 12, 13, 14 ] ], [ "amway.bg", [ 12, 13, 14 ] ], [ "amway.hr", [ 12, 13, 14 ] ], [ "amway.dk", [ 12, 13, 14 ] ], [ "amway.cz", [ 12, 13, 14 ] ], [ "amway.si", [ 12, 13, 14 ] ], [ "amway.ro", [ 12, 13, 14 ] ], [ "amway.fr", [ 12, 13, 14 ] ], [ "amway.fi", [ 12, 13, 14 ] ], [ "amway.it", [ 12, 13, 14 ] ], [ "sourceforge.net", 15 ], [ "anna.fi", 16 ], [ "tweakers.net", [ 19, 20, 21, 22, 23, 24, 25 ] ], [ "yle.fi", [ 26, 27 ] ], [ "philips-hue.com", 28 ], [ "podimo.com", 29 ], [ "express.co.uk", 30 ] ]), o = new Map([]), r = new Map([]);
        function a(...e) {
            !function(e = !1, t = "", n = "") {
                if ("" === t) return;
                const o = i(), r = o.makeLogPrefix("set-constant", t, n), a = o.getExtraArgs(Array.from(arguments), 3);
                function s(t, n) {
                    const a = (() => {
                        const e = t.lastIndexOf(".");
                        return -1 === e ? t : t.slice(e + 1);
                    })();
                    if ("" === a) return;
                    const c = document.currentScript;
                    let d = function(e, t) {
                        const n = i(), o = n.getExtraArgs(Array.from(arguments), 2);
                        let r;
                        if ("undefined" === t) r = void 0; else if ("false" === t) r = !1; else if ("true" === t) r = !0; else if ("null" === t) r = null; else if ("''" === t || "" === t) r = ""; else if ("[]" === t || "emptyArr" === t) r = []; else if ("{}" === t || "emptyObj" === t) r = {}; else if ("noopFunc" === t) r = function() {}; else if ("trueFunc" === t) r = function() {
                            return !0;
                        }; else if ("falseFunc" === t) r = function() {
                            return !1;
                        }; else if (/^-?\d+$/.test(t)) {
                            if (r = parseInt(t), isNaN(t)) return;
                            if (Math.abs(t) > 32767) return;
                        } else {
                            if (!e) return;
                            if (t.startsWith("{") && t.endsWith("}")) try {
                                r = n.JSON_parse(t).value;
                            } catch (e) {
                                return;
                            }
                        }
                        if (void 0 !== o.as) {
                            if ("function" === o.as) return () => r;
                            if ("callback" === o.as) return () => () => r;
                            if ("resolved" === o.as) return Promise.resolve(r);
                            if ("rejected" === o.as) return Promise.reject(r);
                        }
                        return r;
                    }(e, n);
                    "noopFunc" !== n && "trueFunc" !== n && "falseFunc" !== n || (d = (e => (o.Object_defineProperty(e, "name", {
                        value: a
                    }), new Proxy(e, {
                        defineProperty(e, t) {
                            return "toString" === t || Reflect.defineProperty(...arguments);
                        },
                        deleteProperty(e, t) {
                            return "toString" === t || Reflect.deleteProperty(...arguments);
                        },
                        get(e, t) {
                            return "toString" === t ? function() {
                                return `function ${a}() { [native code] }`;
                            }.bind(null) : Reflect.get(...arguments);
                        }
                    })))(d));
                    let u = !1;
                    const l = function(t) {
                        return !e && (!!u || (u = null != t && null != d && typeof t != typeof d, u && o.uboLog(r, `Aborted because value set to ${t}`), 
                        u));
                    }, m = function(e, t, n, a) {
                        if (!1 === a.init(n ? e[t] : d)) return;
                        const i = o.Object_getOwnPropertyDescriptor(e, t);
                        let s, c;
                        i instanceof o.Object && (e[t] = d, i.get instanceof Function && (s = i.get), i.set instanceof Function && (c = i.set));
                        try {
                            o.Object_defineProperty(e, t, {
                                configurable: n,
                                get: () => (void 0 !== s && s(), a.getter()),
                                set(e) {
                                    void 0 !== c && c(e), a.setter(e);
                                }
                            }), o.uboLog(r, "Trap installed");
                        } catch (e) {
                            o.uboErr(r, e);
                        }
                    }, g = function(e, t) {
                        const n = t.indexOf(".");
                        if (-1 === n) return void m(e, t, !1, {
                            v: void 0,
                            init: function(e) {
                                return !l(e) && (this.v = e, !0);
                            },
                            getter: function() {
                                return document.currentScript === c ? this.v : (o.uboLog(r, "Property read"), d);
                            },
                            setter: function(e) {
                                !1 !== l(e) && (d = e);
                            }
                        });
                        const a = t.slice(0, n), i = e[a];
                        t = t.slice(n + 1), i instanceof o.Object || "object" == typeof i && null !== i ? g(i, t) : m(e, a, !0, {
                            v: void 0,
                            init: function(e) {
                                return this.v = e, !0;
                            },
                            getter: function() {
                                return this.v;
                            },
                            setter: function(e) {
                                this.v = e, e instanceof o.Object && g(e, t);
                            }
                        });
                    };
                    g(window, t);
                }
                !function(e, t) {
                    const n = e => {
                        const t = {
                            loading: 1,
                            interactive: 2,
                            end: 2,
                            2: 2,
                            complete: 3,
                            idle: 3,
                            3: 3
                        }, n = Array.isArray(e) ? e : [ e ];
                        for (const e of n) {
                            const n = `${e}`;
                            if (!1 !== t.hasOwnProperty(n)) return t[n];
                        }
                        return 0;
                    }, o = n(t);
                    if (n(document.readyState) >= o) return void e();
                    const a = i(), s = [ "readystatechange", () => {
                        n(document.readyState) < o || (e(), a.removeEventListener.apply(document, s));
                    }, {
                        capture: !0
                    } ];
                    a.addEventListener.apply(document, s);
                }((() => {
                    s(t, n);
                }), a.runAt);
            }(!1, ...e);
        }
        function i() {
            if (e.safeSelf) return e.safeSelf;
            const t = globalThis, n = {
                Array_from: Array.from,
                Error: t.Error,
                Function_toStringFn: t.Function.prototype.toString,
                Function_toString: e => n.Function_toStringFn.call(e),
                Math_floor: Math.floor,
                Math_max: Math.max,
                Math_min: Math.min,
                Math_random: Math.random,
                Object: Object,
                Object_defineProperty: Object.defineProperty.bind(Object),
                Object_fromEntries: Object.fromEntries.bind(Object),
                Object_getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor.bind(Object),
                RegExp: t.RegExp,
                RegExp_test: t.RegExp.prototype.test,
                RegExp_exec: t.RegExp.prototype.exec,
                Request_clone: t.Request.prototype.clone,
                XMLHttpRequest: t.XMLHttpRequest,
                addEventListener: t.EventTarget.prototype.addEventListener,
                removeEventListener: t.EventTarget.prototype.removeEventListener,
                fetch: t.fetch,
                JSON: t.JSON,
                JSON_parseFn: t.JSON.parse,
                JSON_stringifyFn: t.JSON.stringify,
                JSON_parse: (...e) => n.JSON_parseFn.call(n.JSON, ...e),
                JSON_stringify: (...e) => n.JSON_stringifyFn.call(n.JSON, ...e),
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
                initPattern(e, t = {}) {
                    if ("" === e) return {
                        matchAll: !0
                    };
                    const n = !0 !== t.canNegate || !1 === e.startsWith("!");
                    !1 === n && (e = e.slice(1));
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== o ? {
                        re: new this.RegExp(o[1], o[2] || t.flags),
                        expect: n
                    } : void 0 !== t.flags ? {
                        re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                        expect: n
                    } : {
                        pattern: e,
                        expect: n
                    };
                },
                testPattern(e, t) {
                    return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
                },
                patternToRegex(e, t, n = !1) {
                    if ("" === e) return /^/;
                    const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === o) {
                        const o = this.escapeRegexChars(e);
                        return new RegExp(n ? `^${o}$` : o, t);
                    }
                    try {
                        return new RegExp(o[1], o[2] || void 0);
                    } catch (e) {}
                    return /^/;
                },
                getExtraArgs(e, t = 0) {
                    const n = e.slice(t).reduce(((e, t, n, o) => {
                        if (0 == (1 & n)) {
                            const t = o[n + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                            e.push([ o[n], r ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(n);
                },
                onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e)
            };
            if (e.safeSelf = n, void 0 === e.bcSecret) return n;
            const o = new t.BroadcastChannel(e.bcSecret);
            let r = [];
            return n.logLevel = e.logLevel || 1, n.sendToLogger = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                if (void 0 === r) return o.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                });
                r.push({
                    type: e,
                    text: n
                });
            }, o.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: t}) => o.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    n.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    n.logLevel = 2;
                }
            }, o.postMessage("areyouready?"), n;
        }
        const s = [];
        try {
            s.push(...document.location.hostname.split("."));
        } catch (e) {}
        const c = s.length;
        if (0 === c) return;
        const d = new Set, u = [];
        if (0 !== r.size) {
            for (let e = 0; e < c; e++) {
                const t = s.slice(e).join("."), n = r.get(t);
                n && u.push(...n);
            }
            r.clear();
        }
        if (0 !== n.size) {
            const e = e => {
                let t = n.get(e);
                if (void 0 !== t) {
                    "number" == typeof t && (t = [ t ]);
                    for (const e of t) u.includes(e) || d.add(e);
                }
            };
            for (let t = 0; t < c; t++) e(s.slice(t).join("."));
            e("*"), n.clear();
        }
        if (0 !== o.size) {
            const e = c - 1;
            for (let t = 0; t < e; t++) for (let n = e; n > t; n--) {
                const e = s.slice(t, n).join(".");
                let r = o.get(e);
                if (void 0 !== r) {
                    "number" == typeof r && (r = [ r ]);
                    for (const e of r) u.includes(e) || d.add(e);
                }
            }
            o.clear();
        }
        for (const e of d) try {
            a(...t[e]);
        } catch (e) {}
        t.length = 0;
    };
    if ("object" != typeof wrappedJSObject) return e();
    {
        const t = self.wrappedJSObject;
        let n, o;
        try {
            t.uBOL_setConstant = cloneInto([ [ "(", e.toString(), ")();" ], {
                type: "text/javascript; charset=utf-8"
            } ], self);
            const r = new t.Blob(...t.uBOL_setConstant);
            o = t.URL.createObjectURL(r);
            const a = t.document;
            n = a.createElement("script"), n.async = !1, n.src = o, (a.head || a.documentElement || a).append(n);
        } catch (e) {}
        o && (n && n.remove(), t.URL.revokeObjectURL(o)), delete t.uBOL_setConstant;
    }
})();