'use client'
import register, { RegisterResult } from "@/app/features/auth/register";
import { AlertIcon } from "@/app/components/Icons";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SignupForm() {

   const router = useRouter();

   /* ----- Birthday options config ----- */
      const [day, setDay] = useState("");
      const [month, setMonth] = useState("");
      const [year, setYear] = useState("");

      const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));

      const months = [
         { value: '01', label: 'January' },
         { value: '02', label: 'February' },
         { value: '03', label: 'March' },
         { value: '04', label: 'April' },
         { value: '05', label: 'May' },
         { value: '06', label: 'June' },
         { value: '07', label: 'July' },
         { value: '08', label: 'August' },
         { value: '09', label: 'September' },
         { value: '10', label: 'October' },
         { value: '11', label: 'November' },
         { value: '12', label: 'December' },
      ]

      const currentYear = new Date().getFullYear();
      const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));

      const birthdayInputsStyles = "flex-1 p-2.5 border rounded-sm w-full cursor-pointer outline-none focus:border-transparent text-gray-700 focus:ring-2 focus:ring-blue-200"

   /* ----- Form config ----- */
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [showErrors, setShowErrors] = useState({
      username: false,
      password: false,
      name: false,
      KeyUserAttr: false,
      birthday: false,
      })

      const ErrorSpanStyles = "text-red-500 font-bold flex flex-row items-center gap-2 text-sm"


   async function RequestRegister(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsSubmitting(true);

      const formData = new FormData(event.currentTarget);

      const response: RegisterResult = await register(formData);

      if (response.errors) setShowErrors(response.errors);

      if (!response.success) {
         setIsSubmitting(false);
         if (response.message) console.error('Erro no cadastro:', response.message);

         return;
      }

      // Success!
      console.log('Sucesso:', response.message);
      console.log('Dados do usuário:', response.data);
   }


   return (
      <form onSubmit={RequestRegister} className="flex flex-col gap-2 w-2xl">
         <span
            className="font-bold text-3xl"
         >
            Create your account.</span>
         <span>Signup to see your friends photos and videos.</span>

         <label className="font-bold mt-2">Phone number or email</label>
         <input
            className={`p-2.5 border rounded-sm w-full ${showErrors.KeyUserAttr ? "border border-red-500" : ""}`}
            type="text" placeholder="Phone number or email"
            name="phoneOrEmail"
         />
         {showErrors.KeyUserAttr && (
            <span
               className={`${ErrorSpanStyles}`}
            >
               <AlertIcon iconSize={18} />
               Enter a valid mobile phone number or email address.
            </span>
         )}

         <label className="font-bold mt-2">Password</label>
         <input
            className={`p-2.5 border rounded-sm w-full ${showErrors.password ? "border border-red-500" : ""}`}
            type="password" placeholder="Password"
            name="password"
         />
         {showErrors.password && (
            <span
               className={`${ErrorSpanStyles}`}
            >
               <AlertIcon iconSize={18} />
               Enter a password with at least 1 number and 1 letter. minimum 4 characters, maximum 15.
            </span>
         )}

         <label className="font-bold mt-2">Birthday Date</label>
         <div className="flex flex-row gap-1.5 w-full">
            <select
               value={day}
               onChange={(e) => setDay(e.target.value)}
               className={`${birthdayInputsStyles} ${showErrors.birthday ? " border-red-500" : ""}`}
               name="day"
            >
               <option value="" disabled>Day</option>
               {days.map((d) => (
                  <option key={d} value={d}>
                     {d}
                  </option>
               ))}
            </select>
            <select
               value={month}
               onChange={(e) => setMonth(e.target.value)}
               className={`${birthdayInputsStyles} ${showErrors.birthday ? " border-red-500" : ""}`}
               name="month"
            >
               <option value="" disabled>Month</option>
               {months.map((m) => (
                  <option key={m.value} value={m.value}>
                     {m.label}
                  </option>
               ))}
            </select>
            <select
               value={year}
               onChange={(e) => setYear(e.target.value)}
               className={`${birthdayInputsStyles} ${showErrors.birthday ? " border-red-500" : ""}`}
               name="year"
            >
               <option value="" disabled>Year</option>
               {years.map((y => (
                  <option key={y} value={y}>
                     {y}
                  </option>
               )))}
            </select>
         </div>
         {showErrors.birthday && (
            <span
               className={`${ErrorSpanStyles}`}
            >
               <AlertIcon iconSize={18} />
               Enter a valid birthday date.
            </span>
         )}

         <label className="font-bold mt-2">Name</label>
         <input
            className={`p-2.5 border rounded-sm w-full ${showErrors.name ? "border border-red-500" : ""}`}
            type="text" placeholder="Complete Name"
            name="name"
         />
         {showErrors.name && (
            <span
               className={`${ErrorSpanStyles}`}
            >
               <AlertIcon iconSize={18} />
               Enter your first name and your last name.
            </span>
         )}

         <label className="font-bold mt-2">Username</label>
         <input
            className={`p-2.5 border rounded-sm w-full ${showErrors.username ? "border border-red-500" : "mb-4"}`}
            type="text" placeholder="Username"
            name="username"
         />
         {showErrors.username && (
            <span
               className={`${ErrorSpanStyles} mb-4`}
            >
               <AlertIcon iconSize={18} />
               Enter a valid username or an username no one has taken.
            </span>
         )}

         <Button variant="primary" type="submit"
            disabled={isSubmitting}
         >
            Send
         </Button>
         <Button variant="secondary" onClick={() => router.back()}>Cancel</Button>
      </form>
   )
}
