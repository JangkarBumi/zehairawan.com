---
date: 2020-08-22
title: 'Building Quiz App with Firebase'
---

- Populate firebase with google sheets

```
function writeDataToFirebase() {
  var ss = SpreadsheetApp.openById("your_spreadsheet_id");
  var sheet = ss.getSheets()[0];
  var data = sheet.getDataRange().getValues();
  var dataToImport = {};
  for(var i = 1; i < data.length; i++) {
    var question_id = data[i][0];
    dataToImport[question_id] = {
     question_id: data[i][0],
     question_text:data[i][1],
     answer:data[i][2],
     question_title:data[i][3],
      hashtags:data[i][4],
      topics_algebra:data[i][5],
      topics_geometry:data[i][6],
      topics_trignometry:data[i][7],
      topics_arithmetic:data[i][8],
      calculator:data[i][9],
      answer_type: data[i][10],
      chart:data[i][11],
      length:data[i][12],
    };
  }
  var firebaseUrl = "your_firebase_url";
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);
  base.setData("", dataToImport);
}
```

- For some reason there is no built in feature to modify your database structure, i had to export the data as json, modify it in vscode and upload it again.

- Dont mixed up the firestore and realtime database documentation. This tricked me for a while

```
.where('state', '==', 'CA');
```

Wont work in realtime database, Use this instead

```
.orderByChild(order)
.equalTo(params)
```