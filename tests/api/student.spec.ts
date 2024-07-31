import { test, expect } from '../../fixtures/test-data-fixtures'
import compareResponseWithRequest from '../../helpers/compareResponseWithRequest'
import runQuery from '../../helpers/dbUtils'

test.describe.configure({mode: 'serial'})

test.describe('Students', () => {
  let studentId

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

    studentId = responseBody.STUDENT_ID
    console.log(studentId + ' THIS IS MY STUDENT ID')

    // for(const key in studentsData.postRequestBody) {
    //   expect(responseBody[key]).toBe(studentsData.postRequestBody[key])
    // }

    compareResponseWithRequest(responseBody, studentsData.postRequestBody)

    const query = `SELECT * FROM students WHERE email = '${studentsData.postRequestBody.EMAIL}'`

    const result = await runQuery(query)
    console.log(result)

    expect(result).toBeDefined()
    expect(result.length).toBe(1)
  })

  test('Get the created user', async ({ request, studentsData }) => {
    console.log(`${process.env.API_ENDPOINT}/${studentId}`)
    const response = await request.get(`${process.env.API_ENDPOINT}/${studentId}`)

    expect(response.ok()).toBeTruthy()

    const responseBody = await response.json()

    compareResponseWithRequest(responseBody, studentsData.postRequestBody)
  })


  test('Update a request using PUT', async ({ request, studentsData }) => {
    const response = await request.put(`${process.env.API_ENDPOINT}/${studentId}`, {
      data: studentsData.putRequestBody
    })

    expect(response.ok()).toBeTruthy()
    const responseBody = await response.json()
    console.log(JSON.stringify(responseBody, null, 2))
  })

  test('Delete the user using DELETE', async ({ request, studentsData }) => {
    const response = await request.delete(`${process.env.API_ENDPOINT}/${studentId}`)
    expect(response.ok()).toBeTruthy()
  
    const query = `SELECT * FROM students WHERE email = '${studentsData.putRequestBody.EMAIL}'`
    const result = await runQuery(query)

    expect(result.length).toBe(0)
  })
})