import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus()

    
    if(exception.getStatus() === 500) return {message: 'I think Un handle Exception'}
    const result: any = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url
    }
    
    if(request.body){
      result.body = request.body
    }

    response
      .status(status)
      .json(result)
    throw new Error("Method not implemented.");
  }


}