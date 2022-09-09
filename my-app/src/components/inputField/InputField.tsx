function InputField (props: any) {

    return(
        <input
        type={props.type}
        value={props.value}
        className={props.className}
        placeholder={props.placeholder}
        />
    );

}
  
  export default InputField;