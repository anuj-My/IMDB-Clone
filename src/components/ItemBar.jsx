import styled from "styled-components";

const ProdCompanies = styled.div`
  margin-top: 7rem;
  display: grid;
  place-items: center;
  background-color: #e6e6e6;
  width: 100%;
  padding: 3rem;
`;
const ProdTitle = styled.div`
  font-size: 4rem;
  color: black;
  font-weight: 500;
  margin-bottom: 4.5rem;
  text-transform: capitalize;

  @media screen and (max-width: 760px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 2rem;
  }
`;
const Companies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

const CompanyContainer = styled.div`
  width: 20rem;

  @media screen and (max-width: 760px) {
    width: 14rem;
  }

  @media screen and (max-width: 560px) {
    width: 9rem;
  }

  @media screen and (max-width: 380px) {
    width: 7rem;
  }
`;

const CompanyLogo = styled.img`
  width: 100%;
`;

const CompanyName = styled.span`
  font-size: 1.4rem;
  border-radius: 3rem;
  padding: 2rem 3rem;
  color: white;
  background-color: black;

  @media screen and (max-width: 760px) {
    padding: 1.4rem 2rem;
  }

  @media screen and (max-width: 560px) {
    padding: 1.2rem 1.6rem;
  }
`;

const ItemBar = ({ items }) => {
  return (
    <ProdCompanies>
      <ProdTitle>Production Companies</ProdTitle>
      <Companies>
        {items?.length ? (
          items.map((company) => {
            return (
              <CompanyContainer key={company?.id}>
                {company?.logo_path ? (
                  <CompanyLogo
                    src={`https://image.tmdb.org/t/p/w500${company?.logo_path}`}
                  />
                ) : (
                  <CompanyName key={company?.id}>{company?.name}</CompanyName>
                )}
              </CompanyContainer>
            );
          })
        ) : (
          <span style={{ color: "black" }}>No companies are mentioned.</span>
        )}
      </Companies>
    </ProdCompanies>
  );
};

export default ItemBar;
