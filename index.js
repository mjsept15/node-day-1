const express = require('express')
const data = require('./data.json')
const app = express()

app.get('/api/users', (req,res, next) =>{
    res.status(200).send(data)
})

//parameters
app.get('/api/users/:id', (req,res,next) =>{
    const {id} = req.params
    const foundUser = data.filter(user => {
        return user.id == parseInt(id)
    })
    res.status(200).send(foundUser)
})

app.get('/api/get_school/:school', (req,res,next) =>{
    const {school} = req.params
    const {email} = req.query
    console.log(email)

    if(email){
        const foundUser = data.filter(user =>{
            return user.school === school && user.email.includes(email)
        })
        res.status(200).send(foundUser)
    } else{

    const foundUser = data.filter(user =>{
        return user.school === school
    })
   
    res.status(200).json(foundUser)
    }

})

const port = 4000
app.listen(port,() => console.log(`listening on port ${port}` ) )


