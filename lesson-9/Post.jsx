export function Post(props){
    const {console, name} = props   // Деструктуризация
    
    return <h1 onClick={console}>{name}</h1>
}