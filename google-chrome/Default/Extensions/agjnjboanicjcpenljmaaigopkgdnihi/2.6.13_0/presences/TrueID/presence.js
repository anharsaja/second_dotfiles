var __webpack_exports__={};const presence=new Presence({clientId:"912784051801301053"}),browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=await presence.getSetting("timestamps"),t=await presence.getSetting("privacy"),a=await presence.getSetting("buttons"),s=document.location,n=s.pathname.substring(1,6),i={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/T/TrueID/assets/logo.jpg",startTimestamp:browsingTimestamp};switch(s.hostname){case"home.trueid.net":i.details="th-th"===n?"หน้าแรก":"Home page";break;case"movie.trueid.net":{let e,r,c=[],l=document.querySelector("#__next > div > div.wrapper.-spacing > div > div.banner > div.box_desc > header > h1")?.textContent??null;null===l&&(l=document.querySelector("#__next > div > div.wrapper.-spacing > div.player-wrap.contentbox > div.player-meta > div > header > div > h1")?.textContent??("th-th"===n?"ไม่พบ":"not found"));const d=document.querySelector("#section-category > div > div.col-12.col-sm-12.col-md-3.col-lg-2 > div > ul > li.active")?.textContent??("th-th"===n?"ไม่พบ":"not found");switch(!0){case s.pathname.includes("animation-genre"):i.details="th-th"===n?"อนิเมชัน":"Animation",i.state=`${"th-th"===n?"หมวดหมู่":"Category"} ${d}`;break;case s.pathname.includes("movies-genre"):i.details="th-th"===n?"หนัง":"Movies",i.state=`${"th-th"===n?"หมวดหมู่":"Category"} ${d}`;break;case s.pathname.includes("series-genre"):i.details="th-th"===n?"ซีรีส์":"Series",i.state=`${"th-th"===n?"หมวดหมู่":"Category"} ${d}`;break;case s.pathname.includes("tvshow-genre"):i.details="th-th"===n?"รวมฮิตวาไรตี้":"Variety Hits",i.state=`${"th-th"===n?"หมวดหมู่":"Category"} ${d}`;break;case s.pathname.includes("documentary-genre"):i.details="th-th"===n?"ความรู้ และ สารคดี":"Knowledge & Documentary",i.state=`${"th-th"===n?"หมวดหมู่":"Category"} ${d}`;break;case s.pathname.includes("series"):e=l.match(/\d+/g),r=l.replace(`EP.${e} | `,""),c=r.split("| "),i.details=`${"th-th"===n?"ซีรีส์":"Series"} ${e?t?"":"th-th"===n?`ตอนที่ ${e[0]}`:`Ep ${e[0]}`:""}`,i.state=`${c[1]??r}`,a&&(i.buttons=[{label:"th-th"===n?"ดูซีรีส์":"Watch Series",url:document.location.href.replace(/#\d+/,"")}]);break;case s.pathname.includes("movie"):i.details="th-th"===n?"หนัง":"Movie",i.state=`${l}`,a&&(i.buttons=[{label:"th-th"===n?"ดูหนัง":"Watch Movies",url:document.location.href.replace(/#\d+/,"")}]);break;default:i.details="Movie",i.state="th-th"===n?"หน้าแรก":"Home page"}break}case"tv.trueid.net":switch(!0){case s.pathname.includes("live"):i.details="th-th"===n?"ดูทีวีออนไลน์":"TV Online",i.state=`${"th-th"===n?"ช่อง":"Channel"} ${document.querySelector("#__next > div > div.wrapper.-spacing > div.player-block.d-flex > div > div.desc-nowrap.d-flex > div.desc-block.title-middle > div > h1")?.textContent??"".replace("ดูช่อง ","").replace("ออนไลน์","").split("–")[0]}`,i.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/live.png",a&&(i.buttons=[{label:"th-th"===n?"ดูทีวีออนไลน์":"Watch tv online",url:document.location.href.replace(/#\d+/,"")}]);break;case s.pathname.includes("tvguide"):i.details="Tv Guide",i.state="th-th"===n?"ผังรายการทีวีช่องทีวีทั้งหมด":"Program schedule of all channels",i.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/question.png";break;default:i.details="Tv",i.state="th-th"===n?"หน้าแรก":"Home page"}break;default:delete i.startTimestamp,delete i.endTimestamp}e||(delete i.startTimestamp,delete i.endTimestamp),t&&(delete i.state,delete i.buttons),i.details?presence.setActivity(i):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhYSxNQUFpQixVQUFUaEIsRUFBbUIsVUFBWSxZQUc1RCxLQUNKLENBQ0EsSUFBSyxnQkFDRCxRQUFRLEdBQ0osS0FBS0gsRUFBS0ksU0FBU2MsU0FBUyxRQUN4QlosRUFBYUksUUFBc0IsVUFBVFAsRUFBbUIsZ0JBQWtCLFlBQy9ERyxFQUFhYSxNQUFRLEdBQVksVUFBVGhCLEVBQW1CLE9BQVMsYUFBYUYsU0FBU2MsY0FBYywySUFBMklDLGFBQy9OLEdBQUdLLFFBQVEsVUFBVyxJQUFJQSxRQUFRLFVBQVcsSUFBSUMsTUFBTSxLQUFLLEtBQ2hFaEIsRUFBYW9CLGNBQWdCLCtDQUN6QjNCLElBQ0FPLEVBQWFQLFFBQVUsQ0FDbkIsQ0FDSXdCLE1BQW1CLFVBQVRwQixFQUFtQixnQkFBa0Isa0JBQy9DcUIsSUFBS3ZCLFNBQVNDLFNBQVN1QixLQUFLSixRQUFRLE9BQVEsT0FJeEQsTUFDSixLQUFLckIsRUFBS0ksU0FBU2MsU0FBUyxXQUN4QlosRUFBYUksUUFBVSxXQUN2QkosRUFBYWEsTUFDQSxVQUFUaEIsRUFDTSwrQkFDQSxtQ0FDVkcsRUFBYW9CLGNBQWdCLG1EQUM3QixNQUNKLFFBQ0lwQixFQUFhSSxRQUFVLEtBQ3ZCSixFQUFhYSxNQUFpQixVQUFUaEIsRUFBbUIsVUFBWSxZQUc1RCxNQUVKLGVBQ1dHLEVBQWFFLHNCQUNiRixFQUFhcUIsYUFHdkIvQixXQUNNVSxFQUFhRSxzQkFDYkYsRUFBYXFCLGNBRXBCN0IsV0FDT1EsRUFBYWEsYUFDYmIsRUFBYVAsU0FFcEJPLEVBQWFJLFFBQ2J4QixTQUFTMEMsWUFBWXRCLEdBRXJCcEIsU0FBUzBDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiOTEyNzg0MDUxODAxMzAxMDUzXCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdGltZSA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lc3RhbXBzXCIpLCBwcml2YWN5ID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcInByaXZhY3lcIiksIGJ1dHRvbnMgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwiYnV0dG9uc1wiKSwgcGF0aCA9IGRvY3VtZW50LmxvY2F0aW9uLCBsYW5nID0gcGF0aC5wYXRobmFtZS5zdWJzdHJpbmcoMSwgNiksIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL1QvVHJ1ZUlEL2Fzc2V0cy9sb2dvLmpwZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBzd2l0Y2ggKHBhdGguaG9zdG5hbWUpIHtcbiAgICAgICAgY2FzZSBcImhvbWUudHJ1ZWlkLm5ldFwiOiB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGxhbmcgPT09IFwidGgtdGhcIiA/IFwi4Lir4LiZ4LmJ4Liy4LmB4Lij4LiBXCIgOiBcIkhvbWUgcGFnZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIm1vdmllLnRydWVpZC5uZXRcIjoge1xuICAgICAgICAgICAgbGV0IGVwLCByZXN1bHQsIHJlc3VsdF8gPSBbXSwgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI19fbmV4dCA+IGRpdiA+IGRpdi53cmFwcGVyLi1zcGFjaW5nID4gZGl2ID4gZGl2LmJhbm5lciA+IGRpdi5ib3hfZGVzYyA+IGhlYWRlciA+IGgxXCIpPy50ZXh0Q29udGVudCA/PyBudWxsO1xuICAgICAgICAgICAgdGl0bGUgPT09IG51bGxcbiAgICAgICAgICAgICAgICA/ICh0aXRsZSA9XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjX19uZXh0ID4gZGl2ID4gZGl2LndyYXBwZXIuLXNwYWNpbmcgPiBkaXYucGxheWVyLXdyYXAuY29udGVudGJveCA+IGRpdi5wbGF5ZXItbWV0YSA+IGRpdiA+IGhlYWRlciA+IGRpdiA+IGgxXCIpPy50ZXh0Q29udGVudCA/PyBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC5hOC4oeC5iOC4nuC4mlwiIDogXCJub3QgZm91bmRcIn1gKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLWNhdGVnb3J5ID4gZGl2ID4gZGl2LmNvbC0xMi5jb2wtc20tMTIuY29sLW1kLTMuY29sLWxnLTIgPiBkaXYgPiB1bCA+IGxpLmFjdGl2ZVwiKT8udGV4dENvbnRlbnQgPz8gYCR7bGFuZyA9PT0gXCJ0aC10aFwiID8gXCLguYTguKHguYjguJ7guJpcIiA6IFwibm90IGZvdW5kXCJ9YDtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgcGF0aC5wYXRobmFtZS5pbmNsdWRlcyhcImFuaW1hdGlvbi1nZW5yZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4reC4meC4tOC5gOC4oeC4iuC4seC4mVwiIDogXCJBbmltYXRpb25cIn1gO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4q+C4oeC4p+C4lOC4q+C4oeC4ueC5iFwiIDogXCJDYXRlZ29yeVwifSAke3NlbGVjdG9yfWA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgcGF0aC5wYXRobmFtZS5pbmNsdWRlcyhcIm1vdmllcy1nZW5yZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4q+C4meC4seC4h1wiIDogXCJNb3ZpZXNcIn1gO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4q+C4oeC4p+C4lOC4q+C4oeC4ueC5iFwiIDogXCJDYXRlZ29yeVwifSAke3NlbGVjdG9yfWA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgcGF0aC5wYXRobmFtZS5pbmNsdWRlcyhcInNlcmllcy1nZW5yZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4i+C4teC4o+C4teC4quC5jFwiIDogXCJTZXJpZXNcIn1gO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4q+C4oeC4p+C4lOC4q+C4oeC4ueC5iFwiIDogXCJDYXRlZ29yeVwifSAke3NlbGVjdG9yfWA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgcGF0aC5wYXRobmFtZS5pbmNsdWRlcyhcInR2c2hvdy1nZW5yZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4o+C4p+C4oeC4ruC4tOC4leC4p+C4suC5hOC4o+C4leC4teC5iVwiIDogXCJWYXJpZXR5IEhpdHNcIn1gO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4q+C4oeC4p+C4lOC4q+C4oeC4ueC5iFwiIDogXCJDYXRlZ29yeVwifSAke3NlbGVjdG9yfWA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgcGF0aC5wYXRobmFtZS5pbmNsdWRlcyhcImRvY3VtZW50YXJ5LWdlbnJlXCIpOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGAke2xhbmcgPT09IFwidGgtdGhcIiA/IFwi4LiE4Lin4Liy4Lih4Lij4Li54LmJIOC5geC4peC4sCDguKrguLLguKPguITguJTguLVcIiA6IFwiS25vd2xlZGdlICYgRG9jdW1lbnRhcnlcIn1gO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4q+C4oeC4p+C4lOC4q+C4oeC4ueC5iFwiIDogXCJDYXRlZ29yeVwifSAke3NlbGVjdG9yfWA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgcGF0aC5wYXRobmFtZS5pbmNsdWRlcyhcInNlcmllc1wiKTpcbiAgICAgICAgICAgICAgICAgICAgZXAgPSB0aXRsZS5tYXRjaCgvXFxkKy9nKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGl0bGUucmVwbGFjZShgRVAuJHtlcH0gfCBgLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0XyA9IHJlc3VsdC5zcGxpdChcInwgXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGAke2xhbmcgPT09IFwidGgtdGhcIiA/IFwi4LiL4Li14Lij4Li14Liq4LmMXCIgOiBcIlNlcmllc1wifSAke2VwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke3ByaXZhY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxhbmcgPT09IFwidGgtdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGDguJXguK3guJnguJfguLXguYggJHtlcFswXX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYEVwICR7ZXBbMF19YH1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9YDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7cmVzdWx0X1sxXSA/PyByZXN1bHR9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGAke2xhbmcgPT09IFwidGgtdGhcIiA/IFwi4LiU4Li54LiL4Li14Lij4Li14Liq4LmMXCIgOiBcIldhdGNoIFNlcmllc1wifWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8jXFxkKy8sIFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgcGF0aC5wYXRobmFtZS5pbmNsdWRlcyhcIm1vdmllXCIpOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGAke2xhbmcgPT09IFwidGgtdGhcIiA/IFwi4Lir4LiZ4Lix4LiHXCIgOiBcIk1vdmllXCJ9YDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYCR7dGl0bGV9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGAke2xhbmcgPT09IFwidGgtdGhcIiA/IFwi4LiU4Li54Lir4LiZ4Lix4LiHXCIgOiBcIldhdGNoIE1vdmllc1wifWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8jXFxkKy8sIFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJNb3ZpZVwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4q+C4meC5ieC4suC5geC4o+C4gVwiIDogXCJIb21lIHBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwidHYudHJ1ZWlkLm5ldFwiOiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHBhdGgucGF0aG5hbWUuaW5jbHVkZXMoXCJsaXZlXCIpOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGAke2xhbmcgPT09IFwidGgtdGhcIiA/IFwi4LiU4Li54LiX4Li14Lin4Li14Lit4Lit4LiZ4LmE4Lil4LiZ4LmMXCIgOiBcIlRWIE9ubGluZVwifWA7XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGAke2xhbmcgPT09IFwidGgtdGhcIiA/IFwi4LiK4LmI4Lit4LiHXCIgOiBcIkNoYW5uZWxcIn0gJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI19fbmV4dCA+IGRpdiA+IGRpdi53cmFwcGVyLi1zcGFjaW5nID4gZGl2LnBsYXllci1ibG9jay5kLWZsZXggPiBkaXYgPiBkaXYuZGVzYy1ub3dyYXAuZC1mbGV4ID4gZGl2LmRlc2MtYmxvY2sudGl0bGUtbWlkZGxlID4gZGl2ID4gaDFcIik/LnRleHRDb250ZW50ID8/XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiLnJlcGxhY2UoXCLguJTguLnguIrguYjguK3guIcgXCIsIFwiXCIpLnJlcGxhY2UoXCLguK3guK3guJnguYTguKXguJnguYxcIiwgXCJcIikuc3BsaXQoXCLigJNcIilbMF19YDtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL2xpdmUucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidXR0b25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgJHtsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4lOC4ueC4l+C4teC4p+C4teC4reC4reC4meC5hOC4peC4meC5jFwiIDogXCJXYXRjaCB0diBvbmxpbmVcIn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvI1xcZCsvLCBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHBhdGgucGF0aG5hbWUuaW5jbHVkZXMoXCJ0dmd1aWRlXCIpOlxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVHYgR3VpZGVcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmcgPT09IFwidGgtdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLguJzguLHguIfguKPguLLguKLguIHguLLguKPguJfguLXguKfguLXguIrguYjguK3guIfguJfguLXguKfguLXguJfguLHguYnguIfguKvguKHguJRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJQcm9ncmFtIHNjaGVkdWxlIG9mIGFsbCBjaGFubmVsc1wiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcXVlc3Rpb24ucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJUdlwiO1xuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBsYW5nID09PSBcInRoLXRoXCIgPyBcIuC4q+C4meC5ieC4suC5geC4o+C4gVwiIDogXCJIb21lIHBhZ2VcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aW1lKSB7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgIH1cbiAgICBpZiAocHJpdmFjeSkge1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXRlO1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgfVxuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzV1VGQldTeERRVUZETEVWQlF6VkVMRTlCUVU4c1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWVXNVMEZCVXl4RFFVRkRMRVZCUTNaRUxFOUJRVThzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1UwRkJVeXhEUVVGRExFVkJRM1pFTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVONFFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVTndReXhaUVVGWkxFZEJRV2xDTzFGQlF6VkNMR0ZCUVdFc1JVRkRXaXcyUkVGQk5rUTdVVUZET1VRc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0TFFVTnFReXhEUVVGRE8wbEJSVWdzVVVGQlVTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTNSQ0xFdEJRVXNzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRaUVVOMlFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRMnhGTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhKUVVGSkxFVkJRVVVzUlVGRFRDeE5RVUZOTEVWQlEwNHNUMEZCVHl4SFFVRkhMRVZCUVVVc1JVRkRXaXhMUVVGTExFZEJRMG9zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZEY2tJc2MwWkJRWE5HTEVOQlEzUkdMRVZCUVVVc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF6dFpRVU42UWl4TFFVRkxMRXRCUVVzc1NVRkJTVHRuUWtGRFlpeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxPMjlDUVVOT0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlEzSkNMQ3RIUVVFclJ5eERRVU12Unl4RlFVRkZMRmRCUVZjc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdaMEpCUTJ4RkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdXVUZEVWl4TlFVRk5MRkZCUVZFc1IwRkRZaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4NVJrRkJlVVlzUTBGRGVrWXNSVUZCUlN4WFFVRlhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFsQlEycEZMRkZCUVZFc1NVRkJTU3hGUVVGRk8yZENRVU5pTEV0QlFVc3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN2IwSkJRemRETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1IwRkRkRUlzU1VGQlNTeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFhRVU5xUXl4RlFVRkZMRU5CUVVNN2IwSkJRMGdzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SFFVTndRaXhKUVVGSkxFdEJRVXNzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRMnBETEVsQlFVa3NVVUZCVVN4RlFVRkZMRU5CUVVNN2IwSkJRMllzVFVGQlRUdG5Ra0ZEVUN4TFFVRkxMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXp0dlFrRkRNVU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4SFFVRkhMRWxCUVVrc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03YjBKQlEycEZMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGRGNFSXNTVUZCU1N4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVTnFReXhKUVVGSkxGRkJRVkVzUlVGQlJTeERRVUZETzI5Q1FVTm1MRTFCUVUwN1owSkJRMUFzUzBGQlN5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU03YjBKQlF6RkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUjBGQlJ5eEpRVUZKTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMjlDUVVOdVJTeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUTNCQ0xFbEJRVWtzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGRGFrTXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJRenR2UWtGRFppeE5RVUZOTzJkQ1FVTlFMRXRCUVVzc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRPMjlDUVVNeFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWRCUTNSQ0xFbEJRVWtzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU1zWTBGRGRFTXNSVUZCUlN4RFFVRkRPMjlDUVVOSUxGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZEY0VJc1NVRkJTU3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVOcVF5eEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMjlDUVVObUxFMUJRVTA3WjBKQlExQXNTMEZCU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eHRRa0ZCYlVJc1EwRkJRenR2UWtGREwwTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhIUVVOMFFpeEpRVUZKTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRU5CUVVNc2VVSkJRek5ETEVWQlFVVXNRMEZCUXp0dlFrRkRTQ3haUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlEzQkNMRWxCUVVrc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkRha01zU1VGQlNTeFJRVUZSTEVWQlFVVXNRMEZCUXp0dlFrRkRaaXhOUVVGTk8yZENRVU5RTEV0QlFVc3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETzI5Q1FVTndReXhGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenR2UWtGRGVrSXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenR2UWtGRE1VTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUXpkQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSMEZCUnl4SlFVRkpMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1NVRkRMMFFzUlVGQlJUdDNRa0ZEUkN4RFFVRkRMRU5CUVVNc1IwRkRRU3hQUVVGUE96UkNRVU5PTEVOQlFVTXNRMEZCUXl4RlFVRkZPelJDUVVOS0xFTkJRVU1zUTBGQlF5eEpRVUZKTEV0QlFVc3NUMEZCVHp0blEwRkRiRUlzUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yZERRVU51UWl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEyUXNSVUZCUlR0M1FrRkRTaXhEUVVGRExFTkJRVU1zUlVGRFNpeEZRVUZGTEVOQlFVTTdiMEpCUTBnc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFVkJRVVVzUTBGQlF6dHZRa0ZETDBNc1NVRkJTU3hQUVVGUExFVkJRVVU3ZDBKQlExb3NXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSenMwUWtGRGRFSTdaME5CUTBNc1MwRkJTeXhGUVVGRkxFZEJRVWNzU1VGQlNTeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVWQlFVVTdaME5CUXpGRUxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXpzMlFrRkRMME03ZVVKQlEwUXNRMEZCUXp0eFFrRkRSanR2UWtGRFJDeE5RVUZOTzJkQ1FVTlFMRXRCUVVzc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRPMjlDUVVOdVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWRCUVVjc1NVRkJTU3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dHZRa0ZEYUVVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEV0QlFVc3NSVUZCUlN4RFFVRkRPMjlDUVVOb1F5eEpRVUZKTEU5QlFVOHNSVUZCUlR0M1FrRkRXaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZIT3pSQ1FVTjBRanRuUTBGRFF5eExRVUZMTEVWQlFVVXNSMEZCUnl4SlFVRkpMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMR05CUVdNc1JVRkJSVHRuUTBGRGVFUXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRE96WkNRVU12UXp0NVFrRkRSQ3hEUVVGRE8zRkNRVU5HTzI5Q1FVTkVMRTFCUVUwN1owSkJRMUE3YjBKQlEwTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU03YjBKQlF5OUNMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdiMEpCUTJoRkxFMUJRVTA3WVVGRFVEdFpRVVZFTEUxQlFVMDdVMEZEVGp0UlFVTkVMRXRCUVVzc1pVRkJaU3hEUVVGRExFTkJRVU03V1VGRGNrSXNVVUZCVVN4SlFVRkpMRVZCUVVVN1owSkJRMklzUzBGQlN5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03YjBKQlEyeERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUjBGRGRFSXNTVUZCU1N4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4WFFVTjBReXhGUVVGRkxFTkJRVU03YjBKQlEwZ3NXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExFbEJRVWtzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eEpRVU0xUkN4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVOeVFpeDNTVUZCZDBrc1EwRkRlRWtzUlVGQlJTeFhRVUZYTzNkQ1FVTmtMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGRE9VUXNSVUZCUlN4RFFVRkRPMjlDUVVOSUxGbEJRVmtzUTBGQlF5eGhRVUZoTEdsRVFVRmpMRU5CUVVNN2IwSkJRM3BETEVsQlFVa3NUMEZCVHl4RlFVRkZPM2RDUVVOYUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVYzdORUpCUTNSQ08yZERRVU5ETEV0QlFVc3NSVUZCUlN4SFFVTk9MRWxCUVVrc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc2FVSkJRM1JETEVWQlFVVTdaME5CUTBZc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZET3paQ1FVTXZRenQ1UWtGRFJDeERRVUZETzNGQ1FVTkdPMjlDUVVORUxFMUJRVTA3WjBKQlExQXNTMEZCU3l4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdiMEpCUTNKRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRPMjlDUVVOc1F5eFpRVUZaTEVOQlFVTXNTMEZCU3p0M1FrRkRha0lzU1VGQlNTeExRVUZMTEU5QlFVODdORUpCUTJZc1EwRkJReXhEUVVGRExEaENRVUU0UWpzMFFrRkRhRU1zUTBGQlF5eERRVUZETEd0RFFVRnJReXhEUVVGRE8yOUNRVU4yUXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h4UkVGQmEwSXNRMEZCUXp0dlFrRkROME1zVFVGQlRUdG5Ra0ZEVUR0dlFrRkRReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0dlFrRkROVUlzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJRenR2UWtGRGFFVXNUVUZCVFR0aFFVTlFPMWxCUlVRc1RVRkJUVHRUUVVOT08xRkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdXVUZEVWl4UFFVRlBMRmxCUVZrc1EwRkJReXhqUVVGakxFTkJRVU03V1VGRGJrTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRE8xTkJRMnBETzB0QlEwUTdTVUZEUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRk8xRkJRMVlzVDBGQlR5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUTI1RExFOUJRVThzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0TFFVTnFRenRKUVVORUxFbEJRVWtzVDBGQlR5eEZRVUZGTzFGQlExb3NUMEZCVHl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRekZDTEU5QlFVOHNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJRenRMUVVNMVFqdEpRVU5FTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTlCUVU4N1VVRkJSU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPenRSUVVONFJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkROMElzUTBGQlF5eERRVUZETEVOQlFVTWlmUT09Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImJyb3dzaW5nVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsIm9uIiwiYXN5bmMiLCJ0aW1lIiwiZ2V0U2V0dGluZyIsInByaXZhY3kiLCJidXR0b25zIiwicGF0aCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJsYW5nIiwicGF0aG5hbWUiLCJzdWJzdHJpbmciLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJob3N0bmFtZSIsImRldGFpbHMiLCJlcCIsInJlc3VsdCIsInJlc3VsdF8iLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInNlbGVjdG9yIiwiaW5jbHVkZXMiLCJzdGF0ZSIsIm1hdGNoIiwicmVwbGFjZSIsInNwbGl0IiwibGFiZWwiLCJ1cmwiLCJocmVmIiwic21hbGxJbWFnZUtleSIsImVuZFRpbWVzdGFtcCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;