CASE(
  CurrencyIsoCode,
  "GBP", "£",
  "USD", "$",
  ""
)
&
IF(
  ROUND(npe03__Amount__c, 2) >= 1000000,
  TEXT(ROUND(npe03__Amount__c / 1000000, 1)) & "m",
  IF(
    ROUND(npe03__Amount__c, 2) >= 10000,
    TEXT(ROUND(npe03__Amount__c / 1000, 1)) & "k",
    IF(
      LEN(TEXT(FLOOR(ROUND(npe03__Amount__c, 2)))) > 3,
      LEFT(
        TEXT(FLOOR(ROUND(npe03__Amount__c, 2))),
        LEN(TEXT(FLOOR(ROUND(npe03__Amount__c, 2)))) - 3
      ) & "," &
      RIGHT(TEXT(FLOOR(ROUND(npe03__Amount__c, 2))), 3),
      TEXT(FLOOR(ROUND(npe03__Amount__c, 2)))
    )
    &
    "." &
    RIGHT(
      "00" &
      TEXT(
        MOD(FLOOR(ROUND(npe03__Amount__c, 2) * 100), 100)
      ),
      2
    )
  )
)