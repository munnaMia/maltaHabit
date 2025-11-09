package rest

import (
	"log"
	"net/http"
)

/*
	Start() -
	This function start to listening all the http request.
*/
func Start() {
	mux := http.NewServeMux()

	Routes(mux) // Adding routes into the application serve mux.

	log.Println("Server starting at HTTP PORT : 8080")
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Fatalln("error while starting the server: ", err)
		return
	}
}
