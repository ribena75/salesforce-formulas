CASE(
  CurrencyIsoCode,
  "GBP", "£",
  "USD", "$",
  ""
)
&
IF(
  ROUND(Amount, 2) >= 1000000,
  TEXT(ROUND(Amount / 1000000, 1)) & "m",
  IF(
    ROUND(Amount, 2) >= 10000,
    TEXT(ROUND(Amount / 1000, 1)) & "k",
    IF(
      LEN(TEXT(FLOOR(ROUND(Amount, 2)))) > 3,
      LEFT(
        TEXT(FLOOR(ROUND(Amount, 2))),
        LEN(TEXT(FLOOR(ROUND(Amount, 2)))) - 3
      ) & "," &
      RIGHT(TEXT(FLOOR(ROUND(Amount, 2))), 3),
      TEXT(FLOOR(ROUND(Amount, 2)))
    )
    &
    "." &
    RIGHT(
      "00" &
      TEXT(
        MOD(FLOOR(ROUND(Amount, 2) * 100), 100)
      ),
      2
    )
  )
)