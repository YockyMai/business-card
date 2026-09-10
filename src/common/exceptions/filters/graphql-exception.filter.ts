import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { GraphQLError } from 'graphql';

@Catch(Error)
export class GraphQLExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const type = host.getType();

    if (type === 'http') {
      return exception;
    }

    if ('getStatus' in exception) {
      const status = (exception as HttpException).getStatus?.() || 500;
      return new GraphQLError(exception.message, {
        extensions: { code: status, stacktrace: exception.stack },
      });
    }

    return exception;
  }
}
