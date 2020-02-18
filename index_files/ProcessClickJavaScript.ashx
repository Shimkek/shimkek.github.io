

        function getQueryStringValue(queryStringKey) 
        {
          url = window.location.search.substring(1);
          queryStrings = url.split("&");
          for (i = 0; i < queryStrings.length; i++) 
          {
            currentQueryString = queryStrings[i].split("=");
            if (currentQueryString[0] == queryStringKey)
              return currentQueryString[1];
          }
          return "";
        }

        var searchTerm = "";
        
        function getReferrerQueryStringValue(queryStringKey) 
        {
          url = document.referrer;
          queryStrings = url.split("&");
          for (i = 0; i < queryStrings.length; i++) 
          {
            currentQueryString = queryStrings[i].split("=");
            if (currentQueryString[0] == queryStringKey)
              return currentQueryString[1];
          }
          return "";
        }
        if ((searchTerm == undefined) || (searchTerm == ""))
          searchTerm = getReferrerQueryStringValue("q");
        if ((searchTerm == undefined) || (searchTerm == ""))
          searchTerm = getReferrerQueryStringValue("p");
        if ((searchTerm == undefined) || (searchTerm == ""))
          searchTerm = getReferrerQueryStringValue("contextKeywords");
        if ((searchTerm == undefined) || (searchTerm == ""))
          searchTerm = getReferrerQueryStringValue("terms");  //Populate search term
        if ((searchTerm == undefined) || (searchTerm == ""))
          searchTerm = getQueryStringValue("istSearchTerm");

        var clickRef = getQueryStringValue("istClickRef");

        if ((getQueryStringValue("istItemId") != "") || (getQueryStringValue("istTextAdId") != "") || (getQueryStringValue("istKeywordId") != ""))
        {
          var redirectUrl = "feedId=" + getQueryStringValue("istFeedId") + "&itemId=" + getQueryStringValue("istItemId") + "&bid=" + getQueryStringValue("istBid") + 
            "&textAdId=" + getQueryStringValue("istTextAdId") + "&keywordId=" + getQueryStringValue("istKeywordId") + 
            "&searchTerm=" + escape(searchTerm) + "&clickRef=" + escape(clickRef) + "&affiliateCompanyId=" + getQueryStringValue("istAffiliateCompanyId") + 
            "&contentTypeId=" + getQueryStringValue("istContentTypeId") + "&placementId=" + getQueryStringValue("istPlacementId") +
            "&referrerUrl=" + escape(document.referrer) + "&hostAddress=" + "2.133.227.82" + "&languages=" + escape(window.navigator.userLanguage) + 
            "&userAgent=" + escape(window.navigator.userAgent);

          var imageSource = '//www.ist-track.com/InternalProcessClick.ashx?uniqueUserId=7149cf61-f59f-4574-8dd6-037533c5158b&' + redirectUrl;
          if (document.body != undefined)
            {
              var img = document.createElement('img');
              img.src = imageSource;
              img.width = 1;
              img.height = 1;
              document.body.appendChild(img);
            }
        }
      