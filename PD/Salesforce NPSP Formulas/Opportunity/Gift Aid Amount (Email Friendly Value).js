CASE(
  CurrencyIsoCode,
  "GBP", "£",
  "USD", "$",
  ""
)
&
IF(
  ROUND(gcga__Gift_Aid_Amount__c, 2) >= 1000000,
  TEXT(ROUND(gcga__Gift_Aid_Amount__c / 1000000, 1)) & "m",
  IF(
    ROUND(gcga__Gift_Aid_Amount__c, 2) >= 10000,
    TEXT(ROUND(gcga__Gift_Aid_Amount__c / 1000, 1)) & "k",
    IF(
      LEN(TEXT(FLOOR(ROUND(gcga__Gift_Aid_Amount__c, 2)))) > 3,
      LEFT(
        TEXT(FLOOR(ROUND(gcga__Gift_Aid_Amount__c, 2))),
        LEN(TEXT(FLOOR(ROUND(gcga__Gift_Aid_Amount__c, 2)))) - 3
      ) & "," &
      RIGHT(TEXT(FLOOR(ROUND(gcga__Gift_Aid_Amount__c, 2))), 3),
      TEXT(FLOOR(ROUND(gcga__Gift_Aid_Amount__c, 2)))
    )
    &
    "." &
    RIGHT(
      "00" &
      TEXT(
        MOD(FLOOR(ROUND(gcga__Gift_Aid_Amount__c, 2) * 100), 100)
      ),
      2
    )
  )
)