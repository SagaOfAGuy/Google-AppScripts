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

// Method that creates file in Google Drive. Needs Drive services to be enabled to work
function createFile(filename,data, mimetype) {
  if(data == undefined) {
    Logger.log("Could not create file"); 
    return ; 
  } 
  let fileInfo = {
     title:`${filename}`,
     mimeType: `${mimetype}`
    };
  let blob = Utilities.newBlob(data); 
  Drive.Files.insert(fileInfo, blob);
  Logger.log("File has been created"); 
}

// Method that gets fileID by file name 
function getFileId(name) { 
  var files = DriveApp.getFiles(); 
  while(files.hasNext()) { 
     var file = files.next();
     var filename = file.getName();
     var fileID = file.getId(); 
    if(name == filename) { 
       return fileID; 
    }    
  }
}
