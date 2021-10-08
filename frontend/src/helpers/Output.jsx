function Output({ message, error }) {
  return <div className={error ? 'output error' : 'output'}>{message}</div>;
}
export default Output;
