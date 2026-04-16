=IFERROR(
  IF(LEN(LEFT(J2,FIND("-",J2)-1))>=8,
     MID(J2,FIND("-",J2)+1,999),
     J2),
  J2
)