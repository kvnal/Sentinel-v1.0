import axios from 'axios';
import {useForm} from 'react-hook-form'

const NewRecord = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("/api/record",data).then(res=>console.log(res.data))
    };
    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input className="text-black" {...register("name")}  type="text" placeholder = "Full Name" />
            <input className="text-black"  {...register("occupation")}  type="text" placeholder = "Occupation" />
            <input className="text-black"  {...register("aadhaar")} type="text" placeholder = "Aadhaar" />
            <section >
                <label >
                <input checked type="radio" {...register("relation")} value="outsider" name="relation"/>
                Outsider
                </label>
                <label >
                <input type="radio"  {...register("relation")}  value="relation" name="relation"/>
                Relative
                </label>
            </section>
            <input className="text-black"  type="text" placeholder = "Address" />
                
                <input type="submit" />
            </div>
            </form>
        </div>
     );
}
 
export default NewRecord;