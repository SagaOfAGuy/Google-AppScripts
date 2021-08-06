
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
// Converts regular time to military time
/*

Example Usage:
// time variable
var time = "4:15pm";

// convert the string 4:15pm to military time
var milTime = MakeMilitary(time);

console.log(milTime); // This should return 1615 as output
*/
function MakeMilitary(time) {
	var number = parseInt(time.substring(0,2));
	var minuteRegex = /[:][0-9][0-9]/g
	var minutes = time.match(minuteRegex).toString().substring(1);
	if(time.includes("p")) {
		if(number == 12) {
			var num = "12";
			return num + minutes;
		} 
		else {
			number += 12; 
		}
	}
	else { 
		if(number == 12) {
			var num = "00";
			return num + minutes; 
		}
		number = number.toString().padStart(2,'0');
	}
	var time = number + minutes;
	return time.toString();
}

// Converts months to padded month number
/*
Example Usage:
var janNum = convertMonth("Jan");

console.log(janNum); // this should return 01
*/
function convertMonth(monthText) { 
   var months = {
      'Jan' : '01',
      'Feb' : '02',
      'Mar' : '03',
      'Apr' : '04',
      'May' : '05',
      'Jun' : '06',
      'Jul' : '07',
      'Aug' : '08',
      'Sep' : '09',
      'Oct' : '10',
      'Nov' : '11',
      'Dec' : '12'
    } 
   return months[monthText]; 
}
