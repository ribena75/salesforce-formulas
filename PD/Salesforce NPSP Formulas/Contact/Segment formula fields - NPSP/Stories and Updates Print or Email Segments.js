If(
Or(npsp__Deceased__c = True,
Includes(Global_Communication_Preferences__c, "Forget me"),
Includes(Global_Communication_Preferences__c, "Do not contact")),
"Neither Print nor Email",
If(
And(
Includes(Stories_and_Updates_Opt_Ins__c, "Yes to Post"),
Isblank(MailingStreet) = False,
Isblank(MailingPostalCode) = False,
Or(
MailingCountry = "UK",
MailingCountry = "United Kingdom",
MailingCountry = "GB",
MailingCountry = "GBR",
Isblank(MailingCountry) = True)),
If(
And(
Or(
Includes(Stories_and_Updates_Opt_Ins__c, "Yes to Email"),
Opt_in_Email__c = True),
Len(Email) > 5,
HasOptedOutOfEmail = False),
"Both Print and Email",
"Print only"),
If(
And(
Or(
Includes(Stories_and_Updates_Opt_Ins__c, "Yes to Email"),
Opt_in_Email__c = True),
Len(Email) > 5,
HasOptedOutOfEmail = False),
"Email only",
"Neither Print nor Email")))