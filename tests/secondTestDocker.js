const {Builder, By, Key, until} = require('selenium-webdriver');

async function example () {
    try {
    //open browser    
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://localhost:5000');
    await driver.sleep(3000);
    await driver.findElement(By.id('login')).click();
    await driver.sleep(2000);
    //login
    await driver.findElement(By.id('email')).sendKeys('cistije.sutra@gmail.com');
    await driver.findElement(By.id('password')).sendKeys('Seid123.', Key.RETURN);
    await driver.sleep(3000);
    //open unit
    const unitElement = await driver.wait(until.elementLocated(By.id('unit')), 60000);
    await driver.wait(until.elementIsVisible(unitElement), 30000);
    await unitElement.click();
    await driver.sleep(4000);
    const favoriteElement = await driver.findElement(By.id('favorite'));
    const isFavoriteVisible = await favoriteElement.isDisplayed();
    await driver.sleep(2000);

    if (isFavoriteVisible) {
        // 'favorite' element is visible, click it
        await favoriteElement.click();
        await driver.sleep(2000);
        console.log("Favorite clicked");
    } else {
        // 'favorite' element is not visible, handle accordingly
        console.log("'favorite' element is not visible");
    }

    await driver.sleep(3000);
    // Check if the 'remove_favorite' element is visible
    const removeFavoriteElement = await driver.findElement(By.id('remove_favorite'));
    const isRemoveFavoriteVisible = await removeFavoriteElement.isDisplayed();

    if (isRemoveFavoriteVisible) {
        // 'remove_favorite' element is visible, click it
        await removeFavoriteElement.click();
        console.log("Remove favorite clicked");
    } else {
        // 'remove_favorite' element is not visible, handle accordingly
        console.log("'remove_favorite' element is not visible");
    }
    // //fill in form
    // await driver.findElement(By.id('rating')).sendKeys(4);
    // await driver.findElement(By.id('description')).sendKeys('Ovo je selenium test komentar');
    // await driver.sleep(2000);
    // //submit form
    // await driver.findElement(By.id('submitComment')).click();
    // await driver.sleep(2000);
    // await driver.findElement(By.id('confirm')).click();
    // await driver.sleep(4000);
    // //delete comment
    // await driver.findElement(By.id('deleteComment')).click();
    // await driver.sleep(2000);
    // await driver.findElement(By.id('confirm')).click();
    // await driver.sleep(2000);
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