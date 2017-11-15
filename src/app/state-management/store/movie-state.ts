export interface movie {
    id:number,
    name:string,
    genre:string
}
export const initialState: movie[] = [
        {
            id:1,
            name:'Castaway',
            genre:'Drama'
        },
        {
            id:2,
            name:'Argo',
            genre:'Thriller'
        }
]