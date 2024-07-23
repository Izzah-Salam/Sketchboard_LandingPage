import bg from "../img/2.jpg";

const Section = () => {
  return (
    <div>
      <div>
        <h1>
          Skateboarding <br /> done right
        </h1>
        <p>wooden longboard in best quality for skateboard lovers</p>
        <div>
          <p>Order Now</p>
          <span>arrow</span>
        </div>
      </div>
      <div>
        <img src={bg} alt="A boy doing skateboard" />
      </div>
      <div>
        <div>
          <div>icon</div>
          <div>
            <p>Color</p>
            <span>Yellow</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
