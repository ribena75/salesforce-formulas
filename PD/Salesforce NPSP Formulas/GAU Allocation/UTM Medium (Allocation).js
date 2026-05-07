IF(
   npsp__Opportunity__r.RecordTypeId = "012P60000012lGnIAI", "Merch",
  IF(
    ISBLANK(npsp__Opportunity__r.UTM_Medium__c),
    "Untracked",
    CASE(
       npsp__Opportunity__r.UTM_Medium__c,
      "cpc", "Grant",
      "email", "Email",
      "paid", "Ads",
      "paid-social", "Ads",
      "Untracked"
    )
  )
)