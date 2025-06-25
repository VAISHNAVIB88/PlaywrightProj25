function launchBrowser(browserName) {
    if (browserName.toLowerCase() === "chrome") {
      console.log("Launching Chrome browser...");
    } else {
      console.log(`Launching ${browserName} browser...`);
    }
  }
  
  function runTests(testType) {
    switch (testType.toLowerCase()) {
      case "smoke":
        console.log("Running Smoke tests...");
        break;
      case "sanity":
        console.log("Running Sanity tests...");
        break;
      case "regression":
        console.log("Running Regression tests...");
        break;
      default:
        console.log("Running Default: Smoke tests...");
        break;
    }
  }
  
  // Function Calls (Test the functions)
  launchBrowser("chrome");     // Expected: Launching Chrome browser...
  launchBrowser("firefox");    // Expected: Launching firefox browser...
  
  runTests("sanity");          // Expected: Running Sanity tests...
  runTests("load");            // Expected: Running Default: Smoke tests...