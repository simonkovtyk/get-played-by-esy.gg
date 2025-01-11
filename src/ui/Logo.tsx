interface Props {
  width?: number;
  height?: number;
}

const Logo = (props: Props) => {
  return (
    <svg style={{ width: props.width, height: props.height }} xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 221 45">
      <path fill="#fff" d="m80.3.2-4 11.3H33.5L31.7 17h35.5l-3.8 9.5H28L25.4 34H68l-4 11H.1L16.3.2h64Zm73 0L149 11h-42.5l-2.1 6.3h33c2.2 0 4.2.7 5.8 2.2a5 5 0 0 1 1.6 5.3l-5.4 12.7c-.5 2.1-2 4-4.4 5.3a15.8 15.8 0 0 1-8.2 2.2H73.6l4.2-12h42.5l1-5.2H89.6c-2.2 0-4.1-.8-5.7-2.2a5 5 0 0 1-1.7-5.3l5.3-12.8a9 9 0 0 1 4.2-5.3 14.1 14.1 0 0 1 7.5-2h54.2Zm8.9 44.7 7-19.7L157 .2l21.2.2 4.9 9.9.5 1.2c.3.6.5 1 .6 1.6a6.7 6.7 0 0 1 .2 1.6 9 9 0 0 1 1-1.4 397.4 397.4 0 0 1 1.7-1.9 49.2 49.2 0 0 1 1.4-1.4L199.7.2h21l-30.6 25.6-6.7 19h-21.2Z"/>
    </svg>
  );
};

export default Logo;
