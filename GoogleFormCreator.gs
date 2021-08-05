  
/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** 
 * SERVICES
 * --------
 *  - Drive API V2
 *  
 * 
*/

// Function that creates Google Form and Google sheet
function createGoogleForm(formName,sheetName,email=Session.getActiveUser().getEmail()) {
  // Check if files with same form and sheet names already exist
  var prevForm = UsefulMethods.getFileId(formName); 
  var prevSheet = UsefulMethods.getFileId(sheetName); 
  try {
    // Try to remove files if they already exist
    Drive.Files.remove(prevForm); 
    Drive.Files.remove(prevSheet);
  }
  catch(e) {
    // If unable to delete
      Logger.log("New file");
      Logger.log(e); 
  }
  // Create new form and sheets
  var form = FormApp.create(formName);
  var ss = SpreadsheetApp.create(sheetName); 
  var ssID = ss.getId(); 
  var formID = form.getId(); 
  // Link Google sheet to Googlr Forms
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ssID); 
  // Make form publically accessible
  form.setRequireLogin(false)
  // Send email sharing notifications to email address of your choice. Default parameter is same email as current active user
  DriveApp.getFileById(ssID).addEditor(email); 
  DriveApp.getFileById(formID).addEditor(email);
  Logger.log("Sharing notifications sent"); 
}
/*
Example:

// Creates a Google Form named 'Form1', a Google sheet named 'Sheet1', and sends a sharing notification email to myemail@gmail.com
createGoogleForm("Form1","Sheet1","myemail@gmail.com");
*/
