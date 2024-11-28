//fetch, update FE > listen > iterate > update BE, update FE

if (document.readyState === 'complete')
{
    pageloaded();
}
else
{
    window.addEventListener("load", pageloaded);
}

function pageloaded() 
{
        document.getElementById("version").innerHTML = "v" + chrome.runtime.getManifest().version;
        updateFE(); //update fe

        //listen/events
        document.getElementById("all_sites").addEventListener("click", togg_all); //BE+FE
        document.getElementById("specific_site").addEventListener("click", togg_site);
        document.getElementById("spotify").addEventListener("click", togg_spotify);
        //post_hog();
};

function togg_spotify() 
{
    togg_site("spotify");
    /*
    FE_last();
    notify();*/
};

async function post_hog()
{
    try 
    {
        //posthog.init('phc_UODIWhWQFLuBJ6sGTleJ4n8wUMgsAB8RZkKHJeYqjro',{api_host:'https://app.posthog.com',persistence:'localStorage'});
         
        // chrome.permissions.contains({
        //    origins: ["*://*/*"]
       /*   }, function(result) 
          {
            if (result) 
            {
              // Permission is already granted
              // Do something here, e.g., execute code that requires the permission
              posthog.capture('allo_permission', "granted");
            } 
            else 
            {
              // Permission is not granted, prompt the user
              posthog.capture('allo_permission', "not_granted");
            }
          });   
          */ 
    } 
    catch (error) 
    {
        console.log(error);     
    }
};

function isValidURL(str) 
{
    if((str.indexOf("http://") === 0 || str.indexOf("https://") === 0) && str.indexOf(".") != -1)
    {
        return true;
    }
    else
    {
        return false;
    }
};

