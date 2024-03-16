function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark">
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
        <h4 className="text-white">{props.subtitle}</h4>
        <p className="text-white small">{props.hiddenmessage}</p>
      </div>
    </header>
  );
}

export default Header;
