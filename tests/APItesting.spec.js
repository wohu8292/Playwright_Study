import{test,expect} from "@playwright/test"
//npx playwright test tests/APItesting.spec.js --ui

test("Post API Testing Demo", async({request})=>{
    const response = await request.post("https://reqres.in/api/users",{
        data:{
            "name": "Raghav",
            "job": "leader"
        }
    })

    await expect(response.status()).toBe(201)

    const text = await response.text()
    await expect(text).toContain('Raghav')
})

test("Get API Testing Demo", async({request})=>{
    const response = await request.get("https://reqres.in/api/users/2")

    await expect(response.status()).toBe(200)

    const text = await response.text()
    await expect(text).toContain('Janet')

    await console.log(await response.json())
})