IF(
  AND(
    npe03__Recurring_Donation__c.npe03__Paid_Amount__c = 0,
    TEXT(npe03__Recurring_Donation__c.npsp__Status__c) = "Closed"
  ),
  "Invalid",
  "Valid"
)