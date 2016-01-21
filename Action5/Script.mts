
VIRACCNO = DataTable.Value("AccountNumber",dtGlobalSheet)
If Len(Trim(VIRACCNO)) = 0 Then
	Msgbox "AccountNumber Is Blank, Please Give the AccountNumber"
	ExitRun
End If




'OFFSETAMTI = DataTable.Value("TransactionAmount",dtGlobalSheet)
OFFSETAMTI = DataTable.Value("TransactionAmount",dtLocalSheet)
UserId=DataTable.Value("UserId",dtLocalSheet)
Password=DataTable.Value("Password",dtLocalSheet)
remarks=DataTable.Value("Remarks",dtLocalSheet)


Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebEdit("fastpath").Set "1401" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebEdit("fastpath")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebButton("Go").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebButton("Go")_;_script infofile_;_ZIP::ssf20.xml_;_
Wait(5)


Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_7").WebEdit("VIRACCNO").Click
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_7").WebEdit("VIRACCNO").Set VIRACCNO @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 6").WebButton("Close")_;_script infofile_;_ZIP::ssf19.xml_;_



Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("VIRACCNO").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("VIRACCNO")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("OFFSETAMTI").Click  @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("OFFSETAMTI")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("OFFSETAMTI").Set OFFSETAMTI  '"10000" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("OFFSETAMTI")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("Pickup").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebButton("Pickup")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebButton("Ok")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").Link("Denomination").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").Link("Denomination")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebButton("Populate").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebButton("Populate")_;_script infofile_;_ZIP::ssf29.xml_;_
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebEdit("CASHAMTI").Check CheckPoint("CASHAMTI") @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebEdit("CASHAMTI")_;_script infofile_;_ZIP::ssf30.xml_;_
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebEdit("DENOMTOTALI").Check CheckPoint("DENOMTOTALI") @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebEdit("DENOMTOTALI")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebButton("Ok")_;_script infofile_;_ZIP::ssf41.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_4").Link("Save").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 4").Link("Save")_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Local").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebButton("Local")_;_script infofile_;_ZIP::ssf66.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_5").WebEdit("USERID").Set UserId '"officer2" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 5").WebEdit("USERID")_;_script infofile_;_ZIP::ssf67.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_5").WebEdit("PASSWORD").Set Password 'Secure "563b1cdc7954821d4333818570c1281600f123e0ca851ac8" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 5").WebEdit("PASSWORD")_;_script infofile_;_ZIP::ssf68.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_5").WebEdit("remark").Set remarks '"proceed" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 5").WebEdit("remark")_;_script infofile_;_ZIP::ssf69.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_5").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 5").WebButton("Ok")_;_script infofile_;_ZIP::ssf70.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_6").WebElement("WebTable").Check CheckPoint("WebTable_2") @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 6").WebElement("WebTable")_;_script infofile_;_ZIP::ssf71.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_6").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 6").WebButton("Ok")_;_script infofile_;_ZIP::ssf72.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebElement("WebTable").Check CheckPoint("WebTable_3") @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebElement("WebTable")_;_script infofile_;_ZIP::ssf73.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebButton("Ok")_;_script infofile_;_ZIP::ssf74.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_7").WebButton("Close").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 7").WebButton("Close")_;_script infofile_;_ZIP::ssf75.xml_;_







 @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 7").WebButton("Close")_;_script infofile_;_ZIP::ssf64.xml_;_
