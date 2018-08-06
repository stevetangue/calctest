<h1>CALCTEST fun</h1>

For this exercise, I am using Create React App (reactjs and jest)



In the project directory, calctest/app/ you can run:

### `npm start`
Runs the app in the dev mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.


Recommended using Chrome - works and tested in Firefox and Safari.


//TODO build calculator ui/ux
//TODO refactor validations condition
//TODO debug test "renders without crashing"
//TODO test components (yarn add --dev react-test-renderer)
//TODO try Enzyme (npm i --save-dev enzyme enzyme-adapter-react-16)
//TODO use xpress or restify to mimic this service

[
  { "operation": "add", "arguments": 2, "symbol": "+", "description": "Add" },
  { "operation": "subtract", "arguments": 2, "symbol": "-", "description": "Subtract" },
  { "operation": "multiply", "arguments": 2, "symbol": "*", "description": "Multiply" },
  { "operation": "divide", "arguments": 2, "symbol": "/", "description": "Divide" },
  { "operation": "power", "arguments": 2, "symbol": "^", "description": "Power Of" },
  { "operation": "square_root", "arguments": 1, "symbol": "\u221A", "description": "Square Root" },
  { "operation": "log10", "arguments": 1, "symbol": "log", "description": "Log, Base 10" },
  { "operation": "ln", "arguments": 1, "symbol": "ln", "description": "Log, Natural" },
  { "operation": "pi", "arguments": 0, "symbol": "\u03C0", "description": "\u03C0" },
  { "operation": "e", "arguments": 0, "symbol": "e", "description": "e" }
]

/add?op1=1&op2=2       { "result": 2.0 }
/subtract?op1=3&op2=2  { "result": 1.0 }
/multiply?op1=2&op2=3  { "result": 6.0 }
/divide?op1=12&op2=4   { "result": 3.0 }
/power?op1=2&op2=4     { "result": 16.0}
/square_root?op1=25    { "result": 5.0 }
/log10?op1=100         { "result": 2.0 }
/pi      { "result": 3.141592653589793 }
