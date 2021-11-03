If(
Or(
Includes(Solicit_Codes__c , "Do not contact"),
And(
Or(Includes(Solicit_Codes__c , "No to post"),
Includes(Solicit_Codes__c , "Only email"),
Isblank(BillingPostalCode) = True,
Isblank(BillingStreet) = True,
And(Not(BillingCountry = "UK"),
Not(BillingCountry = "United Kingdom"),
Isblank(BillingCountry)= False)),
Or(Includes(Solicit_Codes__c, "No to email"),
Includes(Solicit_Codes__c, "Only post"),
Isblank(Email__c)= True)),
Or(Includes(Constituent_Codes__c, "UK Trust or Foundation"),
Includes(Constituent_Codes__c, "US Trust or Foundation"),
Includes(Constituent_Codes__c, "Other Trust or Foundation"),
Includes(Constituent_Codes__c, "UK Institution"),
Includes(Constituent_Codes__c, "US Institution"),
Includes(Constituent_Codes__c, "Other Institution"))),
True,False)