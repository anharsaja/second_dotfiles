var __webpack_exports__={};const presence=new Presence({clientId:"787715073007026187"}),strings=presence.getStrings({play:"general.playing",pause:"general.paused"});let lastPlaybackState,lastPath,browsingTimestamp=Math.floor(Date.now()/1e3);presence.on("UpdateData",(async()=>{const e=!!document.querySelector("#title")||document.querySelectorAll("video").length&&"previewVideo"!==document.querySelectorAll("video")[0].className,t=document.location.pathname,a={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/Y/Yoake/assets/logo.png"};if(lastPath===t&&lastPlaybackState===e||(lastPath=t,lastPlaybackState=e,browsingTimestamp=Math.floor(Date.now()/1e3)),!e)return t.startsWith("/entity.php")?(a.details=document.querySelector("#entityTitle").textContent,a.state="Đang chọn tập..."):t.startsWith("/profile.php")?a.details="Đang xem profile...":t.startsWith("/search.php")?a.details="Đang tìm kiếm...":t.startsWith("/login.php")?a.details="Đang đăng nhập...":t.startsWith("/register.php")?a.details="Đang đăng ký...":t.startsWith("/genres.php")?(a.state=`Thể loại: ${document.querySelector(".genreh2").textContent}`,a.details="Đang chọn phim..."):t.startsWith("/history.php")?a.details="Đang xem lịch sử...":t.startsWith("/saved.php")?a.details="Đang xem danh sách theo dõi...":t.startsWith("/reset-password")?a.details="Đang đặt lại mật khẩu...":a.details="Đang xem trang chủ...",a.startTimestamp=browsingTimestamp,t.startsWith("/entity.php")||t.startsWith("/genres.php")||delete a.state,delete a.smallImageKey,void presence.setActivity(a,!0);const[s]=document.querySelectorAll("video");if(s&&!isNaN(s.duration)){const[e,t]=(document.querySelector("#title")?document.querySelector("#title").textContent:"Không thấy tên phim!... - Tập ?").split(" - ");a.smallImageKey=s.paused?"https://cdn.rcd.gg/PreMiD/resources/pause.png":"https://cdn.rcd.gg/PreMiD/resources/play.png",a.smallImageText=s.paused?(await strings).pause:(await strings).play,[a.startTimestamp,a.endTimestamp]=presence.getTimestamps(Math.floor(s.currentTime),Math.floor(s.duration)),a.details=`Đang xem: ${e}`,a.state=t,s.paused&&(delete a.startTimestamp,delete a.endTimestamp),presence.setActivity(a,!0)}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsUUFBVUgsU0FBU0ksV0FBVyxDQUM5QkMsS0FBTSxrQkFDTkMsTUFBTyxtQkFFWCxJQUFJQyxrQkFBbUJDLFNBQVVDLGtCQUFvQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxLQUM3RWIsU0FBU2MsR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxJQUFhQyxTQUFTQyxjQUFjLFdBQ3JDRCxTQUFTRSxpQkFBaUIsU0FBU0MsUUFDb0IsaUJBQXBESCxTQUFTRSxpQkFBaUIsU0FBUyxHQUFHRSxVQUErQkMsRUFBVUwsU0FBU00sU0FBU0MsU0FBVUMsRUFBZSxDQUM5SEMsY0FBZSw4REFPbkIsR0FMSWxCLFdBQWFjLEdBQVdmLG9CQUFzQlMsSUFDOUNSLFNBQVdjLEVBQ1hmLGtCQUFvQlMsRUFDcEJQLGtCQUFvQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxPQUUzQ0csRUErQkQsT0E5QklNLEVBQVFLLFdBQVcsZ0JBQ25CRixFQUFhRyxRQUFVWCxTQUFTQyxjQUFjLGdCQUFnQlcsWUFDOURKLEVBQWFLLE1BQVEsb0JBRWhCUixFQUFRSyxXQUFXLGdCQUN4QkYsRUFBYUcsUUFBVSxzQkFDbEJOLEVBQVFLLFdBQVcsZUFDeEJGLEVBQWFHLFFBQVUsbUJBQ2xCTixFQUFRSyxXQUFXLGNBQ3hCRixFQUFhRyxRQUFVLG9CQUNsQk4sRUFBUUssV0FBVyxpQkFDeEJGLEVBQWFHLFFBQVUsa0JBQ2xCTixFQUFRSyxXQUFXLGdCQUN4QkYsRUFBYUssTUFBUSxhQUFhYixTQUFTQyxjQUFjLFlBQVlXLGNBQ3JFSixFQUFhRyxRQUFVLHFCQUVsQk4sRUFBUUssV0FBVyxnQkFDeEJGLEVBQWFHLFFBQVUsc0JBQ2xCTixFQUFRSyxXQUFXLGNBQ3hCRixFQUFhRyxRQUFVLGlDQUNsQk4sRUFBUUssV0FBVyxtQkFDeEJGLEVBQWFHLFFBQVUsMkJBRXZCSCxFQUFhRyxRQUFVLHdCQUMzQkgsRUFBYU0sZUFBaUJ0QixrQkFDekJhLEVBQVFLLFdBQVcsZ0JBQ25CTCxFQUFRSyxXQUFXLHVCQUNiRixFQUFhSyxhQUNqQkwsRUFBYU8sbUJBQ3BCaEMsU0FBU2lDLFlBQVlSLEdBQWMsR0FHdkMsTUFBT1MsR0FBU2pCLFNBQVNFLGlCQUFpQixTQUMxQyxHQUFJZSxJQUFVQyxNQUFNRCxFQUFNRSxVQUFXLENBQ2pDLE1BQU9DLEVBQWFDLElBQWdCckIsU0FBU0MsY0FBYyxVQUNyREQsU0FBU0MsY0FBYyxVQUFVVyxZQUNqQyxtQ0FBbUNVLE1BQU0sT0FDL0NkLEVBQWFPLGNBQWdCRSxFQUFNTSxPQUFTLGdEQUFrRCwrQ0FDOUZmLEVBQWFnQixlQUFpQlAsRUFBTU0sY0FDdkJyQyxTQUFTRyxhQUNUSCxTQUFTRSxNQUNyQm9CLEVBQWFNLGVBQWdCTixFQUFhaUIsY0FDdkMxQyxTQUFTMkMsY0FBY2pDLEtBQUtDLE1BQU11QixFQUFNVSxhQUFjbEMsS0FBS0MsTUFBTXVCLEVBQU1FLFdBQzNFWCxFQUFhRyxRQUFVLGFBQWFTLElBQ3BDWixFQUFhSyxNQUFRUSxFQUNqQkosRUFBTU0sZ0JBQ0NmLEVBQWFNLHNCQUNiTixFQUFhaUIsY0FFeEIxQyxTQUFTaUMsWUFBWVIsR0FBYyxFQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI3ODc3MTUwNzMwMDcwMjYxODdcIixcbn0pLCBzdHJpbmdzID0gcHJlc2VuY2UuZ2V0U3RyaW5ncyh7XG4gICAgcGxheTogXCJnZW5lcmFsLnBsYXlpbmdcIixcbiAgICBwYXVzZTogXCJnZW5lcmFsLnBhdXNlZFwiLFxufSk7XG5sZXQgbGFzdFBsYXliYWNrU3RhdGUsIGxhc3RQYXRoLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwbGF5YmFjayA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKSB8fFxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInZpZGVvXCIpLmxlbmd0aCAmJlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInZpZGVvXCIpWzBdLmNsYXNzTmFtZSAhPT0gXCJwcmV2aWV3VmlkZW9cIiksIGN1clBhdGggPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSwgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvWS9Zb2FrZS9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9O1xuICAgIGlmIChsYXN0UGF0aCAhPT0gY3VyUGF0aCB8fCBsYXN0UGxheWJhY2tTdGF0ZSAhPT0gcGxheWJhY2spIHtcbiAgICAgICAgbGFzdFBhdGggPSBjdXJQYXRoO1xuICAgICAgICBsYXN0UGxheWJhY2tTdGF0ZSA9IHBsYXliYWNrO1xuICAgICAgICBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgIH1cbiAgICBpZiAoIXBsYXliYWNrKSB7XG4gICAgICAgIGlmIChjdXJQYXRoLnN0YXJ0c1dpdGgoXCIvZW50aXR5LnBocFwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudGl0eVRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gXCLEkGFuZyBjaOG7jW4gdOG6rXAuLi5cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJQYXRoLnN0YXJ0c1dpdGgoXCIvcHJvZmlsZS5waHBcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwixJBhbmcgeGVtIHByb2ZpbGUuLi5cIjtcbiAgICAgICAgZWxzZSBpZiAoY3VyUGF0aC5zdGFydHNXaXRoKFwiL3NlYXJjaC5waHBcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwixJBhbmcgdMOsbSBraeG6v20uLi5cIjtcbiAgICAgICAgZWxzZSBpZiAoY3VyUGF0aC5zdGFydHNXaXRoKFwiL2xvZ2luLnBocFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCLEkGFuZyDEkcSDbmcgbmjhuq1wLi4uXCI7XG4gICAgICAgIGVsc2UgaWYgKGN1clBhdGguc3RhcnRzV2l0aChcIi9yZWdpc3Rlci5waHBcIikpXG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwixJBhbmcgxJHEg25nIGvDvS4uLlwiO1xuICAgICAgICBlbHNlIGlmIChjdXJQYXRoLnN0YXJ0c1dpdGgoXCIvZ2VucmVzLnBocFwiKSkge1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gYFRo4buDIGxv4bqhaTogJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbnJlaDJcIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCLEkGFuZyBjaOG7jW4gcGhpbS4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1clBhdGguc3RhcnRzV2l0aChcIi9oaXN0b3J5LnBocFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCLEkGFuZyB4ZW0gbOG7i2NoIHPhu60uLi5cIjtcbiAgICAgICAgZWxzZSBpZiAoY3VyUGF0aC5zdGFydHNXaXRoKFwiL3NhdmVkLnBocFwiKSlcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCLEkGFuZyB4ZW0gZGFuaCBzw6FjaCB0aGVvIGTDtWkuLi5cIjtcbiAgICAgICAgZWxzZSBpZiAoY3VyUGF0aC5zdGFydHNXaXRoKFwiL3Jlc2V0LXBhc3N3b3JkXCIpKVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIsSQYW5nIMSR4bq3dCBs4bqhaSBt4bqtdCBraOG6qXUuLi5cIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIsSQYW5nIHhlbSB0cmFuZyBjaOG7py4uLlwiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgaWYgKCFjdXJQYXRoLnN0YXJ0c1dpdGgoXCIvZW50aXR5LnBocFwiKSAmJlxuICAgICAgICAgICAgIWN1clBhdGguc3RhcnRzV2l0aChcIi9nZW5yZXMucGhwXCIpKVxuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGF0ZTtcbiAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zbWFsbEltYWdlS2V5O1xuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEsIHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IFt2aWRlb10gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidmlkZW9cIik7XG4gICAgaWYgKHZpZGVvICYmICFpc05hTih2aWRlby5kdXJhdGlvbikpIHtcbiAgICAgICAgY29uc3QgW3RpdGxlQXJyT25lLCB0aXRsZUFyclR3b10gPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKVxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnRleHRDb250ZW50XG4gICAgICAgICAgICA6IFwiS2jDtG5nIHRo4bqleSB0w6puIHBoaW0hLi4uIC0gVOG6rXAgP1wiKS5zcGxpdChcIiAtIFwiKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnNtYWxsSW1hZ2VLZXkgPSB2aWRlby5wYXVzZWQgPyBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvcmVzb3VyY2VzL3BhdXNlLnBuZ1wiIDogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3Jlc291cmNlcy9wbGF5LnBuZ1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEuc21hbGxJbWFnZVRleHQgPSB2aWRlby5wYXVzZWRcbiAgICAgICAgICAgID8gKGF3YWl0IHN0cmluZ3MpLnBhdXNlXG4gICAgICAgICAgICA6IChhd2FpdCBzdHJpbmdzKS5wbGF5O1xuICAgICAgICBbcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wLCBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wXSA9XG4gICAgICAgICAgICBwcmVzZW5jZS5nZXRUaW1lc3RhbXBzKE1hdGguZmxvb3IodmlkZW8uY3VycmVudFRpbWUpLCBNYXRoLmZsb29yKHZpZGVvLmR1cmF0aW9uKSk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYMSQYW5nIHhlbTogJHt0aXRsZUFyck9uZX1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSB0aXRsZUFyclR3bztcbiAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkge1xuICAgICAgICAgICAgZGVsZXRlIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcDtcbiAgICAgICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuZW5kVGltZXN0YW1wO1xuICAgICAgICB9XG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KHByZXNlbmNlRGF0YSwgdHJ1ZSk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTFRaXhSUVVGUkxFVkJRVVVzYjBKQlFXOUNPME5CUXpsQ0xFTkJRVU1zUlVGRFJpeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNM1FpeEpRVUZKTEVWQlFVVXNhVUpCUVdsQ08wbEJRM1pDTEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3UTBGRGRrSXNRMEZCUXl4RFFVRkRPMEZCUlVvc1NVRkJTU3hwUWtGQk1FSXNSVUZETjBJc1VVRkJaMElzUlVGRGFFSXNhVUpCUVdsQ0xFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZGYmtRc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNTMEZCU3l4SlFVRkpMRVZCUVVVN1NVRkRjRU1zVFVGQlRTeFJRVUZSTEVkQlExb3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeERRVUZETzFGQlEyeERMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTA3V1VGRGVrTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUzBGQlN5eGpRVUZqTEVOQlFVTXNSVUZEY2tVc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVTndReXhaUVVGWkxFZEJRV2xDTzFGQlF6VkNMR0ZCUVdFc1JVRkRXaXcwUkVGQk5FUTdTMEZETjBRc1EwRkJRenRKUVVWSUxFbEJRVWtzVVVGQlVTeExRVUZMTEU5QlFVOHNTVUZCU1N4cFFrRkJhVUlzUzBGQlN5eFJRVUZSTEVWQlFVVTdVVUZETTBRc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF6dFJRVU51UWl4cFFrRkJhVUlzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZETjBJc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRiRVE3U1VGRFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTJRc1NVRkJTU3hQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEdGQlFXRXNRMEZCUXl4RlFVRkZPMWxCUTNSRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZETVVVc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRUUVVONFF6dGhRVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhqUVVGakxFTkJRVU03V1VGRE5VTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh4UWtGQmNVSXNRMEZCUXp0aFFVTjZReXhKUVVGSkxFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNZVUZCWVN4RFFVRkRPMWxCUTNwRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03WVVGRGRFTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF6dFpRVU40UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRPMkZCUTNaRExFbEJRVWtzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRmxMRU5CUVVNN1dVRkRNME1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dGhRVU55UXl4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQllTeERRVUZETEVWQlFVVTdXVUZETTBNc1dVRkJXU3hEUVVGRExFdEJRVXNzUjBGQlJ5eGhRVU53UWl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEZkQlEzQkRMRVZCUVVVc1EwRkJRenRaUVVOSUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03VTBGRE0wTTdZVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zWTBGQll5eERRVUZETzFsQlF6VkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzY1VKQlFYRkNMRU5CUVVNN1lVRkRla01zU1VGQlNTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmxCUVZrc1EwRkJRenRaUVVONFF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2REUVVGblF5eERRVUZETzJGQlEzQkVMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRaUVVNM1F5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMREJDUVVFd1FpeERRVUZET3p0WlFVTTVReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8xRkJRM0JFTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZGYUVRc1NVRkRReXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNZVUZCWVN4RFFVRkRPMWxCUTJ4RExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4aFFVRmhMRU5CUVVNN1dVRkZiRU1zVDBGQlR5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpOQ0xFOUJRVThzV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXp0UlFVVnNReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVONlF5eFBRVUZQTzB0QlExQTdTVUZGUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlJXNUVMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRSUVVOd1F5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRMnhETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRE8xbEJReTlDTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEZkQlFWYzdXVUZET1VNc1EwRkJReXhEUVVGRExHbERRVUZwUXl4RFFVTndReXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTm1MRmxCUVZrc1EwRkJReXhoUVVGaExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMR2xFUVVGakxFTkJRVU1zSzBOQlFWa3NRMEZCUXp0UlFVTjJSU3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5PMWxCUTNwRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTenRaUVVOMlFpeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dFJRVU40UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhqUVVGakxFVkJRVVVzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXp0WlFVTjJSQ3hSUVVGUkxFTkJRVU1zWVVGQllTeERRVU55UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZETjBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUXpGQ0xFTkJRVU03VVVGRlNDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR0ZCUVdFc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGJFUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU03VVVGRmFrTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMnBDTEU5QlFVOHNXVUZCV1N4RFFVRkRMR05CUVdNc1EwRkJRenRaUVVOdVF5eFBRVUZQTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNN1UwRkRha003VVVGRFJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRmxCUVZrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU42UXp0QlFVTkdMRU5CUVVNc1EwRkJReXhEUVVGREluMD0iXSwibmFtZXMiOlsicHJlc2VuY2UiLCJQcmVzZW5jZSIsImNsaWVudElkIiwic3RyaW5ncyIsImdldFN0cmluZ3MiLCJwbGF5IiwicGF1c2UiLCJsYXN0UGxheWJhY2tTdGF0ZSIsImxhc3RQYXRoIiwiYnJvd3NpbmdUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwib24iLCJhc3luYyIsInBsYXliYWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNsYXNzTmFtZSIsImN1clBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0c1dpdGgiLCJkZXRhaWxzIiwidGV4dENvbnRlbnQiLCJzdGF0ZSIsInN0YXJ0VGltZXN0YW1wIiwic21hbGxJbWFnZUtleSIsInNldEFjdGl2aXR5IiwidmlkZW8iLCJpc05hTiIsImR1cmF0aW9uIiwidGl0bGVBcnJPbmUiLCJ0aXRsZUFyclR3byIsInNwbGl0IiwicGF1c2VkIiwic21hbGxJbWFnZVRleHQiLCJlbmRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXBzIiwiY3VycmVudFRpbWUiXSwic291cmNlUm9vdCI6IiJ9
undefined;