async function togg_site(argu) 
{
    /*
    var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    var url = new URL(tab.url);
    var hostname = url.hostname;
    */

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) 
    {
    var activeTab = tabs[0];
    console.log(activeTab);

    if((argu == null || argu == undefined) && (activeTab.url == null || activeTab.url == undefined || activeTab.url == "" || !isValidURL(activeTab.url)))
    //if( activeTab.url == null || activeTab.url == undefined || activeTab.url == "" || !isValidURL(activeTab.url) )
    {
        alert("Ad-blocking not supported on this URL");
        FE_last();
        return;
    }

    var url = new URL(activeTab.url);
    var hostname = url.hostname; //window.location.hostname

    if(argu && argu == "spotify")
    {
        hostname = 'open.spotify.com';
    }

    var exceptions = [];

    chrome.storage.local.get(['exceptions'], (result) => {

        if(result.exceptions == null || result.exceptions == undefined || result.exceptions == "")
        {
            exceptions = [];  
        }
        else
        {
            exceptions= result.exceptions;
        }

        if(hostname && exceptions.includes(hostname))
        {
            //included in exceptions
            //remove
            exceptions = exceptions.filter(host => host !== hostname);
            /*
            if(hostname == 'open.spotify.com')
            {
                //removed from exceptions list
                //now it is NOT an exception to exclude from the adblocking injection
                //enabled
                chrome.declarativeNetRequest.updateEnabledRulesets({
                    enableRulesetIds: ["ruleset_3"]
                    });
            }
            */
        }
        else if(hostname && !exceptions.includes(hostname))
        {
            //not included, not there in exceptions
            //add
            exceptions.push(hostname);
            /*
            if(hostname == 'open.spotify.com')
            {
                //now a part of exceptions
                //excluded from general adblocking, as an exception
                //disabled
                chrome.declarativeNetRequest.updateEnabledRulesets({
                    disableRulesetIds: ["ruleset_3"]
                    });
            }
            */
        }
        else
        {
            //hostname not valid, avoid
            //alert("URL not supported");
            alert("Ad-blocking not supported on this URL");
            FE_last();
            return;
        }

        chrome.storage.local.set({ 'exceptions': exceptions }, () => { //save
            if(hostname && hostname == 'open.spotify.com')
            {
                updateRuleset(exceptions, "SP"); //final api, core action (spotify)
            }
            else
            {
                updateRuleset(exceptions, "NSP"); //final api, core action (not spotify)
            }

            FE_last();
        });
        //updateFE(); //FE
        
      });  
    });  
};
/*
function updateRuleset(exceptions) 
{
    var rules = exceptions.map((host, index) => ({
      "id": index + 1,
      "priority": 1000,
      "action": { "type": "allowAllRequests" },
      "condition": { "urlFilter": `||${host}/*`, "resourceTypes": ["main_frame"] }
    }));
  
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: rules.map(rule => rule.id),
      addRules: rules
    });
};
*/
function updateRuleset(exceptions, o) {
    console.log('Updating ruleset with exceptions:', exceptions);

    // Use a base ID that is hopefully distinct to avoid collisions.
    
    /*
    var newRules = exceptions.map((host, index) => ({
        "id": baseId + index,
        "priority": 1000,
        "action": { "type": "allowAllRequests" },
        "condition": { "urlFilter": `||${host}/*`, "resourceTypes": ["main_frame", "sub_frame"] }
    }));*/

    /*
    var baseId = 0;  
    var newRules = exceptions.flatMap((host, index) => [
        {
          "id": baseId + (index * 2) + 1,
          "priority": 10000000,
          "action": { "type": "allowAllRequests" },
          "condition": { "urlFilter": `||${host}/*`, "resourceTypes": ["main_frame", "sub_frame"] }
        },
        {
          "id": baseId + (index * 2) + 2,
          "priority": 10000000,
          "action": { "type": "allowAllRequests" },
          "condition": { "urlFilter": `${host}/*`, "resourceTypes": ["main_frame", "sub_frame"] }
        }
      ]);
      */
     
      var baseId = 1;  
      var newRules = exceptions.map((host, index) => ({
      "id": baseId + index,
      "priority": 10000000,
      "action": { "type": "allowAllRequests" },
      "condition": { "urlFilter": `||${host}*`, "resourceTypes": ["main_frame", "sub_frame"] }
      }));

    console.log('New rules prepared:');
    console.log(newRules);

    // Fetch current rules to remove
    chrome.declarativeNetRequest.getDynamicRules(currentRules => {
        var existingIds = currentRules.map(rule => rule.id);
        console.log('Existing rule IDs:', existingIds);

        chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: existingIds
        }, () => {
            chrome.declarativeNetRequest.updateDynamicRules({
                addRules: newRules
            });

            var manualRule = 
            [
              {
                "id": 100000,
                "priority": 1000,
                "action": { "type": "allowAllRequests" },
                "condition": {
                  "urlFilter": `chrome-extension://${chrome.runtime.id}/*`,
                  "resourceTypes": [
                    "main_frame",
                    "sub_frame"
                  ]
                }
              }
            ];
            chrome.declarativeNetRequest.updateDynamicRules({
              addRules: manualRule
            });

            if (chrome.runtime.lastError) {
                console.error('Failed to update rules:', chrome.runtime.lastError);
            } else {
                console.log('Rules updated successfully');
            }

            notify(o);
        });
    });
};

function sp() 
{
    document.getElementById("temp").innerHTML = "Please refresh the browser tab(s).";

    setTimeout(function(){
        document.getElementById("temp").innerHTML = "";
    }, 6000);  
};

function notify(o) 
{
if(o === "SP")
{
   sp();
}
else
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) 
    {
        var activeTab = tabs[0];
        console.log(activeTab);
        if(activeTab.pendingUrl == undefined || activeTab.pendingUrl == null)
        {
            chrome.tabs.reload(activeTab.id);
        }
        else
        {
            sp();
        }
    });
}
};

