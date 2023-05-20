const Input = props => {
    return ( 
        <input type="text" className="dark:bg-dark-200 w-full max-w-lg text-dark-100 dark:text-gray-200 rounded-full py-1 pl-5 outline-none placeholder:tect-gray-400 placeholder:dark:text-gray-600 placeholder:text-sm placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2 focus:invalid:border-red-400" {...props}/>
     );
}
 
export default Input;