AMOUNT +
IF(TEXT(Opportunity.gcga__Gift_Aid_Status__c) = "Paid by HMRC", Opportunity.gcga__Gift_Aid_Amount__c, 0)