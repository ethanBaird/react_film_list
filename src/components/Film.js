const Film = ({name, url}) => {
    return (
        <h3>
            <a href={url}>{name}</a>
        </h3>
    )
}

export default Film;