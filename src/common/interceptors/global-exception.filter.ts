import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ErrorsEnum } from '../enums/errors.enum';
import { getLastWord } from '../utils/functions/get-last-word';
import { GlobalResponseStatusEnum } from '../utils/functions/global-response-status.enum';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const logger = new Logger('Exeptions Logger');
    logger.error(exception, exception.stack);

    let message = exception.message || ErrorsEnum.internal_server_error;

    if (exception.code && exception.code.toString() === '23503') {
      const table = getLastWord(message);
      return response.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: ErrorsEnum.item_has_usage,
        error: `Cannot delete or update this item because it is used in ${table}`,
      });
    }

    if (exception.code && exception.code.toString() === '23505') {
      return response.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: exception.message || ErrorsEnum.internal_server_error,
        error: ErrorsEnum.duplicate_item,
      });
    }

    if (
      exception.response &&
      exception.status === 400 &&
      exception.response.message.length &&
      exception.response.error
    ) {
      message = ErrorsEnum.invalid_input;
    }

    return response.status(status).json({
      status: GlobalResponseStatusEnum.error,
      statusCode: status,
      message,
      data: null,
      errors:
        exception.response &&
        exception.response.message.length &&
        exception.response.error &&
        exception.status === 400
          ? exception.response.message
          : ((exception.response && exception.response.error) ?? undefined),
    });
  }
}
