IF(
  ISBLANK(UTM_Source__c),
  "Untracked",
  CASE(
    UTM_Source__c,
    "2022 Summer Appeal Segment", "Untracked",
    "Event: 2022 & Beyond", "Untracked",
    "Facebook", "Social",
    "fb", "Social",
    "flows", "Untracked",
    "Global Audience", "Public (All)",
    "Global+Audience", "Public (All)",
    "google", "Grant",
    "ig", "Social",
    "IRAC Newsletter", "Untracked",
    "Paid", "Grant",
    "PD Flyer", "Community",
    "Peace1", "Untracked",
    "Peace2", "Untracked",
    "Public (All)", "Public (All)",
    "Q3 RG Upgrade 2024 - TEMP", "Untracked",
    "Ukraine1", "Social",
    "Ukraine2", "Social",
    "website", "Organic",
    "Untracked"
  )
)