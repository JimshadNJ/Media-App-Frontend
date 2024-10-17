import { commonAPI } from "./commonAPIs";
import { serverUrl } from "./serverUrl";

//Add Video API
export const addVideoAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/allVideos`,reqBody)
}
//get all videos
export const getVideoAPI =async()=>{
    return await commonAPI('get',`${serverUrl}/allVideos`,{})
}
//delete a perticular video details
export const deleteAVideoAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/allVideos/${id}`,"")
}

//add watch history API
export const addHistoryAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/watchHistory`,reqBody)
}
//get watch history API
export const getHistoryAPI = async()=>{
    return await commonAPI('get',`${serverUrl}/watchHistory`,{})
}
//delete watch history API
export const deleteHistoryAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/watchHistory/${id}`,"")
}

//add category API
export const addCategoryAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/category`,reqBody)
}
//get category API
export const getCategoryAPI = async()=>{
    return await commonAPI('get',`${serverUrl}/category`,{})
}
//delete category API
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/category/${id}`,"")
}

//get a particular video details API
export const getAVideoDetailsAPI = async(id)=>{
    return await commonAPI('get',`${serverUrl}/allVideos/${id}`,{})
}

//update a particular video deteils in category
export const updateAVideoDetailsAPI = async(categoryId,categoryDetails)=>{
    return await commonAPI('put',`${serverUrl}/category/${categoryId}`,categoryDetails)
}