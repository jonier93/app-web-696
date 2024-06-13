import Express from 'express'
import Path from 'path'

const app = Express()
const dir = Path.resolve()
const dir_front = "frontend/build"

app.use(Express.static(dir_front))
app.use(Express.json())
app.use(Express.urlencoded({}))


app.listen('5000', function(){
    console.log("Server has started")
})

app.get('/', function(req, res){    
    res.sendFile(dir + "/" + dir_front + "/index.html")
})

app.get("/register_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/index.html")
})

app.get("/consult_page", (req, res)=>{
    res.sendFile(dir + "/" + dir_front + "/index.html")
})

app.get("/contact_page", (req, res)=>{
    res.sendFile(dir + "/" + dir_front + "/index.html")
})

app.post("/register_user", function(req, res){
    let {name, lastname, id} = req.body
    console.log(name + " " + lastname + " " + id)
    res.redirect("/")
})