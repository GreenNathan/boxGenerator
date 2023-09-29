
const BoxMaker = ({boxers}) => {
    const formHandler = (e) => {
        e.preventDefault();
    boxers(e.target[0].value)
    e.target[0].value = ''
    }
    return (
        <div>
            <fieldset>
                <legend>Boxier</legend>
                <form onSubmit={formHandler}>
                    <label>Color</label>
                    <input/>
                    <button>Add</button>
                </form>
            </fieldset>
        </div>
    );
}

export default BoxMaker