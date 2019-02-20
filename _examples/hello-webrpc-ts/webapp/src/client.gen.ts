/* tslint:disable */
// hello-webrpc v1.0.0
// --
// This file has been generated by https://github.com/webrpc/webrpc using gen/typescript
// Do not edit by hand. Update your webrpc schema and re-generate.


export enum Kind {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface IEmpty {
  toJSON?(): object
}

export class Empty implements IEmpty {
  private _data: IEmpty
  constructor(_data?: IEmpty) {
    this._data = {} as IEmpty
    if (_data) {
      
    }
  }
  
  public toJSON(): object {
    return this._data
  }
}

export interface IUser {
  id: number
  USERNAME: string
  role: Kind
  meta: object
  created_at?: string
  toJSON?(): object
}

export class User implements IUser {
  private _data: IUser
  constructor(_data?: IUser) {
    this._data = {} as IUser
    if (_data) {
      this._data['id'] = _data['id']!
      this._data['USERNAME'] = _data['USERNAME']!
      this._data['role'] = _data['role']!
      this._data['meta'] = _data['meta']!
      this._data['created_at'] = _data['created_at']!
      
    }
  }
  public get id(): number {
    return this._data['id']!
  }
  public set id(value: number) {
    this._data['id'] = value
  }
  public get USERNAME(): string {
    return this._data['USERNAME']!
  }
  public set USERNAME(value: string) {
    this._data['USERNAME'] = value
  }
  public get role(): Kind {
    return this._data['role']!
  }
  public set role(value: Kind) {
    this._data['role'] = value
  }
  public get meta(): object {
    return this._data['meta']!
  }
  public set meta(value: object) {
    this._data['meta'] = value
  }
  public get created_at(): string {
    return this._data['created_at']!
  }
  public set created_at(value: string) {
    this._data['created_at'] = value
  }
  
  public toJSON(): object {
    return this._data
  }
}
export interface IExampleService {
  ping(headers: object): Promise<IExampleServicePingReturn>
  getUser(args: IExampleServiceGetUserArgs, headers: object): Promise<IExampleServiceGetUserReturn>
  
}

export interface IExampleServicePingArgs {
}

export interface IExampleServicePingReturn {
  status: boolean  
}
export interface IExampleServiceGetUserArgs {
  userID: number
}

export interface IExampleServiceGetUserReturn {
  user: IUser  
}


  
// Client

const ExampleServicePathPrefix = "/rpc/ExampleService/"

export class ExampleService implements IExampleService {
  private hostname: string
  private fetch: Fetch
  private path = '/rpc/ExampleService/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = fetch
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }

  
  ping(headers: object = {}): Promise<IExampleServicePingReturn> {
    return this.fetch(
      this.url('Ping'),
      
      createHTTPRequest({}, headers)
      
    ).then((res) => {
      if (!res.ok) {
        return throwHTTPError(res)
      }
      return res.json().then((_data) => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  getUser(args: IExampleServiceGetUserArgs, headers: object = {}): Promise<IExampleServiceGetUserReturn> {
    return this.fetch(
      this.url('GetUser'),
      
      createHTTPRequest(args, headers)
      
    ).then((res) => {
      if (!res.ok) {
        return throwHTTPError(res)
      }
      return res.json().then((_data) => {
        return {
          user: new User(_data.user)
        }
      })
    })
  }
  
}



export interface WebRPCError extends Error {
  code: string
  msg: string
	status: number
}

export const throwHTTPError = (resp: Response) => {
  return resp.json().then((err: WebRPCError) => { throw err })
}

export const createHTTPRequest = (body: object = {}, headers: object = {}): object => {
  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {})
  }
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
