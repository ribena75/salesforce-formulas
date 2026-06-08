CASE(
  CurrencyIsoCode,
  "GBP", "£",
  "USD", "$",
  ""
)
&
IF(
  ROUND(npo02__TotalOppAmount__c, 2) >= 1000000,
  TEXT(ROUND(npo02__TotalOppAmount__c / 1000000, 1)) & "m",
  IF(
    ROUND(npo02__TotalOppAmount__c, 2) >= 10000,
    TEXT(ROUND(npo02__TotalOppAmount__c / 1000, 1)) & "k",
    IF(
      LEN(TEXT(FLOOR(ROUND(npo02__TotalOppAmount__c, 2)))) > 3,
      LEFT(
        TEXT(FLOOR(ROUND(npo02__TotalOppAmount__c, 2))),
        LEN(TEXT(FLOOR(ROUND(npo02__TotalOppAmount__c, 2)))) - 3
      ) & "," &
      RIGHT(TEXT(FLOOR(ROUND(npo02__TotalOppAmount__c, 2))), 3),
      TEXT(FLOOR(ROUND(npo02__TotalOppAmount__c, 2)))
    )
    &
    "." &
    RIGHT(
      "00" &
      TEXT(
        MOD(FLOOR(ROUND(npo02__TotalOppAmount__c, 2) * 100), 100)
      ),
      2
    )
  )
)