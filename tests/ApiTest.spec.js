const {test, expect, request} = require("@playwright/test")

let token

const loginPayload={
    userEmail:"anshika@gmail.com",
    userPassword:"Iamking@000"
}

//get token 
test.beforeAll(async()=>{
    const apiContext = await request.newContext()
    //request and get response
    const loginResponse = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            //payload, header...
            data: loginPayload,
        })
    expect(loginResponse.ok()).toBeTruthy()
    const loginResponseJson  = await loginResponse.json()
    token =loginResponseJson.token
    console.log(token)
})

test("apiTesting", async({page})=>{
    //set token into localStorage before page loading
    page.addInitScript(value=>{window.localStorage.setItem('token', value)}, token)
    await page.goto("https://rahulshettyacademy.com/client")
    await expect(page).toHaveTitle("Let's Shop")
    await page.waitForTimeout(5000)
})