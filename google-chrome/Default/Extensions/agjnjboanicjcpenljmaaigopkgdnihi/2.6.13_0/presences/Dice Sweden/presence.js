var __webpack_exports__={};const presence=new Presence({clientId:"837754527217877003"}),browsingTimestamp=Math.floor(Date.now()/1e3);let articleTitle,articleDate,gameTitle,profileTitle,profileStatus;presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/D/Dice%20Sweden/assets/logo.png",startTimestamp:browsingTimestamp},t=await presence.getSetting("buttons"),s=await presence.getSetting("timestamps");switch(window.location.pathname){case"/":e.details="Home";break;case"/games":e.details="Games",e.buttons=[{label:"View Games",url:"https://www.dice.se/games"}];break;case"/life-at-dice":e.details="Life At Dice",e.buttons=[{label:"Life At Dice",url:"https://www.dice.se/life-at-dice"}];break;case"/our-values":e.details="Our Values",e.buttons=[{label:"Our Values",url:"https://www.dice.se/our-values"}];break;case"/how-we-work-how-we-play":e.details="How We Work",e.state="How We Play",e.buttons=[{label:"How We Work",url:"https://www.dice.se/how-we-work-how-we-play"},{label:"How We Play",url:"https://www.dice.se/how-we-work-how-we-play#how-we-play"}];break;case"/our-crafts":e.details="Our Crafts",e.buttons=[{label:"Our Crafts",url:"https://www.dice.se/our-crafts"}];break;case"/careers":e.details="Careers",e.buttons=[{label:"View Careers",url:"https://www.dice.se/careers"}];break;case"/perks-benefits":e.details="Perks & Benefits",e.buttons=[{label:"View Perks & Benefits",url:"https://www.dice.se/perks-benefits"}];break;case"/living-in-sweden":e.details="Living In Sweden",e.buttons=[{label:"Living In Sweden",url:"https://www.dice.se/living-in-sweden"}];break;case"/latest":e.details="Latest News",e.buttons=[{label:"Latest News",url:"https://www.dice.se/latest"}];break;case"/news-article":e.details="News",e.buttons=[{label:"News",url:"https://www.dice.se/news-articles"}];break;case"/contact":e.details="Contacts",e.buttons=[{label:"View Contacts",url:"https://www.dice.se/contact"}];break;case"/students":e.details="Students",e.buttons=[{label:"Students",url:"https://www.dice.se/students"}]}window.location.pathname.includes("/news-articles/")?(articleTitle=document.querySelector(".BlogItem-title").textContent.trim(),articleDate=document.querySelector(".BlogItem-meta > time").textContent.trim(),e.details=articleTitle,e.state=articleDate,delete e.buttons,e.buttons=[{label:"View Article",url:window.location.href}]):window.location.pathname.includes("/game/")?(gameTitle=document.querySelector(".BlogItem-title").textContent.trim(),e.details=gameTitle,e.buttons=[{label:`View ${gameTitle}`,url:window.location.href}]):window.location.pathname.includes("/people/")&&(profileTitle=document.querySelector(".BlogItem-title")?.textContent.trim(),profileStatus=document.querySelector(".sqs-row > div > div:nth-child(3) > div > p").textContent.trim()??document.querySelector(".sqs-row > div > div:nth-child(2) > div > p").textContent.trim(),e.details=profileTitle,e.state=profileStatus,delete e.buttons,e.buttons=[{label:`View ${profileTitle}`,url:window.location.href}]),!t&&e.buttons&&delete e.buttons,s||delete e.startTimestamp,e.details?presence.setActivity(e):presence.setActivity()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx1QkFDVkMsa0JBQW9CQyxLQUFLQyxNQUFNQyxLQUFLQyxNQUFRLEtBQ2hELElBQUlDLGFBQWNDLFlBQWFDLFVBQVdDLGFBQWNDLGNBQ3hEWixTQUFTYSxHQUFHLGNBQWNDLFVBQ3RCLE1BQU1DLEVBQWUsQ0FDakJDLGNBQWUscUVBQ2ZDLGVBQWdCZCxtQkFDakJlLFFBQW9CbEIsU0FBU21CLFdBQVcsV0FBWUMsUUFBdUJwQixTQUFTbUIsV0FBVyxjQUNsRyxPQUFRRSxPQUFPQyxTQUFTQyxVQUNwQixJQUFLLElBQ0RSLEVBQWFTLFFBQVUsT0FDdkIsTUFDSixJQUFLLFNBQ0RULEVBQWFTLFFBQVUsUUFDdkJULEVBQWFVLFFBQVUsQ0FDbkIsQ0FBRUMsTUFBTyxhQUFjQyxJQUFLLDhCQUVoQyxNQUNKLElBQUssZ0JBQ0RaLEVBQWFTLFFBQVUsZUFDdkJULEVBQWFVLFFBQVUsQ0FDbkIsQ0FBRUMsTUFBTyxlQUFnQkMsSUFBSyxxQ0FFbEMsTUFDSixJQUFLLGNBQ0RaLEVBQWFTLFFBQVUsYUFDdkJULEVBQWFVLFFBQVUsQ0FDbkIsQ0FBRUMsTUFBTyxhQUFjQyxJQUFLLG1DQUVoQyxNQUNKLElBQUssMkJBQ0RaLEVBQWFTLFFBQVUsY0FDdkJULEVBQWFhLE1BQVEsY0FDckJiLEVBQWFVLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxjQUNQQyxJQUFLLCtDQUVULENBQ0lELE1BQU8sY0FDUEMsSUFBSyw0REFHYixNQUNKLElBQUssY0FDRFosRUFBYVMsUUFBVSxhQUN2QlQsRUFBYVUsUUFBVSxDQUNuQixDQUFFQyxNQUFPLGFBQWNDLElBQUssbUNBRWhDLE1BQ0osSUFBSyxXQUNEWixFQUFhUyxRQUFVLFVBQ3ZCVCxFQUFhVSxRQUFVLENBQ25CLENBQUVDLE1BQU8sZUFBZ0JDLElBQUssZ0NBRWxDLE1BQ0osSUFBSyxrQkFDRFosRUFBYVMsUUFBVSxtQkFDdkJULEVBQWFVLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyx3QkFDUEMsSUFBSyx1Q0FHYixNQUNKLElBQUssb0JBQ0RaLEVBQWFTLFFBQVUsbUJBQ3ZCVCxFQUFhVSxRQUFVLENBQ25CLENBQ0lDLE1BQU8sbUJBQ1BDLElBQUsseUNBR2IsTUFDSixJQUFLLFVBQ0RaLEVBQWFTLFFBQVUsY0FDdkJULEVBQWFVLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxjQUNQQyxJQUFLLCtCQUdiLE1BQ0osSUFBSyxnQkFDRFosRUFBYVMsUUFBVSxPQUN2QlQsRUFBYVUsUUFBVSxDQUNuQixDQUNJQyxNQUFPLE9BQ1BDLElBQUssc0NBR2IsTUFDSixJQUFLLFdBQ0RaLEVBQWFTLFFBQVUsV0FDdkJULEVBQWFVLFFBQVUsQ0FDbkIsQ0FDSUMsTUFBTyxnQkFDUEMsSUFBSyxnQ0FHYixNQUNKLElBQUssWUFDRFosRUFBYVMsUUFBVSxXQUN2QlQsRUFBYVUsUUFBVSxDQUNuQixDQUNJQyxNQUFPLFdBQ1BDLElBQUssaUNBS2pCTixPQUFPQyxTQUFTQyxTQUFTTSxTQUFTLG9CQUNsQ3JCLGFBQWVzQixTQUFTQyxjQUFjLG1CQUFtQkMsWUFBWUMsT0FDckV4QixZQUFjcUIsU0FDVEMsY0FBYyx5QkFDZEMsWUFBWUMsT0FDakJsQixFQUFhUyxRQUFVaEIsYUFDdkJPLEVBQWFhLE1BQVFuQixtQkFDZE0sRUFBYVUsUUFDcEJWLEVBQWFVLFFBQVUsQ0FDbkIsQ0FBRUMsTUFBTyxlQUFnQkMsSUFBS04sT0FBT0MsU0FBU1ksUUFHN0NiLE9BQU9DLFNBQVNDLFNBQVNNLFNBQVMsV0FDdkNuQixVQUFZb0IsU0FBU0MsY0FBYyxtQkFBbUJDLFlBQVlDLE9BQ2xFbEIsRUFBYVMsUUFBVWQsVUFDdkJLLEVBQWFVLFFBQVUsQ0FDbkIsQ0FBRUMsTUFBTyxRQUFRaEIsWUFBYWlCLElBQUtOLE9BQU9DLFNBQVNZLFFBR2xEYixPQUFPQyxTQUFTQyxTQUFTTSxTQUFTLGNBQ3ZDbEIsYUFBZW1CLFNBQ1ZDLGNBQWMsb0JBQ2JDLFlBQVlDLE9BQ2xCckIsY0FDSWtCLFNBQ0tDLGNBQWMsK0NBQ2RDLFlBQVlDLFFBQ2JILFNBQ0tDLGNBQWMsK0NBQ2RDLFlBQVlDLE9BQ3pCbEIsRUFBYVMsUUFBVWIsYUFDdkJJLEVBQWFhLE1BQVFoQixxQkFDZEcsRUFBYVUsUUFDcEJWLEVBQWFVLFFBQVUsQ0FDbkIsQ0FBRUMsTUFBTyxRQUFRZixlQUFnQmdCLElBQUtOLE9BQU9DLFNBQVNZLFNBR3pEaEIsR0FBZUgsRUFBYVUsZ0JBQ3RCVixFQUFhVSxRQUNuQkwsVUFDTUwsRUFBYUUsZUFDcEJGLEVBQWFTLFFBQ2J4QixTQUFTbUMsWUFBWXBCLEdBRXJCZixTQUFTbUMsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCI4Mzc3NTQ1MjcyMTc4NzcwMDNcIixcbn0pLCBicm93c2luZ1RpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xubGV0IGFydGljbGVUaXRsZSwgYXJ0aWNsZURhdGUsIGdhbWVUaXRsZSwgcHJvZmlsZVRpdGxlLCBwcm9maWxlU3RhdHVzO1xucHJlc2VuY2Uub24oXCJVcGRhdGVEYXRhXCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcmVzZW5jZURhdGEgPSB7XG4gICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwiaHR0cHM6Ly9jZG4ucmNkLmdnL1ByZU1pRC93ZWJzaXRlcy9EL0RpY2UlMjBTd2VkZW4vYXNzZXRzL2xvZ28ucG5nXCIsXG4gICAgICAgIHN0YXJ0VGltZXN0YW1wOiBicm93c2luZ1RpbWVzdGFtcCxcbiAgICB9LCBzaG93QnV0dG9ucyA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJidXR0b25zXCIpLCBzaG93VGltZXN0YW1wcyA9IGF3YWl0IHByZXNlbmNlLmdldFNldHRpbmcoXCJ0aW1lc3RhbXBzXCIpO1xuICAgIHN3aXRjaCAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgIGNhc2UgXCIvXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiSG9tZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIvZ2FtZXNcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJHYW1lc1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCJWaWV3IEdhbWVzXCIsIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL2dhbWVzXCIgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIi9saWZlLWF0LWRpY2VcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJMaWZlIEF0IERpY2VcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiTGlmZSBBdCBEaWNlXCIsIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL2xpZmUtYXQtZGljZVwiIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIvb3VyLXZhbHVlc1wiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIk91ciBWYWx1ZXNcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwiT3VyIFZhbHVlc1wiLCB1cmw6IFwiaHR0cHM6Ly93d3cuZGljZS5zZS9vdXItdmFsdWVzXCIgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIi9ob3ctd2Utd29yay1ob3ctd2UtcGxheVwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkhvdyBXZSBXb3JrXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuc3RhdGUgPSBcIkhvdyBXZSBQbGF5XCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhvdyBXZSBXb3JrXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL2hvdy13ZS13b3JrLWhvdy13ZS1wbGF5XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhvdyBXZSBQbGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL2hvdy13ZS13b3JrLWhvdy13ZS1wbGF5I2hvdy13ZS1wbGF5XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIi9vdXItY3JhZnRzXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiT3VyIENyYWZ0c1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCJPdXIgQ3JhZnRzXCIsIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL291ci1jcmFmdHNcIiB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiL2NhcmVlcnNcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDYXJlZXJzXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIlZpZXcgQ2FyZWVyc1wiLCB1cmw6IFwiaHR0cHM6Ly93d3cuZGljZS5zZS9jYXJlZXJzXCIgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIi9wZXJrcy1iZW5lZml0c1wiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlBlcmtzICYgQmVuZWZpdHNcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlldyBQZXJrcyAmIEJlbmVmaXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL3BlcmtzLWJlbmVmaXRzXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIi9saXZpbmctaW4tc3dlZGVuXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTGl2aW5nIEluIFN3ZWRlblwiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJMaXZpbmcgSW4gU3dlZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL2xpdmluZy1pbi1zd2VkZW5cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiL2xhdGVzdFwiOlxuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIkxhdGVzdCBOZXdzXCI7XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxhdGVzdCBOZXdzXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL2xhdGVzdFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIvbmV3cy1hcnRpY2xlXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiTmV3c1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOZXdzXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL25ld3MtYXJ0aWNsZXNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiL2NvbnRhY3RcIjpcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJDb250YWN0c1wiO1xuICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaWV3IENvbnRhY3RzXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5kaWNlLnNlL2NvbnRhY3RcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiL3N0dWRlbnRzXCI6XG4gICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiU3R1ZGVudHNcIjtcbiAgICAgICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3R1ZGVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmRpY2Uuc2Uvc3R1ZGVudHNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL25ld3MtYXJ0aWNsZXMvXCIpKSB7XG4gICAgICAgIGFydGljbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQmxvZ0l0ZW0tdGl0bGVcIikudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICBhcnRpY2xlRGF0ZSA9IGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5CbG9nSXRlbS1tZXRhID4gdGltZVwiKVxuICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBhcnRpY2xlVGl0bGU7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IGFydGljbGVEYXRlO1xuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLmJ1dHRvbnM7XG4gICAgICAgIHByZXNlbmNlRGF0YS5idXR0b25zID0gW1xuICAgICAgICAgICAgeyBsYWJlbDogXCJWaWV3IEFydGljbGVcIiwgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZiB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCIvZ2FtZS9cIikpIHtcbiAgICAgICAgZ2FtZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5CbG9nSXRlbS10aXRsZVwiKS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gZ2FtZVRpdGxlO1xuICAgICAgICBwcmVzZW5jZURhdGEuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IGBWaWV3ICR7Z2FtZVRpdGxlfWAsIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiL3Blb3BsZS9cIikpIHtcbiAgICAgICAgcHJvZmlsZVRpdGxlID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLkJsb2dJdGVtLXRpdGxlXCIpXG4gICAgICAgICAgICA/LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgcHJvZmlsZVN0YXR1cyA9XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNxcy1yb3cgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDMpID4gZGl2ID4gcFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudC50cmltKCkgPz9cbiAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5zcXMtcm93ID4gZGl2ID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHBcIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBwcm9maWxlVGl0bGU7XG4gICAgICAgIHByZXNlbmNlRGF0YS5zdGF0ZSA9IHByb2ZpbGVTdGF0dXM7XG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuYnV0dG9ucztcbiAgICAgICAgcHJlc2VuY2VEYXRhLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICB7IGxhYmVsOiBgVmlldyAke3Byb2ZpbGVUaXRsZX1gLCB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmIH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGlmICghc2hvd0J1dHRvbnMgJiYgcHJlc2VuY2VEYXRhLmJ1dHRvbnMpXG4gICAgICAgIGRlbGV0ZSBwcmVzZW5jZURhdGEuYnV0dG9ucztcbiAgICBpZiAoIXNob3dUaW1lc3RhbXBzKVxuICAgICAgICBkZWxldGUgcHJlc2VuY2VEYXRhLnN0YXJ0VGltZXN0YW1wO1xuICAgIGlmIChwcmVzZW5jZURhdGEuZGV0YWlscylcbiAgICAgICAgcHJlc2VuY2Uuc2V0QWN0aXZpdHkocHJlc2VuY2VEYXRhKTtcbiAgICBlbHNlXG4gICAgICAgIHByZXNlbmNlLnNldEFjdGl2aXR5KCk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISmxjMlZ1WTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp3Y21WelpXNWpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJRenRKUVVNMVFpeFJRVUZSTEVWQlFVVXNiMEpCUVc5Q08wTkJRemxDTEVOQlFVTXNSVUZEUml4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVVnVSQ3hKUVVGSkxGbEJRVzlDTEVWQlEzWkNMRmRCUVcxQ0xFVkJRMjVDTEZOQlFXbENMRVZCUTJwQ0xGbEJRVzlDTEVWQlEzQkNMR0ZCUVhGQ0xFTkJRVU03UVVGRmRrSXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZEY0VNc1RVRkJUU3haUVVGWkxFZEJRV2xDTzFGQlEycERMR0ZCUVdFc1JVRkRXaXh2UlVGQmIwVTdVVUZEY2tVc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0TFFVTnFReXhGUVVORUxGZEJRVmNzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVZVc1UwRkJVeXhEUVVGRExFVkJRek5FTEdOQlFXTXNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVlVzV1VGQldTeERRVUZETEVOQlFVTTdTVUZGYmtVc1VVRkJVU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlR0UlFVTnFReXhMUVVGTExFZEJRVWM3V1VGRFVDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRenRaUVVNNVFpeE5RVUZOTzFGQlExQXNTMEZCU3l4UlFVRlJPMWxCUTFvc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdXVUZETDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dG5Ra0ZEZEVJc1JVRkJSU3hMUVVGTExFVkJRVVVzV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlN3eVFrRkJNa0lzUlVGQlJUdGhRVU42UkN4RFFVRkRPMWxCUTBZc1RVRkJUVHRSUVVOUUxFdEJRVXNzWlVGQlpUdFpRVU51UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHTkJRV01zUTBGQlF6dFpRVU4wUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8yZENRVU4wUWl4RlFVRkZMRXRCUVVzc1JVRkJSU3hqUVVGakxFVkJRVVVzUjBGQlJ5eEZRVUZGTEd0RFFVRnJReXhGUVVGRk8yRkJRMnhGTEVOQlFVTTdXVUZEUml4TlFVRk5PMUZCUTFBc1MwRkJTeXhoUVVGaE8xbEJRMnBDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1dVRkJXU3hEUVVGRE8xbEJRM0JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTEVWQlFVVXNTMEZCU3l4RlFVRkZMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVVzWjBOQlFXZERMRVZCUVVVN1lVRkRPVVFzUTBGQlF6dFpRVU5HTEUxQlFVMDdVVUZEVUN4TFFVRkxMREJDUVVFd1FqdFpRVU01UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHRkJRV0VzUTBGQlF6dFpRVU55UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhIUVVGSExHRkJRV0VzUTBGQlF6dFpRVVZ1UXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8yZENRVU4wUWp0dlFrRkRReXhMUVVGTExFVkJRVVVzWVVGQllUdHZRa0ZEY0VJc1IwRkJSeXhGUVVGRkxEWkRRVUUyUXp0cFFrRkRiRVE3WjBKQlEwUTdiMEpCUTBNc1MwRkJTeXhGUVVGRkxHRkJRV0U3YjBKQlEzQkNMRWRCUVVjc1JVRkJSU3g1UkVGQmVVUTdhVUpCUXpsRU8yRkJRMFFzUTBGQlF6dFpRVU5HTEUxQlFVMDdVVUZEVUN4TFFVRkxMR0ZCUVdFN1dVRkRha0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4WlFVRlpMRU5CUVVNN1dVRkRjRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUlzUlVGQlJTeExRVUZMTEVWQlFVVXNXVUZCV1N4RlFVRkZMRWRCUVVjc1JVRkJSU3huUTBGQlowTXNSVUZCUlR0aFFVTTVSQ3hEUVVGRE8xbEJRMFlzVFVGQlRUdFJRVU5RTEV0QlFVc3NWVUZCVlR0WlFVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzVTBGQlV5eERRVUZETzFsQlEycERMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWM3WjBKQlEzUkNMRVZCUVVVc1MwRkJTeXhGUVVGRkxHTkJRV01zUlVGQlJTeEhRVUZITEVWQlFVVXNOa0pCUVRaQ0xFVkJRVVU3WVVGRE4wUXNRMEZCUXp0WlFVTkdMRTFCUVUwN1VVRkRVQ3hMUVVGTExHbENRVUZwUWp0WlFVTnlRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xbEJRekZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3gxUWtGQmRVSTdiMEpCUXpsQ0xFZEJRVWNzUlVGQlJTeHZRMEZCYjBNN2FVSkJRM3BETzJGQlEwUXNRMEZCUXp0WlFVTkdMRTFCUVUwN1VVRkRVQ3hMUVVGTExHMUNRVUZ0UWp0WlFVTjJRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xbEJRekZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjN1owSkJRM1JDTzI5Q1FVTkRMRXRCUVVzc1JVRkJSU3hyUWtGQmEwSTdiMEpCUTNwQ0xFZEJRVWNzUlVGQlJTeHpRMEZCYzBNN2FVSkJRek5ETzJGQlEwUXNRMEZCUXp0WlFVTkdMRTFCUVUwN1VVRkRVQ3hMUVVGTExGTkJRVk03V1VGRFlpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMR0ZCUVdFc1EwRkJRenRaUVVOeVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMmRDUVVOMFFqdHZRa0ZEUXl4TFFVRkxMRVZCUVVVc1lVRkJZVHR2UWtGRGNFSXNSMEZCUnl4RlFVRkZMRFJDUVVFMFFqdHBRa0ZEYWtNN1lVRkRSQ3hEUVVGRE8xbEJRMFlzVFVGQlRUdFJRVU5RTEV0QlFVc3NaVUZCWlR0WlFVTnVRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXp0WlFVTTVRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzJkQ1FVTjBRanR2UWtGRFF5eExRVUZMTEVWQlFVVXNUVUZCVFR0dlFrRkRZaXhIUVVGSExFVkJRVVVzYlVOQlFXMURPMmxDUVVONFF6dGhRVU5FTEVOQlFVTTdXVUZEUml4TlFVRk5PMUZCUTFBc1MwRkJTeXhWUVVGVk8xbEJRMlFzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNN1dVRkRiRU1zV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnp0blFrRkRkRUk3YjBKQlEwTXNTMEZCU3l4RlFVRkZMR1ZCUVdVN2IwSkJRM1JDTEVkQlFVY3NSVUZCUlN3MlFrRkJOa0k3YVVKQlEyeERPMkZCUTBRc1EwRkJRenRaUVVOR0xFMUJRVTA3VVVGRFVDeExRVUZMTEZkQlFWYzdXVUZEWml4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExGVkJRVlVzUTBGQlF6dFpRVU5zUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSE8yZENRVU4wUWp0dlFrRkRReXhMUVVGTExFVkJRVVVzVlVGQlZUdHZRa0ZEYWtJc1IwRkJSeXhGUVVGRkxEaENRVUU0UWp0cFFrRkRia003WVVGRFJDeERRVUZETzFsQlEwWXNUVUZCVFR0TFFVTlFPMGxCUlVRc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNSVUZCUlR0UlFVTjZSQ3haUVVGWkxFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVNMVJTeFhRVUZYTEVkQlFVY3NVVUZCVVR0aFFVTndRaXhoUVVGaExFTkJRVU1zZFVKQlFYVkNMRU5CUVVNN1lVRkRkRU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUlhKQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NXVUZCV1N4RFFVRkRPMUZCUTNCRExGbEJRVmtzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUldwRExFOUJRVThzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXp0UlFVTTFRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITzFsQlEzUkNMRVZCUVVVc1MwRkJTeXhGUVVGRkxHTkJRV01zUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVU3VTBGRGNFUXNRMEZCUXp0TFFVTkdPMU5CUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3VVVGRGRrUXNVMEZCVXl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZGZWtVc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZGYWtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ6dFpRVU4wUWl4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxGTkJRVk1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJUdFRRVU42UkN4RFFVRkRPMHRCUTBZN1UwRkJUU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJUdFJRVU42UkN4WlFVRlpMRWRCUVVjc1VVRkJVVHRoUVVOeVFpeGhRVUZoTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03V1VGRGFrTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGRFSXNZVUZCWVR0WlFVTmFMRkZCUVZFN2FVSkJRMDRzWVVGQllTeERRVUZETERaRFFVRTJReXhEUVVGRE8ybENRVU0xUkN4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRk8yZENRVU53UWl4UlFVRlJPM0ZDUVVOT0xHRkJRV0VzUTBGQlF5dzJRMEZCTmtNc1EwRkJRenR4UWtGRE5VUXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJSWFJDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1dVRkJXU3hEUVVGRE8xRkJRM0JETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1lVRkJZU3hEUVVGRE8xRkJSVzVETEU5QlFVOHNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVNMVFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhPMWxCUTNSQ0xFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNXVUZCV1N4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZPMU5CUXpWRUxFTkJRVU03UzBGRFJqdEpRVVZFTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVTg3VVVGQlJTeFBRVUZQTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkZkRVVzU1VGQlNTeERRVUZETEdOQlFXTTdVVUZCUlN4UFFVRlBMRmxCUVZrc1EwRkJReXhqUVVGakxFTkJRVU03U1VGRmVFUXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUenRSUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN08xRkJRM2hFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXlKOSJdLCJuYW1lcyI6WyJwcmVzZW5jZSIsIlByZXNlbmNlIiwiY2xpZW50SWQiLCJicm93c2luZ1RpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJhcnRpY2xlVGl0bGUiLCJhcnRpY2xlRGF0ZSIsImdhbWVUaXRsZSIsInByb2ZpbGVUaXRsZSIsInByb2ZpbGVTdGF0dXMiLCJvbiIsImFzeW5jIiwicHJlc2VuY2VEYXRhIiwibGFyZ2VJbWFnZUtleSIsInN0YXJ0VGltZXN0YW1wIiwic2hvd0J1dHRvbnMiLCJnZXRTZXR0aW5nIiwic2hvd1RpbWVzdGFtcHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZGV0YWlscyIsImJ1dHRvbnMiLCJsYWJlbCIsInVybCIsInN0YXRlIiwiaW5jbHVkZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJocmVmIiwic2V0QWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9
undefined;