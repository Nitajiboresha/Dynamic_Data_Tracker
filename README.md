# Contributing
Feel free to contribute to this project by submitting pull requests or opening issues.
-   READ THE expln.txt files to better understand
-   Feel free to add to the expln.tx files if you want to outline the changes made.

# Dynamic Data Tracker

This is a dynamic data tracker application that allows for the tracking of data such as temperature or humidity. The data is captured from an external device and sent to `localhost:3035`. The application is designed to handle multiple JSON packages dynamically.

## Features
- Tracks data such as temperature or humidity.
- Data is sent from an external device to `localhost:3035`.
- Data is updated every minute.
- A receiving app listens to data from `localhost:3035` and logs it.
- Data is formatted into JSON files.
- The application includes a template to parse data.
- The application is dynamic and allows for multiple JSON packages.

## Folder Structure
Dynamic Data Tracker/
│
├── src/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   ├── scripts/
│   │   ├── main.js
│   │   └── dataParser.js
│   ├── templates/
│   │   └── dataTemplate.json
│   └── data/
│       └── (dynamic json files will be stored here)
│
├── server/
│   ├── server.js
│   └── package.json
│
├── README.md
└── package.json

## Technologies Used:
- HTML
- CSS
- JavaScript
- Node.js
- JSON