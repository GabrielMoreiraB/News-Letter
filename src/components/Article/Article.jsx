const Article = ({title, text, tags, image, alt}) => {
    return ( 
        <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shaddow-xl flex flex-col items-center">
            <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
            <div className="w-full sm:flex justify-end gap-2 pr-5 hidden">
                {
                    tags.map(tag => <span key={tag} className="bg-alura-100 dark:bg-dark-100 px-3 py-1 rounded-full text-gray-200 dark:text-gray-400 text-xs uppercase font-bold">{tag}</span>)
                }
            </div>
            <div className="grid gap-1 ">
                {text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-200">{content}</p>)}
            </div>
        {image && <img className="sm:p-4" src={image}/>}
        {image && alt && <span className="sr-only">{alt}</span>}
        </div>
     );
}
 
export default Article;