const jwt=require('jsonwebtoken')
const config=require('./config')
const result=require('./result')

function authUser(request,response,next){
    const path=request.url
    if(path == '/user/signin' || path == '/user/signup')
        next()
    else{
        const token=request.headers.token
        if(!token)
            response.send(result.creatResult('Token is missing'))
        else{
            try {
                const payload=jwt.verify(token,config.SECRET)
            request.headers.uid=payload.uid
            request.headers.email=payload.email

            next()
            } catch (ex) {
                response.send("Invalid token")
                
            }
            
        }

    }
}

module.exports=authUser