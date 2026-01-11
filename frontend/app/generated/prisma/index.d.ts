
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model UserBook
 * 
 */
export type UserBook = $Result.DefaultSelection<Prisma.$UserBookPayload>
/**
 * Model AuthorBook
 * 
 */
export type AuthorBook = $Result.DefaultSelection<Prisma.$AuthorBookPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReadingStatus: {
  WANT_TO_READ: 'WANT_TO_READ',
  CURRENTLY_READING: 'CURRENTLY_READING',
  READ: 'READ'
};

export type ReadingStatus = (typeof ReadingStatus)[keyof typeof ReadingStatus]

}

export type ReadingStatus = $Enums.ReadingStatus

export const ReadingStatus: typeof $Enums.ReadingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBook`: Exposes CRUD operations for the **UserBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBooks
    * const userBooks = await prisma.userBook.findMany()
    * ```
    */
  get userBook(): Prisma.UserBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authorBook`: Exposes CRUD operations for the **AuthorBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorBooks
    * const authorBooks = await prisma.authorBook.findMany()
    * ```
    */
  get authorBook(): Prisma.AuthorBookDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Book: 'Book',
    Author: 'Author',
    UserBook: 'UserBook',
    AuthorBook: 'AuthorBook'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "book" | "author" | "userBook" | "authorBook"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      UserBook: {
        payload: Prisma.$UserBookPayload<ExtArgs>
        fields: Prisma.UserBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          findFirst: {
            args: Prisma.UserBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          findMany: {
            args: Prisma.UserBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>[]
          }
          create: {
            args: Prisma.UserBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          createMany: {
            args: Prisma.UserBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>[]
          }
          delete: {
            args: Prisma.UserBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          update: {
            args: Prisma.UserBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          deleteMany: {
            args: Prisma.UserBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>[]
          }
          upsert: {
            args: Prisma.UserBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          aggregate: {
            args: Prisma.UserBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBook>
          }
          groupBy: {
            args: Prisma.UserBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBookCountArgs<ExtArgs>
            result: $Utils.Optional<UserBookCountAggregateOutputType> | number
          }
        }
      }
      AuthorBook: {
        payload: Prisma.$AuthorBookPayload<ExtArgs>
        fields: Prisma.AuthorBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload>
          }
          findFirst: {
            args: Prisma.AuthorBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload>
          }
          findMany: {
            args: Prisma.AuthorBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload>[]
          }
          create: {
            args: Prisma.AuthorBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload>
          }
          createMany: {
            args: Prisma.AuthorBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload>[]
          }
          delete: {
            args: Prisma.AuthorBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload>
          }
          update: {
            args: Prisma.AuthorBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload>
          }
          deleteMany: {
            args: Prisma.AuthorBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload>[]
          }
          upsert: {
            args: Prisma.AuthorBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBookPayload>
          }
          aggregate: {
            args: Prisma.AuthorBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorBook>
          }
          groupBy: {
            args: Prisma.AuthorBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorBookCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorBookCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    book?: BookOmit
    author?: AuthorOmit
    userBook?: UserBookOmit
    authorBook?: AuthorBookOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userBooks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBooks?: boolean | UserCountOutputTypeCountUserBooksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    authors: number
    userBooks: number
    authorBooks: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | BookCountOutputTypeCountAuthorsArgs
    userBooks?: boolean | BookCountOutputTypeCountUserBooksArgs
    authorBooks?: boolean | BookCountOutputTypeCountAuthorBooksArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountUserBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountAuthorBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorBookWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    works: number
    authorBooks: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | AuthorCountOutputTypeCountWorksArgs
    authorBooks?: boolean | AuthorCountOutputTypeCountAuthorBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountAuthorBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorBookWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    userBooks?: boolean | User$userBooksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBooks?: boolean | User$userBooksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userBooks: Prisma.$UserBookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBooks<T extends User$userBooksArgs<ExtArgs> = {}>(args?: Subset<T, User$userBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userBooks
   */
  export type User$userBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    where?: UserBookWhereInput
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    cursor?: UserBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    title: string | null
    cover: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    cover: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    cover: number
    _all: number
  }


  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    cover?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    cover?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    cover?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    title: string
    cover: string | null
    _count: BookCountAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cover?: boolean
    authors?: boolean | Book$authorsArgs<ExtArgs>
    userBooks?: boolean | Book$userBooksArgs<ExtArgs>
    authorBooks?: boolean | Book$authorBooksArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cover?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cover?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    cover?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "cover", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | Book$authorsArgs<ExtArgs>
    userBooks?: boolean | Book$userBooksArgs<ExtArgs>
    authorBooks?: boolean | Book$authorBooksArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      authors: Prisma.$AuthorPayload<ExtArgs>[]
      userBooks: Prisma.$UserBookPayload<ExtArgs>[]
      authorBooks: Prisma.$AuthorBookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      cover: string | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authors<T extends Book$authorsArgs<ExtArgs> = {}>(args?: Subset<T, Book$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userBooks<T extends Book$userBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$userBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authorBooks<T extends Book$authorBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$authorBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly cover: FieldRef<"Book", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.authors
   */
  export type Book$authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    cursor?: AuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Book.userBooks
   */
  export type Book$userBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    where?: UserBookWhereInput
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    cursor?: UserBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * Book.authorBooks
   */
  export type Book$authorBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    where?: AuthorBookWhereInput
    orderBy?: AuthorBookOrderByWithRelationInput | AuthorBookOrderByWithRelationInput[]
    cursor?: AuthorBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorBookScalarFieldEnum | AuthorBookScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    name: string | null
    cover: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cover: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    cover: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: string
    name: string
    cover: string | null
    createdAt: Date
    updatedAt: Date
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cover?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    works?: boolean | Author$worksArgs<ExtArgs>
    authorBooks?: boolean | Author$authorBooksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cover?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cover?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    name?: boolean
    cover?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cover" | "createdAt" | "updatedAt", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | Author$worksArgs<ExtArgs>
    authorBooks?: boolean | Author$authorBooksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      works: Prisma.$BookPayload<ExtArgs>[]
      authorBooks: Prisma.$AuthorBookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cover: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    works<T extends Author$worksArgs<ExtArgs> = {}>(args?: Subset<T, Author$worksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authorBooks<T extends Author$authorBooksArgs<ExtArgs> = {}>(args?: Subset<T, Author$authorBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'String'>
    readonly name: FieldRef<"Author", 'String'>
    readonly cover: FieldRef<"Author", 'String'>
    readonly createdAt: FieldRef<"Author", 'DateTime'>
    readonly updatedAt: FieldRef<"Author", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.works
   */
  export type Author$worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Author.authorBooks
   */
  export type Author$authorBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    where?: AuthorBookWhereInput
    orderBy?: AuthorBookOrderByWithRelationInput | AuthorBookOrderByWithRelationInput[]
    cursor?: AuthorBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorBookScalarFieldEnum | AuthorBookScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model UserBook
   */

  export type AggregateUserBook = {
    _count: UserBookCountAggregateOutputType | null
    _min: UserBookMinAggregateOutputType | null
    _max: UserBookMaxAggregateOutputType | null
  }

  export type UserBookMinAggregateOutputType = {
    userId: string | null
    bookId: string | null
    status: $Enums.ReadingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBookMaxAggregateOutputType = {
    userId: string | null
    bookId: string | null
    status: $Enums.ReadingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserBookCountAggregateOutputType = {
    userId: number
    bookId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserBookMinAggregateInputType = {
    userId?: true
    bookId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBookMaxAggregateInputType = {
    userId?: true
    bookId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserBookCountAggregateInputType = {
    userId?: true
    bookId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBook to aggregate.
     */
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     */
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBooks
    **/
    _count?: true | UserBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBookMaxAggregateInputType
  }

  export type GetUserBookAggregateType<T extends UserBookAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBook[P]>
      : GetScalarType<T[P], AggregateUserBook[P]>
  }




  export type UserBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookWhereInput
    orderBy?: UserBookOrderByWithAggregationInput | UserBookOrderByWithAggregationInput[]
    by: UserBookScalarFieldEnum[] | UserBookScalarFieldEnum
    having?: UserBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBookCountAggregateInputType | true
    _min?: UserBookMinAggregateInputType
    _max?: UserBookMaxAggregateInputType
  }

  export type UserBookGroupByOutputType = {
    userId: string
    bookId: string
    status: $Enums.ReadingStatus
    createdAt: Date
    updatedAt: Date
    _count: UserBookCountAggregateOutputType | null
    _min: UserBookMinAggregateOutputType | null
    _max: UserBookMaxAggregateOutputType | null
  }

  type GetUserBookGroupByPayload<T extends UserBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBookGroupByOutputType[P]>
            : GetScalarType<T[P], UserBookGroupByOutputType[P]>
        }
      >
    >


  export type UserBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    bookId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBook"]>

  export type UserBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    bookId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBook"]>

  export type UserBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    bookId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBook"]>

  export type UserBookSelectScalar = {
    userId?: boolean
    bookId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "bookId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["userBook"]>
  export type UserBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type UserBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type UserBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $UserBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBook"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      bookId: string
      status: $Enums.ReadingStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userBook"]>
    composites: {}
  }

  type UserBookGetPayload<S extends boolean | null | undefined | UserBookDefaultArgs> = $Result.GetResult<Prisma.$UserBookPayload, S>

  type UserBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBookCountAggregateInputType | true
    }

  export interface UserBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBook'], meta: { name: 'UserBook' } }
    /**
     * Find zero or one UserBook that matches the filter.
     * @param {UserBookFindUniqueArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBookFindUniqueArgs>(args: SelectSubset<T, UserBookFindUniqueArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBookFindUniqueOrThrowArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBookFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookFindFirstArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBookFindFirstArgs>(args?: SelectSubset<T, UserBookFindFirstArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookFindFirstOrThrowArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBookFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBooks
     * const userBooks = await prisma.userBook.findMany()
     * 
     * // Get first 10 UserBooks
     * const userBooks = await prisma.userBook.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userBookWithUserIdOnly = await prisma.userBook.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserBookFindManyArgs>(args?: SelectSubset<T, UserBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBook.
     * @param {UserBookCreateArgs} args - Arguments to create a UserBook.
     * @example
     * // Create one UserBook
     * const UserBook = await prisma.userBook.create({
     *   data: {
     *     // ... data to create a UserBook
     *   }
     * })
     * 
     */
    create<T extends UserBookCreateArgs>(args: SelectSubset<T, UserBookCreateArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBooks.
     * @param {UserBookCreateManyArgs} args - Arguments to create many UserBooks.
     * @example
     * // Create many UserBooks
     * const userBook = await prisma.userBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBookCreateManyArgs>(args?: SelectSubset<T, UserBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBooks and returns the data saved in the database.
     * @param {UserBookCreateManyAndReturnArgs} args - Arguments to create many UserBooks.
     * @example
     * // Create many UserBooks
     * const userBook = await prisma.userBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBooks and only return the `userId`
     * const userBookWithUserIdOnly = await prisma.userBook.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBookCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBook.
     * @param {UserBookDeleteArgs} args - Arguments to delete one UserBook.
     * @example
     * // Delete one UserBook
     * const UserBook = await prisma.userBook.delete({
     *   where: {
     *     // ... filter to delete one UserBook
     *   }
     * })
     * 
     */
    delete<T extends UserBookDeleteArgs>(args: SelectSubset<T, UserBookDeleteArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBook.
     * @param {UserBookUpdateArgs} args - Arguments to update one UserBook.
     * @example
     * // Update one UserBook
     * const userBook = await prisma.userBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBookUpdateArgs>(args: SelectSubset<T, UserBookUpdateArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBooks.
     * @param {UserBookDeleteManyArgs} args - Arguments to filter UserBooks to delete.
     * @example
     * // Delete a few UserBooks
     * const { count } = await prisma.userBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBookDeleteManyArgs>(args?: SelectSubset<T, UserBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBooks
     * const userBook = await prisma.userBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBookUpdateManyArgs>(args: SelectSubset<T, UserBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBooks and returns the data updated in the database.
     * @param {UserBookUpdateManyAndReturnArgs} args - Arguments to update many UserBooks.
     * @example
     * // Update many UserBooks
     * const userBook = await prisma.userBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBooks and only return the `userId`
     * const userBookWithUserIdOnly = await prisma.userBook.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBookUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBook.
     * @param {UserBookUpsertArgs} args - Arguments to update or create a UserBook.
     * @example
     * // Update or create a UserBook
     * const userBook = await prisma.userBook.upsert({
     *   create: {
     *     // ... data to create a UserBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBook we want to update
     *   }
     * })
     */
    upsert<T extends UserBookUpsertArgs>(args: SelectSubset<T, UserBookUpsertArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookCountArgs} args - Arguments to filter UserBooks to count.
     * @example
     * // Count the number of UserBooks
     * const count = await prisma.userBook.count({
     *   where: {
     *     // ... the filter for the UserBooks we want to count
     *   }
     * })
    **/
    count<T extends UserBookCountArgs>(
      args?: Subset<T, UserBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBookAggregateArgs>(args: Subset<T, UserBookAggregateArgs>): Prisma.PrismaPromise<GetUserBookAggregateType<T>>

    /**
     * Group by UserBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBookGroupByArgs['orderBy'] }
        : { orderBy?: UserBookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBook model
   */
  readonly fields: UserBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBook model
   */
  interface UserBookFieldRefs {
    readonly userId: FieldRef<"UserBook", 'String'>
    readonly bookId: FieldRef<"UserBook", 'String'>
    readonly status: FieldRef<"UserBook", 'ReadingStatus'>
    readonly createdAt: FieldRef<"UserBook", 'DateTime'>
    readonly updatedAt: FieldRef<"UserBook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBook findUnique
   */
  export type UserBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBook to fetch.
     */
    where: UserBookWhereUniqueInput
  }

  /**
   * UserBook findUniqueOrThrow
   */
  export type UserBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBook to fetch.
     */
    where: UserBookWhereUniqueInput
  }

  /**
   * UserBook findFirst
   */
  export type UserBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBook to fetch.
     */
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     */
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBooks.
     */
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBooks.
     */
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * UserBook findFirstOrThrow
   */
  export type UserBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBook to fetch.
     */
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     */
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBooks.
     */
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBooks.
     */
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * UserBook findMany
   */
  export type UserBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBooks to fetch.
     */
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     */
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBooks.
     */
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     */
    skip?: number
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * UserBook create
   */
  export type UserBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBook.
     */
    data: XOR<UserBookCreateInput, UserBookUncheckedCreateInput>
  }

  /**
   * UserBook createMany
   */
  export type UserBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBooks.
     */
    data: UserBookCreateManyInput | UserBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBook createManyAndReturn
   */
  export type UserBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * The data used to create many UserBooks.
     */
    data: UserBookCreateManyInput | UserBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBook update
   */
  export type UserBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBook.
     */
    data: XOR<UserBookUpdateInput, UserBookUncheckedUpdateInput>
    /**
     * Choose, which UserBook to update.
     */
    where: UserBookWhereUniqueInput
  }

  /**
   * UserBook updateMany
   */
  export type UserBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBooks.
     */
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyInput>
    /**
     * Filter which UserBooks to update
     */
    where?: UserBookWhereInput
    /**
     * Limit how many UserBooks to update.
     */
    limit?: number
  }

  /**
   * UserBook updateManyAndReturn
   */
  export type UserBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * The data used to update UserBooks.
     */
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyInput>
    /**
     * Filter which UserBooks to update
     */
    where?: UserBookWhereInput
    /**
     * Limit how many UserBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBook upsert
   */
  export type UserBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBook to update in case it exists.
     */
    where: UserBookWhereUniqueInput
    /**
     * In case the UserBook found by the `where` argument doesn't exist, create a new UserBook with this data.
     */
    create: XOR<UserBookCreateInput, UserBookUncheckedCreateInput>
    /**
     * In case the UserBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBookUpdateInput, UserBookUncheckedUpdateInput>
  }

  /**
   * UserBook delete
   */
  export type UserBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter which UserBook to delete.
     */
    where: UserBookWhereUniqueInput
  }

  /**
   * UserBook deleteMany
   */
  export type UserBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBooks to delete
     */
    where?: UserBookWhereInput
    /**
     * Limit how many UserBooks to delete.
     */
    limit?: number
  }

  /**
   * UserBook without action
   */
  export type UserBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
  }


  /**
   * Model AuthorBook
   */

  export type AggregateAuthorBook = {
    _count: AuthorBookCountAggregateOutputType | null
    _min: AuthorBookMinAggregateOutputType | null
    _max: AuthorBookMaxAggregateOutputType | null
  }

  export type AuthorBookMinAggregateOutputType = {
    bookId: string | null
    authorId: string | null
  }

  export type AuthorBookMaxAggregateOutputType = {
    bookId: string | null
    authorId: string | null
  }

  export type AuthorBookCountAggregateOutputType = {
    bookId: number
    authorId: number
    _all: number
  }


  export type AuthorBookMinAggregateInputType = {
    bookId?: true
    authorId?: true
  }

  export type AuthorBookMaxAggregateInputType = {
    bookId?: true
    authorId?: true
  }

  export type AuthorBookCountAggregateInputType = {
    bookId?: true
    authorId?: true
    _all?: true
  }

  export type AuthorBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorBook to aggregate.
     */
    where?: AuthorBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorBooks to fetch.
     */
    orderBy?: AuthorBookOrderByWithRelationInput | AuthorBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorBooks
    **/
    _count?: true | AuthorBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorBookMaxAggregateInputType
  }

  export type GetAuthorBookAggregateType<T extends AuthorBookAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorBook[P]>
      : GetScalarType<T[P], AggregateAuthorBook[P]>
  }




  export type AuthorBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorBookWhereInput
    orderBy?: AuthorBookOrderByWithAggregationInput | AuthorBookOrderByWithAggregationInput[]
    by: AuthorBookScalarFieldEnum[] | AuthorBookScalarFieldEnum
    having?: AuthorBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorBookCountAggregateInputType | true
    _min?: AuthorBookMinAggregateInputType
    _max?: AuthorBookMaxAggregateInputType
  }

  export type AuthorBookGroupByOutputType = {
    bookId: string
    authorId: string
    _count: AuthorBookCountAggregateOutputType | null
    _min: AuthorBookMinAggregateOutputType | null
    _max: AuthorBookMaxAggregateOutputType | null
  }

  type GetAuthorBookGroupByPayload<T extends AuthorBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorBookGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorBookGroupByOutputType[P]>
        }
      >
    >


  export type AuthorBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    authorId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorBook"]>

  export type AuthorBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    authorId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorBook"]>

  export type AuthorBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    authorId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorBook"]>

  export type AuthorBookSelectScalar = {
    bookId?: boolean
    authorId?: boolean
  }

  export type AuthorBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookId" | "authorId", ExtArgs["result"]["authorBook"]>
  export type AuthorBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type AuthorBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type AuthorBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }

  export type $AuthorBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorBook"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      author: Prisma.$AuthorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookId: string
      authorId: string
    }, ExtArgs["result"]["authorBook"]>
    composites: {}
  }

  type AuthorBookGetPayload<S extends boolean | null | undefined | AuthorBookDefaultArgs> = $Result.GetResult<Prisma.$AuthorBookPayload, S>

  type AuthorBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorBookCountAggregateInputType | true
    }

  export interface AuthorBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorBook'], meta: { name: 'AuthorBook' } }
    /**
     * Find zero or one AuthorBook that matches the filter.
     * @param {AuthorBookFindUniqueArgs} args - Arguments to find a AuthorBook
     * @example
     * // Get one AuthorBook
     * const authorBook = await prisma.authorBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorBookFindUniqueArgs>(args: SelectSubset<T, AuthorBookFindUniqueArgs<ExtArgs>>): Prisma__AuthorBookClient<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthorBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorBookFindUniqueOrThrowArgs} args - Arguments to find a AuthorBook
     * @example
     * // Get one AuthorBook
     * const authorBook = await prisma.authorBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorBookFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorBookClient<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBookFindFirstArgs} args - Arguments to find a AuthorBook
     * @example
     * // Get one AuthorBook
     * const authorBook = await prisma.authorBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorBookFindFirstArgs>(args?: SelectSubset<T, AuthorBookFindFirstArgs<ExtArgs>>): Prisma__AuthorBookClient<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBookFindFirstOrThrowArgs} args - Arguments to find a AuthorBook
     * @example
     * // Get one AuthorBook
     * const authorBook = await prisma.authorBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorBookFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorBookClient<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthorBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorBooks
     * const authorBooks = await prisma.authorBook.findMany()
     * 
     * // Get first 10 AuthorBooks
     * const authorBooks = await prisma.authorBook.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const authorBookWithBookIdOnly = await prisma.authorBook.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends AuthorBookFindManyArgs>(args?: SelectSubset<T, AuthorBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthorBook.
     * @param {AuthorBookCreateArgs} args - Arguments to create a AuthorBook.
     * @example
     * // Create one AuthorBook
     * const AuthorBook = await prisma.authorBook.create({
     *   data: {
     *     // ... data to create a AuthorBook
     *   }
     * })
     * 
     */
    create<T extends AuthorBookCreateArgs>(args: SelectSubset<T, AuthorBookCreateArgs<ExtArgs>>): Prisma__AuthorBookClient<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthorBooks.
     * @param {AuthorBookCreateManyArgs} args - Arguments to create many AuthorBooks.
     * @example
     * // Create many AuthorBooks
     * const authorBook = await prisma.authorBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorBookCreateManyArgs>(args?: SelectSubset<T, AuthorBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthorBooks and returns the data saved in the database.
     * @param {AuthorBookCreateManyAndReturnArgs} args - Arguments to create many AuthorBooks.
     * @example
     * // Create many AuthorBooks
     * const authorBook = await prisma.authorBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthorBooks and only return the `bookId`
     * const authorBookWithBookIdOnly = await prisma.authorBook.createManyAndReturn({
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorBookCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthorBook.
     * @param {AuthorBookDeleteArgs} args - Arguments to delete one AuthorBook.
     * @example
     * // Delete one AuthorBook
     * const AuthorBook = await prisma.authorBook.delete({
     *   where: {
     *     // ... filter to delete one AuthorBook
     *   }
     * })
     * 
     */
    delete<T extends AuthorBookDeleteArgs>(args: SelectSubset<T, AuthorBookDeleteArgs<ExtArgs>>): Prisma__AuthorBookClient<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthorBook.
     * @param {AuthorBookUpdateArgs} args - Arguments to update one AuthorBook.
     * @example
     * // Update one AuthorBook
     * const authorBook = await prisma.authorBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorBookUpdateArgs>(args: SelectSubset<T, AuthorBookUpdateArgs<ExtArgs>>): Prisma__AuthorBookClient<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthorBooks.
     * @param {AuthorBookDeleteManyArgs} args - Arguments to filter AuthorBooks to delete.
     * @example
     * // Delete a few AuthorBooks
     * const { count } = await prisma.authorBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorBookDeleteManyArgs>(args?: SelectSubset<T, AuthorBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorBooks
     * const authorBook = await prisma.authorBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorBookUpdateManyArgs>(args: SelectSubset<T, AuthorBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorBooks and returns the data updated in the database.
     * @param {AuthorBookUpdateManyAndReturnArgs} args - Arguments to update many AuthorBooks.
     * @example
     * // Update many AuthorBooks
     * const authorBook = await prisma.authorBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthorBooks and only return the `bookId`
     * const authorBookWithBookIdOnly = await prisma.authorBook.updateManyAndReturn({
     *   select: { bookId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorBookUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthorBook.
     * @param {AuthorBookUpsertArgs} args - Arguments to update or create a AuthorBook.
     * @example
     * // Update or create a AuthorBook
     * const authorBook = await prisma.authorBook.upsert({
     *   create: {
     *     // ... data to create a AuthorBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorBook we want to update
     *   }
     * })
     */
    upsert<T extends AuthorBookUpsertArgs>(args: SelectSubset<T, AuthorBookUpsertArgs<ExtArgs>>): Prisma__AuthorBookClient<$Result.GetResult<Prisma.$AuthorBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthorBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBookCountArgs} args - Arguments to filter AuthorBooks to count.
     * @example
     * // Count the number of AuthorBooks
     * const count = await prisma.authorBook.count({
     *   where: {
     *     // ... the filter for the AuthorBooks we want to count
     *   }
     * })
    **/
    count<T extends AuthorBookCountArgs>(
      args?: Subset<T, AuthorBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorBookAggregateArgs>(args: Subset<T, AuthorBookAggregateArgs>): Prisma.PrismaPromise<GetAuthorBookAggregateType<T>>

    /**
     * Group by AuthorBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorBookGroupByArgs['orderBy'] }
        : { orderBy?: AuthorBookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorBook model
   */
  readonly fields: AuthorBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthorBook model
   */
  interface AuthorBookFieldRefs {
    readonly bookId: FieldRef<"AuthorBook", 'String'>
    readonly authorId: FieldRef<"AuthorBook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthorBook findUnique
   */
  export type AuthorBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBook to fetch.
     */
    where: AuthorBookWhereUniqueInput
  }

  /**
   * AuthorBook findUniqueOrThrow
   */
  export type AuthorBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBook to fetch.
     */
    where: AuthorBookWhereUniqueInput
  }

  /**
   * AuthorBook findFirst
   */
  export type AuthorBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBook to fetch.
     */
    where?: AuthorBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorBooks to fetch.
     */
    orderBy?: AuthorBookOrderByWithRelationInput | AuthorBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorBooks.
     */
    cursor?: AuthorBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorBooks.
     */
    distinct?: AuthorBookScalarFieldEnum | AuthorBookScalarFieldEnum[]
  }

  /**
   * AuthorBook findFirstOrThrow
   */
  export type AuthorBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBook to fetch.
     */
    where?: AuthorBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorBooks to fetch.
     */
    orderBy?: AuthorBookOrderByWithRelationInput | AuthorBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorBooks.
     */
    cursor?: AuthorBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorBooks.
     */
    distinct?: AuthorBookScalarFieldEnum | AuthorBookScalarFieldEnum[]
  }

  /**
   * AuthorBook findMany
   */
  export type AuthorBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBooks to fetch.
     */
    where?: AuthorBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorBooks to fetch.
     */
    orderBy?: AuthorBookOrderByWithRelationInput | AuthorBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorBooks.
     */
    cursor?: AuthorBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorBooks.
     */
    skip?: number
    distinct?: AuthorBookScalarFieldEnum | AuthorBookScalarFieldEnum[]
  }

  /**
   * AuthorBook create
   */
  export type AuthorBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthorBook.
     */
    data: XOR<AuthorBookCreateInput, AuthorBookUncheckedCreateInput>
  }

  /**
   * AuthorBook createMany
   */
  export type AuthorBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorBooks.
     */
    data: AuthorBookCreateManyInput | AuthorBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthorBook createManyAndReturn
   */
  export type AuthorBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * The data used to create many AuthorBooks.
     */
    data: AuthorBookCreateManyInput | AuthorBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorBook update
   */
  export type AuthorBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthorBook.
     */
    data: XOR<AuthorBookUpdateInput, AuthorBookUncheckedUpdateInput>
    /**
     * Choose, which AuthorBook to update.
     */
    where: AuthorBookWhereUniqueInput
  }

  /**
   * AuthorBook updateMany
   */
  export type AuthorBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorBooks.
     */
    data: XOR<AuthorBookUpdateManyMutationInput, AuthorBookUncheckedUpdateManyInput>
    /**
     * Filter which AuthorBooks to update
     */
    where?: AuthorBookWhereInput
    /**
     * Limit how many AuthorBooks to update.
     */
    limit?: number
  }

  /**
   * AuthorBook updateManyAndReturn
   */
  export type AuthorBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * The data used to update AuthorBooks.
     */
    data: XOR<AuthorBookUpdateManyMutationInput, AuthorBookUncheckedUpdateManyInput>
    /**
     * Filter which AuthorBooks to update
     */
    where?: AuthorBookWhereInput
    /**
     * Limit how many AuthorBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorBook upsert
   */
  export type AuthorBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthorBook to update in case it exists.
     */
    where: AuthorBookWhereUniqueInput
    /**
     * In case the AuthorBook found by the `where` argument doesn't exist, create a new AuthorBook with this data.
     */
    create: XOR<AuthorBookCreateInput, AuthorBookUncheckedCreateInput>
    /**
     * In case the AuthorBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorBookUpdateInput, AuthorBookUncheckedUpdateInput>
  }

  /**
   * AuthorBook delete
   */
  export type AuthorBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
    /**
     * Filter which AuthorBook to delete.
     */
    where: AuthorBookWhereUniqueInput
  }

  /**
   * AuthorBook deleteMany
   */
  export type AuthorBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorBooks to delete
     */
    where?: AuthorBookWhereInput
    /**
     * Limit how many AuthorBooks to delete.
     */
    limit?: number
  }

  /**
   * AuthorBook without action
   */
  export type AuthorBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBook
     */
    select?: AuthorBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBook
     */
    omit?: AuthorBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBookInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    cover: 'cover'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cover: 'cover',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const UserBookScalarFieldEnum: {
    userId: 'userId',
    bookId: 'bookId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserBookScalarFieldEnum = (typeof UserBookScalarFieldEnum)[keyof typeof UserBookScalarFieldEnum]


  export const AuthorBookScalarFieldEnum: {
    bookId: 'bookId',
    authorId: 'authorId'
  };

  export type AuthorBookScalarFieldEnum = (typeof AuthorBookScalarFieldEnum)[keyof typeof AuthorBookScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ReadingStatus'
   */
  export type EnumReadingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReadingStatus'>
    


  /**
   * Reference to a field of type 'ReadingStatus[]'
   */
  export type ListEnumReadingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReadingStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    userBooks?: UserBookListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userBooks?: UserBookOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    userBooks?: UserBookListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    cover?: StringNullableFilter<"Book"> | string | null
    authors?: AuthorListRelationFilter
    userBooks?: UserBookListRelationFilter
    authorBooks?: AuthorBookListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrderInput | SortOrder
    authors?: AuthorOrderByRelationAggregateInput
    userBooks?: UserBookOrderByRelationAggregateInput
    authorBooks?: AuthorBookOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    cover?: StringNullableFilter<"Book"> | string | null
    authors?: AuthorListRelationFilter
    userBooks?: UserBookListRelationFilter
    authorBooks?: AuthorBookListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    cover?: StringNullableWithAggregatesFilter<"Book"> | string | null
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: StringFilter<"Author"> | string
    name?: StringFilter<"Author"> | string
    cover?: StringNullableFilter<"Author"> | string | null
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    works?: BookListRelationFilter
    authorBooks?: AuthorBookListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    works?: BookOrderByRelationAggregateInput
    authorBooks?: AuthorBookOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    name?: StringFilter<"Author"> | string
    cover?: StringNullableFilter<"Author"> | string | null
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    works?: BookListRelationFilter
    authorBooks?: AuthorBookListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Author"> | string
    name?: StringWithAggregatesFilter<"Author"> | string
    cover?: StringNullableWithAggregatesFilter<"Author"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
  }

  export type UserBookWhereInput = {
    AND?: UserBookWhereInput | UserBookWhereInput[]
    OR?: UserBookWhereInput[]
    NOT?: UserBookWhereInput | UserBookWhereInput[]
    userId?: StringFilter<"UserBook"> | string
    bookId?: StringFilter<"UserBook"> | string
    status?: EnumReadingStatusFilter<"UserBook"> | $Enums.ReadingStatus
    createdAt?: DateTimeFilter<"UserBook"> | Date | string
    updatedAt?: DateTimeFilter<"UserBook"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type UserBookOrderByWithRelationInput = {
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type UserBookWhereUniqueInput = Prisma.AtLeast<{
    userId_bookId?: UserBookUserIdBookIdCompoundUniqueInput
    AND?: UserBookWhereInput | UserBookWhereInput[]
    OR?: UserBookWhereInput[]
    NOT?: UserBookWhereInput | UserBookWhereInput[]
    userId?: StringFilter<"UserBook"> | string
    bookId?: StringFilter<"UserBook"> | string
    status?: EnumReadingStatusFilter<"UserBook"> | $Enums.ReadingStatus
    createdAt?: DateTimeFilter<"UserBook"> | Date | string
    updatedAt?: DateTimeFilter<"UserBook"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "userId_bookId">

  export type UserBookOrderByWithAggregationInput = {
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserBookCountOrderByAggregateInput
    _max?: UserBookMaxOrderByAggregateInput
    _min?: UserBookMinOrderByAggregateInput
  }

  export type UserBookScalarWhereWithAggregatesInput = {
    AND?: UserBookScalarWhereWithAggregatesInput | UserBookScalarWhereWithAggregatesInput[]
    OR?: UserBookScalarWhereWithAggregatesInput[]
    NOT?: UserBookScalarWhereWithAggregatesInput | UserBookScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserBook"> | string
    bookId?: StringWithAggregatesFilter<"UserBook"> | string
    status?: EnumReadingStatusWithAggregatesFilter<"UserBook"> | $Enums.ReadingStatus
    createdAt?: DateTimeWithAggregatesFilter<"UserBook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserBook"> | Date | string
  }

  export type AuthorBookWhereInput = {
    AND?: AuthorBookWhereInput | AuthorBookWhereInput[]
    OR?: AuthorBookWhereInput[]
    NOT?: AuthorBookWhereInput | AuthorBookWhereInput[]
    bookId?: StringFilter<"AuthorBook"> | string
    authorId?: StringFilter<"AuthorBook"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
  }

  export type AuthorBookOrderByWithRelationInput = {
    bookId?: SortOrder
    authorId?: SortOrder
    book?: BookOrderByWithRelationInput
    author?: AuthorOrderByWithRelationInput
  }

  export type AuthorBookWhereUniqueInput = Prisma.AtLeast<{
    bookId_authorId?: AuthorBookBookIdAuthorIdCompoundUniqueInput
    AND?: AuthorBookWhereInput | AuthorBookWhereInput[]
    OR?: AuthorBookWhereInput[]
    NOT?: AuthorBookWhereInput | AuthorBookWhereInput[]
    bookId?: StringFilter<"AuthorBook"> | string
    authorId?: StringFilter<"AuthorBook"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
  }, "bookId_authorId">

  export type AuthorBookOrderByWithAggregationInput = {
    bookId?: SortOrder
    authorId?: SortOrder
    _count?: AuthorBookCountOrderByAggregateInput
    _max?: AuthorBookMaxOrderByAggregateInput
    _min?: AuthorBookMinOrderByAggregateInput
  }

  export type AuthorBookScalarWhereWithAggregatesInput = {
    AND?: AuthorBookScalarWhereWithAggregatesInput | AuthorBookScalarWhereWithAggregatesInput[]
    OR?: AuthorBookScalarWhereWithAggregatesInput[]
    NOT?: AuthorBookScalarWhereWithAggregatesInput | AuthorBookScalarWhereWithAggregatesInput[]
    bookId?: StringWithAggregatesFilter<"AuthorBook"> | string
    authorId?: StringWithAggregatesFilter<"AuthorBook"> | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    userBooks?: UserBookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id: string
    title: string
    cover?: string | null
    authors?: AuthorCreateNestedManyWithoutWorksInput
    userBooks?: UserBookCreateNestedManyWithoutBookInput
    authorBooks?: AuthorBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id: string
    title: string
    cover?: string | null
    authors?: AuthorUncheckedCreateNestedManyWithoutWorksInput
    userBooks?: UserBookUncheckedCreateNestedManyWithoutBookInput
    authorBooks?: AuthorBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: AuthorUpdateManyWithoutWorksNestedInput
    userBooks?: UserBookUpdateManyWithoutBookNestedInput
    authorBooks?: AuthorBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: AuthorUncheckedUpdateManyWithoutWorksNestedInput
    userBooks?: UserBookUncheckedUpdateManyWithoutBookNestedInput
    authorBooks?: AuthorBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id: string
    title: string
    cover?: string | null
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthorCreateInput = {
    id: string
    name: string
    cover?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: BookCreateNestedManyWithoutAuthorsInput
    authorBooks?: AuthorBookCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id: string
    name: string
    cover?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: BookUncheckedCreateNestedManyWithoutAuthorsInput
    authorBooks?: AuthorBookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: BookUpdateManyWithoutAuthorsNestedInput
    authorBooks?: AuthorBookUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: BookUncheckedUpdateManyWithoutAuthorsNestedInput
    authorBooks?: AuthorBookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id: string
    name: string
    cover?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookCreateInput = {
    status?: $Enums.ReadingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBooksInput
    book: BookCreateNestedOneWithoutUserBooksInput
  }

  export type UserBookUncheckedCreateInput = {
    userId: string
    bookId: string
    status?: $Enums.ReadingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookUpdateInput = {
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBooksNestedInput
    book?: BookUpdateOneRequiredWithoutUserBooksNestedInput
  }

  export type UserBookUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookCreateManyInput = {
    userId: string
    bookId: string
    status?: $Enums.ReadingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookUpdateManyMutationInput = {
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorBookCreateInput = {
    book: BookCreateNestedOneWithoutAuthorBooksInput
    author: AuthorCreateNestedOneWithoutAuthorBooksInput
  }

  export type AuthorBookUncheckedCreateInput = {
    bookId: string
    authorId: string
  }

  export type AuthorBookUpdateInput = {
    book?: BookUpdateOneRequiredWithoutAuthorBooksNestedInput
    author?: AuthorUpdateOneRequiredWithoutAuthorBooksNestedInput
  }

  export type AuthorBookUncheckedUpdateInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorBookCreateManyInput = {
    bookId: string
    authorId: string
  }

  export type AuthorBookUpdateManyMutationInput = {

  }

  export type AuthorBookUncheckedUpdateManyInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserBookListRelationFilter = {
    every?: UserBookWhereInput
    some?: UserBookWhereInput
    none?: UserBookWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AuthorListRelationFilter = {
    every?: AuthorWhereInput
    some?: AuthorWhereInput
    none?: AuthorWhereInput
  }

  export type AuthorBookListRelationFilter = {
    every?: AuthorBookWhereInput
    some?: AuthorBookWhereInput
    none?: AuthorBookWhereInput
  }

  export type AuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cover?: SortOrder
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReadingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReadingStatus | EnumReadingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReadingStatus[] | ListEnumReadingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReadingStatus[] | ListEnumReadingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReadingStatusFilter<$PrismaModel> | $Enums.ReadingStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type UserBookUserIdBookIdCompoundUniqueInput = {
    userId: string
    bookId: string
  }

  export type UserBookCountOrderByAggregateInput = {
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBookMaxOrderByAggregateInput = {
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBookMinOrderByAggregateInput = {
    userId?: SortOrder
    bookId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReadingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReadingStatus | EnumReadingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReadingStatus[] | ListEnumReadingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReadingStatus[] | ListEnumReadingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReadingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReadingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReadingStatusFilter<$PrismaModel>
    _max?: NestedEnumReadingStatusFilter<$PrismaModel>
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type AuthorBookBookIdAuthorIdCompoundUniqueInput = {
    bookId: string
    authorId: string
  }

  export type AuthorBookCountOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type AuthorBookMaxOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type AuthorBookMinOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type UserBookCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput> | UserBookCreateWithoutUserInput[] | UserBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutUserInput | UserBookCreateOrConnectWithoutUserInput[]
    createMany?: UserBookCreateManyUserInputEnvelope
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
  }

  export type UserBookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput> | UserBookCreateWithoutUserInput[] | UserBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutUserInput | UserBookCreateOrConnectWithoutUserInput[]
    createMany?: UserBookCreateManyUserInputEnvelope
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserBookUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput> | UserBookCreateWithoutUserInput[] | UserBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutUserInput | UserBookCreateOrConnectWithoutUserInput[]
    upsert?: UserBookUpsertWithWhereUniqueWithoutUserInput | UserBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBookCreateManyUserInputEnvelope
    set?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    disconnect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    delete?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    update?: UserBookUpdateWithWhereUniqueWithoutUserInput | UserBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBookUpdateManyWithWhereWithoutUserInput | UserBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
  }

  export type UserBookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput> | UserBookCreateWithoutUserInput[] | UserBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutUserInput | UserBookCreateOrConnectWithoutUserInput[]
    upsert?: UserBookUpsertWithWhereUniqueWithoutUserInput | UserBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBookCreateManyUserInputEnvelope
    set?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    disconnect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    delete?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    update?: UserBookUpdateWithWhereUniqueWithoutUserInput | UserBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBookUpdateManyWithWhereWithoutUserInput | UserBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
  }

  export type AuthorCreateNestedManyWithoutWorksInput = {
    create?: XOR<AuthorCreateWithoutWorksInput, AuthorUncheckedCreateWithoutWorksInput> | AuthorCreateWithoutWorksInput[] | AuthorUncheckedCreateWithoutWorksInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutWorksInput | AuthorCreateOrConnectWithoutWorksInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type UserBookCreateNestedManyWithoutBookInput = {
    create?: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput> | UserBookCreateWithoutBookInput[] | UserBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutBookInput | UserBookCreateOrConnectWithoutBookInput[]
    createMany?: UserBookCreateManyBookInputEnvelope
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
  }

  export type AuthorBookCreateNestedManyWithoutBookInput = {
    create?: XOR<AuthorBookCreateWithoutBookInput, AuthorBookUncheckedCreateWithoutBookInput> | AuthorBookCreateWithoutBookInput[] | AuthorBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AuthorBookCreateOrConnectWithoutBookInput | AuthorBookCreateOrConnectWithoutBookInput[]
    createMany?: AuthorBookCreateManyBookInputEnvelope
    connect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
  }

  export type AuthorUncheckedCreateNestedManyWithoutWorksInput = {
    create?: XOR<AuthorCreateWithoutWorksInput, AuthorUncheckedCreateWithoutWorksInput> | AuthorCreateWithoutWorksInput[] | AuthorUncheckedCreateWithoutWorksInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutWorksInput | AuthorCreateOrConnectWithoutWorksInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type UserBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput> | UserBookCreateWithoutBookInput[] | UserBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutBookInput | UserBookCreateOrConnectWithoutBookInput[]
    createMany?: UserBookCreateManyBookInputEnvelope
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
  }

  export type AuthorBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<AuthorBookCreateWithoutBookInput, AuthorBookUncheckedCreateWithoutBookInput> | AuthorBookCreateWithoutBookInput[] | AuthorBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AuthorBookCreateOrConnectWithoutBookInput | AuthorBookCreateOrConnectWithoutBookInput[]
    createMany?: AuthorBookCreateManyBookInputEnvelope
    connect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
  }

  export type AuthorUpdateManyWithoutWorksNestedInput = {
    create?: XOR<AuthorCreateWithoutWorksInput, AuthorUncheckedCreateWithoutWorksInput> | AuthorCreateWithoutWorksInput[] | AuthorUncheckedCreateWithoutWorksInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutWorksInput | AuthorCreateOrConnectWithoutWorksInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutWorksInput | AuthorUpsertWithWhereUniqueWithoutWorksInput[]
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutWorksInput | AuthorUpdateWithWhereUniqueWithoutWorksInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutWorksInput | AuthorUpdateManyWithWhereWithoutWorksInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type UserBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput> | UserBookCreateWithoutBookInput[] | UserBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutBookInput | UserBookCreateOrConnectWithoutBookInput[]
    upsert?: UserBookUpsertWithWhereUniqueWithoutBookInput | UserBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: UserBookCreateManyBookInputEnvelope
    set?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    disconnect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    delete?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    update?: UserBookUpdateWithWhereUniqueWithoutBookInput | UserBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: UserBookUpdateManyWithWhereWithoutBookInput | UserBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
  }

  export type AuthorBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<AuthorBookCreateWithoutBookInput, AuthorBookUncheckedCreateWithoutBookInput> | AuthorBookCreateWithoutBookInput[] | AuthorBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AuthorBookCreateOrConnectWithoutBookInput | AuthorBookCreateOrConnectWithoutBookInput[]
    upsert?: AuthorBookUpsertWithWhereUniqueWithoutBookInput | AuthorBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: AuthorBookCreateManyBookInputEnvelope
    set?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    disconnect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    delete?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    connect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    update?: AuthorBookUpdateWithWhereUniqueWithoutBookInput | AuthorBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: AuthorBookUpdateManyWithWhereWithoutBookInput | AuthorBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: AuthorBookScalarWhereInput | AuthorBookScalarWhereInput[]
  }

  export type AuthorUncheckedUpdateManyWithoutWorksNestedInput = {
    create?: XOR<AuthorCreateWithoutWorksInput, AuthorUncheckedCreateWithoutWorksInput> | AuthorCreateWithoutWorksInput[] | AuthorUncheckedCreateWithoutWorksInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutWorksInput | AuthorCreateOrConnectWithoutWorksInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutWorksInput | AuthorUpsertWithWhereUniqueWithoutWorksInput[]
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutWorksInput | AuthorUpdateWithWhereUniqueWithoutWorksInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutWorksInput | AuthorUpdateManyWithWhereWithoutWorksInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type UserBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput> | UserBookCreateWithoutBookInput[] | UserBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutBookInput | UserBookCreateOrConnectWithoutBookInput[]
    upsert?: UserBookUpsertWithWhereUniqueWithoutBookInput | UserBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: UserBookCreateManyBookInputEnvelope
    set?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    disconnect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    delete?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    update?: UserBookUpdateWithWhereUniqueWithoutBookInput | UserBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: UserBookUpdateManyWithWhereWithoutBookInput | UserBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
  }

  export type AuthorBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<AuthorBookCreateWithoutBookInput, AuthorBookUncheckedCreateWithoutBookInput> | AuthorBookCreateWithoutBookInput[] | AuthorBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AuthorBookCreateOrConnectWithoutBookInput | AuthorBookCreateOrConnectWithoutBookInput[]
    upsert?: AuthorBookUpsertWithWhereUniqueWithoutBookInput | AuthorBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: AuthorBookCreateManyBookInputEnvelope
    set?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    disconnect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    delete?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    connect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    update?: AuthorBookUpdateWithWhereUniqueWithoutBookInput | AuthorBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: AuthorBookUpdateManyWithWhereWithoutBookInput | AuthorBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: AuthorBookScalarWhereInput | AuthorBookScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput> | BookCreateWithoutAuthorsInput[] | BookUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput | BookCreateOrConnectWithoutAuthorsInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type AuthorBookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AuthorBookCreateWithoutAuthorInput, AuthorBookUncheckedCreateWithoutAuthorInput> | AuthorBookCreateWithoutAuthorInput[] | AuthorBookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorBookCreateOrConnectWithoutAuthorInput | AuthorBookCreateOrConnectWithoutAuthorInput[]
    createMany?: AuthorBookCreateManyAuthorInputEnvelope
    connect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput> | BookCreateWithoutAuthorsInput[] | BookUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput | BookCreateOrConnectWithoutAuthorsInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type AuthorBookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AuthorBookCreateWithoutAuthorInput, AuthorBookUncheckedCreateWithoutAuthorInput> | AuthorBookCreateWithoutAuthorInput[] | AuthorBookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorBookCreateOrConnectWithoutAuthorInput | AuthorBookCreateOrConnectWithoutAuthorInput[]
    createMany?: AuthorBookCreateManyAuthorInputEnvelope
    connect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput> | BookCreateWithoutAuthorsInput[] | BookUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput | BookCreateOrConnectWithoutAuthorsInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorsInput | BookUpsertWithWhereUniqueWithoutAuthorsInput[]
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorsInput | BookUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorsInput | BookUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type AuthorBookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AuthorBookCreateWithoutAuthorInput, AuthorBookUncheckedCreateWithoutAuthorInput> | AuthorBookCreateWithoutAuthorInput[] | AuthorBookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorBookCreateOrConnectWithoutAuthorInput | AuthorBookCreateOrConnectWithoutAuthorInput[]
    upsert?: AuthorBookUpsertWithWhereUniqueWithoutAuthorInput | AuthorBookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AuthorBookCreateManyAuthorInputEnvelope
    set?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    disconnect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    delete?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    connect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    update?: AuthorBookUpdateWithWhereUniqueWithoutAuthorInput | AuthorBookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AuthorBookUpdateManyWithWhereWithoutAuthorInput | AuthorBookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AuthorBookScalarWhereInput | AuthorBookScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput> | BookCreateWithoutAuthorsInput[] | BookUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput | BookCreateOrConnectWithoutAuthorsInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorsInput | BookUpsertWithWhereUniqueWithoutAuthorsInput[]
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorsInput | BookUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorsInput | BookUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type AuthorBookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AuthorBookCreateWithoutAuthorInput, AuthorBookUncheckedCreateWithoutAuthorInput> | AuthorBookCreateWithoutAuthorInput[] | AuthorBookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorBookCreateOrConnectWithoutAuthorInput | AuthorBookCreateOrConnectWithoutAuthorInput[]
    upsert?: AuthorBookUpsertWithWhereUniqueWithoutAuthorInput | AuthorBookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AuthorBookCreateManyAuthorInputEnvelope
    set?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    disconnect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    delete?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    connect?: AuthorBookWhereUniqueInput | AuthorBookWhereUniqueInput[]
    update?: AuthorBookUpdateWithWhereUniqueWithoutAuthorInput | AuthorBookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AuthorBookUpdateManyWithWhereWithoutAuthorInput | AuthorBookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AuthorBookScalarWhereInput | AuthorBookScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBooksInput = {
    create?: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBooksInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutUserBooksInput = {
    create?: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutUserBooksInput
    connect?: BookWhereUniqueInput
  }

  export type EnumReadingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReadingStatus
  }

  export type UserUpdateOneRequiredWithoutUserBooksNestedInput = {
    create?: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBooksInput
    upsert?: UserUpsertWithoutUserBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBooksInput, UserUpdateWithoutUserBooksInput>, UserUncheckedUpdateWithoutUserBooksInput>
  }

  export type BookUpdateOneRequiredWithoutUserBooksNestedInput = {
    create?: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutUserBooksInput
    upsert?: BookUpsertWithoutUserBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutUserBooksInput, BookUpdateWithoutUserBooksInput>, BookUncheckedUpdateWithoutUserBooksInput>
  }

  export type BookCreateNestedOneWithoutAuthorBooksInput = {
    create?: XOR<BookCreateWithoutAuthorBooksInput, BookUncheckedCreateWithoutAuthorBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutAuthorBooksInput
    connect?: BookWhereUniqueInput
  }

  export type AuthorCreateNestedOneWithoutAuthorBooksInput = {
    create?: XOR<AuthorCreateWithoutAuthorBooksInput, AuthorUncheckedCreateWithoutAuthorBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorBooksInput
    connect?: AuthorWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutAuthorBooksNestedInput = {
    create?: XOR<BookCreateWithoutAuthorBooksInput, BookUncheckedCreateWithoutAuthorBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutAuthorBooksInput
    upsert?: BookUpsertWithoutAuthorBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutAuthorBooksInput, BookUpdateWithoutAuthorBooksInput>, BookUncheckedUpdateWithoutAuthorBooksInput>
  }

  export type AuthorUpdateOneRequiredWithoutAuthorBooksNestedInput = {
    create?: XOR<AuthorCreateWithoutAuthorBooksInput, AuthorUncheckedCreateWithoutAuthorBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorBooksInput
    upsert?: AuthorUpsertWithoutAuthorBooksInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutAuthorBooksInput, AuthorUpdateWithoutAuthorBooksInput>, AuthorUncheckedUpdateWithoutAuthorBooksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumReadingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReadingStatus | EnumReadingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReadingStatus[] | ListEnumReadingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReadingStatus[] | ListEnumReadingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReadingStatusFilter<$PrismaModel> | $Enums.ReadingStatus
  }

  export type NestedEnumReadingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReadingStatus | EnumReadingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReadingStatus[] | ListEnumReadingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReadingStatus[] | ListEnumReadingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReadingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReadingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReadingStatusFilter<$PrismaModel>
    _max?: NestedEnumReadingStatusFilter<$PrismaModel>
  }

  export type UserBookCreateWithoutUserInput = {
    status?: $Enums.ReadingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutUserBooksInput
  }

  export type UserBookUncheckedCreateWithoutUserInput = {
    bookId: string
    status?: $Enums.ReadingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookCreateOrConnectWithoutUserInput = {
    where: UserBookWhereUniqueInput
    create: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput>
  }

  export type UserBookCreateManyUserInputEnvelope = {
    data: UserBookCreateManyUserInput | UserBookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBookUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBookWhereUniqueInput
    update: XOR<UserBookUpdateWithoutUserInput, UserBookUncheckedUpdateWithoutUserInput>
    create: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput>
  }

  export type UserBookUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBookWhereUniqueInput
    data: XOR<UserBookUpdateWithoutUserInput, UserBookUncheckedUpdateWithoutUserInput>
  }

  export type UserBookUpdateManyWithWhereWithoutUserInput = {
    where: UserBookScalarWhereInput
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBookScalarWhereInput = {
    AND?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
    OR?: UserBookScalarWhereInput[]
    NOT?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
    userId?: StringFilter<"UserBook"> | string
    bookId?: StringFilter<"UserBook"> | string
    status?: EnumReadingStatusFilter<"UserBook"> | $Enums.ReadingStatus
    createdAt?: DateTimeFilter<"UserBook"> | Date | string
    updatedAt?: DateTimeFilter<"UserBook"> | Date | string
  }

  export type AuthorCreateWithoutWorksInput = {
    id: string
    name: string
    cover?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorBooks?: AuthorBookCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutWorksInput = {
    id: string
    name: string
    cover?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorBooks?: AuthorBookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutWorksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutWorksInput, AuthorUncheckedCreateWithoutWorksInput>
  }

  export type UserBookCreateWithoutBookInput = {
    status?: $Enums.ReadingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBooksInput
  }

  export type UserBookUncheckedCreateWithoutBookInput = {
    userId: string
    status?: $Enums.ReadingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookCreateOrConnectWithoutBookInput = {
    where: UserBookWhereUniqueInput
    create: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput>
  }

  export type UserBookCreateManyBookInputEnvelope = {
    data: UserBookCreateManyBookInput | UserBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type AuthorBookCreateWithoutBookInput = {
    author: AuthorCreateNestedOneWithoutAuthorBooksInput
  }

  export type AuthorBookUncheckedCreateWithoutBookInput = {
    authorId: string
  }

  export type AuthorBookCreateOrConnectWithoutBookInput = {
    where: AuthorBookWhereUniqueInput
    create: XOR<AuthorBookCreateWithoutBookInput, AuthorBookUncheckedCreateWithoutBookInput>
  }

  export type AuthorBookCreateManyBookInputEnvelope = {
    data: AuthorBookCreateManyBookInput | AuthorBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type AuthorUpsertWithWhereUniqueWithoutWorksInput = {
    where: AuthorWhereUniqueInput
    update: XOR<AuthorUpdateWithoutWorksInput, AuthorUncheckedUpdateWithoutWorksInput>
    create: XOR<AuthorCreateWithoutWorksInput, AuthorUncheckedCreateWithoutWorksInput>
  }

  export type AuthorUpdateWithWhereUniqueWithoutWorksInput = {
    where: AuthorWhereUniqueInput
    data: XOR<AuthorUpdateWithoutWorksInput, AuthorUncheckedUpdateWithoutWorksInput>
  }

  export type AuthorUpdateManyWithWhereWithoutWorksInput = {
    where: AuthorScalarWhereInput
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyWithoutWorksInput>
  }

  export type AuthorScalarWhereInput = {
    AND?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
    OR?: AuthorScalarWhereInput[]
    NOT?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
    id?: StringFilter<"Author"> | string
    name?: StringFilter<"Author"> | string
    cover?: StringNullableFilter<"Author"> | string | null
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
  }

  export type UserBookUpsertWithWhereUniqueWithoutBookInput = {
    where: UserBookWhereUniqueInput
    update: XOR<UserBookUpdateWithoutBookInput, UserBookUncheckedUpdateWithoutBookInput>
    create: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput>
  }

  export type UserBookUpdateWithWhereUniqueWithoutBookInput = {
    where: UserBookWhereUniqueInput
    data: XOR<UserBookUpdateWithoutBookInput, UserBookUncheckedUpdateWithoutBookInput>
  }

  export type UserBookUpdateManyWithWhereWithoutBookInput = {
    where: UserBookScalarWhereInput
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyWithoutBookInput>
  }

  export type AuthorBookUpsertWithWhereUniqueWithoutBookInput = {
    where: AuthorBookWhereUniqueInput
    update: XOR<AuthorBookUpdateWithoutBookInput, AuthorBookUncheckedUpdateWithoutBookInput>
    create: XOR<AuthorBookCreateWithoutBookInput, AuthorBookUncheckedCreateWithoutBookInput>
  }

  export type AuthorBookUpdateWithWhereUniqueWithoutBookInput = {
    where: AuthorBookWhereUniqueInput
    data: XOR<AuthorBookUpdateWithoutBookInput, AuthorBookUncheckedUpdateWithoutBookInput>
  }

  export type AuthorBookUpdateManyWithWhereWithoutBookInput = {
    where: AuthorBookScalarWhereInput
    data: XOR<AuthorBookUpdateManyMutationInput, AuthorBookUncheckedUpdateManyWithoutBookInput>
  }

  export type AuthorBookScalarWhereInput = {
    AND?: AuthorBookScalarWhereInput | AuthorBookScalarWhereInput[]
    OR?: AuthorBookScalarWhereInput[]
    NOT?: AuthorBookScalarWhereInput | AuthorBookScalarWhereInput[]
    bookId?: StringFilter<"AuthorBook"> | string
    authorId?: StringFilter<"AuthorBook"> | string
  }

  export type BookCreateWithoutAuthorsInput = {
    id: string
    title: string
    cover?: string | null
    userBooks?: UserBookCreateNestedManyWithoutBookInput
    authorBooks?: AuthorBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorsInput = {
    id: string
    title: string
    cover?: string | null
    userBooks?: UserBookUncheckedCreateNestedManyWithoutBookInput
    authorBooks?: AuthorBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
  }

  export type AuthorBookCreateWithoutAuthorInput = {
    book: BookCreateNestedOneWithoutAuthorBooksInput
  }

  export type AuthorBookUncheckedCreateWithoutAuthorInput = {
    bookId: string
  }

  export type AuthorBookCreateOrConnectWithoutAuthorInput = {
    where: AuthorBookWhereUniqueInput
    create: XOR<AuthorBookCreateWithoutAuthorInput, AuthorBookUncheckedCreateWithoutAuthorInput>
  }

  export type AuthorBookCreateManyAuthorInputEnvelope = {
    data: AuthorBookCreateManyAuthorInput | AuthorBookCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutAuthorsInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutAuthorsInput, BookUncheckedUpdateWithoutAuthorsInput>
    create: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
  }

  export type BookUpdateWithWhereUniqueWithoutAuthorsInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutAuthorsInput, BookUncheckedUpdateWithoutAuthorsInput>
  }

  export type BookUpdateManyWithWhereWithoutAuthorsInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    cover?: StringNullableFilter<"Book"> | string | null
  }

  export type AuthorBookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AuthorBookWhereUniqueInput
    update: XOR<AuthorBookUpdateWithoutAuthorInput, AuthorBookUncheckedUpdateWithoutAuthorInput>
    create: XOR<AuthorBookCreateWithoutAuthorInput, AuthorBookUncheckedCreateWithoutAuthorInput>
  }

  export type AuthorBookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AuthorBookWhereUniqueInput
    data: XOR<AuthorBookUpdateWithoutAuthorInput, AuthorBookUncheckedUpdateWithoutAuthorInput>
  }

  export type AuthorBookUpdateManyWithWhereWithoutAuthorInput = {
    where: AuthorBookScalarWhereInput
    data: XOR<AuthorBookUpdateManyMutationInput, AuthorBookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type UserCreateWithoutUserBooksInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserBooksInput = {
    id: string
    email: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
  }

  export type BookCreateWithoutUserBooksInput = {
    id: string
    title: string
    cover?: string | null
    authors?: AuthorCreateNestedManyWithoutWorksInput
    authorBooks?: AuthorBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutUserBooksInput = {
    id: string
    title: string
    cover?: string | null
    authors?: AuthorUncheckedCreateNestedManyWithoutWorksInput
    authorBooks?: AuthorBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutUserBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
  }

  export type UserUpsertWithoutUserBooksInput = {
    update: XOR<UserUpdateWithoutUserBooksInput, UserUncheckedUpdateWithoutUserBooksInput>
    create: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBooksInput, UserUncheckedUpdateWithoutUserBooksInput>
  }

  export type UserUpdateWithoutUserBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpsertWithoutUserBooksInput = {
    update: XOR<BookUpdateWithoutUserBooksInput, BookUncheckedUpdateWithoutUserBooksInput>
    create: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutUserBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutUserBooksInput, BookUncheckedUpdateWithoutUserBooksInput>
  }

  export type BookUpdateWithoutUserBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: AuthorUpdateManyWithoutWorksNestedInput
    authorBooks?: AuthorBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutUserBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: AuthorUncheckedUpdateManyWithoutWorksNestedInput
    authorBooks?: AuthorBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateWithoutAuthorBooksInput = {
    id: string
    title: string
    cover?: string | null
    authors?: AuthorCreateNestedManyWithoutWorksInput
    userBooks?: UserBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorBooksInput = {
    id: string
    title: string
    cover?: string | null
    authors?: AuthorUncheckedCreateNestedManyWithoutWorksInput
    userBooks?: UserBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorBooksInput, BookUncheckedCreateWithoutAuthorBooksInput>
  }

  export type AuthorCreateWithoutAuthorBooksInput = {
    id: string
    name: string
    cover?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: BookCreateNestedManyWithoutAuthorsInput
  }

  export type AuthorUncheckedCreateWithoutAuthorBooksInput = {
    id: string
    name: string
    cover?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: BookUncheckedCreateNestedManyWithoutAuthorsInput
  }

  export type AuthorCreateOrConnectWithoutAuthorBooksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutAuthorBooksInput, AuthorUncheckedCreateWithoutAuthorBooksInput>
  }

  export type BookUpsertWithoutAuthorBooksInput = {
    update: XOR<BookUpdateWithoutAuthorBooksInput, BookUncheckedUpdateWithoutAuthorBooksInput>
    create: XOR<BookCreateWithoutAuthorBooksInput, BookUncheckedCreateWithoutAuthorBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutAuthorBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutAuthorBooksInput, BookUncheckedUpdateWithoutAuthorBooksInput>
  }

  export type BookUpdateWithoutAuthorBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: AuthorUpdateManyWithoutWorksNestedInput
    userBooks?: UserBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: AuthorUncheckedUpdateManyWithoutWorksNestedInput
    userBooks?: UserBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type AuthorUpsertWithoutAuthorBooksInput = {
    update: XOR<AuthorUpdateWithoutAuthorBooksInput, AuthorUncheckedUpdateWithoutAuthorBooksInput>
    create: XOR<AuthorCreateWithoutAuthorBooksInput, AuthorUncheckedCreateWithoutAuthorBooksInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutAuthorBooksInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutAuthorBooksInput, AuthorUncheckedUpdateWithoutAuthorBooksInput>
  }

  export type AuthorUpdateWithoutAuthorBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: BookUpdateManyWithoutAuthorsNestedInput
  }

  export type AuthorUncheckedUpdateWithoutAuthorBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: BookUncheckedUpdateManyWithoutAuthorsNestedInput
  }

  export type UserBookCreateManyUserInput = {
    bookId: string
    status?: $Enums.ReadingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBookUpdateWithoutUserInput = {
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutUserBooksNestedInput
  }

  export type UserBookUncheckedUpdateWithoutUserInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookUncheckedUpdateManyWithoutUserInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookCreateManyBookInput = {
    userId: string
    status?: $Enums.ReadingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorBookCreateManyBookInput = {
    authorId: string
  }

  export type AuthorUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorBooks?: AuthorBookUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorBooks?: AuthorBookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateManyWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookUpdateWithoutBookInput = {
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBooksNestedInput
  }

  export type UserBookUncheckedUpdateWithoutBookInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookUncheckedUpdateManyWithoutBookInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumReadingStatusFieldUpdateOperationsInput | $Enums.ReadingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorBookUpdateWithoutBookInput = {
    author?: AuthorUpdateOneRequiredWithoutAuthorBooksNestedInput
  }

  export type AuthorBookUncheckedUpdateWithoutBookInput = {
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorBookUncheckedUpdateManyWithoutBookInput = {
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorBookCreateManyAuthorInput = {
    bookId: string
  }

  export type BookUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    userBooks?: UserBookUpdateManyWithoutBookNestedInput
    authorBooks?: AuthorBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    userBooks?: UserBookUncheckedUpdateManyWithoutBookNestedInput
    authorBooks?: AuthorBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthorBookUpdateWithoutAuthorInput = {
    book?: BookUpdateOneRequiredWithoutAuthorBooksNestedInput
  }

  export type AuthorBookUncheckedUpdateWithoutAuthorInput = {
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorBookUncheckedUpdateManyWithoutAuthorInput = {
    bookId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}