function togg_all() 
{
    //var fakevariable = 0;
    //all disabled = spotify disabled
    //all enabled = spotify enabled as well, update FE
    chrome.declarativeNetRequest.getEnabledRulesets((enabledRulesets) => {
        if (enabledRulesets.includes("ruleset_1") || enabledRulesets.includes("ruleset_2")) 
        {
          console.log(`enabled -> disable`); //partial or complete enabled
          chrome.declarativeNetRequest.updateEnabledRulesets({
            //disableRulesetIds: ["ruleset_1", "ruleset_2", "ruleset_3"],
            disableRulesetIds: ["ruleset_1", "ruleset_2"],
            enableRulesetIds: []
          }, () => {
            console.log('Rules have been enabled.');

            FE_last();
            notify();
            updateFE();
           
          });
          chrome.storage.local.set({ 'staticrules': "disabled" });
          //fakevariable = 1;
        } 
        else 
        {
            //both false, disabled -> enable
          console.log(`disabled -> enable`); //nothing active
          chrome.declarativeNetRequest.updateEnabledRulesets({
            //enableRulesetIds: ["ruleset_1", "ruleset_2", "ruleset_3"],
            enableRulesetIds: ["ruleset_1", "ruleset_2"],
            disableRulesetIds: []
          }, () => {
            console.log('Rules have been enabled.');

            FE_last();
            notify();
            updateFE();
            
          });
          chrome.storage.local.set({ 'staticrules': "enabled" });
          //fakevariable = 2;
        }
        //console.log(fakevariable);
        //updateFE(); //FE
      }); //BE
};

async function updateFE() 
{
    chrome.declarativeNetRequest.getEnabledRulesets((enabledRulesets) => {
      if (enabledRulesets.includes("ruleset_1") || enabledRulesets.includes("ruleset_2")) 
      {
        console.log(`enabled.`); //partial or complete
        document.getElementById("all_sites").checked = true;
      } 
      else 
      {
        console.log(`disabled.`); //no active
        document.getElementById("all_sites").checked = false;
      }
   

    //console.log(chrome.tabs.query({ active: true, currentWindow: true }));
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) 
    {
        var activeTab = tabs[0];
        console.log(activeTab);

        if(activeTab.url == null || activeTab.url == undefined || !isValidURL(activeTab.url))
        {
            document.body.setAttribute("unsupported_url", "true");
            //document.getElementById("spotify_cont").className = "none";
            onetime();
            return;
        }
        else
        {
            document.body.removeAttribute("unsupported_url");
            //document.getElementById("spotify_cont").className = "toggle-container";
        }

        var url = new URL(activeTab.url);
        var hostname = url.hostname;      
    /*
    var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    var url = new URL(tab.url);
    var hostname = url.hostname;
    */

    if(hostname == "open.spotify.com")
    {
        document.getElementById("spotify_cont").className = "none"; //prevent doubling
    }
    else
    {
        document.getElementById("spotify_cont").className = "toggle-container";
    }

    document.getElementById("website").innerHTML = hostname;

    chrome.storage.local.get(['exceptions'], (result) => {
        console.log(result.exceptions);

        if(result.exceptions == null || result.exceptions == undefined || result.exceptions == "")
        {
          //chrome.storage.local.set({ 'exceptions': [] });
          var exceptions = [];

          //exceptions.push(chrome.runtime.id);
          //exceptions.push('us-central1-blockify-analytics.cloudfunctions.net');
          exceptions.push('getblockify.com');
          exceptions.push('cdn.getblockify.com');
          exceptions.push('insights.getblockify.com');
          //exceptions.push('youtube.com');
          //exceptions.push('www.youtube.com');

          chrome.storage.local.set({ 'exceptions': exceptions }, () => { //save
            updateRuleset(exceptions, "NSP"); //final api, core action
          });

          //not there in exceptions: blocking enabled
          document.getElementById("specific_site").checked = true;
        }
        else if(hostname && result.exceptions.includes(hostname))
        {
            //included in exceptions: blocking disabled
            document.getElementById("specific_site").checked = false;
        }
        else
        {
            //not there in exceptions
            document.getElementById("specific_site").checked = true;
        }


        //seperate toggle for spotify
        if(result.exceptions && result.exceptions.includes("open.spotify.com"))
        {
            document.getElementById("spotify").checked = false;
        }
        else
        {
            document.getElementById("spotify").checked = true;
        }

        onetime();
    }); 

   });//fe1
  }); //fe2
};

function onetime() 
{
    FE_last();       
    if(document.getElementById("noremove"))
    {
        document.getElementById("noremove").remove();
    }
};

function FE_last()
{
    if(document.getElementById("all_sites").checked == false)
    {
        document.body.setAttribute("all_sites", "false");
    }
    else
    {
        document.body.setAttribute("all_sites", "true");
    }
};