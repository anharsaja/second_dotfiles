var __webpack_exports__={};const presence=new Presence({clientId:"928611702638010398"}),appCategories={LIBRARIES_AND_DEMO:"Browsing for libraries and demos",BUSINESS:"Browsing for business apps",VIDEO_PLAYERS:"Browsing for video players",WEATHER:"Browsing for weather apps",HOUSE_AND_HOME:"Browsing for house apps",PARENTING:"Browsing for apps for parents",DATING:"Browsing for dating apps",HEALTH_AND_FITNESS:"Browsing for health apps",ART_AND_DESIGN:"Browsing for design apps",TOOLS:"Browsing for tools",MAPS_AND_NAVIGATION:"Browsing for navigation apps",BOOKS_AND_REFERENCE:"Browsing for book apps",COMICS:"Browsing for comics",COMMUNICATION:"Browsing for communication apps",BEAUTY:"Browsing for beauty apps",MEDICAL:"Browsing for medical apps",MUSIC_AND_AUDIO:"Browsing for audio apps",LIFESTYLE:"Browsing for lifestyle apps",NEWS_AND_MAGAZINES:"Browsing for news apps",EDUCATION:"Browsing for education apps",SHOPPING:"Browsing for shopping apps",PERSONALIZATION:"Browsing for personalization apps",AUTO_AND_VEHICLES:"Browsing for vehicles apps",ANDROID_WEAR:"Browsing for android watch apps",PRODUCTIVITY:"Browsing for productivity apps",TRAVEL_AND_LOCAL:"Browsing for traveling apps",ENTERTAINMENT:"Browsing for entertaiment apps",SOCIAL:"Browsing for social apps",SPORTS:"Browsing for sport apps",EVENTS:"Browsing for eventing apps",FINANCE:"Browsing for financing apps",PHOTOGRAPHY:"Browsing for photography apps",FOOD_AND_DRINK:"Browsing for food apps",WATCH_FACE:"Browisng for android watch faces"};presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Google%20Play/assets/logo.png"},s=new URLSearchParams(document.location.search),i=document.location.pathname.split("/");if(i[0]||i.shift(),"settings"===i[0]&&(e.details="Viewing settings"),"apps"!==i[0]||i[1]){if("wishlist"===i[0])e.details="Viewing wishlist";else if("store"===i[0])switch("family"===i[1]&&"create"===i[2]&&(e.details="Creating family"),i[1]){case"paymentmethods":e.details="Viewing payment methods";break;case"myplayactivity":e.details="Viewing my activity";break;case"search":{const i=s.get("q");e.details="Searching"+(i?` for ${i}`:"");break}case"account":if(i[2]&&"rewards"!==i[2])switch(i[2]){case"orderhistory":e.details="Viewing order hystory";break;case"family":e.details="Viewing family";break;case"subscriptions":e.details="Viewing subscriptions"}else e.details="Viewing rewards";break;case"apps":if(i[2])switch(i[2]){case"top":e.details="Browsing for the TOP apps";break;case"new":e.details="Browsing for the new apps";break;case"details":if(s.get("id")){const s=document.querySelector("body > div#fcxH9b > div.WpDbMd > c-wiz > div.T4LgNb > div.ZfcPIb > div.UTg3hd > div.JNury > main.LXrl4c > c-wiz > c-wiz > div.oQ6oV"),i=s?.querySelector("div.hkhL9e > div.xSyT2c > img.T75of")?.src,r=s?.querySelector("div.D0ZKYe > div.rlnrKc > div.sIskre > c-wiz > h1.AHFaub > span").textContent;i&&(e.largeImageKey=await getShortURL(i)),e.details=`Viewing ${r??"app"}`,e.buttons=[{label:"View app",url:await getShortURL(document.location.href)}]}break;case"category":{let s="Browsing for apps";i[3].startsWith("GAME_")&&(s=`Browsing for ${i[3].replace("GAME_","").replace("_"," ").toLowerCase()} games`),appCategories[i[3]]&&(s=appCategories[i[3]]),"GAME"===i[3]&&(s="Browsing for games"),e.details=s??"Browsing for apps";break}}else e.details="Browsing for apps"}}else e.details="Viewing my apps";e.details?presence.setActivity(e):presence.setActivity()}));const shortenedURLs={};async function getShortURL(e){if(!e||e.length<256)return e;if(shortenedURLs[e])return shortenedURLs[e];try{const s=await(await fetch(`https://pd.premid.app/create/${e}`)).text();return shortenedURLs[e]=s,s}catch(s){return presence.error(s),e}}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YixTQUFiQSxFQUFNLEtBQ05rQixFQUFNLHNCQUNWekIsRUFBYVcsUUFBVWMsR0FBTyxvQkFDOUIsS0FDSixPQXhDSnpCLEVBQWFXLFFBQVUsMEJBNUNuQ1gsRUFBYVcsUUFBVSxrQkEyRnZCWCxFQUFhVyxRQUNibkQsU0FBU3FFLFlBQVk3QixHQUVyQnhDLFNBQVNxRSxhQUFhLElBRTlCLE1BQU1DLGNBQWdCLENBQUMsRUFDdkIvQixlQUFlcUIsWUFBWUcsR0FDdkIsSUFBS0EsR0FBT0EsRUFBSVEsT0FBUyxJQUNyQixPQUFPUixFQUNYLEdBQUlPLGNBQWNQLEdBQ2QsT0FBT08sY0FBY1AsR0FDekIsSUFDSSxNQUFNUyxjQUFxQkMsTUFBTSxnQ0FBZ0NWLE1BQVFXLE9BRXpFLE9BREFKLGNBQWNQLEdBQU9TLEVBQ2RBLENBS1gsQ0FIQSxNQUFPRyxHQUVILE9BREEzRSxTQUFTNEUsTUFBTUQsR0FDUlosQ0FDWCxDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjkyODYxMTcwMjYzODAxMDM5OFwiLFxufSksIGFwcENhdGVnb3JpZXMgPSB7XG4gICAgTElCUkFSSUVTX0FORF9ERU1POiBcIkJyb3dzaW5nIGZvciBsaWJyYXJpZXMgYW5kIGRlbW9zXCIsXG4gICAgQlVTSU5FU1M6IFwiQnJvd3NpbmcgZm9yIGJ1c2luZXNzIGFwcHNcIixcbiAgICBWSURFT19QTEFZRVJTOiBcIkJyb3dzaW5nIGZvciB2aWRlbyBwbGF5ZXJzXCIsXG4gICAgV0VBVEhFUjogXCJCcm93c2luZyBmb3Igd2VhdGhlciBhcHBzXCIsXG4gICAgSE9VU0VfQU5EX0hPTUU6IFwiQnJvd3NpbmcgZm9yIGhvdXNlIGFwcHNcIixcbiAgICBQQVJFTlRJTkc6IFwiQnJvd3NpbmcgZm9yIGFwcHMgZm9yIHBhcmVudHNcIixcbiAgICBEQVRJTkc6IFwiQnJvd3NpbmcgZm9yIGRhdGluZyBhcHBzXCIsXG4gICAgSEVBTFRIX0FORF9GSVRORVNTOiBcIkJyb3dzaW5nIGZvciBoZWFsdGggYXBwc1wiLFxuICAgIEFSVF9BTkRfREVTSUdOOiBcIkJyb3dzaW5nIGZvciBkZXNpZ24gYXBwc1wiLFxuICAgIFRPT0xTOiBcIkJyb3dzaW5nIGZvciB0b29sc1wiLFxuICAgIE1BUFNfQU5EX05BVklHQVRJT046IFwiQnJvd3NpbmcgZm9yIG5hdmlnYXRpb24gYXBwc1wiLFxuICAgIEJPT0tTX0FORF9SRUZFUkVOQ0U6IFwiQnJvd3NpbmcgZm9yIGJvb2sgYXBwc1wiLFxuICAgIENPTUlDUzogXCJCcm93c2luZyBmb3IgY29taWNzXCIsXG4gICAgQ09NTVVOSUNBVElPTjogXCJCcm93c2luZyBmb3IgY29tbXVuaWNhdGlvbiBhcHBzXCIsXG4gICAgQkVBVVRZOiBcIkJyb3dzaW5nIGZvciBiZWF1dHkgYXBwc1wiLFxuICAgIE1FRElDQUw6IFwiQnJvd3NpbmcgZm9yIG1lZGljYWwgYXBwc1wiLFxuICAgIE1VU0lDX0FORF9BVURJTzogXCJCcm93c2luZyBmb3IgYXVkaW8gYXBwc1wiLFxuICAgIExJRkVTVFlMRTogXCJCcm93c2luZyBmb3IgbGlmZXN0eWxlIGFwcHNcIixcbiAgICBORVdTX0FORF9NQUdBWklORVM6IFwiQnJvd3NpbmcgZm9yIG5ld3MgYXBwc1wiLFxuICAgIEVEVUNBVElPTjogXCJCcm93c2luZyBmb3IgZWR1Y2F0aW9uIGFwcHNcIixcbiAgICBTSE9QUElORzogXCJCcm93c2luZyBmb3Igc2hvcHBpbmcgYXBwc1wiLFxuICAgIFBFUlNPTkFMSVpBVElPTjogXCJCcm93c2luZyBmb3IgcGVyc29uYWxpemF0aW9uIGFwcHNcIixcbiAgICBBVVRPX0FORF9WRUhJQ0xFUzogXCJCcm93c2luZyBmb3IgdmVoaWNsZXMgYXBwc1wiLFxuICAgIEFORFJPSURfV0VBUjogXCJCcm93c2luZyBmb3IgYW5kcm9pZCB3YXRjaCBhcHBzXCIsXG4gICAgUFJPRFVDVElWSVRZOiBcIkJyb3dzaW5nIGZvciBwcm9kdWN0aXZpdHkgYXBwc1wiLFxuICAgIFRSQVZFTF9BTkRfTE9DQUw6IFwiQnJvd3NpbmcgZm9yIHRyYXZlbGluZyBhcHBzXCIsXG4gICAgRU5URVJUQUlOTUVOVDogXCJCcm93c2luZyBmb3IgZW50ZXJ0YWltZW50IGFwcHNcIixcbiAgICBTT0NJQUw6IFwiQnJvd3NpbmcgZm9yIHNvY2lhbCBhcHBzXCIsXG4gICAgU1BPUlRTOiBcIkJyb3dzaW5nIGZvciBzcG9ydCBhcHBzXCIsXG4gICAgRVZFTlRTOiBcIkJyb3dzaW5nIGZvciBldmVudGluZyBhcHBzXCIsXG4gICAgRklOQU5DRTogXCJCcm93c2luZyBmb3IgZmluYW5jaW5nIGFwcHNcIixcbiAgICBQSE9UT0dSQVBIWTogXCJCcm93c2luZyBmb3IgcGhvdG9ncmFwaHkgYXBwc1wiLFxuICAgIEZPT0RfQU5EX0RSSU5LOiBcIkJyb3dzaW5nIGZvciBmb29kIGFwcHNcIixcbiAgICBXQVRDSF9GQUNFOiBcIkJyb3dpc25nIGZvciBhbmRyb2lkIHdhdGNoIGZhY2VzXCIsXG59O1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dvb2dsZSUyMFBsYXkvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgfSwgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCksIHBhdGhzID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgIGlmICghcGF0aHNbMF0pXG4gICAgICAgIHBhdGhzLnNoaWZ0KCk7XG4gICAgaWYgKHBhdGhzWzBdID09PSBcInNldHRpbmdzXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHNldHRpbmdzXCI7XG4gICAgaWYgKHBhdGhzWzBdID09PSBcImFwcHNcIiAmJiAhcGF0aHNbMV0pXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIG15IGFwcHNcIjtcbiAgICBlbHNlIGlmIChwYXRoc1swXSA9PT0gXCJ3aXNobGlzdFwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB3aXNobGlzdFwiO1xuICAgIGVsc2UgaWYgKHBhdGhzWzBdID09PSBcInN0b3JlXCIpIHtcbiAgICAgICAgaWYgKHBhdGhzWzFdID09PSBcImZhbWlseVwiICYmIHBhdGhzWzJdID09PSBcImNyZWF0ZVwiKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkNyZWF0aW5nIGZhbWlseVwiO1xuICAgICAgICBzd2l0Y2ggKHBhdGhzWzFdKSB7XG4gICAgICAgICAgICBjYXNlIFwicGF5bWVudG1ldGhvZHNcIjoge1xuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHBheW1lbnQgbWV0aG9kc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIm15cGxheWFjdGl2aXR5XCI6IHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBteSBhY3Rpdml0eVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IHF1ZXJ5LmdldChcInFcIik7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgU2VhcmNoaW5nJHtxID8gYCBmb3IgJHtxfWAgOiBcIlwifWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudFwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXRoc1syXSB8fCBwYXRoc1syXSA9PT0gXCJyZXdhcmRzXCIpXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHJld2FyZHNcIjtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoc1syXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9yZGVyaGlzdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgb3JkZXIgaHlzdG9yeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZhbWlseVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgZmFtaWx5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3Vic2NyaXB0aW9uc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgc3Vic2NyaXB0aW9uc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJhcHBzXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAoIXBhdGhzWzJdKVxuICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQnJvd3NpbmcgZm9yIGFwcHNcIjtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoc1syXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkJyb3dzaW5nIGZvciB0aGUgVE9QIGFwcHNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJuZXdcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJCcm93c2luZyBmb3IgdGhlIG5ldyBhcHBzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGV0YWlsc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5LmdldChcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiNmY3hIOWIgPiBkaXYuV3BEYk1kID4gYy13aXogPiBkaXYuVDRMZ05iID4gZGl2LlpmY1BJYiA+IGRpdi5VVGczaGQgPiBkaXYuSk51cnkgPiBtYWluLkxYcmw0YyA+IGMtd2l6ID4gYy13aXogPiBkaXYub1E2b1ZcIiksIGxvZ28gPSBib2R5Py5xdWVyeVNlbGVjdG9yKFwiZGl2LmhraEw5ZSA+IGRpdi54U3lUMmMgPiBpbWcuVDc1b2ZcIik/LnNyYywgbmFtZSA9IGJvZHk/LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuRDBaS1llID4gZGl2LnJsbnJLYyA+IGRpdi5zSXNrcmUgPiBjLXdpeiA+IGgxLkFIRmF1YiA+IHNwYW5cIikudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBhd2FpdCBnZXRTaG9ydFVSTChsb2dvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBgVmlld2luZyAke25hbWUgPz8gXCJhcHBcIn1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IGFwcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYXdhaXQgZ2V0U2hvcnRVUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjYXRlZ29yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IFwiQnJvd3NpbmcgZm9yIGFwcHNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aHNbM10uc3RhcnRzV2l0aChcIkdBTUVfXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IGBCcm93c2luZyBmb3IgJHtwYXRoc1szXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJHQU1FX1wiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJfXCIsIFwiIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCl9IGdhbWVzYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwcENhdGVnb3JpZXNbcGF0aHNbM11dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBhcHBDYXRlZ29yaWVzW3BhdGhzWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aHNbM10gPT09IFwiR0FNRVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkJyb3dzaW5nIGZvciBnYW1lc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gbXNnID8/IFwiQnJvd3NpbmcgZm9yIGFwcHNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG5jb25zdCBzaG9ydGVuZWRVUkxzID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRTaG9ydFVSTCh1cmwpIHtcbiAgICBpZiAoIXVybCB8fCB1cmwubGVuZ3RoIDwgMjU2KVxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIGlmIChzaG9ydGVuZWRVUkxzW3VybF0pXG4gICAgICAgIHJldHVybiBzaG9ydGVuZWRVUkxzW3VybF07XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGRVUkwgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYGh0dHBzOi8vcGQucHJlbWlkLmFwcC9jcmVhdGUvJHt1cmx9YCkpLnRleHQoKTtcbiAgICAgICAgc2hvcnRlbmVkVVJMc1t1cmxdID0gcGRVUkw7XG4gICAgICAgIHJldHVybiBwZFVSTDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBwcmVzZW5jZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4aFFVRmhMRWRCUVRKQ08wbEJRM1pETEd0Q1FVRnJRaXhGUVVGRkxHdERRVUZyUXp0SlFVTjBSQ3hSUVVGUkxFVkJRVVVzTkVKQlFUUkNPMGxCUTNSRExHRkJRV0VzUlVGQlJTdzBRa0ZCTkVJN1NVRkRNME1zVDBGQlR5eEZRVUZGTERKQ1FVRXlRanRKUVVOd1F5eGpRVUZqTEVWQlFVVXNlVUpCUVhsQ08wbEJRM3BETEZOQlFWTXNSVUZCUlN3clFrRkJLMEk3U1VGRE1VTXNUVUZCVFN4RlFVRkZMREJDUVVFd1FqdEpRVU5zUXl4clFrRkJhMElzUlVGQlJTd3dRa0ZCTUVJN1NVRkRPVU1zWTBGQll5eEZRVUZGTERCQ1FVRXdRanRKUVVNeFF5eExRVUZMTEVWQlFVVXNiMEpCUVc5Q08wbEJRek5DTEcxQ1FVRnRRaXhGUVVGRkxEaENRVUU0UWp0SlFVTnVSQ3h0UWtGQmJVSXNSVUZCUlN4M1FrRkJkMEk3U1VGRE4wTXNUVUZCVFN4RlFVRkZMSEZDUVVGeFFqdEpRVU0zUWl4aFFVRmhMRVZCUVVVc2FVTkJRV2xETzBsQlEyaEVMRTFCUVUwc1JVRkJSU3d3UWtGQk1FSTdTVUZEYkVNc1QwRkJUeXhGUVVGRkxESkNRVUV5UWp0SlFVTndReXhsUVVGbExFVkJRVVVzZVVKQlFYbENPMGxCUXpGRExGTkJRVk1zUlVGQlJTdzJRa0ZCTmtJN1NVRkRlRU1zYTBKQlFXdENMRVZCUVVVc2QwSkJRWGRDTzBsQlF6VkRMRk5CUVZNc1JVRkJSU3cyUWtGQk5rSTdTVUZEZUVNc1VVRkJVU3hGUVVGRkxEUkNRVUUwUWp0SlFVTjBReXhsUVVGbExFVkJRVVVzYlVOQlFXMURPMGxCUTNCRUxHbENRVUZwUWl4RlFVRkZMRFJDUVVFMFFqdEpRVU12UXl4WlFVRlpMRVZCUVVVc2FVTkJRV2xETzBsQlF5OURMRmxCUVZrc1JVRkJSU3huUTBGQlowTTdTVUZET1VNc1owSkJRV2RDTEVWQlFVVXNOa0pCUVRaQ08wbEJReTlETEdGQlFXRXNSVUZCUlN4blEwRkJaME03U1VGREwwTXNUVUZCVFN4RlFVRkZMREJDUVVFd1FqdEpRVU5zUXl4TlFVRk5MRVZCUVVVc2VVSkJRWGxDTzBsQlEycERMRTFCUVUwc1JVRkJSU3cwUWtGQk5FSTdTVUZEY0VNc1QwRkJUeXhGUVVGRkxEWkNRVUUyUWp0SlFVTjBReXhYUVVGWExFVkJRVVVzSzBKQlFTdENPMGxCUXpWRExHTkJRV01zUlVGQlJTeDNRa0ZCZDBJN1NVRkRlRU1zVlVGQlZTeEZRVUZGTEd0RFFVRnJRenREUVVNNVF5eERRVUZETzBGQlJVZ3NVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMR0ZCUVdFc1JVRkRXaXh2UlVGQmIwVTdTMEZEY2tVc1JVRkRSQ3hMUVVGTExFZEJRVWNzU1VGQlNTeGxRVUZsTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGRGNrUXNTMEZCU3l4SFFVRmhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVONlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVGRkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVVTNRaXhKUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VlFVRlZPMUZCUVVVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRKUVVOMlJTeEpRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhOUVVGTkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1RExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03VTBGRGNrTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVlVGQlZUdFJRVUZGTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2EwSkJRV3RDTEVOQlFVTTdVMEZEZGtVc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NUMEZCVHl4RlFVRkZPMUZCUXpsQ0xFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRkZCUVZFc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVVUZCVVR0WlFVTnFSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xRkJRekZETEZGQlFWRXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8xbEJRMnBDTEV0QlFVc3NaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJRenRuUWtGRGFrUXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMmRDUVVOMFFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSEZDUVVGeFFpeERRVUZETzJkQ1FVTTNReXhOUVVGTk8yRkJRMDQ3V1VGRFJDeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVOa0xFMUJRVTBzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEzcENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMmRDUVVVeFJDeE5RVUZOTzJGQlEwNDdXVUZEUkN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRE8yZENRVU5tTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNN2IwSkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdjVUpCUTNKRE8yOUNRVU5LTEZGQlFWRXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8zZENRVU5xUWl4TFFVRkxMR05CUVdNc1EwRkJReXhEUVVGRE96UkNRVU53UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPelJDUVVNdlF5eE5RVUZOTzNsQ1FVTk9PM2RDUVVORUxFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTTdORUpCUTJRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenMwUWtGRGVFTXNUVUZCVFR0NVFrRkRUanQzUWtGRFJDeExRVUZMTEdWQlFXVTdORUpCUTI1Q08yZERRVU5ETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdOa0pCUlM5RE96UkNRVU5FTEUxQlFVMDdjVUpCUTFBN2FVSkJRMFE3WjBKQlEwUXNUVUZCVFR0aFFVTk9PMWxCUTBRc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZEV2l4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZCUlN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPM0ZDUVVOeVJEdHZRa0ZEU2l4UlFVRlJMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdDNRa0ZEYWtJc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6czBRa0ZEV0N4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExESkNRVUV5UWl4RFFVRkRPelJDUVVOdVJDeE5RVUZOTzNsQ1FVTk9PM2RDUVVORUxFdEJRVXNzUzBGQlN5eERRVUZETEVOQlFVTTdORUpCUTFnc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3lRa0ZCTWtJc1EwRkJRenMwUWtGRGJrUXNUVUZCVFR0NVFrRkRUanQzUWtGRFJDeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRPelJDUVVObUxFbEJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRuUTBGRGNFSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGFrTXNjVWxCUVhGSkxFTkJRM0pKTEVWQlEwUXNTVUZCU1N4SFFVRkhMRWxCUVVrc1JVRkJSU3hoUVVGaExFTkJRM3BDTEhGRFFVRnhReXhEUVVOeVF5eEZRVUZGTEVkQlFVY3NSVUZEVGl4SlFVRkpMRWRCUVVjc1NVRkJTU3hGUVVGRkxHRkJRV0VzUTBGRGVrSXNhVVZCUVdsRkxFTkJRMnBGTEVOQlFVTXNWMEZCVnl4RFFVRkRPMmREUVVWbUxFbEJRVWtzU1VGQlNUdHZRMEZCUlN4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExFMUJRVTBzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmREUVVVdlJDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRmRCUVZjc1NVRkJTU3hKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETzJkRFFVTnNSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzI5RFFVTjBRanQzUTBGRFF5eExRVUZMTEVWQlFVVXNWVUZCVlR0M1EwRkRha0lzUjBGQlJ5eEZRVUZGTEUxQlFVMHNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzNGRFFVTTVRenRwUTBGRFJDeERRVUZET3paQ1FVTkdPelJDUVVWRUxFMUJRVTA3ZVVKQlEwNDdkMEpCUTBRc1MwRkJTeXhWUVVGVkxFTkJRVU1zUTBGQlF6czBRa0ZEYUVJc1NVRkJTU3hIUVVGSExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNN05FSkJRemxDTEVsQlFVa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0blEwRkRha01zUjBGQlJ5eEhRVUZITEdkQ1FVRm5RaXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzNGRFFVTTFRaXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVXNRMEZCUXp0eFEwRkRjRUlzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN2NVTkJRMnBDTEZkQlFWY3NSVUZCUlN4UlFVRlJMRU5CUVVNN05rSkJRM2hDT3pSQ1FVTkVMRWxCUVVrc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blEwRkJSU3hIUVVGSExFZEJRVWNzWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96UkNRVU16UkN4SlFVRkpMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eE5RVUZOTzJkRFFVRkZMRWRCUVVjc1IwRkJSeXh2UWtGQmIwSXNRMEZCUXpzMFFrRkZjRVFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4SFFVRkhMRWxCUVVrc2JVSkJRVzFDTEVOQlFVTTdORUpCUld4RUxFMUJRVTA3ZVVKQlEwNDdjVUpCUlVRN2FVSkJRMFE3WjBKQlJVUXNUVUZCVFR0aFFVTk9PMU5CUlVRN1MwRkRSRHRKUVVWRUxFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRlNDeE5RVUZOTEdGQlFXRXNSMEZCTWtJc1JVRkJSU3hEUVVGRE8wRkJRMnBFTEV0QlFVc3NWVUZCVlN4WFFVRlhMRU5CUVVNc1IwRkJWenRKUVVOeVF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ6dFJRVUZGTEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTNwRExFbEJRVWtzWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVRkZMRTlCUVU4c1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyeEVMRWxCUVVrN1VVRkRTQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlEyNUNMRTFCUVUwc1MwRkJTeXhEUVVGRExHZERRVUZuUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVOc1JDeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTFRc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTXpRaXhQUVVGUExFdEJRVXNzUTBGQlF6dExRVU5pTzBsQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVN1VVRkRZaXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNCQ0xFOUJRVThzUjBGQlJ5eERRVUZETzB0QlExZzdRVUZEUml4RFFVRkRJbjA9Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsImFwcENhdGVnb3JpZXMiLCJMSUJSQVJJRVNfQU5EX0RFTU8iLCJCVVNJTkVTUyIsIlZJREVPX1BMQVlFUlMiLCJXRUFUSEVSIiwiSE9VU0VfQU5EX0hPTUUiLCJQQVJFTlRJTkciLCJEQVRJTkciLCJIRUFMVEhfQU5EX0ZJVE5FU1MiLCJBUlRfQU5EX0RFU0lHTiIsIlRPT0xTIiwiTUFQU19BTkRfTkFWSUdBVElPTiIsIkJPT0tTX0FORF9SRUZFUkVOQ0UiLCJDT01JQ1MiLCJDT01NVU5JQ0FUSU9OIiwiQkVBVVRZIiwiTUVESUNBTCIsIk1VU0lDX0FORF9BVURJTyIsIkxJRkVTVFlMRSIsIk5FV1NfQU5EX01BR0FaSU5FUyIsIkVEVUNBVElPTiIsIlNIT1BQSU5HIiwiUEVSU09OQUxJWkFUSU9OIiwiQVVUT19BTkRfVkVISUNMRVMiLCJBTkRST0lEX1dFQVIiLCJQUk9EVUNUSVZJVFkiLCJUUkFWRUxfQU5EX0xPQ0FMIiwiRU5URVJUQUlOTUVOVCIsIlNPQ0lBTCIsIlNQT1JUUyIsIkVWRU5UUyIsIkZJTkFOQ0UiLCJQSE9UT0dSQVBIWSIsIkZPT0RfQU5EX0RSSU5LIiwiV0FUQ0hfRkFDRSIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5IiwicXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwic2VhcmNoIiwicGF0aHMiLCJwYXRobmFtZSIsInNwbGl0Iiwic2hpZnQiLCJkZXRhaWxzIiwicSIsImdldCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwibG9nbyIsInNyYyIsIm5hbWUiLCJ0ZXh0Q29udGVudCIsImdldFNob3J0VVJMIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwiaHJlZiIsIm1zZyIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzZXRBY3Rpdml0eSIsInNob3J0ZW5lZFVSTHMiLCJsZW5ndGgiLCJwZFVSTCIsImZldGNoIiwidGV4dCIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
undefined;