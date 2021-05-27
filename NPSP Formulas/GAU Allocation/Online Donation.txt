IF(
OR(
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "Big Give"),
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "CreditCard"),
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "Eventbrite"),
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "Global Giving"),
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "JustGiving"),
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "Paypal"),
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "Worldpay"),
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "Facebook"),
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "Instagram"),
ISPICKVAL( Payment__r.cpm__Payment_Method__c , "Stripe")),
True,
False)
