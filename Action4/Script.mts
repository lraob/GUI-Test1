
CUSTNO = DataTable.Value("CustomerNo",dtGlobalSheet)
If Len(Trim(CUSTNO)) = 0 Then
	Msgbox "CustomerNo Is Blank, Please Give the CustomerNo"
	ExitRun
End If

CCY = DataTable.Value("Currency",dtLocalSheet)
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebEdit("fastpath").Set "STDCUSAC"

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebButton("Go").Click

'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebButton("Fetch").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").Link("New").Click


Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("CUSTNO").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("CUSTNO").Set CUSTNO'"00008126"

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("CCY").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("CCY").Set CCY
Wait(1)
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").Link("Nominee").Click
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebButton("List of Values_2").Click
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebButton("Fetch").Click
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebEdit("1").Set "%GBP"
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").WebButton("Fetch").Click
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_3").Link("Great Britain Pound").Click

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("List of Values").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebButton("Fetch").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").Link("SAV1 ACCOUNT").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebElement("Account DescriptionNarrativeAc").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("Fetch").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_4").WebButton("Ok").Click


 @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 4").WebButton("Ok")_;_script infofile_;_ZIP::ssf59.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("List of Values_2").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebButton("List of Values 2")_;_script infofile_;_ZIP::ssf60.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebButton("Fetch")_;_script infofile_;_ZIP::ssf61.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").Link("Bangalore").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").Link("Bangalore")_;_script infofile_;_ZIP::ssf62.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("List of Values_3").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebButton("List of Values 3")_;_script infofile_;_ZIP::ssf63.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebButton("Fetch")_;_script infofile_;_ZIP::ssf64.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebElement("First").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebElement("First")_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("WebButton").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebButton("WebButton")_;_script infofile_;_ZIP::ssf66.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").Link("MIS").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").Link("MIS")_;_script infofile_;_ZIP::ssf67.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_4").WebButton("List of Values").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 4").WebButton("List of Values")_;_script infofile_;_ZIP::ssf68.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_5").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 5").WebButton("Fetch")_;_script infofile_;_ZIP::ssf69.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_5").WebElement("First").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 5").WebElement("First")_;_script infofile_;_ZIP::ssf70.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_4").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 4").WebButton("Ok")_;_script infofile_;_ZIP::ssf71.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").Link("Save").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_6").WebButton("Ok").Click

'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_7").WebButton("Accept").Click



Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Accept").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebButton("Accept")_;_script infofile_;_ZIP::ssf74.xml_;_


Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebElement("Record Successfully Saved").Check CheckPoint("Record Successfully Saved and Authorized_3") @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebElement("Record Successfully Saved")_;_script infofile_;_ZIP::ssf78.xml_;_

'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebElement("Record Successfully Saved").Check CheckPoint("Record Successfully Saved and Authorized_2") @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebElement("Record Successfully Saved")_;_script infofile_;_ZIP::ssf77.xml_;_

'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebElement("Record Successfully Saved").Check CheckPoint("Record Successfully Saved and Authorized")
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_7").WebButton("Ok").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Ok").Click

'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("ACC").Check CheckPoint("ACC")
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("BRN").Check CheckPoint("BRN")

DataTable.Value("AccountNumber",dtLocalSheet) = Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("ACC").GetROProperty("value")
DataTable.Value("AccountNumber",dtGlobelSheet) = DataTable.Value("AccountNumber",dtLocalSheet) 
DataTable.Value("Branch",dtLocalSheet) = Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("BRN").GetROProperty("value")

