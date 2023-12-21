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
    //open navigation tab
    await driver.findElement(By.id('ime')).click();
    await driver.sleep(2000);
    //logout
    await driver.findElement(By.id('edit')).click();
    await driver.sleep(2000);
    await driver.findElement(By.id('name')).sendKeys('Seid Selenium');
    await driver.sleep(2000);
    await driver.findElement(By.id('surname')).sendKeys('Selenium');
    await driver.sleep(2000);
    await driver.findElement(By.id('update')).click();
    await driver.sleep(2000);
    await driver.findElement(By.id('confirm')).click();
    await driver.sleep(5000);

} catch (error) {
    console.log(error)
}
}

example();