function router(handler,pathname,response) {
    //console.log("Début du traitement de response ", response, ".");
    console.log("Début du traitement de l'URL " + pathname + ".");
	if(typeof handler[pathname] === 'function'){
		handler[pathname](response);
	} else {
		console.log("Aucun gestonnaire associé à " + pathname + ".");
		response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 not found");
        response.end();
	}
}
exports.router = router;