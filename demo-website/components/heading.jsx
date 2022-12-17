function Heading(props) {
    return (
      <>
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" title="prop">
        {props.h1}
        </h1>
      </>
    );
}

export default Heading;