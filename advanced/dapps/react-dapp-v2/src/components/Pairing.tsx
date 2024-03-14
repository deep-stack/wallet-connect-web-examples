import * as React from "react";
import styled from "styled-components";

import { PairingTypes } from "@walletconnect/types";

import Peer from "./Peer";

interface PairingProps {
  pairing: PairingTypes.Struct;
  onClick?: any;
}

const SPairingContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Pairing = (props: PairingProps) => {
  const { peerMetadata, topic } = props.pairing;
  return (
    <SPairingContainer onClick={props.onClick}>
      <div>
        {typeof peerMetadata !== "undefined" ? (
          <Peer oneLiner metadata={peerMetadata} topic={topic} />
        ) : (
          <div>{`Unknown Wallet`}</div>
        )}
      </div>
    </SPairingContainer>
  );
};

export default Pairing;
