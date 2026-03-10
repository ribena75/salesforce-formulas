IF(
   AND(
      NOT(ISBLANK(Active_Recurring_Donations__c)),
      Active_Recurring_Donations__c >= 1
   ),
   true,
   false
)