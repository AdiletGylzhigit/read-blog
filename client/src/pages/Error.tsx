type Props = {};

const Error = ({}: Props) => {
  return (
    <div className="error">
      <h1>Opps, something went wrong</h1>
      <p><span>404</span> Not found!</p>
    </div>
  );
};

export default Error;
