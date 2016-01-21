


'Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebElement("2011-01-04   |").Check CheckPoint("2011-01-04   |_3") @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebElement("2011-01-04   |")_;_script infofile_;_ZIP::ssf82.xml_;_





SysDateInit = Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebElement("date").GetROProperty("innertext") @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebElement("2011-01-04   |")_;_script infofile_;_ZIP::ssf62.xml_;_
BranchCde=DataTable.Value("BranchCde",dtLocalSheet)
'Percentage=DataTable.Value("Percentage",dtLocalSheet)



Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Link("Select Branch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Link("Select Branch")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame").WebButton("Fetch").Click @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame").WebButton("Fetch")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame").WebElement("First").Click @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame").WebElement("First")_;_script infofile_;_ZIP::ssf4.xml_;_
'Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_2").WebButton("Ok").Click @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame 2").WebButton("Ok")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebButton("Ok").Click

wait(5)
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebEdit("fastpath").Set "AEDSTART" @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebEdit("fastpath")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebButton("Go").Click @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebButton("Go")_;_script infofile_;_ZIP::ssf7.xml_;_
 @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame 7").WebButton("Refresh")_;_script infofile_;_ZIP::ssf33.xml_;_
 @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame 3").WebList("TARGETSTAGE")_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebList("TARGETSTAGE").Select "Post End of Previous Day 3"
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebList("TARGETSTAGE").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebElement("EOC ReferenceEOC TypeMulti-Thr").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebButton("List of Values").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_4").WebEdit("1").Set BranchCde
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_4").WebButton("Fetch").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_4").Link("Group Code for T01 Branch").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebButton("Add Branches From Group").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebCheckBox("chkDeleteRow").Set "ON"
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebCheckBox("chkDeleteRow_2").Set "OFF"
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebButton("Delete Row").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebList("CURRSTAGE").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebList("CURRSTAGE").Select "Transaction Input"
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebList("CURRSTAGE").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebElement("Select All RowsSequenceBranch").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_3").WebButton("Submit").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebEdit("fastpath").Set "AEDBRMTR"
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebButton("Go").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_6").Link("Enter Query").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_7").WebEdit("BRNCD").Set BranchCde
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_7").Link("Execute Query").Click

SysDate = Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebElement("date").GetROProperty("innertext")




'Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebElement("date").Check CheckPoint("2011-01-13   |") @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").WebElement("date")_;_script infofile_;_ZIP::ssf83.xml_;_



If SysDateInit=SysDate Then
	Msgbox "EOD not completed properly."
	ExitRun
End If


Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Link("Select Branch").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_8").WebEdit("1").Set "000"
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_8").WebButton("Fetch").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_8").WebElement("First").Click
Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame_9").WebButton("Ok").Click
 @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame 5").WebButton("Ok")_;_script infofile_;_ZIP::ssf81.xml_;_












 @@ hightlight id_;_Browser("VAMSHI - 000 - 000 - Oracle").Page("VAMSHI - 000 - 000 - Oracle").Frame("Frame 9").WebButton("Ok")_;_script infofile_;_ZIP::ssf61.xml_;_
