import Input from "../Input/Input";

const Form = ({onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;

        onSubmit({name, email})
    }
    return ( 
        <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center h-full -mt-32 gap-8 m-5">
            <Input type="text" required placeholder="Insira seu nome..." />
            <Input type="email" required placeholder="Insira seu e-mail..."/>
            <button type="submit" className="bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 py-1 px-5 font-bold hover:animate-pulse hover:shadow-sm hover:shadow-gray-500">Seguir</button>
        </form>
     );
}
 
export default Form;