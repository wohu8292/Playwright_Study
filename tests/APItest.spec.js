const {test, expect, request} = require('@playwright/test');
const loginPayload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"}
// npx playwright test tests/APItest.spec.js
let token;


test.beforeAll(async()=>{
    const context = await request.newContext();
    const loginResponse = await context.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data: loginPayload,
    })

    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);
})

test("TestingAPI", async({page})=>{
    // const email = "anshika@gmail.com";
    // const password = "Iamking@000";
    // const productName = "Zara Coat 4";

    //login page
    page.addInitScript(value=>{
        window.localStorage.setItem('token', value);
    }, token)

    await page.goto("https://rahulshettyacademy.com/client");
})

