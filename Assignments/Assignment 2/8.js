const welcomeUser=((name)=>{
    console.log(`Welcome, ${name}!`)
})
const callfunc=(()=>{
    for(let i=0;i<3;i++){
        welcomeUser("Swathi")
    }
})
callfunc()