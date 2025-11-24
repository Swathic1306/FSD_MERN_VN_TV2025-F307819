 const startExam=(callback)=>{
    setTimeout(()=>{
        console.log("Exam Started")
    },1000)
    callback()
}

const evaluateExam=(callback)=>{
    startExam(()=>{
        setTimeout(()=>{
            console.log("Evaluating Answers")
        },2000)
        callback()
    })
}

const declareResult=()=>{
    evaluateExam(()=>{
        setTimeout(()=>{
            console.log("Result declared")
        },3000)
    })
}
declareResult()