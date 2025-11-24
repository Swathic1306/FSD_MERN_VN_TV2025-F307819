const person1=300
const person2=500
const func=((p1,p2)=>{
    let diff=0
    if(p1>p2){
        diff=p1-p2
    }
    else{
        diff=p2-p1
    }
    person1>person2? console.log(`Person1 earns ${diff} more than person2`) : console.log(`Person2 earns ${diff} more than person1`)    
}
)
func(person1,person2)