import { test, expect } from '../../fixtures/test-data-fixtures'

// import test from "@playwright/test";

test.describe('Students', () => {
  test('Create a new student using Post', async ({ request, studentsData }) => {
    const response = await request.post(process.env.API_ENDPOINT, {
      // headers: {
      //   Accept: 'application/json',
      //   Authorization: 'Bearer 123123123123123'
      // }
      data: studentsData.postRequestBody,
    })

    const statusCode = response.status()
    console.log('Status code: ' + statusCode)

    expect(response.ok()).toBeTruthy()

    const responseBody = await response.json()
    console.log(responseBody)
    console.log(responseBody.FIRST_NAME)
  })
})
