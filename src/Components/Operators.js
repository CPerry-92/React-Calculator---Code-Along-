// Defining the buttons array
const Operators = ({handleClick}) => {
    const operaterButtons = ["+","-","*","/"];

    // Mapping through the buttons
    return (
        <div>
            {operaterButtons.map((button) => (
                <button key={button} onClick={handleClick}>
                    {button}
                </button>
            ))}
        </div>
    )
}

export default Operators