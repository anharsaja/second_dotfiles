var __webpack_exports__={};const presence=new Presence({clientId:"653156362548805652"}),pages={"/docs":"Documention","/login":"Login Page"};presence.on("UpdateData",(async()=>{const e=document.location.pathname,t=document.querySelector("#page-wrapper > div > div > div > div > div.panel-heading"),n={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/A/ApertureBot/assets/logo.png",startTimestamp:Math.floor(Date.now()/1e3)};pages[e]||pages[e.slice(0,-1)]?n.details=pages[e]||pages[e.slice(0,-1)]:t&&"Configuration Editor"===t.textContent?n.details="Configuration Page":t&&"Infractions"===t.textContent?n.details="Infraction List":t&&"Guild Weekly Message Throughput"===t.textContent?n.details="Guild Stats":t&&" Guild Banner"===t.textContent?n.details="Guild Info Page":n.details="Read to Documentation",n.details?presence.setActivity(n):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUFFQyxTQUFVLHVCQUF5QkMsTUFBUSxDQUN2RSxRQUFTLGNBQ1QsU0FBVSxjQUVkSCxTQUFTSSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQU9DLFNBQVNDLFNBQVNDLFNBQVVDLEVBQU9ILFNBQVNJLGNBQWMsNkRBQThEQyxFQUFlLENBQ2hKQyxjQUFlLG1FQUNmQyxlQUFnQkMsS0FBS0MsTUFBTUMsS0FBS0MsTUFBUSxNQUV4Q2YsTUFBTUcsSUFBU0gsTUFBTUcsRUFBS2EsTUFBTSxHQUFJLElBQ3BDUCxFQUFhUSxRQUFVakIsTUFBTUcsSUFBU0gsTUFBTUcsRUFBS2EsTUFBTSxHQUFJLElBQ3REVCxHQUE2Qix5QkFBckJBLEVBQUtXLFlBQ2xCVCxFQUFhUSxRQUFVLHFCQUNsQlYsR0FBNkIsZ0JBQXJCQSxFQUFLVyxZQUNsQlQsRUFBYVEsUUFBVSxrQkFDbEJWLEdBQTZCLG9DQUFyQkEsRUFBS1csWUFDbEJULEVBQWFRLFFBQVUsY0FDbEJWLEdBQTZCLGtCQUFyQkEsRUFBS1csWUFDbEJULEVBQWFRLFFBQVUsa0JBRXZCUixFQUFhUSxRQUFVLHdCQUN2QlIsRUFBYVEsUUFDYnBCLFNBQVNzQixZQUFZVixHQUVyQlosU0FBU3NCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmVzZW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVzZW5jZSA9IG5ldyBQcmVzZW5jZSh7IGNsaWVudElkOiBcIjY1MzE1NjM2MjU0ODgwNTY1MlwiIH0pLCBwYWdlcyA9IHtcbiAgICBcIi9kb2NzXCI6IFwiRG9jdW1lbnRpb25cIixcbiAgICBcIi9sb2dpblwiOiBcIkxvZ2luIFBhZ2VcIixcbn07XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSwgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS13cmFwcGVyID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2LnBhbmVsLWhlYWRpbmdcIiksIHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0EvQXBlcnR1cmVCb3QvYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICB9O1xuICAgIGlmIChwYWdlc1twYWdlXSB8fCBwYWdlc1twYWdlLnNsaWNlKDAsIC0xKV0pXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gcGFnZXNbcGFnZV0gfHwgcGFnZXNbcGFnZS5zbGljZSgwLCAtMSldO1xuICAgIGVsc2UgaWYgKGhlYWQgJiYgaGVhZC50ZXh0Q29udGVudCA9PT0gXCJDb25maWd1cmF0aW9uIEVkaXRvclwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiQ29uZmlndXJhdGlvbiBQYWdlXCI7XG4gICAgZWxzZSBpZiAoaGVhZCAmJiBoZWFkLnRleHRDb250ZW50ID09PSBcIkluZnJhY3Rpb25zXCIpXG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJJbmZyYWN0aW9uIExpc3RcIjtcbiAgICBlbHNlIGlmIChoZWFkICYmIGhlYWQudGV4dENvbnRlbnQgPT09IFwiR3VpbGQgV2Vla2x5IE1lc3NhZ2UgVGhyb3VnaHB1dFwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiR3VpbGQgU3RhdHNcIjtcbiAgICBlbHNlIGlmIChoZWFkICYmIGhlYWQudGV4dENvbnRlbnQgPT09IFwiIEd1aWxkIEJhbm5lclwiKVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiR3VpbGQgSW5mbyBQYWdlXCI7XG4gICAgZWxzZVxuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVhZCB0byBEb2N1bWVudGF0aW9uXCI7XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZGQlFWRXNSVUZCUlN4dlFrRkJiMElzUlVGQlJTeERRVUZETEVWQlEyaEZMRXRCUVVzc1IwRkJPRUk3U1VGRGJFTXNUMEZCVHl4RlFVRkZMR0ZCUVdFN1NVRkRkRUlzVVVGQlVTeEZRVUZGTEZsQlFWazdRMEZEZEVJc1EwRkJRenRCUVVWSUxGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRXRCUVVzc1NVRkJTU3hGUVVGRk8wbEJRM0JETEUxQlFVMHNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVU4wUXl4SlFVRkpMRWRCUVcxQ0xGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlF6VkRMREpFUVVFeVJDeERRVU16UkN4RlFVTkVMRmxCUVZrc1IwRkJhVUk3VVVGRE5VSXNZVUZCWVN4RlFVTmFMR3RGUVVGclJUdFJRVU51UlN4alFVRmpMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRE8wdEJRemRETEVOQlFVTTdTVUZGU0N4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6TkVMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEV0QlFVc3NjMEpCUVhOQ08xRkJRek5FTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTTdVMEZEZUVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NTMEZCU3l4aFFVRmhPMUZCUTJ4RUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03VTBGRGNrTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUzBGQlN5eHBRMEZCYVVNN1VVRkRkRVVzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4aFFVRmhMRU5CUVVNN1UwRkRha01zU1VGQlNTeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1MwRkJTeXhsUVVGbE8xRkJRM0JFTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdPMUZCUTNKRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkVUpCUVhWQ0xFTkJRVU03U1VGRmNFUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJwYWdlcyIsIm9uIiwiYXN5bmMiLCJwYWdlIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic3RhcnRUaW1lc3RhbXAiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93Iiwic2xpY2UiLCJkZXRhaWxzIiwidGV4dENvbnRlbnQiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;