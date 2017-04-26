'use strict'

function prueba(req, res){

	if(req.params.nombre){
		var nombre = req.params.nombre;
	}else{
		var nombre = "Sin Nommbre";
	}


	res.status(200).send({
		data:[1,2,3],
		message: "Hola Mundo COn NodeJs y Express - " + nombre
	});
}

function getFavorito(req,res){
	var favoritoId = req.params.id;

	res.status(200).send({data: favoritoId});
}

function getFavoritos(req,res){
	
}

function saveFavorito(req,res){
	var params = req.body;

	res.status(200).send({favorito: params});
}

function updateFavorito(req,res){
	var params = req.body;

	res.status(200).send({update: true, favorito: params});
}

function deleteFavorito(req,res){
	var favoritoId = req.params.id;

	res.status(200).send({delete: true, data: favoritoId});
}
 
module.exports= {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito

}