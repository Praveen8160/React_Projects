// import config from '../config.js'
import Config from "../config/config";
import {Client,Account,ID} from "appwrite"

export class Authentication{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(Config.appwriteUrl)
        .setProject(Config.appwriteProjectId);
        this.account=new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount)
            {
                return this.login({email,password})
            }
            else{
                return userAccount
            }
            
        } catch (error) {
            throw error;
        }
    }
    async login({email,password})
    {
        try {
            return await this.account.createSession(email,password);
        } catch (error) {
            console.log("Appwrite service: :: login :: error",error)
            // throw error;
        }
    }
    async getCurrentUser()
    {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error)
        }
    }
}
const authenticate=new Authentication()
export default authenticate;