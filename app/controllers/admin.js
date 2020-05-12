module.exports.noticias_salvar = function(app,request,response){

    let noticia_dados = request.body
    let array_retorno = {}

    request.assert('titulo', 'Título é obrigatório').notEmpty()
    request.assert('resumo', 'Resumo é obrigatório').notEmpty()
    request.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100)
    request.assert('autor', 'Autor é obrigatório').notEmpty()
    request.assert('data_noticia', 'Data da noticia é obrigatório').notEmpty()
    request.assert('noticia', 'Noticia é obrigatório').notEmpty()

    let errors = request.validationErrors()

    if(errors){
        array_retorno.status  = 'error';
        array_retorno.message = errors;
        response.json(array_retorno)
    }
    
    const conn          = app.config.db_con()
    const noticiasModel = new app.app.models.noticiasModel(conn)

    noticiasModel.salvarNoticia(noticia_dados,(erro, result)=>{
        
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