SystemUtil.Run "iexplore.exe","http://192.168.0.112:7001/FCJNeoWeb1/LoginServlet"
'OpenApp "http://192.168.0.112:7001/FCJNeoWeb1/LoginServlet"
wait(5)
username=DataTable.Value("UserName",dtLocalSheet)
password=DataTable.Value("Password",dtLocalSheet)

Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebElement("User ID").Click @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebElement("User ID")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebEdit("USERID").Set username @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebEdit("USERID")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebEdit("user_pwd").Set password
Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebButton("Sign In").Click @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebButton("Sign In")_;_script infofile_;_ZIP::ssf4.xml_;_
'Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").Sync
' 
'If Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle").Link("Sign Off").Exist(30) Then
' 	Reporter.ReportEvent micPass, "Login Successfull", "Login SuccessFull"
' Else
' 	Reporter.ReportEvent micFail, "Login Fail", "Login Fail"
' End If
'
'If Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebButton("Ok").Exist(5) Then
'	Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle").Frame("Frame").WebButton("Ok").Click
'End If
'
'
''Select Branch
'
''SystemUtil.Run "fsquirt.exe","-Register","","",5
'
'Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle").Link("Branch_Menu").Click @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle").Link("000")_;_script infofile_;_ZIP::ssf7.xml_;_
'Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle_2").Link("Select Branch").Click @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle 2").Link("Select Branch")_;_script infofile_;_ZIP::ssf8.xml_;_
'Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebButton("Fetch").Click @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebButton("Fetch")_;_script infofile_;_ZIP::ssf9.xml_;_
'Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle_2").Frame("Frame").WebElement("First").Click @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle 2").Frame("Frame").WebElement("First")_;_script infofile_;_ZIP::ssf10.xml_;_
'
'If Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Ok").Exist Then
	Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("VAMSHI - 000 - Oracle_2").Frame("Frame_2").WebButton("Ok").Click
'End If

