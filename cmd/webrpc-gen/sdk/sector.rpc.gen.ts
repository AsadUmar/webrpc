/* eslint-disable */
// api v0.0.1 74fef560421d116d5e5bf66c1388111ee357305b
// --
// This file has been generated by https://github.com/webrpc/webrpc using gen/typescript
// Do not edit by hand. Update your webrpc schema and re-generate.

// WebRPC description and code-gen version
export const WebRPCVersion = "v1"

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = "v0.0.1"

// Schema hash generated from your RIDL schema
export const WebRPCSchemaHash = "74fef560421d116d5e5bf66c1388111ee357305b"


//
// Types
//
export interface Status {
  success: boolean
  error: string
  id: number
  message: string
}

export interface PartialStatus {
  success?: boolean
  error?: string
  id?: number
  message?: string
  keys: Array<string>
}

export interface AssetData {
  type: string
  file: string
}

export interface PartialAssetData {
  type?: string
  file?: string
  keys: Array<string>
}

export interface Asset {
  id?: number
  uuid?: string
  product_id: number
  resolution: string
  revision?: number
  data: AssetData
}

export interface PartialAsset {
  id?: number
  uuid?: string
  product_id?: number
  resolution?: string
  revision?: number
  data?: AssetData
  keys: Array<string>
}

export interface Coordinates {
  x: number
  y: number
  z: number
}

export interface PartialCoordinates {
  x?: number
  y?: number
  z?: number
  keys: Array<string>
}

export interface Group {
  name: string
}

export interface PartialGroup {
  name?: string
  keys: Array<string>
}

export interface Choice {
  name: string
  group?: number
  id: string
  thumbnail?: string
}

export interface PartialChoice {
  name?: string
  group?: number
  id?: string
  thumbnail?: string
  keys: Array<string>
}

export interface Option {
  name: string
  groups?: Array<Group>
  choices: Array<Choice>
  id: string
  creatorOnly: boolean
}

export interface PartialOption {
  name?: string
  groups?: Array<Group>
  choices?: Array<Choice>
  id?: string
  creatorOnly?: boolean
  keys: Array<string>
}

export interface SizeOptions {
  step: number
  start: number
  end: number
}

export interface PartialSizeOptions {
  step?: number
  start?: number
  end?: number
  keys: Array<string>
}

export interface ProductData {
  size: Coordinates
  offset: Coordinates
  options?: Array<Option>
  size_options?: SizeOptions
  data_sheet?: string
}

export interface PartialProductData {
  size?: Coordinates
  offset?: Coordinates
  options?: Array<Option>
  size_options?: SizeOptions
  data_sheet?: string
  keys: Array<string>
}

export interface Product {
  id: number
  uuid?: string
  name: string
  description: string
  typ: string
  category: Category
  brand: Brand
  data: ProductData
  thumbnail: string
  price: number
  asset: Array<Asset>
}

export interface PartialProduct {
  id?: number
  uuid?: string
  name?: string
  description?: string
  typ?: string
  category?: Category
  brand?: Brand
  data?: ProductData
  thumbnail?: string
  price?: number
  asset?: Array<Asset>
  keys: Array<string>
}

export interface ProductRequest {
  id: number
  name: string
  description: string
  typ: string
  data: ProductData
  category_id: number
  brand_id: number
}

export interface PartialProductRequest {
  id?: number
  name?: string
  description?: string
  typ?: string
  data?: ProductData
  category_id?: number
  brand_id?: number
  keys: Array<string>
}

export interface Program {
  id?: number
  company_id: number
  name: string
  address: string
  thumbnail: string
  flat_count: number
  user_id: number
  products?: Array<number>
  data: string
}

export interface PartialProgram {
  id?: number
  company_id?: number
  name?: string
  address?: string
  thumbnail?: string
  flat_count?: number
  user_id?: number
  products?: Array<number>
  data?: string
  keys: Array<string>
}

export interface Brand {
  id: number
  name: string
}

export interface PartialBrand {
  id?: number
  name?: string
  keys: Array<string>
}

export interface Category {
  id: number
  parent_id: number
  name: string
}

export interface PartialCategory {
  id?: number
  parent_id?: number
  name?: string
  keys: Array<string>
}

export interface AssetService {
  get(args: AssetServiceGetArgs, headers?: object): Promise<AssetServiceGetReturn>
  getAll(args: AssetServiceGetAllArgs, headers?: object): Promise<AssetServiceGetAllReturn>
  getByUUID(args: AssetServiceGetByUUIDArgs, headers?: object): Promise<AssetServiceGetByUUIDReturn>
  create(args: AssetServiceCreateArgs, headers?: object): Promise<AssetServiceCreateReturn>
  update(args: AssetServiceUpdateArgs, headers?: object): Promise<AssetServiceUpdateReturn>
  remove(args: AssetServiceRemoveArgs, headers?: object): Promise<AssetServiceRemoveReturn>
  getFileUploadURL(args: AssetServiceGetFileUploadURLArgs, headers?: object): Promise<AssetServiceGetFileUploadURLReturn>
}

