IF(
  ISBLANK(UTM_Source__c),
  "Untracked",
  CASE(
    UTM_Source__c,
    "2022 Summer Appeal Segment", "Untracked",
    "Event: 2022 & Beyond", "Untracked",
    "Facebook", "Ads",
    "fb", "Ads",
    "flows", "Untracked",
    "Global Audience", "Supporter List",
    "Global+Audience", "Supporter List",
    "google", "Grant",
    "ig", "Ads",
    "IRAC Newsletter", "Untracked",
    "Paid", "Grant",
    "PD Flyer", "Community",
    "Peace1", "Untracked",
    "Peace2", "Untracked",
    "Public (All)", "Supporter List",
    "Q3 RG Upgrade 2024 - TEMP", "Untracked",
    "Ukraine1", "Ads",
    "Ukraine2", "Ads",
    "website", "Organic",
    "Untracked"
  )
)