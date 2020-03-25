import {
  tryCatch,
  Either,
  left,
  right,
  isRight,
  either,
} from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/pipeable';

const unsafeJSONParse: (unknownString: string) => object = JSON.parse;

const jsonParse = (unknownString: string): Either<string, object> =>
  tryCatch(() => JSON.parse(unknownString), (e: Error) => e.message);

// Cumbersome example!

let locked = false;
const lockSomeResource = (
  eitherR: Either<string, any>
): Either<string, any> => {
  if (isRight(eitherR)) {
    locked = true;
    return right({});
  }
  return left('oops!');
};

const unlockSomeResource = (
  eitherR: Either<string, any>
): Either<string, void> =>
  isRight(eitherR)
    ? left('Try to unlock the resource but we failed')
    : left('Something upstream failed, we do not have a resource to unlock');

const doSomethingCoolButDangerous = (
  eitherR: Either<string, any>
): Either<string, any> =>
  isRight(eitherR) ? left('You got burned!') : left('You got burned!');

const myFunction1 = (resource: Either<string, any>) => {
  return pipe(
    lockSomeResource(resource),
    doSomethingCoolButDangerous,
    unlockSomeResource
  );
};

myFunction1(either.of('resource'));
