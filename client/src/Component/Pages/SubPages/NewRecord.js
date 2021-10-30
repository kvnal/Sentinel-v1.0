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
            <input className="mt-4 text-white border-sentinel-l2-g-blue p-2  border-2 bg-sentinel-body-blue w-full" {...register("name")}  type="text" placeholder = "Full Name" />
            <input className="mt-4 text-white border-sentinel-l2-g-blue p-2  border-2 bg-sentinel-body-blue w-full"  {...register("occupation")}  type="text" placeholder = "Occupation" />
            <input className="mt-4 text-white border-sentinel-l2-g-blue p-2  border-2 bg-sentinel-body-blue w-full"  {...register("aadhaar")} type="text" placeholder = "Aadhaar" />
            <section  className="flex justify-around mt-2">
                <label >
                <input checked type="radio" {...register("relation")} value="outsider" name="relation"/>
                Outsider
                </label>
                <label >
                <input type="radio"  {...register("relation")}  value="relation" name="relation"/>
                Relative
                </label>
            </section>
            <input className="mt-4 text-white border-sentinel-l2-g-blue p-2  border-2 bg-sentinel-body-blue w-full"  type="text" placeholder = "Address" />
                
                <input type="submit" className="bg-sentinel-l2-g-blue text-sentinel-body-blue font-medium px-4 py-1 w-full mt-2 "/>
            </div>
            </form>
        </div>
     );
}
 
export default NewRecord;