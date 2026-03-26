IF( 
  Secondary_Reconciliation_Tag__c = "Corporate Donation",
  "Corporate Donation",
IF( 
  npsp__Opportunity__r.RecordType.DeveloperName = "Merchandise_Sales",
  "IG-Merchandise",
IF( 
    npsp__Opportunity__r.RecordType.DeveloperName = "Legacy_Gift", 
    "Legacy", 
    IF( 
      AND( 
        npsp__Opportunity__r.Account.RecordType.DeveloperName = "Grant_Making_Body", 
        OR( 
          INCLUDES(npsp__Opportunity__r.Account.Constituent_Codes__c, "UK Trust or Foundation"), 
          INCLUDES(npsp__Opportunity__r.Account.Constituent_Codes__c, "US Trust or Foundation"), 
          INCLUDES(npsp__Opportunity__r.Account.Constituent_Codes__c, "Other Trust or Foundation"), 
          INCLUDES(npsp__Opportunity__r.Account.Constituent_Codes__c, "Supporter Trust"), 
          INCLUDES(npsp__Opportunity__r.Account.Constituent_Codes__c, "Major Donor Trust") 
        ) 
      ), 
      "Grants - Trusts & Foundations", 
      IF( 
        AND( 
          npsp__Opportunity__r.Account.RecordType.DeveloperName = "Grant_Making_Body", 
          OR( 
            INCLUDES(npsp__Opportunity__r.Account.Constituent_Codes__c, "Other Institution"), 
            INCLUDES(npsp__Opportunity__r.Account.Constituent_Codes__c, "UK Institution"), 
            INCLUDES(npsp__Opportunity__r.Account.Constituent_Codes__c, "US Institution") 
          ) 
        ), 
        "Grants - Institutions", 
        IF( 
          npsp__Opportunity__r.Account.RecordType.DeveloperName = "Grant_Making_Body", 
          "Grants", 
          IF( 
            ISBLANK(npsp__Opportunity__r.npe03__Recurring_Donation__c), 
            IF( 
              AND( 
                npsp__Opportunity__r.RecordTypeId <> "012P6000000PkhBIAS", 
                npsp__Amount__c > 0, 
                npsp__Amount__c < 500 
              ), 
              "Solidarity Gift - Single", 
              IF( 
                AND( 
                  npsp__Amount__c >= 500, 
                  npsp__Amount__c < 5000,
                  npsp__Opportunity__r.npsp__Primary_Contact__r.Major_Donor__c = false 
                ), 
                "Medium Gift - Single", 
                IF(
                  OR(
                  npsp__Amount__c >= 5000,
                  npsp__Opportunity__r.npsp__Primary_Contact__r.Major_Donor__c = TRUE
                ),
                "Major Gift - Single",
                "n/a"
              )
              ) 
            ), 
            IF( 
              AND( 
                npsp__Opportunity__r.npe03__Recurring_Donation__r.Annual_Value__c > 0, 
                npsp__Opportunity__r.npe03__Recurring_Donation__r.Annual_Value__c < 500 
              ), 
              "Solidarity Gift - Regular", 
              IF( 
                AND( 
                  npsp__Opportunity__r.npe03__Recurring_Donation__r.Annual_Value__c >= 500, 
                  npsp__Opportunity__r.npe03__Recurring_Donation__r.Annual_Value__c < 5000,
                  npsp__Opportunity__r.npsp__Primary_Contact__r.Major_Donor__c = false 
                ), 
                "Medium Gift - Regular", 
                IF(
                  OR(
                    npsp__Opportunity__r.npe03__Recurring_Donation__r.Annual_Value__c >= 5000,
                    npsp__Opportunity__r.npsp__Primary_Contact__r.Major_Donor__c = true
                  ),
                  "Major Gift - Regular",
                  "n/a"
                )
              ) 
            ) 
          ) 
        ) 
      ) 
    ) 
  )
))