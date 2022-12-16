const pup = require('puppeteer');
const fs = require('fs');

(async function() {
    // init the desired page in Chrome
    const browser = await pup.launch( {headless: false} );
    const page = await browser.newPage();
    await page.goto('http://ideonomy.mit.edu/essays/traits.html')

    // scrape the traits into 3 lists
    const data = await page.evaluate(function() {
        const siteTraits = document.querySelectorAll('ol');

        const traitList = [[], [], []];

        for (i = 0; i < siteTraits.length; i++) {
            currList = siteTraits[i].querySelectorAll('li');
            for (j = 0; j < currList.length; j++) {
                traitList[i].push(currList[j].innerText)
            }
        }


        return traitList;
    })

    const traitsJSON = {traits: data}

    //
    const saveData = (traitsJSON) => {
        const finished = (error) => {
            if(error) {
                console.error(error);
                return;
            }
        }

        const jsonData = JSON.stringify(traitsJSON);
        fs.writeFile('traitList.json', jsonData, finished);
    }

    saveData(traitsJSON);
    console.log(data);
})();