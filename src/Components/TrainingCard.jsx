import PropTypes from 'prop-types';

export default function TrainingCard(props) {
  return (
    <>
      <div className="bg-[#8CB1FF99] p-2 mt-5 rounded-md flex items-center justify-between">
        <div>
          <p className="text-lg mb-2">{props.heading}</p>
          {props.bodyParts.map((part, index) => {
              return (
                  <p key={index} className="text-sm">{part} </p>
              );
          })}
        </div>
        <div>
            <img src={props.src} alt="Image of exercise" className="w-[80%]" />
        </div>
      </div>
    </>
  );
}

TrainingCard.propTypes = {
  heading: PropTypes.string.isRequired,
  bodyParts: PropTypes.arrayOf(PropTypes.string).isRequired,
  src: PropTypes.string.isRequired,
};
