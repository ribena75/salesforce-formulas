IF(
  RecordType.Name = "Merchandise Sales", "merch",
  IF(
    ISBLANK(UTM_Medium__c),
    "untracked",
    CASE(
      UTM_Medium__c,
      "cpc", "grant",
      "email", "email",
      "paid", "ads",
      "paid-social", "ads",
      "untracked"
    )
  )
)