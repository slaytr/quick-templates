import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

// Middleware for parsing JSON
app.use(express.json())

// Sample route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!')
})

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
