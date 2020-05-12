module.exports = (app)=>{

    app.get('/',(request,response)=>{
        app.app.controllers.home.home(app,request, response)
    })

}