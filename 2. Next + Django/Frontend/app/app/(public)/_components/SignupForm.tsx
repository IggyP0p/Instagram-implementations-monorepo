import Button from "@/app/components/Button"

export default function SignupForm() {
   return (
      <div className="flex flex-col gap-2">
         <span
            className="font-bold text-3xl"
         >
            Create your account.</span>
         <span>Signup to see your friends photos and videos.</span>

         <label className="font-bold mt-2">Phone number or email</label>
         <input
            className="p-2.5 border rounded-sm w-full"
            type="text" placeholder="Phone number or email"
         />

         <label className="font-bold mt-2">Password</label>
         <input
            className="p-2.5 border rounded-sm w-full"
            type="text" placeholder="Password"
         />

         <label className="font-bold mt-2">Birthday Date</label>
         <div className="flex flex-row gap-1.5">
            <input
               className="p-2.5 border rounded-sm w-full"
               type="text" placeholder="Day"
            />
            <input
               className="p-2.5 border rounded-sm w-full"
               type="text" placeholder="Month"
            />
            <input
               className="p-2.5 border rounded-sm w-full"
               type="text" placeholder="Year"
            />
         </div>

         <label className="font-bold mt-2">Name</label>
         <input
            className="p-2.5 border rounded-sm w-full"
            type="text" placeholder="Complete Name"
         />

         <label className="font-bold mt-2">Username</label>
         <input
            className="p-2.5 border rounded-sm w-full mb-4"
            type="text" placeholder="Username"
         />

         <Button variant="primary">Send</Button>
         <Button variant="secondary">Cancel</Button>
      </div>
   )
}
