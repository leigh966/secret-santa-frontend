import Snowflake from "./Snowflake";

const NUM_SNOWFLAKES = 250;

function SnowStorm() {
  let snowflakes = [];
  for (let i = 0; i < NUM_SNOWFLAKES; i++) {
    snowflakes.push(<Snowflake />);
  }
  return snowflakes;
}

export default SnowStorm;
