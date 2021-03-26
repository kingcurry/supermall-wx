import request from './request'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory (maitKet) {
  return request({
    url: '/subcategory',
    data: {
      maitKet
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}