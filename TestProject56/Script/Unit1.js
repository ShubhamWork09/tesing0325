function Test1()
{
  Aliases.explorer.wndShell_TrayWnd.Start.Click(14, 27);
  let notepad = Aliases.notepad;
  let wndNotepad = notepad.wndNotepad;
  let edit = wndNotepad.Edit;
  edit.Keys("checking789");
  wndNotepad.Click(30, 45);
  edit.Click(483, 71);
  wndNotepad.MainMenu.Click("Help|About Notepad");
  let dlgAboutNotepad = notepad.dlgAboutNotepad;
  dlgAboutNotepad.Drag(134, 153, 13, -7);
  OCR.Recognize(dlgAboutNotepad).BlockByText("19045.5487").Click();
  dlgAboutNotepad.btnOK.ClickButton();
  wndNotepad.Close();
  notepad.dlgNotepad.Notepad.CtrlNotifySink.btnDontSave.ClickButton();
}