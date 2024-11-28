var __webpack_exports__={};const presence=new Presence({clientId:"639131130703904808"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused"}),pages={"/":"Homepage","/user/view-notifications":"Notifications","/message":"Messages","/dashboard/purchase-history/":"Purchase History","/instructor/account/notifications/":"Account","/instructor/account/api":"API","/instructor/account/close":"Close Account","/instructor/account/security":"Account Security","/instructor/courses":"Create a Course","/course/create":"Create a Course","/instructor/communication/qa":"Q&A","/instructor/communication/assignments":"Assignments","/instructor/communication/announcements":"Announcements","/instructor/communication/messages":"Messages","/instructor/performance/overview":"Performance Overview","/instructor/performance/students":"Student Performance","/instructor/performance/reviews":"Reviews","/instructor/performance/engagement":"Engagement","/instructor/performance/conversion/visitors":"Visitors","/instructor/tools":"Tools","/home/teaching/test-video":"Test Video","/instructor/marketplace-insights/":"Marketplace Insights","/instructor/help":"Resources","/support":"Support","/cart":"Cart","/affiliate":"Udemy Affiliate","/mobile":"Udemy Mobile","/teaching":"Teaching","/user/edit-credit-cards":"Payment Methods","/dashboard/credit-history":"Udemy Credits","/home/my-courses/learning":"My Courses","/home/my-courses":"My Courses","/home/my-courses/search":"My Courses","/home/my-courses/collections":"My Courses (Collections)","/home/my-courses/wishlist":"My Courses (Wishlist)","/home/my-courses/archived":"My Courses (Archived)"};presence.on("UpdateData",(async()=>{const e=document.location.pathname,s=document.querySelector("video"),t={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/U/Udemy/assets/logo.png",startTimestamp:Math.floor(Date.now()/1e3)};e.includes("/courses/search")?(t.details="Searching for:",t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",t.state=new URLSearchParams(location.search).get("q")?.split("+")?.join(" ")||"Something"):e.includes("/courses/")?(t.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png",t.state=document.querySelector("div h1[class*=category--heading-primary] a")?.textContent||"Unknown Category"):e.includes("/course/")&&s&&s.currentTime?(t.details=document.querySelector("header h1[data-purpose=course-header-title] a")?.textContent||"Unknown Course",t.state=document.querySelector("li[class*=curriculum-item-link--is-current] span > span")?.textContent||document.querySelector("#bookmark-portal ~ div:not(:empty)")?.textContent||"Unknown Episode",t.smallImageKey=s.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",t.smallImageText=s.paused?(await strings).pause:(await strings).play,isNaN(s.currentTime)||([t.startTimestamp,t.endTimestamp]=presence.getTimestampsfromMedia(s)),s.paused&&(delete t.startTimestamp,delete t.endTimestamp)):e.includes("/course/")&&!s?(t.details="Viewing a course:",t.state=document.querySelector(".clp-component-render h1.clp-lead__title")?.textContent||"Unknown Course"):pages[e]||pages[e.slice(0,-1)]?(t.details="Viewing a page:",t.state=pages[e]||pages[e.slice(0,-1)]):(t.details="Viewing a page:",t.state="Homepage"),presence.setActivity(t)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxtQkFDUEMsTUFBUSxDQUNSLElBQUssV0FDTCwyQkFBNEIsZ0JBQzVCLFdBQVksV0FDWiwrQkFBZ0MsbUJBQ2hDLHFDQUFzQyxVQUN0QywwQkFBMkIsTUFDM0IsNEJBQTZCLGdCQUM3QiwrQkFBZ0MsbUJBQ2hDLHNCQUF1QixrQkFDdkIsaUJBQWtCLGtCQUNsQiwrQkFBZ0MsTUFDaEMsd0NBQXlDLGNBQ3pDLDBDQUEyQyxnQkFDM0MscUNBQXNDLFdBQ3RDLG1DQUFvQyx1QkFDcEMsbUNBQW9DLHNCQUNwQyxrQ0FBbUMsVUFDbkMscUNBQXNDLGFBQ3RDLDhDQUErQyxXQUMvQyxvQkFBcUIsUUFDckIsNEJBQTZCLGFBQzdCLG9DQUFxQyx1QkFDckMsbUJBQW9CLFlBQ3BCLFdBQVksVUFDWixRQUFTLE9BQ1QsYUFBYyxrQkFDZCxVQUFXLGVBQ1gsWUFBYSxXQUNiLDBCQUEyQixrQkFDM0IsNEJBQTZCLGdCQUM3Qiw0QkFBNkIsYUFDN0IsbUJBQW9CLGFBQ3BCLDBCQUEyQixhQUMzQiwrQkFBZ0MsMkJBQ2hDLDRCQUE2Qix3QkFDN0IsNEJBQTZCLHlCQUVqQ1AsU0FBU1EsR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFPQyxTQUFTQyxTQUFTQyxTQUFVQyxFQUFRSCxTQUFTSSxjQUFjLFNBQVVDLEVBQWUsQ0FDN0ZDLGNBQWUsNkRBQ2ZDLGVBQWdCQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLE1BRXhDWixFQUFLYSxTQUFTLG9CQUNkUCxFQUFhUSxRQUFVLGlCQUN2QlIsRUFBYVMsY0FBZ0IsaURBQzdCVCxFQUFhVSxNQUNULElBQUlDLGdCQUFnQmYsU0FBU2dCLFFBQVFDLElBQUksTUFBTUMsTUFBTSxNQUFNQyxLQUFLLE1BQzVELGFBRUhyQixFQUFLYSxTQUFTLGNBQ25CUCxFQUFhUyxjQUFnQixpREFDN0JULEVBQWFVLE1BQ1RmLFNBQVNJLGNBQWMsK0NBQ2pCaUIsYUFBZSxvQkFFcEJ0QixFQUFLYSxTQUFTLGFBQWVULEdBQVNBLEVBQU1tQixhQUNqRGpCLEVBQWFRLFFBQ1RiLFNBQVNJLGNBQWMsa0RBQ2pCaUIsYUFBZSxpQkFDekJoQixFQUFhVSxNQUNUZixTQUFTSSxjQUFjLDREQUE0RGlCLGFBQy9FckIsU0FBU0ksY0FBYyx1Q0FDakJpQixhQUNOLGtCQUNSaEIsRUFBYVMsY0FBZ0JYLEVBQU1vQixPQUFTLGdEQUFrRCwrQ0FDOUZsQixFQUFhbUIsZUFBaUJyQixFQUFNb0IsY0FDdkIvQixTQUFTRyxhQUNUSCxTQUFTRSxLQUNqQitCLE1BQU10QixFQUFNbUIsZ0JBQ1pqQixFQUFhRSxlQUFnQkYsRUFBYXFCLGNBQ3ZDckMsU0FBU3NDLHVCQUF1QnhCLElBRXBDQSxFQUFNb0IsZ0JBQ0NsQixFQUFhRSxzQkFDYkYsRUFBYXFCLGVBR25CM0IsRUFBS2EsU0FBUyxjQUFnQlQsR0FDbkNFLEVBQWFRLFFBQVUsb0JBQ3ZCUixFQUFhVSxNQUNUZixTQUFTSSxjQUFjLDZDQUNqQmlCLGFBQWUsa0JBRXBCekIsTUFBTUcsSUFBU0gsTUFBTUcsRUFBSzZCLE1BQU0sR0FBSSxLQUN6Q3ZCLEVBQWFRLFFBQVUsa0JBQ3ZCUixFQUFhVSxNQUFRbkIsTUFBTUcsSUFBU0gsTUFBTUcsRUFBSzZCLE1BQU0sR0FBSSxNQUd6RHZCLEVBQWFRLFFBQVUsa0JBQ3ZCUixFQUFhVSxNQUFRLFlBRXpCMUIsU0FBU3dDLFlBQVl4QixFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYzOTEzMTEzMDcwMzkwNDgwOFwiLFxufSksIHN0cmluZ3MgPSBwcmVzZW5jZS5nZXRTdHJpbmdzKHtcbiAgICBwbGF5OiBcImdlbmVyYWwucGxheWluZ1wiLFxuICAgIHBhdXNlOiBcImdlbmVyYWwucGF1c2VkXCIsXG59KSwgcGFnZXMgPSB7XG4gICAgXCIvXCI6IFwiSG9tZXBhZ2VcIixcbiAgICBcIi91c2VyL3ZpZXctbm90aWZpY2F0aW9uc1wiOiBcIk5vdGlmaWNhdGlvbnNcIixcbiAgICBcIi9tZXNzYWdlXCI6IFwiTWVzc2FnZXNcIixcbiAgICBcIi9kYXNoYm9hcmQvcHVyY2hhc2UtaGlzdG9yeS9cIjogXCJQdXJjaGFzZSBIaXN0b3J5XCIsXG4gICAgXCIvaW5zdHJ1Y3Rvci9hY2NvdW50L25vdGlmaWNhdGlvbnMvXCI6IFwiQWNjb3VudFwiLFxuICAgIFwiL2luc3RydWN0b3IvYWNjb3VudC9hcGlcIjogXCJBUElcIixcbiAgICBcIi9pbnN0cnVjdG9yL2FjY291bnQvY2xvc2VcIjogXCJDbG9zZSBBY2NvdW50XCIsXG4gICAgXCIvaW5zdHJ1Y3Rvci9hY2NvdW50L3NlY3VyaXR5XCI6IFwiQWNjb3VudCBTZWN1cml0eVwiLFxuICAgIFwiL2luc3RydWN0b3IvY291cnNlc1wiOiBcIkNyZWF0ZSBhIENvdXJzZVwiLFxuICAgIFwiL2NvdXJzZS9jcmVhdGVcIjogXCJDcmVhdGUgYSBDb3Vyc2VcIixcbiAgICBcIi9pbnN0cnVjdG9yL2NvbW11bmljYXRpb24vcWFcIjogXCJRJkFcIixcbiAgICBcIi9pbnN0cnVjdG9yL2NvbW11bmljYXRpb24vYXNzaWdubWVudHNcIjogXCJBc3NpZ25tZW50c1wiLFxuICAgIFwiL2luc3RydWN0b3IvY29tbXVuaWNhdGlvbi9hbm5vdW5jZW1lbnRzXCI6IFwiQW5ub3VuY2VtZW50c1wiLFxuICAgIFwiL2luc3RydWN0b3IvY29tbXVuaWNhdGlvbi9tZXNzYWdlc1wiOiBcIk1lc3NhZ2VzXCIsXG4gICAgXCIvaW5zdHJ1Y3Rvci9wZXJmb3JtYW5jZS9vdmVydmlld1wiOiBcIlBlcmZvcm1hbmNlIE92ZXJ2aWV3XCIsXG4gICAgXCIvaW5zdHJ1Y3Rvci9wZXJmb3JtYW5jZS9zdHVkZW50c1wiOiBcIlN0dWRlbnQgUGVyZm9ybWFuY2VcIixcbiAgICBcIi9pbnN0cnVjdG9yL3BlcmZvcm1hbmNlL3Jldmlld3NcIjogXCJSZXZpZXdzXCIsXG4gICAgXCIvaW5zdHJ1Y3Rvci9wZXJmb3JtYW5jZS9lbmdhZ2VtZW50XCI6IFwiRW5nYWdlbWVudFwiLFxuICAgIFwiL2luc3RydWN0b3IvcGVyZm9ybWFuY2UvY29udmVyc2lvbi92aXNpdG9yc1wiOiBcIlZpc2l0b3JzXCIsXG4gICAgXCIvaW5zdHJ1Y3Rvci90b29sc1wiOiBcIlRvb2xzXCIsXG4gICAgXCIvaG9tZS90ZWFjaGluZy90ZXN0LXZpZGVvXCI6IFwiVGVzdCBWaWRlb1wiLFxuICAgIFwiL2luc3RydWN0b3IvbWFya2V0cGxhY2UtaW5zaWdodHMvXCI6IFwiTWFya2V0cGxhY2UgSW5zaWdodHNcIixcbiAgICBcIi9pbnN0cnVjdG9yL2hlbHBcIjogXCJSZXNvdXJjZXNcIixcbiAgICBcIi9zdXBwb3J0XCI6IFwiU3VwcG9ydFwiLFxuICAgIFwiL2NhcnRcIjogXCJDYXJ0XCIsXG4gICAgXCIvYWZmaWxpYXRlXCI6IFwiVWRlbXkgQWZmaWxpYXRlXCIsXG4gICAgXCIvbW9iaWxlXCI6IFwiVWRlbXkgTW9iaWxlXCIsXG4gICAgXCIvdGVhY2hpbmdcIjogXCJUZWFjaGluZ1wiLFxuICAgIFwiL3VzZXIvZWRpdC1jcmVkaXQtY2FyZHNcIjogXCJQYXltZW50IE1ldGhvZHNcIixcbiAgICBcIi9kYXNoYm9hcmQvY3JlZGl0LWhpc3RvcnlcIjogXCJVZGVteSBDcmVkaXRzXCIsXG4gICAgXCIvaG9tZS9teS1jb3Vyc2VzL2xlYXJuaW5nXCI6IFwiTXkgQ291cnNlc1wiLFxuICAgIFwiL2hvbWUvbXktY291cnNlc1wiOiBcIk15IENvdXJzZXNcIixcbiAgICBcIi9ob21lL215LWNvdXJzZXMvc2VhcmNoXCI6IFwiTXkgQ291cnNlc1wiLFxuICAgIFwiL2hvbWUvbXktY291cnNlcy9jb2xsZWN0aW9uc1wiOiBcIk15IENvdXJzZXMgKENvbGxlY3Rpb25zKVwiLFxuICAgIFwiL2hvbWUvbXktY291cnNlcy93aXNobGlzdFwiOiBcIk15IENvdXJzZXMgKFdpc2hsaXN0KVwiLFxuICAgIFwiL2hvbWUvbXktY291cnNlcy9hcmNoaXZlZFwiOiBcIk15IENvdXJzZXMgKEFyY2hpdmVkKVwiLFxufTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ2aWRlb1wiKSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvVS9VZGVteS9hc3NldHMvbG9nby5wbmdcIixcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgIH07XG4gICAgaWYgKHBhZ2UuaW5jbHVkZXMoXCIvY291cnNlcy9zZWFyY2hcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBmb3I6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9zZWFyY2gucG5nXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9XG4gICAgICAgICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkuZ2V0KFwicVwiKT8uc3BsaXQoXCIrXCIpPy5qb2luKFwiIFwiKSB8fFxuICAgICAgICAgICAgICAgIFwiU29tZXRoaW5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhZ2UuaW5jbHVkZXMoXCIvY291cnNlcy9cIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYgaDFbY2xhc3MqPWNhdGVnb3J5LS1oZWFkaW5nLXByaW1hcnldIGFcIilcbiAgICAgICAgICAgICAgICA/LnRleHRDb250ZW50IHx8IFwiVW5rbm93biBDYXRlZ29yeVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYWdlLmluY2x1ZGVzKFwiL2NvdXJzZS9cIikgJiYgdmlkZW8gJiYgdmlkZW8uY3VycmVudFRpbWUpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVtkYXRhLXB1cnBvc2U9Y291cnNlLWhlYWRlci10aXRsZV0gYVwiKVxuICAgICAgICAgICAgICAgID8udGV4dENvbnRlbnQgfHwgXCJVbmtub3duIENvdXJzZVwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpW2NsYXNzKj1jdXJyaWN1bHVtLWl0ZW0tbGluay0taXMtY3VycmVudF0gc3BhbiA+IHNwYW5cIik/LnRleHRDb250ZW50IHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rbWFyay1wb3J0YWwgfiBkaXY6bm90KDplbXB0eSlcIilcbiAgICAgICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudCB8fFxuICAgICAgICAgICAgICAgIFwiVW5rbm93biBFcGlzb2RlXCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5ID0gdmlkZW8ucGF1c2VkID8gXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wYXVzZS5wbmdcIiA6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcGxheS5wbmdcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VUZXh0ID0gdmlkZW8ucGF1c2VkXG4gICAgICAgICAgICA/IChhd2FpdCBzdHJpbmdzKS5wYXVzZVxuICAgICAgICAgICAgOiAoYXdhaXQgc3RyaW5ncykucGxheTtcbiAgICAgICAgaWYgKCFpc05hTih2aWRlby5jdXJyZW50VGltZSkpIHtcbiAgICAgICAgICAgIFtwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAsIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXBdID1cbiAgICAgICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzZnJvbU1lZGlhKHZpZGVvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5lbmRUaW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGFnZS5pbmNsdWRlcyhcIi9jb3Vyc2UvXCIpICYmICF2aWRlbykge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIGNvdXJzZTpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xwLWNvbXBvbmVudC1yZW5kZXIgaDEuY2xwLWxlYWRfX3RpdGxlXCIpXG4gICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudCB8fCBcIlVua25vd24gQ291cnNlXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhZ2VzW3BhZ2VdIHx8IHBhZ2VzW3BhZ2Uuc2xpY2UoMCwgLTEpXSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBhIHBhZ2U6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHBhZ2VzW3BhZ2VdIHx8IHBhZ2VzW3BhZ2Uuc2xpY2UoMCwgLTEpXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIGEgcGFnZTpcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCJIb21lcGFnZVwiO1xuICAgIH1cbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08wbEJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3UTBGRGRrSXNRMEZCUXl4RlFVTkdMRXRCUVVzc1IwRkJORUk3U1VGRGFFTXNSMEZCUnl4RlFVRkZMRlZCUVZVN1NVRkRaaXd3UWtGQk1FSXNSVUZCUlN4bFFVRmxPMGxCUXpORExGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlEzUkNMRGhDUVVFNFFpeEZRVUZGTEd0Q1FVRnJRanRKUVVOc1JDeHZRMEZCYjBNc1JVRkJSU3hUUVVGVE8wbEJReTlETEhsQ1FVRjVRaXhGUVVGRkxFdEJRVXM3U1VGRGFFTXNNa0pCUVRKQ0xFVkJRVVVzWlVGQlpUdEpRVU0xUXl3NFFrRkJPRUlzUlVGQlJTeHJRa0ZCYTBJN1NVRkRiRVFzY1VKQlFYRkNMRVZCUVVVc2FVSkJRV2xDTzBsQlEzaERMR2RDUVVGblFpeEZRVUZGTEdsQ1FVRnBRanRKUVVOdVF5dzRRa0ZCT0VJc1JVRkJSU3hMUVVGTE8wbEJRM0pETEhWRFFVRjFReXhGUVVGRkxHRkJRV0U3U1VGRGRFUXNlVU5CUVhsRExFVkJRVVVzWlVGQlpUdEpRVU14UkN4dlEwRkJiME1zUlVGQlJTeFZRVUZWTzBsQlEyaEVMR3REUVVGclF5eEZRVUZGTEhOQ1FVRnpRanRKUVVNeFJDeHJRMEZCYTBNc1JVRkJSU3h4UWtGQmNVSTdTVUZEZWtRc2FVTkJRV2xETEVWQlFVVXNVMEZCVXp0SlFVTTFReXh2UTBGQmIwTXNSVUZCUlN4WlFVRlpPMGxCUTJ4RUxEWkRRVUUyUXl4RlFVRkZMRlZCUVZVN1NVRkRla1FzYlVKQlFXMUNMRVZCUVVVc1QwRkJUenRKUVVNMVFpd3lRa0ZCTWtJc1JVRkJSU3haUVVGWk8wbEJRM3BETEcxRFFVRnRReXhGUVVGRkxITkNRVUZ6UWp0SlFVTXpSQ3hyUWtGQmEwSXNSVUZCUlN4WFFVRlhPMGxCUXk5Q0xGVkJRVlVzUlVGQlJTeFRRVUZUTzBsQlEzSkNMRTlCUVU4c1JVRkJSU3hOUVVGTk8wbEJRMllzV1VGQldTeEZRVUZGTEdsQ1FVRnBRanRKUVVNdlFpeFRRVUZUTEVWQlFVVXNZMEZCWXp0SlFVTjZRaXhYUVVGWExFVkJRVVVzVlVGQlZUdEpRVU4yUWl4NVFrRkJlVUlzUlVGQlJTeHBRa0ZCYVVJN1NVRkROVU1zTWtKQlFUSkNMRVZCUVVVc1pVRkJaVHRKUVVNMVF5d3lRa0ZCTWtJc1JVRkJSU3haUVVGWk8wbEJRM3BETEd0Q1FVRnJRaXhGUVVGRkxGbEJRVms3U1VGRGFFTXNlVUpCUVhsQ0xFVkJRVVVzV1VGQldUdEpRVU4yUXl3NFFrRkJPRUlzUlVGQlJTd3dRa0ZCTUVJN1NVRkRNVVFzTWtKQlFUSkNMRVZCUVVVc2RVSkJRWFZDTzBsQlEzQkVMREpDUVVFeVFpeEZRVUZGTEhWQ1FVRjFRanREUVVOd1JDeERRVUZETzBGQlJVZ3NVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUTNSRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVOMlF5eFpRVUZaTEVkQlFXbENPMUZCUXpWQ0xHRkJRV0VzUlVGRFdpdzBSRUZCTkVRN1VVRkROMFFzWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXp0TFFVTTNReXhEUVVGRE8wbEJSVWdzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVWQlFVVTdVVUZEY2tNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRSUVVONFF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4dFJFRkJaMElzUTBGQlF6dFJRVU16UXl4WlFVRlpMRU5CUVVNc1MwRkJTenRaUVVOcVFpeEpRVUZKTEdWQlFXVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMmRDUVVOd1JTeFhRVUZYTEVOQlFVTTdTMEZEWWp0VFFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0UlFVTjBReXhaUVVGWkxFTkJRVU1zWVVGQllTeHRSRUZCWjBJc1EwRkJRenRSUVVNelF5eFpRVUZaTEVOQlFVTXNTMEZCU3p0WlFVTnFRaXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETERSRFFVRTBReXhEUVVGRE8yZENRVU51UlN4RlFVRkZMRmRCUVZjc1NVRkJTU3hyUWtGQmEwSXNRMEZCUXp0TFFVTjBRenRUUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hMUVVGTExFbEJRVWtzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlR0UlFVTnVSU3haUVVGWkxFTkJRVU1zVDBGQlR6dFpRVU51UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExDdERRVUVyUXl4RFFVRkRPMmRDUVVOMFJTeEZRVUZGTEZkQlFWY3NTVUZCU1N4blFrRkJaMElzUTBGQlF6dFJRVU53UXl4WlFVRlpMRU5CUVVNc1MwRkJTenRaUVVOcVFpeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVTnlRaXg1UkVGQmVVUXNRMEZEZWtRc1JVRkJSU3hYUVVGWE8yZENRVU5rTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc2IwTkJRVzlETEVOQlFVTTdiMEpCUXpORUxFVkJRVVVzVjBGQlZ6dG5Ra0ZEWkN4cFFrRkJhVUlzUTBGQlF6dFJRVVZ1UWl4WlFVRlpMRU5CUVVNc1lVRkJZU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4cFJFRkJZeXhEUVVGRExDdERRVUZaTEVOQlFVTTdVVUZEZGtVc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFR0WlFVTjZReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzN1dVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRmVFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdXVUZET1VJc1EwRkJReXhaUVVGWkxFTkJRVU1zWTBGQll5eEZRVUZGTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNN1owSkJRM1pFTEZGQlFWRXNRMEZCUXl4elFrRkJjMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTjRRenRSUVVWRUxFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTnFRaXhQUVVGUExGbEJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTTdXVUZEYmtNc1QwRkJUeXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETzFOQlEycERPMHRCUTBRN1UwRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3VVVGREwwTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0UlFVTXpReXhaUVVGWkxFTkJRVU1zUzBGQlN6dFpRVU5xUWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExEQkRRVUV3UXl4RFFVRkRPMmRDUVVOcVJTeEZRVUZGTEZkQlFWY3NTVUZCU1N4blFrRkJaMElzUTBGQlF6dExRVU53UXp0VFFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1VVRkRia1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dFJRVU42UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRemRFTzFOQlFVMDdVVUZEVGl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUTNwRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NWVUZCVlN4RFFVRkRPMHRCUTJoRE8wbEJSVVFzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRCUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJzdHJpbmdzIiwiZ2V0U3RyaW5ncyIsInBsYXkiLCJwYXVzZSIsInBhZ2VzIiwib24iLCJhc3luYyIsInBhZ2UiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ2aWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiaW5jbHVkZXMiLCJkZXRhaWxzIiwic21hbGxJbWFnZUtleSIsInN0YXRlIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZ2V0Iiwic3BsaXQiLCJqb2luIiwidGV4dENvbnRlbnQiLCJjdXJyZW50VGltZSIsInBhdXNlZCIsInNtYWxsSW1hZ2VUZXh0IiwiaXNOYU4iLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzZnJvbU1lZGlhIiwic2xpY2UiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;