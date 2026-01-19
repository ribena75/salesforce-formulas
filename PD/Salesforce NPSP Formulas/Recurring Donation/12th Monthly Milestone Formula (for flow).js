AND(
  npe03__Total_Paid_Installments__c > 0,
  MOD(npe03__Total_Paid_Installments__c, 12) = 0,
  NOT(Do_Not_Acknowledge__c),
  TEXT(npsp__Status__c) = 'Active'
)