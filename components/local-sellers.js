import Cards from "./cards";

const LocalSellers = () => {
  const data = {
    title: "Local Sellers",
    description:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
    cards: [
      {
        title: "Food",
        alt: "food",
        src:
          "https://images.unsplash.com/photo-1500912239908-4ee48acb3a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        text:
          "Lorem eference site about Lorem Ipsum, giving information on its origins, as well as a random",
      },
      {
        title: "Services",
        alt: "food",
        src:
          "https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
        text:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random",
      },
      {
        title: "Products",
        alt: "food",
        src:
          "https://images.unsplash.com/photo-1605264964528-06403738d6dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
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
      borderRadius="full"
      bg="blue.800"
      textColor="white"
    />
  );
};

export default LocalSellers;
