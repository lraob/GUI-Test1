
CUSTNO = DataTable.Value("CustomerNo",dtGlobalSheet)
If Len(Trim(CUSTNO)) = 0 Then
	Msgbox "CustomerNo Is Blank, Please Give the CustomerNo"
	ExitRun
End If

VIRACCNO = DataTable.Value("AccountNumber",dtGlobalSheet)
If Len(Trim(VIRACCNO)) = 0 Then
	Msgbox "AccountNumber Is Blank, Please Give the AccountNumber"
	ExitRun
End If

DepositAmount=DataTable.Value("DepositAmount",dtLocalSheet)
Percentage=DataTable.Value("Percentage",dtLocalSheet)
numYear=DataTable.Value("numYear",dtLocalSheet)
PnI=DataTable.Value("PnI",dtLocalSheet)



Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebEdit("fastpath").Set "TDMM" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebEdit("fastpath")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebButton("Go").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").WebButton("Go")_;_script infofile_;_ZIP::ssf2.xml_;_
Wait(5)

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebEdit("CUSTNO").FireEvent "oncontextmenu" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebEdit("CUSTNO")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebEdit("CUSTNO").Set CUSTNO' "00012381" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebEdit("CUSTNO")_;_script infofile_;_ZIP::ssf4.xml_;_

'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebButton("List of Values").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebButton("List of Values")_;_script infofile_;_ZIP::ssf5.xml_;_
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebEdit("1").Set "%00012381%" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebEdit("1")_;_script infofile_;_ZIP::ssf6.xml_;_
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame_2").WebElement("First").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 2").WebElement("First")_;_script infofile_;_ZIP::ssf7.xml_;_


 @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame 3").WebButton("Ok")_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("CCY").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("CCY")_;_script infofile_;_ZIP::ssf58.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("CCY").Set "GBP" @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("CCY")_;_script infofile_;_ZIP::ssf59.xml_;_
 @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("ACC")_;_script infofile_;_ZIP::ssf66.xml_;_
 
 
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebEdit("ACCLS").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebEdit("ACCLS")_;_script infofile_;_ZIP::ssf94.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebButton("List of Values").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebButton("List of Values")_;_script infofile_;_ZIP::ssf95.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_4").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 4").WebButton("Fetch")_;_script infofile_;_ZIP::ssf96.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_4").WebElement("First").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 4").WebElement("First")_;_script infofile_;_ZIP::ssf97.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebButton("Fetch")_;_script infofile_;_ZIP::ssf98.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebButton("Add Row").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebButton("Add Row")_;_script infofile_;_ZIP::ssf100.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebEdit("MMPERCENTAGEI").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebEdit("MMPERCENTAGEI")_;_script infofile_;_ZIP::ssf101.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebEdit("MMPERCENTAGEI").Set Percentage @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebEdit("MMPERCENTAGEI")_;_script infofile_;_ZIP::ssf102.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebEdit("MMTDAMTI").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebEdit("MMTDAMTI")_;_script infofile_;_ZIP::ssf103.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebEdit("MMTDAMTI").Set DepositAmount @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebEdit("MMTDAMTI")_;_script infofile_;_ZIP::ssf104.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_3").WebButton("List of Values_2").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 3").WebButton("List of Values 2")_;_script infofile_;_ZIP::ssf105.xml_;_












Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebEdit("1").Set VIRACCNO @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebEdit("1")_;_script infofile_;_ZIP::ssf133.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebButton("Fetch")_;_script infofile_;_ZIP::ssf134.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebElement("First_2").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebElement("First 2")_;_script infofile_;_ZIP::ssf135.xml_;_



Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("TDAMTI").Set DepositAmount @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("TDAMTI")_;_script infofile_;_ZIP::ssf136.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebElement("Term Deposit Payout Details").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebElement("Term Deposit Payout Details")_;_script infofile_;_ZIP::ssf137.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("DEPTENORYEARSI").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("DEPTENORYEARSI")_;_script infofile_;_ZIP::ssf138.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("DEPTENORYEARSI").Set numYear @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("DEPTENORYEARSI")_;_script infofile_;_ZIP::ssf139.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("Compute").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebButton("Compute")_;_script infofile_;_ZIP::ssf140.xml_;_





'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 7").WebButton("Ok")_;_script infofile_;_ZIP::ssf142.xml_;_


Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("Add Row_2").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebButton("Add Row 2")_;_script infofile_;_ZIP::ssf143.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("PERCENTAGEI").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("PERCENTAGEI")_;_script infofile_;_ZIP::ssf144.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebEdit("PERCENTAGEI").Set Percentage @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebEdit("PERCENTAGEI")_;_script infofile_;_ZIP::ssf145.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("List of Values_3").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebButton("List of Values 3")_;_script infofile_;_ZIP::ssf146.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebEdit("1").Set VIRACCNO @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebEdit("1")_;_script infofile_;_ZIP::ssf147.xml_;_
'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebButton("Fetch")_;_script infofile_;_ZIP::ssf148.xml_;_

Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebButton("Fetch")_;_script infofile_;_ZIP::ssf161.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebElement("First_2").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebElement("First 2")_;_script infofile_;_ZIP::ssf162.xml_;_


'Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebElement("First_3").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 2").WebElement("First 3")_;_script infofile_;_ZIP::ssf149.xml_;_


Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebList("PAYOUTCOMP").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebList("PAYOUTCOMP")_;_script infofile_;_ZIP::ssf150.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebList("PAYOUTCOMP").Select PnI @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebList("PAYOUTCOMP")_;_script infofile_;_ZIP::ssf151.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebList("PAYOUTCOMP").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebList("PAYOUTCOMP")_;_script infofile_;_ZIP::ssf152.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").Link("Save").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").Link("Save")_;_script infofile_;_ZIP::ssf153.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_7").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 7").WebButton("Ok")_;_script infofile_;_ZIP::ssf154.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_8").Link("Save").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 8").Link("Save")_;_script infofile_;_ZIP::ssf155.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_7").WebElement("Transaction Saved Successfully").Check CheckPoint("Transaction Saved Successfully_3") @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 7").WebElement("Transaction Saved Successfully")_;_script infofile_;_ZIP::ssf156.xml_;_
Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_7").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame 7").WebButton("Ok")_;_script infofile_;_ZIP::ssf157.xml_;_













 @@ hightlight id_;_Browser("VAMSHI - 000 - Oracle").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebButton("Single view")_;_script infofile_;_ZIP::ssf93.xml_;_
