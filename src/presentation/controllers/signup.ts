import { MissingParamError } from "../erros/missing-param-erro";
import { badRequest } from "../helpers/http-heper";
import { Controller } from "../interfaces/controller";
import { HttpRequest, HttpResponse } from "../interfaces/http"


export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    
    const requiredField = ['name', 'email', 'password']

    for ( const field of requiredField ) {
       
      if ( !httpRequest.body[ field ] ) {
      
        return badRequest( new MissingParamError(field))
        
      }
    }
    
  }
}

function test() {
  
  return { a: 1 };
}
