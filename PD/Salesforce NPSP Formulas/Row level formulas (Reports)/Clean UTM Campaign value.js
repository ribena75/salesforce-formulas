IF(
  FIND("-", Opportunity.UTM_Campaign__c) = 0,
  Opportunity.UTM_Campaign__c,
  IF(
    LEN(LEFT(Opportunity.UTM_Campaign__c, FIND("-", Opportunity.UTM_Campaign__c) - 1)) >= 8,
    MID(Opportunity.UTM_Campaign__c, FIND("-", Opportunity.UTM_Campaign__c) + 1, 999),
    Opportunity.UTM_Campaign__c
  )
)