IF(
  Contact.npo02__AverageAmount__c = 0,
  "",
  IF(
    Contact.npo02__LastOppAmount__c >= (3 * Contact.npo02__AverageAmount__c),
    "3x+ Average Gift",
    IF(
      Contact.npo02__LastOppAmount__c >= (2 * Contact.npo02__AverageAmount__c),
      "2x Average Gift",
      ""
    )
  )
)