export interface AssetServiceGetArgs {
  id: number
}

export interface AssetServiceGetReturn {
  result: Asset  
}
export interface AssetServiceGetAllArgs {
  product_id: number
  limit: number
}

export interface AssetServiceGetAllReturn {
  result: Array<Asset>  
}
export interface AssetServiceGetByUUIDArgs {
  uuid: string
}

export interface AssetServiceGetByUUIDReturn {
  result: Asset  
}
export interface AssetServiceCreateArgs {
  asset: Asset
}

export interface AssetServiceCreateReturn {
  status: Status  
}
export interface AssetServiceUpdateArgs {
  id: number
  asset: PartialAsset
}

export interface AssetServiceUpdateReturn {
  status: Status  
}
export interface AssetServiceRemoveArgs {
  id: number
}

export interface AssetServiceRemoveReturn {
  status: Status  
}
export interface AssetServiceGetFileUploadURLArgs {
  id: number
}

export interface AssetServiceGetFileUploadURLReturn {
  url: string  
}

export interface ProductService {
  getAll(args: ProductServiceGetAllArgs, headers?: object): Promise<ProductServiceGetAllReturn>
  getByProgram(args: ProductServiceGetByProgramArgs, headers?: object): Promise<ProductServiceGetByProgramReturn>
  get(args: ProductServiceGetArgs, headers?: object): Promise<ProductServiceGetReturn>
  create(args: ProductServiceCreateArgs, headers?: object): Promise<ProductServiceCreateReturn>
  update(args: ProductServiceUpdateArgs, headers?: object): Promise<ProductServiceUpdateReturn>
  remove(args: ProductServiceRemoveArgs, headers?: object): Promise<ProductServiceRemoveReturn>
  getBrands(headers?: object): Promise<ProductServiceGetBrandsReturn>
  getCategories(headers?: object): Promise<ProductServiceGetCategoriesReturn>
  getByCategory(args: ProductServiceGetByCategoryArgs, headers?: object): Promise<ProductServiceGetByCategoryReturn>
  getThumbnailUploadURL(args: ProductServiceGetThumbnailUploadURLArgs, headers?: object): Promise<ProductServiceGetThumbnailUploadURLReturn>
  getPDFUploadURL(args: ProductServiceGetPDFUploadURLArgs, headers?: object): Promise<ProductServiceGetPDFUploadURLReturn>
  getOptionThumbnailUploadURL(args: ProductServiceGetOptionThumbnailUploadURLArgs, headers?: object): Promise<ProductServiceGetOptionThumbnailUploadURLReturn>
}

export interface ProductServiceGetAllArgs {
  typ: string
  limit: number
}

export interface ProductServiceGetAllReturn {
  result: Array<Product>  
}
export interface ProductServiceGetByProgramArgs {
  typ: string
  id: number
}

export interface ProductServiceGetByProgramReturn {
  result: Array<Product>  
}
export interface ProductServiceGetArgs {
  id: number
}

export interface ProductServiceGetReturn {
  result: Product  
}
export interface ProductServiceCreateArgs {
  product: ProductRequest
}

export interface ProductServiceCreateReturn {
  status: Status  
}
export interface ProductServiceUpdateArgs {
  id: number
  product: PartialProductRequest
}

export interface ProductServiceUpdateReturn {
  status: Status  
}
export interface ProductServiceRemoveArgs {
  id: number
}

export interface ProductServiceRemoveReturn {
  status: Status  
}
export interface ProductServiceGetBrandsArgs {
}

export interface ProductServiceGetBrandsReturn {
  result: Array<Brand>  
}
export interface ProductServiceGetCategoriesArgs {
}

export interface ProductServiceGetCategoriesReturn {
  result: Array<Category>  
}
export interface ProductServiceGetByCategoryArgs {
  typ: string
  category: number
  limit: number
}

export interface ProductServiceGetByCategoryReturn {
  result: Array<Product>  
}
export interface ProductServiceGetThumbnailUploadURLArgs {
  id: number
}

export interface ProductServiceGetThumbnailUploadURLReturn {
  url: string  
}
export interface ProductServiceGetPDFUploadURLArgs {
  id: number
}

export interface ProductServiceGetPDFUploadURLReturn {
  url: string  
}
export interface ProductServiceGetOptionThumbnailUploadURLArgs {
  productID: number
  optionID: string
  choiceID: string
}

