//status code, response payload, response header, content type, 

const {test, expect} =require("@playwright/test")
const { faker } = require('@faker-js/faker');
const { DateTime } = require("luxon")

test('create POST api request using static request body', async({request})=>{
    
    const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const totalPrice = faker.number.int(1000)
        const checkIn = DateTime.now().toFormat('yyyy-MM-dd')
        const checkOut = DateTime.now().plus({day:5}).toFormat('yyyyy-MM-dd')
    
    const postApiResponse = await request.post('/booking', {
        data: {
            "firstname": firstName,
            "lastname": lastName,
            "totalprice": totalPrice,
            "depositpaid": true,
            "bookingdates": {
                "checkin": checkIn,
                "checkout": checkOut,
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
    expect(postApiResponseBody.booking).toHaveProperty("firstname", firstName)
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin", checkIn)
})