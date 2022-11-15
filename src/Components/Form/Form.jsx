import { useContext } from "react";
import {useForm} from "react-hook-form";
import { MemeContext } from "../../Context/MemeContext";
import "./Form.scss";

const Form = () => {
    const {register, watch} =useForm();
    const {text, setText} = useContext(MemeContext);

    return(
        <div className="formulario">
            <form>
                <div className="form">
                    <label>TOP TEXT:
                        <input type="text" {...register("top")} onInput={()=> {setText({...text, top: watch("top")})}}></input>
                    </label>
                    <label>TOP X:
                        <input type="number" {...register("topX")} onInput={()=> {setText({...text, topX: watch("topX")})}}></input>
                    </label>
                    <label>TOP Y:
                        <input type="number" {...register("topY")} onInput={()=> {setText({...text, topY: watch("topY")})}}></input>
                    </label>   
                </div>
                <div className="form">
                    <label>BOTTOM TEXT:
                        <input type="text" {...register("bottom")} onInput={()=> {setText({...text, bottom: watch("bottom")})}}></input>
                    </label>
                    <label>BOTTOM X:
                        <input type="number" {...register("bottomX")} onInput={()=> {setText({...text, bottomX: watch("bottomX")})}}></input>
                    </label>
                    <label>BOTTOM Y:
                        <input type="number" {...register("bottomY")} onInput={()=> {setText({...text, bottomY: watch("bottomY")})}}></input>
                    </label>   
                </div>
            </form>
        </div>
    )
}

export default Form;