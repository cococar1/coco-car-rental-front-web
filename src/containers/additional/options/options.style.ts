import { colors } from "@/styles/theme";
import styled from "styled-components";

export const ContainerOptions = styled.div`
  display: flex;
`;

export const Item = styled.p<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? `${colors.textOrage}` : "#aeb7c1")};
  border: 1px solid #aeb7c1;
  padding: 10px 20px;
  cursor: pointer;
`;
