const Greetings = props => {
   
    let lang = props.lang
   
   let greeting;
   if(lang ==='de'){
       greeting= 'hallo'
   } else
   if(lang ==='es'){
       greeting= 'hola'
   } else
   if(lang ==='en'){
       greeting= 'hello'
   }else
   if(lang ==='fr'){
       greeting= 'bonjour'
   }
    return (
        <article>
            <p>{greeting} {props.children}</p>
        </article>
    )
}
export default Greetings;