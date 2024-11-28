var __webpack_exports__={};const presence=new Presence({clientId:"636588416854917130"}),browsingTimestamp=Math.floor(Date.now()/1e3);let title,search;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/0-9/1337x/assets/logo.png",startTimestamp:browsingTimestamp};"/"===document.location.pathname||"/home/"===document.location.pathname?e.details="Viewing home page":document.location.pathname.includes("/movie-library")?e.details="Viewing the movie library":document.location.pathname.includes("/series-library")?e.details="Viewing the series library":document.location.pathname.includes("/new-episodes")?e.details="Viewing the latest episodes":document.location.pathname.includes("/top-100")?e.details="Viewing the top 100":document.location.pathname.includes("/trending")?e.details="Viewing what's trending":document.location.pathname.includes("/cat/Anime/")?e.details="Viewing Anime torrents":document.location.pathname.includes("/sub/")?(title=document.querySelector("body > main > div > div > div.box-info.trending > div > h1"),e.details="Viewing:",e.state=title.textContent):document.location.pathname.includes("/cat/Apps/")?e.details="Viewing Apps Torrents":document.location.pathname.includes("/cat/Documentaries/")?e.details="Viewing Documentaries Torrents":document.location.pathname.includes("/cat/Games/")?e.details="Viewing Games Torrents":document.location.pathname.includes("/cat/Movies/")?e.details="Viewing Movies Torrents":document.location.pathname.includes("/cat/Music/")?e.details="Viewing Music Torrents":document.location.pathname.includes("/cat/Other/")?e.details="Viewing Other Torrents":document.location.pathname.includes("/cat/TV/")?e.details="Viewing TV Torrents":document.location.pathname.includes("/cat/XXX/")?e.details="Viewing XXX Torrents":document.location.pathname.includes("/upload")?e.details="Uploading something...":document.location.pathname.includes("/rules")?(e.details="Reading the rules",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("/contact")?(e.details="Writing to 1337x",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/writing.png"):document.location.pathname.includes("/about")?(e.details="Reading about 1337x",e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/reading.png"):document.location.pathname.includes("/torrent/")?(e.details="Viewing torrent:",title=document.querySelector("body > main > div > div > div > div.box-info-heading.clearfix > h1"),e.state=title.textContent):document.location.pathname.includes("/search")&&(search=document.querySelector("body > main > div > div > div > div.box-info-heading.clearfix > h1 > span"),e.details="Searching for:",e.state=search.textContent,e.smallImageKey="https://cdn.rcd.gg/PreMiD/resources/search.png"),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLE1BQU9DLE9BQ1hULFNBQVNVLEdBQUcsY0FBY0MsVUFDdEIsTUFBTUMsRUFBZSxDQUNqQkMsY0FBZSwrREFDZkMsZUFBZ0JYLG1CQUVlLE1BQS9CWSxTQUFTQyxTQUFTQyxVQUNhLFdBQS9CRixTQUFTQyxTQUFTQyxTQUNsQkwsRUFBYU0sUUFBVSxvQkFDbEJILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsa0JBQ3pDUCxFQUFhTSxRQUFVLDRCQUNsQkgsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxtQkFDekNQLEVBQWFNLFFBQVUsNkJBQ2xCSCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGlCQUN6Q1AsRUFBYU0sUUFBVSw4QkFDbEJILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsWUFDekNQLEVBQWFNLFFBQVUsc0JBQ2xCSCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGFBQ3pDUCxFQUFhTSxRQUFVLDBCQUNsQkgsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxlQUN6Q1AsRUFBYU0sUUFBVSx5QkFDbEJILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsVUFDekNYLE1BQVFPLFNBQVNLLGNBQWMsOERBQy9CUixFQUFhTSxRQUFVLFdBQ3ZCTixFQUFhUyxNQUFRYixNQUFNYyxhQUV0QlAsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxjQUN6Q1AsRUFBYU0sUUFBVSx3QkFDbEJILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsdUJBQ3pDUCxFQUFhTSxRQUFVLGlDQUNsQkgsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxlQUN6Q1AsRUFBYU0sUUFBVSx5QkFDbEJILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsZ0JBQ3pDUCxFQUFhTSxRQUFVLDBCQUNsQkgsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxlQUN6Q1AsRUFBYU0sUUFBVSx5QkFDbEJILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsZUFDekNQLEVBQWFNLFFBQVUseUJBQ2xCSCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLFlBQ3pDUCxFQUFhTSxRQUFVLHNCQUNsQkgsU0FBU0MsU0FBU0MsU0FBU0UsU0FBUyxhQUN6Q1AsRUFBYU0sUUFBVSx1QkFDbEJILFNBQVNDLFNBQVNDLFNBQVNFLFNBQVMsV0FDekNQLEVBQWFNLFFBQVUseUJBQ2xCSCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLFdBQ3pDUCxFQUFhTSxRQUFVLG9CQUN2Qk4sRUFBYVcsY0FBZ0IsbURBRXhCUixTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGFBQ3pDUCxFQUFhTSxRQUFVLG1CQUN2Qk4sRUFBYVcsY0FBZ0IsbURBRXhCUixTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLFdBQ3pDUCxFQUFhTSxRQUFVLHNCQUN2Qk4sRUFBYVcsY0FBZ0IsbURBRXhCUixTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGNBQ3pDUCxFQUFhTSxRQUFVLG1CQUN2QlYsTUFBUU8sU0FBU0ssY0FBYyxzRUFDL0JSLEVBQWFTLE1BQVFiLE1BQU1jLGFBRXRCUCxTQUFTQyxTQUFTQyxTQUFTRSxTQUFTLGFBQ3pDVixPQUFTTSxTQUFTSyxjQUFjLDZFQUNoQ1IsRUFBYU0sUUFBVSxpQkFDdkJOLEVBQWFTLE1BQVFaLE9BQU9hLFlBQzVCVixFQUFhVyxjQUFnQixrREFFN0JYLEVBQWFNLFFBQ2JsQixTQUFTd0IsWUFBWVosR0FFckJaLFNBQVN3QixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjYzNjU4ODQxNjg1NDkxNzEzMFwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5sZXQgdGl0bGUsIHNlYXJjaDtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvMC05LzEzMzd4L2Fzc2V0cy9sb2dvLnBuZ1wiLFxuICAgICAgICBzdGFydFRpbWVzdGFtcDogYnJvd3NpbmdUaW1lc3RhbXAsXG4gICAgfTtcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiIHx8XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9ob21lL1wiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBob21lIHBhZ2VcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9tb3ZpZS1saWJyYXJ5XCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgbW92aWUgbGlicmFyeVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3Nlcmllcy1saWJyYXJ5XCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgc2VyaWVzIGxpYnJhcnlcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9uZXctZXBpc29kZXNcIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRoZSBsYXRlc3QgZXBpc29kZXNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi90b3AtMTAwXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB0aGUgdG9wIDEwMFwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RyZW5kaW5nXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyB3aGF0J3MgdHJlbmRpbmdcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jYXQvQW5pbWUvXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBBbmltZSB0b3JyZW50c1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3N1Yi9cIikpIHtcbiAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IG1haW4gPiBkaXYgPiBkaXYgPiBkaXYuYm94LWluZm8udHJlbmRpbmcgPiBkaXYgPiBoMVwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmc6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jYXQvQXBwcy9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIEFwcHMgVG9ycmVudHNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jYXQvRG9jdW1lbnRhcmllcy9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIERvY3VtZW50YXJpZXMgVG9ycmVudHNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jYXQvR2FtZXMvXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBHYW1lcyBUb3JyZW50c1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2NhdC9Nb3ZpZXMvXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBNb3ZpZXMgVG9ycmVudHNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jYXQvTXVzaWMvXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVmlld2luZyBNdXNpYyBUb3JyZW50c1wiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2NhdC9PdGhlci9cIikpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIE90aGVyIFRvcnJlbnRzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvY2F0L1RWL1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgVFYgVG9ycmVudHNcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9jYXQvWFhYL1wiKSlcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlZpZXdpbmcgWFhYIFRvcnJlbnRzXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvdXBsb2FkXCIpKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiVXBsb2FkaW5nIHNvbWV0aGluZy4uLlwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3J1bGVzXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWFkaW5nIHRoZSBydWxlc1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvcmVhZGluZy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvY29udGFjdFwiKSkge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiV3JpdGluZyB0byAxMzM3eFwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZUtleSA9IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC9yZXNvdXJjZXMvd3JpdGluZy5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvYWJvdXRcIikpIHtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlYWRpbmcgYWJvdXQgMTMzN3hcIjtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3JlYWRpbmcucG5nXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3RvcnJlbnQvXCIpKSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJWaWV3aW5nIHRvcnJlbnQ6XCI7XG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBtYWluID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2LmJveC1pbmZvLWhlYWRpbmcuY2xlYXJmaXggPiBoMVwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3NlYXJjaFwiKSkge1xuICAgICAgICBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IG1haW4gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYuYm94LWluZm8taGVhZGluZy5jbGVhcmZpeCA+IGgxID4gc3BhblwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlNlYXJjaGluZyBmb3I6XCI7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHNlYXJjaC50ZXh0Q29udGVudDtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3NlYXJjaC5wbmdcIjtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeEpRVUZKTEV0QlFXdENMRVZCUVVVc1RVRkJiVUlzUTBGQlF6dEJRVVUxUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlR0SlFVTndReXhOUVVGTkxGbEJRVmtzUjBGQmFVSTdVVUZEYkVNc1lVRkJZU3hGUVVOYUxEaEVRVUU0UkR0UlFVTXZSQ3hqUVVGakxFVkJRVVVzYVVKQlFXbENPMHRCUTJwRExFTkJRVU03U1VGRlJpeEpRVU5ETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hMUVVGTExFZEJRVWM3VVVGRGJFTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFdEJRVXNzVVVGQlVUdFJRVVYyUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMU5CUTNaRExFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRPMUZCUXpkRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNa0pCUVRKQ0xFTkJRVU03VTBGREwwTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03VVVGRE9VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcwUWtGQk5FSXNRMEZCUXp0VFFVTm9SQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRE5VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXcyUWtGQk5rSXNRMEZCUXp0VFFVTnFSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRGRrUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0VFFVTjZReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGVFUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXg1UWtGQmVVSXNRMEZCUXp0VFFVTTNReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU03VVVGRE1VUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0VFFVTTFReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdFJRVU4wUkN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRE4wSXNORVJCUVRSRUxFTkJRelZFTEVOQlFVTTdVVUZGUml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU5zUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTTdTMEZEZGtNN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU03VVVGRE0wUXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXgxUWtGQmRVSXNRMEZCUXp0VFFVTXpReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXh4UWtGQmNVSXNRMEZCUXp0UlFVTnNSU3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEdkRFFVRm5ReXhEUVVGRE8xTkJRM0JFTEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTXhSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8xTkJRelZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXp0UlFVTXpSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhsQ1FVRjVRaXhEUVVGRE8xTkJRemRETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTXhSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8xTkJRelZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTXhSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8xTkJRelZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXp0UlFVTjJSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhGQ1FVRnhRaXhEUVVGRE8xTkJRM3BETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTjRSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8xTkJRekZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTjBSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8xTkJRelZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMUZCUTNaRUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03VVVGRE0wTXNXVUZCV1N4RFFVRkRMR0ZCUVdFc2IwUkJRV2xDTEVOQlFVTTdTMEZETlVNN1UwRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJUdFJRVU16UkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMUZCUXpGRExGbEJRVmtzUTBGQlF5eGhRVUZoTEc5RVFVRnBRaXhEUVVGRE8wdEJRelZETzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVN1VVRkRla1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4eFFrRkJjVUlzUTBGQlF6dFJRVU0zUXl4WlFVRlpMRU5CUVVNc1lVRkJZU3h2UkVGQmFVSXNRMEZCUXp0TFFVTTFRenRUUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTzFGQlF6VkVMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1VVRkRNVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpkQ0xHOUZRVUZ2UlN4RFFVTndSU3hEUVVGRE8xRkJRMFlzV1VGQldTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRE8wdEJRM1pETzFOQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1VVRkRNVVFzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUXpsQ0xESkZRVUV5UlN4RFFVTXpSU3hEUVVGRE8xRkJSVVlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF6dFJRVU40UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZEZUVNc1dVRkJXU3hEUVVGRExHRkJRV0VzYlVSQlFXZENMRU5CUVVNN1MwRkRNME03U1VGRlJDeEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBPMUZCUVVVc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXpzN1VVRkRlRVFzVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZESW4wPSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ0aXRsZSIsInNlYXJjaCIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkZXRhaWxzIiwiaW5jbHVkZXMiLCJxdWVyeVNlbGVjdG9yIiwic3RhdGUiLCJ0ZXh0Q29udGVudCIsInNtYWxsSW1hZ2VLZXkiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;