const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
const port = process.env.PORT || 5000

app.listen(port,() =>{
    console.log("Server listening on port "+port )
} )


app.post('/' ,(req,res) =>{
    const {code} = req.body 


    const params = new URLSearchParams({
        "code":code,
        "client_secret":"24ac7ee266107c763b75330699ea34fcde5b9d3b",
        "client_id":"41143e99a909b42b5823"

    })

    fetch("https://github.com/login/oauth/access_token",{
        method:"POST",
        body: params,
        headers:{
            "Accept" : "application/json"
        }
    })
    .then(response => response.json())
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        console.log(err)
    })

})