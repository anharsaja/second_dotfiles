chrome.runtime.onInstalled.addListener(onins);
chrome.commands.onCommand.addListener(kbshortcut);
//chrome.runtime.onStartup.addListener(registerScriptIfNeeded2);

chrome.runtime.onMessage.addListener((request, sender) => 
{
    if (request.muteTab) 
    {
      chrome.tabs.update(sender.tab.id, {muted: true});
    }
    else if (request.Unmute) 
    {
      chrome.tabs.update(sender.tab.id, {muted: false});
    }
    else if (request.what == "insertCSS")
    {
         const tabId = sender?.tab?.id ?? false;
         const frameId = sender?.frameId ?? false;
         if ( tabId === false || frameId === false ) { return; }
         chrome.scripting.insertCSS({
             css: request.css,
             origin: 'USER',
             target: { tabId, frameIds: [ frameId ] },
         }).catch(reason => {
             console.log(reason);
         });
         return false;
     }
     else if (request.what == "update_dnr")
     {
      chrome.declarativeNetRequest.getSessionRules(currentRules => {
        var existingIds = currentRules.map(rule => rule.id);
        console.log('Existing rules getting removed:', currentRules);
        

        chrome.declarativeNetRequest.updateSessionRules({
            removeRuleIds: existingIds
        }, () => {

          chrome.declarativeNetRequest.updateSessionRules({
            addRules: request.newRules
          });
          console.log('New rules getting added:', request.newRules);
          
            if (chrome.runtime.lastError) {
                console.error('Failed to update rules:', chrome.runtime.lastError);
            } else {
                console.log('Rules updated successfully');
            }
        });
      });
     }

    return true;
});