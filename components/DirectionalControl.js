import T from 'prop-types';

const DirectionalControl = ({ as, className, children, filled, secondary, ...rest }) => {
  const that = {
    as
  };
  return (
    <that.as
      className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${
        filled ? 'dir-control--filled' : ''
      } ${className}`}
      {...rest}>
      {children}
      <span className="inline-block absolute z-1" />
      <span className="inline-block absolute z-1" />
      <span className="inline-block absolute z-1" />
      <span className="inline-block absolute z-1" />
      <b
        className="border-2 font-bold absolute transition-all rounded-full flex items-center justify-center"
        aria-hidden="true">
        {children}
      </b>
      <b
        className="border-2 font-bold absolute transition-all rounded-full flex items-center justify-center"
        aria-hidden="true">
        {children}
      </b>
      <b
        className="border-2 font-bold absolute transition-all rounded-full flex items-center justify-center"
        aria-hidden="true">
        {children}
      </b>
      <b
        className="border-2 font-bold absolute transition-all rounded-full flex items-center justify-center"
        aria-hidden="true">
        {children}
      </b>
    </that.as>
  );
};
DirectionalControl.propTypes = {
  as: T.oneOf(['button', 'a'])
};
DirectionalControl.defaultProps = {
  as: 'a'
};

export default DirectionalControl;
