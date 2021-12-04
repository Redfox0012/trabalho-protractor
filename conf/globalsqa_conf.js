// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome',
      //headless
      //'chromeOptions': { 
      //  'args': [ '-headless' ] 
      //},
    },

    
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../tests/globalsqa_spec.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },

    onPrepare: function() {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));
    }
  };
  