// browser.ignoreSynchronization = true; // Comando para executar aplicações não Angular
// browser.sleep(1000); // Comando para fazer o teste esperar em mili segundos

const { browser, element, $ } = require("protractor");

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
        element(by.model("fName")).sendKeys('fNameTest');
        element(by.model("lName")).sendKeys('lNameTest');
        element(by.model("postCd")).sendKeys('377777');
        element(by.css(".btn-default")).click();
        let text = browser.driver.switchTo().alert().getText();
        expect(text).toContain('Customer added successfully with customer id :');
        browser.driver.switchTo().alert().accept();
    }); 
})