CASE(
  CurrencyIsoCode,
  "GBP", "£",
  "USD", "$",
  ""
) &
TEXT(FLOOR(ROUND(npo02__TotalOppAmount__c, 2))) &
"." &
RIGHT(
  "00" &
  TEXT(
    MOD(FLOOR(ROUND(npo02__TotalOppAmount__c, 2) * 100), 100)
  ),
  2
)