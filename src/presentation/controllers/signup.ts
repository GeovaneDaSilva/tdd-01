import { HttpRequest, HttpResponse } from "../protocols/http"


export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {

    if ( httpRequest.body.nam ) {
      
      return {
        statusCode: 400,
        body : new Error('Missing params: name')
  
      }
      
    }
    if ( !httpRequest.body.email ) {
      
      return {
        statusCode: 400,
        body : new Error('Missing params: email')
  
      }
      
    }
    
    
  }
}
//