import Photo from '../models/photo.model'

/**
 * @desc Retrieve photos list
 **/
export const getPhotos = async({
  offset = 0,
  limit = 18
}) => Photo.find({}, null, {
  skip: parseInt(offset),
  limit: parseInt(limit)
})

/**
 * @desc Create photo
 * @return {Promise}
 **/

export const createPhoto = async({
  title, image, description
}) => {
  return Photo.create({
    title,
    image,
    description
  })
}

/**
 * @desc Search photo by Id
 **/
export const getPhotoById = async id => Photo.findById(id)

/**
  * @desc Delete photo by ID
 **/
export const deletePhotoById = async id => Photo.findByIdAndDelete(id)
