const { element } = require("protractor");

module.exports = {
    createRandomUser : function(){
        let hours = new Date().getHours().toString();
        let minutes = new Date().getMinutes().toString();
        let sec = new Date().getSeconds().toString();
        let userFirstName =  'userFirstName_' + hours + minutes + sec;
        let userlastName = 'userLastName_' + hours + minutes + sec;
        let userPostCode = 'postCode_' + hours + minutes + sec;

        element(by.css("[ng-click='manager()']")).click();
        element(by.css("[ng-class='btnClass1']")).click();
        element(by.model("fName")).sendKeys(userFirstName);
        element(by.model("lName")).sendKeys(userlastName);
        element(by.model("postCd")).sendKeys(userPostCode);
        element(by.css(".btn-default")).click();
        let text = browser.driver.switchTo().alert().getText();
        expect(text).toContain('Customer added successfully with customer id :');
        browser.driver.switchTo().alert().accept();
        element(by.css(".home")).click();
        return [
            userFirstName,
            userlastName,
            userPostCode
        ];
    },
};

