export default function TeacherBox({
  name,
  carrier,
}: {
  name: string;
  carrier: string;
}) {
  return (
    <div className="teacher">
      <a href="#" className="teacher__img">
        <img src="src/assets/images/about-us/profile.jpg" alt="" />
      </a>
      <div className="teacher__info">
        <h2 className="teacher__name">
          <a href="#">{name}</a>
        </h2>
        <h3 className="teacher__carrier">{carrier}</h3>
        <div className="teacher__socials">
          <a href="#" className="teachers__social">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="teachers__social">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="teachers__social">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
