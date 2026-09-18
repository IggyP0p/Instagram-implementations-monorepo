export const formatter = {

   postDescription(text: string):string {

      let result:string = "";

      if (text.length > 150) {
         return result = text.slice(0, 150) + "...";
      }

      return result;
   }
}
