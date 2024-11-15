import styled from "styled-components";

export const Nav = styled.nav<{ openMenu: boolean; }>`
  max-width: 1536px;
  margin: 0 auto;

  .navbar-list {
    display: flex;
    gap: 4.8rem;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.6rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    position: relative;
    z-index: 1000;

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
    }

    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      transform: ${({ openMenu }) => (openMenu ? "translateX(0)" : "translateX(100%)")};
      visibility: ${({ openMenu }) => (openMenu ? "visible" : "hidden")};
      opacity: ${({ openMenu }) => (openMenu ? "1" : "0")};
      transition: all 0.3s ease;
      z-index: 999;

      li .navbar-link {
        font-size: 4.2rem;
      }
    }

    .mobile-navbar-btn .mobile-nav-icon.menu-icon {
      display: ${({ openMenu }) => (openMenu ? "none" : "block")};
    }

    .mobile-navbar-btn .mobile-nav-icon.close-icon {
      display: ${({ openMenu }) => (openMenu ? "block" : "none")};
    }
  }
`;
