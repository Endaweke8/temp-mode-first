const http=require('http')



const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.end("Welcome to home Page")
}
if(req.url==='/about'){
    res.end("This is our brief short story to reach this")
}
res.end(`<h1>Oops!!!</h2> 
<p>We cannot find the path you are looking for</p>
<a href="/">Back Home</a>
`)
})


server.listen(5000)





// const {readFile,writeFile}=require('fs')

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(`Hello dear the error is ${err}`)
//     }
//     else{
//         console.log(result)
//     }
// })
// const first=result



// readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(`Hello dear the error is ${err}`)
//     }
//     else{
//         console.log(result)
//     }
// })

// const second=result

// writeFile('./content/result-async.txt',`Here is the result ${first},${second}`,'utf8',(err,result)=>{
//     if(err){
//         console.log(`Hello dear the error is ${err}`)
//     }
//     else{
//         console.log(result)
//     }
// })








// const {readFileSync,writeFileSync}=require('fs')

// const first=readFileSync('./content/first.txt','utf8')
// const second=readFileSync('./content/second.txt','utf8')


// console.log(first,second)
// writeFileSync('./content/result-sync',`Hello gentle man this is the result of : ${first}, ${second}`,{flag:'a'})


// const path=require('path')

// console.log(path.sep)

// const filePath=path.join('/content','subfolder','text.txt')
// console.log(filePath)


// const base=path.basename(filePath)

// console.log(base)





// const os =require('os')

// const user=os.userInfo()

// console.log(user)


// console.log(`The sysetm uptime is ${os.uptime()} seconds`)

// const currOs={
//     name:os.type(),
//     release:os.release(), 
// }

// console.log(currOs)


























// const names=require('./4-names')
// const method=require('./5-utils')
// const data=require('./6-alternative-falvor')

// // console.log(data.items[0])

// // console.log(method("Endawek Enkauhone"))

// // console.log(names.john)

// require('./7-mind-garand')

