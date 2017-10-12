
1::

SetKeyDelay 30

Send, {ALT DOWN}{TAB}{ALT UP}
Sleep, 50
Send, {Right}
Sleep, 50
Send, ^c
Sleep, 50
Send, {ALT DOWN}{TAB}{ALT UP}
return

2::

Send, {CTRL DOWN}a{CTRL UP}
Sleep, 50
Send, ^v
Send, {ENTER}

return

3::
Send, {ALT DOWN}{TAB}{ALT UP}
Sleep, 50
Send, {DOWN}

Send, {LEFT}
Sleep, 5
Send, {LEFT}
Send, {LEFT}
Sleep, 5
Send, {LEFT}
Send, {LEFT}
Sleep, 5
Send, {LEFT}

Sleep, 5
Send, ^c
Sleep, 50
Send, {ALT DOWN}{TAB}{ALT UP}
return


0::
ExitApp 
return



