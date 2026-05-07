IF(
  RecordType.Name = "Merchandise Sales", "Merch",
  IF(
    ISBLANK(UTM_Medium__c),
    "Untracked",
    CASE(
      UTM_Medium__c,
      "cpc", "Google",
      "email", "Email",
      "paid", "Meta",
      "paid-social", "Meta",
      "Untracked"
    )
  )
)