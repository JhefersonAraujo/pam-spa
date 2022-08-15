const Card = ({value, label}) => {
  return (
    <>
        <div class="card center">
            <p className="card-value">
                {value}
                <span className="card-name">
                    {label}
                </span>
            </p>
        </div>
    </>
  );
}

export default Card;