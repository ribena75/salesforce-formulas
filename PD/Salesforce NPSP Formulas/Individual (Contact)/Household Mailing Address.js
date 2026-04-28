//Managed formula - cannot be updated//

IF(npe01__Organization_Type__c == 'Household Account',

Account.BillingStreet & BR() &
Account.BillingCity & IF(ISBLANK(Account.BillingCity), "", ", ") & Account.BillingState & " " & Account.BillingPostalCode
& IF(ISBLANK(Account.BillingCountry), "", BR()& Account.BillingCountry),

npo02__Household__r.npo02__Formula_MailingAddress__c)