IF(
    SUM(npe03__Recurring_Donation__c.npe03__Paid_Amount__c) > 0,
    "Valid",
    "Invalid"
  )