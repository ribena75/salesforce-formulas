IF(
  ISBLANK(npe03__Date_Established__c) || ISBLANK(npe03__Last_Payment_Date__c),
  "N/A",
  TEXT(FLOOR((npe03__Last_Payment_Date__c - npe03__Date_Established__c) / 365)) &
  " years, " &
  TEXT(FLOOR(MOD((npe03__Last_Payment_Date__c - npe03__Date_Established__c), 365) / 30)) &
  " months"
)