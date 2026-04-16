IF(
  Opportunity.Amount <> npsp__Allocation__c.npsp__Amount__c,
  "CHECK",
  "Amounts Match"
)