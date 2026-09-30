export const format = {

   postDescription(text: string): string {

      let result:string = "";

      if (text.length > 150) {
         return result = text.slice(0, 150) + "...";
      }

      return result;
   },


   phoneNumber(text: string): string {
      const cleaned = text.replace(/\D/g, '');

      const result = cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

      return result;
   },


   cleanPhoneNumber(text: string): string {
      const result = text.replace(/\D/g, '');

      return result
   },


   name(text: string): string[] {
      const trimmed = text.trim();

      if (!trimmed) return ['', ''];

      const spaceIndex = trimmed.indexOf(' ');

      if (spaceIndex === -1) {
         return [trimmed, ''];
      }

      const firstName = trimmed.slice(0, spaceIndex);
      const lastName = trimmed.slice(spaceIndex + 1).trim();

      return [firstName, lastName];
   },


   birthdayDate(year: string, month: string, day: string): string {
      if (!year || !month || !day) return "";

      const formattedMonth = month.padStart(2, "0");
      const formattedDay = day.padStart(2, "0");

      const result = `${year}-${formattedMonth}-${formattedDay}`;

      return result;
   }

}
