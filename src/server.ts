import express from 'express'

import cors from 'cors'
import dotenv from 'dotenv'

import {v1} from './api/index'

const app = express()
const port = process.env.PORT ?? 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())




// api versions
app.use('/api/v1', v1)



app.listen(port, () => {
    console.log(`Server is running. Host: http://localhost:${port}`)
})


