//BASIC CODE BELOW

// var a =7
// var b = 8
// var c = a + b

// console.log("The output is "+c)
// console.log("Hello World")

// END


// HOW TO LOAD IN THE BROWSER

// var http = require('http')

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'})
//     res.end("Welcome to NodeJs")
//     res.end()
// }).listen(8080)

// END

// HOW TO MAKE MODULE which is calculator // Use of require tag// Use of export tag
// var cal = require('./calculator.js') 


// result = cal.add(4,5)

// console.log("The output is "+ result);

// END



// HOW TO READ A FILE // COMMON VARIABLE FOR FILE 
//var fs = require('fs')


// fs.readFile('calculator.js','utf-8', function(err, data){
//     console.log(data)
// })

// END

// HOW TO WRITE A FILE
// fs.writeFile('calculator1.js','MEOW CAT', function(err){
//     console.log("Data Saved")
// })

// END

// So it will create a new file and write in there 
// If the file exists then it will overrride the content in the file with what you have given
// But to append the content at the last 

// HOW TO APPEND A FILE
// fs.appendFile('calculator1.js',"\nDOGGY BHOW BHOW", function(err){
//     console.log("Data Saved")
// })

// END


// HOW TO DELETE A FILE 

// fs.unlink('calculator1.js',function(err){
//     console.log('File Deleted')
// })

// END


//HOW TO USE EXPRESS AND PASS THE VARIABLE IN THE URL
const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Hello World")

})

app.get('/meow', function(req,res){
    const id = req.query.id
    res.send("Meow Cat " +id)
})


app.get('/meow/21', function(req, res){
    res.send("This is Abhinav 21")
})

app.get('/meow/:id', function(req, res){
    const id = req.params.id
    res.send('This is Abhinav '+id)
})

app.listen(9000, function(req,res){
    console.log("Running")
})


// END

