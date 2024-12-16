//status code, response payload, response header, content type, 

const {test, expect} =require("@playwright/test")
const bookingApiRequestBody = require("../../testData/apiTest_Data.json")

test('create POST api request using static request body', async({request})=>{
    //POST
    const postApiResponse = await request.post('/booking', {
        data: bookingApiRequestBody
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

    console.log("==========================================")

    //GET
    const Id = postApiResponseBody.bookingid
    const getApiResponse = await request.get(`/booking/`, {
        params: {
            "firstname": "testers talk cypress",
            "lastname": "teters talk javascript"
        }
    })
    const getApiResponseBody = await getApiResponse.json()
    console.log(getApiResponseBody)
    expect(getApiResponse.ok()).toBeTruthy()
    expect(getApiResponse.status()).toBe(200)
}) 