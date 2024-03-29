AND(

         [Opportunity].RecordType.DeveloperName = "Donation",
         ISPICKVAL([Opportunity].StageName,"Posted"),
         ISPICKVAL([Opportunity].CurrencyIsoCode,"GBP"),
		 ISPICKVAL([Opportunity].npsp__Primary_Contact__r.CurrencyIsoCode,"GBP"),
		 [Opportunity].npsp__Primary_Contact__r.MailingCountry = "UK",
		 NOT(ISBLANK([Opportunity].npsp__Primary_Contact__c)),
         [Opportunity].npsp__Primary_Contact__r.Not_eligible_for_Gift_Aid__c = FALSE,
         [Opportunity].npsp__Primary_Contact__r.npsp__Deceased__c = FALSE,
         NOT(INCLUDES([Opportunity].npsp__Primary_Contact__r.Solicit_Codes__c   , "Do Not Contact")),
         NOT(INCLUDES([Opportunity].npsp__Primary_Contact__r.Global_Communication_Preferences__c , "Do Not Contact")),

         CASE([Opportunity].npsp4hub__Payment_Method__c ,
                   "CAF",1,
                   "CAF Regular",1,
                   "CAF Voucher",1,
                   "CAF Card",1,
                   "CAF GAYE",1,
				   "Benevity",1,
				   "Radio 4",1,
				   "Global Giving",1,
				   "JustGiving",1,
				   "Charitable Giving",1,
				   "GoFundMe",1,
				   "Foundation Scotland",1,
				   "Eventbrite",1,
                    0
         ) = 0,

        OR(
              AND(
                       [Opportunity].npsp__Primary_Contact__r.gaid__Has_Valid_GAD_Now__c = FALSE,
                       [Opportunity].IsRecurringDonation__c = FALSE
               ),
              AND(
                       [Opportunity].npsp__Primary_Contact__r.gaid__Has_Valid_GAD_Now__c = FALSE,
                       NOT(ISBLANK( [Opportunity].npe03__Recurring_Donation__c)),
                       [Opportunity].IsRecurringDonation__c = TRUE,
                       [Opportunity].npe03__Recurring_Donation__r.npe03__Total_Paid_Installments__c = 0

                )
