IF(
  RecordType.Name = "Merchandise Sales", "Merch",
  IF(
    ISBLANK(UTM_Medium__c),
    "Untracked",
    CASE(
      UTM_Medium__c,
      "cpc", "Grant",
      "email", "Email",
      "paid", "Ads",
      "paid-social", "Ads",
      "Untracked"
    )
  )
)