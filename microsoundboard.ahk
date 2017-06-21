;msb@ngiano
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
#SingleInstance Force
#include ..\..\include\ahk\websocket.ahk
OnExit("Disconnect")
websocket_registerCallback(1, "on_fail")
websocket_registerCallback(2, "on_disconnect")
Sleep, 1000
websocket_connect("ws://localhost:8081")
return
on_fail()
{
	Critical
	MsgBox, 5, Server client connection was not established, Would you like to retry or abort connection?
	IfMsgBox Retry
		Reload
		return
    IfMsgBox Cancel
		Exit
		return
}
on_disconnect()
{
	Critical
	MsgBox, 5, Server client connection was lost, Would you like to retry or abort connection?
	IfMsgBox Retry
		Reload
		return
    IfMsgBox Cancel
		Exit
		return
}
f13::
websocket_send("sb 1", strLen("sb 1"), false)
return
f14::
websocket_send("sb 2", strLen("sb 2"), false)
return
f15::
websocket_send("sb 3", strLen("sb 3"), false)
return
f16::
websocket_send("sb 4", strLen("sb 4"), false)
return
f17::
websocket_send("sb 5", strLen("sb 5"), false)
return
f18::
websocket_send("sb 6", strLen("sb 6"), false)
return
f19::
websocket_send("sb 7", strLen("sb 7"), false)
return
f20::
websocket_send("sb 8", strLen("sb 8"), false)
return
f21::
websocket_send("sb 9", strLen("sb 9"), false)
return
f22::
websocket_send("sb 10", strLen("sb 10"), false)
return

Disconnect() 
{
websocket_disconnect()
return
}