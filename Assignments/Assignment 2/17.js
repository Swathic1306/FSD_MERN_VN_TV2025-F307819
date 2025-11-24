const downloadFile=(filename,callback)=>{
    setTimeout(()=>{
        console.log(`Downloading ${filename}......`)
    },1000)
    callback()
}
const complete=()=>{
    downloadFile("Harry_Potter_Chapter_1",()=>{
        setTimeout(()=>{
            console.log("Download Completed!")
        },2000)
    })
}
complete()