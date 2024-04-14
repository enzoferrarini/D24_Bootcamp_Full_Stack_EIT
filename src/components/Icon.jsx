function Icon({icon, onClickFunction}) {
    return (
        <i 
            className={icon} 
            onClick={onClickFunction} >
        </i>
    )
}

export default Icon