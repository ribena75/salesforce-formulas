OR(
AND(
TEXT(CurrencyIsoCode)= 'GBP',
Amount >= 1000
),
AND(
TEXT(CurrencyIsoCode)= 'USD',
Amount >= 1000
)
)