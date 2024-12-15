//status code, response payload, response header, content type, 

const {test, expect} =require("@playwright/test")

test('create POST api request using static request body', async({request})=>{
    const postApiResponse = await request.post('/booking', {
        data: {
            "firstname": "testers talk playwright",
            "lastname": "testers talk api testing",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01",
            },
            "additionalneeds": "super bowls"
        }
    })

    //log response body
    const postApiResponseBody = await postApiResponse.json()
    console.log(postApiResponseBody)

    //validate status code
    expect(postApiResponse.ok()).toBeTruthy()
    expect(postApiResponse.status()).toBe(200)

    //validate response body
    expect(postApiResponseBody.booking).toHaveProperty("firstname", "testers talk playwright")
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin", "2018-01-01")
})