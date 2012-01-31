class Google
###
google.load "search", "2"
google.setOnLoadCallback ->
  google.search.CustomSearchControl.attachAutoCompletion(
    "partner-pub-5734536664385414:5yoeu8-m6ic",
    document.getElementById("q"),
    "cse-search-box"
  )


google_ad_client = "pub-5734536664385414"
google_ad_slot = "8941976442"
google_ad_width = 120
google_ad_height = 90


_gaq = _gaq or []
_gaq.push [ "_setAccount", "UA-16547346-1" ]
_gaq.push [ "_trackPageview" ]
do ->
  ga = document.createElement("script")
  ga.type = "text/javascript"
  ga.async = true
  ga.src = (if "https:" == document.location.protocol then "https://ssl" else "http://www") + ".google-analytics.com/ga.js"
  s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore ga, s
###
