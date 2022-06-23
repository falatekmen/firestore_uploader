# Upload a JSON to Firestore

## Build

Download the project:

    git clone https://github.com/falatekmen/upload_json_to_firestore.git
    
Go to the project folder and run:

    npm install

Open your project in [Firebase](https://console.firebase.google.com). Click Setting > Project Settings > Service Accounts. Copy the databaseURL in the Admin SDK configuration snippet and click `Generate new private key`.

<img width="700" alt="image" src="https://user-images.githubusercontent.com/81239267/175347065-a524b185-fe55-4304-8b36-eafcbc3023ea.png">

Add the databaseURL to uploader.js. If there is no databaseURL in Service Accounts, click Project Settings > General and add the Project ID number there to PROJECT_ID in the uploader.js.

<img width="700" alt="image" src="https://user-images.githubusercontent.com/81239267/165651338-f8bcc84d-adc1-44d7-8f70-363ebe126b94.png">

Open the downloaded Private Key and copy the content to the service_key.json file.

<img width="550" alt="image" src="https://user-images.githubusercontent.com/81239267/165651596-b50012c2-1e64-4876-ae0b-58649af114df.png">


## Usage

Add the data to be uploaded to the files/appData.json.

<img width="550" alt="image" src="https://user-images.githubusercontent.com/81239267/165654482-2b5ec2fd-a823-4c05-b89c-0226c65c50dc.png">

Enter the collection and document name in the uploader.js file.

<img width="700" alt="image" src="https://user-images.githubusercontent.com/81239267/165655433-9857ffb5-b0a6-4230-9ed4-cda3c3fc6161.png">

To start the upload process, run:

    node uploader.js
    
<ins>Note</ins>

Nested arrays like below are not supported in the Cloud Firestore.

    {
      "data": [
        [
          "yT63E",
          true
        ],
        [
          "7bhse",
          false
        ]
      ]
    }
