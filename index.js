const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');

async function bot() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const baseCoin = readlineSync.question('Informe uma moeda base para fazer a conversão: ') || 'dolar';
    const targetCoin = readlineSync.question('Informe uma moeda final para ver o valor convertido: ') || 'real';
    const oneCoinIntoAnotherUrl = `https://www.google.com/search?q=${baseCoin}+para+${targetCoin}&oq=${baseCoin}+para+${targetCoin}&aqs=chrome..69i57.4199j0j1&sourceid=chrome&ie=UTF-8`;
    await page.goto(oneCoinIntoAnotherUrl);

    const resultado = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value;
    });

    console.log(`O valor de 1 ${baseCoin} em ${targetCoin} é: ${resultado} `)
  
  await browser.close();
}

bot();
