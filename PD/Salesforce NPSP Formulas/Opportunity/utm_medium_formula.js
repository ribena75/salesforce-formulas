IF(
  RecordType.Name = "Merchandise_Sales", "merch",
  CASE(
    UTM_Source__c,
    "cpc", "grant",
    "email", "email",
    "paid", "ads",
    "paid-social", "ads",
    "untracked"
  )
)