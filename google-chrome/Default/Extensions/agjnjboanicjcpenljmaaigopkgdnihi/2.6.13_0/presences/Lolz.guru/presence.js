var __webpack_exports__={};const presence=new Presence({clientId:"935242142106914869"}),browsingTimestamp=Math.floor(Date.now()/1e3);function pathIncludes(e){return document.location.pathname.toLowerCase().includes(e)}async function getStrings(){return presence.getStrings({readingThread:"general.readingThread",reading:"general.reading",viewProfileButton:"general.buttonViewProfile",viewProfile:"general.viewProfile",search:"general.searchSomething",terms:"general.terms",dm:"general.readingDM",viewPage:"general.viewPage",viewHome:"general.viewHome"},await presence.getSetting("lang").catch((()=>"en")))}let strings,oldLang=null;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/L/Lolz.guru/assets/logo.jpg"},t=await presence.getSetting("lang").catch((()=>"en"));switch(oldLang===t&&strings||(oldLang=t,strings=await getStrings()),!0){case pathIncludes("/threads"):case pathIncludes("/threads")||pathIncludes("/guarantor")||pathIncludes("/service")||pathIncludes("/antipublic"):e.details=(await strings).readingThread,e.state=document.querySelector("#content > div > div > div.titleBar > h1")?.textContent,e.buttons=[{label:"Open",url:document.location.href}],e.startTimestamp=browsingTimestamp;break;case pathIncludes("/search"):e.details=(await strings).search;break;case pathIncludes("/rules")||pathIncludes("/help"):e.details=(await strings).reading,e.state=(await strings).terms,e.startTimestamp=browsingTimestamp;break;case pathIncludes("/conversations"):e.details=`${(await strings).dm} ${document.querySelector("#Conversations > div.conversationViewContainer.ImView > div.ImViewContent > div > div.ImDialogHeader > div.membersAndActions > div.fl_l.conversationRecipient > a > span").textContent}`,e.startTimestamp=browsingTimestamp;break;default:e.details=(await strings).viewHome,e.startTimestamp=browsingTimestamp}document.querySelector("#page_info_wrap > div.page_top > h1")?.textContent&&(e.details=(await strings).viewProfile,e.state=document.querySelector("#page_info_wrap > div.page_top > h1").textContent,e.buttons=[{label:(await strings).viewProfileButton,url:document.location.href}],e.startTimestamp=browsingTimestamp),pathIncludes("/reports")||pathIncludes("/search")||!document.querySelector("#content > div > div > div > div > div.titleBar > h1")?.textContent||(e.details=`${(await strings).viewPage} ${document.querySelector("#content > div > div > div > div > div.titleBar > h1")?.textContent}`,e.startTimestamp=browsingTimestamp),e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELFNBQVNDLGFBQWFDLEdBQ2xCLE9BQU9DLFNBQVNDLFNBQVNDLFNBQVNDLGNBQWNDLFNBQVNMLEVBQzdELENBQ0FNLGVBQWVDLGFBQ1gsT0FBT2hCLFNBQVNnQixXQUFXLENBQ3ZCQyxjQUFlLHdCQUNmQyxRQUFTLGtCQUNUQyxrQkFBbUIsNEJBQ25CQyxZQUFhLHNCQUNiQyxPQUFRLDBCQUNSQyxNQUFPLGdCQUNQQyxHQUFJLG9CQUNKQyxTQUFVLG1CQUNWQyxTQUFVLDBCQUNMekIsU0FBUzBCLFdBQVcsUUFBUUMsT0FBTSxJQUFNLE9BQ3JELENBQ0EsSUFBSUMsUUFBU0MsUUFBVSxLQUN2QjdCLFNBQVM4QixHQUFHLGNBQWNmLFVBQ3RCLE1BQU1nQixFQUFlLENBQ2pCQyxjQUFlLGtFQUNoQkMsUUFBZ0JqQyxTQUFTMEIsV0FBVyxRQUFRQyxPQUFNLElBQU0sT0FLM0QsT0FKSUUsVUFBWUksR0FBWUwsVUFDeEJDLFFBQVVJLEVBQ1ZMLGNBQWdCWixlQUVaLEdBQ0osS0FBS1IsYUFBYSxZQVdsQixLQUFLQSxhQUFhLGFBQ2RBLGFBQWEsZUFDYkEsYUFBYSxhQUNiQSxhQUFhLGVBQ2J1QixFQUFhRyxlQUFpQk4sU0FBU1gsY0FDdkNjLEVBQWFJLE1BQVF6QixTQUFTMEIsY0FBYyw2Q0FBNkNDLFlBQ3pGTixFQUFhTyxRQUFVLENBQ25CLENBQ0lDLE1BQU8sT0FDUEMsSUFBSzlCLFNBQVNDLFNBQVM4QixPQUcvQlYsRUFBYVcsZUFBaUJ2QyxrQkFDOUIsTUFDSixLQUFLSyxhQUFhLFdBQ2R1QixFQUFhRyxlQUFpQk4sU0FBU1AsT0FDdkMsTUFDSixLQUFLYixhQUFhLFdBQWFBLGFBQWEsU0FDeEN1QixFQUFhRyxlQUFpQk4sU0FBU1YsUUFDdkNhLEVBQWFJLGFBQWVQLFNBQVNOLE1BQ3JDUyxFQUFhVyxlQUFpQnZDLGtCQUM5QixNQUNKLEtBQUtLLGFBQWEsa0JBQ2R1QixFQUFhRyxRQUFVLFVBQVVOLFNBQVNMLE1BQU1iLFNBQVMwQixjQUFjLDRLQUE0S0MsY0FDblBOLEVBQWFXLGVBQWlCdkMsa0JBQzlCLE1BQ0osUUFDSTRCLEVBQWFHLGVBQWlCTixTQUFTSCxTQUN2Q00sRUFBYVcsZUFBaUJ2QyxrQkFHbENPLFNBQVMwQixjQUFjLHdDQUF3Q0MsY0FDL0ROLEVBQWFHLGVBQWlCTixTQUFTUixZQUN2Q1csRUFBYUksTUFBUXpCLFNBQVMwQixjQUFjLHVDQUF1Q0MsWUFDbkZOLEVBQWFPLFFBQVUsQ0FDbkIsQ0FDSUMsYUFBY1gsU0FBU1Qsa0JBQ3ZCcUIsSUFBSzlCLFNBQVNDLFNBQVM4QixPQUcvQlYsRUFBYVcsZUFBaUJ2QyxtQkFFN0JLLGFBQWEsYUFDYkEsYUFBYSxhQUNkRSxTQUFTMEIsY0FBYyx5REFBeURDLGNBQ2hGTixFQUFhRyxRQUFVLFVBQVVOLFNBQVNKLFlBQVlkLFNBQVMwQixjQUFjLHlEQUF5REMsY0FDdElOLEVBQWFXLGVBQWlCdkMsbUJBRTlCNEIsRUFBYUcsUUFDYmxDLFNBQVMyQyxZQUFZWixHQUVyQi9CLFNBQVMyQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHJlc2VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlc2VuY2UgPSBuZXcgUHJlc2VuY2Uoe1xuICAgIGNsaWVudElkOiBcIjkzNTI0MjE0MjEwNjkxNDg2OVwiLFxufSksIGJyb3dzaW5nVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5mdW5jdGlvbiBwYXRoSW5jbHVkZXMoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc3RyaW5nKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHByZXNlbmNlLmdldFN0cmluZ3Moe1xuICAgICAgICByZWFkaW5nVGhyZWFkOiBcImdlbmVyYWwucmVhZGluZ1RocmVhZFwiLFxuICAgICAgICByZWFkaW5nOiBcImdlbmVyYWwucmVhZGluZ1wiLFxuICAgICAgICB2aWV3UHJvZmlsZUJ1dHRvbjogXCJnZW5lcmFsLmJ1dHRvblZpZXdQcm9maWxlXCIsXG4gICAgICAgIHZpZXdQcm9maWxlOiBcImdlbmVyYWwudmlld1Byb2ZpbGVcIixcbiAgICAgICAgc2VhcmNoOiBcImdlbmVyYWwuc2VhcmNoU29tZXRoaW5nXCIsXG4gICAgICAgIHRlcm1zOiBcImdlbmVyYWwudGVybXNcIixcbiAgICAgICAgZG06IFwiZ2VuZXJhbC5yZWFkaW5nRE1cIixcbiAgICAgICAgdmlld1BhZ2U6IFwiZ2VuZXJhbC52aWV3UGFnZVwiLFxuICAgICAgICB2aWV3SG9tZTogXCJnZW5lcmFsLnZpZXdIb21lXCIsXG4gICAgfSwgYXdhaXQgcHJlc2VuY2UuZ2V0U2V0dGluZyhcImxhbmdcIikuY2F0Y2goKCkgPT4gXCJlblwiKSk7XG59XG5sZXQgc3RyaW5ncywgb2xkTGFuZyA9IG51bGw7XG5wcmVzZW5jZS5vbihcIlVwZGF0ZURhdGFcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNlbmNlRGF0YSA9IHtcbiAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJodHRwczovL2Nkbi5yY2QuZ2cvUHJlTWlEL3dlYnNpdGVzL0wvTG9sei5ndXJ1L2Fzc2V0cy9sb2dvLmpwZ1wiLFxuICAgIH0sIG5ld0xhbmcgPSBhd2FpdCBwcmVzZW5jZS5nZXRTZXR0aW5nKFwibGFuZ1wiKS5jYXRjaCgoKSA9PiBcImVuXCIpO1xuICAgIGlmIChvbGRMYW5nICE9PSBuZXdMYW5nIHx8ICFzdHJpbmdzKSB7XG4gICAgICAgIG9sZExhbmcgPSBuZXdMYW5nO1xuICAgICAgICBzdHJpbmdzID0gYXdhaXQgZ2V0U3RyaW5ncygpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBwYXRoSW5jbHVkZXMoXCIvdGhyZWFkc1wiKTpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gKGF3YWl0IHN0cmluZ3MpLnJlYWRpbmdUaHJlYWQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQgPiBkaXYgPiBkaXYgPiBkaXYudGl0bGVCYXIgPiBoMVwiKT8udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9wZW5cIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXRoSW5jbHVkZXMoXCIvdGhyZWFkc1wiKSB8fFxuICAgICAgICAgICAgcGF0aEluY2x1ZGVzKFwiL2d1YXJhbnRvclwiKSB8fFxuICAgICAgICAgICAgcGF0aEluY2x1ZGVzKFwiL3NlcnZpY2VcIikgfHxcbiAgICAgICAgICAgIHBhdGhJbmNsdWRlcyhcIi9hbnRpcHVibGljXCIpOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSAoYXdhaXQgc3RyaW5ncykucmVhZGluZ1RocmVhZDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGRpdiA+IGRpdiA+IGRpdi50aXRsZUJhciA+IGgxXCIpPy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3BlblwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBhdGhJbmNsdWRlcyhcIi9zZWFyY2hcIik6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IChhd2FpdCBzdHJpbmdzKS5zZWFyY2g7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXRoSW5jbHVkZXMoXCIvcnVsZXNcIikgfHwgcGF0aEluY2x1ZGVzKFwiL2hlbHBcIik6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IChhd2FpdCBzdHJpbmdzKS5yZWFkaW5nO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXRlID0gKGF3YWl0IHN0cmluZ3MpLnRlcm1zO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXRoSW5jbHVkZXMoXCIvY29udmVyc2F0aW9uc1wiKTpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7KGF3YWl0IHN0cmluZ3MpLmRtfSAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQ29udmVyc2F0aW9ucyA+IGRpdi5jb252ZXJzYXRpb25WaWV3Q29udGFpbmVyLkltVmlldyA+IGRpdi5JbVZpZXdDb250ZW50ID4gZGl2ID4gZGl2LkltRGlhbG9nSGVhZGVyID4gZGl2Lm1lbWJlcnNBbmRBY3Rpb25zID4gZGl2LmZsX2wuY29udmVyc2F0aW9uUmVjaXBpZW50ID4gYSA+IHNwYW5cIikudGV4dENvbnRlbnR9YDtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IChhd2FpdCBzdHJpbmdzKS52aWV3SG9tZTtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5zdGFydFRpbWVzdGFtcCA9IGJyb3dzaW5nVGltZXN0YW1wO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VfaW5mb193cmFwID4gZGl2LnBhZ2VfdG9wID4gaDFcIik/LnRleHRDb250ZW50KSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gKGF3YWl0IHN0cmluZ3MpLnZpZXdQcm9maWxlO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VfaW5mb193cmFwID4gZGl2LnBhZ2VfdG9wID4gaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAoYXdhaXQgc3RyaW5ncykudmlld1Byb2ZpbGVCdXR0b24sXG4gICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wID0gYnJvd3NpbmdUaW1lc3RhbXA7XG4gICAgfVxuICAgIGlmICghcGF0aEluY2x1ZGVzKFwiL3JlcG9ydHNcIikgJiZcbiAgICAgICAgIXBhdGhJbmNsdWRlcyhcIi9zZWFyY2hcIikgJiZcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2LnRpdGxlQmFyID4gaDFcIik/LnRleHRDb250ZW50KSB7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gYCR7KGF3YWl0IHN0cmluZ3MpLnZpZXdQYWdlfSAke2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudCA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdi50aXRsZUJhciA+IGgxXCIpPy50ZXh0Q29udGVudH1gO1xuICAgICAgICBwcmVzZW5jZURhdGEuc3RhcnRUaW1lc3RhbXAgPSBicm93c2luZ1RpbWVzdGFtcDtcbiAgICB9XG4gICAgaWYgKHByZXNlbmNlRGF0YS5kZXRhaWxzKVxuICAgICAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xuICAgIGVsc2VcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKbGMyVnVZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SndjbVZ6Wlc1alpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dEpRVU0xUWl4UlFVRlJMRVZCUVVVc2IwSkJRVzlDTzBOQlF6bENMRU5CUVVNc1JVRkRSaXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVWdVJDeFRRVUZUTEZsQlFWa3NRMEZCUXl4TlFVRmpPMGxCUTI1RExFOUJRVThzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTJ4RkxFTkJRVU03UVVGRlJDeExRVUZMTEZWQlFWVXNWVUZCVlR0SlFVTjRRaXhQUVVGUExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlEzcENPMUZCUTBNc1lVRkJZU3hGUVVGRkxIVkNRVUYxUWp0UlFVTjBReXhQUVVGUExFVkJRVVVzYVVKQlFXbENPMUZCUXpGQ0xHbENRVUZwUWl4RlFVRkZMREpDUVVFeVFqdFJRVU01UXl4WFFVRlhMRVZCUVVVc2NVSkJRWEZDTzFGQlEyeERMRTFCUVUwc1JVRkJSU3g1UWtGQmVVSTdVVUZEYWtNc1MwRkJTeXhGUVVGRkxHVkJRV1U3VVVGRGRFSXNSVUZCUlN4RlFVRkZMRzFDUVVGdFFqdFJRVU4yUWl4UlFVRlJMRVZCUVVVc2EwSkJRV3RDTzFGQlF6VkNMRkZCUVZFc1JVRkJSU3hyUWtGQmEwSTdTMEZETlVJc1JVRkRSQ3hOUVVGTkxGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFWTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVTXpSQ3hEUVVGRE8wRkJRMGdzUTBGQlF6dEJRVVZFTEVsQlFVa3NUMEZCSzBNc1JVRkRiRVFzVDBGQlR5eEhRVUZYTEVsQlFVa3NRMEZCUXp0QlFVVjRRaXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHRKUVVOd1F5eE5RVUZOTEZsQlFWa3NSMEZCYVVJN1VVRkRha01zWVVGQllTeEZRVU5hTEdkRlFVRm5SVHRMUVVOcVJTeEZRVU5FTEU5QlFVOHNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVk1zVFVGQlRTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlJYWkZMRWxCUVVrc1QwRkJUeXhMUVVGTExFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0UlFVTndReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzFGQlEyeENMRTlCUVU4c1IwRkJSeXhOUVVGTkxGVkJRVlVzUlVGQlJTeERRVUZETzB0QlF6ZENPMGxCUlVRc1VVRkJVU3hKUVVGSkxFVkJRVVU3VVVGRFlpeExRVUZMTEZsQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNN1dVRkROVUlzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRTFCUVUwc1QwRkJUeXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETzFsQlEzSkVMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZETVVNc01FTkJRVEJETEVOQlF6RkRMRVZCUVVVc1YwRkJWeXhEUVVGRE8xbEJRMllzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNTMEZCU3l4RlFVRkZMRTFCUVUwN2IwSkJRMklzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTVHRwUWtGRE0wSTdZVUZEUkN4RFFVRkRPMWxCUTBZc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRaUVVOb1JDeE5RVUZOTzFGQlJWQXNTMEZCU3l4WlFVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xbEJRelZDTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNN1dVRkRNVUlzV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXp0WlFVTjRRaXhaUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETzFsQlF6TkNMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eE5RVUZOTEU5QlFVOHNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJRenRaUVVOeVJDeFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRekZETERCRFFVRXdReXhEUVVNeFF5eEZRVUZGTEZkQlFWY3NRMEZCUXp0WlFVTm1MRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WjBKQlEzUkNPMjlDUVVORExFdEJRVXNzUlVGQlJTeE5RVUZOTzI5Q1FVTmlMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVazdhVUpCUXpOQ08yRkJRMFFzUTBGQlF6dFpRVU5HTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdXVUZEYUVRc1RVRkJUVHRSUVVOUUxFdEJRVXNzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTXpRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNUVUZCVFN4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRE9VTXNUVUZCVFR0UlFVTlFMRXRCUVVzc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1dVRkRia1FzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRTFCUVUwc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETzFsQlF5OURMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eE5RVUZOTEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRaUVVNelF5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFsQlEyaEVMRTFCUVUwN1VVRkRVQ3hMUVVGTExGbEJRVmtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJRenRaUVVOc1F5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZETTBNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNNRXRCUVRCTExFTkJRekZMTEVOQlFVTXNWMEZEU0N4RlFVRkZMRU5CUVVNN1dVRkRTQ3haUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8xbEJRMmhFTEUxQlFVMDdVVUZEVUR0WlFVTkRMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eE5RVUZOTEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVOb1JDeFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzFsQlEyaEVMRTFCUVUwN1MwRkRVRHRKUVVORUxFbEJRME1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4eFEwRkJjVU1zUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZEZWtVN1VVRkRSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNUVUZCVFN4UFFVRlBMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGJrUXNXVUZCV1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVU14UXl4eFEwRkJjVU1zUTBGRGNrTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRaQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzFsQlEzUkNPMmRDUVVORExFdEJRVXNzUlVGQlJTeERRVUZETEUxQlFVMHNUMEZCVHl4RFFVRkRMRU5CUVVNc2FVSkJRV2xDTzJkQ1FVTjRReXhIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpPMkZCUXpOQ08xTkJRMFFzUTBGQlF6dFJRVU5HTEZsQlFWa3NRMEZCUXl4alFVRmpMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdTMEZEYUVRN1NVRkRSQ3hKUVVORExFTkJRVU1zV1VGQldTeERRVUZETEZWQlFWVXNRMEZCUXp0UlFVTjZRaXhEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEZUVJc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGRGNrSXNjMFJCUVhORUxFTkJRM1JFTEVWQlFVVXNWMEZCVnl4RlFVTmlPMUZCUTBRc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFbEJRMnBFTEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUTNKQ0xITkVRVUZ6UkN4RFFVTjBSQ3hGUVVGRkxGZEJRMG9zUlVGQlJTeERRVUZETzFGQlEwZ3NXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0TFFVTm9SRHRKUVVORUxFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVODdVVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZET3p0UlFVTjRSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU1pZlE9PSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJwYXRoSW5jbHVkZXMiLCJzdHJpbmciLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiYXN5bmMiLCJnZXRTdHJpbmdzIiwicmVhZGluZ1RocmVhZCIsInJlYWRpbmciLCJ2aWV3UHJvZmlsZUJ1dHRvbiIsInZpZXdQcm9maWxlIiwic2VhcmNoIiwidGVybXMiLCJkbSIsInZpZXdQYWdlIiwidmlld0hvbWUiLCJnZXRTZXR0aW5nIiwiY2F0Y2giLCJzdHJpbmdzIiwib2xkTGFuZyIsIm9uIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsIm5ld0xhbmciLCJkZXRhaWxzIiwic3RhdGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJidXR0b25zIiwibGFiZWwiLCJ1cmwiLCJocmVmIiwic3RhcnRUaW1lc3RhbXAiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;