AND(
  npe03__Total_Paid_Installments__c > 0,
  MOD(npe03__Total_Paid_Installments__c, 12) = 0,
  TEXT({!$Record.npsp__Status__c}) = 'Active'
)