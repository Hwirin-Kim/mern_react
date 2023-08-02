import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface BackDropPortalProps {
  onClose: () => void;
}

export default function BackDropPortal({ onClose }: BackDropPortalProps) {
  const content = <StContainer onClick={onClose} />;
  const root = document.getElementById("backdrop")!;
  return ReactDOM.createPortal(content, root);
}

const StContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;
