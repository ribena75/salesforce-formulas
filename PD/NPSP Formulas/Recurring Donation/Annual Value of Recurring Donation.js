CASE( TEXT([npe03__Recurring_Donation__c].npe03__Installment_Period__c ),

           "Monthly",[npe03__Recurring_Donation__c].npe03__Installment_Amount__c * 12,
           "Quarterly",[npe03__Recurring_Donation__c].npe03__Installment_Amount__c * 4,
           "Biannual",[npe03__Recurring_Donation__c].npe03__Installment_Amount__c * 2,
           "Yearly",[npe03__Recurring_Donation__c].npe03__Installment_Amount__c ,
           0

)