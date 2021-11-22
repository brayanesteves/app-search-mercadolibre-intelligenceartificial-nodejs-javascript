/**
 * 0) Create browser (Puppeteer)
 */
const puppeteer = require('puppeteer');

const urlParse  = "https://listado.mercadolibre.com.uy/inmuebles/apartamentos/alquiler/montevideo";

/**
 * 0) Create browser (Puppeteer)
 */
const options = { headless: false };

/**
 * Create one browser created and return reference at browser created
 */
puppeteer.launch(options).then((browser) => {
    /**
     * A) Begin use browser
     */
    /**
     * 2) Create new tab (Puppeteer)
     */
    browser.newPage().then((page) => {
        /**
         * Page create it's browser, show resolution [1920 x 1080]
         */
        page.setViewport({
                       width:1920,
                      height:1080,
            deviceScaleFacto:1, // Zoom
        }).then(() => {            
            /**
             * Move a page to URL
             */
            page.goto(urlParse);
        });
    });
    /**
     * B) No use
     */

});

/**
 * 1) Save browser created in variable 'browser' (Puppeteer)
 */

/**
 * 2) Create new tab (Puppeteer)
 */
//browser.newPage();