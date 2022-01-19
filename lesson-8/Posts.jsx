import {Post} from './Post'

export function Posts(props){
    return (
        <div className='posts'>
            {props.posts.map((post) => (
                <Post key={post.id} name={post.name} console={props.console} />
            ))}
        </div>
    )
}