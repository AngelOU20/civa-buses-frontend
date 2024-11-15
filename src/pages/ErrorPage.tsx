import {
  BackButton,
  ContentWrapper,
  ErrorCode,
  ErrorPageContainer,
  Logo,
  Message,
  Title,
} from "./Error.styled";
import logo from "/logo.webp";

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ContentWrapper>
        <Logo src={logo} alt="logo" />
        <ErrorCode>404</ErrorCode>
        <Title>Página no encontrada</Title>
        <Message>
          Lo sentimos, no pudimos encontrar la página que buscas.
        </Message>
        <BackButton to="/">Volver al inicio</BackButton>
      </ContentWrapper>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
