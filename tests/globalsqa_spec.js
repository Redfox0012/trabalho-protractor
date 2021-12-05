// browser.ignoreSynchronization = true; // Comando para executar aplicações não Angular
// browser.sleep(1000); // Comando para fazer o teste esperar em mili segundos

const { browser, element, $ } = require("protractor");
const { createRandomUser } = require("../helpers/globalsqa_helper");

describe('BankingProject', function() {
    beforeEach(function() {
        browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    });

    it('Acessando a url https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login com sucesso', function() {
        let title = $('.mainHeading').getWebElement();
        expect(title.getText()).toEqual('XYZ Bank');
    });

    it('Acessado um usuario já cadastrado (Harry Potter)', function() {
        element(by.css("[ng-click='customer()']")).click();
        element(by.cssContainingText("[ng-model='custId'] option", 'Harry Potter')).click();
        element(by.css('.btn-default')).click();
        let text = $('.fontBig').getWebElement();
        expect(text.getText()).toContain('Harry Potter');
    });

    it('Criando um usuario', function() {
        element(by.css("[ng-click='manager()']")).click();
        element(by.css("[ng-class='btnClass1']")).click();
        element(by.model("fName")).sendKeys('fNameTest');
        element(by.model("lName")).sendKeys('lNameTest');
        element(by.model("postCd")).sendKeys('377777');
        element(by.css(".btn-default")).click();
        let text = browser.driver.switchTo().alert().getText(); // promise
        expect(text).toContain('Customer added successfully with customer id :');
        browser.driver.switchTo().alert().accept();
    });

    it('Criando uma conta para um usuario já existente', function(){
        let user = createRandomUser();
        element(by.css("[ng-click='manager()']")).click();
        element(by.css("[ng-class='btnClass2']")).click();
        element(by.cssContainingText("[ng-model='custId'] [ng-repeat='cust in Customers']", user[0])).click();
        element(by.css("[ng-model='currency'] [value='Dollar']")).click();
        element(by.css("[type='submit']")).click();
        let text = browser.driver.switchTo().alert().getText();
        expect(text).toContain('Account created successfully with account Number :');
        browser.driver.switchTo().alert().accept();
    });
})