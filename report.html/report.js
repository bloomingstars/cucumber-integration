$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFile/exercise.feature");
formatter.feature({
  "name": "Test Login functionality",
  "description": "Description: Registered User can use login credentials to get logged in to Testmeapp\nusername-swathi\npassword-password",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "users open testmeApp",
  "keyword": "Given "
});
formatter.match({
  "location": "exercise1.users_open_testmeApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"swathi\"",
  "keyword": "When "
});
formatter.match({
  "location": "exercise1.user_enters_username_as(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"userNme\"}\n  (Session info: chrome\u003d75.0.3770.80)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027CDC2-D-CHNTXJ2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\TRAINI~1.01\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:2504}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.80, webStorageEnabled: true}\nSession ID: 2edd14512cd6315360e1576124b37a46\n*** Element info: {Using\u003did, value\u003duserNme}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat cucumber.First.exercise1.user_enters_username_as(exercise1.java:30)\r\n\tat ✽.user enters username as \"swathi\"(FeatureFile/exercise.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters password as \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "exercise1.user_enters_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks login button",
  "keyword": "When "
});
formatter.match({
  "location": "exercise1.user_clicks_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verifies login success",
  "keyword": "And "
});
formatter.match({
  "location": "exercise1.verifies_login_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close Testmeapp",
  "keyword": "Then "
});
formatter.match({
  "location": "exercise1.close_Testmeapp()"
});
formatter.result({
  "status": "skipped"
});
});