import {useForm} from "react-hook-form";
import "./form.scss";

function Contacts() {

    const {register, formState: {errors}, handleSubmit, reset,} = useForm({ mode: "onBlur" });

    const onSubmit = (formData) => {
        console.log(formData);
        reset();
    }
    return(
        <section className="contacts" id="contacts">
        <div className="contacts__inner">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Your frist name: <br />
                        <input {...register("fristName", {
                            required: "Filed can't be empty",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 chars",
                            }
                        })} 
                        placeholder="Your frist name" type="text" />
                    </label>
                    <p>
                        {errors?.fristName && (
                            <span>{errors?.fristName.message || "Error!"}</span>
                        )}
                    </p>

                    <label htmlFor="">Your second name: <br />
                        <input {...register("secondName", {
                            required: "Filed can't be empty",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 chars",
                            }
                        })}
                        placeholder="Your second name" type="text" />
                    </label>
                    <p>
                        {errors?.secondName && (
                            <span>{errors?.secondName.message || "Error!"}</span>
                        )}
                    </p>

                    <label htmlFor="">Your Email: <br />
                        <input {...register("email", {
                            required: "Filed can't be empty",
                            pattern: {
                                value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
                                message: "Invalid email adres",
                            }
                        })} placeholder="Your Email" type="text" />
                    </label>
                    <p>
                        {errors?.email && (
                            <span>{errors?.email.message || "Error!"}</span>
                        )}
                    </p>

                <button type="submit">Submit</button>
            </form>
        </div>
        </section>
    );
};

export default Contacts;