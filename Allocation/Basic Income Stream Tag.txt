IF(
ISBLANK(causeview__Gift__r.causeview__Constituent__c),
IF(
OR(
INCLUDES(causeview__Gift__r.causeview__Organization__r.causeview__Constituent_Codes__c,"Major Donor Trust"),
INCLUDES(causeview__Gift__r.causeview__Organization__r.causeview__Constituent_Codes__c,"Major Donors")),
"Major Donors",
IF(
OR(
causeview__Gift__r.causeview__Organization__r.Name = "Away",
INCLUDES(causeview__Gift__r.causeview__Organization__r.causeview__Constituent_Codes__c,"Corporate Donor")),
"Corporate",
IF(
causeview__Gift__r.causeview__Organization__r.RecordTypeId = "0120X000000sdnZ",
"Grant-Making Bodies",
"Individual Giving"))),
IF(
OR(
INCLUDES(causeview__Gift__r.causeview__Constituent__r.causeview__Constituent_Codes__c,"Major Donor"),
INCLUDES(causeview__Gift__r.causeview__Constituent__r.causeview__Constituent_Codes__c,"Patron"),
CONTAINS(causeview__New_Campaign__r.Name,"Sustainer"),
CONTAINS(causeview__New_Campaign__r.Name,"Major Donor")),
"Major Donors",
"Individual Giving"))