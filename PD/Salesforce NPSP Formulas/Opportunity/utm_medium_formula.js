IF(
  RecordType.Name = "Merchandise Sales", "merch",
  CASE(
    UTM_Medium__c,
    "cpc", "grant",
    "email", "email",
    "paid", "ads",
    "paid-social", "ads",
    "untracked"
  )
)