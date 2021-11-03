If(
Or(
Includes(causeview__Solicit_Codes__c , "Do not contact"),
And(
Or(Includes(causeview__Solicit_Codes__c , "No to post"),
Includes(causeview__Solicit_Codes__c , "Only email"),
Isblank(BillingPostalCode) = True,
Isblank(BillingStreet) = True,
And(Not(BillingCountry = "UK"),
Not(BillingCountry = "United Kingdom"),
Isblank(BillingCountry)= False)),
Or(Includes(causeview__Solicit_Codes__c, "No to email"),
Includes(causeview__Solicit_Codes__c, "Only post"),
Isblank(Email__c)= True)),
Or(Includes(causeview__Constituent_Codes__c, "UK Trust or Foundation"),
Includes(causeview__Constituent_Codes__c, "US Trust or Foundation"),
Includes(causeview__Constituent_Codes__c, "Other Trust or Foundation"),
Includes(causeview__Constituent_Codes__c, "UK Institution"),
Includes(causeview__Constituent_Codes__c, "US Institution"),
Includes(causeview__Constituent_Codes__c, "Other Institution"))),
True,False)