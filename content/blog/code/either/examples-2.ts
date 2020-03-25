import {
  either,
  map,
  mapLeft,
  bimap,
  chain,
  tryCatch,
  fold,
} from 'fp-ts/lib/Either';
import { identity } from 'fp-ts/lib/function';
import { pipe } from 'fp-ts/lib/pipeable';

let locked = false;
const lockSomeResource = (res: string): any => {
  locked = true;
  return {};
};

const unlockSomeResource = (res: any): void => {
  throw new Error('Try to unlock the resource but we failed');
};

const doSomethingCoolButDangerous = (res: any): any => {
  throw new Error('You got burned!');
};

const myFunction1 = (resource: string) => {
  return pipe(
    either.of(resource),
    map(lockSomeResource),
    mapLeft(() => {
      console.log('this never runs!');
      return {} as any;
    }),
    chain(res =>
      tryCatch(
        () => doSomethingCoolButDangerous(res),
        (e: Error) => ({ e, res })
      )
    ),
    bimap(
      ({ e, res }) =>
        tryCatch(
          () => unlockSomeResource(res),
          (_e: Error) => `Our final result, ${e.message} and ${_e.message}`
        ),
      (res: any) =>
        tryCatch(() => unlockSomeResource(res), () => 'Not our final result')
    ),
    fold(identity, identity)
  );
};

console.log(myFunction1('resource'));
