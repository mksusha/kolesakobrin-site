import puppeteer from 'puppeteer';
import {supabase} from './supabaseClient.js';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

function isValidRadius(radius) {
    return /^\d+$/.test(radius);
}

async function scrapeTiresData() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();


    for (let i = 69; i <= 123; i++) {
        const pageURL = `https://bagoria.by/legkovye-shiny/?nav=page-${i}`;

        await page.goto(pageURL, {waitUntil: 'domcontentloaded'});

        await delay(5000);

        await page.waitForSelector('.size a.link-style');


        const tiresData = await page.evaluate(() => {
            const tires = [];

            document.querySelectorAll('div.size').forEach((element) => {
                const sizeElement = element.querySelector('a.link-style');
                if (!sizeElement) return;

                const size = sizeElement.textContent.trim();
                const [width, height, radius] = size.split(/[\/R]/);


                const quantityElement = element.closest('.accordion-manufacturers__main_left')?.querySelector('.index');
                const type = quantityElement ? quantityElement.textContent.trim() : '';

                tires.push({
                    width,
                    height,
                    radius,
                    type
                });
            });

            return tires;
        });


        const validTiresData = tiresData.filter(tire => isValidRadius(tire.radius));

        if (validTiresData.length > 0) {

            const {error: insertError} = await supabase
                .from('new_tires')
                .insert(validTiresData);

            if (insertError) {
            } else {
            }
        } else {
        }

        await delay(10000);
    }

    await browser.close();
}

scrapeTiresData();
