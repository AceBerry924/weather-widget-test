import styled from "styled-components";

const WeatherContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    padding: 0;
    width: 700px;
  }

  h3 {
    color: #3d5463;
  }

  .search-box {
    display: flex;
    align-items: center;

    button {
      background-color: #4caf50;
      border: none;
      color: white;
      padding: 10px 28px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
      border-radius: 0.25rem;
      margin-left: 1.5rem;

      &:focus {
        outline: 0;
      }
    }

    input {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;

      &:hover,
      &:focus {
        outline: 0;
        border-color: #d48850;
      }
    }
  }

  .result-box {
    padding: 1.25rem;
    margin-top: 1.5rem;
    border: 3px solid #5d7483;
    border-radius: 1rem;

    p {
      margin: 0;
      font-size: 1rem;

      &.xl {
        font-weight: 500;
        text-transform: capitalize;
      }
    }
  }

  .weather-info {
    h4 {
      margin: 0;
    }

    &__today {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__extra {
      text-align: left;
    }
    &__forecast {
      padding-top: 1rem;
    }
  }

  .daily-weather {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (min-width: 768px) {
      justify-content: space-between;
    }

    &__item {
      width: 33.333333333333%;

      @media (min-width: 768px) {
        width: 16.6666%;
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default WeatherContainer;
