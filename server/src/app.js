let express = require('express')
const app = express()
let bodyParser = require('body-parser')
const {sequelize} = require('./models')
const config = require('./config/config')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./routes')(app)

let port = process.env.PORT || config.port
sequelize.sync({force: false}).then(() => {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
})



// create user
app.post('/user/', function (req, res) {
    res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
})
// edit user
app.put('/user/:userId', function (req, res) {
    res.send('ทำการแก้ไขผุ้ใช้งาน: ' + req.params.userId + ' : ' +
    JSON.stringify(req.body))
})
// delete user
app.delete('/user/:userId', function (req, res) {
    res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' +
    JSON.stringify(req.body))
})