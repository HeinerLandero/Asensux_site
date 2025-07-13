import PropTypes from "prop-types";

export default function ServiceCard({ title, icon, text }) {
  return (
    <div className="bg-gradient-to-b from-darkGreen to-richBlack p-6 rounded-2xl border border-[#004e3a] shadow-xl transform hover:scale-[1.03] transition-all duration-300 hover:border-caribbeanGreen hover:shadow-neonGreen">
      <div className="flex items-center justify-center mb-4">
        <div className="text-4xl bg-[#00392c] text-caribbeanGreen rounded-full p-4 shadow-md">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-antiFlashWhite text-center mb-2">
        {title}
      </h3>
      <p className="text-sm text-stone text-center">{text}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
