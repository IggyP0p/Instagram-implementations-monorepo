export interface userType {
   id: number,
   username: string,
   email?: string,
   firstName: string,
   lastName: string,
   phone?: string,
   birthday: string,
}


export interface tokensType {
   refresh: string,
   access: string,
}


export interface UserAuthResponseType {
   message:string,
   user: userType,
   tokens: tokensType,
}


export interface UserRegisterRequest {
   username: string,
   password: string,
   first_name: string,
   last_name: string,
   email?: string,
   phone?: string,
   birthday: string,
}


export interface UserLoginRequest {
   login_data: string,
   password: string,
}


export interface UserPatchRequest {
   email?: string,
   first_name?: string,
   last_name?: string,
   phone?: string,
   password?: string,
   birthday?: string,
}


export interface FollowUser {
   id?: string,
   following_user: string,
   followed_user: string,
   created_at?: string,
}


export interface SendMessage {
   id?: string,
   user_sender: string,
   user_receiver: string,
   content: string,
}
