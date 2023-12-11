const {Builder, By, Key, until} = require('selenium-webdriver');

async function example () {
    try {
    //open browser    
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://localhost:4200/login');
    //login
    await driver.findElement(By.id('email')).sendKeys('cistije.sutra@gmail.com');
    await driver.findElement(By.id('password')).sendKeys('Seid123.', Key.RETURN);
    await driver.sleep(5000);
    //open unit
    const unitElement = await driver.wait(until.elementLocated(By.id('unit')), 10000);
    await driver.wait(until.elementIsVisible(unitElement), 10000);
    await unitElement.click();
    await driver.sleep(4000);
    //fill in form
    await driver.findElement(By.id('rating')).sendKeys(4);
    await driver.findElement(By.id('description')).sendKeys('Ovo je selenium test komentar');
    await driver.sleep(2000);
    //submit form
    await driver.findElement(By.id('submitComment')).click();
    await driver.sleep(2000);
    await driver.findElement(By.id('confirm')).click();
    await driver.sleep(2000);
    //delete comment
    await driver.findElement(By.id('deleteComment')).click();
    await driver.sleep(2000);
    await driver.findElement(By.id('confirm')).click();
    await driver.sleep(2000);
    //open navigation tab
    await driver.findElement(By.id('ime')).click();
    await driver.sleep(2000);
    //logout
    await driver.findElement(By.id('logout')).click();
    await driver.sleep(2000);

} catch (error) {
    console.log(error)
}
}

example();