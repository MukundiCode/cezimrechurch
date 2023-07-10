const FormField = ({form}) => {
    return (
        <div class="form-group mt-3">
            <input  value={form.value} 
                    onChange={(e) => form.onChange(e.target.value)} 
                    type= {form.type == null ? "text" : form.type} 
                    class="form-control" 
                    id={form.id}
                    placeholder={form.placeholder}>
            </input>
        </div>
    )

}

export default FormField