
const PropsExample = (props) => {
    console.log(props);
    const { heading, para } = props;
    return (
        <div>
            <h1>{heading}</h1>
            <p>{para}</p>
        </div>
    )
}

export default PropsExample
