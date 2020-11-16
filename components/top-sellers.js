import Cards from "./cards";

const TopSellers = () => {
  const data = {
    title: "Our Top Sellers",
    description:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
    cards: [
      {
        title: "Carlos",
        alt: "food",
        src:
          "https://images.unsplash.com/photo-1598520783945-7b4f1759e1dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        text:
          "Lorem eference site about Lorem Ipsum, giving information on its origins, as well as a random",
      },
      {
        title: "Belli",
        alt: "food",
        src:
          "https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        text:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
      },
      {
        title: "Tito",
        alt: "food",
        src:
          "https://images.unsplash.com/photo-1578069244662-b289bc37025b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        text:
          " Beference site about Lorem Ipsum, giving information on its origins, as well as a random",
      },
    ],
  };
  return (
    <Cards
      title={data.title}
      description={data.description}
      cards={data.cards}
      borderRadius="none"
      bg="#ebc8b2"
      textColor="gray.800"
    />
  );
};

export default TopSellers;
