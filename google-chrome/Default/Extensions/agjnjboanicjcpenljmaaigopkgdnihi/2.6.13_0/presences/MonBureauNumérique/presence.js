var __webpack_exports__={};const presence=new Presence({clientId:"1167431662636912650"});presence.on("UpdateData",(async()=>{const e={largeImageKey:"https://cdn.rcd.gg/PreMiD/websites/M/MonBureauNum%C3%A9rique/assets/logo.png"},a=new URLSearchParams(document.location.search),s=a.get("ACTION");if("moodle"===document.location.hostname.split(".")[1])e.details="Regarde un cours",e.largeImageKey="https://cdn.rcd.gg/PreMiD/websites/M/MonBureauNum%C3%A9rique/assets/0.png";else switch(document.location.pathname.split("/")[1]){case"sg.do":switch(document.location.hostname.split(".")[0]){case"www":e.details="Regarde la page d'accueil";break;case"cas":e.details="Entrain de se connecter...";break;default:switch(a.get("PROC")){case"MESSAGERIE":switch(s){case"LISTER_COMMUNICATION":e.details="Regarde ses mails";break;case"CONSULTER_COMMUNICATION":e.details="Regarde un mail"}break;case"PARAMETRAGE_GENERAL":e.details="Regarde ses paramètres";break;case"REGLES_FILTRAGE":e.details="Regarde ses règles de filtrage";break;case"CARNET_ADRESSE":e.details="Regarde son carnet d'adresse";break;case"PAGE_ACCUEIL":default:e.details="Regarde la page d'accueil";break;case"CLASSEUR_PEDA":switch(s){case"AFFICHER_ELEVES_ACCUEIL":e.details="Regarde son cahier de texte";break;case"AFFICHER_ELEVES_ACCUEIL_CLASSEUR":e.details="Regarde son classeur pédagogique"}break;case"CDT_AFFICHAGE":e.details="Regarde son emploi du temps";break;case"TRAVAIL_A_FAIRE":e.details="Regarde son cahier de texte";break;case"GESTION_ABSENCES_TUTEUR_ELEVE":e.details="Regarde ses absences";break;case"CONSULTER_RELEVE":switch(s){case"AFFICHER_RELEVE_NOTES_ELEVE":e.details="Regarde ses notes";break;case"AFFICHER_RELEVE_COMPETENCES_ELEVE":e.details="Regarde ses compétences"}break;case"CONSULTER_BULLETIN":e.details="Regarde ses bulletins";break;case"CDL":e.details="Regarde son carnet de liaison";break;case"AGENDAPERSO":e.details="Regarde son agenda personnel";break;case"PORTE_DOCUMENT":e.details="Regarde son porte document";break;case"GESTION_FAVORIS":e.details="Regarde ses favoris";break;case"FICHE_ELEVE":e.details="Regarde sa fiche élève";break;case"CONTENUS":e.details="Regarde ses contributions";break;case"MEDIACENTRE":e.details="Regarde le médiacentre"}}break;case"":e.details="Regarde la page d'accueil";break;case"classes":e.details="Regarde son espace de classe";break;default:e.details="Regarde une page d'actualité"}presence.setActivity(e)}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJtYXBwaW5ncyI6IjJCQUFBLE1BQU1BLFNBQVcsSUFBSUMsU0FBUyxDQUMxQkMsU0FBVSx3QkFFZEYsU0FBU0csR0FBRyxjQUFjQyxVQUN0QixNQUFNQyxFQUFlLENBQ2pCQyxjQUFlLGdGQUNoQkMsRUFBZSxJQUFJQyxnQkFBZ0JDLFNBQVNDLFNBQVNDLFFBQVNDLEVBQVNMLEVBQWFNLElBQUksVUFDM0YsR0FBaUQsV0FBN0NKLFNBQVNDLFNBQVNJLFNBQVNDLE1BQU0sS0FBSyxHQUN0Q1YsRUFBYVcsUUFBVSxtQkFDdkJYLEVBQWFDLGNBQ1QsaUZBR0osT0FBUUcsU0FBU0MsU0FBU08sU0FBU0YsTUFBTSxLQUFLLElBQzFDLElBQUssUUFDRCxPQUFRTixTQUFTQyxTQUFTSSxTQUFTQyxNQUFNLEtBQUssSUFDMUMsSUFBSyxNQUNEVixFQUFhVyxRQUFVLDRCQUN2QixNQUNKLElBQUssTUFDRFgsRUFBYVcsUUFBVSw2QkFDdkIsTUFDSixRQUNJLE9BQVFULEVBQWFNLElBQUksU0FDckIsSUFBSyxhQUNELE9BQVFELEdBQ0osSUFBSyx1QkFDRFAsRUFBYVcsUUFBVSxvQkFDdkIsTUFDSixJQUFLLDBCQUNEWCxFQUFhVyxRQUFVLGtCQUcvQixNQUNKLElBQUssc0JBQ0RYLEVBQWFXLFFBQVUseUJBQ3ZCLE1BQ0osSUFBSyxrQkFDRFgsRUFBYVcsUUFBVSxpQ0FDdkIsTUFDSixJQUFLLGlCQUNEWCxFQUFhVyxRQUFVLCtCQUN2QixNQUNKLElBQUssZUF3REwsUUFDSVgsRUFBYVcsUUFBVSxrQ0F0RDNCLElBQUssZ0JBQ0QsT0FBUUosR0FDSixJQUFLLDBCQUNEUCxFQUFhVyxRQUFVLDhCQUN2QixNQUNKLElBQUssbUNBQ0RYLEVBQWFXLFFBQVUsbUNBRy9CLE1BQ0osSUFBSyxnQkFDRFgsRUFBYVcsUUFBVSw4QkFDdkIsTUFDSixJQUFLLGtCQUNEWCxFQUFhVyxRQUFVLDhCQUN2QixNQUNKLElBQUssZ0NBQ0RYLEVBQWFXLFFBQVUsdUJBQ3ZCLE1BQ0osSUFBSyxtQkFDRCxPQUFRSixHQUNKLElBQUssOEJBQ0RQLEVBQWFXLFFBQVUsb0JBQ3ZCLE1BQ0osSUFBSyxvQ0FDRFgsRUFBYVcsUUFBVSwwQkFHL0IsTUFDSixJQUFLLHFCQUNEWCxFQUFhVyxRQUFVLHdCQUN2QixNQUNKLElBQUssTUFDRFgsRUFBYVcsUUFBVSxnQ0FDdkIsTUFDSixJQUFLLGNBQ0RYLEVBQWFXLFFBQVUsK0JBQ3ZCLE1BQ0osSUFBSyxpQkFDRFgsRUFBYVcsUUFBVSw2QkFDdkIsTUFDSixJQUFLLGtCQUNEWCxFQUFhVyxRQUFVLHNCQUN2QixNQUNKLElBQUssY0FDRFgsRUFBYVcsUUFBVSx5QkFDdkIsTUFDSixJQUFLLFdBQ0RYLEVBQWFXLFFBQVUsNEJBQ3ZCLE1BQ0osSUFBSyxjQUNEWCxFQUFhVyxRQUFVLDBCQU12QyxNQUNKLElBQUssR0FDRFgsRUFBYVcsUUFBVSw0QkFDdkIsTUFDSixJQUFLLFVBQ0RYLEVBQWFXLFFBQVUsK0JBQ3ZCLE1BQ0osUUFDSVgsRUFBYVcsUUFBVSwrQkFHbkNoQixTQUFTa0IsWUFBWWIsRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ByZXNlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXNlbmNlID0gbmV3IFByZXNlbmNlKHtcbiAgICBjbGllbnRJZDogXCIxMTY3NDMxNjYyNjM2OTEyNjUwXCIsXG59KTtcbnByZXNlbmNlLm9uKFwiVXBkYXRlRGF0YVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJlc2VuY2VEYXRhID0ge1xuICAgICAgICBsYXJnZUltYWdlS2V5OiBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTS9Nb25CdXJlYXVOdW0lQzMlQTlyaXF1ZS9hc3NldHMvbG9nby5wbmdcIixcbiAgICB9LCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCksIEFDVElPTiA9IHNlYXJjaFBhcmFtcy5nZXQoXCJBQ1RJT05cIik7XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KFwiLlwiKVsxXSA9PT0gXCJtb29kbGVcIikge1xuICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSB1biBjb3Vyc1wiO1xuICAgICAgICBwcmVzZW5jZURhdGEubGFyZ2VJbWFnZUtleSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vY2RuLnJjZC5nZy9QcmVNaUQvd2Vic2l0ZXMvTS9Nb25CdXJlYXVOdW0lQzMlQTlyaXF1ZS9hc3NldHMvMC5wbmdcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKSB7XG4gICAgICAgICAgICBjYXNlIFwic2cuZG9cIjpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwid3d3XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBsYSBwYWdlIGQnYWNjdWVpbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjYXNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJFbnRyYWluIGRlIHNlIGNvbm5lY3Rlci4uLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlYXJjaFBhcmFtcy5nZXQoXCJQUk9DXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1FU1NBR0VSSUVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChBQ1RJT04pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJMSVNURVJfQ09NTVVOSUNBVElPTlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIHNlcyBtYWlsc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNPTlNVTFRFUl9DT01NVU5JQ0FUSU9OXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlZ2FyZGUgdW4gbWFpbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJQQVJBTUVUUkFHRV9HRU5FUkFMXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIHNlcyBwYXJhbcOodHJlc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUkVHTEVTX0ZJTFRSQUdFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIHNlcyByw6hnbGVzIGRlIGZpbHRyYWdlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDQVJORVRfQURSRVNTRVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBzb24gY2FybmV0IGQnYWRyZXNzZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUEFHRV9BQ0NVRUlMXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIGxhIHBhZ2UgZCdhY2N1ZWlsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDTEFTU0VVUl9QRURBXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoQUNUSU9OKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQUZGSUNIRVJfRUxFVkVTX0FDQ1VFSUxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBzb24gY2FoaWVyIGRlIHRleHRlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQUZGSUNIRVJfRUxFVkVTX0FDQ1VFSUxfQ0xBU1NFVVJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBzb24gY2xhc3NldXIgcMOpZGFnb2dpcXVlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNEVF9BRkZJQ0hBR0VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlZ2FyZGUgc29uIGVtcGxvaSBkdSB0ZW1wc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVFJBVkFJTF9BX0ZBSVJFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIHNvbiBjYWhpZXIgZGUgdGV4dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdFU1RJT05fQUJTRU5DRVNfVFVURVVSX0VMRVZFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIHNlcyBhYnNlbmNlc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ09OU1VMVEVSX1JFTEVWRVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKEFDVElPTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFGRklDSEVSX1JFTEVWRV9OT1RFU19FTEVWRVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIHNlcyBub3Rlc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFGRklDSEVSX1JFTEVWRV9DT01QRVRFTkNFU19FTEVWRVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIHNlcyBjb21ww6l0ZW5jZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ09OU1VMVEVSX0JVTExFVElOXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIHNlcyBidWxsZXRpbnNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNETFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBzb24gY2FybmV0IGRlIGxpYWlzb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFHRU5EQVBFUlNPXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIHNvbiBhZ2VuZGEgcGVyc29ubmVsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJQT1JURV9ET0NVTUVOVFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBzb24gcG9ydGUgZG9jdW1lbnRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdFU1RJT05fRkFWT1JJU1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBzZXMgZmF2b3Jpc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRklDSEVfRUxFVkVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlZ2FyZGUgc2EgZmljaGUgw6lsw6h2ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ09OVEVOVVNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VuY2VEYXRhLmRldGFpbHMgPSBcIlJlZ2FyZGUgc2VzIGNvbnRyaWJ1dGlvbnNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1FRElBQ0VOVFJFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlRGF0YS5kZXRhaWxzID0gXCJSZWdhcmRlIGxlIG3DqWRpYWNlbnRyZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBsYSBwYWdlIGQnYWNjdWVpbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBsYSBwYWdlIGQnYWNjdWVpbFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNsYXNzZXNcIjpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSBzb24gZXNwYWNlIGRlIGNsYXNzZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcmVzZW5jZURhdGEuZGV0YWlscyA9IFwiUmVnYXJkZSB1bmUgcGFnZSBkJ2FjdHVhbGl0w6lcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmVzZW5jZS5zZXRBY3Rpdml0eShwcmVzZW5jZURhdGEpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEpsYzJWdVkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKd2NtVnpaVzVqWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzY1VKQlFYRkNPME5CUXk5Q0xFTkJRVU1zUTBGQlF6dEJRVVZJTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlEzQkRMRTFCUVUwc1dVRkJXU3hIUVVGcFFqdFJRVU5xUXl4aFFVRmhMRVZCUTFvc09FVkJRVGhGTzB0QlF5OUZMRVZCUTBRc1dVRkJXU3hIUVVGSExFbEJRVWtzWlVGQlpTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRelZFTEUxQlFVMHNSMEZCUnl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlJYSkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVTXhSQ3haUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8xRkJRekZETEZsQlFWa3NRMEZCUXl4aFFVRmhPMWxCUTNwQ0xESkZRVUV5UlN4RFFVRkRPMHRCUXpkRk8xTkJRVTA3VVVGRFRpeFJRVUZSTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRaUVVOcVJDeExRVUZMTEU5QlFVODdaMEpCUTFnc1VVRkJVU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTJwRUxFdEJRVXNzUzBGQlN6dDNRa0ZEVkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExESkNRVUV5UWl4RFFVRkRPM2RDUVVOdVJDeE5RVUZOTzI5Q1FVTlFMRXRCUVVzc1MwRkJTenQzUWtGRFZDeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMRFJDUVVFMFFpeERRVUZETzNkQ1FVTndSQ3hOUVVGTk8yOUNRVU5RTzNkQ1FVTkRMRkZCUVZFc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlRzMFFrRkRha01zUzBGQlN5eFpRVUZaTzJkRFFVTm9RaXhSUVVGUkxFMUJRVTBzUlVGQlJUdHZRMEZEWml4TFFVRkxMSE5DUVVGelFqdDNRMEZETVVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eHRRa0ZCYlVJc1EwRkJRenQzUTBGRE0wTXNUVUZCVFR0dlEwRkRVQ3hMUVVGTExIbENRVUY1UWp0M1EwRkROMElzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dDNRMEZEZWtNc1RVRkJUVHRwUTBGRFVEdG5RMEZEUkN4TlFVRk5PelJDUVVOUUxFdEJRVXNzY1VKQlFYRkNPMmREUVVONlFpeFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzJkRFFVTm9SQ3hOUVVGTk96UkNRVU5RTEV0QlFVc3NhVUpCUVdsQ08yZERRVU55UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExHZERRVUZuUXl4RFFVRkRPMmREUVVONFJDeE5RVUZOT3pSQ1FVTlFMRXRCUVVzc1owSkJRV2RDTzJkRFFVTndRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERoQ1FVRTRRaXhEUVVGRE8yZERRVU4wUkN4TlFVRk5PelJDUVVOUUxFdEJRVXNzWTBGQll6dG5RMEZEYkVJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5d3lRa0ZCTWtJc1EwRkJRenRuUTBGRGJrUXNUVUZCVFRzMFFrRkRVQ3hMUVVGTExHVkJRV1U3WjBOQlEyNUNMRkZCUVZFc1RVRkJUU3hGUVVGRk8yOURRVU5tTEV0QlFVc3NlVUpCUVhsQ08zZERRVU0zUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEWkNRVUUyUWl4RFFVRkRPM2REUVVOeVJDeE5RVUZOTzI5RFFVTlFMRXRCUVVzc2EwTkJRV3RETzNkRFFVTjBReXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0RFFVRnJReXhEUVVGRE8zZERRVU14UkN4TlFVRk5PMmxEUVVOUU8yZERRVU5FTEUxQlFVMDdORUpCUTFBc1MwRkJTeXhsUVVGbE8yZERRVU51UWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEWkNRVUUyUWl4RFFVRkRPMmREUVVOeVJDeE5RVUZOT3pSQ1FVTlFMRXRCUVVzc2FVSkJRV2xDTzJkRFFVTnlRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITERaQ1FVRTJRaXhEUVVGRE8yZERRVU55UkN4TlFVRk5PelJDUVVOUUxFdEJRVXNzSzBKQlFTdENPMmREUVVOdVF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4SFFVRkhMSE5DUVVGelFpeERRVUZETzJkRFFVTTVReXhOUVVGTk96UkNRVU5RTEV0QlFVc3NhMEpCUVd0Q08yZERRVU4wUWl4UlFVRlJMRTFCUVUwc1JVRkJSVHR2UTBGRFppeExRVUZMTERaQ1FVRTJRanQzUTBGRGFrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXh0UWtGQmJVSXNRMEZCUXp0M1EwRkRNME1zVFVGQlRUdHZRMEZEVUN4TFFVRkxMRzFEUVVGdFF6dDNRMEZEZGtNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJRenQzUTBGRGFrUXNUVUZCVFR0cFEwRkRVRHRuUTBGRFJDeE5RVUZOT3pSQ1FVTlFMRXRCUVVzc2IwSkJRVzlDTzJkRFFVTjRRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8yZERRVU12UXl4TlFVRk5PelJDUVVOUUxFdEJRVXNzUzBGQlN6dG5RMEZEVkN4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExDdENRVUVyUWl4RFFVRkRPMmREUVVOMlJDeE5RVUZOT3pSQ1FVTlFMRXRCUVVzc1lVRkJZVHRuUTBGRGFrSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1IwRkJSeXc0UWtGQk9FSXNRMEZCUXp0blEwRkRkRVFzVFVGQlRUczBRa0ZEVUN4TFFVRkxMR2RDUVVGblFqdG5RMEZEY0VJc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5dzBRa0ZCTkVJc1EwRkJRenRuUTBGRGNFUXNUVUZCVFRzMFFrRkRVQ3hMUVVGTExHbENRVUZwUWp0blEwRkRja0lzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl4eFFrRkJjVUlzUTBGQlF6dG5RMEZETjBNc1RVRkJUVHMwUWtGRFVDeExRVUZMTEdGQlFXRTdaME5CUTJwQ0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU03WjBOQlEyaEVMRTFCUVUwN05FSkJRMUFzUzBGQlN5eFZRVUZWTzJkRFFVTmtMRmxCUVZrc1EwRkJReXhQUVVGUExFZEJRVWNzTWtKQlFUSkNMRU5CUVVNN1owTkJRMjVFTEUxQlFVMDdORUpCUTFBc1MwRkJTeXhoUVVGaE8yZERRVU5xUWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMmREUVVOb1JDeE5RVUZOT3pSQ1FVTlFPMmREUVVORExGbEJRVmtzUTBGQlF5eFBRVUZQTEVkQlFVY3NNa0pCUVRKQ0xFTkJRVU03ZVVKQlEzQkVPMmxDUVVOR08yZENRVU5FTEUxQlFVMDdXVUZEVUN4TFFVRkxMRVZCUVVVN1owSkJRMDRzV1VGQldTeERRVUZETEU5QlFVOHNSMEZCUnl3eVFrRkJNa0lzUTBGQlF6dG5Ra0ZEYmtRc1RVRkJUVHRaUVVOUUxFdEJRVXNzVTBGQlV6dG5Ra0ZEWWl4WlFVRlpMRU5CUVVNc1QwRkJUeXhIUVVGSExEaENRVUU0UWl4RFFVRkRPMmRDUVVOMFJDeE5RVUZOTzFsQlExQTdaMEpCUTBNc1dVRkJXU3hEUVVGRExFOUJRVThzUjBGQlJ5dzRRa0ZCT0VJc1EwRkJRenRUUVVOMlJEdExRVU5FTzBsQlJVUXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU53UXl4RFFVRkRMRU5CUVVNc1EwRkJReUo5Il0sIm5hbWVzIjpbInByZXNlbmNlIiwiUHJlc2VuY2UiLCJjbGllbnRJZCIsIm9uIiwiYXN5bmMiLCJwcmVzZW5jZURhdGEiLCJsYXJnZUltYWdlS2V5Iiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInNlYXJjaCIsIkFDVElPTiIsImdldCIsImhvc3RuYW1lIiwic3BsaXQiLCJkZXRhaWxzIiwicGF0aG5hbWUiLCJzZXRBY3Rpdml0eSJdLCJzb3VyY2VSb290IjoiIn0=
undefined;