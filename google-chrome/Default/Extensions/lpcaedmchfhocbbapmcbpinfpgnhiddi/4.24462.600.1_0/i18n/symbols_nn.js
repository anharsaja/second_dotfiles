/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=this||self,b=function(f,h){f=f.split(".");var d=a;f[0]in d||typeof d.execScript=="undefined"||d.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||h===void 0?d=d[g]&&d[g]!==Object.prototype[g]?d[g]:d[g]={}:d[g]=h};var c={i:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},h:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};var e={la:"y",ta:"y G",ma:"MMM y",na:"MMMM y",ua:"MM/y",K:"MMM d",L:"MMMM dd",N:"M/d",M:"MMMM d",ra:"MMM d, y",ja:"EEE, MMM d",sa:"EEE, MMM d, y",o:"d",qa:"MMM d, h:mm\u202fa zzzz"};var k={B:["BC","AD"],A:["Before Christ","Anno Domini"],P:"JFMAMJJASOND".split(""),ca:"JFMAMJJASOND".split(""),J:"January February March April May June July August September October November December".split(" "),ba:"January February March April May June July August September October November December".split(" "),Y:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ea:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ia:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ga:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),fa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),R:"SMTWTFS".split(""),da:"SMTWTFS".split(""),Z:["Q1","Q2","Q3","Q4"],W:["1st quarter","2nd quarter","3rd quarter","4th quarter"],g:["AM","PM"],l:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ha:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],m:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],D:6,ka:[5,
6],F:5};var l={u:".",G:",",S:"%",pa:"0",V:"+",I:"-",C:"E",U:"\u2030",H:"\u221e",O:"NaN",s:"#,##0.###",X:"#E0",T:"#,##0%",j:"\u00a4#,##0.00",v:"USD"};b("I18N_DATETIMESYMBOLS_ERAS",k.B);b("I18N_DATETIMESYMBOLS_ERANAMES",k.A);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",k.P);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",k.ca);b("I18N_DATETIMESYMBOLS_MONTHS",k.J);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",k.ba);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",k.Y);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",k.ea);b("I18N_DATETIMESYMBOLS_WEEKDAYS",k.ia);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",k.ga);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",k.aa);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",k.fa);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",k.R);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",k.da);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",k.Z);b("I18N_DATETIMESYMBOLS_QUARTERS",k.W);b("I18N_DATETIMESYMBOLS_AMPMS",k.g);b("I18N_DATETIMESYMBOLS_DATEFORMATS",k.l);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",k.ha);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",k.m);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",k.D);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",k.ka);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",k.F);b("I18N_DATETIMEPATTERNS_YEAR_FULL",e.la);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",e.ma);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",e.na);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",e.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",e.L);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",e.N);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",e.M);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",e.ja);b("I18N_DATETIMEPATTERNS_DAY_ABBR",e.o);
k.oa!==void 0&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",k.oa);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.u);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.S);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.pa);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.V);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.I);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.C);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.U);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.H);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.O);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.s);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.X);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.T);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.v);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.i);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.h);