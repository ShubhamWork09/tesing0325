function Test1()
{
  let notepad = Aliases.notepad;
  let taskDialog = notepad.dlgNotepad.Notepad;
  let btnDontSave = taskDialog.CtrlNotifySink.btnDontSave;
  btnDontSave.ClickButton();
  let start = Aliases.explorer.wndShell_TrayWnd.Start;
  start.Click(21, 22);
  start.Click(19, 39);
  wndNotepad.Edit.Keys("checking123");
  wndNotepad.Click(163, 40);
  wndNotepad.DblClick(188, 45);
  wndNotepad.MainMenu.Click("Help|About Notepad");
  notepad.dlgAboutNotepad.Close();
  wndNotepad.Close();
  taskDialog.Click(192, 60);
  btnDontSave.ClickButton();
}