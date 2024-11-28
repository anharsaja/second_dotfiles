/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,k){f=f.split(".");var e=a;f[0]in e||typeof e.execScript=="undefined"||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||k===void 0?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={i:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},h:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};
c={i:{1E3:{other:"0\u00a0t\u016bkst."},1E4:{other:"00\u00a0t\u016bkst."},1E5:{other:"000\u00a0t\u016bkst."},1E6:{other:"0\u00a0milj."},1E7:{other:"00\u00a0milj."},1E8:{other:"000\u00a0milj."},1E9:{other:"0\u00a0mljrd."},1E10:{other:"00\u00a0mljrd."},1E11:{other:"000\u00a0mljrd."},1E12:{other:"0\u00a0trilj."},1E13:{other:"00\u00a0trilj."},1E14:{other:"000\u00a0trilj."}},h:{1E3:{other:"0 t\u016bksto\u0161i"},1E4:{other:"00 t\u016bksto\u0161i"},1E5:{other:"000 t\u016bksto\u0161i"},1E6:{other:"0 miljoni"},
1E7:{other:"00 miljoni"},1E8:{other:"000 miljoni"},1E9:{other:"0 miljardi"},1E10:{other:"00 miljardi"},1E11:{other:"000 miljardi"},1E12:{other:"0 triljoni"},1E13:{other:"00 triljoni"},1E14:{other:"000 triljoni"}}};var d={la:"y",sa:"y G",ma:"MMM y",na:"MMMM y",ta:"MM/y",K:"MMM d",L:"MMMM dd",N:"M/d",M:"MMMM d",qa:"MMM d, y",ja:"EEE, MMM d",ra:"EEE, MMM d, y",o:"d",pa:"MMM d, h:mm\u202fa zzzz"};d={la:"y. 'g'.",sa:"G y. 'g'.",ma:"y. 'g'. MMM",na:"y. 'g'. MMMM",ta:"MM.y.",K:"d. MMM",L:"dd. MMMM",N:"dd.MM.",M:"d. MMMM",qa:"y. 'g'. d. MMM",ja:"EEE, d. MMM",ra:"EEE, y. 'g'. d. MMM",o:"d",pa:"d. MMM HH:mm zzzz"};var h={B:["BC","AD"],A:["Before Christ","Anno Domini"],P:"JFMAMJJASOND".split(""),ca:"JFMAMJJASOND".split(""),J:"January February March April May June July August September October November December".split(" "),ba:"January February March April May June July August September October November December".split(" "),Y:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ea:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ia:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ga:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),fa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),R:"SMTWTFS".split(""),da:"SMTWTFS".split(""),Z:["Q1","Q2","Q3","Q4"],W:["1st quarter","2nd quarter","3rd quarter","4th quarter"],g:["AM","PM"],l:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ha:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],m:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],D:6,ka:[5,
6],F:5};
h={B:["p.m.\u0113.","m.\u0113."],A:["pirms m\u016bsu \u0113ras","m\u016bsu \u0113r\u0101"],P:"JFMAMJJASOND".split(""),ca:"JFMAMJJASOND".split(""),J:"janv\u0101ris febru\u0101ris marts apr\u012blis maijs j\u016bnijs j\u016blijs augusts septembris oktobris novembris decembris".split(" "),ba:"janv\u0101ris febru\u0101ris marts apr\u012blis maijs j\u016bnijs j\u016blijs augusts septembris oktobris novembris decembris".split(" "),Y:"janv. febr. marts apr. maijs j\u016bn. j\u016bl. aug. sept. okt. nov. dec.".split(" "),ea:"janv. febr. marts apr. maijs j\u016bn. j\u016bl. aug. sept. okt. nov. dec.".split(" "),
ia:"sv\u0113tdiena pirmdiena otrdiena tre\u0161diena ceturtdiena piektdiena sestdiena".split(" "),ga:"Sv\u0113tdiena Pirmdiena Otrdiena Tre\u0161diena Ceturtdiena Piektdiena Sestdiena".split(" "),aa:"sv\u0113td. pirmd. otrd. tre\u0161d. ceturtd. piektd. sestd.".split(" "),fa:"Sv\u0113td. Pirmd. Otrd. Tre\u0161d. Ceturtd. Piektd. Sestd.".split(" "),R:"SPOTCPS".split(""),da:"SPOTCPS".split(""),Z:["1.\u00a0cet.","2.\u00a0cet.","3.\u00a0cet.","4.\u00a0cet."],W:["1. ceturksnis","2. ceturksnis","3. ceturksnis",
"4. ceturksnis"],g:["priek\u0161pusdien\u0101","p\u0113cpusdien\u0101"],l:["EEEE, y. 'gada' d. MMMM","y. 'gada' d. MMMM","y. 'gada' d. MMM","dd.MM.yy"],ha:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],m:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],D:0,ka:[5,6],F:6};var l={u:".",G:",",S:"%",oa:"0",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"NaN",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"\u00a4#,##0.00",v:"USD"};l={u:",",G:"\u00a0",S:"%",oa:"0",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"NS",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"#,##0.00\u00a0\u00a4",v:"EUR"};b("I18N_DATETIMESYMBOLS_ERAS",h.B);b("I18N_DATETIMESYMBOLS_ERANAMES",h.A);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.P);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.ca);b("I18N_DATETIMESYMBOLS_MONTHS",h.J);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.ba);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Y);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.ea);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ia);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ga);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.fa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.R);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.da);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.Z);b("I18N_DATETIMESYMBOLS_QUARTERS",h.W);b("I18N_DATETIMESYMBOLS_AMPMS",h.g);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.l);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ha);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.m);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.D);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ka);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.F);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.la);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.ma);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.na);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.L);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.N);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.M);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.ja);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.o);
h.ua!==void 0&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ua);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.u);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.S);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.oa);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.V);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.I);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.C);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.U);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.H);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.O);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.s);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.X);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.T);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.v);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.i);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.h);
