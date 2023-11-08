import * as React from "react"
import styled from "styled-components"

const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: #000;
  opacity: 0.6;
  background-image: linear-gradient(
    43deg,
    #509268 0%,
    #956a35 25%,
    #9ba18a 50%,
    #b0a38f 75%,
    #9eb897 100%
  );
`

const Separator = () => <Divider />

export default Separator
