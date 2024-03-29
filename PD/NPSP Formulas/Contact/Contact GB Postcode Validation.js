AND(
ISPICKVAL(CurrencyIsoCode,"GBP"),
NOT(
OR(
ISBLANK( MailingPostalCode ),
REGEX( MailingPostalCode , "[a-zA-Z]\\d\\s\\d[a-zA-Z]{2}"),
REGEX( MailingPostalCode , "[a-zA-Z]\\d\\d\\s\\d[a-zA-Z]{2}"),
REGEX( MailingPostalCode , "[a-zA-Z]{2}\\d\\s\\d[a-zA-Z]{2}"),
REGEX( MailingPostalCode , "[a-zA-Z]{2}\\d\\d\\s\\d[a-zA-Z]{2}"),
REGEX( MailingPostalCode , "[a-zA-Z]{2}\\d[a-zA-Z]\\s\\d[a-zA-Z]{2}"),
REGEX( MailingPostalCode, "[a-zA-Z]\\d[a-zA-Z]\\s\\d[a-zA-Z]{2}")
)
)
)