// Comando para executar aplicações não Angular
// browser.ignoreSynchronization = true;
// browser.sleep(1000); // Comando para 
const { browser, element, $ } = require("protractor");
const { DriverProvider } = require("protractor/built/driverProviders");
const { Alert } = require("selenium-webdriver");

describe('BankingProject', function() {
    beforeEach(function() {
        browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    });

    it('Acessando a url https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login com sucesso', function() {
        let title = $('.mainHeading').getWebElement();
        expect(title.getText()).toEqual('XYZ Bank');
    });

    it('Acessado a conta de um usuario já cadastrado (Harry Potter)', function() {
        element(by.css("[ng-click='customer()']")).click();
        element(by.cssContainingText("[ng-model='custId'] option", 'Harry Potter')).click();
        element(by.css('.btn-default')).click();
        let text = $('.fontBig').getWebElement();
        expect(text.getText()).toContain('Harry Potter');
    });

    it('Criando um usuario', function() {
        element(by.css("[ng-click='manager()']")).click();
        element(by.css("[ng-class='btnClass1']")).click();
        browser.sleep(1000);
        element(by.model("fName")).sendKeys('fNameTest');
        browser.sleep(2000);
        element(by.model("lName")).sendKeys('lNameTest');
        browser.sleep(2000);
        element(by.model("postCd")).sendKeys('377777');
        browser.sleep(2000);
        element(by.css(".btn-default")).click();
        let text = browser.driver.switchTo().alert().getText();
        expect(text).toContain('Customer added successfully with customer id :');
        browser.driver.switchTo().alert().accept();
        browser.sleep(4000);
    }); 
})