

// eslint-disable-next-line react/prop-types
export default function SearchBar({onSearch}){

    const handleChange = (event) => {
        console.log(event.target.value)
        onSearch(event.target.value)
    }
    return <div>
        <form action="">
            <input type="text" 
                placeholder="Search an article"
                onChange={handleChange}
            />
        </form>
    </div>
}