import Config from "../config/config";
import {Client,Databases,ID,Storage,Query} from "appwrite"

export class Service{
    client=new Client();
    database;
    storage;
    constructor(){
        this.client
        .setEndpoint(Config.appwriteUrl)
        .setProject(Config.appwriteProjectId);
        this.database=new Databases(this.client)
        this.storage=new Storage(this.client)
    }
    async createPost(title,slug,content,featuredImage,status,userId){
        try {
            await this.database.createDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                })
        } catch (error) {
            console.log("Appwrite service :: CreatePost :: error",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.database.updateDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                })
        } catch (error) {
            console.log("Appwrite service :: UpdatePost :: error",error)
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: DeletePost :: error",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: GetPost :: error",error)
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: GetPosts :: error",error)
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                Config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: UploadFile :: error",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.createFile(
                Config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: Deletefile :: error",error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            Config.appwriteBucketId,
            fileId
        )
    }
}
const service=new Service()

export default service;