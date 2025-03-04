import request from 'supertest'
import dotenv from 'dotenv'
import app from '../src'

dotenv.config()

describe('GET /', () => {

  afterAll(() => app.close())

  it('should return Hello, TypeScript with Express!', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello, TypeScript with Express!')
  })
})