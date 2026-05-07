IF(
   npsp__Opportunity__r.RecordTypeId = "012P60000012lGnIAI", "merch",
  IF(
    ISBLANK(npsp__Opportunity__r.UTM_Medium__c),
    "untracked",
    CASE(
       npsp__Opportunity__r.UTM_Medium__c,
      "cpc", "grant",
      "email", "email",
      "paid", "ads",
      "paid-social", "ads",
      "untracked"
    )
  )
)