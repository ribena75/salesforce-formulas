IF(
    AND(
        ISPICKVAL(npe03__Recurring_Donation__c.npe03__Installment_Period__c,"Monthly"),
        TODAY() - npe03__Recurring_Donation__c.npe03__Last_Payment_Date__c > 59),
    "Lapsed",
IF(
    AND(
        ISPICKVAL(npe03__Recurring_Donation__c.npe03__Installment_Period__c,"Quarterly"),
        TODAY() - npe03__Recurring_Donation__c.npe03__Last_Payment_Date__c > 120),
    "Lapsed",
IF(
    AND(
        ISPICKVAL(npe03__Recurring_Donation__c.npe03__Installment_Period__c,"Biannual"),
        TODAY() - npe03__Recurring_Donation__c.npe03__Last_Payment_Date__c > 210),
    "Lapsed",
IF(
    AND(
        ISPICKVAL(npe03__Recurring_Donation__c.npe03__Installment_Period__c,"Yearly"),
        TODAY() - npe03__Recurring_Donation__c.npe03__Last_Payment_Date__c > 393),
    "Lapsed",
    "Active"
)
)
)
)