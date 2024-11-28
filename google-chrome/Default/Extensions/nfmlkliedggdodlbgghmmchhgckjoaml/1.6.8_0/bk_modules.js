function opensp() 
{
    chrome.tabs.create({
      url: "https://open.spotify.com/",
      selected: true,
    });
};
//open spotify

function onins(details)
{
  if (details.reason === 'install') 
  {
    var exceptions = [];

    //exceptions.push(chrome.runtime.id);
    //exceptions.push('us-central1-blockify-analytics.cloudfunctions.net');
    exceptions.push('getblockify.com');
    exceptions.push('cdn.getblockify.com');
    exceptions.push('insights.getblockify.com');
    //exceptions.push('youtube.com');
    exceptions.push('www.youtube.com');

    chrome.storage.local.set({ 'exceptions': exceptions }, () => { //save
      updateRuleset(exceptions); //final api, core action
    });
    //save exceptions at install

    //var url = "https://docs.google.com/forms/d/e/1FAIpQLSfDRdS5-QxUv2_rUA_R5Xuu6F4Imm6KXwEV41L7ZPkAswJDrg/viewform";
    var url = "https://getblockify.com/feedback/";
    //"https://chrome.google.com/webstore/detail/"+chrome.runtime.id+"/support"
    chrome.runtime.setUninstallURL(url); //fallback! unintall url

    opensp();//open spotify for permissions update
    //openwelcome(); //welcome the user
    //registerScriptIfNeeded2();
  }
  else if(details.reason === "update")
  {
    reverse_update(); //imp, manifest can update true/false status
    //157 to 164: valid
    //163 to 164: valid

    //updated, delete later
    chrome.storage.local.get(['exceptions'], (result) => {
      if(result.exceptions == null || result.exceptions == undefined || result.exceptions == "") // 157 to 164
      {
        var exceptions = [];

        //exceptions.push(chrome.runtime.id);
        //exceptions.push('us-central1-blockify-analytics.cloudfunctions.net');
        exceptions.push('getblockify.com');
        exceptions.push('cdn.getblockify.com');
        exceptions.push('insights.getblockify.com');
        //exceptions.push('youtube.com');
        exceptions.push('www.youtube.com');

        chrome.storage.local.set({ 'exceptions': exceptions }, () => { //save
          updateRuleset(exceptions); //final api, core action
        });
      }
      else
      {
        //163 to 164
        var exceptions = result.exceptions;
        if(!exceptions.includes('getblockify.com'))
        {
          exceptions.push('getblockify.com');
        }
        if(!exceptions.includes('cdn.getblockify.com'))
        {
          exceptions.push('cdn.getblockify.com');
        }
        if(!exceptions.includes('insights.getblockify.com'))
        {
          exceptions.push('insights.getblockify.com');
        }
        /*
        if(!exceptions.includes('youtube.com'))
        {
          exceptions = exceptions.filter(element => element !== 'youtube.com');
          //exceptions.push('youtube.com');
        }
        if(!exceptions.includes('www.youtube.com'))
        {
          exceptions.push('www.youtube.com');
        }
        */
       
        chrome.storage.local.set({ 'exceptions': exceptions }, () => { //save
          updateRuleset(exceptions); //final api, core action
        });
      }


      var url = "https://getblockify.com/feedback/"; //remove / delete this later!
      chrome.runtime.setUninstallURL(url); //remove / delete this later!
  
    });

    //openwelcome(); //delete later! neeeded for now
    //registerScriptIfNeeded2();
    //async registery
    //157 to 164: valid
    //163 to 164: valid

   
   // chrome.permissions.contains({
     // origins: ["*://*/*"]
   /*  }, function(result) 
    {
      if (result) 
      {
        // Permission is already granted
        // Do something here, e.g., execute code that requires the permission
      } 
      else 
      {
        // Permission is not granted, prompt the user
        opensp();//open spotify
        //157 to 164: required for permission
        //163 to 164: required for some users (if)
      }
    });
    */
  } //update
};

/*
var newRules = a.flatMap((id, index) => [
		{
    }
  ]
*/
function updateRuleset(exceptions) {
  console.log('Updating ruleset with exceptions:', exceptions);
  // Use a base ID that is hopefully distinct to avoid collisions.
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
      "condition": { "urlFilter": `|*://${host}/*`, "resourceTypes": ["main_frame", "sub_frame"] }
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
      });
  });
};

function reverse_update() 
{
  //manifest may replace false setting to true
  //vice versa is still fine, true > true
  //but for other case, we need to reverse that change
  chrome.storage.local.get(['staticrules'], (result0) => {
    if(result0.staticrules === "disabled")
    {
      //disabled by user manually
      //update the DNR accordingly (disable it)
       chrome.declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: ["ruleset_1", "ruleset_2"]
        });
    }

    /*
    chrome.storage.local.get(['exceptions'], (result) => {
      console.log(result.exceptions);

      if(result.exceptions != null && result.exceptions != undefined && result.exceptions != "" && result.exceptions.includes("open.spotify.com"))
      {
        //spotify in list of exceptions
        //adblocking disabled cz gen enabled
        chrome.declarativeNetRequest.updateEnabledRulesets({
          disableRulesetIds: ["ruleset_3"]
          });
      }
    });
    */

  });
};

// function registerScriptIfNeeded2() {
 //   var contentScript = {
   //     id: 'contentSCR',
   //     matches: ["*://*/*"],
 /*       js: ['css.js'],
        persistAcrossSessions: true,
        runAt: 'document_idle'
    };
    
    chrome.scripting.getRegisteredContentScripts((scripts) => {
        console.log("Currently registered scripts:", scripts); // Log all registered scripts for debugging
        // Check if the script with given ID is already registered
        var isAlreadyRegistered = scripts.some(script => script.id === contentScript.id);

        if (!isAlreadyRegistered) 
        {
            // Register the content script if it is not already registered
            chrome.scripting.registerContentScripts([contentScript], () => {
                if (chrome.runtime.lastError) {
                    console.log(chrome.runtime.lastError);
                } else {
                    console.log('Content script registered successfully');
                }
            });
        } 
        else 
        {
            console.log('Content script is already registered.');
        }
    });
};
*/
function openwelcome() 
{
  /*
  chrome.tabs.create({
    url: chrome.runtime.getURL("welcome/welcome.html"),
    selected: true,
  });*/
};

function kbshortcut(command) 
{
  console.log(command);
  if (command === "open_spotify") 
  {
    opensp();//open spotify
  }
};

//registerScriptIfNeeded2();