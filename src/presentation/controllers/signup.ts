import { MissingParamError } from "../erros/missing-param-erro";
import { badRequest } from "../helpers/http-heper";
import { HttpRequest, HttpResponse } from "../protocols/http"


export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {

    if ( !httpRequest.body.name ) {
      
      return badRequest(new MissingParamError('name'))
      
    }
    if ( !httpRequest.body.email ) {
      
      return badRequest( new MissingParamError('email'))
      
    }
    
    
  }
}


function test() {
  
  return { a: 1 };
}
//