export interface ProductServiceGetOptionThumbnailUploadURLReturn {
  url: string  
}


  
//
// Client
//
export class AssetService implements AssetService {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/AssetService/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = fetch
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }
  
  get = (args: AssetServiceGetArgs, headers?: object): Promise<AssetServiceGetReturn> => {
    return this.fetch(
      this.url('Get'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          result: <Asset>(_data.result)
        }
      })
    })
  }
  
  getAll = (args: AssetServiceGetAllArgs, headers?: object): Promise<AssetServiceGetAllReturn> => {
    return this.fetch(
      this.url('GetAll'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          result: <Array<Asset>>(_data.result)
        }
      })
    })
  }
  
  getByUUID = (args: AssetServiceGetByUUIDArgs, headers?: object): Promise<AssetServiceGetByUUIDReturn> => {
    return this.fetch(
      this.url('GetByUUID'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          result: <Asset>(_data.result)
        }
      })
    })
  }
  
  create = (args: AssetServiceCreateArgs, headers?: object): Promise<AssetServiceCreateReturn> => {
    return this.fetch(
      this.url('Create'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <Status>(_data.status)
        }
      })
    })
  }
  
  update = (args: AssetServiceUpdateArgs, headers?: object): Promise<AssetServiceUpdateReturn> => {
    return this.fetch(
      this.url('Update'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <Status>(_data.status)
        }
      })
    })
  }
  
  remove = (args: AssetServiceRemoveArgs, headers?: object): Promise<AssetServiceRemoveReturn> => {
    return this.fetch(
      this.url('Remove'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <Status>(_data.status)
        }
      })
    })
  }
  
  getFileUploadURL = (args: AssetServiceGetFileUploadURLArgs, headers?: object): Promise<AssetServiceGetFileUploadURLReturn> => {
    return this.fetch(
      this.url('GetFileUploadURL'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          url: <string>(_data.url)
        }
      })
    })
  }
  
}

export class ProductService implements ProductService {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/ProductService/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = fetch
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }
  
  getAll = (args: ProductServiceGetAllArgs, headers?: object): Promise<ProductServiceGetAllReturn> => {
    return this.fetch(
      this.url('GetAll'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          result: <Array<Product>>(_data.result)
        }
      })
    })
  }
  
  getByProgram = (args: ProductServiceGetByProgramArgs, headers?: object): Promise<ProductServiceGetByProgramReturn> => {
    return this.fetch(
      this.url('GetByProgram'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          result: <Array<Product>>(_data.result)
        }
      })
    })
  }
  
  get = (args: ProductServiceGetArgs, headers?: object): Promise<ProductServiceGetReturn> => {
    return this.fetch(
      this.url('Get'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          result: <Product>(_data.result)
        }
      })
    })
  }
  
  create = (args: ProductServiceCreateArgs, headers?: object): Promise<ProductServiceCreateReturn> => {
    return this.fetch(
      this.url('Create'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <Status>(_data.status)
        }
      })
    })
  }
  
  update = (args: ProductServiceUpdateArgs, headers?: object): Promise<ProductServiceUpdateReturn> => {
    return this.fetch(
      this.url('Update'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <Status>(_data.status)
        }
      })
    })
  }
  
  remove = (args: ProductServiceRemoveArgs, headers?: object): Promise<ProductServiceRemoveReturn> => {
    return this.fetch(
      this.url('Remove'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <Status>(_data.status)
        }
      })
    })
  }
  
  getBrands = (headers?: object): Promise<ProductServiceGetBrandsReturn> => {
    return this.fetch(
      this.url('GetBrands'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          result: <Array<Brand>>(_data.result)
        }
      })
    })
  }
  
  getCategories = (headers?: object): Promise<ProductServiceGetCategoriesReturn> => {
    return this.fetch(
      this.url('GetCategories'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          result: <Array<Category>>(_data.result)
        }
      })
    })
  }
  
  getByCategory = (args: ProductServiceGetByCategoryArgs, headers?: object): Promise<ProductServiceGetByCategoryReturn> => {
    return this.fetch(
      this.url('GetByCategory'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          result: <Array<Product>>(_data.result)
        }
      })
    })
  }
  
  getThumbnailUploadURL = (args: ProductServiceGetThumbnailUploadURLArgs, headers?: object): Promise<ProductServiceGetThumbnailUploadURLReturn> => {
    return this.fetch(
      this.url('GetThumbnailUploadURL'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          url: <string>(_data.url)
        }
      })
    })
  }
  
  getPDFUploadURL = (args: ProductServiceGetPDFUploadURLArgs, headers?: object): Promise<ProductServiceGetPDFUploadURLReturn> => {
    return this.fetch(
      this.url('GetPDFUploadURL'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          url: <string>(_data.url)
        }
      })
    })
  }
  
  getOptionThumbnailUploadURL = (args: ProductServiceGetOptionThumbnailUploadURLArgs, headers?: object): Promise<ProductServiceGetOptionThumbnailUploadURLReturn> => {
    return this.fetch(
      this.url('GetOptionThumbnailUploadURL'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          url: <string>(_data.url)
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

const createHTTPRequest = (body: object = {}, headers: object = {}): object => {
  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {})
  }
}

const buildResponse = (res: Response): Promise<any> => {
  return res.text().then(text => {
    let data
    try {
      data = JSON.parse(text)
    } catch(err) {
      throw { code: 'unknown', msg: `expecting JSON, got: ${text}`, status: res.status } as WebRPCError
    }
    if (!res.ok) {
      throw data // webrpc error response
    }
    return data
  })
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
