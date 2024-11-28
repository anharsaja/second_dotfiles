chrome.storage.local.get(['staticrules'], (result0) => {
    chrome.storage.local.get(['exceptions'], (result) => {

    //if (enabledRulesets.includes("ruleset_1") || enabledRulesets.includes("ruleset_2")) 
    if(result0.staticrules != "disabled")
    {
      console.log(`enabled.`); //partial or complete adblocking enabled -> use css based adblocking as well!
      //check if manually disabled;
      var hostname = window.location.hostname;
      
        if(result.exceptions == null || result.exceptions == undefined || result.exceptions == "" || result.exceptions == [])
        {
          //exceptions list empty: blocking enabled on all websites
          document.body.setAttribute("bl-ext-enbld-hai-k-na", "T");
        }
        else if(hostname && result.exceptions.includes(hostname))
        {
            //included in list of exceptions: ad blocking disabled, don't trigger css adblocking mech.
            //trackin();
        }
        else
        {
            //not there in the list of exceptions -> adblocking enabled
            document.body.setAttribute("bl-ext-enbld-hai-k-na", "T");           
        }  
    } 
    else 
    {
      //=== disabled for sure
      console.log(`disabled.`); //adblocking disabled totally -> dont do spotify adblocking
      //trackin();
    }
}); 
}); 