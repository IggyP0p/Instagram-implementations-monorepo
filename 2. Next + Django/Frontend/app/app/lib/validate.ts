export const isValid = {

   // valid format (11987654321, 5511987654321)
   phoneNumber(phone: string): boolean {
      const cleaned = phone.replace(/\D/g, '');
      const phoneRegex = /^(?:55)?(?:[1-9]{2})(?:9[0-9]{8})$/;
      return phoneRegex.test(cleaned);
   },

   // format (user@domain.com)
   email(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
   },

   // 4 minimum characters, at least 1 letter and 1 number
   password(password: string): boolean {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/;
      return passwordRegex.test(password);
   },

   // Avoid people birth future
   birthdayDate(dateString: string): boolean {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(dateString)) return false;

      const date = new Date(dateString);
      const timestamp = date.getTime();

      if (isNaN(timestamp)) return false;
      return date <= new Date();
   },

   // 2 minimum characters, just letters and spaces
   name(names: string[]): boolean {
      const [firstName, lastName] = names;
      const nameRegex = /^[A-Za-zÀ-ÿ\s]{2,}$/;

      const isFirstNameValid = Boolean(firstName) && nameRegex.test(firstName.trim());
      const isLastNameValid = Boolean(lastName) && nameRegex.test(lastName.trim());

      return isFirstNameValid && isLastNameValid;
   },

   // 4 to 15 characters (permit letters and numbers)
   username(username: string): boolean {
      const usernameRegex = /^[a-zA-Z0-9_-]{3,15}$/;
      return usernameRegex.test(username.trim());
   },

};
