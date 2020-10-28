import { MissingParamError } from "../erros/missing-param-erro";
import { badRequest } from "../helpers/http-heper";
import { HttpRequest, HttpResponse } from "../protocols/http"


export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    
    const requiredField = ['name', 'email', 'password']

    for ( const field of requiredField ) {
       
      if ( !httpRequest.body[ field ] ) {
      
        return badRequest( new MissingParamError(field))
        
      }
    }
    
  }
}
//

function test() {
  
  return { a: 1 };
}
//