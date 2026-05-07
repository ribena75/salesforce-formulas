IF(
  RecordType.Name = "Merchandise_Sales", "merch",
  CASE(
    UTM_Medium__c,
    "cpc", "grant",
    "email", "email",
    "paid", "ads",
    "paid-social", "ads",
    "untracked"
  )
)