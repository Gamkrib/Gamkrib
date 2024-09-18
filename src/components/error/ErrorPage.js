import { useRouteError } from "react-router-dom";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { DashBoardNavContainer } from "../../utils/modules/modules";
import styled from "styled-components";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <ErrorpageContainer>
        <h1 className="">Oops!</h1>
        <Player
          loop
          src="https://assets3.lottiefiles.com/private_files/lf30_n7pcxz8z.json"
          style={{ height: "40rem", width: "40rem" }}
          className="player"
        >
          <Controls visible={false} buttons={["play", "repeat"]} />
        </Player>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </ErrorpageContainer>
    </div>
  );
}

const ErrorpageContainer = styled(DashBoardNavContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
