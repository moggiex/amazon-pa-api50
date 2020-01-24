const ProductAdvertisingAPIv1 = require('../sdk/src/index')

class Api {
  constructor (props) {
    const defaultClient = ProductAdvertisingAPIv1.ApiClient.instance
    defaultClient.accessKey = props._accessKey
    defaultClient.secretKey = props.secretKey
    defaultClient.host = props.host
    defaultClient.region = props.region

    this.props = props
    this._api = new ProductAdvertisingAPIv1.DefaultApi(defaultClient)
  }

  /**
   * Find items by id or ids
   * @param {array} ids
   * @param {object} params
   */
  getItemById (ids, params = {
    parameters: null,
    condition: 'New'
  }) {
    let getItemsRequest = new ProductAdvertisingAPIv1.GetItemsRequest()
    getItemsRequest = {
      PartnerTag: this.props.partnerTag,
      PartnerType: this.props.partnerType,
      Resources: this.props.resourceParameters,
      ItemIds: ids
    }

    if (params.resources !== null || params.resources !== 'undefined') {
      getItemsRequest.Resources = params.resources
    }

    if (params.condition !== null || params.condition !== 'undefined') {
      getItemsRequest.Condition = params.condition
    }

    return new Promise((resolve, reject) => {
      try {
        this._api.getItems(getItemsRequest, (err, data, response) => {
          if (err) {
            reject(new Error(err))
          }
          let getItemsResponse = ProductAdvertisingAPIv1.GetItemsResponse.constructFromObject(data)
          getItemsResponse = JSON.parse(JSON.stringify(getItemsResponse))
          resolve(
            {
              data: getItemsResponse,
              response: response
            }
          )
        })
      } catch (ex) {
        reject(ex)
      }
    })
  }

  /**
   * Get Browse Nodes
   * @param {array} nodeIds
   * @param {object} params
   */
  getBrowseNodes (nodeIds, params = {
    parameters: null
  }) {
    let getBrowseNodesRequest = new ProductAdvertisingAPIv1.GetBrowseNodesRequest()
    getBrowseNodesRequest = {
      PartnerTag: this.props.partnerTag,
      PartnerType: this.props.partnerType,
      Resources: this.props.resourceParameters,
      BrowseNodeIds: nodeIds
    }

    if (params.parameters !== null || params.parameters !== 'undefined') {
      getBrowseNodesRequest.Resources = params.parameters
    }

    return new Promise((resolve, reject) => {
      try {
        this._api.getBrowseNodes(getBrowseNodesRequest, (err, data, response) => {
          if (err) {
            reject(new Error(err))
          }
          let getBrowseNodesResponse = ProductAdvertisingAPIv1.GetBrowseNodesResponse.constructFromObject(data)
          getBrowseNodesResponse = JSON.parse(JSON.stringify(getBrowseNodesResponse))
          resolve(
            {
              data: getBrowseNodesResponse,
              response: response
            }
          )
        })
      } catch (ex) {
        reject(ex)
      }
    })
  }

  /**
   * Get Variations
   * @param {string} asin
   * @param {object} params
   */
  getVariations (asin, params = {
    parameters: null,
    condition: 'New'
  }) {
    let getVariationsRequest = new ProductAdvertisingAPIv1.GetVariationsRequest()
    getVariationsRequest = {
      PartnerTag: this.props.partnerTag,
      PartnerType: this.props.partnerType,
      Resources: this.props.resourceParameters,
      ASIN: asin
    }

    if (params.parameters !== null || params.parameters !== 'undefined') {
      getVariationsRequest.Resources = params.parameters
    }
    if (params.condition !== null || params.condition !== 'undefined') {
      getVariationsRequest.Condition = params.condition
    }

    return new Promise((resolve, reject) => {
      try {
        this._api.getVariations(getVariationsRequest, (err, data, response) => {
          if (err) {
            reject(new Error(err))
          }
          let variationsResponse = ProductAdvertisingAPIv1.GetVariationsResponse.constructFromObject(data)
          variationsResponse = JSON.parse(JSON.stringify(variationsResponse))
          resolve(
            {
              data: variationsResponse,
              response: response
            }
          )
        })
      } catch (ex) {
        reject(ex)
      }
    })
  }

  /**
   * Search Amazon Products
   * @param {string} keywords
   * @param {object} params
   */
  search (keywords, params = {
    parameters: null,
    condition: 'New'
  }) {
    let getSearchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest()
    getSearchItemsRequest = {
      PartnerTag: this.props.partnerTag,
      PartnerType: this.props.partnerType,
      Resources: this.props.resourceParameters,
      Keywords: keywords
    }

    if (params.parameters !== null || params.parameters !== 'undefined') {
      getSearchItemsRequest.Resources = params.parameters
    }
    if (params.searchIndex !== null || params.searchIndex !== 'undefined') {
      getSearchItemsRequest.SearchIndex = params.searchIndex
    }
    if (params.itemCount !== null || params.itemCount !== 'undefined') {
      getSearchItemsRequest.ItemCount = params.itemCount
    }

    return new Promise((resolve, reject) => {
      try {
        this._api.searchItems(getSearchItemsRequest, (err, data, response) => {
          if (err) {
            reject(new Error(err))
          }
          let searchItemsResponse = ProductAdvertisingAPIv1.SearchItemsResponse.constructFromObject(data)
          searchItemsResponse = JSON.parse(JSON.stringify(searchItemsResponse))
          resolve(
            {
              data: searchItemsResponse,
              response: response
            }
          )
        })
      } catch (ex) {
        reject(ex)
      }
    })
  }
}

module.exports = Api
