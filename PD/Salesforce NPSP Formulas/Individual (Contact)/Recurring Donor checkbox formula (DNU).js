// Cannot use this as field name is already in use and I cannot change type to that of a formula; find workaround for now 
IF(
   AND(
      NOT(ISBLANK(Active_Recurring_Donations__c)),
      Active_Recurring_Donations__c >= 1
   ),
   true,
   false
)