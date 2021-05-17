//Component for handling the Madlibs form.

function MadlibForm({submitHandle, changeHandle}) {
    return (
        <form onSubmit={submitHandle}>
            <input type="text" name="noun1" onChange={changeHandle} placeholder="Noun 1" required/>
            <input type="text" name="noun2" onChange={changeHandle} placeholder="Noun 2" required/>
            <input type="text" name="adj1" onChange={changeHandle} placeholder="Adjective 1" required/>
            <input type="text" name="adj2" onChange={changeHandle} placeholder="Adjective 2" required/>
            <input type="text" name="verb" onChange={changeHandle} placeholder="Verb (Past Tense)" required/>
            <button>Submit</button>
        </form>
    )
}

export default MadlibForm
