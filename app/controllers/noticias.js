module.exports.noticia = function(app,request,response){

    const conn = app.config.db_con();
    const noticiasModel = new app.app.models.noticiasModel(conn)
    var id_noticia = request.query;

    noticiasModel.getNoticia(id_noticia, (erro, result)=>{

        let array_retorno = {}

        if(erro){
            array_retorno.status  = 'error';
            array_retorno.message = result;
        } else {
            array_retorno.status  = 'success';            
            array_retorno.data    = result;
        }

        response.json(array_retorno)
                
    })

}

module.exports.noticias = function(app,request,response){

    const conn = app.config.db_con()
    const noticiasModel = new app.app.models.noticiasModel(conn)

    noticiasModel.getNoticias((erro, result)=>{

        let array_retorno = {}

        if(erro){
            array_retorno.status  = 'error';
            array_retorno.message = result;
        } else {
            array_retorno.status  = 'success';            
            array_retorno.data    = result;
        }

        response.json(array_retorno)
                        
    })

}