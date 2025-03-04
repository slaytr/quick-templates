import request from 'supertest'
import dotenv from 'dotenv'
import nock from 'nock'
import app from '../src'

dotenv.config()
const externalUrl = process.env.EXTERNAL_URL as string

// quick test ref
describe('GET /', () => {

  afterAll(() => app.close())

  it('should return Hello, TypeScript with Express!', async () => {
    // test api request
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello, TypeScript with Express!')
  })

  it('should return pong', async () => {
    // test api request with mocked api request
    const externalNock = nock(externalUrl)
    externalNock.get('/ping').reply(200, 'pong')

    const response = await request(app).get('/external')

    expect(response.status).toBe(200)
    expect(response.text).toBe('pong')
  })
})