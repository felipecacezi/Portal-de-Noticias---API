function Noticias(conn){
    this._conn = conn;
}

Noticias.prototype.getNoticias =  function (callback){

    this._conn.query(`select    id_noticia,
                                titulo,
                                noticia,
                                date_format(data_criacao, '%d/%m/%Y') data_criacao,
                                resumo,
                                autor,
                                date_format(data_noticia, '%d/%m/%Y') data_noticia

                                from noticias`, callback)
}

Noticias.prototype.getNoticia = function (id_noticia, callback){  

    this._conn.query(`select    id_noticia,
                                titulo,
                                noticia,
                                date_format(data_criacao, '%d/%m/%Y') data_criacao,
                                resumo,
                                autor,
                                date_format(data_noticia, '%d/%m/%Y') data_noticia
    
                        from noticias where id_noticia = ${id_noticia.id_noticia}`, callback)
}

Noticias.prototype.salvarNoticia = function (noticia_dados, callback){
    this._conn.query(`insert into noticias set ? `, noticia_dados, callback)
}

Noticias.prototype.getUltimasNoticias = function(callback){    
    this._conn.query(`select    id_noticia,
                                titulo,
                                noticia,
                                date_format(data_criacao, '%d/%m/%Y') data_criacao,
                                resumo,
                                autor,
                                date_format(data_noticia, '%d/%m/%Y') data_noticia 
    
                        from noticias order by id_noticia desc limit 5 `, callback)   
}

module.exports = ()=>{
    return Noticias;
}