var __webpack_exports__={};const presence=new Presence({clientId:"973729201104511007"}),browsingTimestamp=Math.floor(Date.now()/1e3),map=[{id:2,map:"Teyvat",city:!0,image:{small:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/4.png",default:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/6.png",preview:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/6.png"}},{id:7,map:"Enkanomiya",image:{small:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/8.png",default:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/5.png",preview:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/16.png"}},{id:9,map:"The Chasm: Underground Mines",key:["chasm","the-chasm-underground"],image:{small:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/9.png",default:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/7.png",preview:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/13.png"}},{id:12,map:"Golden Apple Archipelago",key:["isles","golden-apple-archipelago-2-8"],image:{small:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/17.png",default:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/15.png",preview:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/14.png"},starting:1657854e3,ending:1661295600},{id:0,map:"Unknown",image:{small:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/4.png",default:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/4.png"}}],city=[{position:1200,map:"Mondstadt",image:{small:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/1.png",default:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/10.png",preview:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/10.png"}},{position:2500,map:"Liyue",image:{small:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/2.png",default:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/11.png",preview:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/11.png"}},{position:5e3,map:"Sumeru",image:{small:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/18.png",default:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/19.png",preview:["https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/19.png","https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/0.png"]}},{position:9e3,map:"Inazuma",image:{small:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/3.png",default:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/12.png",preview:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/12.png"}}];let oldMap,current,currentCity,getPosition,randomNumber;function getImage(e,t){const s=currentCity?.image??current.image;return Array.isArray(s[e])&&"preview"===e?s[e][t?Math.floor(randomNumber*s[e].length):0]:s[e]||current.image.default}presence.on("UpdateData",(async()=>{const[e,t,s]=await Promise.all([presence.getSetting("timestamps"),presence.getSetting("showPreview"),presence.getSetting("randomPreview")]),a={details:"Genshin Impact Map",largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/G/Genshin%20Impact%20Map/assets/logo.png",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/search.png",startTimestamp:browsingTimestamp},{hash:n,host:i,hostname:r,pathname:p,search:c}=document.location,g=new URLSearchParams(c);if("mapgenie.io"!==r||p.includes("genshin-impact")){switch(r){case"genshin-impact-map.appsample.com":current=map.find((e=>e.key?.includes(g.get("map")?.toLowerCase())??e.map.toLowerCase().includes(g.get("map")?.toLowerCase()||"teyvat")));break;case"mapgenie.io":current=map.find((e=>e.key?.includes(p?.split("/maps/")[1]?.toLowerCase())??e.map.toLowerCase().includes(p?.split("/maps/")[1]?.toLowerCase()||"teyvat")));break;default:if(p.includes("signin-sea"))return;current=map.find((e=>e.id===(parseInt(n?.split("/map/")[1]?.split("?")[0])||2))),getPosition=parseInt(new URLSearchParams(n).get("center")),currentCity=current?.city?city.find((e=>e.position>=getPosition)):null}current&&(oldMap!==(currentCity?.map??current.map)&&(oldMap=currentCity?.map??current.map,randomNumber=Math.random()),(!current.starting||!current.ending||current.starting<Date.now()/1e3&&current.ending>Date.now()/1e3)&&(!current.starting&&!current.ending||current.starting<Date.now()/1e3||current.ending>Date.now()/1e3)||(current=map[0]),a.details=current.map,a.state=current.city&&currentCity?currentCity.map:null,a.largeImageKey=getImage(t?"preview":"default",s),a.smallImageKey=current.city&&currentCity?currentCity.image.small:current.image.small,a.smallImageText=i.replace(".com",""),e||(delete a.startTimestamp,delete a.endTimestamp),a.details?presence.setActivity(a):presence.setActivity())}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FDbEIsT0FDSmpDLFFBQVVaLElBQUk4QyxNQUFLQyxHQUFLQSxFQUFFOUMsTUFBUWtELFNBQVNmLEdBQU1jLE1BQU0sU0FBUyxJQUFJQSxNQUFNLEtBQUssS0FBTyxLQUN0RnBDLFlBQWNxQyxTQUFTLElBQUlQLGdCQUFnQlIsR0FBTVksSUFBSSxXQUVqRG5DLFlBREFELFNBQVNWLEtBQ0tBLEtBQUs0QyxNQUFLQyxHQUFLQSxFQUFFckMsVUFBWUksY0FFN0IsS0FHckJGLFVBRURELFVBQVlFLGFBQWFiLEtBQU9ZLFFBQVFaLE9BQ3hDVyxPQUFTRSxhQUFhYixLQUFPWSxRQUFRWixJQUNyQ2UsYUFBZW5CLEtBQUtzQixZQUVwQk4sUUFBUUosV0FDUkksUUFBUUgsUUFDTkcsUUFBUUosU0FBV1YsS0FBS0MsTUFBUSxLQUFRYSxRQUFRSCxPQUFTWCxLQUFLQyxNQUFRLFFBRWxFYSxRQUFRSixXQUFZSSxRQUFRSCxRQUNoQ0csUUFBUUosU0FBV1YsS0FBS0MsTUFBUSxLQUFRYSxRQUFRSCxPQUFTWCxLQUFLQyxNQUFRLE9BRnhFYSxRQUFVWixJQUFJLElBSWxCK0IsRUFBYUMsUUFBVXBCLFFBQVFaLElBQy9CK0IsRUFBYXFCLE1BQVF4QyxRQUFRVixNQUFRVyxZQUFjQSxZQUFZYixJQUFNLEtBQ3JFK0IsRUFBYUUsY0FBZ0JqQixTQUFTVSxFQUFjLFVBQVksVUFBV0MsR0FDM0VJLEVBQWFHLGNBQ1R0QixRQUFRVixNQUFRVyxZQUFjQSxZQUFZVixNQUFNQyxNQUFRUSxRQUFRVCxNQUFNQyxNQUMxRTJCLEVBQWFzQixlQUFpQmhCLEVBQUtpQixRQUFRLE9BQVEsSUFDOUM3QixXQUNNTSxFQUFhSSxzQkFDYkosRUFBYXdCLGNBRXBCeEIsRUFBYUMsUUFDYnhDLFNBQVNnRSxZQUFZekIsR0FFckJ2QyxTQUFTZ0UsY0FuREgsQ0FtRGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjk3MzcyOTIwMTEwNDUxMTAwN1wiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5jb25zdCBtYXAgPSBbXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbWFwOiBcIlRleXZhdFwiLFxuICAgICAgICBjaXR5OiB0cnVlLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc21hbGw6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzQucG5nXCIsXG4gICAgICAgICAgICBkZWZhdWx0OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HZW5zaGluJTIwSW1wYWN0JTIwTWFwL2Fzc2V0cy82LnBuZ1wiLFxuICAgICAgICAgICAgcHJldmlldzogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2Vuc2hpbiUyMEltcGFjdCUyME1hcC9hc3NldHMvNi5wbmdcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIG1hcDogXCJFbmthbm9taXlhXCIsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBzbWFsbDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2Vuc2hpbiUyMEltcGFjdCUyME1hcC9hc3NldHMvOC5wbmdcIixcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzUucG5nXCIsXG4gICAgICAgICAgICBwcmV2aWV3OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HZW5zaGluJTIwSW1wYWN0JTIwTWFwL2Fzc2V0cy8xNi5wbmdcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG1hcDogXCJUaGUgQ2hhc206IFVuZGVyZ3JvdW5kIE1pbmVzXCIsXG4gICAgICAgIGtleTogW1wiY2hhc21cIiwgXCJ0aGUtY2hhc20tdW5kZXJncm91bmRcIl0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBzbWFsbDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2Vuc2hpbiUyMEltcGFjdCUyME1hcC9hc3NldHMvOS5wbmdcIixcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzcucG5nXCIsXG4gICAgICAgICAgICBwcmV2aWV3OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HZW5zaGluJTIwSW1wYWN0JTIwTWFwL2Fzc2V0cy8xMy5wbmdcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICBtYXA6IFwiR29sZGVuIEFwcGxlIEFyY2hpcGVsYWdvXCIsXG4gICAgICAgIGtleTogW1wiaXNsZXNcIiwgXCJnb2xkZW4tYXBwbGUtYXJjaGlwZWxhZ28tMi04XCJdLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc21hbGw6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzE3LnBuZ1wiLFxuICAgICAgICAgICAgZGVmYXVsdDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2Vuc2hpbiUyMEltcGFjdCUyME1hcC9hc3NldHMvMTUucG5nXCIsXG4gICAgICAgICAgICBwcmV2aWV3OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HZW5zaGluJTIwSW1wYWN0JTIwTWFwL2Fzc2V0cy8xNC5wbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRpbmc6IDE2NTc4NTQwMDAsXG4gICAgICAgIGVuZGluZzogMTY2MTI5NTYwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG1hcDogXCJVbmtub3duXCIsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBzbWFsbDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2Vuc2hpbiUyMEltcGFjdCUyME1hcC9hc3NldHMvNC5wbmdcIixcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzQucG5nXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbl0sIGNpdHkgPSBbXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogMTIwMCxcbiAgICAgICAgbWFwOiBcIk1vbmRzdGFkdFwiLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc21hbGw6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzEucG5nXCIsXG4gICAgICAgICAgICBkZWZhdWx0OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HZW5zaGluJTIwSW1wYWN0JTIwTWFwL2Fzc2V0cy8xMC5wbmdcIixcbiAgICAgICAgICAgIHByZXZpZXc6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzEwLnBuZ1wiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogMjUwMCxcbiAgICAgICAgbWFwOiBcIkxpeXVlXCIsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBzbWFsbDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2Vuc2hpbiUyMEltcGFjdCUyME1hcC9hc3NldHMvMi5wbmdcIixcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzExLnBuZ1wiLFxuICAgICAgICAgICAgcHJldmlldzogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2Vuc2hpbiUyMEltcGFjdCUyME1hcC9hc3NldHMvMTEucG5nXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiA1MDAwLFxuICAgICAgICBtYXA6IFwiU3VtZXJ1XCIsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBzbWFsbDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2Vuc2hpbiUyMEltcGFjdCUyME1hcC9hc3NldHMvMTgucG5nXCIsXG4gICAgICAgICAgICBkZWZhdWx0OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HZW5zaGluJTIwSW1wYWN0JTIwTWFwL2Fzc2V0cy8xOS5wbmdcIixcbiAgICAgICAgICAgIHByZXZpZXc6IFtcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HZW5zaGluJTIwSW1wYWN0JTIwTWFwL2Fzc2V0cy8xOS5wbmdcIiwgXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0cvR2Vuc2hpbiUyMEltcGFjdCUyME1hcC9hc3NldHMvMC5wbmdcIl0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiA5MDAwLFxuICAgICAgICBtYXA6IFwiSW5henVtYVwiLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgc21hbGw6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzMucG5nXCIsXG4gICAgICAgICAgICBkZWZhdWx0OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvRy9HZW5zaGluJTIwSW1wYWN0JTIwTWFwL2Fzc2V0cy8xMi5wbmdcIixcbiAgICAgICAgICAgIHByZXZpZXc6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzLzEyLnBuZ1wiLFxuICAgICAgICB9LFxuICAgIH0sXG5dO1xubGV0IG9sZE1hcCwgY3VycmVudCwgY3VycmVudENpdHksIGdldFBvc2l0aW9uLCByYW5kb21OdW1iZXI7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IFt0aW1lc3RhbXBzLCBzaG93UHJldmlldywgcmFuZG9tUHJldmlld10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lc3RhbXBzXCIpLFxuICAgICAgICBwcmVzZW5jZS5nZXRTZXR0aW5nKFwic2hvd1ByZXZpZXdcIiksXG4gICAgICAgIHByZXNlbmNlLmdldFNldHRpbmcoXCJyYW5kb21QcmV2aWV3XCIpLFxuICAgIF0pLCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGRldGFpbHM6IFwiR2Vuc2hpbiBJbXBhY3QgTWFwXCIsXG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9HL0dlbnNoaW4lMjBJbXBhY3QlMjBNYXAvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvc2VhcmNoLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfSwgeyBoYXNoLCBob3N0LCBob3N0bmFtZSwgcGF0aG5hbWUsIHNlYXJjaCB9ID0gZG9jdW1lbnQubG9jYXRpb24sIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKTtcbiAgICBpZiAoaG9zdG5hbWUgPT09IFwibWFwZ2VuaWUuaW9cIiAmJiAhcGF0aG5hbWUuaW5jbHVkZXMoXCJnZW5zaGluLWltcGFjdFwiKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHN3aXRjaCAoaG9zdG5hbWUpIHtcbiAgICAgICAgY2FzZSBcImdlbnNoaW4taW1wYWN0LW1hcC5hcHBzYW1wbGUuY29tXCI6XG4gICAgICAgICAgICBjdXJyZW50ID0gbWFwLmZpbmQoaSA9PiBpLmtleT8uaW5jbHVkZXMoc2VhcmNoUGFyYW1zLmdldChcIm1hcFwiKT8udG9Mb3dlckNhc2UoKSkgPz9cbiAgICAgICAgICAgICAgICBpLm1hcFxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoUGFyYW1zLmdldChcIm1hcFwiKT8udG9Mb3dlckNhc2UoKSB8fCBcInRleXZhdFwiKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1hcGdlbmllLmlvXCI6XG4gICAgICAgICAgICBjdXJyZW50ID0gbWFwLmZpbmQoaSA9PiBpLmtleT8uaW5jbHVkZXMocGF0aG5hbWU/LnNwbGl0KFwiL21hcHMvXCIpWzFdPy50b0xvd2VyQ2FzZSgpKSA/P1xuICAgICAgICAgICAgICAgIGkubWFwXG4gICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhwYXRobmFtZT8uc3BsaXQoXCIvbWFwcy9cIilbMV0/LnRvTG93ZXJDYXNlKCkgfHwgXCJ0ZXl2YXRcIikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJzaWduaW4tc2VhXCIpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBtYXAuZmluZChpID0+IGkuaWQgPT09IChwYXJzZUludChoYXNoPy5zcGxpdChcIi9tYXAvXCIpWzFdPy5zcGxpdChcIj9cIilbMF0pIHx8IDIpKTtcbiAgICAgICAgICAgIGdldFBvc2l0aW9uID0gcGFyc2VJbnQobmV3IFVSTFNlYXJjaFBhcmFtcyhoYXNoKS5nZXQoXCJjZW50ZXJcIikpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQ/LmNpdHkpXG4gICAgICAgICAgICAgICAgY3VycmVudENpdHkgPSBjaXR5LmZpbmQoaSA9PiBpLnBvc2l0aW9uID49IGdldFBvc2l0aW9uKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2l0eSA9IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFjdXJyZW50KVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZE1hcCAhPT0gKGN1cnJlbnRDaXR5Py5tYXAgPz8gY3VycmVudC5tYXApKSB7XG4gICAgICAgIG9sZE1hcCA9IGN1cnJlbnRDaXR5Py5tYXAgPz8gY3VycmVudC5tYXA7XG4gICAgICAgIHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50LnN0YXJ0aW5nICYmXG4gICAgICAgIGN1cnJlbnQuZW5kaW5nICYmXG4gICAgICAgICEoY3VycmVudC5zdGFydGluZyA8IERhdGUubm93KCkgLyAxMDAwICYmIGN1cnJlbnQuZW5kaW5nID4gRGF0ZS5ub3coKSAvIDEwMDApKVxuICAgICAgICBjdXJyZW50ID0gbWFwWzBdO1xuICAgIGVsc2UgaWYgKChjdXJyZW50LnN0YXJ0aW5nIHx8IGN1cnJlbnQuZW5kaW5nKSAmJlxuICAgICAgICAhKGN1cnJlbnQuc3RhcnRpbmcgPCBEYXRlLm5vdygpIC8gMTAwMCB8fCBjdXJyZW50LmVuZGluZyA+IERhdGUubm93KCkgLyAxMDAwKSlcbiAgICAgICAgY3VycmVudCA9IG1hcFswXTtcbiAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGN1cnJlbnQubWFwO1xuICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGN1cnJlbnQuY2l0eSAmJiBjdXJyZW50Q2l0eSA/IGN1cnJlbnRDaXR5Lm1hcCA6IG51bGw7XG4gICAgcHJlc2VuY2VEYXRhLmxhcmdlSW1hZ2VLZXkgPSBnZXRJbWFnZShzaG93UHJldmlldyA/IFwicHJldmlld1wiIDogXCJkZWZhdWx0XCIsIHJhbmRvbVByZXZpZXcpO1xuICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID1cbiAgICAgICAgY3VycmVudC5jaXR5ICYmIGN1cnJlbnRDaXR5ID8gY3VycmVudENpdHkuaW1hZ2Uuc21hbGwgOiBjdXJyZW50LmltYWdlLnNtYWxsO1xuICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlVGV4dCA9IGhvc3QucmVwbGFjZShcIi5jb21cIiwgXCJcIik7XG4gICAgaWYgKCF0aW1lc3RhbXBzKSB7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXA7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgIH1cbiAgICBpZiAocHJlc2VuY2VEYXRhLmRldGFpbHMpXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eSgpO1xufSk7XG5mdW5jdGlvbiBnZXRJbWFnZSh0eXBlLCByYW5kb20pIHtcbiAgICBjb25zdCBjdXJyZW50SW1hZ2UgPSBjdXJyZW50Q2l0eT8uaW1hZ2UgPz8gY3VycmVudC5pbWFnZTtcbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkoY3VycmVudEltYWdlW3R5cGVdKSAmJiB0eXBlID09PSBcInByZXZpZXdcIlxuICAgICAgICA/IGN1cnJlbnRJbWFnZVt0eXBlXVtyYW5kb20gPyBNYXRoLmZsb29yKHJhbmRvbU51bWJlciAqIGN1cnJlbnRJbWFnZVt0eXBlXS5sZW5ndGgpIDogMF1cbiAgICAgICAgOiBjdXJyZW50SW1hZ2VbdHlwZV0gfHwgY3VycmVudC5pbWFnZS5kZWZhdWx0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFXZEVia1FzVFVGQlRTeEhRVUZITEVkQlFWYzdTVUZEYkVJN1VVRkRReXhGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVU5NTEVkQlFVY3NSVUZCUlN4UlFVRlJPMUZCUTJJc1NVRkJTU3hGUVVGRkxFbEJRVWs3VVVGRFZpeExRVUZMTEVWQlFVVTdXVUZEVGl4TFFVRkxMRFJGUVVGelFqdFpRVU16UWl4UFFVRlBMRFJGUVVGclFqdFpRVU42UWl4UFFVRlBMRFJGUVVGclFqdFRRVU42UWp0TFFVTkVPMGxCUTBRN1VVRkRReXhGUVVGRkxFVkJRVVVzUTBGQlF6dFJRVU5NTEVkQlFVY3NSVUZCUlN4WlFVRlpPMUZCUTJwQ0xFdEJRVXNzUlVGQlJUdFpRVU5PTEV0QlFVc3NORVZCUVhsQ08xbEJRemxDTEU5QlFVOHNORVZCUVhOQ08xbEJRemRDTEU5QlFVOHNOa1ZCUVRCQ08xTkJRMnBETzB0QlEwUTdTVUZEUkR0UlFVTkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xRkJRMHdzUjBGQlJ5eEZRVUZGTERoQ1FVRTRRanRSUVVOdVF5eEhRVUZITEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc2RVSkJRWFZDTEVOQlFVTTdVVUZEZGtNc1MwRkJTeXhGUVVGRk8xbEJRMDRzUzBGQlN5dzBSVUZCZFVJN1dVRkROVUlzVDBGQlR5dzBSVUZCYjBNN1dVRkRNME1zVDBGQlR5dzJSVUZCZDBNN1UwRkRMME03UzBGRFJEdEpRVU5FTzFGQlIwTXNSVUZCUlN4RlFVRkZMRVZCUVVVN1VVRkRUaXhIUVVGSExFVkJRVVVzTUVKQlFUQkNPMUZCUXk5Q0xFZEJRVWNzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN3NFFrRkJPRUlzUTBGQlF6dFJRVU01UXl4TFFVRkxMRVZCUVVVN1dVRkRUaXhMUVVGTExEWkZRVUZ2UWp0WlFVTjZRaXhQUVVGUExEWkZRVUZ2UXp0WlFVTXpReXhQUVVGUExEWkZRVUYzUXp0VFFVTXZRenRSUVVORUxGRkJRVkVzUlVGQlJTeFZRVUZWTzFGQlEzQkNMRTFCUVUwc1JVRkJSU3hWUVVGVk8wdEJRMnhDTzBsQlEwUTdVVUZEUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRSUVVOTUxFZEJRVWNzUlVGQlJTeFRRVUZUTzFGQlEyUXNTMEZCU3l4RlFVRkZPMWxCUTA0c1MwRkJTeXcwUlVGQmMwSTdXVUZETTBJc1QwRkJUeXcwUlVGQmMwSTdVMEZETjBJN1MwRkRSRHREUVVORUxFVkJRMFFzU1VGQlNTeEhRVUZYTzBsQlEyUTdVVUZEUXl4UlFVRlJMRVZCUVVVc1NVRkJTVHRSUVVOa0xFZEJRVWNzUlVGQlJTeFhRVUZYTzFGQlEyaENMRXRCUVVzc1JVRkJSVHRaUVVOT0xFdEJRVXNzTkVWQlFYZENPMWxCUXpkQ0xFOUJRVThzTmtWQlFYbENPMWxCUTJoRExFOUJRVThzTmtWQlFYbENPMU5CUTJoRE8wdEJRMFE3U1VGRFJEdFJRVU5ETEZGQlFWRXNSVUZCUlN4SlFVRkpPMUZCUTJRc1IwRkJSeXhGUVVGRkxFOUJRVTg3VVVGRFdpeExRVUZMTEVWQlFVVTdXVUZEVGl4TFFVRkxMRFJGUVVGdlFqdFpRVU42UWl4UFFVRlBMRFpGUVVGeFFqdFpRVU0xUWl4UFFVRlBMRFpGUVVGeFFqdFRRVU0xUWp0TFFVTkVPMGxCUTBRN1VVRkRReXhSUVVGUkxFVkJRVVVzU1VGQlNUdFJRVU5rTEVkQlFVY3NSVUZCUlN4UlFVRlJPMUZCUTJJc1MwRkJTeXhGUVVGRk8xbEJRMDRzUzBGQlN5dzJSVUZCY1VJN1dVRkRNVUlzVDBGQlR5dzJSVUZCYzBJN1dVRkROMElzVDBGQlR5eEZRVUZGTEhsS1FVRTJRenRUUVVOMFJEdExRVU5FTzBsQlEwUTdVVUZEUXl4UlFVRlJMRVZCUVVVc1NVRkJTVHRSUVVOa0xFZEJRVWNzUlVGQlJTeFRRVUZUTzFGQlEyUXNTMEZCU3l4RlFVRkZPMWxCUTA0c1MwRkJTeXcwUlVGQmMwSTdXVUZETTBJc1QwRkJUeXcyUlVGQk1FSTdXVUZEYWtNc1QwRkJUeXcyUlVGQk1FSTdVMEZEYWtNN1MwRkRSRHREUVVORUxFTkJRVU03UVVGRlNDeEpRVUZKTEUxQlFXTXNSVUZEYWtJc1QwRkJZU3hGUVVOaUxGZEJRV2xDTEVWQlEycENMRmRCUVcxQ0xFVkJRMjVDTEZsQlFXOUNMRU5CUVVNN1FVRkZkRUlzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3U1VGRGNFTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSU3hYUVVGWExFVkJRVVVzWVVGQllTeERRVUZETEVkQlFVY3NUVUZCVFN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRMnBGTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1dVRkJXU3hEUVVGRE8xRkJRekZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1lVRkJZU3hEUVVGRE8xRkJRek5ETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1pVRkJaU3hEUVVGRE8wdEJRemRETEVOQlFVTXNSVUZEUml4WlFVRlpMRWRCUVdsQ08xRkJRelZDTEU5QlFVOHNSVUZCUlN4dlFrRkJiMEk3VVVGRE4wSXNZVUZCWVN3clJVRkJZVHRSUVVNeFFpeGhRVUZoTEd0RVFVRmxPMUZCUXpWQ0xHTkJRV01zUlVGQlJTeHBRa0ZCYVVJN1MwRkRha01zUlVGRFJDeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeE5RVUZOTEVWQlFVVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVNNVJDeFpRVUZaTEVkQlFVY3NTVUZCU1N4bFFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRk5VTXNTVUZCU1N4UlFVRlJMRXRCUVVzc1lVRkJZU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF6dFJRVU55UlN4UFFVRlBPMGxCUTFJc1VVRkJVU3hSUVVGUkxFVkJRVVU3VVVGRGFrSXNTMEZCU3l4clEwRkJhME03V1VGRGRFTXNUMEZCVHl4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRMnBDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUTBnc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeFhRVUZYTEVWQlFVVXNRMEZCUXp0blFrRkRka1FzUTBGQlF5eERRVUZETEVkQlFVYzdjVUpCUTBnc1YwRkJWeXhGUVVGRk8zRkNRVU5pTEZGQlFWRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4SlFVRkpMRkZCUVZFc1EwRkJReXhEUVVNdlJDeERRVUZETzFsQlEwWXNUVUZCVFR0UlFVTlFMRXRCUVVzc1lVRkJZVHRaUVVOcVFpeFBRVUZQTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkRha0lzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZEU0N4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4RFFVRkRPMmRDUVVNMVJDeERRVUZETEVOQlFVTXNSMEZCUnp0eFFrRkRTQ3hYUVVGWExFVkJRVVU3Y1VKQlEySXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxFbEJRVWtzVVVGQlVTeERRVUZETEVOQlEzQkZMRU5CUVVNN1dVRkRSaXhOUVVGTk8xRkJRMUE3V1VGRFF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRE8yZENRVUZGTEU5QlFVODdXVUZETlVNc1QwRkJUeXhIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlEycENMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVU55UlN4RFFVRkRPMWxCUTBZc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9SU3hKUVVGSkxFOUJRVThzUlVGQlJTeEpRVUZKTzJkQ1FVTm9RaXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVsQlFVa3NWMEZCVnl4RFFVRkRMRU5CUVVNN08yZENRVU53UkN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRM2hDTEUxQlFVMDdTMEZEVUR0SlFVTkVMRWxCUVVrc1EwRkJReXhQUVVGUE8xRkJRVVVzVDBGQlR6dEpRVU55UWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8xRkJRMnBFTEUxQlFVMHNSMEZCUnl4WFFVRlhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEZWtNc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0TFFVTTNRanRKUVVORUxFbEJRME1zVDBGQlR5eERRVUZETEZGQlFWRTdVVUZEYUVJc1QwRkJUeXhEUVVGRExFMUJRVTA3VVVGRFpDeERRVUZETEVOQlEwRXNUMEZCVHl4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkRNVVU3VVVGRlJDeFBRVUZQTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMklzU1VGRFNpeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU53UXl4RFFVRkRMRU5CUTBFc1QwRkJUeXhEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGRE1VVTdVVUZGUkN4UFFVRlBMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyeENMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTnVReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRE1VVXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhSUVVGUkxFTkJRM0JETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlEyNURMR0ZCUVdFc1EwRkRZaXhEUVVGRE8wbEJRMFlzV1VGQldTeERRVUZETEdGQlFXRTdVVUZEZWtJc1QwRkJUeXhEUVVGRExFbEJRVWtzU1VGQlNTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU0zUlN4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM1pFTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVN1VVRkRhRUlzVDBGQlR5eFpRVUZaTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUTI1RExFOUJRVThzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0TFFVTnFRenRKUVVORUxFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRlNDeFRRVUZUTEZGQlFWRXNRMEZCUXl4SlFVRXlRaXhGUVVGRkxFMUJRV2RDTzBsQlF6bEVMRTFCUVUwc1dVRkJXU3hIUVVGSExGZEJRVmNzUlVGQlJTeExRVUZMTEVsQlFVa3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJRenRKUVVONlJDeFBRVUZQTEVOQlEwNHNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1UwRkJVenRSUVVOMFJDeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVOc1FpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVTm9SVHRSUVVOSUxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlEzQkRMRU5CUVVNN1FVRkRZaXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwibWFwIiwiaWQiLCJjaXR5IiwiaW1hZ2UiLCJzbWFsbCIsImRlZmF1bHQiLCJwcmV2aWV3Iiwia2V5Iiwic3RhcnRpbmciLCJlbmRpbmciLCJwb3NpdGlvbiIsIm9sZE1hcCIsImN1cnJlbnQiLCJjdXJyZW50Q2l0eSIsImdldFBvc2l0aW9uIiwicmFuZG9tTnVtYmVyIiwiZ2V0SW1hZ2UiLCJ0eXBlIiwicmFuZG9tIiwiY3VycmVudEltYWdlIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib24iLCJhc3luYyIsInRpbWVzdGFtcHMiLCJzaG93UHJldmlldyIsInJhbmRvbVByZXZpZXciLCJQcm9taXNlIiwiYWxsIiwiZ2V0U2V0dGluZyIsInByZXNlbmNlRGF0YSIsImRldGFpbHMiLCJsYXJnZUltYWdlS2V5Iiwic21hbGxJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwiaGFzaCIsImhvc3QiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwic2VhcmNoIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImluY2x1ZGVzIiwiZmluZCIsImkiLCJnZXQiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwicGFyc2VJbnQiLCJzdGF0ZSIsInNtYWxsSW1hZ2VUZXh0IiwicmVwbGFjZSIsImVuZFRpbWVzdGFtcCIsInNldEFjdGl2aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==
undefined;