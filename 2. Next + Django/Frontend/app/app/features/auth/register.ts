import { UserRegisterRequest, UserAuthResponseType } from "@/app/types/users";
import { apiAuth } from "@/app/lib/api/apiAuth";
import { isValid } from "@/app/lib/validate";
import { format } from "@/app/lib/format";

export interface RegisterResult {
   success: boolean;
   errors?: {
      username: boolean;
      password: boolean;
      name: boolean;
      KeyUserAttr: boolean;
      birthday: boolean;
   };
   message?: string;
   data?: UserAuthResponseType;
}

export default async function register(formData: Record<string, any>): Promise<RegisterResult> {

   /* ----- formatting and validating ----- */
   const data = Object.fromEntries(formData.entries());

   const usernameInvalid = !isValid.username(String(data.username));
   const passwordInvalid = !isValid.password(String(data.password));

   const name = format.name(String(data.name));
   const nameInvalid = !isValid.name(name);

   const phoneInvalid = !isValid.phoneNumber(String(data.phoneOrEmail));

   const emailInvalid = !isValid.email(String(data.phoneOrEmail));

   const KeyUserAttrInvalid = !(phoneInvalid || emailInvalid);

   const birthdayComplete = format.birthdayDate(String(data.year), String(data.month), String(data.day));

   const birthdayInvalid = !isValid.birthdayDate(birthdayComplete);

   const errors = {
      username: usernameInvalid,
      password: passwordInvalid,
      name: nameInvalid,
      KeyUserAttr: KeyUserAttrInvalid,
      birthday: birthdayInvalid,
   }

   const hasErrors = Object.values(errors).some(Boolean);

   if (hasErrors) {
      return {
         success: false,
         errors,
      };
   }

   /* mounting request */
   const payload: UserRegisterRequest = {
      username: String(data.username),
      password: String(data.password),
      first_name: name[0],
      last_name: name[1],
      birthday: birthdayComplete,
   }

   if (!emailInvalid) {
      payload.email = String(data.phoneOrEmail);

   } else if (!phoneInvalid) {
      payload.phone = String(data.phoneOrEmail);

   };

   try {
      const response = await apiAuth.register(payload);
      return {
         success: true,
         data: response,
      }
   } catch (error: any) {
      return {
         success: false,
         message: error.message,
      }
   }
}
