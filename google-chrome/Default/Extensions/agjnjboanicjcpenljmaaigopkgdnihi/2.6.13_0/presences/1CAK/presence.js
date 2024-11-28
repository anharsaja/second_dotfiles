var __webpack_exports__={};const presence=new Presence({clientId:"634332519398899724"}),browsingTimestamp=Math.floor(Date.now()/1e3);async function getStrings(){return presence.getStrings({privacy:"general.privacy",terms:"general.terms",browse:"general.browsing",search:"general.searchFor",viewHome:"general.viewHome",buttonViewPage:"general.buttonViewPage"},await presence.getSetting("lang").catch((()=>"en")))}let strings,oldLang=null;presence.on("UpdateData",(async()=>{let e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/0-9/1CAK/assets/logo.png",startTimestamp:browsingTimestamp};const t=await presence.getSetting("lang").catch((()=>"en")),{pathname:i,href:s}=document.location;if(oldLang===t&&strings||(oldLang=t,strings=await getStrings()),i.includes("of"))e.details="of"===i?document.querySelector("#content > h3").textContent.trim():document.querySelector("#content > div > table > tbody > tr > td > div > .blur a > b")?.textContent;else if(i.includes("saved"))document.querySelector("#content > p")?e.details="Viewing saved posts":e.details="Viewing their saved posts";else if(i.includes("voteof"))document.querySelector("#content > p")?e.details="Viewing liked posts":e.details="Viewing their liked posts";else if(i.includes("legendary"))e.details="Viewing legendary posts";else if(i.includes("search"))e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",e.details=strings.search,e.state=i.slice(10,i.length);else{const t={"":{details:strings.viewHome},trends:{details:"Viewing trending posts"},trending:{details:"Viewing trending posts"},recent:{details:"Viewing recent uploads"},tvvote:{details:"Viewing fun videos"},friends:{details:"Viewing their friend list"},rules:{details:"Reading the rules",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/reading.png"},notifications:{details:"Viewing notifications"},upload:{details:"Viewing the upload section"},about:{details:"About 1CAK/1CUK"},terms:{details:strings.terms},privacy:{details:strings.privacy},disclaimer:{details:"Reading the disclaimer",smallImageKey:"https://cdn.rcd.gg/PreMiD/resources/reading.png"},advertise:{details:"Advertising on 1CAK"},weeklytop:{details:"Viewing weekly top users"},alltimetop:{details:"Viewing all time top users"},privacysettings:{details:"Viewing their settings"},preferences:{details:"Viewing their settings"}};for(const[s,n]of Object.entries(t))i.replace(/_/gm,"").includes(s)&&(e={...e,...n})}"/"!==i&&(e.buttons=[{label:strings.buttonViewPage,url:s}]),e.details||(e.details=strings.browse),presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hEQyxlQUFlQyxhQUNYLE9BQU9ULFNBQVNTLFdBQVcsQ0FDdkJDLFFBQVMsa0JBQ1RDLE1BQU8sZ0JBQ1BDLE9BQVEsbUJBQ1JDLE9BQVEsb0JBQ1JDLFNBQVUsbUJBQ1ZDLGVBQWdCLGdDQUNYZixTQUFTZ0IsV0FBVyxRQUFRQyxPQUFNLElBQU0sT0FDckQsQ0FDQSxJQUFJQyxRQUFTQyxRQUFVLEtBQ3ZCbkIsU0FBU29CLEdBQUcsY0FBY1osVUFDdEIsSUFBSWEsRUFBZSxDQUNmQyxjQUFlLDhEQUNmQyxlQUFnQnBCLG1CQUVwQixNQUFNcUIsUUFBZ0J4QixTQUFTZ0IsV0FBVyxRQUFRQyxPQUFNLElBQU0sUUFBTyxTQUFFUSxFQUFRLEtBQUVDLEdBQVNDLFNBQVNDLFNBS25HLEdBSklULFVBQVlLLEdBQVlOLFVBQ3hCQyxRQUFVSyxFQUNWTixjQUFnQlQsY0FFaEJnQixFQUFTSSxTQUFTLE1BRWRSLEVBQWFTLFFBREEsT0FBYkwsRUFDdUJFLFNBQ2xCSSxjQUFjLGlCQUNkQyxZQUFZQyxPQUdNTixTQUFTSSxjQUFjLGlFQUFpRUMsaUJBR2xILEdBQUlQLEVBQVNJLFNBQVMsU0FDbEJGLFNBQVNJLGNBQWMsZ0JBR3hCVixFQUFhUyxRQUFVLHNCQUZ2QlQsRUFBYVMsUUFBVSxpQ0FJMUIsR0FBSUwsRUFBU0ksU0FBUyxVQUNsQkYsU0FBU0ksY0FBYyxnQkFHeEJWLEVBQWFTLFFBQVUsc0JBRnZCVCxFQUFhUyxRQUFVLGlDQUkxQixHQUFJTCxFQUFTSSxTQUFTLGFBQ3ZCUixFQUFhUyxRQUFVLCtCQUN0QixHQUFJTCxFQUFTSSxTQUFTLFVBQ3ZCUixFQUFhYSxjQUFnQixpREFDN0JiLEVBQWFTLFFBQVVaLFFBQVFMLE9BQy9CUSxFQUFhYyxNQUFRVixFQUFTVyxNQUFNLEdBQUlYLEVBQVNZLFlBRWhELENBQ0QsTUFBTUMsRUFBUSxDQUNWLEdBQUksQ0FDQVIsUUFBU1osUUFBUUosVUFFckJ5QixPQUFRLENBQ0pULFFBQVMsMEJBRWJVLFNBQVUsQ0FDTlYsUUFBUywwQkFFYlcsT0FBUSxDQUNKWCxRQUFTLDBCQUViWSxPQUFRLENBQ0paLFFBQVMsc0JBRWJhLFFBQVMsQ0FDTGIsUUFBUyw2QkFFYmMsTUFBTyxDQUNIZCxRQUFTLG9CQUNUSSxjQUFlLG1EQUVuQlcsY0FBZSxDQUNYZixRQUFTLHlCQUViZ0IsT0FBUSxDQUNKaEIsUUFBUyw4QkFFYmlCLE1BQU8sQ0FDSGpCLFFBQVMsbUJBRWJuQixNQUFPLENBQ0htQixRQUFTWixRQUFRUCxPQUVyQkQsUUFBUyxDQUNMb0IsUUFBU1osUUFBUVIsU0FFckJzQyxXQUFZLENBQ1JsQixRQUFTLHlCQUNUSSxjQUFlLG1EQUVuQmUsVUFBVyxDQUNQbkIsUUFBUyx1QkFFYm9CLFVBQVcsQ0FDUHBCLFFBQVMsNEJBRWJxQixXQUFZLENBQ1JyQixRQUFTLDhCQUVic0IsZ0JBQWlCLENBQ2J0QixRQUFTLDBCQUVidUIsWUFBYSxDQUNUdkIsUUFBUywyQkFHakIsSUFBSyxNQUFPd0IsRUFBTUMsS0FBU0MsT0FBT0MsUUFBUW5CLEdBQ2xDYixFQUFTaUMsUUFBUSxNQUFPLElBQUk3QixTQUFTeUIsS0FDckNqQyxFQUFlLElBQUtBLEtBQWlCa0MsR0FFakQsQ0FDaUIsTUFBYjlCLElBQ0FKLEVBQWFzQyxRQUFVLENBQ25CLENBQ0lDLE1BQU8xQyxRQUFRSCxlQUNmOEMsSUFBS25DLEtBSVpMLEVBQWFTLFVBQ2RULEVBQWFTLFFBQVVaLFFBQVFOLFFBQ25DWixTQUFTOEQsWUFBWXpDLEVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7XG4gICAgY2xpZW50SWQ6IFwiNjM0MzMyNTE5Mzk4ODk5NzI0XCIsXG59KSwgYnJvd3NpbmdUaW1lc3RhbXAgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbmFzeW5jIGZ1bmN0aW9uIGdldFN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgICAgICBwcml2YWN5OiBcImdlbmVyYWwucHJpdmFjeVwiLFxuICAgICAgICB0ZXJtczogXCJnZW5lcmFsLnRlcm1zXCIsXG4gICAgICAgIGJyb3dzZTogXCJnZW5lcmFsLmJyb3dzaW5nXCIsXG4gICAgICAgIHNlYXJjaDogXCJnZW5lcmFsLnNlYXJjaEZvclwiLFxuICAgICAgICB2aWV3SG9tZTogXCJnZW5lcmFsLnZpZXdIb21lXCIsXG4gICAgICAgIGJ1dHRvblZpZXdQYWdlOiBcImdlbmVyYWwuYnV0dG9uVmlld1BhZ2VcIixcbiAgICB9LCBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibGFuZ1wiKS5jYXRjaCgoKSA9PiBcImVuXCIpKTtcbn1cbmxldCBzdHJpbmdzLCBvbGRMYW5nID0gbnVsbDtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzLzAtOS8xQ0FLL2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBjb25zdCBuZXdMYW5nID0gYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSwgeyBwYXRobmFtZSwgaHJlZiB9ID0gZG9jdW1lbnQubG9jYXRpb247XG4gICAgaWYgKG9sZExhbmcgIT09IG5ld0xhbmcgfHwgIXN0cmluZ3MpIHtcbiAgICAgICAgb2xkTGFuZyA9IG5ld0xhbmc7XG4gICAgICAgIHN0cmluZ3MgPSBhd2FpdCBnZXRTdHJpbmdzKCk7XG4gICAgfVxuICAgIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIm9mXCIpKSB7XG4gICAgICAgIGlmIChwYXRobmFtZSA9PT0gXCJvZlwiKSB7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGgzXCIpXG4gICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQgPiBkaXYgPiAuYmx1ciBhID4gYlwiKT8udGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJzYXZlZFwiKSkge1xuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IHBcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGVpciBzYXZlZCBwb3N0c1wiO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBzYXZlZCBwb3N0c1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcInZvdGVvZlwiKSkge1xuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IHBcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGVpciBsaWtlZCBwb3N0c1wiO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBsaWtlZCBwb3N0c1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcImxlZ2VuZGFyeVwiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgbGVnZW5kYXJ5IHBvc3RzXCI7XG4gICAgZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJzZWFyY2hcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBzdHJpbmdzLnNlYXJjaDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gcGF0aG5hbWUuc2xpY2UoMTAsIHBhdGhuYW1lLmxlbmd0aCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwYWdlcyA9IHtcbiAgICAgICAgICAgIFwiXCI6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBzdHJpbmdzLnZpZXdIb21lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyZW5kczoge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiVmlld2luZyB0cmVuZGluZyBwb3N0c1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyZW5kaW5nOiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIHRyZW5kaW5nIHBvc3RzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVjZW50OiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIHJlY2VudCB1cGxvYWRzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHZ2b3RlOiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIGZ1biB2aWRlb3NcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmllbmRzOiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIHRoZWlyIGZyaWVuZCBsaXN0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIlJlYWRpbmcgdGhlIHJ1bGVzXCIsXG4gICAgICAgICAgICAgICAgc21hbGxJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9yZWFkaW5nLnBuZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIlZpZXdpbmcgbm90aWZpY2F0aW9uc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwbG9hZDoge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiVmlld2luZyB0aGUgdXBsb2FkIHNlY3Rpb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhYm91dDoge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiQWJvdXQgMUNBSy8xQ1VLXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVybXM6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBzdHJpbmdzLnRlcm1zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaXZhY3k6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBzdHJpbmdzLnByaXZhY3ksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzY2xhaW1lcjoge1xuICAgICAgICAgICAgICAgIGRldGFpbHM6IFwiUmVhZGluZyB0aGUgZGlzY2xhaW1lclwiLFxuICAgICAgICAgICAgICAgIHNtYWxsSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZHZlcnRpc2U6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIkFkdmVydGlzaW5nIG9uIDFDQUtcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3ZWVrbHl0b3A6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIlZpZXdpbmcgd2Vla2x5IHRvcCB1c2Vyc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsbHRpbWV0b3A6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIlZpZXdpbmcgYWxsIHRpbWUgdG9wIHVzZXJzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpdmFjeXNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogXCJWaWV3aW5nIHRoZWlyIHNldHRpbmdzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlZmVyZW5jZXM6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiBcIlZpZXdpbmcgdGhlaXIgc2V0dGluZ3NcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3QgW3BhdGgsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHBhZ2VzKSkge1xuICAgICAgICAgICAgaWYgKHBhdGhuYW1lLnJlcGxhY2UoL18vZ20sIFwiXCIpLmluY2x1ZGVzKHBhdGgpKVxuICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YSA9IHsgLi4ucHJlc2VuY2VEYXRhLCAuLi5kYXRhIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGhuYW1lICE9PSBcIi9cIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5ncy5idXR0b25WaWV3UGFnZSxcbiAgICAgICAgICAgICAgICB1cmw6IGhyZWYsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBpZiAoIXByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IHN0cmluZ3MuYnJvd3NlO1xuICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVMXVSQ3hMUVVGTExGVkJRVlVzVlVGQlZUdEpRVU40UWl4UFFVRlBMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRM3BDTzFGQlEwTXNUMEZCVHl4RlFVRkZMR2xDUVVGcFFqdFJRVU14UWl4TFFVRkxMRVZCUVVVc1pVRkJaVHRSUVVOMFFpeE5RVUZOTEVWQlFVVXNhMEpCUVd0Q08xRkJRekZDTEUxQlFVMHNSVUZCUlN4dFFrRkJiVUk3VVVGRE0wSXNVVUZCVVN4RlFVRkZMR3RDUVVGclFqdFJRVU0xUWl4alFVRmpMRVZCUVVVc2QwSkJRWGRDTzB0QlEzaERMRVZCUTBRc1RVRkJUU3hSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZUTEUxQlFVMHNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZETTBRc1EwRkJRenRCUVVOSUxFTkJRVU03UVVGRFJDeEpRVUZKTEU5QlFTdERMRVZCUTJ4RUxFOUJRVThzUjBGQlZ5eEpRVUZKTEVOQlFVTTdRVUZGZUVJc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zU1VGQlNTeFpRVUZaTEVkQlFXbENPMUZCUTJoRExHRkJRV0VzSzBSQlFXRTdVVUZETVVJc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0TFFVTnFReXhEUVVGRE8wbEJRMFlzVFVGQlRTeFBRVUZQTEVkQlFVY3NUVUZCVFN4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGVExFMUJRVTBzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRE1VVXNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTjRReXhKUVVGSkxFOUJRVThzUzBGQlN5eFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1VVRkRjRU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTnNRaXhQUVVGUExFZEJRVWNzVFVGQlRTeFZRVUZWTEVWQlFVVXNRMEZCUXp0TFFVTTNRanRKUVVWRUxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRSUVVNMVFpeEpRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRkpMRVZCUVVVN1dVRkRkRUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4UlFVRlJPMmxDUVVNM1FpeGhRVUZoTEVOQlFVTXNaVUZCWlN4RFFVRkRPMmxDUVVNNVFpeFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1UwRkRja0k3WVVGQlRUdFpRVU5PTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE5VTXNPRVJCUVRoRUxFTkJRemxFTEVWQlFVVXNWMEZCVnl4RFFVRkRPMU5CUTJZN1MwRkRSRHRUUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRSUVVOMFF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU03V1VGRE1VTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXpzN1dVRkRMME1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4eFFrRkJjVUlzUTBGQlF6dExRVU5zUkR0VFFVRk5MRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTjJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNN1dVRkRNVU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3eVFrRkJNa0lzUTBGQlF6czdXVUZETDBNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRenRMUVVOc1JEdFRRVUZOTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0VFFVTTNReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1VVRkRja01zV1VGQldTeERRVUZETEdGQlFXRXNiVVJCUVdkQ0xFTkJRVU03VVVGRE0wTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzUkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRVZCUVVVc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzB0QlEzcEVPMU5CUVUwN1VVRkRUaXhOUVVGTkxFdEJRVXNzUjBGQmFVTTdXVUZETTBNc1JVRkJSU3hGUVVGRk8yZENRVU5JTEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1VVRkJVVHRoUVVONlFqdFpRVU5FTEUxQlFVMHNSVUZCUlR0blFrRkRVQ3hQUVVGUExFVkJRVVVzZDBKQlFYZENPMkZCUTJwRE8xbEJRMFFzVVVGQlVTeEZRVUZGTzJkQ1FVTlVMRTlCUVU4c1JVRkJSU3gzUWtGQmQwSTdZVUZEYWtNN1dVRkRSQ3hOUVVGTkxFVkJRVVU3WjBKQlExQXNUMEZCVHl4RlFVRkZMSGRDUVVGM1FqdGhRVU5xUXp0WlFVTkVMRTFCUVUwc1JVRkJSVHRuUWtGRFVDeFBRVUZQTEVWQlFVVXNiMEpCUVc5Q08yRkJRemRDTzFsQlEwUXNUMEZCVHl4RlFVRkZPMmRDUVVOU0xFOUJRVThzUlVGQlJTd3lRa0ZCTWtJN1lVRkRjRU03V1VGRFJDeExRVUZMTEVWQlFVVTdaMEpCUTA0c1QwRkJUeXhGUVVGRkxHMUNRVUZ0UWp0blFrRkROVUlzWVVGQllTeHRSRUZCWjBJN1lVRkROMEk3V1VGRFJDeGhRVUZoTEVWQlFVVTdaMEpCUTJRc1QwRkJUeXhGUVVGRkxIVkNRVUYxUWp0aFFVTm9RenRaUVVORUxFMUJRVTBzUlVGQlJUdG5Ra0ZEVUN4UFFVRlBMRVZCUVVVc05FSkJRVFJDTzJGQlEzSkRPMWxCUTBRc1MwRkJTeXhGUVVGRk8yZENRVU5PTEU5QlFVOHNSVUZCUlN4cFFrRkJhVUk3WVVGRE1VSTdXVUZEUkN4TFFVRkxMRVZCUVVVN1owSkJRMDRzVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4TFFVRkxPMkZCUTNSQ08xbEJRMFFzVDBGQlR5eEZRVUZGTzJkQ1FVTlNMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zVDBGQlR6dGhRVU40UWp0WlFVTkVMRlZCUVZVc1JVRkJSVHRuUWtGRFdDeFBRVUZQTEVWQlFVVXNkMEpCUVhkQ08yZENRVU5xUXl4aFFVRmhMRzFFUVVGblFqdGhRVU0zUWp0WlFVTkVMRk5CUVZNc1JVRkJSVHRuUWtGRFZpeFBRVUZQTEVWQlFVVXNjVUpCUVhGQ08yRkJRemxDTzFsQlEwUXNVMEZCVXl4RlFVRkZPMmRDUVVOV0xFOUJRVThzUlVGQlJTd3dRa0ZCTUVJN1lVRkRia003V1VGRFJDeFZRVUZWTEVWQlFVVTdaMEpCUTFnc1QwRkJUeXhGUVVGRkxEUkNRVUUwUWp0aFFVTnlRenRaUVVORUxHVkJRV1VzUlVGQlJUdG5Ra0ZEYUVJc1QwRkJUeXhGUVVGRkxIZENRVUYzUWp0aFFVTnFRenRaUVVORUxGZEJRVmNzUlVGQlJUdG5Ra0ZEV2l4UFFVRlBMRVZCUVVVc2QwSkJRWGRDTzJGQlEycERPMU5CUTBRc1EwRkJRenRSUVVOR0xFdEJRVXNzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTJwRUxFbEJRVWtzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkROME1zV1VGQldTeEhRVUZITEVWQlFVVXNSMEZCUnl4WlFVRlpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFVkJRVVVzUTBGQlF6dFRRVU0zUXp0TFFVTkVPMGxCUlVRc1NVRkJTU3hSUVVGUkxFdEJRVXNzUjBGQlJ5eEZRVUZGTzFGQlEzSkNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3V1VGRGRFSTdaMEpCUTBNc1MwRkJTeXhGUVVGRkxFOUJRVThzUTBGQlF5eGpRVUZqTzJkQ1FVTTNRaXhIUVVGSExFVkJRVVVzU1VGQlNUdGhRVU5VTzFOQlEwUXNRMEZCUXp0TFFVTkdPMGxCUTBRc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTzFGQlFVVXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEycEZMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdRVUZEY0VNc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJhc3luYyIsImdldFN0cmluZ3MiLCJwcml2YWN5IiwidGVybXMiLCJicm93c2UiLCJzZWFyY2giLCJ2aWV3SG9tZSIsImJ1dHRvblZpZXdQYWdlIiwiZ2V0U2V0dGluZyIsImNhdGNoIiwic3RyaW5ncyIsIm9sZExhbmciLCJvbiIsInByZXNlbmNlRGF0YSIsImxhcmdlSW1hZ2VLZXkiLCJzdGFydFRpbWVzdGFtcCIsIm5ld0xhbmciLCJwYXRobmFtZSIsImhyZWYiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaW5jbHVkZXMiLCJkZXRhaWxzIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwidHJpbSIsInNtYWxsSW1hZ2VLZXkiLCJzdGF0ZSIsInNsaWNlIiwibGVuZ3RoIiwicGFnZXMiLCJ0cmVuZHMiLCJ0cmVuZGluZyIsInJlY2VudCIsInR2dm90ZSIsImZyaWVuZHMiLCJydWxlcyIsIm5vdGlmaWNhdGlvbnMiLCJ1cGxvYWQiLCJhYm91dCIsImRpc2NsYWltZXIiLCJhZHZlcnRpc2UiLCJ3ZWVrbHl0b3AiLCJhbGx0aW1ldG9wIiwicHJpdmFjeXNldHRpbmdzIiwicHJlZmVyZW5jZXMiLCJwYXRoIiwiZGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXBsYWNlIiwiYnV0dG9ucyIsImxhYmVsIiwidXJsIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;