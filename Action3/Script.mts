
FSTNAME = DataTable.Value("FSTNAME",dtLocalSheet)
If FSTNAME = "rndName" Then
	FSTNAME = generateRandomString(6)
	
	DataTable.Value("FSTNAME",dtLocalSheet) = FSTNAME
End If
LSTNAME = DataTable.Value("LSTNAME",dtLocalSheet)
If LSTNAME = "rndName" Then
	LSTNAME = generateRandomString(6)
	DataTable.Value("LSTNAME",dtLocalSheet) = LSTNAME
End If

SNAME = DataTable.Value("SNAME",dtLocalSheet)
If SNAME = "rndName" Then
	SNAME = generateRandomString(6)
	DataTable.Value("SNAME",dtLocalSheet) = SNAME
End If

HOMETELNO = DataTable.Value("HOMETELNO",dtLocalSheet)
If HOMETELNO = "rndNumber" Then
	HOMETELNO = generateRandomNumber(10)
	DataTable.Value("HOMETELNO",dtLocalSheet) = HOMETELNO
End If

EMAIL = DataTable.Value("EMAIL",dtLocalSheet)
If EMAIL = "rndEmail" Then
	EMAIL = generateRandomEmail
	DataTable.Value("EMAIL",dtLocalSheet) = EMAIL
End If

FULLNAME = FSTNAME&" "&LSTNAME

DataTable.Value("FULLNAME",dtLocalSheet) = FULLNAME

SEX = DataTable.Value("SEX",dtLocalSheet)

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebEdit("fastpath").Set "STDCIF" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebEdit("fastpath")_;_script infofile_;_ZIP::ssf1.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebButton("Go").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebButton("Go")_;_script infofile_;_ZIP::ssf68.xml_;_
wait(5)
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").Link("New").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").Link("New")_;_script infofile_;_ZIP::ssf2.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebButton("P").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebButton("P")_;_script infofile_;_ZIP::ssf3.xml_;_

Wait(5)

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("FULLNAME").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("FULLNAME")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("FULLNAME").Set FULLNAME @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("FULLNAME")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("SNAME").Set SNAME @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("SNAME")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebButton("List of Values").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebButton("List of Values")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").WebButton("Fetch")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").Link("INDIVIDUAL").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").Link("INDIVIDUAL")_;_script infofile_;_ZIP::ssf9.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebButton("List of Values_2").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebButton("List of Values 2")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").WebButton("Fetch")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebElement("First").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").WebElement("First")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("FSTNAME").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("FSTNAME")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("FSTNAME").Set FSTNAME @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("FSTNAME")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("LSTNAME").Set LSTNAME @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("LSTNAME")_;_script infofile_;_ZIP::ssf15.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("HOMETELISDI").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("HOMETELISDI")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("HOMETELISDI").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("HOMETELISDI")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("HOMETELISDI").Set "91" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("HOMETELISDI")_;_script infofile_;_ZIP::ssf18.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("HOMETELNO").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("HOMETELNO")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("HOMETELNO").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("HOMETELNO")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("HOMETELNO").Set HOMETELNO @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("HOMETELNO")_;_script infofile_;_ZIP::ssf21.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebRadioGroup("SEX").Select SEX @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebRadioGroup("SEX")_;_script infofile_;_ZIP::ssf22.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("EMAIL").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("EMAIL").Set EMAIL @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("EMAIL")_;_script infofile_;_ZIP::ssf24.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("NATIONID").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("NATIONID").Set "indian" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("NATIONID")_;_script infofile_;_ZIP::ssf26.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("BIRTH_COUNTRY").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("BIRTH COUNTRY")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebButton("List of Values_3").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").WebButton("Fetch")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").Link("TEST COUNTRY Y").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").Link("TEST COUNTRY Y")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebButton("List of Values_4").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebButton("List of Values 4")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").WebButton("Fetch")_;_script infofile_;_ZIP::ssf32.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").Link("English").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").Link("English")_;_script infofile_;_ZIP::ssf33.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("NAME").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("NAME")_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("NAME").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("NAME")_;_script infofile_;_ZIP::ssf35.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("NAME").Set FULLNAME @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("NAME")_;_script infofile_;_ZIP::ssf36.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("ADDRLN1").Set "asdasdasd" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("ADDRLN1")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("COUNTRY").Set "ind" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("COUNTRY")_;_script infofile_;_ZIP::ssf38.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").WebButton("Fetch")_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebElement("First_2").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").WebElement("First 2")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebElement("Address For Correspondence").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebElement("Address For Correspondence")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebCheckBox("SAME_CORR_ADDR").Set "ON" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebCheckBox("SAME CORR ADDR")_;_script infofile_;_ZIP::ssf42.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebButton("WebButton").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebButton("WebButton")_;_script infofile_;_ZIP::ssf43.xml_;_
 @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 4").Link("Close")_;_script infofile_;_ZIP::ssf67.xml_;_
 
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("DOBI").Set DataTable.Value("DOBI",dtLocalSheet) '"1980-05-19" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("DOBI")_;_script infofile_;_ZIP::ssf77.xml_;_
 
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("NLTY").Set "ABY" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("NLTY")_;_script infofile_;_ZIP::ssf80.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").Link("Save").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").Link("Save")_;_script infofile_;_ZIP::ssf81.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_5").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 5").WebButton("Ok")_;_script infofile_;_ZIP::ssf82.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_7").WebButton("Accept").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 7").WebButton("Accept")_;_script infofile_;_ZIP::ssf83.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_7").WebElement("Record Successfully Saved").Check CheckPoint("Record Successfully Saved and Authorized") @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 7").WebElement("Record Successfully Saved")_;_script infofile_;_ZIP::ssf84.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_7").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 7").WebButton("Ok")_;_script infofile_;_ZIP::ssf85.xml_;_

wait(2)
CustomerNo = Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_8").WebEdit("CUSTNO").GetROProperty("value")
DataTable.Value("CustomerNo",dtGlobalSheet) = CustomerNo
DataTable.Value("CustomerNo",dtLocalSheet) = CustomerNo
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_8").WebEdit("CUSTNO").Check CheckPoint("CUSTNO") @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 8").WebEdit("CUSTNO")_;_script infofile_;_ZIP::ssf86.xml_;_



