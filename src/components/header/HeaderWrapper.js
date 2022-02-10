export default function HeaderWrapper(props) {
  return (
    <header className="container">
      <div className="row">
        <div className="col">{props.children}</div>
      </div>
    </header>
  );
}
