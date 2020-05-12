module.exports.home = function(app,request, response){

    

    var conn = app.config.db_con()
    const noticias_model = new app.app.models.noticiasModel(conn);

    noticias_model.getUltimasNoticias((erro,result)=>{     
        
        let array_retorno = {}

        if(erro){
            array_retorno.status  = 'error';
            array_retorno.message = result;
        } else {
            array_retorno.status  = 'success';            
            array_retorno.data    = result;
        }

        response.json(array_retorno)
        
        //response.render('home/index', { 'ultimas_noticias' : result })
    });


}