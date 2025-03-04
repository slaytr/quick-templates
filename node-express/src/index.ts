import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const app = express()
const port = process.env.PORT
const externalUrl = process.env.EXTERNAL_URL as string

// Middleware for parsing JSON
app.use(express.json())

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!')
})

app.get('/external', async (req: Request, res: Response) => {
  const response = await axios.get(`${externalUrl}/ping`)
  res.send(response.data)
})

// Start the server
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

export default server
