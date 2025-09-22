IF(
  Contact.npo02__AverageAmount__c = 0,
  "",
  IF(
    OCR_Opportunity.Amount >= (3 * Contact.npo02__AverageAmount__c),
    "3x+ Average Gift",
    IF(
      OCR_Opportunity.Amount >= (2 * Contact.npo02__AverageAmount__c),
      "2x Average Gift",
      ""
    )
  )
)