import Cards from "./cards";

const TopSellers = () => {
  const data = {
    title: "Our Top Sellers",
    description:
      "Top sellers attract more product views and capture more sales online. Become a top vendor on MyLokaal and be featured in social media and online marketing campaigns.",
    cards: [
      {
        title: "Carlos",
        alt: "food",
        src:
          "https://images.unsplash.com/photo-1598520783945-7b4f1759e1dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        text:
          "Local student, originally from Italy. I make a delicious homemade Alfredo Linguini from a secret family recipe. You can pre-order your plate on my profile page.",
      },
      {
        title: "Belli",
        alt: "food",
        src:
          "https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        text:
          "I have 30 years of housekeeping, child care and cooking experience. I am friendly with kids and animals and enjoy taking care of house-hold needs like food shopping, laundry, cleaning and more.",
      },
      {
        title: "Manuel",
        alt: "food",
        src:
          "https://images.unsplash.com/photo-1578069244662-b289bc37025b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        text:
          "I handle general maintenance work. I have several years experience in construction and I am knowledgable about plumbing and electrical work. I am available for any size job.",
      },
    ],
  };
  return (
    <Cards
      title={data.title}
      description={data.description}
      cards={data.cards}
      borderRadius={6}
      bg="#ebc8b2"
      textColor="gray.800"
    />
  );
};

export default TopSellers;
