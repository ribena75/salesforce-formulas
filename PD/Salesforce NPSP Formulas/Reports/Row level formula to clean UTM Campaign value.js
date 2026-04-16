IF(
  ISERROR(FIND("-", UTM_Campaign__c)),
  UTM_Campaign__c,
  IF(
    LEN(LEFT(UTM_Campaign__c, FIND("-", UTM_Campaign__c) - 1)) >= 8,
    MID(UTM_Campaign__c, FIND("-", UTM_Campaign__c) + 1, 999),
    UTM_Campaign__c
  )
)